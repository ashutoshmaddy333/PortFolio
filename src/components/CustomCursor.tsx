"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const curRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mx = useRef(0);
  const my = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);
  const frame = useRef<number>(0);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;

    if (prefersReduced || coarse) {
      document.body.style.cursor = "auto";
      return;
    }

    document.body.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      mx.current = e.clientX;
      my.current = e.clientY;
    };

    const loop = () => {
      rx.current += (mx.current - rx.current) * 0.12;
      ry.current += (my.current - ry.current) * 0.12;
      const cur = curRef.current;
      const ring = ringRef.current;
      if (cur) {
        cur.style.left = `${mx.current}px`;
        cur.style.top = `${my.current}px`;
      }
      if (ring) {
        ring.style.left = `${rx.current}px`;
        ring.style.top = `${ry.current}px`;
      }
      frame.current = requestAnimationFrame(loop);
    };

    frame.current = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove, { passive: true });

    const interactive =
      "a, button, [data-cursor-hover], .chip, .ask-card, .proj-card, .serv-card, .skill-item";
    const onEnter = () => {
      if (!curRef.current || !ringRef.current) return;
      curRef.current.style.width = "16px";
      curRef.current.style.height = "16px";
      ringRef.current.style.width = "52px";
      ringRef.current.style.height = "52px";
      ringRef.current.style.opacity = "0.6";
    };
    const onLeave = () => {
      if (!curRef.current || !ringRef.current) return;
      curRef.current.style.width = "10px";
      curRef.current.style.height = "10px";
      ringRef.current.style.width = "38px";
      ringRef.current.style.height = "38px";
      ringRef.current.style.opacity = "1";
    };

    const els = document.querySelectorAll(interactive);
    els.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener("mousemove", onMove);
      document.body.style.cursor = "";
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={curRef}
        id="cursor"
        className="pointer-events-none fixed z-[9999] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent mix-blend-screen transition-[width,height,background-color] duration-200 ease-out"
        aria-hidden
      />
      <div
        ref={ringRef}
        id="cursor-ring"
        className="pointer-events-none fixed z-[9998] h-[38px] w-[38px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(94,172,255,0.4)] transition-[width,height,opacity] duration-200 ease-out"
        aria-hidden
      />
    </>
  );
}
