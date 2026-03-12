"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface HeroTextOverlaysProps {
  scrollYProgress?: MotionValue<number>;
}

export default function HeroTextOverlays({ scrollYProgress: propScrollYProgress }: HeroTextOverlaysProps) {
  const { scrollYProgress: globalScroll } = useScroll();
  const scrollYProgress = propScrollYProgress || globalScroll;

  const headlineOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const headlineScale = useTransform(scrollYProgress, [0, 0.12], [1, 1.05]);
  const headlineY = useTransform(scrollYProgress, [0, 0.12], [0, -50]);

  const subtitleOpacity = useTransform(scrollYProgress, [0.02, 0.08, 0.15], [0, 1, 0]);
  
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none px-4 sm:px-6 md:p-12 lg:p-24 h-screen max-w-screen-2xl mx-auto flex flex-col items-center justify-center">
      
      <motion.div 
        style={{ opacity: headlineOpacity, scale: headlineScale, y: headlineY }}
        className="text-center flex flex-col items-center"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-3 sm:mb-4"
        >
          <span className="text-[9px] sm:text-[10px] md:text-xs font-medium tracking-[0.4em] sm:tracking-[0.5em] uppercase text-cyan-400/80">
            The Future of Yachting
          </span>
        </motion.div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] 2xl:text-[12rem] font-bold text-white leading-[0.85] tracking-tight">
          <motion.span 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            AQUA
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="block bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent"
          >
            NOVA
          </motion.span>
        </h1>
        
        <motion.p 
          style={{ opacity: subtitleOpacity }}
          className="text-xs sm:text-base md:text-xl mt-6 sm:mt-8 text-white/70 font-light tracking-[0.3em] sm:tracking-[0.4em] uppercase"
        >
          Zero-Emission Exploring
        </motion.p>
      </motion.div>

      <motion.div
        style={{ opacity: scrollOpacity }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 sm:gap-6"
      >
        <span className="text-[9px] sm:text-[10px] font-medium text-white/30 tracking-[0.4em] uppercase">Discover</span>
        <motion.div 
          animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 sm:h-14 bg-gradient-to-b from-cyan-400/60 to-transparent" 
        />
      </motion.div>

    </div>
  );
}
