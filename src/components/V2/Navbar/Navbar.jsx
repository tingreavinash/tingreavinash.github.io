import { useEffect, useState } from "react";
import { Menu, X, FileDown, Send, Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { RESUME_URL, EMAIL } from "../data/site";

const navItems = [
  { key: "about", label: "About" },
  { key: "metrics", label: "Impact" },
  { key: "experience", label: "Experience" },
  { key: "stack", label: "Skills" },
];

function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${className}`}
    >
      {isDark ? <Sun size={19} className="text-amber-400" /> : <Moon size={19} />}
    </button>
  );
}

export default function Navbar({ scrollTo }) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const sections = navItems
      .map((item) => document.getElementById(item.key))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const handleNav = (section) => {
    setOpen(false);
    if (scrollTo) {
      scrollTo(section);
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-[#0b0f19]/80 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Brand Button */}
        <button
          onClick={() => handleNav("hero")}
          className="flex items-center gap-3 text-left group"
          aria-label="Avinash Tingre homepage"
        >
          <div className="w-9 h-9 rounded-xl bg-slate-900 dark:bg-blue-600 flex items-center justify-center text-white font-extrabold text-xs shadow-xs group-hover:scale-105 transition-transform">
            AT
          </div>
          <div>
            <span className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white tracking-tight block leading-tight">
              Avinash Tingre
            </span>
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
              Payments Platforms
            </span>
          </div>
        </button>

        {/* Desktop Navigation Items with Animated Underline */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-semibold">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNav(item.key)}
              className={`relative py-1.5 font-semibold text-sm transition-colors ${
                activeSection === item.key
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {item.label}
              {activeSection === item.key && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-300" />
              )}
            </button>
          ))}
        </div>

        {/* Desktop CTAs & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
          >
            <FileDown size={14} className="text-blue-600 dark:text-blue-400" />
            <span>Resume</span>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-full text-xs font-bold shadow-xs hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all"
          >
            <Send size={12} />
            <span>Contact</span>
          </a>
        </div>

        {/* Mobile Actions: Theme Toggle + Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-slate-900/30 dark:bg-black/50 backdrop-blur-xs z-40 lg:hidden"
        />
      )}

      <div
        className={`lg:hidden fixed top-20 left-0 right-0 z-50 transform transition-all duration-300 ${
          open
            ? "translate-y-0 opacity-100"
            : "-translate-y-5 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-4 mt-2 backdrop-blur-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-5 space-y-4">
          <div className="flex flex-col text-base font-semibold text-slate-700 dark:text-slate-200 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNav(item.key)}
                className={`py-3 px-4 text-left rounded-xl transition-colors font-semibold ${
                  activeSection === item.key
                    ? "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <FileDown size={16} className="text-blue-600 dark:text-blue-400" />
              <span>Download Resume (PDF)</span>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold shadow-md hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-colors"
            >
              <Send size={15} />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
