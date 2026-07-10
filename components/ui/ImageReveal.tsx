"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
}

export default function ImageReveal({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-[16/10]",
  priority = false,
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const mask = maskRef.current;

    if (!container || !image || !mask) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Animate the gold curtain mask to slide off, revealing the image
      tl.to(mask, {
        scaleX: 0,
        transformOrigin: "right center",
        duration: 1.4,
        ease: "power4.inOut",
      });

      // Subtle scale transition to reveal the high-end image
      tl.fromTo(
        image,
        { scale: 1.15, filter: "brightness(0.7) blur(4px)" },
        { scale: 1, filter: "brightness(1) blur(0px)", duration: 1.6, ease: "power3.out" },
        "-=1.1"
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden w-full", aspectRatio, className)}
    >
      {/* Absolute Overlay Curtain (Luxury Gold transitioning to Dark) */}
      <div
        ref={maskRef}
        className="absolute inset-0 z-10 bg-gradient-to-l from-brand-gold-dark via-brand-gold to-brand-dark-elevated w-full h-full"
      />
      
      {/* High-Performance Next.js Image Element */}
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
        className="object-cover w-full h-full"
        onError={(e) => {
          // Elegant SVG visual fallback if image path is not dynamically populated yet
          e.currentTarget.style.display = "none";
        }}
      />

      {/* Graceful Inline SVG Texture Fallback inside visual container */}
      <div className="absolute inset-0 -z-10 bg-brand-dark-surface flex items-center justify-center p-6 border border-white/5">
        <svg
          className="w-full h-full opacity-[0.03] absolute inset-0"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#C5A880" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <span className="text-[10px] tracking-superwidest uppercase text-brand-gold/60 text-center select-none font-light">
          Apex Mineral Texture System
        </span>
      </div>
    </div>
  );
}