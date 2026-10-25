import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

/**
 * Site theme: "light" | "dark" | "sepia".
 *
 * Sets <html data-theme="..."> (and the old "dark" class in dark mode, which
 * some pages still read). The choice is saved in localStorage. public/index.html
 * applies the saved theme before React loads, so there is no flash.
 *
 * Backward compatible: `darkMode`, `toggleTheme` and `setDarkMode` still work
 * for components written for the old light/dark switch.
 */

export const THEMES = ["light", "dark", "sepia"];
const STORAGE_KEY = "calcvoyager-theme";
const LEGACY_KEY = "calculus-dark";

const ThemeContext = createContext(null);

function readInitialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (THEMES.includes(saved)) return saved;
    const legacy = localStorage.getItem(LEGACY_KEY);
    if (legacy !== null) return legacy === "true" ? "dark" : "light";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  } catch {
    return "light";
  }
}

function applyTheme(theme) {
  const root = document.documentElement;
  const body = document.body;
  const isDark = theme === "dark";
  root.setAttribute("data-theme", theme);
  root.classList.toggle("dark", isDark);
  if (body) body.classList.toggle("dark", isDark);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
    localStorage.setItem(LEGACY_KEY, String(isDark)); // keep old readers in sync
  } catch {
    /* storage unavailable — theme still applies for this visit */
  }
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(readInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Enable colour transitions only after the first paint (avoids a fade on load).
  useEffect(() => {
    const id = window.requestAnimationFrame(() => document.documentElement.classList.add("theme-ready"));
    return () => window.cancelAnimationFrame(id);
  }, []);

  const setTheme = useCallback((next) => {
    if (THEMES.includes(next)) setThemeState(next);
  }, []);

  /** Old API: light ↔ dark. From sepia it goes to dark. */
  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const setDarkMode = useCallback((val) => {
    setThemeState(val ? "dark" : "light");
  }, []);

  const value = {
    theme,
    themes: THEMES,
    setTheme,
    darkMode: theme === "dark",
    toggleTheme,
    setDarkMode,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    // Fallback if rendered outside the provider
    const current = typeof document !== "undefined" ? document.documentElement.getAttribute("data-theme") : null;
    const theme = THEMES.includes(current) ? current : "light";
    return {
      theme,
      themes: THEMES,
      setTheme: () => {},
      darkMode: theme === "dark",
      toggleTheme: () => {},
      setDarkMode: () => {},
    };
  }
  return ctx;
}
