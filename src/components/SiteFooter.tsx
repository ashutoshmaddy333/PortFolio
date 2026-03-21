import Link from "next/link";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-border px-[6%] py-9">
      <div className="font-mono text-sm text-text">
        AK<span className="text-accent">.</span>dev — Ashutosh Kumar
      </div>
      <div className="flex gap-6">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="font-mono text-xs text-muted no-underline transition-colors hover:text-accent"
          >
            {l.label}
          </Link>
        ))}
      </div>
      <div className="font-mono text-xs text-dim">Built with ❤ · Mumbai 2025</div>
    </footer>
  );
}
