import React from "react";

export default function ChartCard({ title, subtitle, children }) {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
      <div>
        <h4 className="text-xl font-bold text-slate-800 tracking-tight">{title}</h4>
        {subtitle && <p className="text-slate-500 mt-2">{subtitle}</p>}
      </div>
      <div className="h-64">{children}</div>
    </div>
  );
}