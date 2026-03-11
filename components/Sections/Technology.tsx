"use client";

import { motion } from "framer-motion";

export default function TechnologySection() {
  return (
    <section id="technology" className="min-h-screen py-32 px-6 lg:px-24 bg-[#000810] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#005f73]/10 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-[var(--accent)] text-xs font-wide-heading tracking-[0.3em] uppercase mb-6 block">CORE INNOVATION</span>
          <h2 className="text-4xl md:text-6xl font-wide-heading uppercase tracking-widest text-white leading-tight mb-8">
            NAUTICAI™<br />PLATFORM
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            The beating heart of AquaNova is our proprietary learning algorithm. It orchestrates the flow of energy between the sun, the wind, and the hydro-generators to deliver infinite range.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#00101b] border border-white/5 rounded-3xl p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/10 rounded-bl-full transition-transform group-hover:scale-150" />
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              Predictive Routing
            </h3>
            <p className="text-white/60 leading-relaxed">
              By analyzing thousands of meteorological data points in real-time, the system automatically suggests the most energy-efficient route, plotting laylines that maximize solar yield and following current patterns.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#00101b] border border-white/5 rounded-3xl p-10 relative overflow-hidden group"
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#005f73]/20 rounded-tr-full transition-transform group-hover:scale-150" />
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#005f73]" />
              Smart Power Grid
            </h3>
            <p className="text-white/60 leading-relaxed">
              Total vessel monitoring ensures critical systems are prioritized. Non-essential loads are elegantly curtailed when the absolute silent cruising experience is desired, all visible on the bridge interface.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
