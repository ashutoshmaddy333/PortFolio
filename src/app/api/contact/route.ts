import { connectToDatabase } from "@/lib/mongodb";
import { ContactSubmission } from "@/models/ContactSubmission";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  inquiryType?: string;
  name?: string;
  email?: string;
  companyName?: string;
  roleTitle?: string;
  budget?: string;
  projectType?: string;
  message?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM_EMAIL;
  const ownerTo = process.env.CONTACT_TO_EMAIL;

  if (!host || !user || !pass || !from || !ownerTo) {
    throw new Error("Missing SMTP env vars. Check SMTP_* and CONTACT_TO_EMAIL.");
  }

  return { host, port, user, pass, from, ownerTo };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function ownerMailHtml(payload: Required<ContactPayload>) {
  const submittedAt = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return `
  <div style="font-family:Inter,Segoe UI,Arial,sans-serif;background:#070b14;padding:28px;color:#e5e7eb">
    <div style="max-width:720px;margin:0 auto;background:#0f172a;border:1px solid #1e293b;border-radius:18px;overflow:hidden;box-shadow:0 18px 45px rgba(0,0,0,.35)">
      <div style="padding:18px 22px;background:linear-gradient(90deg,#2563eb,#14b8a6);color:#ffffff">
        <p style="margin:0;font-size:12px;letter-spacing:.14em;opacity:.9">PORTFOLIO CONTACT</p>
        <h2 style="margin:8px 0 0 0;font-size:20px;line-height:1.3">New Project Inquiry Received</h2>
      </div>
      <div style="padding:22px">
        <div style="margin:0 0 14px 0;padding:10px 12px;border-radius:10px;background:#0b1220;border:1px solid #1f2937;color:#94a3b8;font-size:12px">
          Submitted: <span style="color:#e2e8f0">${escapeHtml(submittedAt)}</span>
        </div>
        <table style="width:100%;border-collapse:separate;border-spacing:0 8px">
          <tr>
            <td style="padding:10px 12px;background:#111827;border:1px solid #1f2937;border-radius:10px;color:#94a3b8;width:150px">Inquiry Type</td>
            <td style="padding:10px 12px;background:#111827;border:1px solid #1f2937;border-radius:10px;color:#f8fafc">${escapeHtml(payload.inquiryType)}</td>
          </tr>
          <tr>
            <td style="padding:10px 12px;background:#111827;border:1px solid #1f2937;border-radius:10px;color:#94a3b8;width:150px">Name</td>
            <td style="padding:10px 12px;background:#111827;border:1px solid #1f2937;border-radius:10px;color:#f8fafc">${escapeHtml(payload.name)}</td>
          </tr>
          <tr>
            <td style="padding:10px 12px;background:#111827;border:1px solid #1f2937;border-radius:10px;color:#94a3b8">Email</td>
            <td style="padding:10px 12px;background:#111827;border:1px solid #1f2937;border-radius:10px;color:#f8fafc">${escapeHtml(payload.email)}</td>
          </tr>
          ${
            payload.inquiryType === "Full-time Recruiter"
              ? `<tr>
            <td style="padding:10px 12px;background:#111827;border:1px solid #1f2937;border-radius:10px;color:#94a3b8">Company</td>
            <td style="padding:10px 12px;background:#111827;border:1px solid #1f2937;border-radius:10px;color:#f8fafc">${escapeHtml(payload.companyName)}</td>
          </tr>
          <tr>
            <td style="padding:10px 12px;background:#111827;border:1px solid #1f2937;border-radius:10px;color:#94a3b8">Role Title</td>
            <td style="padding:10px 12px;background:#111827;border:1px solid #1f2937;border-radius:10px;color:#f8fafc">${escapeHtml(payload.roleTitle)}</td>
          </tr>`
              : ""
          }
          <tr>
            <td style="padding:10px 12px;background:#111827;border:1px solid #1f2937;border-radius:10px;color:#94a3b8">Budget</td>
            <td style="padding:10px 12px;background:#111827;border:1px solid #1f2937;border-radius:10px;color:#f8fafc">${escapeHtml(payload.budget)}</td>
          </tr>
          <tr>
            <td style="padding:10px 12px;background:#111827;border:1px solid #1f2937;border-radius:10px;color:#94a3b8">Project Type</td>
            <td style="padding:10px 12px;background:#111827;border:1px solid #1f2937;border-radius:10px;color:#f8fafc">${escapeHtml(payload.projectType)}</td>
          </tr>
        </table>
        <div style="margin-top:16px;padding:14px;border-radius:12px;border:1px solid #334155;background:#0b1220">
          <p style="margin:0 0 8px 0;color:#93c5fd;font-size:12px;letter-spacing:.08em">MESSAGE</p>
          <p style="margin:0;white-space:pre-wrap;line-height:1.65;color:#e2e8f0">${escapeHtml(payload.message)}</p>
        </div>
        <div style="margin-top:14px;color:#64748b;font-size:12px">
          Reply directly to this email to contact <strong style="color:#94a3b8">${escapeHtml(payload.name)}</strong>.
        </div>
      </div>
    </div>
  </div>
  `;
}

