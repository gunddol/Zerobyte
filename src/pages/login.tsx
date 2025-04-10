import { useEffect } from "react";
import { auth } from "../lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/missions");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-6 rounded shadow text-center">
        <h1 className="text-xl font-bold mb-4">DigiTree 로그인</h1>
        <button
          onClick={handleLogin}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          구글 계정으로 로그인
        </button>
      </div>
    </div>
  );
}