import { ArrowUpRight, Send, MapPin, Mail, FileDown } from "lucide-react";
import { RESUME_URL, EMAIL, SOCIALS } from "../data/site";

const navLinks = [
  { key: "about", label: "About Me" },
  { key: "metrics", label: "Impact & Results" },
  { key: "experience", label: "Career Journey" },
  { key: "stack", label: "Technical Skills" },
];

const socialLinks = [
  { label: "LinkedIn", href: SOCIALS.linkedin },
  { label: "GitHub", href: SOCIALS.github },
  { label: "Twitter / X", href: SOCIALS.twitter },
  { label: "tingre.in", href: SOCIALS.portfolio },
];

export default function Footer({ scrollTo }) {
  return (
    <footer className="relative bg-[#0a0a0b] text-white pt-24 pb-12 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight heading-tight mb-4">
              Let's talk about <br />
              <span className="text-blue-500">what you're building</span>.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-lg leading-relaxed">
              Open to senior and lead backend roles on payments, platforms and distributed systems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 justify-start lg:justify-end">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 text-white px-6 py-4 rounded-2xl font-bold text-sm sm:text-base hover:bg-slate-800 transition-all active:scale-95 shadow-sm"
            >
              <FileDown size={17} />
              <span>Resume</span>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-2.5 bg-white text-slate-950 px-7 py-4 rounded-2xl font-bold text-sm sm:text-base hover:bg-slate-100 transition-all active:scale-95 shadow-lg"
            >
              <span>Start a Conversation</span>
              <Send
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-white/10 mb-16" />

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-extrabold text-xs">
                AT
              </div>
              <span className="font-extrabold text-lg tracking-tight">
                Avinash Tingre
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Senior Software Engineer building scalable, high-throughput backend payment architectures.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <Mail size={14} className="text-blue-400 shrink-0" />
              <a
                href={`mailto:${EMAIL}`}
                className="text-slate-300 hover:text-white transition-colors underline underline-offset-4"
              >
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => scrollTo && scrollTo(link.key)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Socials
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Status */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Location
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Pune, India. <br />
              Working with global teams.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open to opportunities</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-10 border-t border-white/5 text-xs text-slate-500 font-medium">
          <p>
            © {new Date().getFullYear()} Avinash Tingre. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-slate-500">
            <MapPin size={13} />
            <span>Pune, India</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
