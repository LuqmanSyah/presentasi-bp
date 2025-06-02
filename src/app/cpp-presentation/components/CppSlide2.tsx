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
    <div className="h-full flex flex-col justify-center text-white p-8">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Agenda</h1>
        <p className="text-xl text-gray-300">Roadmap perjalanan belajar C++ hari ini</p>
      </motion.div>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agendaItems.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} className="group">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 h-full">
                {/* Number and Icon */}
                <div className="flex items-center justify-between mb-4">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }} className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {item.number}
                  </motion.div>
                  <motion.div initial={{ rotate: -180, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }} className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{item.title}</h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>

                {/* Hover effect line */}
                <motion.div initial={{ width: 0 }} whileHover={{ width: "100%" }} transition={{ duration: 0.3 }} className="h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mt-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Decorative Elements */}
      <motion.div initial={{ opacity: 0, rotate: -180 }} animate={{ opacity: 0.1, rotate: 0 }} transition={{ duration: 2, delay: 1 }} className="absolute top-10 right-10 text-6xl text-cyan-400">
        📋
      </motion.div>{" "}
      <motion.div initial={{ opacity: 0, rotate: 180 }} animate={{ opacity: 0.1, rotate: 0 }} transition={{ duration: 2, delay: 1.5 }} className="absolute bottom-10 left-10 text-4xl text-purple-400">
        🎯
      </motion.div>
    </div>
  );
}
