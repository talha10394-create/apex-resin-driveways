"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, ShieldCheck, BadgeCheck, Award } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const trustFactors = [
  {
    icon: ShieldCheck,
    title: "Trustpilot Verified",
    score: "4.9 / 5.0 Rating",
    detail: "Outstanding review scores reflecting our customer service standard.",
  },
  {
    icon: BadgeCheck,
    title: "BBA Accredited System",
    score: "Certified Compliance",
    detail: "Full system components certified by the British Board of Agrément [1].",
  },
  {
    icon: Award,
    title: "Federation Standards",
    score: "Approved Partner",
    detail: "Members of premium UK landscaping and construction associations.",
  },
];

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        statsRef.current?.children || [],
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-10 bg-brand-dark-surface py-16 md:py-24 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Headline Meta Score */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs uppercase tracking-superwidest text-brand-gold font-bold block">
              TRUSTED NATIONWIDE
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-white tracking-tight leading-tight">
              An Uncompromised Reputation for <span className="italic text-brand-gold-light">Pristine Engineering</span>
            </h2>
            <div className="flex items-center gap-1.5 pt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
              ))}
              <span className="text-xs text-white tracking-wider uppercase ml-2 font-semibold">
                Class-Leading
              </span>
            </div>
          </div>

          {/* Staggered trust metric columns */}
          <div
            ref={statsRef}
            className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {trustFactors.map((factor, idx) => {
              const Icon = factor.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-brand-dark-base border border-white/5 rounded-sm relative group hover:border-brand-gold/15 transition-all duration-300"
                >
                  <div className="w-8 h-8 flex items-center justify-center text-brand-gold bg-brand-dark-surface rounded-full mb-4">
                    <Icon className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-brand-stone mb-1">
                    {factor.title}
                  </div>
                  <div className="text-base font-serif text-white mb-2 font-semibold">
                    {factor.score}
                  </div>
                  <p className="text-[10px] leading-relaxed text-brand-stone font-light">
                    {factor.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}