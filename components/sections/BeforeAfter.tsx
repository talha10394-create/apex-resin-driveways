"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowLeftRight, Sparkles } from "lucide-react";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <section className="relative z-10 bg-brand-dark-base py-24 md:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Title Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-24">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-superwidest text-brand-gold font-bold flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
              SURFACING TRANSFORMATION
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
              A Remarkable <span className="italic text-brand-gold-light">Architectural Contrast</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-brand-stone font-light text-sm md:text-base leading-relaxed">
              Experience the transition from damaged, non-permeable traditional concrete pavements to the flawless, light-reflecting brilliance of the hand-trowelled Apex resin bound system.
            </p>
          </div>
        </div>

        {/* Interactive Before/After Visual Element */}
        <div
          ref={containerRef}
          onMouseMove={(e) => {
            if (isDragging) handleMove(e.clientX);
          }}
          onTouchMove={handleTouchMove}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          className="relative w-full h-[320px] md:h-[520px] overflow-hidden rounded-sm border border-white/5 cursor-ew-resize select-none"
        >
          {/* Before Pavement Section */}
          <div className="absolute inset-0 w-full h-full bg-brand-dark-elevated">
            <div className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none filter grayscale" style={{ backgroundImage: "radial-gradient(#1A1A1D 20%, transparent 100%)" }} />
            
            <div className="absolute inset-0 bg-brand-dark-base/40 flex flex-col justify-between p-6 md:p-8">
              <span className="text-[10px] tracking-superwidest uppercase text-brand-stone border border-white/10 px-3 py-1.5 bg-brand-dark-base/60 self-start">
                Conventional Cracked Surface
              </span>
              <div className="max-w-xs">
                <span className="block text-white text-base md:text-lg font-serif">Aromatically Degraded</span>
                <span className="block text-brand-stone/80 text-[11px] font-light mt-1">Cracked, stained, pooling with stagnant rain water.</span>
              </div>
            </div>
          </div>

          {/* After Pavement Section */}
          <div
            className="absolute inset-y-0 left-0 h-full overflow-hidden transition-all duration-75 ease-out"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="absolute inset-y-0 left-0 w-[100vw] h-full">
             <div className="w-full h-full flex items-center justify-center bg-[#111111]">
    <div className="text-center">
        <p className="text-[#C9A66B] uppercase tracking-[0.3em]">
            Before
        </p>

        <h2 className="text-3xl text-white mt-4 font-serif">
            Traditional Surface
        </h2>
    </div>
</div>

              <div className="absolute inset-0 bg-brand-dark-surface -z-10 flex items-center justify-center p-6">
                <span className="text-[10px] tracking-superwidest uppercase text-brand-gold text-center">
                  Apex Premium Aggregate Finished Surface
                </span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-base/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 z-10">
                <span className="text-[10px] tracking-superwidest uppercase text-brand-gold border border-brand-gold/30 px-3 py-1.5 bg-brand-dark-base/80 backdrop-blur-md self-start flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
                  Apex Aliphatic Bound System
                </span>
                
                <div className="max-w-xs">
                  <span className="block text-white text-base md:text-lg font-serif">Flawless, Seamless Paving</span>
                  <span className="block text-brand-stone text-[11px] font-light mt-1">100% permeable, UV-resistant Cotswold flint.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Drag Control Handle bar */}
          <div
            className="absolute top-0 bottom-0 z-30 w-1 bg-brand-gold/60 cursor-ew-resize flex items-center justify-center"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-10 h-10 rounded-full bg-brand-dark-base border border-brand-gold shadow-2xl flex items-center justify-center text-brand-gold pointer-events-none select-none">
              <ArrowLeftRight className="w-4 h-4 stroke-[1.5]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}