import { useEffect } from "react";

export default function Map() {
  useEffect(() => {
    console.log("지도 API 불러오기");
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">🗺 내가 심은 나무들</h1>
      <div className="w-full h-96 bg-white shadow rounded flex items-center justify-center text-gray-500">
        [Google Map 위치 표시 영역 – 추후 연동 필요]
      </div>
    </div>
  );
}