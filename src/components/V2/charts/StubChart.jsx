import React, { useRef, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function StubChart() {
  const chartRef = useRef(null);
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const data = {
    labels: ["Cleaned Up", "Remaining"],
    datasets: [
      {
        data: [5000, 1200],
        backgroundColor: ["#0f172a", "#e2e8f0"],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" } },
    animation: visible ? { duration: 1200 } : false,
  };

  return (
    <div ref={containerRef} className="w-full h-full">
      <Doughnut ref={chartRef} data={data} options={options} />
    </div>
  );
}