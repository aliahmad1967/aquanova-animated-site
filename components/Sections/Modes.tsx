"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function ModesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const modes = [
    {
      title: "One-Day Trip",
      desc: "An experience in total harmony with nature. If the trip is one day, the catamaran is able to sail 100% of the time in electric mode. Silence and pristine beauty on 40 meters of comfort.",
      image: "/images/l01.webp",
      percentage: "100%",
    },
    {
      title: "Multi-day Trip",
      desc: "On a multi-day trip, Sea Cat is able to sail 90% of the time in electric mode. Navigation in hybrid mode remains active just long enough to recharge the battery.",
      image: "/images/l05.webp",
      percentage: "90%",
    },
    {
      title: "Transatlantic Trip",
      desc: "Extraordinary performance for long trips. In a non-stop crossing of 3600 nm, Sea Cat can navigate 80% of the time in electric mode.",
      image: "/images/l09.webp",
      percentage: "80%",
    }
  ];

  const img1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]);
  const img2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.65], [0, 1, 1, 0]);
  const img3Opacity = useTransform(scrollYProgress, [0.55, 0.65, 1], [0, 1, 1]);

  const img1Scale = useTransform(scrollYProgress, [0, 0.35], [1, 1.15]);
  const img2Scale = useTransform(scrollYProgress, [0.25, 0.65], [1, 1.15]);
  const img3Scale = useTransform(scrollYProgress, [0.55, 1], [1, 1.15]);

  return (
    <section id="modes" ref={containerRef} className="relative h-[300vh] bg-[#000810] text-white">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <motion.div style={{ opacity: img1Opacity }}>
            <motion.div style={{ scale: img1Scale }} className="w-full h-full relative">
              <Image src={modes[0].image} alt={modes[0].title} fill className="object-cover" priority />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#000810] via-[#000810]/30 to-transparent" />
          </motion.div>
          <motion.div style={{ opacity: img2Opacity }}>
            <motion.div style={{ scale: img2Scale }} className="w-full h-full relative">
              <Image src={modes[1].image} alt={modes[1].title} fill className="object-cover" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#000810] via-[#000810]/30 to-transparent" />
          </motion.div>
          <motion.div style={{ opacity: img3Opacity }}>
            <motion.div style={{ scale: img3Scale }} className="w-full h-full relative">
              <Image src={modes[2].image} alt={modes[2].title} fill className="object-cover" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#000810] via-[#000810]/30 to-transparent" />
          </motion.div>
        </div>
        
        <div className="max-w-[1600px] mx-auto w-full px-6 lg:px-16 relative z-10">
          
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] font-medium tracking-[0.5em] uppercase text-cyan-400/80 mb-4 block">
                Your Trip, Your Mode
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                The trip you<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                  choose
                </span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {modes.map((mode, i) => {
              const start = i * 0.33;
              const end = (i + 1) * 0.33;
              const opacity = useTransform(scrollYProgress, 
                [Math.max(0, start - 0.08), start + 0.03, end - 0.03, Math.min(1, end + 0.08)], 
                [0.4, 1, 1, 0.4]
              );
              
              return (
                <motion.div 
                  key={mode.title} 
                  style={{ opacity }}
                  className="group text-center"
                >
                  <div className="mb-4">
                    <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-white/90 leading-none">
                      {mode.percentage}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="w-6 h-px bg-cyan-400/50" />
                    <span className="text-xs tracking-[0.3em] uppercase text-cyan-400/80">Electric</span>
                    <span className="w-6 h-px bg-cyan-400/50" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                    {mode.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed text-sm max-w-sm mx-auto">
                    {mode.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-12"
          >
            <div className="flex items-center gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center">
                  <span className={`text-2xl font-bold ${i === 0 ? 'text-cyan-400' : 'text-white/20'}`}>
                    {i === 0 ? '●' : '○'}
                  </span>
                  <span className="text-xs font-bold text-white/30 mx-1">{i === 0 ? '01' : `0${i + 1}`}</span>
                </div>
              ))}
              <span className="text-2xl font-bold text-white/20 mx-2">|</span>
              <span className="text-6xl font-bold text-cyan-400">%</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
