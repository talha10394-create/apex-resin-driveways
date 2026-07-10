"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Droplets, ShieldCheck, CheckCircle2, Sun, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const comparisonData = {
  positives: [
    {
      title: "Sustainable Permeability (SUDs)",
      icon: Droplets,
      desc: "Water cascades cleanly through the loose stone matrix at up to 850L/m²/min. Zero runoff, zero standing puddles [1].",
    },
    {
      title: "Structural Monolithic Bond",
      icon: ShieldCheck,
      desc: "A completely seamless hand-trowelled envelope. Eliminates cracking joints, weed growth, and loose stone tracking [1].",
    },
    {
      title: "UVR-Stable Color Endurance",
      icon: Sun,
      desc: "Aliphatic polyurethanes never yellow, fade, or break down when exposed to heavy ultraviolet rays.",
    },
  ],
  negatives: [
    { title: "Loose Gravel", desc: "Constant stone scattering, ruts, and challenging wheel traction." },
    { title: "Standard Concrete", desc: "Unseemly stress cracks, completely non-permeable, prone to staining." },
    { title: "Tarmacadam", desc: "Softens under Summer sun, leaks oils, and carries poor aesthetic values." },
  ]
};

export default function WhyResin() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const positiveGridRef = useRef<HTMLDivElement>(null);
  const compareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        positiveGridRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: positiveGridRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        compareRef.current,
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: compareRef.current,
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
      id="technical"
      className="relative z-10 bg-brand-dark-base border-t border-white/5 py-24 md:py-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Informational Copy */}
          <div className="lg:col-span-7 space-y-12">
            <div ref={headerRef} className="space-y-4">
              <span className="text-xs uppercase tracking-superwidest text-brand-gold font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                SURFACING ANALYSIS
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
                The Anatomy of <span className="italic text-brand-gold-light">Resin bound Engineering</span>
              </h2>
              <p className="text-brand-stone font-light text-base md:text-lg leading-relaxed max-w-2xl">
                Unlike primitive pavements that wear down under climate forces, resin bound aggregates offer an enduring chemical synergy between premium geological stone and polymers.
              </p>
            </div>

            {/* Positives Grid */}
            <div ref={positiveGridRef} className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {comparisonData.positives.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-4 p-6 bg-brand-dark-surface/60 border border-white/5 rounded-sm">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-brand-gold/10 text-brand-gold rounded-full">
                      <Icon className="w-5 h-5 stroke-[1.2]" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-brand-stone leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Comparative Side Bar */}
          <div ref={compareRef} className="lg:col-span-5 bg-brand-dark-surface border border-white/5 p-8 rounded-sm relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 blur-2xl pointer-events-none" />
            
            <h3 className="text-xl font-serif text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              The Architectural Standard
            </h3>
            
            <p className="text-xs text-brand-stone font-light leading-relaxed mb-8">
              Traditional materials carry physical properties that compromise your landscape’s performance over short life cycles:
            </p>

            <div className="space-y-6">
              {comparisonData.negatives.map((item, idx) => (
                <div key={idx} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-2 text-xs font-semibold text-brand-gold uppercase tracking-wider mb-1">
                    <span className="w-1.5 h-[1px] bg-brand-gold" />
                    {item.title}
                  </div>
                  <p className="text-xs text-brand-stone/80 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-brand-gold/5 border border-brand-gold/10 text-[11px] text-brand-stone leading-relaxed font-light">
              <span className="font-bold text-white block mb-1">ALIPHATIC VS. AROMATIC BINDERS:</span>
              We exclusively specify aliphatic binders. While aromatic alternatives yellow rapidly under solar heat, our aliphatic resins maintain structural elasticity and visual color purity permanently [1].
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}