"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { useCallback, useEffect, useRef } from "react";

type Pt = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  o: number;
};

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ptsRef = useRef<Pt[]>([]);
  const { light } = useTheme();
  const lightRef = useRef(light);

  useEffect(() => {
    lightRef.current = light;
  }, [light]);

  const initPts = useCallback((w: number, h: number) => {
    const n = Math.floor((w * h) / 14000);
    const pts: Pt[] = [];
    for (let i = 0; i < n; i++) {
      pts.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.4,
        o: Math.random() * 0.5 + 0.1,
      });
    }
    ptsRef.current = pts;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      w = canvas.width = parent.offsetWidth;
      h = canvas.height = parent.offsetHeight;
      initPts(w, h);
    };

    const draw = () => {
      const col = lightRef.current ? "37,99,235" : "94,172,255";
      ctx.clearRect(0, 0, w, h);
      const pts = ptsRef.current;

      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col},${p.o})`;
        ctx.fill();
      });

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(${col},${0.07 * (1 - d / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [initPts]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 opacity-60"
      aria-hidden
    />
  );
}
