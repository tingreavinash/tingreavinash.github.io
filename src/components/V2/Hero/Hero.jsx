import React from "react";
import { Terminal, Github, Award, Zap, Sparkles, Code2 } from "lucide-react";

export default function Hero({ scrollTo }) {
  return (
    <section className="flex flex-col md:flex-row items-center gap-16 pt-8">
      <div className="flex-1 space-y-8 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider">
          <span class="relative flex size-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex size-2 rounded-full bg-green-500"></span>
          </span>
          Senior Software Engineer @ Mastercard
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
          Scaling Systems.<br />
          <span className="text-slate-400 font-extrabold">Automating Growth.</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-xl leading-relaxed mx-auto md:mx-0">
          8+ years of experience engineering high-performance backends for global payment systems. Specializing in <strong>Java, Spring Boot, and Distributed Systems</strong>.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">

          <a href="https://github.com/tingreavinash" target="_blank" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
            <Github size={18} /> GitHub Profile
          </a>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-4 w-full">
        {[{ label: 'Redundant Stubs Purged', value: '5000+', icon: <Zap className="text-yellow-500" /> }, { label: 'Error Reduction (Ansible)', value: '30%', icon: <Code2 className="text-blue-500" /> }, { label: 'Spot Awards Earned', value: '8+', icon: <Award className="text-orange-500" /> }, { label: 'Automated PR Reviews', value: '100%', icon: <Sparkles className="text-purple-500" /> }].map((stat, i) =>
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="mb-4">{stat.icon}</div>
            <p className="text-3xl font-bold text-slate-900 tracking-tight">{stat.value}</p>
            <p className="text-sm text-slate-500 font-medium mt-1">{stat.label}</p>
          </div>
        )}
      </div>
    </section>
  );
}
