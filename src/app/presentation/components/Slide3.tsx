"use client";

import { motion } from "framer-motion";

export default function Slide3() {
  const timelinePoints = [
    {
      emoji: "📅",
      title: "Perilisan Awal: Python 0.9.0 (1991)",
      content: ["Sudah mendukung:", "• Pemrograman berorientasi objek (OOP)", "• Struktur data: list, tuple, dictionary", "• Fungsi & modularitas", "• Indentasi sebagai penanda blok kode → Ciri khas Python!"],
    },
    {
      emoji: "💡",
      title: "Tujuan Desain Python",
      content: ["Menghindari sintaks kompleks seperti C atau Pascal.", "Fokus pada keterbacaan, modularitas, dan penggunaan kembali kode."],
    },
    {
      emoji: "📈",
      title: "Dukungan Komunitas",
      content: ["Python menjadi proyek open-source sejak awal.", "Komunitas membantu pengembangan pustaka dan dokumentasi.", "Lahirnya Python Package Index (PyPI) untuk berbagi pustaka."],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col justify-center items-center min-h-full w-full px-6 md:px-12 pt-4 pb-24" // Changed pt-6 to pt-4
    >
      {" "}
      <div className="max-w-6xl w-full space-y-8">
        {/* Timeline Layout - Changed to grid similar to Slide4 */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {timelinePoints.map((point, index) => (
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
                <div className="relative bg-gradient-to-br from-slate-800/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl border border-slate-600/30 rounded-3xl p-8 h-full transform transition-all duration-500 group-hover:scale-[1.05] group-hover:shadow-2xl flex flex-col">
                  {/* Emoji circle */}
                  <motion.div
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl md:text-4xl mb-6 mx-auto shadow-2xl"
                  >
                    {point.emoji}
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                    className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center mb-6"
                  >
                    {point.title}
                  </motion.h3>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                    className="space-y-2 flex-grow" // Added flex-grow
                  >
                    {point.content.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-white text-lg leading-relaxed text-left font-semibold">
                        {" "}
                        {/* Changed to text-lg, added font-semibold */}
                        {line}
                      </p>
                    ))}
                  </motion.div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-tr-3xl opacity-50"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom conclusion */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.4 }} className="text-center mt-8">
          <div className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-600/30 rounded-2xl p-6 max-w-4xl mx-auto">
            <p className="text-lg text-slate-300 italic leading-relaxed">Python tumbuh dari komunitas kecil menjadi bahasa global yang digunakan dalam dunia nyata — mulai dari pendidikan hingga industri teknologi.</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
