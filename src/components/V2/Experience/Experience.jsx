import { useState } from "react";
import { Terminal } from "lucide-react";
import { experienceData } from "../data/experience";

export default function Experience() {
  const [active, setActive] = useState("mast");
  const current = experienceData.find((e) => e.id === active);

  return (
    <section id="experience" className="space-y-12">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
        <h2 className="text-4xl font-bold text-slate-900">Career Journey</h2>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-4 py-1 rounded-full">8+ Years Industry Experience</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-3">
          {experienceData.map((exp) => (
            <button key={exp.id} onClick={() => setActive(exp.id)}
              className={`w-full flex text-left gap-3 p-5 rounded-2xl transition-all ${active === exp.id ? 'bg-slate-900 text-white shadow-xl translate-x-2' : 'hover:bg-slate-100 text-slate-500'}`}>
              <img
                src={exp.logo}
                alt={exp.company}
                className="h-14 max-w-16 object-contain rounded-md bg-white p-1 shadow-sm"
              />
              <div className="text-left">
                <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${active === exp.id ? 'opacity-60' : 'text-slate-400'}`}>{exp.period}</p>
                <p className="font-bold text-lg tracking-tight">{exp.company}</p>
              </div>
            </button>
          ))}
        </div>
        <div className="lg:col-span-3">
          <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm min-h-[500px]">
            <div className="sm:flex items-center gap-4">
              <img
                src={current.logo}
                alt={current.company}
                className="h-14 max-w-32 sm:max-w-20 object-contain rounded-lg bg-white"
              />
              <div>
                <h3 className="text-3xl font-extrabold text-slate-900">
                  {current.role}
                </h3>
                <p className="text-lg text-slate-500 font-medium mt-1">
                   {current.period}
                </p>
              </div>
            </div>

            <ul className="mt-8 space-y-5">
              {current.highlights.map((line, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2.5 flex-shrink-0"></div>
                  <span className="text-slate-600 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900">$1</strong>') }} />
                </li>
              ))}
            </ul>

            <div className="pt-8 border-t border-slate-100 mt-6">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2"><Terminal size={12} /> Tech Ecosystem</p>
              <div className="flex flex-wrap gap-2">
                {current.stack.map((s) => (<span key={s} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-600">{s}</span>))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}