function autoReplyHtml(payload: Required<ContactPayload>) {
  const submittedAt = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return `
  <div style="font-family:Inter,Segoe UI,Arial,sans-serif;background:#f1f5f9;color:#0f172a;padding:26px">
    <div style="max-width:700px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:18px;overflow:hidden;box-shadow:0 14px 35px rgba(2,6,23,.08)">
      <div style="padding:18px 22px;background:linear-gradient(90deg,#2563eb,#0ea5e9);color:#fff">
        <p style="margin:0;font-size:12px;letter-spacing:.12em;opacity:.95">ASHUTOSH KUMAR</p>
        <h2 style="margin:8px 0 0 0;font-size:20px;line-height:1.3">Thanks for your message!</h2>
      </div>
      <div style="padding:22px">
        <p style="margin:0 0 14px 0">Hi ${escapeHtml(payload.name)},</p>
        <p style="margin:0 0 12px 0;line-height:1.7;color:#334155;font-size:14px">
          I received your message from my portfolio website. Thank you for sharing your project details.
          I will review your requirements and get back to you soon.
        </p>
        <p style="margin:0 0 14px 0;line-height:1.7;color:#334155;font-size:14px">
          Typical response time is within 24 hours.
        </p>
        <div style="margin:16px 0 0 0;padding:14px;border-radius:12px;background:#f8fafc;border:1px solid #e2e8f0">
          <p style="margin:0 0 10px 0;color:#2563eb;font-size:12px;letter-spacing:.08em">YOUR SUBMISSION DETAILS</p>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:5px 0;color:#64748b;width:130px;font-size:13px">Inquiry Type</td><td style="padding:5px 0;color:#0f172a;font-size:13px">${escapeHtml(payload.inquiryType)}</td></tr>
            <tr><td style="padding:5px 0;color:#64748b;width:130px;font-size:13px">Name</td><td style="padding:5px 0;color:#0f172a;font-size:13px">${escapeHtml(payload.name)}</td></tr>
            <tr><td style="padding:5px 0;color:#64748b;font-size:13px">Email</td><td style="padding:5px 0;color:#0f172a;font-size:13px">${escapeHtml(payload.email)}</td></tr>
            ${
              payload.inquiryType === "Full-time Recruiter"
                ? `<tr><td style="padding:5px 0;color:#64748b;font-size:13px">Company</td><td style="padding:5px 0;color:#0f172a;font-size:13px">${escapeHtml(payload.companyName)}</td></tr>
            <tr><td style="padding:5px 0;color:#64748b;font-size:13px">Role Title</td><td style="padding:5px 0;color:#0f172a;font-size:13px">${escapeHtml(payload.roleTitle)}</td></tr>`
                : ""
            }
            <tr><td style="padding:5px 0;color:#64748b;font-size:13px">Budget</td><td style="padding:5px 0;color:#0f172a;font-size:13px">${escapeHtml(payload.budget)}</td></tr>
            <tr><td style="padding:5px 0;color:#64748b;font-size:13px">Project Type</td><td style="padding:5px 0;color:#0f172a;font-size:13px">${escapeHtml(payload.projectType)}</td></tr>
            <tr><td style="padding:5px 0;color:#64748b;font-size:13px">Submitted</td><td style="padding:5px 0;color:#0f172a;font-size:13px">${escapeHtml(submittedAt)}</td></tr>
          </table>
          <div style="margin-top:10px;padding:10px;border-radius:10px;background:#ffffff;border:1px solid #e2e8f0">
            <p style="margin:0 0 6px 0;color:#64748b;font-size:12px">Message</p>
            <p style="margin:0;white-space:pre-wrap;color:#0f172a;line-height:1.6;font-size:13px">${escapeHtml(payload.message)}</p>
          </div>
        </div>
        <p style="margin:16px 0 0 0;line-height:1.6;color:#334155;font-size:14px">
          Thanks & regards,<br />
          <strong>Ashutosh Kumar</strong><br />
          Associate Software Engineer<br />
          Full-Stack Developer<br />
          Mumbai, India
        </p>
      </div>
    </div>
  </div>
  `;
}

async function sendContactEmails(payload: Required<ContactPayload>) {
  const smtp = getSmtpConfig();
  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.port === 465,
    auth: {
      user: smtp.user,
      pass: smtp.pass,
    },
  });

  await Promise.all([
    transporter.sendMail({
      from: smtp.from,
      to: smtp.ownerTo,
      replyTo: payload.email,
      subject: `New ${payload.inquiryType} Message: ${payload.name}`,
      html: ownerMailHtml(payload),
    }),
    transporter.sendMail({
      from: smtp.from,
      to: payload.email,
      subject: "Thanks for contacting Ashutosh Kumar",
      html: autoReplyHtml(payload),
    }),
  ]);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;

    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const inquiryType =
      body.inquiryType?.trim() === "recruiter"
        ? "Full-time Recruiter"
        : "Freelance Project";
    const budget = body.budget?.trim() || "";
    const projectType = body.projectType?.trim() || "";
    const message = body.message?.trim() || "";
    const companyName = body.companyName?.trim() || "";
    const roleTitle = body.roleTitle?.trim() || "";

    if (!name || !email || !budget || !projectType || !message || !inquiryType) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 },
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Please provide a valid email address." },
        { status: 400 },
      );
    }
    if (inquiryType === "Full-time Recruiter" && (!companyName || !roleTitle)) {
      return NextResponse.json(
        { message: "Company name and role title are required for recruiter inquiry." },
        { status: 400 },
      );
    }

    const payload = {
      inquiryType,
      name,
      email,
      companyName,
      roleTitle,
      budget,
      projectType,
      message,
    };

    await connectToDatabase();
    await ContactSubmission.create(payload);
    await sendContactEmails(payload);

    return NextResponse.json(
      { message: "Message sent successfully." },
      { status: 201 },
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { message: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}
