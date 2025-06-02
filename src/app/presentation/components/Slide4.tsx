"use client";

import { motion } from "framer-motion";

interface Slide4Props {
  slideNumber: number;
  totalSlides: number;
}

export default function Slide4({ slideNumber, totalSlides }: Slide4Props) {
  const phases = [
    {
      phase: "Academia",
      emoji: "🌐",
      title: "Dari Komunitas ke Akademik & Industri",
      content: "1990–2000-an: Python populer di dunia akademik karena sintaksnya yang sederhana.\nDigunakan untuk pengajaran logika pemrograman dan otomasi tugas teknis.",
      color: "from-green-500 to-teal-500",
    },
    {
      phase: "Industry",
      emoji: "🏢",
      title: "Masuk ke Dunia Industri",
      content: "Diadopsi oleh perusahaan besar: Google, NASA, YouTube, Dropbox, Netflix\nCocok untuk:\n• Otomatisasi sistem\n• Pengembangan web & backend\n• Pengolahan data & integrasi sistem",
      color: "from-blue-500 to-indigo-500",
    },
    {
      phase: "AI Era",
      emoji: "🤖",
      title: "Python di Era Kecerdasan Buatan",
      content: "Populer di bidang:\n• Data Science\n• Machine Learning (ML)\n• Artificial Intelligence (AI)\nDidukung pustaka: NumPy, Pandas, TensorFlow, PyTorch, dll.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col justify-center items-center min-h-full w-full px-6 md:px-12 py-8"
    >
      <div className="max-w-7xl w-full space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">{slideNumber}</span>
            </div>
            <div className="h-px bg-gradient-to-r from-blue-500/50 to-transparent flex-1 max-w-20"></div>
          </div>
          <div className="text-slate-400 text-sm font-medium">
            {slideNumber} of {totalSlides}
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent leading-tight"
          >
            Python dari Komunitas ke Industri
          </motion.h1>
        </div>

        {/* Evolution Flow Layout */}
        <div className="relative">
          {/* Flow connector */}
          <div className="hidden md:flex absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-0">
            <div className="w-full h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full opacity-30"></div>
          </div>

          {/* Phase cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + index * 0.3,
                  type: "spring",
                  stiffness: 100,
                }}
                className="group relative"
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                {/* Main card */}
                <div className="relative bg-gradient-to-br from-slate-800/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl border border-slate-600/30 rounded-3xl p-8 h-full transform transition-all duration-500 group-hover:scale-[1.05] group-hover:shadow-2xl">
                  {/* Phase badge */}
                  <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.6, delay: 0.6 + index * 0.2, type: "spring", stiffness: 200 }} className="absolute -top-4 -right-4 z-10">
                    <div className={`bg-gradient-to-r ${phase.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>{phase.phase}</div>
                  </motion.div>

                  {/* Emoji circle */}
                  <motion.div
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.2, type: "spring", stiffness: 200 }}
                    className={`w-24 h-24 bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center text-4xl mb-6 mx-auto shadow-2xl`}
                  >
                    {phase.emoji}
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                    className={`text-xl font-bold bg-gradient-to-r ${phase.color} bg-clip-text text-transparent text-center mb-6`}
                  >
                    {phase.title}
                  </motion.h3>

                  {/* Content */}
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }} className="space-y-3">
                    {phase.content.split("\n").map((line, lineIndex) => (
                      <p key={lineIndex} className="text-slate-200 text-lg leading-relaxed text-center font-semibold">
                        {line}
                      </p>
                    ))}
                  </motion.div>

                  {/* Step number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.2 }}
                    className="absolute bottom-4 left-4 w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-white font-bold text-base"
                  >
                    {index + 1}
                  </motion.div>

                  {/* Decorative elements */}
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-tr-3xl`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom conclusion */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.8 }} className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-600/30 rounded-2xl p-8 max-w-5xl mx-auto">
            <h4 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">🚀 Evolusi Python</h4>
            <p className="text-lg text-slate-300 leading-relaxed">Python menjadi bahasa serbaguna: dari pendidikan, skrip sederhana, hingga sistem AI canggih dalam skala industri.</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
