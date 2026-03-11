"use client";

import { motion } from "framer-motion";

export default function SustainabilitySection() {
  return (
    <section id="sustainability" className="py-32 px-6 lg:px-24 bg-[#00050A] text-white flex flex-col items-center">
      <div className="max-w-5xl w-full text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-wide-heading uppercase tracking-widest text-white mb-8">
            LEAVE NO TRACE
          </h2>
          <p className="text-xl text-white/70 mb-16 leading-relaxed">
            Every AquaNova built removes 2 tons of ocean plastic through our partnership with leading recycling facilities, incorporating upcycled materials into non-structural elements of the hull. Over its lifetime, it will save hundreds of thousands of liters of diesel compared to a traditional yacht of this volume.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex-1">
              <span className="text-5xl font-black text-[var(--accent)] block mb-2">0</span>
              <span className="text-sm uppercase tracking-widest text-white/50">Liters per hour (Silent Mode)</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex-1">
              <span className="text-5xl font-black text-[#005f73] block mb-2">80%</span>
              <span className="text-sm uppercase tracking-widest text-white/50">Recyclable End-of-Life</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex-1">
              <span className="text-5xl font-black text-white block mb-2">∞</span>
              <span className="text-sm uppercase tracking-widest text-white/50">Solar Range</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
