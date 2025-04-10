import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Impact() {
  const [carbonSaved] = useState(3.2);

  const data = {
    labels: ["탄소 절감", "A4 용지", "전등 사용량", "차량 주행"],
    datasets: [
      {
        label: "절감 수치",
        data: [carbonSaved, carbonSaved * 200, carbonSaved * 10, carbonSaved * 0.3],
        backgroundColor: "rgba(34, 197, 94, 0.7)",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold text-center mb-6">📊 탄소 절감 시각화</h1>
      <div className="max-w-2xl mx-auto">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}