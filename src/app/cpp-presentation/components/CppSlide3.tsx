"use client";

import { motion } from "framer-motion";

interface CppSlide3Props {
  slideNumber: number;
  totalSlides: number;
}

export default function CppSlide3({ slideNumber, totalSlides }: CppSlide3Props) {
  const evolutionSteps = [
    {
      era: "C",
      icon: "🏗️",
      title: "Bahasa C (1970-an)",
      subtitle: "Dennis Ritchie di Bell Labs untuk UNIX",
      description: "Diciptakan untuk membangun sistem operasi UNIX, membutuhkan bahasa cepat dan fleksibel",
      color: "from-orange-400 to-red-500",
      type: "foundation",
    },
    {
      era: "C",
      icon: "⚙️",
      title: '"Portable Assembly"',
      subtitle: "Kontrol tingkat rendah dengan portabilitas",
      description: "Memberikan kontrol seperti bahasa rakitan tetapi bisa digunakan di berbagai platform",
      color: "from-amber-400 to-orange-500",
      type: "strength",
    },
    {
      era: "C",
      icon: "⚠️",
      title: "Kelemahan C",
      subtitle: "Kesulitan mengelola proyek besar",
      description: "Pendekatan prosedural sulit dikelola dan rentan terhadap kesalahan pada proyek besar",
      color: "from-red-400 to-pink-500",
      type: "weakness",
    },
    {
      era: "C++",
      icon: "🚀",
      title: "C++ (1980-an)",
      subtitle: 'Bjarne Stroustrup - "C with Classes"',
      description: "Dikembangkan untuk mengatasi keterbatasan C dengan menambahkan fitur seperti kelas",
      color: "from-cyan-400 to-blue-500",
      type: "evolution",
    },
    {
      era: "C++",
      icon: "🎯",
      title: "Pemrograman Berorientasi Objek",
      subtitle: "Struktur kode yang lebih terorganisir",
      description: "OOP memungkinkan kode lebih terstruktur, seperti membagi tugas ke dalam 'objek' di dunia nyata",
      color: "from-blue-400 to-purple-500",
      type: "feature",
    },
    {
      era: "C++",
      icon: "⚡",
      title: "Efisiensi + Modularitas",
      subtitle: "Yang terbaik dari kedua dunia",
      description: "Mempertahankan kecepatan C sambil menawarkan cara baru untuk membuat kode lebih mudah dikelola",
      color: "from-purple-400 to-pink-500",
      type: "advantage",
    },
  ];
  return (
    <div className="h-full flex flex-col justify-center text-white p-8">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">Evolusi C ke C++</h1>
        <p className="text-xl text-gray-300">Perjalanan dari bahasa prosedural menuju pemrograman berorientasi objek</p>
      </motion.div>{" "}
      <div className="max-w-7xl mx-auto relative">
        {/* Evolution Timeline */}
        <div className="relative">
          {/* Era Labels */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-center">
              <h2 className="text-orange-400 font-bold text-2xl mb-6">Era C</h2>
              <div className="space-y-6">
                {evolutionSteps
                  .filter((step) => step.era === "C")
                  .map((step, index) => (
                    <motion.div key={index} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: index * 0.3 }} className="relative">
                      {" "}
                      <motion.div whileHover={{ scale: 1.02, y: -5 }} className={`bg-gradient-to-br from-slate-800/80 to-slate-700/60 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 h-full`}>
                        {/* Era Badge */}
                        <div className="flex justify-end mb-4">
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-400/20 text-orange-300">{step.era}</span>
                        </div>

                        {/* Title and Subtitle */}
                        <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                        <h4 className="text-xs font-medium mb-3 text-gray-400">{step.subtitle}</h4>

                        {/* Description */}
                        <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                      </motion.div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-center">
              <h2 className="text-purple-400 font-bold text-2xl mb-6">Era C++</h2>
              <div className="space-y-6">
                {evolutionSteps
                  .filter((step) => step.era === "C++")
                  .map((step, index) => (
                    <motion.div key={index} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: (index + 3) * 0.3 }} className="relative">
                      {" "}
                      <motion.div whileHover={{ scale: 1.02, y: -5 }} className={`bg-gradient-to-br from-slate-800/80 to-slate-700/60 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 h-full`}>
                        {/* Era Badge */}
                        <div className="flex justify-end mb-4">
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-400/20 text-cyan-300">{step.era}</span>
                        </div>

                        {/* Title and Subtitle */}
                        <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                        <h4 className="text-xs font-medium mb-3 text-gray-400">{step.subtitle}</h4>

                        {/* Description */}
                        <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                      </motion.div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Decorative Code Elements */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.1 }} transition={{ delay: 2, duration: 1 }} className="absolute top-20 left-10 font-mono text-sm text-orange-400 transform rotate-12">
        /* C Style */
      </motion.div>{" "}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.1 }} transition={{ delay: 2.5, duration: 1 }} className="absolute top-32 right-16 font-mono text-sm text-cyan-400 transform -rotate-12">
        class MyClass {"{}"}
      </motion.div>{" "}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.1 }} transition={{ delay: 3, duration: 1 }} className="absolute bottom-20 left-20 font-mono text-sm text-purple-400 transform rotate-6">
        obj.method()
      </motion.div>
    </div>
  );
}
