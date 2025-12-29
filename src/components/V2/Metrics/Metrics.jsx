import React from "react";
import ChartCard from "./ChartCard";
import StubChart from "../charts/StubChart";
import DeploymentChart from "../charts/DeploymentChart";

export default function Metrics() {
  return (
    <section id="metrics" className="space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900">Quantifiable Impact</h2>
        <p className="text-slate-500 text-lg">A data-driven look at how my technical interventions improved project health.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ChartCard title="The 5000-Stub Cleanup" subtitle="WireMock optimization & unused stub purge" >
          <div className="h-64"><StubChart /></div>
        </ChartCard>
        <ChartCard title="Deployment Velocity" subtitle="Ansible automation removed overhead" >
          <div className="h-64"><DeploymentChart /></div>
        </ChartCard>
      </div>
    </section>
  );
}