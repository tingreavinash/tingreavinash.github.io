import SkillBadge from "./SkillBadge";

export default function SkillGroup({ title, icon, skills, core = [] }) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div>
          <h4 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white tracking-tight">
            {title}
          </h4>
          <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
            {skills.length} competencies
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pt-1">
        {skills.map((skill, i) => (
          <SkillBadge
            key={i}
            skill={skill}
            core={core.includes(skill)}
          />
        ))}
      </div>
    </div>
  );
}
