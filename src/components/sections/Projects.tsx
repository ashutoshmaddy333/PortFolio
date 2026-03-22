"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useState } from "react";

const internalProjects = [
  {
    icon: "📷",
    iconWrap: "bg-accent/10",
    title: "CAMS · EYE 360 AI-Vision",
    date: "2025–Present",
    desc: "Enterprise-grade Camera & Alert Management System with real-time AI analytics, live RTSP video streaming, Kafka-based sensor alerts, and a WebSocket-powered SOC operations dashboard.",
    summary:
      "Internal SOC platform focused on real-time monitoring, AI analytics, and high-throughput alert delivery.",
    highlights: [
      "Keycloak user sync + RBAC with 30+ permissions and team management",
      "ROI configuration module — draw & edit analytics zones on live camera feeds",
      "Kafka → WebSocket pipeline for real-time alert updates to SOC dashboard",
      "QC testing module for live RTSP streaming & playback validation",
      "Mobile backend APIs with GPS attendance, geocoding & cron auto-logout",
    ],
    tech: [
      "NestJS",
      "React",
      "TypeScript",
      "Kafka",
      "WebSockets",
      "RTSP",
      "FFmpeg",
      "Docker",
      "PostgreSQL",
      "Keycloak",
      "Tailwind",
    ],
    type: "Company Internal Project",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    icon: "👥",
    iconWrap: "bg-a2/10",
    title: "Resource Management Portal",
    date: "2025–Present",
    desc: "Full-stack recruitment workflow system managing the complete lifecycle — from lead intake and requirement creation to candidate interviewing and placement, with analytics and email automation.",
    summary:
      "Internal hiring operations suite streamlining lead-to-placement with automated workflows and analytics.",
    highlights: [
      "JWT auth with access/refresh tokens and rights-based authorization (30+ permissions)",
      "Modules: lead management, requirement creation with JD uploads, candidate pipeline",
      "Candidate segmentation — Bench, Placed, Released resource tracking",
      "Relational schema — foreign keys linking leads, requirements, resources, roles, users",
      "Dashboard analytics APIs + automated email notifications for workflow events",
    ],
    tech: [
      "NestJS",
      "React",
      "Redux Toolkit",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "JWT",
      "Tailwind",
    ],
    type: "Company Internal Project",
    githubUrl: "#",
    liveUrl: "#",
  },
];

const freelanceProjects = [
  {
    icon: "🌱",
    iconWrap: "bg-a2/10",
    title: "GreenTech Jobs — Job Seeker & Employer Platform",
    date: "2024–25",
    desc: "Modern recruitment platform where job seekers discover/apply to jobs, employers manage hiring pipelines, and admins control platform behavior with dynamic system settings.",
    summary:
      "Public freelance job board with multi-role architecture, dynamic controls, secure auth, and production-ready APIs.",
    highlights: [
      "Built multi-role architecture: job seeker, employer, and admin dashboards with role-based access",
      "Implemented job lifecycle: posting, browsing, saving, applying, and employer-side application review",
      "Created centralized SystemSettings engine with toggles for posting/applications, limits, fees, verification, public visibility, and maintenance mode",
      "Built secure password recovery flow with token verification, expiry handling, and Nodemailer reset emails",
      "Added guard components for posting/application rules and integrated analytics + legal/content pages",
    ],
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Mongoose",
      "NextAuth",
      "React Hook Form",
      "Zod",
      "Nodemailer",
      "Cloudinary",
      "Multer",
      "Formidable",
      "PM2",
    ],
    type: "Freelance Public Project",
    githubUrl: "https://github.com/ashutoshmaddy333/Greeno.git",
    liveUrl: "https://greeno.vercel.app/",
  },
  {
    icon: "🍛",
    iconWrap: "bg-a3/10",
    title: "The Biryani House — Restaurant Platform",
    date: "2023–24",
    desc: "Full-stack-ready restaurant web platform combining a rich customer ordering experience with an admin management panel, bilingual branding (English + Marathi), and high-quality motion-driven UI.",
    summary:
      "Real-world restaurant product with customer journey + admin operations, built using modern React architecture and production-grade frontend patterns.",
    highlights: [
      "Built dual-surface architecture: customer-facing app + dedicated admin dashboard",
      "Implemented discovery flow with search, category filters, rich dish cards, spice levels, and ratings",
      "Implemented order-intent flow with cart, item variants (size/spice), and global provider-based state continuity",
      "Developed engagement UX with responsive navigation, toasts, dark mode, and bilingual local-first content",
      "Integrated advanced foundation libraries for realtime extensibility and immersive interactions",
    ],
    tech: [
      "Next.js 15",
      "TypeScript",
      "React 19",
      "Tailwind CSS v4",
      "Framer Motion",
      "React Query",
      "React Hook Form",
      "Zod",
      "next-themes",
      "react-hot-toast",
      "lucide-react",
      "heroicons",
      "headlessui",
      "socket.io-client",
      "three",
    ],
    type: "Freelance Public Project",
    githubUrl: "https://github.com/ashutoshmaddy333/The-Biryani-House",
    liveUrl: "https://the-biryani-house-20.vercel.app",
  },
];

