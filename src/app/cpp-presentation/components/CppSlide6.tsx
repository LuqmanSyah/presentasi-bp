"use client";

import { motion } from "framer-motion";

export default function CppSlide6() {
  const comparisons = [
    {
      title: "Pendekatan",
      proceduralAspect: "Berbasis langkah",
      oopAspect: "Berbasis objek",
      proceduralDetail: "Daftar tugas linier",
      oopDetail: "Objek yang saling berinteraksi",
      icon: "🎯",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Organisasi Kode",
      proceduralAspect: "Gunakan fungsi",
      oopAspect: "Gunakan kelas",
      proceduralDetail: "Fungsi-fungsi terpisah",
      oopDetail: "Data dan fungsi tergabung",
      icon: "📁",
      color: "from-green-500 to-emerald-500",
    },
  ];
  return (
    <div className="h-full text-white p-8 pt-20 flex items-center justify-center overflow-x-auto">
      {/* Content Container */}
      <div className="max-w-full mx-auto w-full">
        {/* All Cards in Single Horizontal Row */}
        <div className="flex gap-6 min-w-max px-4 justify-center">
          {/* Comparison Cards */}
          {comparisons.map((comparison, index) => (
            <motion.div key={index} initial={{ opacity: 0, x: index === 0 ? -50 : 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} className="group">
              <div className="relative bg-gradient-to-br from-slate-800/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/60 hover:border-cyan-400/80 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/40 overflow-hidden">
                {/* Enhanced glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
                {/* Subtle dot pattern */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(34, 211, 238, 0.3) 1px, transparent 0)`,
                    backgroundSize: "20px 20px",
                  }}
                />
                {/* Enhanced animated corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/25 via-blue-500/20 to-indigo-500/25 rounded-bl-full"
                  initial={{ scale: 0, rotate: -45, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5, type: "spring", stiffness: 150 }}
                />
                {/* Title with Icon */}
                <div className="relative flex items-center mb-8">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${comparison.color} flex items-center justify-center text-2xl mr-6 shadow-2xl`}
                  >
                    {comparison.icon}
                    {/* Icon glow effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${comparison.color} rounded-2xl opacity-0 group-hover:opacity-60 blur-lg transition-opacity duration-700 -z-10`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0, 0.4, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 relative">
                    <span className="relative z-10">{comparison.title}</span>
                    {/* Text glow effect */}
                    <span className="absolute inset-0 text-3xl font-bold text-cyan-300 opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500">{comparison.title}</span>
                  </h3>
                </div>
                {/* Enhanced Comparison Content */}
                <div className="relative space-y-6">
                  {/* Procedural Side */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    className="relative bg-gradient-to-r from-orange-500/15 to-red-500/10 rounded-2xl p-6 border border-orange-400/40 hover:border-orange-300/60 transition-all duration-300 group/proc overflow-hidden"
                  >
                    {/* Card background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/5 to-red-400/5 opacity-0 group-hover/proc:opacity-100 transition-opacity duration-500" />

                    <div className="relative flex items-center mb-4">
                      <motion.span whileHover={{ rotate: 15, scale: 1.2 }} className="text-orange-400 font-bold text-2xl mr-3 filter drop-shadow-lg">
                        📋
                      </motion.span>
                      <h4 className="text-orange-400 font-bold text-xl group-hover/proc:text-orange-300 transition-colors duration-300">Prosedural (C)</h4>
                    </div>
                    <p className="text-orange-200 font-bold text-lg mb-2 group-hover/proc:text-orange-100 transition-colors duration-300">{comparison.proceduralAspect}</p>
                    <p className="text-gray-200 text-base leading-relaxed group-hover/proc:text-gray-100 transition-colors duration-300">{comparison.proceduralDetail}</p>

                    {/* Progress indicator */}
                    <div className="mt-4 h-1 bg-orange-400/20 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1, delay: index * 0.2 + 0.5 }} className="h-full bg-gradient-to-r from-orange-400 to-red-400 rounded-full" />
                    </div>
                  </motion.div>

                  {/* VS Divider */}
                  <div className="flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold text-lg shadow-xl"
                    >
                      VS
                    </motion.div>
                  </div>

                  {/* OOP Side */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    className="relative bg-gradient-to-r from-cyan-500/15 to-blue-500/10 rounded-2xl p-6 border border-cyan-400/40 hover:border-cyan-300/60 transition-all duration-300 group/oop overflow-hidden"
                  >
                    {/* Card background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 opacity-0 group-hover/oop:opacity-100 transition-opacity duration-500" />

                    <div className="relative flex items-center mb-4">
                      <motion.span whileHover={{ rotate: -15, scale: 1.2 }} className="text-cyan-400 font-bold text-2xl mr-3 filter drop-shadow-lg">
                        🏗️
                      </motion.span>
                      <h4 className="text-cyan-400 font-bold text-xl group-hover/oop:text-cyan-300 transition-colors duration-300">OOP (C++)</h4>
                    </div>
                    <p className="text-cyan-200 font-bold text-lg mb-2 group-hover/oop:text-cyan-100 transition-colors duration-300">{comparison.oopAspect}</p>
                    <p className="text-gray-200 text-base leading-relaxed group-hover/oop:text-gray-100 transition-colors duration-300">{comparison.oopDetail}</p>

                    {/* Progress indicator */}
                    <div className="mt-4 h-1 bg-cyan-400/20 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1, delay: index * 0.2 + 0.7 }} className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
                    </div>
                  </motion.div>
                </div>
                {/* Floating particles effect */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400/60 rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`,
                      }}
                      animate={{
                        y: [-10, -20, -10],
                        opacity: [0, 0.8, 0],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>{" "}
              </div>
            </motion.div>
          ))}

          {/* Conclusion Card - Now in the same row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="relative bg-gradient-to-br from-slate-800/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl rounded-3xl p-8 border border-purple-400/40 hover:border-purple-300/60 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/40 overflow-hidden group min-w-[400px] max-w-[450px]"
          >
            {/* Enhanced background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />

            {/* Animated corner accent */}
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/25 via-pink-500/20 to-indigo-500/25 rounded-bl-full"
              initial={{ scale: 0, rotate: -45, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1, type: "spring", stiffness: 150 }}
            />

            {/* Enhanced title */}
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-2xl font-bold text-purple-400 mb-6 text-center flex items-center justify-center relative group-hover:text-purple-300 transition-colors duration-300"
            >
              <motion.span
                className="mr-3 text-3xl"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🎯
              </motion.span>
              <span className="relative z-10">Kapan Menggunakan?</span>
              {/* Text glow effect */}
              <span className="absolute inset-0 text-2xl font-bold text-purple-300 opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500">Kapan Menggunakan?</span>
            </motion.h3>

            {/* Compact Grid Layout for Conclusion Cards */}
            <div className="relative grid grid-cols-1 gap-4 mb-4">
              {/* Enhanced Procedural Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="relative bg-gradient-to-r from-orange-500/15 to-red-500/10 rounded-xl p-4 border border-orange-400/40 hover:border-orange-300/60 transition-all duration-300 group/proc overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/5 to-red-400/5 opacity-0 group-hover/proc:opacity-100 transition-opacity duration-500" />

                <h4 className="text-orange-400 font-bold mb-3 flex items-center text-lg group-hover/proc:text-orange-300 transition-colors duration-300">
                  <motion.span className="mr-2 text-xl" whileHover={{ rotate: 15, scale: 1.2 }}>
                    📋
                  </motion.span>
                  Prosedural
                </h4>
                <ul className="text-gray-300 space-y-1 group-hover/proc:text-gray-100 transition-colors duration-300">
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 1.4 }} className="flex items-center text-sm">
                    <span className="text-orange-400 mr-2">•</span> Script sederhana
                  </motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 1.5 }} className="flex items-center text-sm">
                    <span className="text-orange-400 mr-2">•</span> Tugas linier
                  </motion.li>
                  <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 1.6 }} className="flex items-center text-sm">
                    <span className="text-orange-400 mr-2">•</span> Prototype cepat
                  </motion.li>
                </ul>

                {/* Progress indicator */}
                <div className="mt-3 h-1 bg-orange-400/20 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ duration: 1, delay: 1.7 }} className="h-full bg-gradient-to-r from-orange-400 to-red-400 rounded-full" />
                </div>
              </motion.div>

              {/* Enhanced OOP Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="relative bg-gradient-to-r from-cyan-500/15 to-blue-500/10 rounded-xl p-4 border border-cyan-400/40 hover:border-cyan-300/60 transition-all duration-300 group/oop overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 opacity-0 group-hover/oop:opacity-100 transition-opacity duration-500" />

                <h4 className="text-cyan-400 font-bold mb-3 flex items-center text-lg group-hover/oop:text-cyan-300 transition-colors duration-300">
                  <motion.span className="mr-2 text-xl" whileHover={{ rotate: -15, scale: 1.2 }}>
                    🏗️
                  </motion.span>
                  OOP
                </h4>
                <ul className="text-gray-300 space-y-1 group-hover/oop:text-gray-100 transition-colors duration-300">
                  <motion.li initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 1.6 }} className="flex items-center text-sm">
                    <span className="text-cyan-400 mr-2">•</span> Aplikasi kompleks
                  </motion.li>
                  <motion.li initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 1.7 }} className="flex items-center text-sm">
                    <span className="text-cyan-400 mr-2">•</span> Tim besar
                  </motion.li>
                  <motion.li initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 1.8 }} className="flex items-center text-sm">
                    <span className="text-cyan-400 mr-2">•</span> Code reusability
                  </motion.li>
                </ul>

                {/* Progress indicator */}
                <div className="mt-3 h-1 bg-cyan-400/20 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "90%" }} transition={{ duration: 1, delay: 1.9 }} className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
                </div>
              </motion.div>
            </div>

            {/* Enhanced Conclusion Card - Compact */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="relative bg-gradient-to-r from-purple-500/15 to-pink-500/10 rounded-xl p-4 border border-purple-400/40 hover:border-purple-300/60 transition-all duration-300 group/conclusion overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 to-pink-400/5 opacity-0 group-hover/conclusion:opacity-100 transition-opacity duration-500" />

              <h4 className="text-purple-400 font-bold mb-3 text-center flex items-center justify-center text-lg group-hover/conclusion:text-purple-300 transition-colors duration-300">
                <motion.span
                  className="mr-2 text-xl"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  ⚡
                </motion.span>
                Kesimpulan
              </h4>
              <p className="text-gray-300 text-sm text-center leading-relaxed group-hover/conclusion:text-gray-100 transition-colors duration-300">
                C++ memberikan <span className="text-purple-400 font-semibold">fleksibilitas</span> untuk menggunakan kedua paradigma
              </p>

              {/* Animated underline */}
              <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1, delay: 2 }} className="mt-3 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 rounded-full mx-auto" />
            </motion.div>

            {/* Floating particles effect */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400/60 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    left: `${25 + i * 20}%`,
                    top: `${40 + i * 15}%`,
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}
