"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HibernationSection() {
  return (
    <section className="min-h-screen py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-16 bg-[#000810] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] md:w-[800px] h-[300px] sm:h-[500px] md:h-[800px] bg-cyan-500/5 rounded-full blur-[80px] sm:blur-[100px] md:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[200px] sm:w-[400px] md:w-[600px] h-[200px] sm:h-[400px] md:h-[600px] bg-blue-900/10 rounded-full blur-[60px] sm:blur-[80px] md:blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-medium tracking-[0.5em] uppercase text-cyan-400/80 mb-4 sm:mb-6 block">POWER BANK</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 sm:mb-8">
              Hiber<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">nation</span>
            </h2>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-8">
              When AquaNova is stationary and moored, it becomes the largest power bank in the world. Consumption is reduced to a minimum and the energy generated can be sold to the quay or to a private property. There is enough energy to supply lighting to an entire villa.
            </p>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-sm text-white/60">Grid Connected</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-cyan-400/30" />
                <span className="text-sm text-white/60">Energy Export</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden"
          >
            <Image 
              src="/images/l09.webp"
              alt="Hibernation Mode"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000810] via-[#000810]/30 to-transparent" />
            
            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-wider text-white/60">Energy Export</span>
                  <span className="text-lg font-bold text-cyan-400">Active</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"
                  />
                </div>
                <p className="text-xs text-white/40 mt-2">Supplying 15kW to marina grid</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
