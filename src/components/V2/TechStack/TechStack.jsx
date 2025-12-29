import React from "react";
import { Cpu, Database, Cloud } from "lucide-react";
import SkillGroup from "./SkillGroup";

export default function TechStack() {
  const stack = [
    {
      title: "Core & Backend",
      icon: <Cpu className="text-blue-500" />,
      skills: ["Java 17/21", "Spring Boot", "Spring Cloud", "Hibernate", "Node.js", "Python"],
    },
    {
      title: "Data & Messaging",
      icon: <Database className="text-emerald-500" />,
      skills: ["PostgreSQL", "Redis", "Kafka", "ActiveMQ", "SQL", "NoSQL"],
    },
    {
      title: "Cloud & Infra",
      icon: <Cloud className="text-indigo-500" />,
      skills: ["AWS", "PCF", "Kubernetes", "Docker", "Ansible", "Jenkins"],
    },
  ];

  return (
    <section id="stack" className="space-y-16 pb-24">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-slate-900">Technical Arsenal</h2>
        <p className="text-slate-500 max-w-xl mx-auto">
          Tools and frameworks used to architect high-performance distributed systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {stack.map((grp, i) => (
          <SkillGroup key={i} title={grp.title} icon={grp.icon} skills={grp.skills} />
        ))}
      </div>
    </section>
  );
}
