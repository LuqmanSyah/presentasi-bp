"use client";

import { motion } from "framer-motion";

interface CppSlide2Props {
  slideNumber: number;
  totalSlides: number;
}

export default function CppSlide2({ slideNumber, totalSlides }: CppSlide2Props) {
  const agendaItems = [
    {
      number: "01",
      title: "Evolusi dari C ke C++",
      description: "Sejarah singkat bagaimana C++ berkembang dari bahasa C untuk memberikan konteks",
      icon: "📈",
    },
    {
      number: "02",
      title: "Fitur Utama C++",
      description: "Fitur-fitur yang membuat C++ kuat, seperti kemampuan membuat kode modular dan efisien",
      icon: "⚡",
    },
    {
      number: "03",
      title: "Paradigma Pemrograman",
      description: "Perbandingan pendekatan prosedural (seperti C) dengan berorientasi objek (OOP)",
      icon: "🔄",
    },
    {
      number: "04",
      title: "Aplikasi C++ di Dunia Nyata",
      description: "Contoh nyata penggunaan C++ di teknologi sehari-hari seperti game dan mobil",
      icon: "🌍",
    },
    {
      number: "05",
      title: "Kesimpulan dan Tanya Jawab",
      description: "Ringkasan presentasi dan kesempatan untuk audiens bertanya tentang perbandingan C++",
      icon: "❓",
    },
  ];
  return (
    <div className="h-full flex flex-col justify-center text-white p-8 pt-20">
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
      <div className="max-w-5xl mx-auto">
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agendaItems.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.15 }} className="group">
              {" "}
              <motion.div
                whileHover={{ scale: 1.05, y: -12 }}
                whileTap={{ scale: 0.97 }}
                className="relative bg-gradient-to-br from-slate-800/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl rounded-3xl p-7 border border-slate-700/60 hover:border-cyan-400/80 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/40 h-full overflow-hidden"
              >
                {" "}
                {/* Enhanced glowing background effect with multiple layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
                {/* Subtle dot pattern that appears on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(34, 211, 238, 0.3) 1px, transparent 0)`,
                    backgroundSize: "20px 20px",
                  }}
                />
                {/* Enhanced animated corner accent with shimmer effect */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-400/25 via-blue-500/20 to-indigo-500/25 rounded-bl-full"
                  initial={{ scale: 0, rotate: -45, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5, type: "spring", stiffness: 150 }}
                />
                <motion.div
                  className="absolute top-1 right-1 w-20 h-20 bg-gradient-to-br from-cyan-300/30 to-blue-400/30 rounded-bl-full blur-sm"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                {/* Enhanced number badge with pulsing glow */}
                <div className="relative flex items-center justify-between mb-7">
                  <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.6, delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }} className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 via-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-cyan-500/40 ring-2 ring-cyan-400/30">
                      <span className="text-white font-bold text-xl drop-shadow-lg">{item.number}</span>
                    </div>
                    {/* Enhanced glowing ring effect with pulsing animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-700 -z-10"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0, 0.3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: index * 0.15 + 0.6, type: "spring", stiffness: 150 }}
                    className="relative text-5xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 filter drop-shadow-lg"
                  >
                    <div className="relative">
                      {item.icon}
                      {/* Icon glow effect */}
                      <div className="absolute inset-0 text-5xl opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500 text-cyan-300">{item.icon}</div>
                    </div>
                  </motion.div>
                </div>{" "}
                {/* Title with enhanced typography and text effects */}
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                  className="relative text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-all duration-300 leading-tight"
                >
                  <span className="relative z-10">{item.title}</span>
                  {/* Text glow effect on hover */}
                  <span className="absolute inset-0 text-xl font-bold text-cyan-300 opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500">{item.title}</span>
                </motion.h3>
                {/* Description with better spacing */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                  className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300"
                >
                  {item.description}
                </motion.p>{" "}
                {/* Enhanced progress line with multiple effects */}
                <div className="relative mt-6 h-1.5 bg-slate-700/50 rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 rounded-full shadow-lg shadow-cyan-500/50 relative"
                  >
                    {/* Shimmer effect on progress bar */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                    />
                  </motion.div>
                  {/* Progress bar glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>{" "}
                {/* Floating particles effect on hover */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400/60 rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                      }}
                      animate={{
                        y: [-10, -20, -10],
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
                {/* Additional geometric decorations */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {/* Corner triangles */}
                  <motion.div
                    className="absolute bottom-4 left-4 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-4 border-b-cyan-400/20 opacity-0 group-hover:opacity-100"
                    initial={{ rotate: 0, scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    className="absolute top-4 left-4 w-2 h-2 border border-blue-400/30 rounded-full opacity-0 group-hover:opacity-60"
                    animate={{
                      scale: [1, 1.5, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>{" "}
      {/* Enhanced Decorative Elements with more sophisticated animations */}
      <motion.div
        initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
        animate={{ opacity: 0.15, rotate: 0, scale: 1 }}
        transition={{ duration: 2.5, delay: 1, type: "spring", stiffness: 100 }}
        className="absolute top-10 right-10 text-6xl text-cyan-400 filter drop-shadow-xl"
      >
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          📋
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, rotate: 180, scale: 0.5 }}
        animate={{ opacity: 0.15, rotate: 0, scale: 1 }}
        transition={{ duration: 2.5, delay: 1.5, type: "spring", stiffness: 100 }}
        className="absolute bottom-10 left-10 text-4xl text-blue-400 filter drop-shadow-xl"
      >
        <motion.div
          animate={{
            rotate: [0, -10, 10, 0],
            y: [0, -5, 5, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🎯
        </motion.div>
      </motion.div>
      {/* Additional floating geometric elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 0.1,
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          delay: 2.5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-10 w-12 h-12 border-2 border-cyan-300/20 rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 0.08,
          scale: [1, 1.3, 1],
          rotate: [45, 225, 45],
        }}
        transition={{
          duration: 6,
          delay: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-16 w-8 h-8 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 transform rotate-45"
      />
      {/* Additional floating elements */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 0.1,
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          delay: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-20 text-2xl text-cyan-300"
      >
        ⚡
      </motion.div>
    </div>
  );
}
