import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ scrollTo }) {
  const [open, setOpen] = useState(false);
  const [showName, setShowName] = useState(true);

  useEffect(() => {
    const handler = () => {
      // const heroHeight = document.getElementById("hero")?.offsetHeight || 500;
      // setShowName(window.scrollY > heroHeight * 0.4);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (section) => {
    setOpen(false);
    scrollTo(section);
  };

  const navItems = [
    { key: "about", label: "About Me" },
    { key: "metrics", label: "Impact & Results" },
    { key: "experience", label: "Experience" },
    { key: "stack", label: "Tech Stack" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNav("hero")}>
          <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-bold">
            AT
          </div>
          <span
            className={`
              font-bold text-lg md:text-xl transition-all duration-300
              ${showName ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"}
            `}
          >
            Avinash Tingre
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
          {navItems.map((item, i) => (
            <button
              key={item.key}
              onClick={() => handleNav(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="mailto:tingre.avinash@gmail.com"
          className="hidden md:block bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all"
        >
          Hire Me
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 active:scale-95 transition"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 md:hidden"
        />
      )}

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden fixed top-20 left-0 right-0 z-50 transform transition-all duration-300 
  ${open ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"}`}
      >
        {/* The 'mx-4' and 'rounded-3xl' are great, but the background MUST be transparent */}
        <div className="mx-4 mt-4 backdrop-blur-xl border bg-white/70 border-white/40 rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col text-base font-semibold text-slate-700">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNav(item.key)}
                className="py-4 px-6 text-left border-b backdrop-blur-xl bg-white/70 z-50 border-slate-200/30 last:border-none active:bg-white/40 transition-all duration-200"
              >
                {item.label}
              </button>
            ))}

            <a
              href="mailto:tingre.avinash@gmail.com"
              className="py-5 px-6 bg-slate-900/90 text-white text-center font-bold text-base hover:bg-slate-900 transition-all"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
