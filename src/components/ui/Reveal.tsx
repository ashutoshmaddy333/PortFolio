"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  variant?: "up" | "left" | "right";
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  once = true,
  variant = "up",
}: RevealProps) {
  const reduce = useReducedMotion();

  const offset =
    variant === "left"
      ? { x: -28, y: 0 }
      : variant === "right"
        ? { x: 28, y: 0 }
        : { x: 0, y: 28 };

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.12 }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
