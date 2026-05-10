"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { motion } from "framer-motion";
import { useEffect, useRef, useState, type FormEvent } from "react";

const rows = [
  { ico: "✉", lbl: "EMAIL", val: "ashutoshkumarm416@gmail.com" },
  { ico: "📞", lbl: "PHONE / WHATSAPP", val: "+91 8738878776" },
  { ico: "📍", lbl: "LOCATION", val: "Mumbai, India" },
  { ico: "🕐", lbl: "AVAILABILITY", val: "Full-time + freelance" },
];

type InquiryType = "freelance" | "recruiter";

const freelanceProjectGroups = [
  {
    label: "Core Builds",
    options: [
      "Full-stack web application",
      "Backend API development (NestJS/Node.js)",
      "Frontend dashboard (React/TypeScript)",
      "Microservices architecture",
    ],
  },
  {
    label: "Specialized Systems",
    options: [
      "Real-time system (Kafka/WebSockets)",
      "Auth and security (JWT/Keycloak/RBAC)",
      "Database architecture (PostgreSQL/TypeORM)",
      "Mobile backend APIs (GPS/Geocoding)",
    ],
  },
  {
    label: "Delivery and Integrations",
    options: [
      "DevOps and Docker setup",
      "Business workflow and integrations",
      "Performance optimization and refactor",
      "Other",
    ],
  },
] as const;

const recruiterProjectGroups = [
  {
    label: "Hiring Type",
    options: [
      "Full-time Full-Stack Developer",
      "Backend Engineer (Node.js/NestJS)",
      "Frontend Engineer (React/TypeScript)",
      "Contract-to-hire opportunity",
    ],
  },
  {
    label: "Team and Domain",
    options: [
      "Product engineering team",
      "SaaS / Enterprise platform",
      "Real-time systems team",
      "Security and platform engineering",
    ],
  },
  {
    label: "Process",
    options: [
      "Immediate joiner required",
      "Interview process details",
      "Remote / onsite clarification",
      "Other hiring inquiry",
    ],
  },
] as const;

const freelanceBudgetOptions = ["$10-15/hr", "$15-25/hr", "$25-40/hr", "Let's discuss"];
const recruiterBudgetOptions = [
  "6-10 LPA",
  "10-15 LPA",
  "15-20 LPA",
  "20+ LPA",
  "Discuss compensation",
];

