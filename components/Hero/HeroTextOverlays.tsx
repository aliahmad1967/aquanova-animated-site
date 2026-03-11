"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface HeroTextOverlaysProps {
  scrollYProgress?: MotionValue<number>;
}

export default function HeroTextOverlays({ scrollYProgress: propScrollYProgress }: HeroTextOverlaysProps) {
  const { scrollYProgress: globalScroll } = useScroll();
  const scrollYProgress = propScrollYProgress || globalScroll;

  // Massive centered headline
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const headlineScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.1]);

  // Scroll indicator at bottom
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none p-6 md:p-12 lg:p-24 h-screen max-w-screen-2xl mx-auto flex flex-col items-center justify-center">
      
      <motion.div 
        style={{ opacity: headlineOpacity, scale: headlineScale }}
        className="text-center flex flex-col items-center"
      >
        <h1 className="text-6xl sm:text-8xl md:text-[12rem] font-wide-heading text-white leading-none [text-shadow:0_10px_40px_rgba(0,0,0,0.8)]">
          AQUANOVA
        </h1>
        <p className="text-sm md:text-xl mt-6 text-white/80 font-light tracking-[0.3em] uppercase">
          Zero-Emission Exploring
        </p>
      </motion.div>

      <motion.div
        style={{ opacity: scrollOpacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
      >
        <span className="text-xs font-wide-heading text-white/50 tracking-[0.3em]">SCROLL</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent" 
        />
      </motion.div>

    </div>
  );
}
