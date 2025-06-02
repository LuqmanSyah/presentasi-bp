"use client";

import { motion } from "framer-motion";

interface Slide6Props {
  slideNumber: number;
  totalSlides: number;
}

export default function Slide6({ slideNumber, totalSlides }: Slide6Props) {
  const versions = [
    {
      version: "Python 1.x",
      year: "1994",
      title: "Fondasi Awal",
      features: ["Fitur dasar: list, dictionary, OOP", "Populer di akademis & riset"],
      color: "from-green-500 to-emerald-600",
    },
    {
      version: "Python 2.x",
      year: "2000",
      title: "Pertumbuhan Pesat",
      features: ["List comprehensions, Unicode", "Standar industri >10 tahun"],
      color: "from-blue-500 to-cyan-600",
    },
    {
      version: "Python 3.x",
      year: "2008–sekarang",
      title: "Era Modern",
      features: ["Tidak kompatibel dengan Python 2", "Print() function, Full Unicode", "Pattern Matching, Performa tinggi"],
      color: "from-purple-500 to-pink-600",
    },
  ];
  const currentUsage = [
    { area: "Data Science & AI", tools: "TensorFlow, Pandas, Scikit-learn" },
    { area: "Web Development", tools: "Django, Flask" },
    { area: "Otomatisasi & DevOps", tools: "CI/CD, skrip server" },
    { area: "Cloud & Industri", tools: "AWS, Google Cloud, Azure" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col justify-center items-center min-h-full w-full px-6 md:px-12 py-8"
    >
      <div className="max-w-7xl w-full space-y-8">
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
        {/* Title */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent leading-tight"
          >
            Evolusi Versi Python & Penggunaannya
          </motion.h1>
        </div>{" "}
        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Version Timeline - Left Side */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8">Perjalanan Versi Python</h2>

            <div className="space-y-6">
              {versions.map((version, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.2,
                  }}
                  className="group"
                >
                  <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-600/30 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 h-full">
                    {/* Version badge */}
                    <div className="absolute -top-3 -right-3">
                      <div className={`bg-gradient-to-r ${version.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>{version.year}</div>
                    </div>
                    {/* Version info */}
                    <div className="mb-4">
                      <h3 className={`text-2xl font-bold bg-gradient-to-r ${version.color} bg-clip-text text-transparent mb-2`}>{version.version}</h3>
                      <p className="text-slate-300 text-lg font-semibold">{version.title}</p>
                    </div>{" "}
                    {/* Features */}
                    <div className="space-y-1">
                      {version.features.map((feature, featureIndex) => (
                        <p key={featureIndex} className="text-white text-base leading-relaxed font-semibold">
                          {feature}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Current Usage Section - Right Side */}
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }}>
              <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-8">Penggunaan Python Saat Ini</h2>

              <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-600/30 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300 h-fit">
                <div className="space-y-4">
                  {currentUsage.map((usage, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                      className="bg-slate-700/40 p-4 rounded-lg border border-slate-600/50 flex flex-col"
                    >
                      <h4 className="font-bold text-white text-lg mb-1.5">{usage.area}</h4>
                      <p className="text-slate-300 text-sm font-semibold">{usage.tools}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>{" "}
        {/* Bottom conclusion */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.8 }} className="text-center mt-8">
          <div className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-600/30 rounded-2xl p-4 max-w-4xl mx-auto">
            <p className="text-base text-slate-300 leading-relaxed">Python terus berevolusi dari alat edukasi menjadi fondasi teknologi modern di berbagai sektor industri.</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
