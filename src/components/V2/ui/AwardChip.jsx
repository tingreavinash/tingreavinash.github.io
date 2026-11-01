import { Award } from "lucide-react";

export default function AwardChip({ name, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 border border-amber-200/80 dark:border-amber-800/40 shadow-xs ${className}`}
    >
      <Award size={13} className="text-amber-600 dark:text-amber-400 shrink-0" />
      <span>{name}</span>
    </span>
  );
}
