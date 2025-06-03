"use client";

import { motion } from "framer-motion";

export default function CppSlide7() {
  const applications = [
    {
      category: "Game",
      title: "🎮 Game Development",
      examples: "Unreal Engine untuk Fortnite, PUBG",
      description: "Jelaskan bahwa C++ digunakan di Unreal Engine, mesin game populer untuk game seperti Fortnite, karena kecepatan dan kemampuan menangani grafis kompleks.",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30 hover:border-purple-400/50",
    },
    {
      category: "Sistem Operasi",
      title: "💻 Sistem Operasi",
      examples: "Komponen Windows, macOS, Linux",
      description: "Sampaikan bahwa bagian penting dari sistem operasi seperti Windows dan Linux ditulis dengan C++ untuk efisiensi dan kontrol langsung terhadap perangkat keras.",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30 hover:border-blue-400/50",
    },
    {
      category: "Desktop",
      title: "🖥️ Aplikasi Desktop",
      examples: "Adobe Photoshop, Microsoft Office",
      description: "Sebutkan bahwa aplikasi profesional seperti Adobe Photoshop menggunakan C++ untuk stabilitas dan performa tinggi.",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30 hover:border-green-400/50",
    },
    {
      category: "AI & Keuangan",
      title: "🤖 AI & Sistem Keuangan",
      examples: "TensorFlow, PyTorch, Trading Systems",
      description: "C++ digunakan untuk AI libraries dan sistem perdagangan karena performa tinggi.",
      color: "from-indigo-500/20 to-purple-500/20",
      borderColor: "border-indigo-500/30 hover:border-indigo-400/50",
    },
    {
      category: "Kesimpulan",
      title: "🌍 C++ Menggerakkan Dunia Modern",
      examples: "Dari game, OS, aplikasi profesional hingga teknologi masa depan",
      description: "C++ tetap menjadi tulang punggung teknologi modern yang membutuhkan performa tinggi dan kontrol presisi.",
      color: "from-cyan-500/20 to-teal-500/20",
      borderColor: "border-cyan-500/30 hover:border-cyan-400/50",
      isConclusion: true,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col justify-center items-center min-h-full w-full px-6 md:px-12 py-8 pt-20 text-white"
    >
      {" "}
      <div className="max-w-7xl w-full space-y-6">
        {/* Cards section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full justify-items-center">
            {/* Left side - First 4 cards in 2x2 grid */}
            <div className="lg:col-span-2 flex justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl justify-items-center">
                {" "}
                {applications.slice(0, 4).map((app, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, rotateX: -15 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
                    whileHover={{
                      scale: 1.05,
                      y: -15,
                      rotateX: 5,
                      transition: { duration: 0.3 },
                    }}
                    className={`bg-gradient-to-br ${app.color} backdrop-blur-xl rounded-2xl p-7 border ${app.borderColor} transition-all duration-500 group relative overflow-hidden mx-auto w-full max-w-sm shadow-2xl hover:shadow-cyan-500/25`}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Enhanced glowing background effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-cyan-400/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200" />

                    {/* Subtle dot pattern overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(34, 211, 238, 0.2) 1px, transparent 0)`,
                        backgroundSize: "16px 16px",
                      }}
                    />

                    {/* Animated corner accent */}
                    <motion.div
                      className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-400/20 via-blue-500/15 to-purple-500/20 rounded-bl-full"
                      initial={{ scale: 0, rotate: -45, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.5, type: "spring", stiffness: 150 }}
                    />

                    {/* Application card content */}
                    <div className="relative z-10">
                      <div className="text-center mb-6">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 200 }}
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          className="relative inline-block text-5xl mb-4 filter drop-shadow-lg"
                        >
                          <span className="relative z-10">{app.title.split(" ")[0]}</span>
                          {/* Icon glow effect */}
                          <motion.div
                            className="absolute inset-0 text-5xl text-cyan-300 opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-500"
                            animate={{
                              scale: [1, 1.1, 1],
                              opacity: [0, 0.3, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            {app.title.split(" ")[0]}
                          </motion.div>
                        </motion.div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors duration-300 relative">
                          <span className="relative z-10">{app.title.substring(2)}</span>
                          {/* Text glow effect */}
                          <span className="absolute inset-0 text-xl font-bold text-cyan-200 opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500">{app.title.substring(2)}</span>
                        </h3>
                      </div>

                      <div className="space-y-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                          className="relative bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 group/inner overflow-hidden"
                        >
                          {/* Inner card glow */}
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 opacity-0 group-hover/inner:opacity-100 transition-opacity duration-500" />

                          <div className="relative z-10">
                            <p className="text-sm text-gray-300 mb-2 font-medium flex items-center">
                              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                              Contoh Aplikasi:
                            </p>
                            <p className="font-semibold text-cyan-100 group-hover/inner:text-cyan-50 transition-colors duration-300 leading-relaxed">{app.examples}</p>
                          </div>

                          {/* Progress indicator */}
                          <div className="mt-3 h-1 bg-cyan-400/20 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1, delay: 0.8 + index * 0.1 }} className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Enhanced floating particles */}
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-cyan-400/60 rounded-full opacity-0 group-hover:opacity-100"
                          style={{
                            left: `${20 + i * 25}%`,
                            top: `${30 + i * 15}%`,
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
                    <motion.div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10" initial={false} />
                  </motion.div>
                ))}
              </div>
            </div>{" "}
            {/* Right side - 5th card (conclusion) */}
            <div className="lg:col-span-1 flex justify-center items-center">
              <div className="w-full max-w-sm mx-auto">
                {" "}
                {applications.slice(4).map((app, index) => (
                  <motion.div
                    key={index + 4}
                    initial={{ opacity: 0, y: 50, rotateX: -15, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.8, type: "spring", stiffness: 100 }}
                    whileHover={{
                      scale: 1.05,
                      y: -20,
                      rotateX: 8,
                      transition: { duration: 0.3 },
                    }}
                    className={`bg-gradient-to-br ${app.color} backdrop-blur-xl rounded-3xl p-8 border ${app.borderColor} transition-all duration-500 group relative overflow-hidden w-full mx-auto shadow-2xl hover:shadow-cyan-500/30`}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Enhanced background effects for conclusion card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-teal-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />

                    {/* Enhanced dot pattern for conclusion */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                      style={{
                        backgroundImage: `radial-gradient(circle at 3px 3px, rgba(34, 211, 238, 0.3) 2px, transparent 0)`,
                        backgroundSize: "24px 24px",
                      }}
                    />

                    {/* Large animated corner accent */}
                    <motion.div
                      className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/25 via-teal-500/20 to-blue-500/25 rounded-bl-full"
                      initial={{ scale: 0, rotate: -45, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      transition={{ duration: 1, delay: 1, type: "spring", stiffness: 150 }}
                    />

                    {/* Application card content */}
                    <div className="relative z-10">
                      <div className="text-center mb-8">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                          whileHover={{
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.2, 1],
                          }}
                          className="relative inline-block text-6xl mb-5 filter drop-shadow-2xl"
                        >
                          <span className="relative z-10">{app.title.split(" ")[0]}</span>
                          {/* Enhanced icon glow for conclusion */}
                          <motion.div
                            className="absolute inset-0 text-6xl text-cyan-300 opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-700"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0, 0.4, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            {app.title.split(" ")[0]}
                          </motion.div>
                        </motion.div>
                        <h3 className="text-2xl font-bold text-white mb-5 group-hover:text-cyan-200 transition-colors duration-300 relative">
                          <span className="relative z-10">{app.title.substring(2)}</span>
                          {/* Enhanced text glow for conclusion */}
                          <span className="absolute inset-0 text-2xl font-bold text-cyan-200 opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-700">{app.title.substring(2)}</span>
                        </h3>
                      </div>

                      <div className="space-y-5">
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1, duration: 0.6 }}
                          className="relative bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-300/50 transition-all duration-500 group/inner overflow-hidden"
                        >
                          {/* Enhanced inner glow for conclusion */}
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-teal-400/10 opacity-0 group-hover/inner:opacity-100 transition-opacity duration-700" />

                          <div className="relative z-10">
                            <p className="text-sm text-gray-300 mb-3 font-medium flex items-center">
                              <motion.span
                                className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full mr-3"
                                animate={{
                                  scale: [1, 1.3, 1],
                                  opacity: [0.7, 1, 0.7],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              />
                              Rangkuman:
                            </p>
                            <p className="font-semibold text-cyan-50 group-hover/inner:text-white transition-colors duration-300 text-lg leading-relaxed">{app.examples}</p>
                          </div>

                          {/* Enhanced progress indicator for conclusion */}
                          <div className="mt-5 h-2 bg-cyan-400/20 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 1.5, delay: 1.2 }}
                              className="h-full bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 rounded-full relative overflow-hidden"
                            >
                              {/* Animated shine effect */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/4"
                                animate={{
                                  x: ["-100%", "400%"],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "linear",
                                  delay: 2,
                                }}
                              />
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Enhanced floating particles for conclusion */}
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-100"
                          style={{
                            left: `${15 + i * 20}%`,
                            top: `${25 + i * 12}%`,
                          }}
                          animate={{
                            y: [-12, -24, -12],
                            opacity: [0, 0.8, 0],
                            scale: [0.3, 1, 0.3],
                            rotate: [0, 180, 360],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.4,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>

                    {/* Enhanced shadow effect for conclusion */}
                    <motion.div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 to-teal-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl blur-2xl -z-10" initial={false} />
                  </motion.div>
                ))}
              </div>{" "}
            </div>{" "}
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-16 right-16 text-4xl opacity-20"
        >
          🌐
        </motion.div>
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-16 text-3xl opacity-20"
        >
          💻
        </motion.div>
        <motion.div
          animate={{
            x: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-8 text-2xl opacity-15"
        >
          🚀
        </motion.div>
      </div>
    </motion.div>
  );
}
