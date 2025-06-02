"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center space-y-12 p-8 max-w-4xl mx-auto">
        {/* Main Title */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6">
          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-7xl mb-8">
            📚
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Presentasi Pemrograman</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Pilih bahasa pemrograman yang ingin Anda pelajari</p>
        </motion.div>

        {/* Presentation Options */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Python Presentation */}
          <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} className="group">
            <Link href="/presentation">
              <div className="bg-gradient-to-br from-blue-600/20 to-green-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 h-full">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6, type: "spring", stiffness: 200 }} className="text-6xl mb-6">
                  🐍
                </motion.div>

                <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">Python</h2>

                <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors">Pengenalan Pemrograman dan Sejarah Python</p>

                <div className="space-y-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  <div>• Sejarah dan Filosofi Python</div>
                  <div>• Sintaks Dasar</div>
                  <div>• Aplikasi Python</div>
                  <div>• Kelebihan & Kekurangan</div>
                </div>

                <motion.div className="mt-6 inline-flex items-center space-x-2 text-blue-400 group-hover:text-blue-300 transition-colors" whileHover={{ x: 5 }}>
                  <span>Mulai Presentasi</span>
                  <span>→</span>
                </motion.div>
              </div>
            </Link>
          </motion.div>

          {/* C++ Presentation */}
          <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} className="group">
            <Link href="/cpp-presentation">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 h-full">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8, type: "spring", stiffness: 200 }} className="text-6xl mb-6">
                  🚀
                </motion.div>

                <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">C++</h2>

                <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors">Pemrograman Berorientasi Objek dan Sistem</p>

                <div className="space-y-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  <div>• Sejarah C++</div>
                  <div>• Object-Oriented Programming</div>
                  <div>• Aplikasi C++</div>
                  <div>• Performa & Efisiensi</div>
                </div>

                <motion.div className="mt-6 inline-flex items-center space-x-2 text-purple-400 group-hover:text-purple-300 transition-colors" whileHover={{ x: 5 }}>
                  <span>Mulai Presentasi</span>
                  <span>→</span>
                </motion.div>
              </div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }} className="text-center">
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30 max-w-2xl mx-auto">
            <p className="text-gray-400 text-sm">
              💡 <span className="font-semibold text-cyan-400">Tips:</span>
              Gunakan keyboard shortcuts: ← → untuk navigasi, F untuk fullscreen, P untuk auto-play
            </p>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-20 text-4xl opacity-20"
        >
          ⚙️
        </motion.div>

        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 text-3xl opacity-20"
        >
          💻
        </motion.div>

        <motion.div
          animate={{
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-20 text-2xl opacity-20"
        >
          📊
        </motion.div>

        <motion.div
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 text-3xl opacity-20"
        >
          🔧
        </motion.div>
      </div>
    </div>
  );
}
