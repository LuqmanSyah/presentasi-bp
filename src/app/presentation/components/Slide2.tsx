"use client";

import { motion } from "framer-motion";

export default function Slide2() {
  const points = [
    {
      emoji: "📌",
      title: "Apa Itu Python?",
      content: "Python adalah bahasa pemrograman yang sederhana, fleksibel, dan kuat.\nDirancang agar mudah dibaca dan mudah dipelajari, cocok untuk pemula hingga profesional.",
    },
    {
      emoji: "🧠",
      title: "Kenapa Penting Mempelajari Python?",
      content: "Digunakan luas di dunia akademik, industri teknologi, startup, hingga data science & AI.\nPython mempermudah pemecahan masalah dibandingkan bahasa lain yang lebih kompleks.",
    },
    {
      emoji: "🧾",
      title: "Latar Belakang Diciptakannya Python",
      content: "Diciptakan oleh Guido van Rossum pada tahun 1989.\nTerinspirasi dari bahasa ABC & kelompok komedi Monty Python.\nTujuan: bahasa yang ringan, mudah dipahami, dan menyenangkan.",
    },
    {
      emoji: "🎯",
      title: "Filosofi Python",
      content: '"Kode yang baik lebih sering dibaca daripada ditulis"\n– Python menekankan keterbacaan dan kesederhanaan dalam sintaks.',
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
      {" "}
      <div className="max-w-7xl w-full space-y-8">
        {/* Four quadrants layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4 + index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              className="group h-full"
            >
              <div className="relative h-full">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                {/* Main card */}
                <div className="relative bg-gradient-to-br from-slate-800/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl border border-slate-600/30 rounded-3xl p-8 h-full transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-blue-500/25">
                  {/* Emoji circle */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto shadow-lg"
                  >
                    {point.emoji}
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center mb-6"
                  >
                    {point.title}
                  </motion.h3>

                  {/* Content */}
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1 + index * 0.1 }} className="space-y-3">
                    {point.content.split("\n").map((line, lineIndex) => (
                      <p key={lineIndex} className="text-slate-200 text-lg leading-relaxed text-center">
                        {line}
                      </p>
                    ))}
                  </motion.div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-tr-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-bl-3xl"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
