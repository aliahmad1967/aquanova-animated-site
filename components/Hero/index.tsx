"use client";

import { useRef } from "react";
import HeroCanvas from "./HeroCanvas";
import HeroTextOverlays from "./HeroTextOverlays";
import { useScroll } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll exactly over the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative h-[500vh] w-full bg-[#000810]">
      {/* Sticky container that tracks the viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Pass down scroll progress if using props, or children can use contexts/hooks. 
            Since child files were already written to use global window scroll, 
            passing it via Context or just letting them use their own global `useScroll` works.
            To be perfectly self-contained, let's wrap logic.
        */}
        <HeroCanvas scrollYProgress={scrollYProgress} />
        <HeroTextOverlays scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}
