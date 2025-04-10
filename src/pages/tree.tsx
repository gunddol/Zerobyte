import Image from "next/image";
import { useEffect, useState } from "react";

export default function Tree() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStage(prev => (prev < 2 ? prev + 1 : prev));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const treeImages = [
    "/tree_stage1.png",
    "/tree_stage2.png",
    "/tree_stage3.png",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
      <h1 className="text-2xl font-bold mb-6">🌱 나무 성장</h1>
      <div className="w-48 h-48 relative">
        <Image src={treeImages[stage]} alt="Tree Growth" layout="fill" objectFit="contain" />
      </div>
      <p className="mt-4 text-center">미션 완료에 따라 나무가 자랍니다!</p>
    </div>
  );
}