import { Reveal } from "@/components/ui/Reveal";

const jobs = [
  {
    date: "July 2025 → Present",
    current: true,
    role: "Software Engineer — Full Stack",
    company: "Evolve Cortex",
    chips: ["Mumbai · Onsite", "MERN / Full-Stack"],
    bullets: [
      <>
        Built <strong className="font-medium text-text">CAMS (Camera & Alert Management System)</strong> — a real-time enterprise security platform with live RTSP streaming, Kafka-driven sensor alert pipeline, and WebSocket SOC dashboard
      </>,
      <>
        Implemented <strong className="font-medium text-text">ROI (Region of Interest) drawing module</strong> — lets users configure AI analytics zones on live camera feeds for feature detection and alert triggering
      </>,
      <>
        Developed <strong className="font-medium text-text">QC Testing module</strong> supporting live RTSP streaming and video playback to validate camera configurations
      </>,
      <>
        Architected complete <strong className="font-medium text-text">Keycloak RBAC system</strong> — User CRUD, Role CRUD, 30+ rights/permissions, team management, and protected frontend routes
      </>,
      <>
        Built <strong className="font-medium text-text">RMG (Resource Management)</strong> — lead, requirement, and candidate lifecycle management with JWT auth, RBAC, and recruitment workflow (profile → interview → placement)
      </>,
      <>
        Developed <strong className="font-medium text-text">mobile backend APIs</strong> for field service engineers — GPS punch in/out attendance, reverse geocoding, Base64 image capture, Cron-based auto punch-out
      </>,
      <>
        Integrated <strong className="font-medium text-text">automated email notifications</strong>, file uploads (JD/resumes), and dashboard analytics APIs
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
    date: "2022 → 2024",
    current: false,
    role: "Freelance Full-Stack Developer",
    company: "Independent · Remote",
    chips: ["2 Years"],
    bullets: [
      "Delivered complete web applications end-to-end for clients across various domains",
      <>
        Built <strong className="font-medium text-text">REST APIs and React frontends</strong> with authentication, user management, and role-based access
      </>,
      <>
        Designed relational <strong className="font-medium text-text">PostgreSQL / MongoDB</strong> schemas with normalized data models
      </>,
      "Managed full project lifecycle — requirements, development, testing, delivery, and client feedback",
      "Worked asynchronously across time zones, meeting international deadlines consistently",
    ],
    tech: [
      "Node.js",
      "React.js",
      "MongoDB",
      "PostgreSQL",
      "JavaScript",
      "REST APIs",
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
        <p className="mb-2 font-mono text-xs tracking-[0.12em] text-accent">
          {"// WORK HISTORY"}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-14 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold tracking-tight text-text">
          Professional <em className="not-italic text-accent">Experience</em>
        </h2>
      </Reveal>

      <div className="relative pl-8">
        <div className="absolute top-2.5 bottom-2.5 left-0 w-px bg-border" />

        {jobs.map((job) => (
          <Reveal key={job.role}>
            <div className="relative mb-[52px] last:mb-0">
              <div
                className={`absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full ${
                  job.current
                    ? "bg-a2 shadow-[0_0_0_4px_rgba(94,240,176,0.15)]"
                    : "bg-accent shadow-[0_0_0_4px_rgba(94,172,255,0.15)]"
                }`}
              />
              <div className="mb-2 flex flex-wrap items-center gap-2 font-mono text-[11px] tracking-[0.07em] text-a2">
                {job.date}
                {job.current && (
                  <span className="rounded-full border border-[rgba(94,240,176,0.25)] bg-[rgba(94,240,176,0.1)] px-2.5 py-0.5 text-[10px] text-a2">
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