export function Contact() {
  const [inquiryType, setInquiryType] = useState<InquiryType>("freelance");
  const [projectType, setProjectType] = useState("Full-stack web application");
  const [projectOpen, setProjectOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [roleTitle, setRoleTitle] = useState("");
  const [budget, setBudget] = useState("$15-25/hr");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [serverMessage, setServerMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const projectGroups = inquiryType === "freelance" ? freelanceProjectGroups : recruiterProjectGroups;
  const budgetOptions =
    inquiryType === "freelance" ? freelanceBudgetOptions : recruiterBudgetOptions;

  useEffect(() => {
    const onDocClick = (event: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(event.target as Node)) {
        setProjectOpen(false);
      }
    };

    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setProjectOpen(false);
    };

    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  useEffect(() => {
    if (inquiryType === "freelance") {
      setProjectType("Full-stack web application");
      setBudget("$15-25/hr");
      return;
    }
    setProjectType("Full-time Full-Stack Developer");
    setBudget("10-15 LPA");
  }, [inquiryType]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerMessage(null);

    if (!name.trim() || !email.trim() || !budget.trim() || !projectType.trim() || !message.trim()) {
      setServerMessage({ type: "error", text: "Please fill all fields before sending." });
      return;
    }
    if (inquiryType === "recruiter" && (!companyName.trim() || !roleTitle.trim())) {
      setServerMessage({
        type: "error",
        text: "Please add company name and role title for recruiter inquiry.",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          inquiryType,
          name,
          email,
          companyName,
          roleTitle,
          budget,
          projectType,
          message,
        }),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setServerMessage({
          type: "error",
          text: data.message || "Failed to send message. Please try again.",
        });
        return;
      }

      setServerMessage({
        type: "success",
        text: data.message || "Message sent successfully. I will reply soon.",
      });
      setName("");
      setEmail("");
      setCompanyName("");
      setRoleTitle("");
      if (inquiryType === "freelance") {
        setBudget("$15-25/hr");
        setProjectType("Full-stack web application");
      } else {
        setBudget("10-15 LPA");
        setProjectType("Full-time Full-Stack Developer");
      }
      setMessage("");
    } catch {
      setServerMessage({
        type: "error",
        text: "Network error. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-[6%] py-[90px]">
      <Reveal>
        <SectionLabel>Get in touch</SectionLabel>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-14 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold tracking-tight text-text">
          Let&apos;s Build <em className="not-italic text-accent">Something</em>
        </h2>
      </Reveal>

      <div className="grid items-start gap-10 md:grid-cols-2">
        <Reveal variant="left">
          <p className="mb-8 text-[15px] leading-relaxed text-muted">
            I work full-time and take on freelance projects on the side. Fast
            replies, clean deliverables, and timezone-flexible communication.
          </p>
          <div className="flex flex-col gap-3.5">
            {rows.map((r, i) => (
              <motion.div
                key={r.lbl}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.06, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3.5 rounded-[10px] border border-border bg-surface px-4 py-4 transition-colors hover:border-bora hover:bg-surf2"
              >
                <div className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-[10px] bg-accent/10 text-[17px]">
                  {r.ico}
                </div>
                <div>
                  <div className="mb-0.5 font-mono text-[11px] text-muted">
                    {r.lbl}
                  </div>
                  <div className="font-mono text-[13px] text-text">{r.val}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <Reveal variant="right">
          <form
            className="relative overflow-hidden rounded-[22px] border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-7 shadow-[0_22px_55px_rgba(2,8,23,0.38)] md:p-9"
            onSubmit={handleSubmit}
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_10%_0%,rgba(96,165,250,0.08),transparent_55%),radial-gradient(100%_70%_at_100%_100%,rgba(52,211,153,0.06),transparent_55%)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
              aria-hidden
            />
            <div className="mb-6 grid grid-cols-2 gap-2 rounded-[12px] border border-border/80 bg-surface/60 p-1.5">
              <button
                type="button"
                onClick={() => setInquiryType("freelance")}
                className={`rounded-[10px] px-3 py-2 font-mono text-[11px] tracking-[0.08em] transition ${
                  inquiryType === "freelance"
                    ? "bg-accent text-white"
                    : "text-muted hover:bg-surf2 hover:text-text"
                }`}
              >
                Freelance Project
              </button>
              <button
                type="button"
                onClick={() => setInquiryType("recruiter")}
                className={`rounded-[10px] px-3 py-2 font-mono text-[11px] tracking-[0.08em] transition ${
                  inquiryType === "recruiter"
                    ? "bg-a2 text-bg1"
                    : "text-muted hover:bg-surf2 hover:text-text"
                }`}
              >
                Full-time Recruiter
              </button>
            </div>
            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block font-mono text-[11px] tracking-[0.14em] text-muted/95">
                  YOUR NAME
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[14px] text-muted/70">
                    👤
                  </span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-[54px] w-full rounded-[14px] border border-border/90 bg-surface/90 pr-4 pl-11 text-[15px] text-text outline-none transition placeholder:text-muted/70 focus:border-bora focus:bg-surf2 focus:shadow-[0_0_0_3px_rgba(96,165,250,0.14)]"
                    placeholder="John Smith"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block font-mono text-[11px] tracking-[0.14em] text-muted/95">
                  EMAIL
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[14px] text-muted/70">
                    ✉
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-[54px] w-full rounded-[14px] border border-border/90 bg-surface/90 pr-4 pl-11 text-[15px] text-text outline-none transition placeholder:text-muted/70 focus:border-bora focus:bg-surf2 focus:shadow-[0_0_0_3px_rgba(96,165,250,0.14)]"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
            </div>
            {inquiryType === "recruiter" && (
              <div className="mb-6 grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="block font-mono text-[11px] tracking-[0.14em] text-muted/95">
                    COMPANY NAME
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[14px] text-muted/70">
                      🏢
                    </span>
                    <input
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required={inquiryType === "recruiter"}
                      className="h-[54px] w-full rounded-[14px] border border-border/90 bg-surface/90 pr-4 pl-11 text-[15px] text-text outline-none transition placeholder:text-muted/70 focus:border-bora focus:bg-surf2 focus:shadow-[0_0_0_3px_rgba(96,165,250,0.14)]"
                      placeholder="Acme Technologies Pvt Ltd"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block font-mono text-[11px] tracking-[0.14em] text-muted/95">
                    ROLE TITLE
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[14px] text-muted/70">
                      💼
                    </span>
                    <input
                      value={roleTitle}
                      onChange={(e) => setRoleTitle(e.target.value)}
                      required={inquiryType === "recruiter"}
                      className="h-[54px] w-full rounded-[14px] border border-border/90 bg-surface/90 pr-4 pl-11 text-[15px] text-text outline-none transition placeholder:text-muted/70 focus:border-bora focus:bg-surf2 focus:shadow-[0_0_0_3px_rgba(96,165,250,0.14)]"
                      placeholder="Senior Full-Stack Developer"
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block font-mono text-[11px] tracking-[0.14em] text-muted/95">
                  {inquiryType === "freelance"
                    ? "BUDGET (USD/HR)"
                    : "COMPENSATION RANGE"}
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[14px] text-muted/70">
                    $
                  </span>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    required
                    className="h-[54px] w-full appearance-none rounded-[14px] border border-border/90 bg-surface/90 pr-11 pl-11 text-[15px] text-text outline-none transition focus:border-bora focus:bg-surf2 focus:shadow-[0_0_0_3px_rgba(96,165,250,0.14)]"
                  >
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-xs text-muted/70">
                    ▾
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block font-mono text-[11px] tracking-[0.14em] text-muted/95">
                  {inquiryType === "freelance" ? "PROJECT TYPE" : "HIRING TYPE"}
                </label>
                <div ref={dropdownRef} className="relative">
                  <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[14px] text-muted/70">
                    🧩
                  </span>
                  <span
                    className="pointer-events-none absolute inset-y-2 left-10 w-px bg-border/70"
                    aria-hidden
                  />
                  <button
                    type="button"
                    onClick={() => setProjectOpen((v) => !v)}
                    className="h-[54px] w-full rounded-[14px] border border-border/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] pr-12 pl-[3.2rem] text-left text-[15px] font-medium text-text outline-none transition hover:border-bora/70 hover:bg-surf2 focus:border-bora focus:bg-surf2 focus:shadow-[0_0_0_3px_rgba(96,165,250,0.16)]"
                    aria-haspopup="listbox"
                    aria-expanded={projectOpen}
                  >
                    <span className="line-clamp-1 pr-3">{projectType}</span>
                  </button>
                  <span
                    className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-muted/70"
                    aria-hidden
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 5.25L7 9.25L11 5.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {projectOpen && (
                    <div
                      className="absolute top-[calc(100%+8px)] z-30 max-h-[300px] w-full overflow-auto rounded-[14px] border border-border/90 bg-bg3 p-2 shadow-[0_18px_40px_rgba(2,8,23,0.55)]"
                      role="listbox"
                    >
                      {projectGroups.map((group) => (
                        <div key={group.label} className="mb-2 last:mb-0">
                          <p className="px-2 py-1 font-mono text-[10px] tracking-[0.09em] text-dim">
                            {group.label}
                          </p>
                          <div className="space-y-1">
                            {group.options.map((option) => (
                              <button
                                key={option}
                                type="button"
                                onClick={() => {
                                  setProjectType(option);
                                  setProjectOpen(false);
                                }}
                                className={`flex w-full items-center justify-between rounded-[10px] px-3 py-2.5 text-left text-[14px] transition ${
                                  projectType === option
                                    ? "bg-accent/15 text-accent"
                                    : "text-text hover:bg-surface"
                                }`}
                                role="option"
                                aria-selected={projectType === option}
                              >
                                <span className="pr-3">{option}</span>
                                {projectType === option ? (
                                  <span className="font-mono text-xs">✓</span>
                                ) : null}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-5 space-y-2">
              <label className="block font-mono text-[11px] tracking-[0.14em] text-muted/95">
                MESSAGE
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute top-4 left-4 text-[14px] text-muted/70">
                  💬
                </span>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="min-h-[185px] w-full resize-y rounded-[14px] border border-border/90 bg-surface/90 pr-5 pl-11 py-4 text-[15px] text-text outline-none transition placeholder:text-muted/55 focus:border-bora focus:bg-surf2 focus:shadow-[0_0_0_3px_rgba(96,165,250,0.14)]"
                  placeholder={
                    inquiryType === "freelance"
                      ? "Tell me about your project — what you're building, your stack, timeline..."
                      : "Share role details — team, tech stack, compensation, interview rounds, and timeline..."
                  }
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              data-cursor-hover
              className="w-full rounded-[14px] bg-accent py-4 font-mono text-[13px] tracking-[0.24em] text-white transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_12px_32px_rgba(96,165,250,0.35)] disabled:cursor-not-allowed disabled:opacity-75"
            >
              {loading ? "SENDING..." : "SEND MESSAGE ↗"}
            </button>
            {serverMessage && (
              <p
                className={`mt-3 text-center font-mono text-[11px] ${
                  serverMessage.type === "success" ? "text-a2" : "text-a4"
                }`}
              >
                {serverMessage.text}
              </p>
            )}
            <p className="mt-3 text-center font-mono text-[10px] tracking-[0.06em] text-muted">
              Typical response time: within 24 hours
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