export function Projects() {
  const [view, setView] = useState<"internal" | "freelance">("freelance");
  const activeProjects = view === "internal" ? internalProjects : freelanceProjects;
  const currentLabel =
    view === "internal" ? "Company Internal Projects" : "Freelance Public Projects";

  return (
    <section id="projects" className="bg-bg2 px-[6%] py-[90px]">
      <Reveal>
        <SectionLabel>Selected work</SectionLabel>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-14 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold tracking-tight text-text">
          Work I&apos;ve <em className="not-italic text-accent">Shipped</em>
        </h2>
      </Reveal>

      <Reveal>
        <div className="mb-7 flex flex-wrap items-center gap-3">
          <button
            type="button"
            data-cursor-hover
            onClick={() => setView("freelance")}
            className={`rounded-lg border px-3.5 py-2 font-mono text-[11px] tracking-[0.08em] transition ${
              view === "freelance"
                ? "border-a2/35 bg-a2/12 text-a2"
                : "border-border bg-surface text-muted hover:border-bora hover:text-accent"
            }`}
          >
            🌍 Freelance Public Projects
          </button>
          <button
            type="button"
            data-cursor-hover
            onClick={() => setView("internal")}
            className={`rounded-lg border px-3.5 py-2 font-mono text-[11px] tracking-[0.08em] transition ${
              view === "internal"
                ? "border-a3/35 bg-a3/12 text-a3"
                : "border-border bg-surface text-muted hover:border-bora hover:text-accent"
            }`}
          >
            🔒 Company Internal Projects
          </button>
        </div>
      </Reveal>
      <p className="mb-5 font-mono text-[11px] tracking-[0.09em] text-dim">
        Showing: <span className="text-text">{currentLabel}</span>
      </p>

      <div className="grid auto-rows-fr grid-cols-1 gap-5 lg:grid-cols-2">
        {activeProjects.map((p, i) => (
          <Reveal key={p.title} delay={0.08 * i} className="h-full">
            <article
              data-cursor-hover
              className={`group relative flex h-full min-h-[500px] flex-col overflow-hidden rounded-[var(--r2)] border border-border bg-bg3 p-7 transition-all duration-300 before:pointer-events-none before:absolute before:top-0 before:left-[-100%] before:h-full before:w-[60%] before:bg-gradient-to-r before:from-transparent before:to-transparent before:transition-[left] before:duration-500 hover:before:left-[150%] hover:-translate-y-1 hover:border-bora hover:shadow-[var(--glow)] md:min-h-[560px] ${
                view === "internal" ? "before:via-accent/5" : "before:via-a2/8"
              }`}
            >
              <div className="mb-4 flex items-start justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl text-[22px] ${p.iconWrap}`}
                >
                  {p.icon}
                </div>
                {view === "internal" ? (
                  <span className="rounded-md border border-a3/30 bg-a3/10 px-2 py-1 font-mono text-[10px] tracking-[0.07em] text-a3">
                    Internal
                  </span>
                ) : (
                  <div className="flex gap-2">
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface text-[13px] text-muted transition-colors hover:border-bora hover:bg-surf2 hover:text-accent"
                      title="GitHub"
                    >
                      ⌘
                    </a>
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface text-[13px] text-muted transition-colors hover:border-bora hover:bg-surf2 hover:text-accent"
                      title="Live Demo"
                    >
                      ↗
                    </a>
                  </div>
                )}
              </div>
              <h3 className="mb-2.5 font-display text-[19px] font-bold text-text">
                {p.title}
              </h3>
              {p.date && (
                <p className="mb-2 inline-flex w-fit rounded-md border border-border/80 bg-surface px-2 py-0.5 font-mono text-[10px] tracking-[0.08em] text-dim">
                  {p.date}
                </p>
              )}
              <p className="mb-5 flex-1 text-[13px] leading-relaxed text-muted">
                {p.desc}
              </p>
              <div
                className={`mb-4 rounded-lg border px-3 py-2 text-[12px] leading-relaxed ${
                  view === "internal"
                    ? "border-accent/20 bg-accent/7 text-muted"
                    : "border-a2/25 bg-a2/8 text-muted"
                }`}
              >
                <span className="mr-1 font-mono text-[10px] tracking-[0.08em] text-dim">
                  SUMMARY:
                </span>
                {p.summary}
              </div>
              <div className="mb-5 flex flex-col gap-1.5">
                {p.highlights.map((h) => (
                  <div key={h} className="flex gap-2 text-xs text-muted">
                    <span
                      className={`mt-1 flex-shrink-0 text-[8px] ${
                        view === "internal" ? "text-accent" : "text-a2"
                      }`}
                    >
                      ✦
                    </span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className={`rounded-[5px] border px-2 py-0.5 font-mono text-[10px] ${
                      view === "internal"
                        ? "border-accent/20 bg-accent/10 text-accent"
                        : "border-a2/25 bg-a2/10 text-a2"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
