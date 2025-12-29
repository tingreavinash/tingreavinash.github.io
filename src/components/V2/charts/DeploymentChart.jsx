import React, { useRef, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function DeploymentChart() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate only once as requested
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const data = {
    labels: ["Manual", "Ansible"],
    datasets: [
      {
        label: "Minutes",
        data: [120, 60],
        backgroundColor: ["#94a3b8", "#0f172a"],
        borderRadius: 12
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" }
    },
    scales: {
      y: { beginAtZero: true, grid: { display: false } }
    }
  };

  return (
    <div ref={containerRef} className="w-full h-full">
      {visible && <Bar data={data} options={options} />}
    </div>
  );
}