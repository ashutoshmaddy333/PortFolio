import {
  ArrowUpRightIcon,
  DownloadIcon,
  FileTextIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  VercelIcon,
} from "@/components/icons/BrandIcons";
import Link from "next/link";
import type { ReactNode } from "react";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const iconClass = "h-4 w-4 shrink-0";

function FooterRow({
  icon,
  children,
  className = "",
}: {
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`flex min-h-7 items-start gap-3 text-sm leading-snug text-muted ${className}`}
    >
      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center">
        {icon}
      </span>
      <span className="min-w-0 flex-1 break-words">{children}</span>
    </span>
  );
}

function FooterLink({
  href,
  icon,
  children,
  download,
  external,
}: {
  href: string;
  icon: ReactNode;
  children: ReactNode;
  download?: boolean | string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex min-h-7 items-start gap-3 text-sm leading-snug text-muted no-underline transition-colors hover:text-accent"
    >
      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center text-muted transition-colors group-hover:text-accent">
        {icon}
      </span>
      <span className="min-w-0 flex-1 break-words">{children}</span>
    </a>
  );
}

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
            <div className="flex flex-col gap-2.5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group flex min-h-7 items-start gap-3 text-sm leading-snug text-muted no-underline transition-colors hover:text-accent"
                >
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center text-muted transition-colors group-hover:text-accent">
                    <ArrowUpRightIcon className={iconClass} />
                  </span>
                  <span className="min-w-0 flex-1">{l.label}</span>
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
            <div className="flex flex-col gap-2.5">
              <FooterLink
                href="mailto:ashutoshkumarm416@gmail.com"
                icon={<MailIcon className={iconClass} />}
              >
                ashutoshkumarm416@gmail.com
              </FooterLink>
              <FooterRow icon={<PhoneIcon className={iconClass} />}>
                +91 8738878776
              </FooterRow>
              <FooterRow icon={<MapPinIcon className={iconClass} />}>
                Mumbai, India
              </FooterRow>
            </div>
          </div>

          <div>
            <p className="mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-surface/70 px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] text-dim">
                <span className="h-1.5 w-1.5 rounded-full bg-a4" />
                PROFILES
              </span>
            </p>
            <div className="flex flex-col gap-2.5">
              <FooterLink
                href="https://github.com/ashutoshmaddy333"
                external
                icon={<GitHubIcon className={iconClass} />}
              >
                GitHub
              </FooterLink>
              <FooterLink
                href="https://linkedin.com/in/ashutosh-kumar-545480282"
                external
                icon={<LinkedInIcon className={iconClass} />}
              >
                LinkedIn
              </FooterLink>
              <FooterLink
                href="https://vercel.com/ashutoshs-projects-b10a26cb"
                external
                icon={<VercelIcon className={iconClass} />}
              >
                Vercel
              </FooterLink>
              <FooterLink
                href="/resume.pdf"
                external
                icon={<FileTextIcon className={iconClass} />}
              >
                View Resume
              </FooterLink>
              <FooterLink
                href="/resume.pdf"
                download="Ashutosh-Kumar-Resume.pdf"
                icon={<DownloadIcon className={iconClass} />}
              >
                Download Resume
              </FooterLink>
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
              <span className="footer-status-text">FULL-TIME + FREELANCE</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
