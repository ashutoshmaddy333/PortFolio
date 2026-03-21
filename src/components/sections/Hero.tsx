"use client";

import { ParticleCanvas } from "@/components/ParticleCanvas";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const chips = [
  { t: "NestJS", c: "b" },
  { t: "Node.js", c: "b" },
  { t: "TypeScript", c: "b" },
  { t: "React.js", c: "g" },
  { t: "Redux Toolkit", c: "g" },
  { t: "PostgreSQL", c: "o" },
  { t: "TypeORM", c: "o" },
  { t: "Kafka", c: "p" },
  { t: "WebSockets", c: "p" },
  { t: "Docker", c: "" },
  { t: "Microservices", c: "" },
  { t: "REST APIs", c: "" },
  { t: "RBAC", c: "" },
  { t: "Keycloak", c: "" },
] as const;

const chipClass: Record<string, string> = {
  b: "border-accent/25 bg-accent/10 text-accent",
  g: "border-a2/25 bg-a2/10 text-a2",
  o: "border-a3/25 bg-a3/10 text-a3",
  p: "border-a4/25 bg-a4/10 text-a4",
  "": "bg-surface border-border text-muted",
};

const socialLinks = {
  github: "https://github.com/ashutoshmaddy333",
  vercel: "https://vercel.com/ashutoshs-projects-b10a26cb",
  linkedin: "https://linkedin.com/in/ashutosh-kumar-545480282",
  resume: "/resume.pdf",
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative grid min-h-screen items-center gap-10 overflow-hidden px-[6%] pt-[100px] pb-[60px] md:grid-cols-[1fr_420px] md:gap-10"
    >
      <ParticleCanvas />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-accent/12 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-10 h-72 w-72 rounded-full bg-a2/10 blur-3xl" />

      <div className="relative z-[2]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="availability-chip mb-7 inline-flex items-center gap-2 rounded-full border border-a2/25 bg-a2/10 px-4 py-1.5 font-mono text-[11px] tracking-[0.08em] text-a2 shadow-[0_8px_25px_rgba(52,211,153,0.08)]"
        >
          <span className="h-1.5 w-1.5 animate-livepulse rounded-full bg-a2 shadow-[0_0_0_0_rgba(52,211,153,0.45)]" />
          <span className="availability-text">Available for Remote / Contract Work</span>
        </motion.div>

        <motion.h1
          className="font-display text-[clamp(3rem,6vw,5.2rem)] font-bold leading-[1.02] tracking-[-0.02em]"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="hero-name-solid inline-block"
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.5 }}
          >
            Ashutosh
          </motion.span>
          <br />
          <motion.span
            className="hero-name-stroke inline-block"
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.55 }}
          >
            Kumar
          </motion.span>
        </motion.h1>

        <motion.p
          className="mt-4 mb-6 max-w-xl font-sans text-[15px] leading-relaxed text-muted"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="font-medium text-text">
            Software Engineer — Full Stack
          </span>
          <span className="mx-2 text-dim">·</span>
          <span className="font-mono text-[13px] text-accent">
            Node.js / React / TypeScript
          </span>
        </motion.p>

        <motion.p
          className="mb-9 max-w-[560px] text-base leading-relaxed text-muted"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.55 }}
        >
          I build{" "}
          <strong className="font-medium text-text">
            scalable, production-ready applications
          </strong>{" "}
          — from real-time streaming pipelines to enterprise dashboards. 2+
          years total experience (1 year freelancing + 1 year industry)
          shipping robust APIs, microservices, and React frontends for global
          clients.
        </motion.p>

        <motion.div
          className="mb-10 flex flex-wrap gap-2"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          {chips.map((ch, i) => (
            <motion.span
              key={ch.t}
              initial={reduce ? false : { opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.35 + i * 0.03,
                type: "spring",
                stiffness: 380,
                damping: 22,
              }}
              className={`chip cursor-default rounded-md border px-3 py-1 font-mono text-[11px] tracking-wide transition-all hover:-translate-y-0.5 hover:border-bora hover:bg-surf2 hover:text-accent ${chipClass[ch.c]}`}
            >
              {ch.t}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3.5 max-sm:grid max-sm:grid-cols-1"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link
            href="#contact"
            data-cursor-hover
            className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-accent px-8 py-3.5 font-mono text-[13px] tracking-wide text-white no-underline transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_10px_30px_rgba(96,165,250,0.38)] max-sm:w-full"
          >
            ↗ Let&apos;s Work Together
          </Link>
          <Link
            href="#projects"
            data-cursor-hover
            className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-border bg-transparent px-8 py-3.5 font-mono text-[13px] tracking-wide text-text no-underline transition-all hover:border-bora hover:bg-surf2 hover:text-accent max-sm:w-full"
          >
            View My Work
          </Link>
        </motion.div>

      </div>

      <div className="relative z-[2] hidden md:block">
        <motion.div
          initial={reduce ? false : { opacity: 0, x: 48 }}
          animate={
            reduce
              ? { opacity: 1, x: 0 }
              : { opacity: 1, x: 0, y: [0, -6, 0] }
          }
          transition={{
            duration: 0.85,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
            y: {
              duration: 5.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
              ease: "easeInOut",
            },
          }}
          whileHover={
            reduce
              ? undefined
              : {
                  y: -8,
                  scale: 1.01,
                  boxShadow: "0 22px 45px rgba(96,165,250,0.20)",
                }
          }
          className="relative overflow-hidden rounded-[var(--r2)] border border-border bg-bg3 p-8"
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-20 h-56 w-56 rounded-full bg-accent/15 blur-3xl"
            animate={reduce ? undefined : { opacity: [0.25, 0.45, 0.25], scale: [1, 1.08, 1] }}
            transition={{
              duration: 4.8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <div className="mb-5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              QUICK PROFILE
            </span>
            <p className="mt-1 font-display text-[20px] font-semibold text-text">
              Experience Snapshot
            </p>
            <p className="mt-1 text-[12px] leading-relaxed text-muted">
              1 year industry + 1 year freelancing focused on backend systems,
              realtime workflows, and production-grade dashboards.
            </p>
          </div>
          <div className="mb-5 grid grid-cols-2 gap-3">
            {[
              ["2+", "Years Total"],
              ["15+", "APIs Built"],
              ["30+", "Permissions"],
              ["2", "Enterprise Apps"],
            ].map(([n, l]) => (
              <div
                key={l}
                className="rounded-[10px] border border-border bg-surface px-3.5 py-3.5 text-center"
              >
                <div className="font-mono text-[1.7rem] font-bold leading-none text-accent">
                  {n}
                </div>
                <div className="mt-1 text-[11px] text-muted">{l}</div>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-border/80 bg-surface/70 p-3.5">
            <p className="mb-2.5 font-mono text-[10px] tracking-[0.1em] text-dim">
              PROFILES & RESUME
            </p>
            <div className="mb-2 grid grid-cols-3 gap-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-bg3 px-2 py-2 font-mono text-[10px] tracking-[0.06em] text-muted no-underline transition hover:-translate-y-0.5 hover:border-bora hover:text-accent"
              >
                <span aria-hidden>🐙</span>
                GitHub
              </a>
              <a
                href={socialLinks.vercel}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-bg3 px-2 py-2 font-mono text-[10px] tracking-[0.06em] text-muted no-underline transition hover:-translate-y-0.5 hover:border-bora hover:text-accent"
              >
                <span aria-hidden>▲</span>
                Vercel
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-bg3 px-2 py-2 font-mono text-[10px] tracking-[0.06em] text-muted no-underline transition hover:-translate-y-0.5 hover:border-bora hover:text-accent"
              >
                <span aria-hidden>in</span>
                LinkedIn
              </a>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={socialLinks.resume}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-bg3 px-2 py-2 font-mono text-[10px] tracking-[0.06em] text-text no-underline transition hover:-translate-y-0.5 hover:border-bora hover:text-accent"
              >
                <span aria-hidden>👀</span>
                View Resume
              </a>
              <a
                href={socialLinks.resume}
                download
                data-cursor-hover
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-accent px-2 py-2 font-mono text-[10px] tracking-[0.06em] text-white no-underline transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_8px_20px_rgba(96,165,250,0.28)]"
              >
                <span aria-hidden>⬇</span>
                Download
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
