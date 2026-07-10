"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const statsData = [
  { value: "25", suffix: "Yr", label: "Structural Guarantee", sub: "Fully Insured Warranty Protection" },
  { value: "100", suffix: "%", label: "Aliphatic Base", sub: "Permanent Non-Yellowing Quality" },
  { value: "1.2", suffix: "k", label: "Bespoke Projects", sub: "Exclusive UK Wide Residences" },
  { value: "850", suffix: "L", label: "Permeability Rate", sub: "Litres per m² / min Drainage capacity" },
];

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current?.children || [],
        { opacity: 0, scale: 0.95, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-brand-dark-base py-16 md:py-24 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          ref={gridRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12"
        >
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 bg-brand-dark-surface/40 border border-white/5 rounded-sm relative text-center group hover:border-brand-gold/10 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-brand-gold/[0.01] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="font-serif text-3xl md:text-5xl lg:text-6xl text-brand-gold-light tracking-tighter mb-2">
                <span>{stat.value}</span>
                <span className="text-brand-gold text-2xl md:text-3xl font-light ml-0.5">{stat.suffix}</span>
              </div>
              
              <div className="text-[10px] md:text-xs uppercase tracking-superwidest text-white font-semibold mb-1">
                {stat.label}
              </div>
              
              <div className="text-[9px] md:text-[10px] tracking-widest text-brand-stone font-light">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}