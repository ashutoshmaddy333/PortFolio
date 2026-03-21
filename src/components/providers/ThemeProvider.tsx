"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";

type ThemeContextValue = {
  light: boolean;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "portfolio-theme";
const THEME_EVENT = "portfolio-theme";

function getStoredTheme(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === "light";
  } catch {
    return false;
  }
}

function subscribe(onChange: () => void) {
  const run = () => onChange();
  window.addEventListener("storage", run);
  window.addEventListener(THEME_EVENT, run);
  return () => {
    window.removeEventListener("storage", run);
    window.removeEventListener(THEME_EVENT, run);
  };
}

function emitThemeChange() {
  window.dispatchEvent(new Event(THEME_EVENT));
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const light = useSyncExternalStore(
    subscribe,
    getStoredTheme,
    () => false,
  );

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  const toggle = useCallback(() => {
    const next = !getStoredTheme();
    try {
      localStorage.setItem(STORAGE_KEY, next ? "light" : "dark");
    } catch {
      /* ignore */
    }
    emitThemeChange();
  }, []);

  return (
    <ThemeContext.Provider value={{ light, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
