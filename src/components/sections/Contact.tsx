"use client";

import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const rows = [
  { ico: "✉", lbl: "EMAIL", val: "ashutoshkumarm416@gmail.com" },
  { ico: "📞", lbl: "PHONE / WHATSAPP", val: "+91 8738878776" },
  { ico: "📍", lbl: "LOCATION", val: "Mumbai, India · Remote OK" },
  { ico: "⏰", lbl: "RATE", val: "$15–25/hr · Open to discuss" },
  { ico: "🕐", lbl: "AVAILABILITY", val: "Part-time / Full-time contract" },
];

export function Contact() {
  return (
    <section id="contact" className="px-[6%] py-[90px]">
      <Reveal>
        <p className="mb-2 font-mono text-xs tracking-[0.12em] text-accent">
          {"// CONTACT"}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-14 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold tracking-tight text-text">
          Let&apos;s Build <em className="not-italic text-accent">Something</em>
        </h2>
      </Reveal>

      <div className="grid items-start gap-10 md:grid-cols-2">
        <Reveal variant="left">
          <p className="mb-8 text-[15px] leading-relaxed text-muted">
            I&apos;m available for remote freelance contracts, hourly work, and
            part-time engagements. Fast replies, clean deliverables, and
            timezone-flexible communication.
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
                <div className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-[10px] bg-[rgba(94,172,255,0.08)] text-[17px]">
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
            className="rounded-[var(--r2)] border border-border bg-bg3 p-9"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! I will reply within 24 hours.");
            }}
          >
            <div className="mb-5 grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block font-mono text-[11px] tracking-[0.07em] text-muted">
                  YOUR NAME
                </label>
                <input
                  className="w-full rounded-[10px] border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition focus:border-bora focus:bg-surf2 focus:shadow-[0_0_0_3px_rgba(94,172,255,0.07)]"
                  placeholder="John Smith"
                />
              </div>
              <div className="space-y-2">
                <label className="block font-mono text-[11px] tracking-[0.07em] text-muted">
                  EMAIL
                </label>
                <input
                  type="email"
                  className="w-full rounded-[10px] border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition focus:border-bora focus:bg-surf2 focus:shadow-[0_0_0_3px_rgba(94,172,255,0.07)]"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            <div className="mb-5 grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block font-mono text-[11px] tracking-[0.07em] text-muted">
                  BUDGET (USD/HR)
                </label>
                <select
                  defaultValue="$15–25/hr"
                  className="w-full rounded-[10px] border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition focus:border-bora focus:bg-surf2 focus:shadow-[0_0_0_3px_rgba(94,172,255,0.07)]"
                >
                  <option>$10–15/hr</option>
                  <option value="$15–25/hr">$15–25/hr</option>
                  <option>$25–40/hr</option>
                  <option>Let&apos;s discuss</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block font-mono text-[11px] tracking-[0.07em] text-muted">
                  PROJECT TYPE
                </label>
                <select className="w-full rounded-[10px] border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition focus:border-bora focus:bg-surf2 focus:shadow-[0_0_0_3px_rgba(94,172,255,0.07)]">
                  <option>Full-Stack Web App</option>
                  <option>Backend API</option>
                  <option>Real-Time System</option>
                  <option>Database Design</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="mb-5 space-y-2">
              <label className="block font-mono text-[11px] tracking-[0.07em] text-muted">
                MESSAGE
              </label>
              <textarea
                rows={5}
                className="min-h-[120px] w-full resize-y rounded-[10px] border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition focus:border-bora focus:bg-surf2 focus:shadow-[0_0_0_3px_rgba(94,172,255,0.07)]"
                placeholder="Tell me about your project — what you're building, your stack, timeline..."
              />
            </div>
            <button
              type="submit"
              data-cursor-hover
              className="w-full rounded-[10px] bg-accent py-3.5 font-mono text-[13px] tracking-[0.06em] text-white transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_8px_30px_rgba(94,172,255,0.3)]"
            >
              SEND MESSAGE ↗
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
