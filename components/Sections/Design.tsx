"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const videos = [
  "/images/5eda4160-6299-48b3-83bc-766379084a35.webm",
  "/images/62d37308-014e-4c10-b929-c07eeb7a81ff.webm",
  "/images/db1a7065-ef79-4b63-933d-d5080722442b.webm",
];

export default function DesignSection() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  return (
    <section id="design" className="min-h-screen py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-16 bg-[#00050A] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-cyan-500/5 rounded-full blur-[80px] sm:blur-[100px] md:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-cyan-600/5 rounded-full blur-[60px] sm:blur-[80px] md:blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto w-full relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[10px] font-medium tracking-[0.5em] uppercase text-cyan-400/80 block mb-4 sm:mb-6">
            Interior Design
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Where the horizon<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
              meets home
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {videos.map((video, i) => (
            <motion.div
              key={video}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative aspect-video rounded-2xl overflow-hidden group"
            >
              <video
                ref={(el) => { videoRefs.current[i] = el; }}
                src={video}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                muted
                loop
                playsInline
                onMouseEnter={() => videoRefs.current[i]?.play()}
                onMouseLeave={() => {
                  if (videoRefs.current[i]) {
                    videoRefs.current[i]?.pause();
                    videoRefs.current[i].currentTime = 0;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00050A]/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-medium tracking-wider uppercase text-white/80">
                  {i === 0 ? "Saloon" : i === 1 ? "Deck" : "Cabin"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-20"
        >
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">4.8m</span>
            <span className="text-[10px] sm:text-xs font-medium text-cyan-400/80 uppercase tracking-wider mt-2">Ceiling Height</span>
          </div>
          
          <div className="w-px h-12 sm:h-16 bg-gradient-to-b from-white/20 to-transparent md:rotate-0" />
          
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">120m²</span>
            <span className="text-[10px] sm:text-xs font-medium text-cyan-400/80 uppercase tracking-wider mt-2">Living Space</span>
          </div>
          
          <div className="w-px h-12 sm:h-16 bg-gradient-to-b from-white/20 to-transparent md:rotate-0" />
          
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">360°</span>
            <span className="text-[10px] sm:text-xs font-medium text-cyan-400/80 uppercase tracking-wider mt-2">Panoramic Views</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
