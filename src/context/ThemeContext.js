import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [darkMode, setDarkModeState] = useState(() => {
    try {
      const stored = localStorage.getItem("calculus-dark");
      if (stored !== null) {
        return stored === "true";
      }
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  });

  const applyTheme = useCallback((isDark) => {
    const root = document.documentElement;
    const body = document.body;
    if (isDark) {
      root.setAttribute("data-theme", "dark");
      root.classList.add("dark");
      if (body) body.classList.add("dark");
    } else {
      root.setAttribute("data-theme", "light");
      root.classList.remove("dark");
      if (body) body.classList.remove("dark");
    }
    try {
      localStorage.setItem("calculus-dark", String(isDark));
    } catch {}
  }, []);

  useEffect(() => {
    applyTheme(darkMode);
  }, [darkMode, applyTheme]);

  const toggleTheme = useCallback(() => {
    setDarkModeState((prev) => {
      const next = !prev;
      applyTheme(next);
      return next;
    });
  }, [applyTheme]);

  const setDarkMode = useCallback((val) => {
    setDarkModeState(val);
    applyTheme(val);
  }, [applyTheme]);

  const theme = darkMode ? "dark" : "light";

  return (
    <ThemeContext.Provider value={{ theme, darkMode, toggleTheme, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    // Fallback if rendered outside provider
    const isDark = typeof document !== "undefined" && document.documentElement.getAttribute("data-theme") === "dark";
    return {
      theme: isDark ? "dark" : "light",
      darkMode: isDark,
      toggleTheme: () => {},
      setDarkMode: () => {},
    };
  }
  return ctx;
}
