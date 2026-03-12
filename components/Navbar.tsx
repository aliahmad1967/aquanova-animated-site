"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navItems = ["Experience", "Design", "Technology", "Sustainability"];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const handleClick = () => setIsOpen(false);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 py-3 md:py-4 transition-all duration-500",
          isScrolled || isOpen
            ? "bg-[#000810]/95 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-3">
          <Link href="/" className="relative group" onClick={handleClick}>
            <span className="text-lg sm:text-xl font-bold tracking-[0.25em] sm:tracking-[0.35em] uppercase text-white relative z-10">
              AquaNova
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
          </Link>
        </div>

        <nav className="hidden lg:flex gap-8 xl:gap-12 text-[10px] xl:text-[11px] font-medium tracking-[0.25em] uppercase text-white/60">
          {navItems.map((item) => (
            <Link 
              key={item} 
              href={`/#${item.toLowerCase()}`} 
              className="relative group py-2"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                {item}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-cyan-600 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-10">
          <Link 
            href="/contact" 
            className="hidden lg:block text-[10px] xl:text-[11px] font-medium tracking-[0.25em] uppercase text-white/60 hover:text-white transition-colors duration-300"
          >
            Contact
          </Link>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-5 sm:w-6 h-px bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-5 sm:w-6 h-px bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 sm:w-6 h-px bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 z-40 lg:hidden bg-[#000810]/98 backdrop-blur-xl pt-24 px-6"
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <nav className="flex flex-col gap-8 mt-12">
          {[...navItems, "Contact"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link 
                href={item === "Contact" ? "/contact" : `/#${item.toLowerCase()}`}
                onClick={handleClick}
                className="text-2xl sm:text-3xl font-bold tracking-[0.2em] uppercase text-white hover:text-cyan-400 transition-colors duration-300"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </>
  );
}
