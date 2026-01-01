import { Cpu, Database, Cloud, TestTubeDiagonal  } from "lucide-react";
import SkillGroup from "./SkillGroup";

export default function TechStack() {
  const stack = [
    {
      title: "Core & Backend",
      icon: <Cpu className="text-blue-500" />,
      skills: ["Java", "Spring Boot", "Spring Cloud", "Spring Security", "Spring Batch", "Hibernate", "ReactJS"],
    },
    {
      title: "Distributed Systems",
      icon: <Database className="text-emerald-500" />,
      skills: ["Redis", "Kafka", "ActiveMQ", "SQL", "NoSQL", "Microservices", "API Gateway"],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="text-indigo-500" />,
      skills: ["AWS", "PCF", "Kubernetes", "Docker", "Shell Script", "Ansible", "Jenkins"],
    },
    {
      title: "Testing & Quality",
      icon: <TestTubeDiagonal  className="text-green-500" />,
      skills: ["JUnit", "Mockito", "WireMock", "Karate Framework", "PACT (Contract Testing)"],
    },
  ];

  return (
    <section id="stack" className="space-y-16 pb-24">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-slate-900">Technical Skills</h2>
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
