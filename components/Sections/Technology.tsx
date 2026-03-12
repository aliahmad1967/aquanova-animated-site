"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TechnologySection() {
  const features = [
    {
      title: "Predictive Routing",
      desc: "By analyzing thousands of meteorological data points in real-time, the system automatically suggests the most energy-efficient route, plotting laylines that maximize solar yield and following current patterns.",
      accent: "cyan",
      image: "/images/l05.webp"
    },
    {
      title: "Smart Power Grid",
      desc: "Total vessel monitoring ensures critical systems are prioritized. Non-essential loads are elegantly curtailed when the absolute silent cruising experience is desired, all visible on the bridge interface.",
      accent: "blue",
      image: "/images/l06.webp"
    },
    {
      title: "AI Climate Control",
      desc: "Intelligent thermal management learns your preferences and optimizes cabin climate while minimizing energy consumption through predictive conditioning.",
      accent: "cyan",
      image: "/images/l07.webp"
    },
    {
      title: "Hydro-Generation",
      desc: "Underwater turbines deploy automatically at low speeds, converting hydrodynamic flow into electrical energy while you sail silently through the waves.",
      accent: "blue",
      image: "/images/l08.webp"
    }
  ];

  return (
    <section id="technology" className="min-h-screen py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-16 bg-[#000810] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] md:w-[800px] h-[300px] sm:h-[500px] md:h-[800px] bg-cyan-500/5 rounded-full blur-[80px] sm:blur-[100px] md:blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[200px] sm:w-[400px] md:w-[600px] h-[200px] sm:h-[400px] md:h-[600px] bg-blue-900/10 rounded-full blur-[60px] sm:blur-[80px] md:blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-[10px] font-medium tracking-[0.5em] uppercase text-cyan-400/80 mb-4 sm:mb-6 block">CORE INNOVATION</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
            NAUTICAI<span className="text-cyan-400">™</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
              PLATFORM
            </span>
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-white/60 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            The beating heart of AquaNova is our proprietary learning algorithm. It orchestrates the flow of energy between the sun, the wind, and the hydro-generators to deliver infinite range.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 px-2 sm:px-0">
          {features.map((feature, i) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-[#00101b]/80 backdrop-blur-sm border border-white/5 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-cyan-500/20 transition-all duration-500"
            >
              <div className="relative h-[140px] sm:h-[180px] md:h-[200px] overflow-hidden">
                <Image 
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00101b] via-[#00101b]/50 to-transparent" />
              </div>
              
              <div className="p-4 sm:p-6 lg:p-10">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <span className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold text-xs sm:text-sm">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-cyan-500/10 rounded-full border border-cyan-500/20">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-cyan-400/80 tracking-wide">System Online & Learning</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
