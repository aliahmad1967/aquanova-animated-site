"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300",
        isScrolled
          ? "bg-[#000810]/80 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-6"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center gap-2">
        <Link href="/" className="text-xl font-wide-heading tracking-widest text-white">
          AQUANOVA
        </Link>
      </div>

      <nav className="hidden md:flex gap-10 text-xs font-semibold tracking-[0.2em] uppercase text-white/70">
        {["Experience", "Design", "Technology", "Sustainability"].map((item) => (
          <Link key={item} href={`/#${item.toLowerCase()}`} className="hover:text-white transition-colors">
            {item}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-8">
        <Link href="/contact" className="text-xs font-semibold tracking-[0.2em] uppercase text-white hover:text-white/70 transition-colors">
          Contact
        </Link>
      </div>
    </motion.header>
  );
}
