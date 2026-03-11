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
      desc: "100% electric. Glide through pristine sanctuaries with zero emissions and absolute silence. Ideal for morning coastal cruising.",
      image: "/images/ezgif-frame-015.jpg", // Calm water frame
    },
    {
      title: "Performance Mode",
      desc: "Combined hybrid power delivering maximum thrust for open water crossings and outrunning weather fronts.",
      image: "/images/ezgif-frame-060.jpg", // Spray / action frame
    },
    {
      title: "Regen Mode",
      desc: "Deploy intelligent hydro-generation while under sail or at anchor, converting kinetic energy back into the battery bank.",
      image: "/images/ezgif-frame-110.jpg", // Steady sailing frame
    }
  ];

  // Opacity controls for the images
  const img1Opacity = useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 1, 0]);
  const img2Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
  const img3Opacity = useTransform(scrollYProgress, [0.6, 0.7, 1], [0, 1, 1]);

  // Scale controls for images (slow zoom effect)
  const img1Scale = useTransform(scrollYProgress, [0, 0.4], [1, 1.1]);
  const img2Scale = useTransform(scrollYProgress, [0.3, 0.7], [1, 1.1]);
  const img3Scale = useTransform(scrollYProgress, [0.6, 1], [1, 1.1]);

  return (
    <section id="modes" ref={containerRef} className="relative h-[300vh] bg-[#000810] text-white">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent)]/10 rounded-full blur-[120px] pointer-events-none z-0" />

        {/* Mobile Background Images (Hidden on desktop) */}
        <div className="absolute inset-0 z-0 lg:hidden">
          <motion.div style={{ opacity: img1Opacity }} className="absolute inset-0">
             <motion.div style={{ scale: img1Scale }} className="w-full h-full relative">
               <Image src={modes[0].image} alt={modes[0].title} fill className="object-cover" />
             </motion.div>
             <div className="absolute inset-0 bg-[#000810]/85" />
          </motion.div>
          <motion.div style={{ opacity: img2Opacity }} className="absolute inset-0">
             <motion.div style={{ scale: img2Scale }} className="w-full h-full relative">
               <Image src={modes[1].image} alt={modes[1].title} fill className="object-cover" />
             </motion.div>
             <div className="absolute inset-0 bg-[#000810]/85" />
          </motion.div>
          <motion.div style={{ opacity: img3Opacity }} className="absolute inset-0">
             <motion.div style={{ scale: img3Scale }} className="w-full h-full relative">
               <Image src={modes[2].image} alt={modes[2].title} fill className="object-cover" />
             </motion.div>
             <div className="absolute inset-0 bg-[#000810]/85" />
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          
          {/* Left Text Column: Sticky Header */}
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Intelligent{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "var(--hero-gradient)" }}>
                Voyage Modes
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-md mb-12">
              AquaNova's AI continuously monitors weather, sea states, and your itinerary to seamlessly switch between optimal propulsion modes.
            </p>

            <div className="space-y-10 lg:space-y-12">
              {modes.map((mode, i) => {
                // Determine when this item is active
                const start = i * 0.33;
                const end = (i + 1) * 0.33;
                const opacity = useTransform(scrollYProgress, 
                  [Math.max(0, start - 0.1), start + 0.05, end - 0.05, Math.min(1, end + 0.1)], 
                  [0.2, 1, 1, 0.2]
                );
                const x = useTransform(scrollYProgress,
                  [Math.max(0, start - 0.1), start + 0.05, end - 0.05, Math.min(1, end + 0.1)], 
                  [-20, 0, 0, 20]
                );
                
                return (
                  <motion.div style={{ opacity, x }} key={mode.title} className="max-w-md border-l-2 border-white/10 pl-6 relative">
                    <motion.div 
                      style={{ opacity }} 
                      className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-[var(--accent)] origin-top"
                    />
                    <h3 className="text-2xl font-semibold mb-3 text-white">
                      {mode.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-lg">
                      {mode.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Image Column: Crossfading Images (Desktop) */}
          <div className="relative h-[60vh] lg:h-[80vh] w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50 hidden lg:block border border-white/10">
            <motion.div style={{ opacity: img1Opacity }} className="absolute inset-0">
               <motion.div style={{ scale: img1Scale }} className="w-full h-full relative">
                 <Image src={modes[0].image} alt={modes[0].title} fill className="object-cover" />
               </motion.div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#000810]/80 via-transparent to-transparent opacity-80" />
            </motion.div>
            <motion.div style={{ opacity: img2Opacity }} className="absolute inset-0">
               <motion.div style={{ scale: img2Scale }} className="w-full h-full relative">
                 <Image src={modes[1].image} alt={modes[1].title} fill className="object-cover" />
               </motion.div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#000810]/80 via-transparent to-transparent opacity-80" />
            </motion.div>
            <motion.div style={{ opacity: img3Opacity }} className="absolute inset-0">
               <motion.div style={{ scale: img3Scale }} className="w-full h-full relative">
                 <Image src={modes[2].image} alt={modes[2].title} fill className="object-cover" />
               </motion.div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#000810]/80 via-transparent to-transparent opacity-80" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
