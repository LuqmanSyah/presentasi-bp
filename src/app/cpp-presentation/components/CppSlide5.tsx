"use client";

import { motion } from "framer-motion";

interface CppSlide5Props {
  slideNumber: number;
  totalSlides: number;
}

export default function CppSlide5({ slideNumber, totalSlides }: CppSlide5Props) {
  const paradigms = [
    {
      type: "Prosedural (C)",
      icon: "📋",
      description: "Instruksi berurutan, fokus pada fungsi",
      advantages: "Sederhana untuk tugas kecil",
      disadvantages: "Sulit untuk proyek besar, rawan duplikasi kode",
      color: "from-orange-400 to-red-500",
    },
    {
      type: "OOP (C++)",
      icon: "🏗️",
      description: "Berbasis objek dengan data dan metode terintegrasi",
      advantages: "Terstruktur, mudah dipelihara, reusable",
      disadvantages: "Lebih kompleks untuk tugas sederhana",
      color: "from-cyan-400 to-blue-500",
    },
  ];

  const oopPillars = [
    { name: "Encapsulation", icon: "🔒", description: "Pembungkusan data" },
    { name: "Inheritance", icon: "🧬", description: "Pewarisan sifat" },
    { name: "Polymorphism", icon: "🎭", description: "Bentuk beragam" },
    { name: "Abstraction", icon: "🎨", description: "Penyederhanaan" },
  ];
  return (
    <div className="h-full flex flex-col justify-center text-white p-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Paradigma Pemrograman</h1>
        <p className="text-xl text-gray-300">Perbandingan Pendekatan Prosedural vs Object-Oriented</p>
      </motion.div>
      <div className="max-w-7xl mx-auto">
        {/* Paradigm Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {paradigms.map((paradigm, index) => (
            <motion.div key={index} initial={{ opacity: 0, x: index === 0 ? -50 : 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.3 }} className="group">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30 h-full hover:border-cyan-400/50 transition-all duration-300"
              >
                {/* Icon and Title */}
                <div className="flex items-center mb-4">
                  <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className={`w-16 h-16 rounded-full bg-gradient-to-r ${paradigm.color} flex items-center justify-center text-2xl mr-4`}>
                    {paradigm.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">{paradigm.type}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-base mb-4 leading-relaxed">{paradigm.description}</p>

                {/* Advantages */}
                <div className="mb-3">
                  <div className="flex items-center mb-2">
                    <span className="text-green-400 mr-2">✅</span>
                    <span className="text-sm font-semibold text-green-400">Kelebihan:</span>
                  </div>
                  <p className="text-gray-300 text-sm pl-6">{paradigm.advantages}</p>
                </div>

                {/* Disadvantages */}
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <span className="text-red-400 mr-2">❌</span>
                    <span className="text-sm font-semibold text-red-400">Kekurangan:</span>
                  </div>{" "}
                  <p className="text-gray-300 text-sm pl-6">{paradigm.disadvantages}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* OOP Pillars Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-slate-800/80 to-slate-700/60 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 mb-6"
        >
          <h3 className="text-2xl font-bold text-purple-400 mb-4 text-center">🏛️ Pilar OOP</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {oopPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-900/50 rounded-lg p-3 text-center hover:bg-slate-800/50 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{pillar.icon}</div>
                <h4 className="font-semibold text-white text-sm mb-1">{pillar.name}</h4>
                <p className="text-gray-400 text-xs">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Multi-paradigm Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/50 text-center"
        >
          <div className="flex items-center justify-center mb-3">
            <span className="text-3xl mr-3">🔄</span>
            <h3 className="text-xl font-bold text-cyan-400">C++: Multi-paradigma</h3>
          </div>{" "}
          <p className="text-gray-300 text-base leading-relaxed">Mendukung prosedural dan OOP - programmer bisa memilih pendekatan prosedural untuk tugas sederhana atau OOP untuk proyek kompleks</p>
        </motion.div>
      </div>{" "}
      {/* Decorative Elements */}
      <motion.div initial={{ opacity: 0, rotate: -180 }} animate={{ opacity: 0.1, rotate: 0 }} transition={{ duration: 2, delay: 1.5 }} className="absolute top-10 right-10 text-4xl text-cyan-400">
        📋
      </motion.div>
      <motion.div initial={{ opacity: 0, rotate: 180 }} animate={{ opacity: 0.1, rotate: 0 }} transition={{ duration: 2, delay: 2 }} className="absolute bottom-20 left-10 text-3xl text-purple-400">
        🏗️
      </motion.div>
    </div>
  );
}
