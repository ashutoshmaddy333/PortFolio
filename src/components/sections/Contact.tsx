"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const rows = [
  { ico: "✉", lbl: "EMAIL", val: "ashutoshkumarm416@gmail.com" },
  { ico: "📞", lbl: "PHONE / WHATSAPP", val: "+91 8738878776" },
  { ico: "📍", lbl: "LOCATION", val: "Mumbai, India" },
  { ico: "🕐", lbl: "AVAILABILITY", val: "Full-time + freelance" },
];

const projectGroups = [
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

export function Contact() {
  const [projectType, setProjectType] = useState("Full-stack web application");
  const [projectOpen, setProjectOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! I will reply within 24 hours.");
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_10%_0%,rgba(96,165,250,0.08),transparent_55%),radial-gradient(100%_70%_at_100%_100%,rgba(52,211,153,0.06),transparent_55%)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
              aria-hidden
            />
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
                    className="h-[54px] w-full rounded-[14px] border border-border/90 bg-surface/90 pr-4 pl-11 text-[15px] text-text outline-none transition placeholder:text-muted/70 focus:border-bora focus:bg-surf2 focus:shadow-[0_0_0_3px_rgba(96,165,250,0.14)]"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
            </div>
            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block font-mono text-[11px] tracking-[0.14em] text-muted/95">
                  BUDGET (USD/HR)
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[14px] text-muted/70">
                    $
                  </span>
                  <select
                    defaultValue="$15–25/hr"
                    className="h-[54px] w-full appearance-none rounded-[14px] border border-border/90 bg-surface/90 pr-11 pl-11 text-[15px] text-text outline-none transition focus:border-bora focus:bg-surf2 focus:shadow-[0_0_0_3px_rgba(96,165,250,0.14)]"
                  >
                    <option>$10–15/hr</option>
                    <option value="$15–25/hr">$15–25/hr</option>
                    <option>$25–40/hr</option>
                    <option>Let&apos;s discuss</option>
                  </select>
                  <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-xs text-muted/70">
                    ▾
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block font-mono text-[11px] tracking-[0.14em] text-muted/95">
                  PROJECT TYPE
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
                  className="min-h-[185px] w-full resize-y rounded-[14px] border border-border/90 bg-surface/90 pr-5 pl-11 py-4 text-[15px] text-text outline-none transition placeholder:text-muted/55 focus:border-bora focus:bg-surf2 focus:shadow-[0_0_0_3px_rgba(96,165,250,0.14)]"
                  placeholder="Tell me about your project — what you're building, your stack, timeline..."
                />
              </div>
            </div>
            <button
              type="submit"
              data-cursor-hover
              className="w-full rounded-[14px] bg-accent py-4 font-mono text-[13px] tracking-[0.24em] text-white transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_12px_32px_rgba(96,165,250,0.35)]"
            >
              SEND MESSAGE ↗
            </button>
            <p className="mt-3 text-center font-mono text-[10px] tracking-[0.06em] text-muted">
              Typical response time: within 24 hours
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
