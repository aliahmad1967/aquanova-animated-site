"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TechnologySection() {
  const powerModes = [
    {
      number: "01",
      title: "Full-electric mode",
      desc: "The diesel generators are turned off and the catamaran is sailing only electrically with the help of batteries and photovoltaic support. Charging from the column takes only 5 hours and extends all day thanks to solar energy.",
    },
    {
      number: "02", 
      title: "Diesel-electric mode",
      desc: "The diesel generators are activated to recharge the batteries that power the electric motors. The AI system understands when the battery is running out and turns on the generators at the right time to give charging a boost.",
    },
    {
      number: "03",
      title: "Hibernation mode",
      desc: "The diesel generators are off and the boat is powered only through the solar panels. It's time to use AquaNova's energy in other ways. Why not supply electricity to an entire villa?",
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
            The Heart<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
              of Change
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
          {powerModes.map((mode, i) => (
            <motion.div 
              key={mode.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative bg-[#00101b]/50 backdrop-blur-sm border border-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-cyan-500/30 transition-all duration-500"
            >
              <div className="absolute top-4 sm:top-6 right-6 sm:right-8 text-6xl sm:text-7xl font-bold text-cyan-400/10 group-hover:text-cyan-400/20 transition-colors">
                {mode.number}
              </div>
              
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">
                {mode.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
                {mode.desc}
              </p>

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
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-cyan-500/10 rounded-full border border-cyan-500/20">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-cyan-400/80 tracking-wide">System Online</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
