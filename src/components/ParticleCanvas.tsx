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

type Star = {
  x: number;
  y: number;
  size: number;
  pulse: number;
  speed: number;
};

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ptsRef = useRef<Pt[]>([]);
  const starsRef = useRef<Star[]>([]);
  const { light } = useTheme();
  const lightRef = useRef(light);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    lightRef.current = light;
  }, [light]);

  const initScene = useCallback((w: number, h: number) => {
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

    const stars: Star[] = [];
    const starCount = Math.floor((w * h) / 28000);
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 1.2 + 0.3,
        pulse: Math.random() * Math.PI * 2,
        speed: 0.006 + Math.random() * 0.012,
      });
    }
    starsRef.current = stars;
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
      initScene(w, h);
    };

    const draw = () => {
      const col = lightRef.current ? "37,99,235" : "96,165,250";
      const col2 = lightRef.current ? "5,150,105" : "52,211,153";
      const mx = mouseRef.current.x || w * 0.5;
      const my = mouseRef.current.y || h * 0.45;

      ctx.clearRect(0, 0, w, h);

      // Ambient radial glow background.
      const grad = ctx.createRadialGradient(mx, my, 0, mx, my, Math.max(w, h) * 0.75);
      const coreAlpha = lightRef.current ? 0.045 : 0.12;
      const outerAlpha = lightRef.current ? 0.02 : 0.05;
      grad.addColorStop(0, `rgba(${col},${coreAlpha})`);
      grad.addColorStop(0.5, `rgba(${col2},${outerAlpha})`);
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Faint animated stars layer.
      starsRef.current.forEach((s) => {
        s.pulse += s.speed;
        const alphaBase = lightRef.current ? 0.04 : 0.1;
        const alphaWave = lightRef.current ? 0.04 : 0.08;
        const alpha = alphaBase + (Math.sin(s.pulse) + 1) * alphaWave;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col},${alpha})`;
        ctx.fill();
      });

      const pts = ptsRef.current;

      pts.forEach((p) => {
        // Subtle mouse parallax.
        p.x += (mx - w * 0.5) * 0.00003;
        p.y += (my - h * 0.45) * 0.00003;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        const pointOpacity = lightRef.current ? p.o * 0.55 : p.o;
        ctx.fillStyle = `rgba(${col},${pointOpacity})`;
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
            const lineOpacity =
              (lightRef.current ? 0.04 : 0.07) * (1 - d / 130);
            ctx.strokeStyle = `rgba(${col},${lineOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);

    const onMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = event.clientX - rect.left;
      mouseRef.current.y = event.clientY - rect.top;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      ro.disconnect();
    };
  }, [initScene]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 ${
        light ? "opacity-55" : "opacity-85"
      }`}
      aria-hidden
    />
  );
}
