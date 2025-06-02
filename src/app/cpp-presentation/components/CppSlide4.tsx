"use client";

import { motion } from "framer-motion";

interface CppSlide4Props {
  slideNumber: number;
  totalSlides: number;
}

export default function CppSlide4({ slideNumber, totalSlides }: CppSlide4Props) {
  const cppFeatures = [
    {
      title: "Kelas dan Objek",
      description: "Unit kode yang menggabungkan data dan fungsi",
      icon: "🏗️",
      color: "from-blue-400 to-cyan-500",
      example: "class Car { engine, drive() }",
    },
    {
      title: "Pewarisan",
      description: "Mengurangi duplikasi dengan mewarisi sifat kelas lain",
      icon: "🔗",
      color: "from-green-400 to-emerald-500",
      example: "SportsCar : public Car",
    },
    {
      title: "Polimorfisme",
      description: "Satu fungsi berperilaku berbeda sesuai konteks",
      icon: "🎭",
      color: "from-purple-400 to-violet-500",
      example: "virtual void draw()",
    },
    {
      title: "Pembungkusan Data",
      description: "Melindungi data dari akses luar yang tidak sah",
      icon: "🔐",
      color: "from-red-400 to-pink-500",
      example: "private: sensitive_data",
    },
    {
      title: "Template & Operator Overloading",
      description: "Membuat kode lebih fleksibel",
      icon: "🔧",
      color: "from-orange-400 to-yellow-500",
      example: "template<class T>",
    },
  ];
  return (
    <div className="h-full flex flex-col justify-center text-white p-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Fitur Utama C++</h1>
        <p className="text-xl text-gray-300">Kekuatan yang membuat C++ powerful dan fleksibel</p>
      </motion.div>
      {/* Features Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {cppFeatures.map((feature, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} className="group">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30 h-full hover:border-cyan-400/50 transition-all duration-300"
              >
                {/* Icon and Title */}
                <div className="flex items-center mb-4">
                  <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-xl mr-4`}>
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">{feature.title}</h3>
                </div>{" "}
                {/* Description */}
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">{feature.description}</p>
                {/* Code Example */}
                <div className="bg-slate-900/80 rounded-lg p-2">
                  <code className="text-cyan-400 text-xs font-mono">{feature.example}</code>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-gradient-to-r from-slate-800/80 to-slate-700/60 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30"
        >
          <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">🎯 Manfaat Utama</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-900/50 rounded-lg p-4">
              <div className="text-2xl mb-2">📦</div>
              <h4 className="font-semibold text-white mb-2">Modular</h4>
              <p className="text-gray-400 text-sm">Kode terorganisir dan mudah dikelola</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-900/50 rounded-lg p-4">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="font-semibold text-white mb-2">Performa Tinggi</h4>
              <p className="text-gray-400 text-sm">Eksekusi cepat dan efisien</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-900/50 rounded-lg p-4">
              <div className="text-2xl mb-2">🔄</div>
              <h4 className="font-semibold text-white mb-2">Multi-Paradigma</h4>
              <p className="text-gray-400 text-sm">Mendukung berbagai gaya pemrograman</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* Decorative Elements */}
      <motion.div initial={{ opacity: 0, rotate: -180 }} animate={{ opacity: 0.1, rotate: 0 }} transition={{ duration: 2, delay: 1.5 }} className="absolute top-10 right-10 text-4xl text-cyan-400">
        🎯
      </motion.div>{" "}
      <motion.div initial={{ opacity: 0, rotate: 180 }} animate={{ opacity: 0.1, rotate: 0 }} transition={{ duration: 2, delay: 2 }} className="absolute bottom-20 left-10 text-3xl text-purple-400">
        🔧
      </motion.div>
    </div>
  );
}
