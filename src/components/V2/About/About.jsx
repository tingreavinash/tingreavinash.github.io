import {
    ChevronRight,
    User,
    Quote
} from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-100/30 blur-3xl rounded-full -z-10"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-5 relative group">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-slate-200 to-slate-100 rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-slate-200 border-4 border-white shadow-2xl">
                        <img
                            alt="Avinash Tingre"
                            className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                            src={process.env.PUBLIC_URL + '/assets/images/profile5.jpeg'}
                        />
                        <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-3xl shadow-lg">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white">
                                    <Quote size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Philosophy</p>
                                    <p className="text-sm font-bold text-slate-800 italic">"Build for scale, automate for sanity."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7 space-y-10 py-4">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest">
                            <User size={14} /> The Engineer Behind the Code
                        </div>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 heading-tight">
                            High-performance <br />
                            <span className="text-blue-600">backend architecture.</span>
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                        <p>
                            With over <strong>8 years of experience</strong>, I've dedicated my career to building the invisible backbone of the digital economy. My focus lies at the intersection of <strong>high-frequency fintech systems</strong> and <strong>developer experience automation</strong>.
                        </p>
                        <p>
                            I don't just write code; I design scalable distributed solutions that optimize the entire lifecycle of a request - from authentication at the edge to final persistence. My work at <strong>Mastercard</strong> and <strong>Amdocs</strong> has been defined by a relentless drive to eliminate manual overhead through intelligent tooling.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 pt-6">
                        <div>
                            <h4 className="font-bold text-slate-900 mb-2">Core Expertise</h4>
                            <ul className="space-y-2 text-sm text-slate-500 font-medium">
                                <li className="flex items-center gap-2 text-slate-700"><ChevronRight size={14} className="text-blue-600" /> Distributed Systems</li>
                                <li className="flex items-center gap-2 text-slate-700"><ChevronRight size={14} className="text-blue-600" /> Cloud Native APIs</li>
                                <li className="flex items-center gap-2 text-slate-700"><ChevronRight size={14} className="text-blue-600" /> Performance Tuning</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-2">My Focus</h4>
                            <ul className="space-y-2 text-sm text-slate-500 font-medium">
                                <li className="flex items-center gap-2 text-slate-700"><ChevronRight size={14} className="text-blue-600" /> CI/CD Optimization</li>
                                <li className="flex items-center gap-2 text-slate-700"><ChevronRight size={14} className="text-blue-600" /> Security Compliance</li>
                                <li className="flex items-center gap-2 text-slate-700"><ChevronRight size={14} className="text-blue-600" /> Internal Developer Portals</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
