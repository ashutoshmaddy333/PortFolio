import { Reveal } from "@/components/ui/Reveal";

const cards = [
  {
    icon: "⚙️",
    iconClass: "bg-[rgba(94,172,255,0.1)]",
    title: "Backend Engineering",
    sub: "Core expertise · 2 yrs",
    tags: [
      { t: "NestJS", c: "b" },
      { t: "Node.js", c: "b" },
      { t: "TypeScript", c: "b" },
      { t: "REST APIs", c: "b" },
      { t: "Microservices", c: "b" },
      { t: "JWT Auth", c: "b" },
      { t: "Keycloak", c: "b" },
      { t: "RBAC", c: "b" },
      { t: "Cron Jobs", c: "b" },
      { t: "Swagger/OpenAPI", c: "b" },
    ],
  },
  {
    icon: "🖥️",
    iconClass: "bg-[rgba(94,240,176,0.1)]",
    title: "Frontend Development",
    sub: "React ecosystem · 2 yrs",
    tags: [
      { t: "React.js", c: "g" },
      { t: "TypeScript", c: "g" },
      { t: "Redux Toolkit", c: "g" },
      { t: "React Hook Form", c: "g" },
      { t: "Tailwind CSS", c: "g" },
      { t: "Axios", c: "g" },
      { t: "HTML5", c: "g" },
      { t: "CSS3", c: "g" },
      { t: "JavaScript", c: "g" },
      { t: "Protected Routes", c: "g" },
    ],
  },
  {
    icon: "📡",
    iconClass: "bg-[rgba(255,179,71,0.1)]",
    title: "Real-Time & Streaming",
    sub: "Kafka · WebSockets · RTSP",
    tags: [
      { t: "Apache Kafka", c: "o" },
      { t: "WebSockets", c: "o" },
      { t: "Socket.IO", c: "o" },
      { t: "RTSP Streaming", c: "o" },
      { t: "HLS Video", c: "o" },
      { t: "FFmpeg", c: "o" },
      { t: "ROI Config", c: "o" },
      { t: "Live Streaming", c: "o" },
    ],
  },
  {
    icon: "🗄️",
    iconClass: "bg-[rgba(94,172,255,0.1)]",
    title: "Databases",
    sub: "SQL · NoSQL · ORM",
    tags: [
      { t: "PostgreSQL", c: "b" },
      { t: "TypeORM", c: "b" },
      { t: "MongoDB", c: "b" },
      { t: "Mongoose", c: "b" },
      { t: "Schema Design", c: "b" },
      { t: "Foreign Keys", c: "b" },
      { t: "Migrations", c: "b" },
    ],
  },
  {
    icon: "🔐",
    iconClass: "bg-[rgba(255,107,157,0.1)]",
    title: "Auth & Security",
    sub: "Enterprise-grade access control",
    tags: [
      { t: "Keycloak", c: "p" },
      { t: "JWT", c: "p" },
      { t: "Access Tokens", c: "p" },
      { t: "Refresh Tokens", c: "p" },
      { t: "RBAC", c: "p" },
      { t: "30+ Permissions", c: "p" },
      { t: "User Sync", c: "p" },
    ],
  },
  {
    icon: "📍",
    iconClass: "bg-[rgba(94,240,176,0.1)]",
    title: "Location & Mobile APIs",
    sub: "GPS · Geocoding · Attendance",
    tags: [
      { t: "GPS Tracking", c: "g" },
      { t: "Geocoding", c: "g" },
      { t: "Reverse Geocoding", c: "g" },
      { t: "Punch In/Out", c: "g" },
      { t: "Base64 Image Capture", c: "g" },
      { t: "Cron Auto Punch-out", c: "g" },
    ],
  },
  {
    icon: "🛠️",
    iconClass: "bg-[rgba(255,179,71,0.1)]",
    title: "DevOps & Tools",
    sub: "Dev workflow & deployment",
    tags: [
      { t: "Docker", c: "o" },
      { t: "Git", c: "o" },
      { t: "GitHub", c: "o" },
      { t: "Postman", c: "o" },
      { t: "Swagger", c: "o" },
      { t: "VS Code", c: "o" },
      { t: "Cursor AI", c: "o" },
    ],
  },
  {
    icon: "📧",
    iconClass: "bg-[rgba(255,107,157,0.1)]",
    title: "Business Logic & Integrations",
    sub: "End-to-end system features",
    tags: [
      { t: "Email Notifications", c: "p" },
      { t: "File Uploads (JD/Resume)", c: "p" },
      { t: "Dashboard Analytics APIs", c: "p" },
      { t: "Recruitment Workflows", c: "p" },
      { t: "Candidate Segmentation", c: "p" },
    ],
  },
];

const tagStyles: Record<string, string> = {
  b: "border-[rgba(94,172,255,0.18)] bg-[rgba(94,172,255,0.07)] text-accent",
  g: "border-[rgba(94,240,176,0.18)] bg-[rgba(94,240,176,0.07)] text-a2",
  o: "border-[rgba(255,179,71,0.18)] bg-[rgba(255,179,71,0.07)] text-a3",
  p: "border-[rgba(255,107,157,0.18)] bg-[rgba(255,107,157,0.07)] text-a4",
};

export function Skills() {
  return (
    <section id="skills" className="bg-bg2 px-[6%] py-[90px]">
      <Reveal>
        <p className="mb-2 font-mono text-xs tracking-[0.12em] text-accent">
          {"// TECHNICAL EXPERTISE"}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-14 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold tracking-tight text-text">
          Every Tool <em className="not-italic text-accent">I Master</em>
        </h2>
      </Reveal>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
        {cards.map((card, i) => (
          <Reveal key={card.title} delay={0.05 * (i % 4)}>
            <div
              data-cursor-hover
              className="ask-card rounded-[var(--r)] border border-border bg-surface p-[22px] transition-all duration-300 hover:-translate-y-1 hover:border-bora hover:shadow-[var(--glow)]"
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`flex h-[38px] w-[38px] items-center justify-center rounded-[10px] text-lg ${card.iconClass}`}
                >
                  {card.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold text-text">
                    {card.title}
                  </div>
                  <div className="mt-0.5 text-[11px] text-muted">{card.sub}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {card.tags.map((tag) => (
                  <span
                    key={tag.t}
                    className={`cursor-default rounded-[5px] border px-2 py-0.5 font-mono text-[10px] transition-transform hover:scale-105 ${tagStyles[tag.c]}`}
                  >
                    {tag.t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
