import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const cards = [
  {
    icon: "⚙️",
    tone: "b",
    iconClass: "bg-accent/10",
    title: "Backend Engineering",
    sub: "Core expertise · 2 yrs total",
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
      { t: "Swagger", c: "b" },
    ],
  },
  {
    icon: "🖥️",
    tone: "g",
    iconClass: "bg-a2/10",
    title: "Frontend Development",
    sub: "React ecosystem · 2 yrs total",
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
    tone: "o",
    iconClass: "bg-a3/10",
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
    tone: "b",
    iconClass: "bg-accent/10",
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
    tone: "p",
    iconClass: "bg-a4/10",
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
    tone: "g",
    iconClass: "bg-a2/10",
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
    tone: "o",
    iconClass: "bg-a3/10",
    title: "DevOps & Tools",
    sub: "Dev workflow and deployment",
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
    tone: "p",
    iconClass: "bg-a4/10",
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
  b: "border-accent/25 bg-[linear-gradient(180deg,rgba(96,165,250,0.16),rgba(96,165,250,0.08))] text-accent",
  g: "border-a2/25 bg-[linear-gradient(180deg,rgba(52,211,153,0.16),rgba(52,211,153,0.08))] text-a2",
  o: "border-a3/25 bg-[linear-gradient(180deg,rgba(251,191,36,0.16),rgba(251,191,36,0.08))] text-a3",
  p: "border-a4/25 bg-[linear-gradient(180deg,rgba(244,114,182,0.16),rgba(244,114,182,0.08))] text-a4",
};

const tagDotStyles: Record<string, string> = {
  b: "bg-accent",
  g: "bg-a2",
  o: "bg-a3",
  p: "bg-a4",
};

const toneTopLine: Record<string, string> = {
  b: "via-accent/70",
  g: "via-a2/70",
  o: "via-a3/70",
  p: "via-a4/70",
};

export function Skills() {
  return (
    <section id="skills" className="bg-bg2 px-[6%] py-[90px]">
      <Reveal>
        <SectionLabel>Technical expertise</SectionLabel>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-14 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold tracking-tight text-text">
          Every Tool <em className="not-italic text-accent">I Master</em>
        </h2>
      </Reveal>

      <div className="grid auto-rows-fr grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
        {cards.map((card, i) => (
          <Reveal key={card.title} delay={0.05 * (i % 4)} className="h-full">
            <div
              data-cursor-hover
              className="ask-card group relative flex h-full min-h-[228px] flex-col overflow-hidden rounded-[14px] border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01))] p-[22px] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-bora hover:shadow-[0_14px_34px_rgba(96,165,250,0.14)]"
            >
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />
              <div
                className={`pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent ${toneTopLine[card.tone]} to-transparent opacity-80`}
                aria-hidden
              />
              <div className="relative mb-4 flex min-h-[46px] items-center gap-3">
                <div
                  className={`relative flex h-[38px] w-[38px] items-center justify-center rounded-[11px] text-[17px] ring-1 ring-white/10 ${card.iconClass}`}
                >
                  {card.icon}
                </div>
                <div>
                  <div className="text-[1.04rem] leading-tight font-semibold tracking-[-0.01em] text-text">
                    {card.title}
                  </div>
                  <div className="mt-1 font-sans text-[12px] leading-snug text-muted/90">
                    {card.sub}
                  </div>
                </div>
              </div>
              <div className="relative mt-auto grid grid-cols-2 gap-1.5">
                {card.tags.map((tag) => (
                  <span
                    key={tag.t}
                    className={`inline-flex min-h-6 items-center justify-start gap-1.5 rounded-md border px-2 py-1 text-left font-mono text-[10px] leading-tight tracking-[0.02em] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] transition-transform duration-200 hover:scale-[1.03] ${tagStyles[tag.c]}`}
                  >
                    <span
                      className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${tagDotStyles[tag.c]}`}
                    />
                    <span className="line-clamp-1">{tag.t}</span>
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
