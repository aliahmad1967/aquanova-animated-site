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
      percentage: "100",
    },
    {
      title: "Multi-day Trip",
      desc: "On a multi-day trip, Sea Cat is able to sail 90% of the time in electric mode. Navigation in hybrid mode remains active just long enough to recharge the battery.",
      image: "/images/l05.webp",
      percentage: "90",
    },
    {
      title: "Transatlantic Trip",
      desc: "Extraordinary performance for long trips. In a non-stop crossing of 3600 nm, Sea Cat can navigate 80% of the time in electric mode.",
      image: "/images/l09.webp",
      percentage: "80",
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
          
          <motion.div style={{ opacity: img1Opacity }}>
            <motion.div style={{ scale: img1Scale }} className="w-full h-full relative">
              <Image src={modes[0].image} alt={modes[0].title} fill className="object-cover" priority />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#000810] via-[#000810]/50 to-transparent" />
          </motion.div>
          <motion.div style={{ opacity: img2Opacity }}>
            <motion.div style={{ scale: img2Scale }} className="w-full h-full relative">
              <Image src={modes[1].image} alt={modes[1].title} fill className="object-cover" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#000810] via-[#000810]/50 to-transparent" />
          </motion.div>
          <motion.div style={{ opacity: img3Opacity }}>
            <motion.div style={{ scale: img3Scale }} className="w-full h-full relative">
              <Image src={modes[2].image} alt={modes[2].title} fill className="object-cover" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#000810] via-[#000810]/50 to-transparent" />
          </motion.div>
        </div>
        
        <div className="max-w-[1600px] mx-auto w-full px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          
          <div className="lg:col-span-5 flex flex-col justify-center h-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <span className="text-[10px] font-medium tracking-[0.5em] uppercase text-cyan-400/80 mb-4 block">
                Your Trip, Your Mode
              </span>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                The trip you<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                  choose
                </span>
              </h2>
            </motion.div>
            
            <div className="space-y-8">
              {modes.map((mode, i) => {
                const start = i * 0.33;
                const end = (i + 1) * 0.33;
                const opacity = useTransform(scrollYProgress, 
                  [Math.max(0, start - 0.08), start + 0.03, end - 0.03, Math.min(1, end + 0.08)], 
                  [0.3, 1, 1, 0.3]
                );
                const x = useTransform(scrollYProgress,
                  [Math.max(0, start - 0.08), start + 0.03, end - 0.03, Math.min(1, end + 0.08)], 
                  [-15, 0, 0, 15]
                );
                
                return (
                  <motion.div 
                    key={mode.title} 
                    style={{ opacity, x }} 
                    className="group"
                  >
                    <div className="flex items-start gap-6">
                      <span className="text-4xl font-bold text-cyan-400/80">{mode.percentage}%</span>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-50 transition-colors">
                          {mode.title}
                        </h3>
                        <p className="text-white/50 leading-relaxed text-sm max-w-sm">
                          {mode.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7 hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="flex gap-4">
                {modes.map((mode, i) => (
                  <div
                    key={mode.title}
                    className="w-20 h-40 border border-white/10 rounded-full flex items-end justify-center overflow-hidden"
                  >
                    <motion.div
                      className="w-full bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-full"
                      animate={{ height: ["0%", mode.percentage + "%"] }}
                      transition={{ duration: 1.5, delay: i * 0.2 }}
                    />
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-10 left-0 right-0 text-center">
                <span className="text-xs tracking-[0.3em] uppercase text-white/40">Electric Mode</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
