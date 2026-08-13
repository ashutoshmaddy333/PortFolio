import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const jobs = [
  {
    date: "July 1, 2026 → Present",
    current: true,
    role: "Associate Software Engineer — Full-Stack Developer",
    company: "Evolve Cortex",
    chips: ["Mumbai · Onsite", "Promoted from Trainee"],
    bullets: [
      <>
        Promoted from Software Engineer Trainee after delivering core CAMS /
        Auth / Gateway work across HEX, DFX, and WebX
      </>,
      <>
        Designed a{" "}
        <strong className="font-medium text-text">
          dual-deployment architecture
        </strong>{" "}
        (standalone + multi-tenant SaaS) with a shared global Auth microservice
        (Keycloak) and API Gateway + Licensing backend reused across three
        products under CAMS-EYE360
      </>,
      <>
        Architected a cookie-first{" "}
        <strong className="font-medium text-text">BFF authentication</strong>{" "}
        system with httpOnly JWTs, DPoP proof-of-possession, and Redis-backed
        refresh-token rotation — rated 8.5/10 in an internal security audit
      </>,
      <>
        Engineered a per-tenant{" "}
        <strong className="font-medium text-text">licensing system</strong>{" "}
        using Ed25519 PKI, AES-256-GCM encrypted credentials, and TOTP-based
        device binding
      </>,
      <>
        Built secure{" "}
        <strong className="font-medium text-text">cross-product SSO</strong>{" "}
        handshakes and continued ownership of enterprise API Gateway security
        for production CAMS deployments
      </>,
    ],
    tech: [
      "NestJS",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Keycloak",
      "DPoP",
      "Ed25519 PKI",
      "Kubernetes",
      "Docker",
    ],
  },
  {
    date: "July 1, 2025 → June 2026",
    current: false,
    role: "Software Engineer Trainee — Full-Stack Developer",
    company: "Evolve Cortex",
    chips: ["Mumbai · Onsite", "~1 Year Trainee"],
    bullets: [
      <>
        Built{" "}
        <strong className="font-medium text-text">
          CAMS (Camera & Alert Management System)
        </strong>{" "}
        — real-time enterprise platform with live RTSP streaming, Kafka-driven
        sensor alerts, and WebSocket SOC dashboard
      </>,
      <>
        Designed an enterprise{" "}
        <strong className="font-medium text-text">API Gateway</strong> with
        multi-layer security (License Guard → RS256 JWT Guard → CSRF Guard →
        Proxy), isolating 6+ backend microservices
      </>,
      <>
        Integrated{" "}
        <strong className="font-medium text-text">Keycloak SSO</strong> with dual
        auth flows — Authorization Code for web and Direct Password Grant for
        Flutter mobile
      </>,
      <>
        Implemented{" "}
        <strong className="font-medium text-text">ROI configuration</strong> on
        live RTSP streams and a QC testing module with live streaming & playback
      </>,
      <>
        Built{" "}
        <strong className="font-medium text-text">
          RMG (Resource Management Portal)
        </strong>{" "}
        — lead → requirement → resource recruitment workflow with JWT auth,
        RBAC, and analytics dashboards
      </>,
      <>
        Developed{" "}
        <strong className="font-medium text-text">mobile backend APIs</strong>{" "}
        for field engineers — GPS punch in/out, reverse geocoding, Base64 image
        capture, Cron-based auto punch-out
      </>,
    ],
    tech: [
      "NestJS",
      "React",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "Kafka",
      "WebSockets",
      "Keycloak",
      "RTSP",
      "FFmpeg",
      "Docker",
      "Redux Toolkit",
    ],
  },
  {
    date: "2023 → 2026",
    current: false,
    role: "Freelance Software Engineer — Full Stack",
    company: "Independent · Remote",
    chips: ["1 Year Freelancing"],
    bullets: [
      <>
        Built{" "}
        <strong className="font-medium text-text">
          DropMart (2026–Present)
        </strong>{" "}
        — full-stack dropshipping marketplace with 4 role-based portals, Prisma
        RBAC, Razorpay payments, and Socket.IO live GPS tracking (Vercel +
        Render)
      </>,
      <>
        Delivered{" "}
        <strong className="font-medium text-text">
          GreenTech Jobs (2024–25)
        </strong>{" "}
        — a multi-role recruitment platform with admin-controlled system
        settings, maintenance mode, secure auth, and production-ready APIs
      </>,
      <>
        Built{" "}
        <strong className="font-medium text-text">
          The Biryani House (2023–24)
        </strong>{" "}
        — a restaurant web platform with customer ordering flow, admin panel,
        bilingual branding, and motion-driven UX
      </>,
      "Delivered complete web applications end-to-end for clients across various domains",
      <>
        Built{" "}
        <strong className="font-medium text-text">
          REST APIs and React frontends
        </strong>{" "}
        with authentication, user management, and role-based access
      </>,
      <>
        Designed relational{" "}
        <strong className="font-medium text-text">
          PostgreSQL / MongoDB
        </strong>{" "}
        schemas with normalized data models
      </>,
      "Managed full project lifecycle — requirements, development, testing, delivery, and client feedback",
      "Worked asynchronously across time zones, meeting international deadlines consistently",
    ],
    tech: [
      "Next.js",
      "NestJS",
      "Node.js",
      "React.js",
      "PostgreSQL",
      "Prisma",
      "MongoDB",
      "TypeScript",
      "REST APIs",
      "WebSockets",
    ],
  },
  {
    date: "2020 → 2024",
    current: false,
    role: "B.Tech — Computer Science & Engineering",
    company: "GL Bajaj Institute of Technology & Management",
    chips: ["Greater Noida, UP"],
    bullets: [
      "Graduated with specialization in Computer Science & Engineering",
      "Built full-stack projects during college that led to freelance work",
    ],
    tech: [] as string[],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-[6%] py-[90px]">
      <Reveal>
        <SectionLabel>Professional experience</SectionLabel>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-14 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold tracking-tight text-text">
          Professional <em className="not-italic text-accent">Experience</em>
        </h2>
      </Reveal>

      <Reveal>
        <div className="mb-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-a2/25 bg-a2/8 p-4">
            <p className="mb-1 font-mono text-[11px] tracking-[0.1em] text-a2">
              INDUSTRY EXPERIENCE
            </p>
            <p className="text-sm text-text">
              1+ year at Evolve Cortex — Trainee → Associate
            </p>
            <p className="mt-1 text-xs text-muted">
              Trainee: Jul 2025–Jun 2026 · Associate: Jul 1, 2026–Present
            </p>
          </div>
          <div className="rounded-xl border border-accent/25 bg-accent/8 p-4">
            <p className="mb-1 font-mono text-[11px] tracking-[0.1em] text-accent">
              FREELANCING EXPERIENCE
            </p>
            <p className="text-sm text-text">1 year — Client & personal projects</p>
          </div>
        </div>
      </Reveal>

      <div className="relative pl-8">
        <div className="absolute top-2.5 bottom-2.5 left-0 w-px bg-border" />

        {jobs.map((job, idx) => (
          <Reveal key={`${job.company}-${job.role}`}>
            <div
              className={`relative mb-[62px] last:mb-0 ${
                idx > 0 ? "pt-5" : ""
              }`}
            >
              <div
                className={`absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full ${
                  job.current
                    ? "bg-a2 shadow-[0_0_0_4px_rgba(52,211,153,0.2)]"
                    : "bg-accent shadow-[0_0_0_4px_rgba(96,165,250,0.2)]"
                }`}
              />
              {idx > 0 && (
                <div className="mb-4 h-px w-full bg-border/60" aria-hidden />
              )}
              <div className="mb-2 flex flex-wrap items-center gap-2 font-mono text-[12px] tracking-[0.09em] text-a2">
                <span className="rounded-sm bg-a2/5 px-1.5 py-0.5">
                  {job.date}
                </span>
                <span
                  className={`rounded-full border px-2 py-0.5 text-[10px] tracking-[0.08em] ${
                    job.role.includes("Freelance")
                      ? "border-accent/30 bg-accent/10 text-accent"
                      : job.role.includes("B.Tech")
                        ? "border-border bg-surface text-muted"
                        : "border-a2/30 bg-a2/10 text-a2"
                  }`}
                >
                  {job.role.includes("Freelance")
                    ? "Freelancing"
                    : job.role.includes("B.Tech")
                      ? "Education"
                      : "Industry"}
                </span>
                {job.current && (
                  <span className="rounded-full border border-a2/30 bg-a2/10 px-2.5 py-0.5 text-[10px] text-a2">
                    Current
                  </span>
                )}
              </div>
              <div className="font-display text-[22px] font-bold text-text">
                {job.role}
              </div>
              <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-muted">
                {job.company}
                {job.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded border border-border bg-surface px-2 py-0.5 font-mono text-[10px] text-muted"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <ul className="flex flex-col gap-2.5">
                {job.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="relative pl-5 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-1 before:text-[11px] before:text-accent before:content-['▸']"
                  >
                    {typeof b === "string" ? b : b}
                  </li>
                ))}
              </ul>
              {job.tech.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-[5px] border border-border bg-surface px-2 py-0.5 font-mono text-[10px] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
