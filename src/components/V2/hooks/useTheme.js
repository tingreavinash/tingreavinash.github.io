import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
  setTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark" || stored === "light") {
        return stored;
      }
      if (typeof window !== "undefined" && window.matchMedia) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
    } catch (e) {
      // Fallback if localStorage or matchMedia is inaccessible
    }
    return "light";
  });

  // Keep <html> element classes synchronized with theme state
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  // Follow OS color-scheme changes ONLY while the user has not explicitly picked a theme
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      try {
        const stored = localStorage.getItem("theme");
        if (!stored) {
          setThemeState(e.matches ? "dark" : "light");
        }
      } catch (err) {}
    };

    if (media.addEventListener) {
      media.addEventListener("change", handleChange);
      return () => media.removeEventListener("change", handleChange);
    } else if (media.addListener) {
      media.addListener(handleChange);
      return () => media.removeListener(handleChange);
    }
  }, []);

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem("theme", newTheme);
    } catch (e) {}
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
