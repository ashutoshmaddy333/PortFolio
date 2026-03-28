import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function About() {
  return (
    <section id="about" className="bg-bg2 px-[6%] py-[90px]">
      <Reveal>
        <SectionLabel>About</SectionLabel>
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
              Software Engineer — Full Stack
            </strong>{" "}
            based in Mumbai with{" "}
            <strong className="font-medium text-text">8 months</strong> at my
            current company and{" "}
            <strong className="font-medium text-text">1 year</strong> in
            freelancing projects — building production-grade applications.
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
            Alongside my full-time role, I&apos;m open to{" "}
            <strong className="font-medium text-text">
              selective freelance work
            </strong>{" "}
            with US, UK, and international clients. I&apos;m async-friendly,
            responsive, and deliver on time.
          </p>
        </Reveal>

        <Reveal variant="right">
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "8 mo", l: "Current company (industry)", c: "text-accent" },
              { n: "1 yr", l: "Freelancing projects", c: "text-a2" },
              { n: "15+", l: "APIs Built", c: "text-a3" },
              { n: "30+", l: "Permissions Designed", c: "text-a4" },
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
