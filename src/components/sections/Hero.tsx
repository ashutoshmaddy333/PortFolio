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
  b: "bg-[rgba(94,172,255,0.07)] border-[rgba(94,172,255,0.2)] text-accent",
  g: "bg-[rgba(94,240,176,0.06)] border-[rgba(94,240,176,0.18)] text-a2",
  o: "bg-[rgba(255,179,71,0.06)] border-[rgba(255,179,71,0.18)] text-a3",
  p: "bg-[rgba(255,107,157,0.06)] border-[rgba(255,107,157,0.18)] text-a4",
  "": "bg-surface border-border text-muted",
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative grid min-h-screen items-center gap-10 overflow-hidden px-[6%] pt-[100px] pb-[60px] md:grid-cols-[1fr_420px] md:gap-10"
    >
      <ParticleCanvas />

      <div className="relative z-[2]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-[rgba(94,240,176,0.2)] bg-[rgba(94,240,176,0.07)] px-4 py-1.5 font-mono text-[11px] tracking-[0.08em] text-a2"
        >
          <span className="h-1.5 w-1.5 animate-livepulse rounded-full bg-a2 shadow-[0_0_0_0_rgba(94,240,176,0.5)]" />
          Available for Remote / Contract Work
        </motion.div>

        <motion.h1
          className="font-display text-[clamp(3rem,6vw,5.2rem)] font-extrabold leading-none tracking-tight text-text"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          Ashutosh
          <br />
          <span className="text-stroke-name">Kumar</span>
        </motion.h1>

        <motion.p
          className="mt-3 mb-6 font-mono text-sm tracking-[0.1em] text-accent"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Full-Stack Engineer &nbsp;·&nbsp;{" "}
          <span className="text-a2">Node.js / React / TypeScript</span>
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
          years shipping robust APIs, microservices, and React frontends for
          global clients.
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
          className="flex flex-wrap gap-3.5"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link
            href="#contact"
            data-cursor-hover
            className="inline-flex items-center gap-2 rounded-[10px] bg-accent px-8 py-3.5 font-mono text-[13px] tracking-wide text-white shadow-[0_0_0_0_rgba(94,172,255,0.4)] no-underline transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_8px_30px_rgba(94,172,255,0.35)]"
          >
            ↗ Let&apos;s Work Together
          </Link>
          <Link
            href="#projects"
            data-cursor-hover
            className="inline-flex items-center gap-2 rounded-[10px] border border-border bg-transparent px-8 py-3.5 font-mono text-[13px] tracking-wide text-text no-underline transition-all hover:border-bora hover:bg-surf2 hover:text-accent"
          >
            View My Work
          </Link>
        </motion.div>
      </div>

      <div className="relative z-[2] hidden md:block">
        <motion.div
          initial={reduce ? false : { opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.85,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative overflow-hidden rounded-[var(--r2)] border border-border bg-bg3 p-8"
        >
          <div className="absolute top-0 right-0 left-0 h-[3px] bg-gradient-to-r from-accent via-a2 to-a3" />
          <div className="relative mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-accent to-a2 font-display text-[28px] font-extrabold text-white shadow-[0_0_0_1px_transparent]">
            <span
              className="absolute -inset-[3px] -z-10 animate-spin-slow rounded-full opacity-30"
              style={{
                background: "linear-gradient(135deg, var(--accent), var(--a2))",
              }}
            />
            AK
          </div>
          <div className="font-display text-[22px] font-bold text-text">
            Ashutosh Kumar
          </div>
          <div className="mb-5 font-mono text-xs tracking-[0.06em] text-accent">
            {"// FULL-STACK ENGINEER"}
          </div>
          <div className="mb-5 grid grid-cols-2 gap-3">
            {[
              ["2+", "Years Exp."],
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
          <div className="flex flex-col gap-2.5 text-[13px]">
            <div className="flex items-center gap-2.5 text-muted">
              <span className="w-[22px] text-center text-[15px]">📍</span>
              <span className="text-text">Mumbai, India · Remote OK</span>
            </div>
            <div className="flex items-center gap-2.5 text-muted">
              <span className="w-[22px] text-center text-[15px]">🎓</span>
              <span className="text-text">B.Tech CSE — GL Bajaj (2024)</span>
            </div>
            <div className="flex items-center gap-2.5 text-muted">
              <span className="w-[22px] text-center text-[15px]">✉</span>
              <span className="text-text">ashutoshkumarm416@gmail.com</span>
            </div>
            <div className="flex items-center gap-2.5 text-muted">
              <span className="w-[22px] text-center text-[15px]">📞</span>
              <span className="text-text">+91 8738878776</span>
            </div>
            <div className="flex items-center gap-2.5 text-muted">
              <span className="w-[22px] text-center text-[15px]">⏰</span>
              <span className="text-text">$15–25/hr · Async-friendly</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
