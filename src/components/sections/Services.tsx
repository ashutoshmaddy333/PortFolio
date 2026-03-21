import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const services = [
  {
    num: "01",
    icon: "⚡",
    title: "Backend API Development",
    desc: "Scalable, secure REST APIs built with NestJS and TypeScript. From simple CRUD to complex microservices architectures.",
    items: [
      "NestJS / Node.js REST APIs",
      "JWT + Keycloak Authentication",
      "RBAC & Permission Systems",
      "Microservices Architecture",
      "Swagger API Documentation",
    ],
  },
  {
    num: "02",
    icon: "🖥️",
    title: "Full-stack web applications",
    desc: "End-to-end web applications with React frontend and NestJS backend, deployed and production-ready.",
    items: [
      "React + TypeScript + Redux",
      "Admin dashboards & portals",
      "Recruitment / HR platforms",
      "Real-time data dashboards",
      "Role-based UI access control",
    ],
  },
  {
    num: "03",
    icon: "📡",
    title: "Real-Time Systems",
    desc: "Live data pipelines and streaming solutions using Kafka and WebSockets for high-throughput applications.",
    items: [
      "Kafka event streaming",
      "WebSocket / Socket.IO servers",
      "RTSP & HLS video streaming",
      "Live alert & notification systems",
      "IoT sensor data pipelines",
    ],
  },
  {
    num: "04",
    icon: "🗄️",
    title: "Database Architecture",
    desc: "Well-normalized relational schemas designed for performance and maintainability, with proper indexing and migrations.",
    items: [
      "PostgreSQL schema design",
      "TypeORM entity modeling",
      "MongoDB collections",
      "Data migrations",
      "Query optimization",
    ],
  },
  {
    num: "05",
    icon: "📱",
    title: "Mobile Backend APIs",
    desc: "Backend services purpose-built for mobile applications — GPS tracking, file handling, attendance systems.",
    items: [
      "GPS & location-based APIs",
      "Geocoding / reverse geocoding",
      "Attendance management systems",
      "Image upload & processing",
      "Push notification triggers",
    ],
  },
  {
    num: "06",
    icon: "🔐",
    title: "Auth & Security Systems",
    desc: "Enterprise-grade authentication and authorization systems, including SSO integration and fine-grained access control.",
    items: [
      "Keycloak SSO integration",
      "JWT access/refresh token flow",
      "Role-based access control",
      "Rights/permissions management",
      "Secure API middleware",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="px-[6%] py-[90px]">
      <Reveal>
        <SectionLabel>Services</SectionLabel>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-14 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold tracking-tight text-text">
          Services for <em className="not-italic text-accent">Clients</em>
        </h2>
      </Reveal>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
        {services.map((s, i) => (
          <Reveal key={s.num} delay={0.06 * (i % 4)}>
            <div
              data-cursor-hover
              className="rounded-[var(--r)] border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-bora hover:shadow-[var(--glow)]"
            >
              <div className="mb-4 font-mono text-[11px] tracking-[0.06em] text-dim">
                {s.num}
              </div>
              <div className="mb-3.5 text-[26px]">{s.icon}</div>
              <h3 className="mb-2.5 font-display text-[17px] font-bold text-text">
                {s.title}
              </h3>
              <p className="mb-4 text-[13px] leading-relaxed text-muted">
                {s.desc}
              </p>
              <ul className="flex flex-col gap-1.5">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex list-none items-center gap-2 text-xs text-muted before:font-mono before:text-accent before:content-['→']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
