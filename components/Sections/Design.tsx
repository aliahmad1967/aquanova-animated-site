"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const menuImages = [
  { src: "/images/01-menu-small.webp", alt: "Menu 1", big: "/images/01-menu-big.webp" },
  { src: "/images/02-menu-small.webp", alt: "Menu 2", big: "/images/02-menu-big.webp" },
  { src: "/images/03-menu-small.webp", alt: "Menu 3", big: "/images/03-menu-big.webp" },
  { src: "/images/04-menu-small.webp", alt: "Menu 4", big: "/images/04-menu-big.webp" },
  { src: "/images/05-menu-small.webp", alt: "Menu 5", big: "/images/05-menu-big.webp" },
  { src: "/images/06-menu-small.webp", alt: "Menu 6", big: "/images/06-menu-big.webp" },
  { src: "/images/07-menu-small.webp", alt: "Menu 7", big: "/images/07-menu-big.webp" },
  { src: "/images/08-menu-small.webp", alt: "Menu 8", big: "/images/08-menu-big.webp" },
  { src: "/images/09-menu-small.webp", alt: "Menu 9", big: "/images/09-menu-big.webp" },
  { src: "/images/10-menu-small.webp", alt: "Menu 10", big: "/images/10-menu-big.webp" },
];

export default function DesignSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="design" ref={containerRef} className="min-h-screen py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-16 bg-[#00050A] text-white relative overflow-hidden">
      
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px]" />
      </motion.div>
      
      <div className="max-w-[1600px] mx-auto w-full relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-[10px] font-medium tracking-[0.5em] uppercase text-cyan-400/80 mb-4 sm:mb-6 block">
            New Superyacht Generation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white">
            The art of<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
              innovation
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden"
          >
            <Image 
              src={menuImages[activeIndex].big}
              alt={menuImages[activeIndex].alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00050A] via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-wider text-white/60">Selected Feature</span>
                  <span className="text-lg font-bold text-cyan-400">{activeIndex + 1} / {menuImages.length}</span>
                </div>
                <div className="flex gap-1">
                  {menuImages.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1 flex-1 rounded-full transition-colors ${i === activeIndex ? 'bg-cyan-400' : 'bg-white/20'}`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-5 gap-2">
              {menuImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                    i === activeIndex 
                      ? 'ring-2 ring-cyan-400 scale-105' 
                      : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  <Image 
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-4xl lg:text-5xl font-bold text-white">40m</span>
                  <span className="text-xs uppercase tracking-wider text-cyan-400/80">Length</span>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div className="flex flex-col">
                  <span className="text-4xl lg:text-5xl font-bold text-white">13.7m</span>
                  <span className="text-xs uppercase tracking-wider text-cyan-400/80">Beam</span>
                </div>
              </div>
              
              <p className="text-white/60 leading-relaxed">
                Designed with innovative features and cutting-edge technology, AquaNova represents the future of sustainable luxury yachting. Every detail has been carefully crafted to deliver an unparalleled experience on the water.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <span className="text-xs uppercase tracking-wider text-white/60 block mb-1">Hull</span>
                <span className="text-lg font-semibold text-white">Aluminum</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <span className="text-xs uppercase tracking-wider text-white/60 block mb-1">Speed</span>
                <span className="text-lg font-semibold text-white">22 knots</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <span className="text-xs uppercase tracking-wider text-white/60 block mb-1">Range</span>
                <span className="text-lg font-semibold text-white">3,850 nm</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
