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

  return (
    <nav
      className="fixed top-0 right-0 left-0 z-[500] flex h-16 items-center justify-between border-b border-border px-[6%] backdrop-blur-xl transition-colors duration-300"
      style={{
        background: light ? "rgba(240,242,247,0.75)" : "rgba(8,11,16,0.6)",
      }}
    >
      <Link
        href="#home"
        className="font-mono text-[15px] tracking-wide text-text no-underline"
      >
        AK<span className="text-[20px] leading-none text-accent align-[-3px]">
          .
        </span>
      </Link>
      <div className="flex items-center gap-1.5">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            data-cursor-hover
            className="hidden rounded-lg px-3.5 py-1.5 font-mono text-[12px] tracking-wider text-muted transition-colors hover:bg-[rgba(94,172,255,0.07)] hover:text-accent md:inline-block"
            style={{
              color:
                active === l.href.slice(1) ? "var(--accent)" : undefined,
            }}
          >
            {l.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2.5">
        <button
          type="button"
          data-cursor-hover
          onClick={toggle}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-[10px] border border-border bg-surface text-[16px] text-muted transition-all hover:border-bora hover:bg-surf2 hover:text-accent"
          aria-label={light ? "Dark mode" : "Light mode"}
        >
          {light ? "🌙" : "☀"}
        </button>
        <a
          href="mailto:ashutoshkumarm416@gmail.com"
          data-cursor-hover
          className="rounded-lg bg-accent px-5 py-2 font-mono text-[12px] tracking-wide text-white no-underline transition-all hover:-translate-y-px hover:brightness-110 hover:shadow-[var(--glow)]"
        >
          Hire Me ↗
        </a>
      </div>
    </nav>
  );
}
