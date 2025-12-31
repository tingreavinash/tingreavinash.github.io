import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar({ scrollTo }) {
  const [open, setOpen] = useState(false);

  const handleNav = (section) => {
    setOpen(false);      // close menu when item clicked
    scrollTo(section);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        {/* Left - Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNav('hero')}>
          <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-bold">
            AT
          </div>
          <span className="text-xl font-bold hidden sm:block">Avinash Tingre</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
          <button onClick={() => handleNav('about')}>About</button>
          <button onClick={() => handleNav('metrics')}>Impact</button>
          <button onClick={() => handleNav('experience')}>Career</button>
          <button onClick={() => handleNav('stack')}>Stack</button>
        </div>

        {/* CTA visible always */}
        <a
          href="mailto:tingre.avinash@gmail.com"
          className="hidden md:block bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg"
        >
          Hire Me
        </a>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Section */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg animate-slide-down">
          <div className="flex flex-col text-slate-700 font-semibold">

            <button onClick={() => handleNav('about')} className="py-4 px-6 text-left hover:bg-slate-50">About</button>
            <button onClick={() => handleNav('metrics')} className="py-4 px-6 text-left hover:bg-slate-50">Impact</button>
            <button onClick={() => handleNav('experience')} className="py-4 px-6 text-left hover:bg-slate-50">Career</button>
            <button onClick={() => handleNav('stack')} className="py-4 px-6 text-left hover:bg-slate-50">Stack</button>

            <a
              href="mailto:tingre.avinash@gmail.com"
              className="py-4 px-6 bg-slate-900 text-white text-center font-bold active:scale-95"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
