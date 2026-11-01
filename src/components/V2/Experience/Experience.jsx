import { useState } from "react";
import { Calendar, MapPin, CheckCircle2, Terminal, GraduationCap } from "lucide-react";
import { experienceData, education } from "../data/experience";
import SectionHeading from "../ui/SectionHeading";
import Highlight from "../ui/Highlight";
import AwardChip from "../ui/AwardChip";

function TimelineStrip({ data, activeId, onSelect }) {
  // Chronological order: oldest to newest
  const chronological = [...data].reverse();

  return (
    <div className="grid grid-cols-4 gap-2 py-4 px-2 sm:px-6 bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs mb-8">
      {chronological.map((item, index) => {
        const isActive = item.id === activeId;
        const year = item.period.split(" ")[0].replace(/[^\d]/g, "") || item.period;

        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            aria-pressed={isActive}
            className="flex flex-col items-center text-center group py-1 transition-all"
          >
            <div className="flex items-center w-full">
              <div
                className={`h-0.5 flex-1 ${
                  index === 0
                    ? "invisible"
                    : isActive
                    ? "bg-blue-600 dark:bg-blue-500"
                    : "bg-slate-200 dark:bg-slate-800"
                }`}
              />
              <div
                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 shrink-0 ${
                  isActive
                    ? "bg-blue-600 scale-125 ring-4 ring-blue-100 dark:ring-blue-950"
                    : "bg-slate-300 dark:bg-slate-700 group-hover:bg-slate-400"
                }`}
              />
              <div
                className={`h-0.5 flex-1 ${
                  index === chronological.length - 1
                    ? "invisible"
                    : isActive
                    ? "bg-blue-600 dark:bg-blue-500"
                    : "bg-slate-200 dark:bg-slate-800"
                }`}
              />
            </div>
            <span
              className={`text-xs font-bold mt-2 transition-colors ${
                isActive
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white"
              }`}
            >
              {item.company}
            </span>
            <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500">
              {year}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function SubRole({ role }) {
  return (
    <div className="relative pl-6 pb-8 last:pb-0 border-l-2 border-slate-200 dark:border-slate-800 ml-2">
      {/* Timeline Dot */}
      <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500 border-2 border-white dark:border-slate-900 shadow-xs" />

      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            {role.title}
          </h4>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 shrink-0">
            {role.period}
          </span>
        </div>

        {/* Sub-role Awards */}
        {role.awards && role.awards.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-0.5">
            {role.awards.map((award, i) => (
              <AwardChip key={i} name={award} />
            ))}
          </div>
        )}

        {/* Highlights */}
        <ul className="space-y-2.5 pt-1">
          {role.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <CheckCircle2
                size={16}
                className="text-blue-600 dark:text-blue-400 mt-1 shrink-0"
              />
              <Highlight text={h} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  const [activeId, setActiveId] = useState(experienceData[0].id);

  const current = experienceData.find((e) => e.id === activeId) || experienceData[0];

  return (
    <section id="experience" className="space-y-10">
      <SectionHeading
        eyebrow="Work history"
        title="Career Journey"
        subtitle="Chronological overview of senior engineering leadership, payment platforms, and client engagements."
        align="left"
      />

      {/* Chronological Timeline Strip */}
      <TimelineStrip
        data={experienceData}
        activeId={activeId}
        onSelect={setActiveId}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Company Tab Rail with snap-tabs and mobile scroll fade */}
        <div className="lg:col-span-4 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-6 before:bg-gradient-to-r before:from-[#fcfcf9] dark:before:from-[#0b0f19] before:pointer-events-none before:z-10 lg:before:hidden after:absolute after:right-0 after:top-0 after:bottom-0 after:w-6 after:bg-gradient-to-l after:from-[#fcfcf9] dark:after:from-[#0b0f19] after:pointer-events-none after:z-10 lg:after:hidden">
          <div className="flex lg:flex-col overflow-x-auto snap-tabs gap-3 pb-2 lg:pb-0">
            {experienceData.map((exp) => {
              const isSelected = activeId === exp.id;

              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveId(exp.id)}
                  aria-pressed={isSelected}
                  className={`w-auto min-w-[220px] lg:min-w-0 lg:w-full flex items-center text-left gap-3.5 p-4 rounded-2xl transition-all duration-200 border shrink-0 lg:shrink ${
                    isSelected
                      ? "bg-slate-900 dark:bg-slate-800 text-white border-slate-900 dark:border-slate-700 shadow-md lg:translate-x-1"
                      : "bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80"
                  }`}
                >
                  <div className="h-11 w-12 shrink-0 rounded-xl bg-white p-2 border border-slate-100 flex items-center justify-center">
                    <img
                      src={process.env.PUBLIC_URL + exp.logo}
                      alt={exp.company}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <p className="font-bold text-sm sm:text-base truncate">
                        {exp.company}
                      </p>
                      {exp.id === "mastercard" && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 shrink-0">
                          Current
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-xs truncate font-medium mt-0.5 ${
                        isSelected
                          ? "text-slate-300"
                          : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {exp.role}
                    </p>
                    <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 mt-1">
                      {exp.period}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detail Card Remounted on key change */}
        <div className="lg:col-span-8">
          <div
            key={current.id}
            className="animate-fade-up motion-reduce:animate-none bg-white dark:bg-slate-900/80 p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-7"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800 gap-4">
              <div className="flex items-center gap-4">
                <div className="h-14 w-16 rounded-2xl bg-white p-2 border border-slate-100 shadow-2xs flex items-center justify-center shrink-0">
                  <img
                    src={process.env.PUBLIC_URL + current.logo}
                    alt={current.company}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight heading-tight">
                    {current.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2.5 mt-1 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                    <span className="font-bold text-slate-800 dark:text-slate-200">
                      {current.company}
                    </span>
                    {current.subtitle && (
                      <>
                        <span>•</span>
                        <span className="italic text-slate-600 dark:text-slate-300">
                          {current.subtitle}
                        </span>
                      </>
                    )}
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={13} className="text-blue-600 dark:text-blue-400" />
                      {current.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} />
                      {current.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Company-level Awards */}
            {current.awards && current.awards.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {current.awards.map((award, i) => (
                  <AwardChip key={i} name={award} />
                ))}
              </div>
            )}

            {/* Roles vs Flat Highlights */}
            {current.roles ? (
              <div className="space-y-6 pt-2">
                {current.roles.map((role, idx) => (
                  <SubRole key={idx} role={role} />
                ))}
              </div>
            ) : (
              <ul className="space-y-3 pt-2">
                {current.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    <CheckCircle2
                      size={16}
                      className="text-blue-600 dark:text-blue-400 mt-1 shrink-0"
                    />
                    <Highlight text={h} />
                  </li>
                ))}
              </ul>
            )}

            {/* Tech Ecosystem Footer */}
            {current.stack && current.stack.length > 0 && (
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <Terminal size={13} /> Tech Ecosystem
                </p>
                <div className="flex flex-wrap gap-2">
                  {current.stack.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Education Card Appended at the end of Experience */}
      <div className="mt-12 bg-white dark:bg-slate-900/80 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
            <GraduationCap size={28} />
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
              {education.degree}
            </h4>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
              {education.school}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {education.location}
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300">
          <Calendar size={13} className="text-blue-600 dark:text-blue-400" />
          <span>Graduated {education.year}</span>
        </div>
      </div>
    </section>
  );
}
