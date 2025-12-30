import React from "react";
import SkillBadge from "./SkillBadge";

export default function SkillGroup({ title, icon, skills }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 px-2">
        {icon}
        <h4 className="font-bold text-xl text-slate-900 tracking-tight">
          {title}
        </h4>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <SkillBadge key={i} skill={skill} />
        ))}
      </div>
    </div>
  );
}
