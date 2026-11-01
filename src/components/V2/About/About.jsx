import { ChevronRight, Cpu, ShieldCheck } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const expertise = [
  "Distributed systems & data migration",
  "Oracle data modelling & query tuning",
  "Latency tuning & PCI DSS compliance",
  "Tokenization & P2P payments",
];

const focus = [
  "FIDO2 / passkeys & authentication",
  "Retry, circuit breaking & idempotency",
  "Code reviews & test coverage (90%)",
  "Engineering mentorship & onboarding",
];

function List({ title, icon: Icon, items }) {
  return (
    <div className="space-y-3">
      <h4 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 text-xs uppercase tracking-wider">
        <Icon size={15} className="text-blue-600 dark:text-blue-400 shrink-0" />
        <span>{title}</span>
      </h4>
      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 font-medium">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <ChevronRight size={14} className="text-blue-600 dark:text-blue-400 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative space-y-12">
      <SectionHeading
        eyebrow="About me"
        title="Backend engineering for payments at scale."
        subtitle="Specializing in distributed payment architecture, low-latency microservices, and continuous engineering rigor."
        align="left"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Portrait */}
        <div className="lg:col-span-5">
          <Reveal delay={100}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-800 shadow-xl">
              <picture>
                <source
                  srcSet={process.env.PUBLIC_URL + "/assets/images/profile5.webp"}
                  type="image/webp"
                />
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/profile5.jpeg"}
                  alt="Avinash Tingre"
                  width="400"
                  height="500"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </picture>
              <div className="absolute bottom-5 left-5 right-5 p-5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800">
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Engineering Philosophy
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 italic mt-1">
                  "Build for scale, automate for sanity."
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Narrative & Lists */}
        <div className="lg:col-span-7">
          <Reveal delay={200}>
            <div className="space-y-6">
              <div className="space-y-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                <p>
                  Senior Software Engineer with <strong>9 years of experience</strong> building payment platforms in <strong>Java and Spring Boot</strong>, the last 4+ on <strong>Mastercard Checkout Solutions (Click to Pay)</strong>. Currently the design owner and epic lead for a <strong>40M+ card data migration</strong>, working day to day with engineering, DBA, SRE and architecture.
                </p>
                <p>
                  Halved p90 latency on core directory APIs, raised unit test coverage from 75% to 90%, moved 7 repositories to cleaner branching and merge practices, and onboarded 3 engineers.
                </p>
              </div>

              {/* Local List Components */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200/80 dark:border-slate-800">
                <List
                  title="Core Architecture & Data"
                  icon={Cpu}
                  items={expertise}
                />
                <List
                  title="Fintech Resilience & Security"
                  icon={ShieldCheck}
                  items={focus}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
