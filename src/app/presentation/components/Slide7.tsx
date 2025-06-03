"use client";

import { motion } from "framer-motion";

export default function Slide7() {
  const keyPoints = [
    {
      emoji: "🔑",
      title: "Poin-Poin Utama",
      points: [
        "Python lahir dari kebutuhan akan bahasa yang sederhana namun kuat.",
        "Filosofinya menekankan keterbacaan, kesederhanaan, dan kenyamanan pengguna.",
        "Perjalanan dari proyek pribadi → komunitas open-source → standar industri global.",
      ],
    },
    {
      emoji: "🌍",
      title: "Mengapa Python Relevan Hingga Kini?",
      points: ["Sintaks mudah dipahami → cocok untuk pemula", "Ekosistem pustaka lengkap → cocok untuk profesional", "Mendukung banyak bidang: AI, Web, IoT, Data Science, Otomatisasi"],
    },
    {
      emoji: "🔮",
      title: "Python ke Depan",
      points: ["Terus berkembang mengikuti era: cloud computing, pembelajaran mesin, dan teknologi terapan lainnya.", "Python bukan sekadar alat, tapi juga jembatan antara manusia & teknologi."],
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
      {" "}
      <div className="max-w-7xl w-full space-y-8">
        {/* Key points in horizontal layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {keyPoints.map((point, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }} className="group">
              <div className="relative h-full">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    index === 0 ? "from-blue-500/20 via-purple-500/10 to-cyan-500/20" : index === 1 ? "from-green-500/20 via-teal-500/10 to-emerald-500/20" : "from-purple-500/20 via-pink-500/10 to-orange-500/20"
                  } rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}
                ></div>

                <div className="relative bg-gradient-to-br from-slate-800/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl border border-slate-600/30 rounded-2xl p-6 h-full">
                  <div className="text-center mb-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${
                        index === 0 ? "from-blue-500 to-purple-600" : index === 1 ? "from-green-500 to-teal-600" : "from-purple-500 to-pink-600"
                      } rounded-full flex items-center justify-center text-xl mx-auto mb-3`}
                    >
                      {point.emoji}
                    </div>
                    <h3 className={`text-lg font-bold bg-gradient-to-r ${index === 0 ? "from-blue-400 to-purple-400" : index === 1 ? "from-green-400 to-teal-400" : "from-purple-400 to-pink-400"} bg-clip-text text-transparent`}>
                      {point.title}
                    </h3>
                  </div>{" "}
                  <div className="space-y-2">
                    {point.points.map((pointText, pointIndex) => (
                      <motion.p
                        key={pointIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1.2 + index * 0.2 + pointIndex * 0.1 }}
                        className="text-slate-200 text-base leading-relaxed font-semibold"
                      >
                        • {pointText}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>{" "}
        {/* Final inspirational quote */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 1.8 }} className="text-center">
          <div className="relative max-w-4xl mx-auto">
            {/* Quote background */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 rounded-2xl blur-xl"></div>

            {/* Quote content */}
            <div className="relative bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80 backdrop-blur-xl border border-slate-600/30 rounded-2xl p-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.1 }}
                className="text-xl md:text-2xl font-light text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text leading-relaxed italic"
              >
                &ldquo;Python bukan hanya bahasa pemrograman — ia adalah gerakan untuk membuat teknologi lebih mudah diakses oleh semua orang.&rdquo;
              </motion.p>

              {/* Decorative elements */}
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 2.4 }} className="flex justify-center mt-6">
                <div className="flex space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${
                        i === 0 ? "from-yellow-400 to-orange-400" : i === 1 ? "from-orange-400 to-red-400" : i === 2 ? "from-red-400 to-pink-400" : i === 3 ? "from-pink-400 to-purple-400" : "from-purple-400 to-blue-400"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>{" "}
        {/* Thank you section */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2.6 }} className="text-center mt-12">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Terima Kasih</h3>
            <p className="text-slate-400 text-lg">Kelompok 1 - Presentasi Pengenalan Pemrograman & Sejarah Python</p>
            <div className="flex justify-center space-x-4 mt-6">
              {["Luqman", "Ilham", "Dafa", "Adit"].map((name, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.8 + index * 0.1 }}
                  className="bg-gradient-to-r from-slate-700 to-slate-800 text-slate-200 px-4 py-2 rounded-full text-sm"
                >
                  {name}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
