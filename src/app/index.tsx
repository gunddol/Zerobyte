import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 text-center px-4">
      <h1 className="text-4xl font-bold mb-4">🌿 DigiTree</h1>
      <p className="text-lg mb-6">당신의 디지털 행동이 지구를 살립니다</p>
      <Link href="/missions">
        <a className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">시작하기</a>
      </Link>
    </div>
  );
}