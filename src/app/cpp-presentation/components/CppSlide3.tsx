"use client";

import { motion } from "framer-motion";

export default function CppSlide3() {
  return (
    <div className="h-full text-white p-8 pt-20 overflow-hidden relative flex items-center justify-center">
      {/* Main Content Container */}
      <div className="max-w-7xl w-full relative">
        {/* Background connecting line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-0.5 bg-gradient-to-r from-orange-400 via-amber-400 to-cyan-400 opacity-30 z-0"
        />

        {/* Evolution Timeline */}
        <div className="relative flex justify-center">
          {/* Unified Cards */}
          <div className="grid grid-cols-2 gap-12 mb-8 w-full max-w-6xl">
            {/* Era C - Unified Card */}
            <motion.div initial={{ opacity: 0, x: -50, scale: 0.9 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }} className="relative group">
              <motion.div
                whileHover={{ scale: 1.02, y: -5, rotateY: 3 }}
                whileTap={{ scale: 0.98 }}
                className="relative bg-gradient-to-br from-slate-800/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl rounded-3xl p-8 border border-orange-400/40 hover:border-orange-400/80 h-full overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-orange-500/30"
              >
                {/* Enhanced glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-400/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />

                {/* Header */}
                <div className="text-center mb-8">
                  <motion.h2 className="font-bold text-4xl mb-4 bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400 bg-clip-text text-transparent" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                    Era C
                  </motion.h2>
                  <motion.span
                    className="px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-orange-400/25 to-amber-400/25 text-orange-300 border border-orange-400/30 shadow-lg backdrop-blur-sm"
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    1970s Foundation
                  </motion.span>
                </div>

                {/* Content Sections */}
                <div className="space-y-8">
                  {/* Creation */}
                  <div className="flex items-start space-x-4">
                    <motion.div className="text-3xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 filter drop-shadow-lg" whileHover={{ scale: 1.2, rotate: 10 }}>
                      🏗️
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-300 via-amber-200 to-orange-300 bg-clip-text text-transparent">Bahasa C (1970-an)</h3>
                      <h4 className="text-base font-medium mb-2 text-orange-400/80">Dennis Ritchie di Bell Labs untuk UNIX</h4>
                      <p className="text-slate-300 text-base leading-relaxed">Diciptakan untuk membangun sistem operasi UNIX, membutuhkan bahasa cepat dan fleksibel</p>
                    </div>
                  </div>

                  {/* Strength */}
                  <div className="flex items-start space-x-4">
                    <motion.div className="text-3xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 filter drop-shadow-lg" whileHover={{ scale: 1.2, rotate: 10 }}>
                      ⚙️
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-300 via-amber-200 to-orange-300 bg-clip-text text-transparent">&ldquo;Portable Assembly&rdquo;</h3>
                      <h4 className="text-base font-medium mb-2 text-orange-400/80">Kontrol tingkat rendah dengan portabilitas</h4>
                      <p className="text-slate-300 text-base leading-relaxed">Memberikan kontrol seperti bahasa rakitan tetapi bisa digunakan di berbagai platform</p>
                    </div>
                  </div>

                  {/* Weakness */}
                  <div className="flex items-start space-x-4">
                    <motion.div className="text-3xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 filter drop-shadow-lg" whileHover={{ scale: 1.2, rotate: 10 }}>
                      ⚠️
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-red-300 via-pink-200 to-red-300 bg-clip-text text-transparent">Kelemahan C</h3>
                      <h4 className="text-base font-medium mb-2 text-red-400/80">Kesulitan mengelola proyek besar</h4>
                      <p className="text-slate-300 text-base leading-relaxed">Pendekatan prosedural sulit dikelola dan rentan terhadap kesalahan pada proyek besar</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Era C++ - Unified Card */}
            <motion.div initial={{ opacity: 0, x: 50, scale: 0.9 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }} className="relative group">
              <motion.div
                whileHover={{ scale: 1.02, y: -5, rotateY: -3 }}
                whileTap={{ scale: 0.98 }}
                className="relative bg-gradient-to-br from-slate-800/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl rounded-3xl p-8 border border-cyan-400/40 hover:border-cyan-400/80 h-full overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/30"
              >
                {/* Enhanced glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />

                {/* Header */}
                <div className="text-center mb-8">
                  <motion.h2 className="font-bold text-4xl mb-4 bg-gradient-to-r from-cyan-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                    Era C++
                  </motion.h2>
                  <motion.span
                    className="px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-cyan-400/25 to-blue-400/25 text-cyan-300 border border-cyan-400/30 shadow-lg backdrop-blur-sm"
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    1980s Evolution
                  </motion.span>
                </div>

                {/* Content Sections */}
                <div className="space-y-8">
                  {/* Evolution */}
                  <div className="flex items-start space-x-4">
                    <motion.div className="text-3xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 filter drop-shadow-lg" whileHover={{ scale: 1.2, rotate: 10 }}>
                      🚀
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-300 via-blue-200 to-cyan-300 bg-clip-text text-transparent">C++ (1980-an)</h3>
                      <h4 className="text-base font-medium mb-2 text-cyan-400/80">Bjarne Stroustrup - &ldquo;C with Classes&rdquo;</h4>
                      <p className="text-slate-300 text-base leading-relaxed">Dikembangkan untuk mengatasi keterbatasan C dengan menambahkan fitur seperti kelas</p>
                    </div>
                  </div>

                  {/* OOP Feature */}
                  <div className="flex items-start space-x-4">
                    <motion.div className="text-3xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 filter drop-shadow-lg" whileHover={{ scale: 1.2, rotate: 10 }}>
                      🎯
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-300 via-blue-200 to-cyan-300 bg-clip-text text-transparent">Pemrograman Berorientasi Objek</h3>
                      <h4 className="text-base font-medium mb-2 text-cyan-400/80">Struktur kode yang lebih terorganisir</h4>
                      <p className="text-slate-300 text-base leading-relaxed">OOP memungkinkan kode lebih terstruktur, seperti membagi tugas ke dalam &apos;objek&apos; di dunia nyata</p>
                    </div>
                  </div>

                  {/* Advantage */}
                  <div className="flex items-start space-x-4">
                    <motion.div className="text-3xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 filter drop-shadow-lg" whileHover={{ scale: 1.2, rotate: 10 }}>
                      ⚡
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-300 via-pink-200 to-purple-300 bg-clip-text text-transparent">Efisiensi + Modularitas</h3>
                      <h4 className="text-base font-medium mb-2 text-purple-400/80">Yang terbaik dari kedua dunia</h4>
                      <p className="text-slate-300 text-base leading-relaxed">Mempertahankan kecepatan C sambil menawarkan cara baru untuk membuat kode lebih mudah dikelola</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Code Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
        animate={{ opacity: 0.15, scale: 1, rotate: 12 }}
        transition={{ delay: 2, duration: 1.5, type: "spring", stiffness: 100 }}
        className="absolute top-20 left-10 font-mono text-lg text-orange-400 filter drop-shadow-lg bg-slate-900/30 px-3 py-2 rounded-lg backdrop-blur-sm border border-orange-400/20"
      >
        {/* C Style */}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
        animate={{ opacity: 0.15, scale: 1, rotate: -12 }}
        transition={{ delay: 2.5, duration: 1.5, type: "spring", stiffness: 100 }}
        className="absolute top-32 right-16 font-mono text-lg text-cyan-400 filter drop-shadow-lg bg-slate-900/30 px-3 py-2 rounded-lg backdrop-blur-sm border border-cyan-400/20"
      >
        class MyClass {"{}"}
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
