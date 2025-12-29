// src/components/Navbar.jsx
import { Sparkles } from 'lucide-react';

export default function Navbar({ scrollTo }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Left Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-bold">
            AT
          </div>
          <span className="text-xl font-bold hidden sm:block">Avinash Tingre</span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-500">
          <button onClick={() => scrollTo('metrics')}>Impact</button>
          
          <button onClick={() => scrollTo('experience')}>Career</button>
          <button onClick={() => scrollTo('stack')}>Stack</button>
        </div>

        {/* CTA */}
        <a href="mailto:tingre.avinash@gmail.com"
           className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg">
          Hire Me
        </a>
      </div>
    </nav>
  );
}
