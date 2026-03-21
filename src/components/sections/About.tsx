import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="bg-bg2 px-[6%] py-[90px]">
      <Reveal>
        <p className="mb-2 font-mono text-xs tracking-[0.12em] text-accent">
          {"// ABOUT ME"}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-14 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold tracking-tight text-text">
          The Engineer <em className="not-italic text-accent">Behind the Code</em>
        </h2>
      </Reveal>

      <div className="grid items-center gap-[60px] md:grid-cols-2">
        <Reveal variant="left" className="space-y-[18px]">
          <p className="text-[15px] leading-[1.85] text-muted">
            I&apos;m a{" "}
            <strong className="font-medium text-text">
              Full-Stack Engineer from Mumbai
            </strong>{" "}
            with 2+ years of experience building production-grade applications.
            My journey started with freelance projects in 2022, and I&apos;ve
            since grown into building enterprise-level systems with real-world
            complexity.
          </p>
          <p className="text-[15px] leading-[1.85] text-muted">
            Currently at <strong className="font-medium text-text">Evolve Cortex</strong>, I work on CAMS — a camera management platform with AI analytics, real-time Kafka pipelines, and RTSP video streaming. I also built RMG, a complete recruitment workflow system with complex RBAC.
          </p>
          <p className="text-[15px] leading-[1.85] text-muted">
            I care deeply about{" "}
            <strong className="font-medium text-text">
              clean architecture, readable code, and systems that scale
            </strong>
            . Whether it&apos;s designing a microservices backend, wiring up
            real-time WebSockets, or building a pixel-perfect React dashboard —
            I bring the same level of care to every layer.
          </p>
          <p className="text-[15px] leading-[1.85] text-muted">
            I&apos;m open to{" "}
            <strong className="font-medium text-text">
              remote contract work, hourly freelance, and part-time engagements
            </strong>{" "}
            with US, UK, and international clients. I&apos;m async-friendly,
            responsive, and deliver on time.
          </p>
        </Reveal>

        <Reveal variant="right">
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "2+", l: "Years Experience", c: "text-accent" },
              { n: "15+", l: "APIs Built", c: "text-a2" },
              { n: "30+", l: "Permissions Designed", c: "text-a3" },
              { n: "100%", l: "Remote Ready", c: "text-a4" },
            ].map((box) => (
              <div
                key={box.l}
                className="rounded-[var(--r)] border border-border bg-surface p-6 text-center transition-all hover:border-bora hover:shadow-[var(--glow)]"
              >
                <div
                  className={`font-mono text-[2.4rem] font-bold leading-none ${box.c}`}
                >
                  {box.n}
                </div>
                <div className="mt-1.5 text-xs text-muted">{box.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
