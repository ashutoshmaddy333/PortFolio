"use client";

import { useSyncExternalStore } from "react";

function isTouchOrNarrow() {
  if (typeof window === "undefined") return true;
  return (
    window.matchMedia("(pointer: coarse)").matches ||
    window.matchMedia("(max-width: 767px)").matches
  );
}

function subscribe(onStoreChange: () => void) {
  const mqPointer = window.matchMedia("(pointer: coarse)");
  const mqWidth = window.matchMedia("(max-width: 767px)");
  const onChange = () => onStoreChange();
  mqPointer.addEventListener("change", onChange);
  mqWidth.addEventListener("change", onChange);
  window.addEventListener("resize", onChange, { passive: true });
  return () => {
    mqPointer.removeEventListener("change", onChange);
    mqWidth.removeEventListener("change", onChange);
    window.removeEventListener("resize", onChange);
  };
}

/** True on phones/tablets — skip heavy animations so content stays visible. */
export function useTouchDevice() {
  return useSyncExternalStore(subscribe, isTouchOrNarrow, () => true);
}
