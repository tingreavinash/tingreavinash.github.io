
import { 
  ArrowUpRight,
  Send
} from 'lucide-react';
export default function Footer( { scrollTo }) {
  return (
<footer className="relative bg-[#0a0a0b] text-white pt-24 pb-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold heading-tight mb-6">
                Let's build the next <br/>
                <span className="text-blue-500">digital milestone</span>.
              </h2>
              <p className="text-slate-400 text-lg max-w-md leading-relaxed">
                Currently open to select opportunities and interesting collaborations. Feel free to reach out.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <a 
                href="mailto:tingre.avinash@gmail.com" 
                className="group relative inline-flex items-center gap-4 bg-white text-black px-10 py-6 rounded-3xl font-bold text-lg hover:scale-105 active:scale-95 transition-all"
              >
                Start a Conversation
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="h-px w-full bg-white/10 mb-20"></div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2 md:col-span-1 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-bold text-xs">AT</div>
                <span className="font-bold text-lg tracking-tight">Avinash Tingre</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Building scalable, robust, and secure backend systems for global fintech leaders.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Navigation</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li><button onClick={() => scrollTo('about')} className="text-slate-400 hover:text-white transition-colors">About Me</button></li>
                <li><button onClick={() => scrollTo('metrics')} className="text-slate-400 hover:text-white transition-colors">Impact & Results</button></li>
                <li><button onClick={() => scrollTo('experience')} className="text-slate-400 hover:text-white transition-colors">Career Journey</button></li>
                <li><button onClick={() => scrollTo('stack')} className="text-slate-400 hover:text-white transition-colors">Technical Skills</button></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Socials</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <a href="https://linkedin.com/in/tingreavinash" target="_blank" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                    LinkedIn <ArrowUpRight size={14} />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/tingreavinash" target="_blank" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                    GitHub <ArrowUpRight size={14} />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/tingreavinash" target="_blank" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                    Twitter / X <ArrowUpRight size={14} />
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Location</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Based in India.<br/>
                Working globally.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
            <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.3em]">
              © {new Date().getFullYear()} AVINASH TINGRE.
            </p>
            <div className="flex items-center gap-8 text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em]">
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                Available for hire
              </span>
              <span>Development</span>
            </div>
          </div>
        </div>
      </footer>
  );
}