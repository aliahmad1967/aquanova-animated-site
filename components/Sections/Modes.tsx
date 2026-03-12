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
      title: "Silent Mode",
      subtitle: "100% Electric",
      desc: "Glide through pristine sanctuaries with zero emissions and absolute silence. Ideal for morning coastal cruising.",
      image: "/images/l01.webp",
    },
    {
      title: "Performance Mode",
      subtitle: "Hybrid Power",
      desc: "Combined hybrid power delivering maximum thrust for open water crossings and outrunning weather fronts.",
      image: "/images/l05.webp",
    },
    {
      title: "Regen Mode",
      subtitle: "Energy Recovery",
      desc: "Deploy intelligent hydro-generation while under sail or at anchor, converting kinetic energy back into the battery bank.",
      image: "/images/l09.webp",
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
        
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none z-0" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        </div>

        <div className="absolute inset-0 z-0 lg:hidden">
          <motion.div style={{ opacity: img1Opacity }}>
            <motion.div style={{ scale: img1Scale }} className="w-full h-full relative">
              <Image src={modes[0].image} alt={modes[0].title} fill className="object-cover" priority />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#000810] via-[#000810]/60 to-transparent" />
          </motion.div>
          <motion.div style={{ opacity: img2Opacity }}>
            <motion.div style={{ scale: img2Scale }} className="w-full h-full relative">
              <Image src={modes[1].image} alt={modes[1].title} fill className="object-cover" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#000810] via-[#000810]/60 to-transparent" />
          </motion.div>
          <motion.div style={{ opacity: img3Opacity }}>
            <motion.div style={{ scale: img3Scale }} className="w-full h-full relative">
              <Image src={modes[2].image} alt={modes[2].title} fill className="object-cover" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#000810] via-[#000810]/60 to-transparent" />
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
                Intelligent Propulsion
              </span>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                Your Trip,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                  Your Mode
                </span>
              </h2>
            </motion.div>
            
            <p className="text-lg text-white/60 max-w-md mb-16 leading-relaxed">
              AquaNova's AI continuously monitors weather, sea states, and your itinerary to seamlessly switch between optimal propulsion modes.
            </p>

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
                    <div className="border-l border-white/10 pl-6 pb-2 group-hover:border-cyan-500/40 transition-colors duration-500">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-cyan-400/60 mb-1 block">
                        {mode.subtitle}
                      </span>
                      <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-cyan-50 transition-colors">
                        {mode.title}
                      </h3>
                      <p className="text-white/50 leading-relaxed text-sm max-w-sm">
                        {mode.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7 relative h-[50vh] lg:h-[80vh] w-full hidden lg:block">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/5">
              <motion.div style={{ opacity: img1Opacity }} className="absolute inset-0">
                <motion.div style={{ scale: img1Scale }} className="w-full h-full relative">
                  <Image src={modes[0].image} alt={modes[0].title} fill className="object-cover" priority />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#000810]/90 via-[#000810]/20 to-transparent" />
              </motion.div>
              <motion.div style={{ opacity: img2Opacity }} className="absolute inset-0">
                <motion.div style={{ scale: img2Scale }} className="w-full h-full relative">
                  <Image src={modes[1].image} alt={modes[1].title} fill className="object-cover" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#000810]/90 via-[#000810]/20 to-transparent" />
              </motion.div>
              <motion.div style={{ opacity: img3Opacity }} className="absolute inset-0">
                <motion.div style={{ scale: img3Scale }} className="w-full h-full relative">
                  <Image src={modes[2].image} alt={modes[2].title} fill className="object-cover" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#000810]/90 via-[#000810]/20 to-transparent" />
              </motion.div>
            </div>
            
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div className="flex gap-3">
                {[0, 1, 2].map((dotIndex) => (
                  <div
                    key={dotIndex}
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      dotIndex === 0 
                        ? scrollYProgress.get() < 0.35 ? "bg-cyan-400" : "bg-white/20"
                        : dotIndex === 1 
                          ? scrollYProgress.get() > 0.25 && scrollYProgress.get() < 0.65 ? "bg-cyan-400" : "bg-white/20"
                          : scrollYProgress.get() > 0.55 ? "bg-cyan-400" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
