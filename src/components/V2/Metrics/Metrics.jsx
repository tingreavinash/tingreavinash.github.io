import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Zap, ShieldCheck, GitBranch, Terminal } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

// Register only the chart elements currently used
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function buildOptions(unit, dark) {
  const textColor = dark ? "#94a3b8" : "#64748b";
  const gridColor = dark ? "rgba(51, 65, 85, 0.4)" : "rgba(226, 232, 240, 0.7)";
  const tooltipBg = dark ? "#1e293b" : "#ffffff";
  const tooltipTitle = dark ? "#f8fafc" : "#0f172a";
  const tooltipBorder = dark ? "#334155" : "#e2e8f0";
  const legendColor = dark ? "#cbd5e1" : "#475569";

  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 600,
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: legendColor,
          font: { family: "'Inter', sans-serif", weight: 600, size: 11 },
          boxWidth: 12,
          padding: 10,
        },
      },
      tooltip: {
        backgroundColor: tooltipBg,
        titleColor: tooltipTitle,
        bodyColor: textColor,
        borderColor: tooltipBorder,
        borderWidth: 1,
        padding: 10,
        cornerRadius: 8,
        callbacks: {
          label: (ctx) => `${ctx.dataset.label || ""}: ${ctx.raw}${unit ? ` ${unit}` : ""}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: textColor,
          font: { size: 11 },
          callback: (v) => `${v}${unit ? ` ${unit}` : ""}`,
        },
        grid: {
          color: gridColor,
        },
      },
      x: {
        ticks: {
          color: textColor,
          font: { size: 11 },
        },
        grid: {
          display: false,
        },
      },
    },
  };
}

function buildMetrics(muted) {
  return {
    latency: {
      labels: ["Update API", "Lookup API"],
      datasets: [
        {
          label: "Baseline",
          data: [40, 16],
          backgroundColor: muted,
          borderRadius: 6,
        },
        {
          label: "Optimized",
          data: [20, 9],
          backgroundColor: "#2563eb",
          borderRadius: 6,
        },
      ],
    },
    coverage: {
      labels: ["Unit Test Coverage"],
      datasets: [
        {
          label: "Previous",
          data: [75],
          backgroundColor: muted,
          borderRadius: 6,
        },
        {
          label: "Current Standard",
          data: [90],
          backgroundColor: "#10b981",
          borderRadius: 6,
        },
      ],
    },
    branches: {
      labels: ["Stale Branches (7 Repos)"],
      datasets: [
        {
          label: "Before Cleanup",
          data: [1013],
          backgroundColor: muted,
          borderRadius: 6,
        },
        {
          label: "After Cleanup",
          data: [293],
          backgroundColor: "#8b5cf6",
          borderRadius: 6,
        },
      ],
    },
    deployment: {
      labels: ["Deployment Time", "Failure Rate"],
      datasets: [
        {
          label: "Manual Baseline",
          data: [100, 100],
          backgroundColor: muted,
          borderRadius: 6,
        },
        {
          label: "Ansible Automated",
          data: [50, 70],
          backgroundColor: "#f59e0b",
          borderRadius: 6,
        },
      ],
    },
  };
}

export default function Metrics() {
  const { theme } = useTheme();
  const dark = theme === "dark";
  const muted = dark ? "#334155" : "#cbd5e1";

  const metrics = buildMetrics(muted);

  return (
    <section id="metrics" className="space-y-12">
      <SectionHeading
        eyebrow="Measurable impact"
        title="Engineering Telemetry & Results"
        subtitle="Data-backed outcomes across payment directory latency, test coverage, repository hygiene, and deployment velocity."
        align="left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Metric 1: API Latency */}
        <Reveal delay={100}>
          <div className="bg-white dark:bg-slate-900/80 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-5 h-full">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                  <Zap size={18} />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Directory 2.0 API Latency (p90)
                </h4>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Update API cut by 50% (40 → 20 ms); Lookup API cut to 9 ms
              </p>
            </div>

            <div className="h-52 relative">
              <Bar
                key={`latency-${theme}`}
                data={metrics.latency}
                options={buildOptions("ms", dark)}
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/60">
              <strong>Halved p90 latency</strong> on Directory 2.0 update API (<strong>40 ms → 20 ms</strong>) and lookup API (<strong>16 ms → 9 ms</strong>) by executing parallel decryption, removing unused token decrypts, replacing N+1 queries with batched reads, and bounding fan-out.
            </p>
          </div>
        </Reveal>

        {/* Metric 2: Unit Test Coverage */}
        <Reveal delay={200}>
          <div className="bg-white dark:bg-slate-900/80 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-5 h-full">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck size={18} />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Unit Test Coverage Across 7 Repos
                </h4>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Comprehensive JUnit 5 & Karate test rigor
              </p>
            </div>

            <div className="h-52 relative">
              <Bar
                key={`coverage-${theme}`}
                data={metrics.coverage}
                options={buildOptions("%", dark)}
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/60">
              Raised unit test coverage from <strong>75% → 90%</strong> across 7 core services with squash merges, Karate integration coverage, and serving as primary reviewer on 3 repositories.
            </p>
          </div>
        </Reveal>

        {/* Metric 3: Repository Hygiene */}
        <Reveal delay={300}>
          <div className="bg-white dark:bg-slate-900/80 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-5 h-full">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
                  <GitBranch size={18} />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Repository Hygiene & Branch Pruning
                </h4>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Purged 720 of 1,013 stale branches across 7 repositories (71%)
              </p>
            </div>

            <div className="h-52 relative">
              <Bar
                key={`branches-${theme}`}
                data={metrics.branches}
                options={buildOptions("", dark)}
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/60">
              Cleaned <strong>720 of 1,013 stale branches (71%)</strong> across 7 payment repositories, eliminating dead code paths and enforcing clean trunk-based branch lifecycles.
            </p>
          </div>
        </Reveal>

        {/* Metric 4: Deployment Automation */}
        <Reveal delay={400}>
          <div className="bg-white dark:bg-slate-900/80 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-5 h-full">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
                  <Terminal size={18} />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Ansible Linux Deployment Automation
                </h4>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                50% reduction in deployment time; 30% reduction in errors
              </p>
            </div>

            <div className="h-52 relative">
              <Bar
                key={`deployment-${theme}`}
                data={metrics.deployment}
                options={buildOptions("%", dark)}
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/60">
              Automated enterprise Linux release deployments using Ansible and shell scripts, cutting deployment duration by <strong>50%</strong> and production configuration errors by <strong>30%</strong>.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
