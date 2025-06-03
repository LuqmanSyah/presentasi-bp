"use client";

import { motion } from "framer-motion";

export default function CppSlide5() {
  return (
    <div className="h-full flex flex-col justify-center text-white p-8 pt-20">
      {/* Unified Paradigm Comparison Card */}
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative group">
          <motion.div
            whileHover={{ scale: 1.01, y: -3 }}
            className="relative bg-gradient-to-br from-slate-800/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl rounded-3xl p-10 border border-purple-400/40 hover:border-purple-400/80 overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/30"
          >
            {/* Enhanced glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-cyan-500/5 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-400/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />

            {/* Animated corner accents */}
            <motion.div
              className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400/25 via-cyan-500/20 to-orange-500/25 rounded-bl-full"
              initial={{ scale: 0, rotate: -45, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 150 }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-orange-400/20 via-red-500/15 to-purple-400/20 rounded-tr-full"
              initial={{ scale: 0, rotate: 45, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7, type: "spring", stiffness: 150 }}
            />

            {/* Header */}
            <div className="text-center mb-10">
              <motion.h2 className="font-bold text-3xl mb-4 bg-gradient-to-r from-purple-400 via-cyan-300 to-orange-400 bg-clip-text text-transparent" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                Pendekatan Pemrograman & Konsep OOP
              </motion.h2>
              <motion.span
                className="px-6 py-3 rounded-full text-sm font-bold bg-gradient-to-r from-purple-400/25 to-cyan-400/25 text-purple-300 border border-purple-400/30 shadow-lg backdrop-blur-sm"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Programming Paradigms
              </motion.span>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
              {/* Paradigm Comparison */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-cyan-300 bg-clip-text text-transparent flex items-center">
                  <span className="text-3xl mr-3">⚖️</span>
                  Perbandingan Paradigma
                </h3>

                {/* Procedural Paradigm */}
                <motion.div className="p-6 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-400/20 hover:border-orange-400/40 transition-all duration-300" whileHover={{ scale: 1.02, x: 5 }}>
                  <div className="flex items-center mb-4">
                    <motion.div className="text-3xl flex-shrink-0 mr-4" whileHover={{ scale: 1.2, rotate: 10 }}>
                      📋
                    </motion.div>
                    <h4 className="text-xl font-bold text-orange-300">Prosedural (C)</h4>
                  </div>
                  <p className="text-slate-300 text-base leading-relaxed mb-4">Instruksi berurutan, fokus pada fungsi</p>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-green-400 mt-1">✅</span>
                      <div>
                        <span className="text-sm font-semibold text-green-400">Kelebihan:</span>
                        <p className="text-slate-300 text-sm">Sederhana untuk tugas kecil</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-red-400 mt-1">❌</span>
                      <div>
                        <span className="text-sm font-semibold text-red-400">Kekurangan:</span>
                        <p className="text-slate-300 text-sm">Sulit untuk proyek besar, rawan duplikasi kode</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* OOP Paradigm */}
                <motion.div className="p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300" whileHover={{ scale: 1.02, x: 5 }}>
                  <div className="flex items-center mb-4">
                    <motion.div className="text-3xl flex-shrink-0 mr-4" whileHover={{ scale: 1.2, rotate: 10 }}>
                      🏗️
                    </motion.div>
                    <h4 className="text-xl font-bold text-cyan-300">OOP (C++)</h4>
                  </div>
                  <p className="text-slate-300 text-base leading-relaxed mb-4">Berbasis objek dengan data dan metode terintegrasi</p>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-green-400 mt-1">✅</span>
                      <div>
                        <span className="text-sm font-semibold text-green-400">Kelebihan:</span>
                        <p className="text-slate-300 text-sm">Terstruktur, mudah dipelihara, reusable</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-red-400 mt-1">❌</span>
                      <div>
                        <span className="text-sm font-semibold text-red-400">Kekurangan:</span>
                        <p className="text-slate-300 text-sm">Lebih kompleks untuk tugas sederhana</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* OOP Pillars */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent flex items-center">
                  <span className="text-3xl mr-3">🏛️</span>
                  Pilar OOP
                </h3>

                <div className="grid grid-cols-1 gap-4">
                  {/* Encapsulation */}
                  <motion.div
                    className="flex items-center p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <span className="text-2xl mr-4">🔒</span>
                    <div>
                      <h4 className="font-semibold text-purple-300 mb-1">Encapsulation</h4>
                      <p className="text-slate-400 text-sm">Pembungkusan data</p>
                    </div>
                  </motion.div>

                  {/* Inheritance */}
                  <motion.div
                    className="flex items-center p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/20 hover:border-green-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <span className="text-2xl mr-4">🧬</span>
                    <div>
                      <h4 className="font-semibold text-green-300 mb-1">Inheritance</h4>
                      <p className="text-slate-400 text-sm">Pewarisan sifat</p>
                    </div>
                  </motion.div>

                  {/* Polymorphism */}
                  <motion.div
                    className="flex items-center p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    <span className="text-2xl mr-4">🎭</span>
                    <div>
                      <h4 className="font-semibold text-blue-300 mb-1">Polymorphism</h4>
                      <p className="text-slate-400 text-sm">Bentuk beragam</p>
                    </div>
                  </motion.div>

                  {/* Abstraction */}
                  <motion.div
                    className="flex items-center p-4 rounded-xl bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  >
                    <span className="text-2xl mr-4">🎨</span>
                    <div>
                      <h4 className="font-semibold text-pink-300 mb-1">Abstraction</h4>
                      <p className="text-slate-400 text-sm">Penyederhanaan</p>
                    </div>
                  </motion.div>
                </div>

                {/* Multi-paradigm Highlight */}
                <motion.div
                  className="p-6 rounded-xl bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-orange-500/15 border border-cyan-400/30"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-3">🔄</span>
                    <h4 className="text-xl font-bold text-cyan-400">C++: Multi-paradigma</h4>
                  </div>
                  <p className="text-slate-300 text-base leading-relaxed">Mendukung prosedural dan OOP - programmer bisa memilih pendekatan prosedural untuk tugas sederhana atau OOP untuk proyek kompleks</p>
                </motion.div>
              </div>
            </div>

            {/* Progress line */}
            <div className="relative mt-8 h-1 bg-slate-700/50 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} whileHover={{ width: "100%" }} transition={{ duration: 1.2, ease: "easeOut" }} className="h-full bg-gradient-to-r from-orange-400 to-purple-500 rounded-full shadow-lg shadow-purple-500/50" />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400/60 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    left: `${10 + i * 20}%`,
                    top: `${15 + i * 15}%`,
                  }}
                  animate={{
                    y: [-8, -16, -8],
                    opacity: [0, 0.8, 0],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* Enhanced Decorative Elements */}{" "}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
        animate={{ opacity: 0.15, scale: 1, rotate: 12 }}
        transition={{ delay: 2, duration: 1.5, type: "spring", stiffness: 100 }}
        className="absolute top-20 left-10 font-mono text-lg text-orange-400 filter drop-shadow-lg bg-slate-900/30 px-3 py-2 rounded-lg backdrop-blur-sm border border-orange-400/20"
      >
        {/* Procedural */}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
        animate={{ opacity: 0.15, scale: 1, rotate: -12 }}
        transition={{ delay: 2.5, duration: 1.5, type: "spring", stiffness: 100 }}
        className="absolute top-32 right-16 font-mono text-lg text-cyan-400 filter drop-shadow-lg bg-slate-900/30 px-3 py-2 rounded-lg backdrop-blur-sm border border-cyan-400/20"
      >
        class Object {`{}`}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 0.15, scale: 1, rotate: 6 }}
        transition={{ delay: 3, duration: 1.5, type: "spring", stiffness: 100 }}
        className="absolute bottom-20 left-20 font-mono text-lg text-purple-400 filter drop-shadow-lg bg-slate-900/30 px-3 py-2 rounded-lg backdrop-blur-sm border border-purple-400/20"
      >
        obj.method()
      </motion.div>
    </div>
  );
}
