"use client";

import { motion } from "framer-motion";

interface CppSlide7Props {
  slideNumber: number;
  totalSlides: number;
}

export default function CppSlide7({ slideNumber, totalSlides }: CppSlide7Props) {
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
      className="flex flex-col justify-center items-center min-h-full w-full px-6 md:px-12 py-8 text-white"
    >
      <div className="max-w-7xl w-full space-y-6">
        {/* Header with slide number */}
        <div className="flex items-center justify-between mb-6">
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

        {/* Title section - perfectly centered */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center mb-6 w-full">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mx-auto">Aplikasi C++ di Dunia Nyata</h1>
          <p className="text-xl text-gray-300 mx-auto max-w-4xl">C++ digunakan di berbagai industri untuk sistem yang membutuhkan performa tinggi</p>
        </motion.div>

        {/* Cards section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full justify-items-center">
            {/* Left side - First 4 cards in 2x2 grid */}
            <div className="lg:col-span-2 flex justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl justify-items-center">
                {applications.slice(0, 4).map((app, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className={`bg-gradient-to-br ${app.color} backdrop-blur-sm rounded-xl p-6 border ${app.borderColor} transition-all duration-300 group relative overflow-hidden mx-auto w-full max-w-sm`}
                  >
                    {/* Application card content */}
                    <div className="relative z-10">
                      <div className="text-center mb-4">
                        <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 200 }} className="text-4xl mb-3">
                          {app.title.split(" ")[0]}
                        </motion.div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors duration-300">{app.title.substring(2)}</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-black/20 rounded-lg p-3 border border-white/10">
                          <p className="text-sm text-gray-300 mb-1 font-medium">Contoh Aplikasi:</p>
                          <p className="font-semibold text-cyan-200">{app.examples}</p>
                        </div>
                      </div>
                    </div>

                    {/* Animated background effect */}
                    <motion.div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" initial={false} />
                  </motion.div>
                ))}
              </div>
            </div>{" "}
            {/* Right side - 5th card (conclusion) */}
            <div className="lg:col-span-1 flex justify-center items-center">
              <div className="w-full max-w-sm mx-auto">
                {applications.slice(4).map((app, index) => (
                  <motion.div
                    key={index + 4}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className={`bg-gradient-to-br ${app.color} backdrop-blur-sm rounded-xl p-6 border ${app.borderColor} transition-all duration-300 group relative overflow-hidden w-full mx-auto`}
                  >
                    {/* Application card content */}
                    <div className="relative z-10">
                      <div className="text-center mb-6">
                        <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.8, type: "spring", stiffness: 200 }} className="text-5xl mb-4">
                          {app.title.split(" ")[0]}
                        </motion.div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-200 transition-colors duration-300">{app.title.substring(2)}</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                          <p className="text-sm text-gray-300 mb-2 font-medium">Rangkuman:</p>
                          <p className="font-semibold text-cyan-300 text-lg leading-relaxed">{app.examples}</p>
                        </div>
                      </div>
                    </div>

                    {/* Animated background effect */}
                    <motion.div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" initial={false} />
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
