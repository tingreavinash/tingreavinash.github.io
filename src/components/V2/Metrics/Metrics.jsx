import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Legend } from "chart.js";
import { Sparkles, Zap, Search } from "lucide-react";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Legend);

const prReviewData = {
  labels: ['Before CodeSentinel', 'After CodeSentinel'],
  datasets: [{
    label: 'Avg. Hours to First Review',
    data: [8, 1],
    backgroundColor: ['#94a3b8', '#3b82f6'],
    borderRadius: 8,
  }]
};

const toolkitEfficiencyData = {
  labels: ['Manual Debugging', 'Checkout Toolkit'],
  datasets: [{
    label: 'Task Completion Time (Mins)',
    data: [15, 1],
    backgroundColor: ['#f43f5e', '#10b981'],
    borderRadius: 8,
  }]
};

const hotfixSearchImpact = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Manual Search Tickets',
    data: [85, 78, 40, 12, 5, 2],
    borderColor: '#3b82f6',
    tension: 0.4,
    fill: true,
    backgroundColor: 'rgba(59, 130, 246, 0.1)'
  }]
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: { font: { family: "'Plus Jakarta Sans', sans-serif", weight: 600 } }
    }
  }
};



export default function Metrics() {
  return (
    <section id="metrics" className="space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900">Engineering Impact</h2>
        <p className="text-slate-500 text-lg">A data-driven look at how my technical solutions improved project health.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Chart 1 - PR Reviewer */}
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-shadow space-y-6 flex flex-col">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><Sparkles size={20}/></div>
            <h4 className="font-bold text-slate-800">Auto PR Reviewer</h4>
          </div>
          <div className="flex-1 h-48 relative">
            <Bar data={prReviewData} options={chartOptions}/>
          </div>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            Cut first-review wait time from <strong>14 hrs → 5 mins feedback</strong>. Eliminated repetitive manual checks using static analysis automation.
          </p>
        </div>

        {/* Chart 2 - Checkout Toolkit */}
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-shadow space-y-6 flex flex-col">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600"><Zap size={20}/></div>
            <h4 className="font-bold text-slate-800">Checkout Toolkit</h4>
          </div>
          <div className="flex-1 h-48 relative">
            <Bar data={toolkitEfficiencyData} options={chartOptions}/>
          </div>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            Accelerated encrypted payload debugging <strong>15 mins → 1 min</strong>. Boosted developer productivity & reduced dependency on support.
          </p>
        </div>

        {/* Chart 3 - Hotfix Search */}
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-shadow space-y-6 flex flex-col">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600"><Search size={20}/></div>
            <h4 className="font-bold text-slate-800">Hotfix Intelligence</h4>
          </div>
          <div className="flex-1 h-48 relative">
            <Line data={hotfixSearchImpact} options={chartOptions}/>
          </div>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            Migrated Excel-based tracking to searchable DB store with Web UI. Achieved <strong>~90% reduction</strong> in lookup time for legacy hotfix records.
          </p>
        </div>
      </div>
    </section>
  );
}