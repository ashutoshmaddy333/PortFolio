"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
] as const;

export function Nav() {
  const { light, toggle } = useTheme();
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const onScroll = () => {
      let current = "home";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className="fixed top-0 right-0 left-0 z-[500] px-[6%] pt-3"
      style={{
        filter: "drop-shadow(0 6px 24px rgba(2,8,23,0.22))",
      }}
    >
      <div
        className="mx-auto flex h-14 w-full max-w-[1200px] items-center justify-between rounded-2xl border border-border/80 px-4 md:px-5"
        style={{
          background: light
            ? "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.72))"
            : "linear-gradient(180deg, rgba(12,15,20,0.78), rgba(9,11,15,0.68))",
          backdropFilter: "blur(18px)",
        }}
      >
        <Link
          href="#home"
          className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-surface/70 px-3 py-1.5 font-mono text-[13px] tracking-[0.08em] text-text no-underline"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-[11px] font-bold text-accent">
            AK
          </span>
          <span className="hidden sm:inline">ASHUTOSH</span>
        </Link>

        <div className="hidden items-center gap-1 rounded-xl border border-border/70 bg-surface/55 p-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-cursor-hover
              className="rounded-lg px-3 py-1.5 font-mono text-[11px] tracking-[0.1em] text-muted transition-all hover:text-accent"
              style={{
                background:
                  active === l.href.slice(1) ? "rgba(96,165,250,0.12)" : undefined,
                color: active === l.href.slice(1) ? "var(--accent)" : undefined,
                boxShadow:
                  active === l.href.slice(1)
                    ? "inset 0 0 0 1px rgba(96,165,250,0.22)"
                    : undefined,
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            data-cursor-hover
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-[10px] border border-border/80 bg-surface text-[15px] text-muted transition-all hover:border-bora hover:bg-surf2 hover:text-accent md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
          <button
            type="button"
            data-cursor-hover
            onClick={toggle}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-[10px] border border-border/80 bg-surface text-[15px] text-muted transition-all hover:border-bora hover:bg-surf2 hover:text-accent"
            aria-label={light ? "Dark mode" : "Light mode"}
          >
            {light ? "🌙" : "☀"}
          </button>
          <a
            href="mailto:ashutoshkumarm416@gmail.com"
            data-cursor-hover
            className="rounded-xl border border-accent/30 bg-accent px-3 py-2 font-mono text-[10px] tracking-[0.1em] text-white no-underline transition-all hover:-translate-y-px hover:brightness-110 hover:shadow-[0_10px_24px_rgba(96,165,250,0.35)] sm:px-4 sm:text-[11px]"
          >
            HIRE ↗
          </a>
        </div>
      </div>
      {menuOpen && (
        <div className="mx-auto mt-2 w-full max-w-[1200px] rounded-2xl border border-border/80 bg-bg3/95 p-2 backdrop-blur-xl md:hidden">
          <div className="grid grid-cols-2 gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                data-cursor-hover
                onClick={() => setMenuOpen(false)}
                className="rounded-lg border border-border/70 bg-surface/70 px-3 py-2 text-center font-mono text-[11px] tracking-[0.08em] text-muted no-underline transition hover:border-bora hover:text-accent"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
