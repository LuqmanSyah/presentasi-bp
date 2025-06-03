"use client";

import { motion } from "framer-motion";

export default function Slide5() {
  const philosophyPoints = [
    {
      emoji: "🧭",
      title: "Filosofi Desain Python",
      content: [
        "Fokus utama: kesederhanaan, keterbacaan, dan kenyamanan pengguna.",
        "Dirancang agar bisa digunakan oleh pemula maupun profesional.",
        "Sintaks yang mendekati bahasa manusia → memudahkan fokus pada logika, bukan aturan teknis.",
      ],
    },
    {
      emoji: "🔧",
      title: "Modular & Fleksibel",
      content: ["Dukungan modularitas (paket & modul).", "Mudah diintegrasikan dengan bahasa lain seperti C, C++, Java."],
    },
  ];

  const zenPrinciples = [
    '"Beautiful is better than ugly" → Kode harus indah dan rapi.',
    '"Simple is better than complex" → Pilih solusi sederhana selama memungkinkan.',
    '"Readability counts" → Keterbacaan lebih penting daripada kepintaran sintaks.',
    '"There should be one– and preferably only one –obvious way to do it" → Python menghindari banyak cara untuk satu hal → lebih konsisten!',
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
        {/* Main content with new layout */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Philosophy Points Section */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="lg:w-1/2">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 text-center">🧭 Filosofi Desain Python</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {philosophyPoints.map((point, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }} className="group">
                  <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-600/30 rounded-xl p-5 hover:border-blue-500/30 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-xl">{point.emoji}</div>
                      <h3 className="text-2xl font-semibold text-white">{point.title}</h3>
                    </div>
                    <div className="space-y-2">
                      {point.content.map((line, lineIndex) => (
                        <p key={lineIndex} className="text-white text-lg leading-relaxed font-semibold">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* The Zen of Python Section */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="lg:w-1/2">
            <div className="text-center mb-6">
              {/* <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-3">📜</div> */}
              <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">The Zen of Python</h2>
              {/* <p className="text-slate-400 text-sm mt-1">Panduan Etika Penulisan Kode oleh Tim Peters</p> */}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {zenPrinciples.map((principle, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1 + index * 0.1 }}>
                  <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 rounded-lg p-4 border border-slate-600/20 hover:border-amber-500/30 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xs mt-0.5">{index + 1}</div>
                      <p className="text-white text-lg leading-relaxed flex-1 font-semibold">{principle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>{" "}
        {/* Bottom conclusion */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.5 }} className="text-center mt-8">
          <div className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-600/30 rounded-xl p-6 max-w-3xl mx-auto">
            <h4 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">🌟 Kesimpulan Filosofi</h4>
            <p className="text-base text-slate-300 italic leading-relaxed">Python bukan hanya bahasa teknis, tetapi juga filosofi: membuat pemrograman terasa natural dan manusiawi.</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
