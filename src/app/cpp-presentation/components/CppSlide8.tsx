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
      className="flex flex-col justify-center items-center min-h-full w-full px-6 md:px-12 py-8 pt-20"
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
        </div>{" "}
        {/* Enhanced Key points grid */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="grid md:grid-cols-2 gap-8 mb-12">
          {keyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                rotateX: 5,
                transition: { duration: 0.3 },
              }}
              className="relative bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/60 hover:border-purple-400/50 transition-all duration-500 group overflow-hidden shadow-2xl hover:shadow-purple-500/25"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Enhanced glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />

              {/* Dot pattern overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(147, 51, 234, 0.3) 1px, transparent 0)`,
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Animated corner accent */}
              <motion.div
                className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${point.color.replace("from-", "from-").replace("to-", "to-")}/20 rounded-bl-full`}
                initial={{ scale: 0, rotate: -45, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1, type: "spring", stiffness: 150 }}
              />

              <div className="relative z-10 flex items-start space-x-6">
                {/* Enhanced icon container */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{
                    rotate: 360,
                    scale: 1.2,
                    transition: { duration: 0.6 },
                  }}
                  className={`relative text-4xl p-4 rounded-2xl bg-gradient-to-r ${point.color} shadow-2xl flex items-center justify-center min-w-[80px] h-20`}
                >
                  <span className="relative z-10 filter drop-shadow-lg">{point.icon}</span>
                  {/* Icon glow effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${point.color} rounded-2xl opacity-0 group-hover:opacity-60 blur-lg transition-opacity duration-700 -z-10`}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0, 0.4, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                <div className="flex-1">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                    className="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300 relative"
                  >
                    <span className="relative z-10">{point.title}</span>
                    {/* Text glow effect */}
                    <span className="absolute inset-0 text-2xl font-bold text-purple-300 opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500">{point.title}</span>
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                    className="relative bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-purple-400/30 transition-all duration-300 group/inner"
                  >
                    {/* Inner card glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 to-cyan-400/5 opacity-0 group-hover/inner:opacity-100 transition-opacity duration-500 rounded-xl" />

                    <p className="relative z-10 text-slate-300 group-hover/inner:text-slate-100 transition-colors duration-300 text-base leading-relaxed">{point.description}</p>

                    {/* Progress indicator */}
                    <div className="mt-3 h-1 bg-purple-400/20 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1, delay: 1.4 + index * 0.1 }} className={`h-full bg-gradient-to-r ${point.color} rounded-full`} />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-400/60 rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${30 + i * 20}%`,
                    }}
                    animate={{
                      y: [-8, -16, -8],
                      opacity: [0, 0.8, 0],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              {/* Enhanced shadow effect */}
              <motion.div className={`absolute inset-0 bg-gradient-to-br ${point.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10`} initial={false} />
            </motion.div>
          ))}
        </motion.div>{" "}
        {/* Enhanced Q&A Section */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.0 }} className="text-center space-y-8">
          {/* Enhanced Q&A Title */}
          <div className="space-y-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 100 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="inline-block relative group"
            >
              {/* Enhanced glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-110" />

              <div className="relative bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-5 rounded-full text-2xl font-bold shadow-2xl border border-purple-400/30 hover:border-cyan-400/50 transition-all duration-300">
                <span className="relative z-10 flex items-center gap-3">
                  <motion.span
                    animate={{
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    🙋‍♂️
                  </motion.span>
                  Tanya Jawab
                </span>

                {/* Text glow effect */}
                <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-cyan-200 opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-500">🙋‍♂️ Tanya Jawab</span>
              </div>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.4 }} className="text-xl md:text-2xl text-slate-300 font-light max-w-4xl mx-auto leading-relaxed">
              Pertanyaan?
            </motion.p>
          </div>

          {/* Enhanced Thank you message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, delay: 1.8, type: "spring", stiffness: 80 }}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3 },
            }}
            className="relative bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80 backdrop-blur-xl rounded-3xl p-10 border border-purple-500/30 hover:border-cyan-400/50 mt-12 group overflow-hidden shadow-2xl hover:shadow-purple-500/30"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Enhanced background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-cyan-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />

            {/* Animated dot pattern */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-700"
              style={{
                backgroundImage: `radial-gradient(circle at 3px 3px, rgba(168, 85, 247, 0.4) 2px, transparent 0)`,
                backgroundSize: "30px 30px",
              }}
            />

            {/* Large corner accent */}
            <motion.div
              className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400/20 via-cyan-500/15 to-blue-500/20 rounded-bl-full"
              initial={{ scale: 0, rotate: -45, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 2, type: "spring", stiffness: 150 }}
            />

            <div className="relative z-10">
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.2 }}
                className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6 relative group-hover:scale-105 transition-transform duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-4">
                  <motion.span
                    animate={{
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    🙏
                  </motion.span>
                  Terima Kasih!
                </span>

                {/* Enhanced text glow */}
                <span className="absolute inset-0 text-4xl font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-700">
                  🙏 Terima Kasih!
                </span>
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.4 }}
                className="relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20 hover:border-cyan-400/30 transition-all duration-300 group/inner"
              >
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 to-cyan-400/5 opacity-0 group-hover/inner:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <p className="relative z-10 text-slate-300 group-hover/inner:text-slate-100 transition-colors duration-300 text-xl leading-relaxed">Mari bersama-sama mengeksplorasi dunia pemrograman C++</p>

                {/* Animated underline */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 2.6 }}
                  className="mt-4 h-2 bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 rounded-full mx-auto relative overflow-hidden"
                >
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-1/3"
                    animate={{
                      x: ["-100%", "300%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 3,
                    }}
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Enhanced floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    left: `${10 + i * 15}%`,
                    top: `${20 + i * 12}%`,
                  }}
                  animate={{
                    y: [-15, -30, -15],
                    opacity: [0, 0.8, 0],
                    scale: [0.3, 1.2, 0.3],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Enhanced shadow effect */}
            <motion.div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl blur-2xl -z-10" initial={false} />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
