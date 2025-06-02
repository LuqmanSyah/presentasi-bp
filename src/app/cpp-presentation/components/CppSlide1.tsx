"use client";

import { motion } from "framer-motion";

interface CppSlide1Props {
  slideNumber: number;
  totalSlides: number;
}

export default function CppSlide1({ slideNumber, totalSlides }: CppSlide1Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col justify-center items-center min-h-full w-full px-6 md:px-12 py-8"
    >
      <div className="max-w-5xl w-full space-y-8">
        {/* Header with slide number */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">{slideNumber}</span>
            </div>
            <div className="h-px bg-gradient-to-r from-purple-500/50 to-transparent flex-1 max-w-20"></div>
          </div>
          <div className="text-slate-400 text-sm font-medium">
            {slideNumber} of {totalSlides}
          </div>
        </div>

        {/* Hero section with large centered layout */}
        <div className="text-center space-y-8 min-h-[60vh] flex flex-col justify-center">
          {/* Main title with special animation */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }} className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-cyan-500 to-blue-400 bg-clip-text text-transparent leading-tight">Kelompok 1</h1>

            {/* Team badge */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="inline-block">
              <div className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-2xl">👥 Tim Presentasi</div>
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="text-2xl md:text-3xl text-slate-300 font-light max-w-4xl mx-auto leading-relaxed">
            Presentasi Pengantar Pemrograman C++
          </motion.p>

          {/* Team members in a creative layout */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }} className="space-y-8">
            <h3 className="text-xl text-slate-400 font-medium">👥 Anggota Kelompok</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {["Luqman", "Ilham", "Dafa", "Adit"].map((name, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 50, rotateY: 45 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 1.2 + index * 0.1,
                    type: "spring",
                    stiffness: 120,
                  }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-600/30 rounded-2xl p-6 transform transition-all duration-300 hover:scale-110 hover:rotate-2 hover:shadow-2xl hover:shadow-purple-500/25">
                    <h4 className="text-slate-200 font-semibold text-lg text-center">{name}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Topic highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-600/30 rounded-3xl p-8 max-w-3xl mx-auto"
          >
            <div className="text-center space-y-4">
              <div className="text-4xl">⚡</div>
              <h3 className="text-2xl text-slate-300 font-medium">Topik Presentasi</h3>
              <p className="text-xl text-purple-400 font-semibold">Pengantar Pemrograman C++</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
