import type { ReactNode } from "react";

/** Small caps section heading — no decorative slashes */
export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
      {children}
    </p>
  );
}
