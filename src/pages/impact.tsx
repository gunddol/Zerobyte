import dynamic from "next/dynamic";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
  ChartData,
  ChartOptions,
} from "chart.js";

// Chart.js 컴포넌트 등록
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

// 클라이언트 사이드에서만 렌더링
const Bar = dynamic(() => import("react-chartjs-2").then(mod => mod.Bar), { ssr: false });

const data: ChartData<"bar"> = {
  labels: ["탄소 절감", "A4 용지", "전기 사용량", "차량 주행"],
  datasets: [
    {
      label: "절감 수치",
      data: [3.2, 640, 32, 0.96],
      backgroundColor: ["#10B981", "#3B82F6", "#F59E0B", "#EF4444"],
      borderRadius: 5,
    },
  ],
};

const options: ChartOptions<"bar"> = {
  responsive: true,
  scales: {
    y: { beginAtZero: true },
  },
};

export default function Impact() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">📊 당신의 탄소 절감 효과</h2>
      <div className="max-w-3xl mx-auto">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
