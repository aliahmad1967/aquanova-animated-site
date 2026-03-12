"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function PowerSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="min-h-screen py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-16 bg-[#00050A] text-white overflow-hidden relative">
      <motion.div style={{ y, opacity }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <span className="text-[80px] sm:text-[120px] md:text-[200px] lg:text-[300px] font-bold text-cyan-400/5 leading-none">250</span>
          <span className="text-[20px] sm:text-[30px] md:text-[40px] lg:text-[60px] font-bold text-cyan-400/10 -mt-8 sm:-mt-12 md:-mt-20 block">kWh</span>
        </div>
      </motion.div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[10px] font-medium tracking-[0.5em] uppercase text-cyan-400/80 mb-4 sm:mb-6 block">ENERGY</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
            Turn On<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
              The Lights
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative aspect-square max-w-md mx-auto w-full"
          >
            <Image 
              src="/images/l06.webp"
              alt="Solar Power"
              fill
              className="object-cover rounded-3xl"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#00050A] via-transparent to-transparent" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold shrink-0">135</div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">m² Solar Panels</h3>
                <p className="text-sm text-white/50">Advanced photovoltaic integration across all exterior surfaces</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold shrink-0">250</div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">kWh Daily Output</h3>
                <p className="text-sm text-white/50">Enough energy to power an entire marina or villa</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold shrink-0">5h</div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Fast Charging</h3>
                <p className="text-sm text-white/50">Full battery charge from shore power in just 5 hours</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
