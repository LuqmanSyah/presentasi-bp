"use client";

import { motion } from "framer-motion";

interface CppSlide6Props {
  slideNumber: number;
  totalSlides: number;
}

export default function CppSlide6({ slideNumber, totalSlides }: CppSlide6Props) {
  const comparisons = [
    {
      title: "Pendekatan",
      proceduralAspect: "Berbasis langkah",
      oopAspect: "Berbasis objek",
      proceduralDetail: "Daftar tugas linier yang dijalankan langkah demi langkah",
      oopDetail: "Membangun sistem dengan objek-objek yang saling berinteraksi",
      presenterNote: "Jelaskan bahwa prosedural seperti daftar tugas linier yang dijalankan langkah demi langkah, sedangkan OOP seperti membangun kota dengan objek-objek yang saling berinteraksi, seperti rumah dan jalan.",
      icon: "🎯",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Organisasi Kode",
      proceduralAspect: "Gunakan fungsi",
      oopAspect: "Gunakan kelas",
      proceduralDetail: "Kode diorganisir dalam fungsi-fungsi terpisah",
      oopDetail: "Kelas menggabungkan data dan fungsi untuk struktur yang lebih rapi",
      presenterNote: "Sampaikan bahwa di C, kode diorganisir dalam fungsi terpisah, sedangkan di C++, kelas menggabungkan data dan fungsi untuk struktur yang lebih rapi.",
      icon: "📁",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Skalabilitas",
      proceduralAspect: "Kurang cocok",
      oopAspect: "Ideal untuk sistem besar",
      proceduralDetail: "Cepat menjadi kacau untuk proyek besar",
      oopDetail: "Memungkinkan tim besar bekerja bersama dengan kode terorganisir",
      presenterNote: "Ceritakan bahwa pendekatan prosedural cepat menjadi kacau untuk proyek besar, tetapi OOP memungkinkan tim besar bekerja bersama dengan kode yang terorganisir.",
      icon: "📈",
      color: "from-purple-500 to-violet-500",
    },
    {
      title: "Reusabilitas",
      proceduralAspect: "Rendah",
      oopAspect: "Tinggi melalui pewarisan",
      proceduralDetail: "Sering memerlukan penulisan ulang kode",
      oopDetail: "Kode dapat digunakan ulang, seperti kelas 'kendaraan' untuk mobil dan motor",
      presenterNote: "Gunakan contoh bahwa OOP memungkinkan kode digunakan ulang (misal, kelas 'kendaraan' untuk mobil dan motor), sedangkan prosedural sering memerlukan penulisan ulang kode.",
      icon: "🔄",
      color: "from-orange-500 to-red-500",
    },
  ];
  return (
    <div className="h-full flex flex-col justify-center text-white p-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Perbandingan Prosedural vs. OOP</h1>
        <p className="text-xl text-gray-300">Memahami perbedaan fundamental kedua paradigma</p>
      </motion.div>{" "}
      <div className="max-w-7xl mx-auto">
        {/* Main Layout - 3 Columns: 2 for comparisons, 1 for conclusion */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Left Column - First 2 Comparisons */}
          <div className="space-y-6">
            {comparisons.slice(0, 2).map((comparison, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} className="group">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300">
                  {" "}
                  {/* Title with Icon */}
                  <div className="flex items-center mb-5">
                    <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className={`w-12 h-12 rounded-full bg-gradient-to-r ${comparison.color} flex items-center justify-center text-xl mr-4`}>
                      {comparison.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">{comparison.title}</h3>
                  </div>
                  {/* Comparison Table */}
                  <div className="space-y-4 mb-5">
                    {" "}
                    {/* Procedural Side */}
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }} className="bg-orange-500/10 rounded-lg p-4 border border-orange-400/30">
                      <div className="flex items-center mb-3">
                        <span className="text-orange-400 font-bold text-lg mr-2">📋</span>
                        <h4 className="text-orange-400 font-bold text-lg">Prosedural (C)</h4>
                      </div>
                      <p className="text-orange-200 font-bold text-base mb-2">{comparison.proceduralAspect}</p>
                      <p className="text-gray-200 font-medium text-sm">{comparison.proceduralDetail}</p>
                    </motion.div>
                    {/* OOP Side */}
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }} className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-400/30">
                      <div className="flex items-center mb-3">
                        <span className="text-cyan-400 font-bold text-lg mr-2">🏗️</span>
                        <h4 className="text-cyan-400 font-bold text-lg">OOP (C++)</h4>
                      </div>
                      <p className="text-cyan-200 font-bold text-base mb-2">{comparison.oopAspect}</p>
                      <p className="text-gray-200 font-medium text-sm">{comparison.oopDetail}</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Middle Column - Last 2 Comparisons */}
          <div className="space-y-6">
            {comparisons.slice(2, 4).map((comparison, index) => (
              <motion.div key={index + 2} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: (index + 2) * 0.2 }} className="group">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300">
                  {" "}
                  {/* Title with Icon */}
                  <div className="flex items-center mb-5">
                    <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className={`w-12 h-12 rounded-full bg-gradient-to-r ${comparison.color} flex items-center justify-center text-xl mr-4`}>
                      {comparison.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">{comparison.title}</h3>
                  </div>
                  {/* Comparison Table */}
                  <div className="space-y-4 mb-5">
                    {" "}
                    {/* Procedural Side */}
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: (index + 2) * 0.2 + 0.3 }} className="bg-orange-500/10 rounded-lg p-4 border border-orange-400/30">
                      <div className="flex items-center mb-3">
                        <span className="text-orange-400 font-bold text-lg mr-2">📋</span>
                        <h4 className="text-orange-400 font-bold text-lg">Prosedural (C)</h4>
                      </div>
                      <p className="text-orange-200 font-bold text-base mb-2">{comparison.proceduralAspect}</p>
                      <p className="text-gray-200 font-medium text-sm">{comparison.proceduralDetail}</p>
                    </motion.div>
                    {/* OOP Side */}
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: (index + 2) * 0.2 + 0.4 }} className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-400/30">
                      <div className="flex items-center mb-3">
                        <span className="text-cyan-400 font-bold text-lg mr-2">🏗️</span>
                        <h4 className="text-cyan-400 font-bold text-lg">OOP (C++)</h4>
                      </div>
                      <p className="text-cyan-200 font-bold text-base mb-2">{comparison.oopAspect}</p>
                      <p className="text-gray-200 font-medium text-sm">{comparison.oopDetail}</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Conclusion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/60 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 h-fit"
          >
            {" "}
            <h3 className="text-3xl font-bold text-purple-400 mb-6 text-center">🎯 Kesimpulan Perbandingan</h3>
            <div className="space-y-6">
              <div className="bg-orange-500/10 rounded-lg p-5 border border-orange-400/30">
                <h4 className="text-orange-400 font-bold mb-3 flex items-center text-lg">
                  <span className="mr-2">📋</span>
                  Kapan Gunakan Prosedural?
                </h4>
                <ul className="text-gray-300 text-base space-y-2">
                  <li>• Tugas sederhana dan linear</li>
                  <li>• Script kecil atau otomasi</li>
                  <li>• Pemrosesan data sequential</li>
                  <li>• Prototype cepat</li>
                </ul>
              </div>

              <div className="bg-cyan-500/10 rounded-lg p-5 border border-cyan-400/30">
                <h4 className="text-cyan-400 font-bold mb-3 flex items-center text-lg">
                  <span className="mr-2">🏗️</span>
                  Kapan Gunakan OOP?
                </h4>
                <ul className="text-gray-300 text-base space-y-2">
                  <li>• Aplikasi kompleks dan besar</li>
                  <li>• Tim pengembangan besar</li>
                  <li>• Sistem yang perlu maintenance</li>
                  <li>• Code reusability tinggi</li>
                </ul>
              </div>

              <div className="bg-purple-500/10 rounded-lg p-5 border border-purple-400/30">
                <h4 className="text-purple-400 font-bold mb-3 flex items-center text-lg">
                  <span className="mr-2">⚡</span>
                  Rekomendasi
                </h4>
                <p className="text-gray-300 text-base leading-relaxed">C++ memberikan fleksibilitas untuk menggunakan kedua paradigma sesuai kebutuhan project Anda.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>{" "}
      {/* Decorative Elements */}
      <motion.div initial={{ opacity: 0, rotate: -180 }} animate={{ opacity: 0.1, rotate: 0 }} transition={{ duration: 2, delay: 1.5 }} className="absolute top-10 right-10 text-4xl text-cyan-400">
        📋
      </motion.div>
      <motion.div initial={{ opacity: 0, rotate: 180 }} animate={{ opacity: 0.1, rotate: 0 }} transition={{ duration: 2, delay: 2 }} className="absolute bottom-20 left-10 text-3xl text-purple-400">
        🏗️
      </motion.div>
    </div>
  );
}
