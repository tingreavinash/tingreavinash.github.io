import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-24 mt-32">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
        <div className="space-y-2">
          <img alt="Avinash Tingre" className="w-28 h-28 rounded-full mx-auto" src={process.env.PUBLIC_URL + '/assets/images/profile.jpeg'} />
          <p className="text-white text-2xl font-bold tracking-tight">Avinash Tingre</p>
          <p className="text-slate-500 font-medium">Senior Software Engineer • System Architect</p>
        </div>

        <div className="flex justify-center gap-6">
          <a href="https://linkedin.com/in/tingreavinash" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all">
            <Linkedin size={22}/>
          </a>
          <a href="https://github.com/tingreavinash" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all">
            <Github size={22}/>
          </a>
          <a href="mailto:tingre.avinash@gmail.com" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all">
            <Mail size={22}/>
          </a>
        </div>

      </div>
    </footer>
  );
}