"use client";

import { motion } from "framer-motion";

interface CppSlide8Props {
  slideNumber: number;
  totalSlides: number;
}

export default function CppSlide8({ slideNumber, totalSlides }: CppSlide8Props) {
  const keyPoints = [
    {
      icon: "🚀",
      title: "C++: Evolusi C dengan OOP",
      description: "Sistem kompleks dengan paradigma modern",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "⚡",
      title: "Fleksibel",
      description: "Mendukung prosedural, OOP, dan generik",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🎯",
      title: "Performa Tinggi",
      description: "Ideal untuk game, AI, infrastruktur",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "💼",
      title: "Relevansi",
      description: "Kunci di industri teknologi modern",
      color: "from-indigo-500 to-purple-500",
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
      <div className="max-w-6xl w-full space-y-8">
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

        {/* Main title */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-center space-y-4 mb-12">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 via-cyan-500 to-blue-400 bg-clip-text text-transparent leading-tight">Kesimpulan</h1>
          <div className="flex items-center justify-center space-x-3">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent flex-1 max-w-24"></div>
            <span className="text-cyan-400 text-xl">💡</span>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent flex-1 max-w-24"></div>
          </div>
        </motion.div>

        {/* Key points grid */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="grid md:grid-cols-2 gap-6 mb-12">
          {keyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="flex items-start space-x-4">
                <div className={`text-3xl p-3 rounded-lg bg-gradient-to-r ${point.color} bg-opacity-20`}>{point.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
                  <p className="text-slate-300 text-base leading-relaxed">{point.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Q&A Section */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.0 }} className="text-center space-y-8">
          {/* Q&A Title */}
          <div className="space-y-4">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 100 }} className="inline-block">
              <div className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-full text-2xl font-bold shadow-2xl">🙋‍♂️ Tanya Jawab</div>
            </motion.div>{" "}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.4 }} className="text-xl md:text-2xl text-slate-300 font-light max-w-4xl mx-auto leading-relaxed">
              Pertanyaan?
            </motion.p>{" "}
          </div>

          {/* Thank you message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 mt-12"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">Terima Kasih! 🙏</h3>
            <p className="text-slate-300 text-lg">Mari bersama-sama mengeksplorasi dunia pemrograman C++</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
