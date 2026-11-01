import {
  Code2,
  Cpu,
  Database,
  Cloud,
  TestTubeDiagonal,
  ShieldCheck,
} from "lucide-react";
import SkillGroup from "./SkillGroup";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const stack = [
  {
    title: "Languages",
    icon: <Code2 className="text-blue-600 dark:text-blue-400" size={20} />,
    core: ["Java 8 to 17", "SQL"],
    skills: ["Java 8 to 17", "SQL", "JavaScript", "Shell", "ReactJS"],
  },
  {
    title: "Backend",
    icon: <Cpu className="text-indigo-600 dark:text-indigo-400" size={20} />,
    core: ["Spring Boot", "Spring Batch", "Spring Security"],
    skills: [
      "Spring Boot",
      "Spring Cloud",
      "Spring Security",
      "Spring Batch",
      "Hibernate/JPA",
      "REST/OpenAPI",
    ],
  },
  {
    title: "Data",
    icon: <Database className="text-emerald-600 dark:text-emerald-400" size={20} />,
    core: ["Oracle (DDL, query tuning)", "Redis", "Kafka"],
    skills: [
      "Oracle (DDL, query tuning)",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Partitioning & Row Locks",
    ],
  },
  {
    title: "Platform & Observability",
    icon: <Cloud className="text-amber-600 dark:text-amber-400" size={20} />,
    core: ["Cloud Foundry", "Dynatrace", "Splunk"],
    skills: [
      "Cloud Foundry",
      "Docker",
      "Jenkins",
      "SonarQube",
      "Git",
      "Dynatrace",
      "Splunk",
    ],
  },
  {
    title: "Testing",
    icon: <TestTubeDiagonal className="text-teal-600 dark:text-teal-400" size={20} />,
    core: ["JUnit 5", "Karate", "WireMock"],
    skills: [
      "JUnit 5",
      "Mockito",
      "Karate",
      "PACT",
      "WireMock",
      "Load and performance testing",
    ],
  },
  {
    title: "Reliability & Security",
    icon: <ShieldCheck className="text-rose-600 dark:text-rose-400" size={20} />,
    core: ["Active-active failover", "PCI DSS", "FIDO2/passkeys", "Tokenization"],
    skills: [
      "Active-active failover",
      "Retry & Circuit breaker",
      "Idempotency",
      "PCI DSS",
      "HMAC",
      "JWT",
      "3DS",
      "FIDO2/passkeys",
      "Tokenization",
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="space-y-12 pb-12">
      <SectionHeading
        eyebrow="Competencies"
        title="Technical Skills & Ecosystem"
        subtitle="Core frameworks, distributed systems tooling, and security compliance standards applied in enterprise production."
        align="left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
        {stack.map((grp, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="h-full p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between">
              <SkillGroup
                title={grp.title}
                icon={grp.icon}
                skills={grp.skills}
                core={grp.core}
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
