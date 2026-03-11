"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, MotionValue } from "framer-motion";

const FRAME_COUNT = 121;
const IMAGE_URL_TEMPLATE = "/images/ezgif-frame-{index}.jpg";

// Preload helper
const preloadImages = () => {
  for (let i = 1; i <= FRAME_COUNT; i++) {
    const img = new Image();
    const indexStr = i.toString().padStart(3, "0");
    img.src = IMAGE_URL_TEMPLATE.replace("{index}", indexStr);
  }
};

interface HeroCanvasProps {
  scrollYProgress?: MotionValue<number>;
}

export default function HeroCanvas({ scrollYProgress: propScrollYProgress }: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress: globalScroll } = useScroll(); 
  const scrollYProgress = propScrollYProgress || globalScroll;
  
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [currentFrame, setCurrentFrame] = useState(0);

  // Load images
  useEffect(() => {
    preloadImages();
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const indexStr = i.toString().padStart(3, "0");
      img.src = IMAGE_URL_TEMPLATE.replace("{index}", indexStr);
      img.onload = () => {
        loadedCount++;
        loadedImages[i] = img;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          drawFrame(1, loadedImages[1]);
        }
      };
      loadedImages[i] = img;
    }
  }, []);

  // Sync scroll to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    const frame = Math.min(FRAME_COUNT, Math.max(1, Math.floor(latest)));
    if (frame !== currentFrame) {
      setCurrentFrame(frame);
      if (images[frame] && images[frame].complete) {
        drawFrame(frame, images[frame]);
      }
    }
  });

  // Draw logic
  const drawFrame = (frame: number, img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle high DPI
    const dpr = window.devicePixelRatio || 1;
    // We want the canvas to match the screen size roughly
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Cover algorithm similar to background-size: cover
    const scale = Math.max(rect.width / img.width, rect.height / img.height);
    const x = rect.width / 2 - (img.width / 2) * scale;
    const y = rect.height / 2 - (img.height / 2) * scale;

    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  // Redraw on resize
  useEffect(() => {
    const handleResize = () => {
      if (images[currentFrame] && images[currentFrame].complete) {
        drawFrame(currentFrame, images[currentFrame]);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentFrame, images]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
      role="img"
      aria-label="AquaNova Yacht moving smoothly across the ocean"
    />
  );
}
