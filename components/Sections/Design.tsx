"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DesignSection() {
  const galleryImages = [
    { src: "/images/l01.webp", alt: "Interior Salon" },
    { src: "/images/l02.webp", alt: "Deck View" },
    { src: "/images/l03.webp", alt: "Cockpit Area" },
    { src: "/images/l04.webp", alt: "Helm Station" },
  ];

  return (
    <section id="design" className="min-h-screen py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-16 bg-[#00050A] text-white flex items-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-cyan-500/5 rounded-full blur-[80px] sm:blur-[100px] md:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-cyan-600/5 rounded-full blur-[60px] sm:blur-[80px] md:blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 order-2 lg:order-1 relative"
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden"
            >
              <Image 
                src={galleryImages[0].src} 
                alt={galleryImages[0].alt} 
                fill 
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00050A]/60 to-transparent" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden"
            >
              <Image 
                src={galleryImages[1].src} 
                alt={galleryImages[1].alt} 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00050A]/60 to-transparent" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative h-[150px] sm:h-[200px] md:h-[250px] lg:h-[280px] rounded-xl sm:rounded-2xl overflow-hidden"
            >
              <Image 
                src={galleryImages[2].src} 
                alt={galleryImages[2].alt} 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00050A]/60 to-transparent" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative h-[150px] sm:h-[200px] md:h-[250px] lg:h-[280px] rounded-xl sm:rounded-2xl overflow-hidden"
            >
              <Image 
                src={galleryImages[3].src} 
                alt={galleryImages[3].alt} 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00050A]/60 to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <span className="text-xs sm:text-sm text-white font-medium tracking-wider">+12 Photos</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 order-1 lg:order-2"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] sm:text-[10px] font-medium tracking-[0.5em] uppercase text-cyan-400/80 block mb-4 sm:mb-6"
          >
            Interior Design
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white mb-6 sm:mb-8">
            Uncompromising<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
              Interior Space
            </span>
          </h2>
          
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-white/60 leading-relaxed mb-8 sm:mb-12">
            <p>
              The AquaNova blurs the boundary between exterior environment and interior luxury. Massive panoramic glazing wraps the saloon, offering uninterrupted 360-degree views of your anchorage.
            </p>
            <p>
              Finished in sustainable teak alternatives and aerospace-grade composites, the interior is as responsible as it is breathtaking.
            </p>
          </div>
          
          <div className="flex items-center gap-6 sm:gap-8 lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col"
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">4.8m</span>
              <span className="text-[10px] sm:text-xs font-medium text-cyan-400/80 uppercase tracking-wider mt-1">Ceiling Height</span>
            </motion.div>
            
            <div className="w-px h-10 sm:h-14 bg-gradient-to-b from-white/20 to-transparent" />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col"
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">120m²</span>
              <span className="text-[10px] sm:text-xs font-medium text-cyan-400/80 uppercase tracking-wider mt-1">Living Space</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
