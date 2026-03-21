import Link from "next/link";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="px-[6%] pt-8 pb-10">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]">
        <div className="grid gap-8 px-6 py-7 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:px-8">
          <div>
            <p className="mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-surface/70 px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] text-dim">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                ABOUT ME
              </span>
            </p>
            <div className="max-w-md rounded-xl border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] px-4 py-3 shadow-[0_12px_30px_rgba(2,8,23,0.22)]">
              <p className="mb-1.5 font-mono text-[11px] tracking-[0.08em] text-accent">
                Software Engineer — Full Stack
              </p>
              <p className="text-sm leading-relaxed text-muted">
                I build robust backend systems, modern frontend apps, and
                real-time products for global clients.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-surface/70 px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] text-dim">
                <span className="h-1.5 w-1.5 rounded-full bg-a2" />
                QUICK LINKS
              </span>
            </p>
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="inline-flex w-fit items-center gap-2 text-sm text-muted no-underline transition-colors hover:text-accent"
                >
                  <span aria-hidden>↗</span>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-surface/70 px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] text-dim">
                <span className="h-1.5 w-1.5 rounded-full bg-a3" />
                CONTACT
              </span>
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <a
                className="inline-flex w-fit items-center gap-2 no-underline transition-colors hover:text-accent"
                href="mailto:ashutoshkumarm416@gmail.com"
              >
                <span aria-hidden>✉</span>
                ashutoshkumarm416@gmail.com
              </a>
              <span className="inline-flex items-center gap-2">
                <span aria-hidden>📞</span>
                +91 8738878776
              </span>
              <span className="inline-flex items-center gap-2">
                <span aria-hidden>📍</span>
                Mumbai, India
              </span>
            </div>
          </div>

          <div>
            <p className="mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-surface/70 px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] text-dim">
                <span className="h-1.5 w-1.5 rounded-full bg-a4" />
                PROFILES
              </span>
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <a
                href="https://github.com/ashutoshmaddy333"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 no-underline transition-colors hover:text-accent"
              >
                <span aria-hidden>🐙</span>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ashutosh-kumar-545480282"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 no-underline transition-colors hover:text-accent"
              >
                <span aria-hidden>in</span>
                LinkedIn
              </a>
              <a
                href="https://vercel.com/ashutoshs-projects-b10a26cb"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 no-underline transition-colors hover:text-accent"
              >
                <span aria-hidden>▲</span>
                Vercel
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 no-underline transition-colors hover:text-accent"
              >
                <span aria-hidden>👀</span>
                View Resume
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex w-fit items-center gap-2 no-underline transition-colors hover:text-accent"
              >
                <span aria-hidden>⬇</span>
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/80 px-6 py-4 md:px-8">
          <p className="font-mono text-[11px] tracking-[0.08em] text-dim">
            © 2026 Ashutosh Kumar. All rights reserved.
          </p>
          <p>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-surface/70 px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] text-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-a2" />
              <span className="footer-status-text">REMOTE · CONTRACT · PART-TIME</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
