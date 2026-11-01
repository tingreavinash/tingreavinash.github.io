export default function SkillBadge({ skill, core = false }) {
  return (
    <span
      className={`px-3 py-1.5 rounded-xl text-xs transition-colors cursor-default border ${
        core
          ? "bg-slate-900 dark:bg-blue-600 text-white border-slate-900 dark:border-blue-600 font-bold shadow-xs"
          : "bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80 font-medium hover:border-slate-300 dark:hover:border-slate-600"
      }`}
    >
      {skill}
    </span>
  );
}
