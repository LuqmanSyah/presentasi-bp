"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Auto redirect to presentation after 2 seconds
    const timer = setTimeout(() => {
      router.push("/presentation");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center space-y-8 p-8">
        {" "}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">Pengenalan Pemrograman dan Sejarah Python</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Berdasarkan Buku &apos;Dasar-Dasar Pemrograman Python&apos;</p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
            <span className="text-gray-600">Memuat presentasi...</span>
          </div>

          <p className="text-sm text-gray-500">Anda akan diarahkan ke presentasi dalam beberapa detik</p>

          <Link href="/presentation" className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition-colors duration-200">
            Langsung ke Presentasi
          </Link>
        </div>
      </div>
    </div>
  );
}
