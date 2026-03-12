"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SustainabilitySection() {
  const stats = [
    {
      value: "0",
      unit: "L",
      label: "per hour (Silent Mode)",
      sublabel: "Fuel Consumption",
      image: "/images/l06.webp"
    },
    {
      value: "80",
      unit: "%",
      label: "Recyclable",
      sublabel: "End-of-Life",
      image: "/images/l08.webp"
    },
    {
      value: "∞",
      unit: "",
      label: "Solar Range",
      sublabel: "Theoretical Maximum",
      image: "/images/l09.webp"
    }
  ];

  return (
    <section id="sustainability" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-16 bg-[#00050A] text-white flex flex-col items-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[800px] h-[300px] sm:h-[500px] md:h-[800px] bg-cyan-500/3 rounded-full blur-[80px] sm:blur-[100px] md:blur-[150px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent" />
      </div>
      
      <div className="max-w-5xl w-full text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] font-medium tracking-[0.5em] uppercase text-cyan-400/80 block mb-4 sm:mb-6">
            Environmental Responsibility
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            Leave No <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">Trace</span>
          </h2>
          
          <p className="text-sm sm:text-lg md:text-xl text-white/60 mb-12 sm:mb-16 leading-relaxed max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-0">
            Every AquaNova built removes 2 tons of ocean plastic through our partnership with leading recycling facilities, incorporating upcycled materials into non-structural elements of the hull. Over its lifetime, it will save hundreds of thousands of liters of diesel compared to a traditional yacht of this volume.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group relative bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500"
              >
                <div className="relative h-[120px] sm:h-[160px] overflow-hidden">
                  <Image 
                    src={stat.image}
                    alt={stat.label}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00050A] via-[#00050A]/60 to-transparent" />
                </div>
                
                <div className="relative z-10 p-4 sm:p-6 bg-gradient-to-b from-white/5 to-transparent">
                  <div className="flex items-baseline justify-center gap-1 mb-1 sm:mb-2">
                    <span className={`text-4xl sm:text-5xl lg:text-6xl font-black ${i === 0 ? 'text-cyan-400' : i === 1 ? 'text-blue-400' : 'text-white'}`}>
                      {stat.value}
                    </span>
                    {stat.unit && (
                      <span className={`text-lg sm:text-2xl lg:text-3xl font-bold ${i === 0 ? 'text-cyan-400/80' : i === 1 ? 'text-blue-400/80' : 'text-white/60'}`}>
                        {stat.unit}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/40 mb-1">{stat.sublabel}</p>
                  <p className="text-xs sm:text-sm text-white/60">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
