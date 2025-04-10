import { useState } from "react";
import Link from "next/link";

const initialMissions = [
  { id: 1, text: "Gmail 정리 (100개 삭제)", completed: false },
  { id: 2, text: "사진 1GB 삭제", completed: false },
  { id: 3, text: "클라우드 백업 정리", completed: false },
];

export default function Missions() {
  const [missions, setMissions] = useState(initialMissions);

  const completeMission = (id: number) => {
    setMissions(prev =>
      prev.map(m => (m.id === id ? { ...m, completed: true } : m))
    );
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold text-center mb-6">✅ 오늘의 미션</h1>
      <ul className="space-y-4 max-w-md mx-auto">
        {missions.map(m => (
          <li key={m.id} className="bg-green-100 p-4 rounded shadow flex justify-between items-center">
            <span className={m.completed ? "line-through text-gray-500" : ""}>{m.text}</span>
            {!m.completed && (
              <button
                onClick={() => completeMission(m.id)}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                완료
              </button>
            )}
          </li>
        ))}
      </ul>
      <div className="text-center mt-8">
        <Link href="/tree" className="text-blue-600 underline">
          나무 성장 페이지로 이동
        </Link>
      </div>
    </div>
  );
}