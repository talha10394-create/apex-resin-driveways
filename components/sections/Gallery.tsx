"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eye, Layers } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const aggregateBlends = [
  {
    name: "Cotswold Amber",
    type: "Premium Sourced Flint",
    description: "Deep gold tones reflecting traditional Cotswold stone masonry. Naturally rounded structures for visual depth [1].",
    texture: "/public/images/hero.webp",
  },
  {
    name: "Platinum Quartz",
    type: "Crushed Granite Matrix",
    description: "Cool charcoal and pure translucent crystalline quartz flakes. Ideal for high-contrast contemporary properties.",
    texture: "/public/images/hero.webp",
  },
  {
    name: "Staffordshire Peak",
    type: "Multi-Tonal Aggregate",
    description: "A harmonious balance of warm terracotta and copper flints, providing exceptional thermal durability.",
    texture: "/public/images/hero.webp",
  },
  {
    name: "Sterling Silver",
    type: "Natural Silver Spar",
    description: "Highly reflective, sparkling silver-grey. Precision-washed mineral sizes for dense architectural compaction [1].",
    texture: "/public/images/hero.webp",
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 bg-brand-dark-surface py-24 md:py-36 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-base/50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Subheader */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-superwidest text-brand-gold font-bold flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
            AGGREGATE SELECTOR
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
            Curated <span className="italic text-brand-gold-light">Mineral Blends</span>
          </h2>
          <p className="text-brand-stone font-light mt-4 leading-relaxed">
            Every blend is multi-washed, dried, and perfectly graded [1]. This guarantees structural density, high-speed drainage, and a beautiful premium stone face.
          </p>
        </div>

        {/* Luxury Masonry Gallery */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {aggregateBlends.map((blend, idx) => (
            <div
              key={idx}
              className="group relative bg-brand-dark-base border border-white/5 rounded-sm overflow-hidden transition-all duration-500 hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/5 flex flex-col"
            >
              {/* Texture Close-Up Block */}
              <div className="relative h-56 overflow-hidden">
               <div className="w-full h-full flex items-center justify-center bg-[#111111]">
    <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#C9A66B]">
            Gallery Coming Soon
        </p>

        <p className="text-gray-400 mt-5">
            Professional installation photography
            currently being curated.
        </p>
    </div>
</div>
                
                {/* Visual Texture Fallback (Fine Structural Geometric Grid) */}
                <div className="absolute inset-0 bg-brand-dark-surface -z-10 flex items-center justify-center p-6">
                  <span className="text-[9px] tracking-superwidest uppercase text-brand-gold/40 text-center font-light">
                    {blend.name} Blend Mineral Pattern
                  </span>
                </div>

                {/* Texture Spec Hover Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <div className="px-4 py-2 border border-brand-gold/30 rounded-sm bg-brand-dark-base/90 backdrop-blur-md flex items-center gap-2">
                    <Eye className="w-3.5 h-3.5 text-brand-gold" />
                    <span className="text-[10px] uppercase tracking-widest text-brand-gold-light">
                      Analyze Matrix
                    </span>
                  </div>
                </div>
              </div>

              {/* Composition Context */}
              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[9px] tracking-superwidest uppercase text-brand-gold font-bold mb-1.5 block">
                    {blend.type}
                  </span>
                  
                  <h3 className="text-xl font-serif text-white tracking-tight mb-3">
                    {blend.name}
                  </h3>
                  
                  <p className="text-xs text-brand-stone font-light leading-relaxed mb-6">
                    {blend.description}
                  </p>
                </div>

                {/* Tech Specification Footer */}
                <div className="border-t border-white/5 pt-4 mt-auto flex items-center justify-between text-[10px] tracking-wider text-brand-stone/80">
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-brand-gold/80" />
                    <span>Graded 1-3mm & 2-5mm</span>
                  </div>
                  <span className="text-brand-gold font-semibold">Ready-Mixed</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}