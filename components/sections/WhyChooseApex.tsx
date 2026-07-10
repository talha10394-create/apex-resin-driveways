"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Compass, Shield, ShieldCheck } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const trustItems = [
  {
    icon: Award,
    title: "BBA Certified Materials",
    desc: "Every polymer element and aggregate blend is certified under British Board of Agrément guidelines, maintaining rigid load capacities for absolute engineering safety [1].",
  },
  {
    icon: Shield,
    title: "Premium 25-Year Structural Warranty",
    desc: "Our systems are engineered for half-century durability. Every residential driveway installation is backed with a formal structural bond [1].",
  },
  {
    icon: Compass,
    title: "Bespoke Mineral Grading",
    desc: "We wash, dry, and grade dry aggregates with proprietary size ratios. This optimal void matrix guarantees maximum compaction strength and permeability [1].",
  },
];

export default function WhyChooseApex() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentGridRef = useRef<HTMLDivElement>(null);

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
        contentGridRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentGridRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-brand-dark-surface border-t border-white/5 py-24 md:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-base/30 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div ref={headerRef} className="max-w-3xl mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-superwidest text-brand-gold font-bold flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
            THE APEX IMPRIMATUR
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
            An Unwavering Dedication to <span className="italic text-brand-gold-light">Elite Standards</span>
          </h2>
          <p className="text-brand-stone font-light mt-4 leading-relaxed max-w-2xl">
            Where average builders use standard mixtures, Apex approaches resin paving with civil engineering discipline and aesthetic perfection.
          </p>
        </div>

        {/* Brand Promises Grid */}
        <div ref={contentGridRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-8 bg-brand-dark-base border border-white/5 rounded-sm relative transition-all duration-500 hover:border-brand-gold/20"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
                
                <div className="w-10 h-10 flex items-center justify-center text-brand-gold mb-6 bg-brand-gold/5 rounded-sm">
                  <Icon className="w-5 h-5 stroke-[1.2]" />
                </div>

                <h3 className="text-lg md:text-xl font-serif text-white tracking-tight mb-3">
                  {item.title}
                </h3>
                
                <p className="text-xs text-brand-stone leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Signature Callout banner */}
        <div className="mt-16 p-8 bg-brand-dark-base border border-brand-gold/15 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-gold/[0.01] blur-2xl pointer-events-none" />
          
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-brand-gold shrink-0 stroke-[1.2]" />
            <div>
              <p className="text-sm font-serif text-white font-semibold">
                SUDs Planning Compliant
              </p>
              <p className="text-xs text-brand-stone font-light">
                Our installations require zero planning permission under UK drainage legislation, simplifying estate modifications [1].
              </p>
            </div>
          </div>

          <a
            href="#quote"
            className="px-6 py-3 bg-brand-gold hover:bg-brand-gold-dark text-brand-dark-base text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-sm inline-block text-center whitespace-nowrap self-stretch md:self-auto"
          >
            CONSULT THE TEAM
          </a>
        </div>

      </div>
    </section>
  );
}