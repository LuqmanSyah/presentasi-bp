"use client";

import { motion } from "framer-motion";

interface CppSlide4Props {
  slideNumber: number;
  totalSlides: number;
}

export default function CppSlide4({ slideNumber, totalSlides }: CppSlide4Props) {
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

      {/* Unified Features Card */}
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative group">
          <motion.div
            whileHover={{ scale: 1.01, y: -3 }}
            className="relative bg-gradient-to-br from-slate-800/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl rounded-3xl p-10 border border-cyan-400/40 hover:border-cyan-400/80 overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/30"
          >
            {/* Enhanced glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />

            {/* Animated corner accents */}
            <motion.div
              className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-400/25 via-blue-500/20 to-purple-500/25 rounded-bl-full"
              initial={{ scale: 0, rotate: -45, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 150 }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-400/20 via-pink-500/15 to-cyan-400/20 rounded-tr-full"
              initial={{ scale: 0, rotate: 45, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7, type: "spring", stiffness: 150 }}
            />

            {/* Header */}
            <div className="text-center mb-10">
              <motion.h2 className="font-bold text-3xl mb-4 bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                Pemrograman Berorientasi Objek & Fitur Lanjutan
              </motion.h2>
              <motion.span
                className="px-6 py-3 rounded-full text-sm font-bold bg-gradient-to-r from-cyan-400/25 to-purple-400/25 text-cyan-300 border border-cyan-400/30 shadow-lg backdrop-blur-sm"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Core Features
              </motion.span>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              {/* OOP Core Features */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent flex items-center">
                  <span className="text-3xl mr-3">🏛️</span>
                  Konsep OOP Inti
                </h3>

                {/* Classes & Objects */}
                <motion.div
                  className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <motion.div className="text-3xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 filter drop-shadow-lg" whileHover={{ scale: 1.2, rotate: 10 }}>
                    🏗️
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-blue-300">Kelas dan Objek</h4>
                    <p className="text-slate-300 text-base leading-relaxed mb-2">Unit kode yang menggabungkan data dan fungsi</p>{" "}
                    <div className="bg-slate-900/60 rounded-lg p-3 border border-blue-400/20">
                      <code className="text-cyan-400 text-sm font-mono">class Car {`{ engine, drive() }`}</code>
                    </div>
                  </div>
                </motion.div>

                {/* Inheritance */}
                <motion.div
                  className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/20 hover:border-green-400/40 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <motion.div className="text-3xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 filter drop-shadow-lg" whileHover={{ scale: 1.2, rotate: 10 }}>
                    🔗
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-green-300">Pewarisan</h4>
                    <p className="text-slate-300 text-base leading-relaxed mb-2">Mengurangi duplikasi dengan mewarisi sifat kelas lain</p>
                    <div className="bg-slate-900/60 rounded-lg p-3 border border-green-400/20">
                      <code className="text-green-400 text-sm font-mono">SportsCar : public Car</code>
                    </div>
                  </div>
                </motion.div>

                {/* Polymorphism */}
                <motion.div
                  className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <motion.div className="text-3xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 filter drop-shadow-lg" whileHover={{ scale: 1.2, rotate: 10 }}>
                    🎭
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-purple-300">Polimorfisme</h4>
                    <p className="text-slate-300 text-base leading-relaxed mb-2">Satu fungsi berperilaku berbeda sesuai konteks</p>
                    <div className="bg-slate-900/60 rounded-lg p-3 border border-purple-400/20">
                      <code className="text-purple-400 text-sm font-mono">virtual void draw()</code>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Advanced Features */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent flex items-center">
                  <span className="text-3xl mr-3">⚡</span>
                  Fitur Lanjutan
                </h3>

                {/* Encapsulation */}
                <motion.div
                  className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-400/20 hover:border-red-400/40 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <motion.div className="text-3xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 filter drop-shadow-lg" whileHover={{ scale: 1.2, rotate: 10 }}>
                    🔐
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-red-300">Pembungkusan Data</h4>
                    <p className="text-slate-300 text-base leading-relaxed mb-2">Melindungi data dari akses luar yang tidak sah</p>
                    <div className="bg-slate-900/60 rounded-lg p-3 border border-red-400/20">
                      <code className="text-red-400 text-sm font-mono">private: sensitive_data</code>
                    </div>
                  </div>
                </motion.div>

                {/* Templates & Operator Overloading */}
                <motion.div
                  className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-400/20 hover:border-orange-400/40 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <motion.div className="text-3xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 filter drop-shadow-lg" whileHover={{ scale: 1.2, rotate: 10 }}>
                    🔧
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-orange-300">Template & Operator Overloading</h4>
                    <p className="text-slate-300 text-base leading-relaxed mb-2">Membuat kode lebih fleksibel dan dapat digunakan kembali</p>{" "}
                    <div className="bg-slate-900/60 rounded-lg p-3 border border-orange-400/20">
                      <code className="text-orange-400 text-sm font-mono">template&lt;class T&gt;</code>
                    </div>
                  </div>
                </motion.div>

                {/* Benefits Summary */}
                <motion.div className="p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-400/30" whileHover={{ scale: 1.02 }}>
                  <h4 className="text-xl font-bold mb-4 text-cyan-300 flex items-center">
                    <span className="text-2xl mr-2">🎯</span>
                    Manfaat Utama
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">📦</span>
                      <span className="text-slate-300">
                        Kode <strong className="text-white">modular</strong> dan terorganisir
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">⚡</span>
                      <span className="text-slate-300">
                        <strong className="text-white">Performa tinggi</strong> dan efisien
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">🔄</span>
                      <span className="text-slate-300">
                        Mendukung <strong className="text-white">multi-paradigma</strong>
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Progress line */}
            <div className="relative mt-8 h-1 bg-slate-700/50 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} whileHover={{ width: "100%" }} transition={{ duration: 1.2, ease: "easeOut" }} className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg shadow-cyan-500/50" />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400/60 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    left: `${15 + i * 25}%`,
                    top: `${10 + i * 20}%`,
                  }}
                  animate={{
                    y: [-8, -16, -8],
                    opacity: [0, 0.8, 0],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
        animate={{ opacity: 0.15, scale: 1, rotate: 12 }}
        transition={{ delay: 2, duration: 1.5, type: "spring", stiffness: 100 }}
        className="absolute top-20 left-10 font-mono text-lg text-cyan-400 filter drop-shadow-lg bg-slate-900/30 px-3 py-2 rounded-lg backdrop-blur-sm border border-cyan-400/20"
      >
        class Object {"{}"}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
        animate={{ opacity: 0.15, scale: 1, rotate: -12 }}
        transition={{ delay: 2.5, duration: 1.5, type: "spring", stiffness: 100 }}
        className="absolute top-32 right-16 font-mono text-lg text-purple-400 filter drop-shadow-lg bg-slate-900/30 px-3 py-2 rounded-lg backdrop-blur-sm border border-purple-400/20"
      >
        virtual function()
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 0.15, scale: 1, rotate: 6 }}
        transition={{ delay: 3, duration: 1.5, type: "spring", stiffness: 100 }}
        className="absolute bottom-20 left-20 font-mono text-lg text-orange-400 filter drop-shadow-lg bg-slate-900/30 px-3 py-2 rounded-lg backdrop-blur-sm border border-orange-400/20"
      >
        template&lt;T&gt;
      </motion.div>
    </div>
  );
}
