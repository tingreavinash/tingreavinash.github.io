import { MapPin, FileDown, ArrowRight, Database, TrendingDown, ShieldCheck, Award } from "lucide-react";
import Reveal from "../ui/Reveal";
import { RESUME_URL, EMAIL } from "../data/site";

export default function Hero({ scrollTo }) {
  const stats = [
    {
      value: "40M+",
      label: "Card records migrated",
      detail: "Directory 2.0 P2P platform lead",
      icon: <Database className="text-blue-600 dark:text-blue-400" size={20} />,
      delay: 100,
    },
    {
      value: "~50%",
      label: "p90 latency cut",
      detail: "Update 40→20 ms, Lookup 16→9 ms",
      icon: <TrendingDown className="text-emerald-600 dark:text-emerald-400" size={20} />,
      delay: 200,
    },
    {
      value: "90%",
      label: "Coverage (from 75%)",
      detail: "Raised across 7 core repos",
      icon: <ShieldCheck className="text-indigo-600 dark:text-indigo-400" size={20} />,
      delay: 300,
    },
    {
      value: "6+",
      label: "Awards across 3 employers",
      detail: "Game Changer, Move Fast & Spots",
      icon: <Award className="text-amber-600 dark:text-amber-400" size={20} />,
      delay: 400,
    },
  ];

  return (
    <section id="hero" className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-4 sm:pt-8 pb-4">
      {/* Left Column: Headline, Info & Actions */}
      <div className="flex-1 space-y-7 text-center lg:text-left">
        {/* Profile Pill & Location */}
        <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-3">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900 dark:bg-slate-800 text-white text-xs font-semibold shadow-sm">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/avatar.webp"}
              alt="Avinash Tingre"
              className="w-6 h-6 rounded-full object-cover ring-2 ring-white/20"
              width="24"
              height="24"
            />
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden"></span>
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>Senior Software Engineer @ Mastercard</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
            <MapPin size={13} className="text-slate-400 dark:text-slate-500" />
            <span>Pune, India</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.08] tracking-tight heading-tight text-balance">
          Payment platforms <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-900 dark:to-slate-200">
            built to scale.
          </span>
        </h1>

        {/* Subcopy */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
          Nine years of experience in Java and Spring Boot on payment platforms. Currently the design owner and epic lead for a 40M+ card data migration at Mastercard Checkout Solutions.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3.5 justify-center lg:justify-start items-center pt-2">
          <button
            onClick={() => scrollTo && scrollTo("experience")}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-sm sm:text-base font-bold shadow-lg shadow-blue-500/20 hover:shadow-xl transition-all active:scale-95"
          >
            <span>View Experience</span>
            <ArrowRight size={17} />
          </button>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-2xl text-sm sm:text-base font-bold hover:bg-slate-50 dark:hover:bg-slate-700/70 hover:border-slate-300 transition-all shadow-sm active:scale-95"
          >
            <FileDown size={17} className="text-blue-600 dark:text-blue-400" />
            <span>Resume</span>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center px-4 py-3.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm sm:text-base font-semibold transition-colors"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Right Column: Stat Cards Grid */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {stats.map((stat, i) => (
          <Reveal key={i} delay={stat.delay}>
            <div className="bg-white dark:bg-slate-900/80 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all space-y-3">
              <div className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl w-fit border border-slate-100 dark:border-slate-700">
                {stat.icon}
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight heading-tight">
                  {stat.value}
                </p>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  {stat.detail}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
