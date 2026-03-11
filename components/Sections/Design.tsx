"use client";

import { motion } from "framer-motion";

export default function DesignSection() {
  return (
    <section id="design" className="min-h-screen py-32 px-6 lg:px-24 bg-[#00050A] text-white flex items-center relative">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 relative h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#001827] to-[#005f73]/50 border border-white/10 flex items-center justify-center group"
        >
          {/* Abstract placeholder for interior design image */}
          <div className="absolute inset-0 bg-[url('/images/ezgif-frame-001.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay group-hover:opacity-60 transition-opacity duration-700" />
          <div className="z-10 text-center p-8">
            <span className="text-[var(--accent)] text-xs font-wide-heading tracking-widest uppercase mb-4 block">CRAFTSMANSHIP</span>
            <h3 className="text-2xl font-light italic text-white/80">"Where the horizon meets home."</h3>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <h2 className="text-4xl md:text-6xl font-wide-heading uppercase tracking-widest leading-tight text-white mb-8">
            Uncompromising<br />
            Interior Space
          </h2>
          <div className="space-y-6 text-lg text-white/70">
            <p>
              The AquaNova blurs the boundary between exterior environment and interior luxury. Massive panoramic glazing wraps the saloon, offering uninterrupted 360-degree views of your anchorage.
            </p>
            <p>
              Finished in sustainable teak alternatives and aerospace-grade composites, the interior is as responsible as it is breathtaking. The open-plan living area flows seamlessly into the expansive aft deck, creating the ultimate platform for entertaining or deep relaxation.
            </p>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-white">4.8m</span>
              <span className="text-sm font-medium text-[var(--accent)] uppercase tracking-wider">Ceiling Height</span>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-white">120m²</span>
              <span className="text-sm font-medium text-[var(--accent)] uppercase tracking-wider">Living Space</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
