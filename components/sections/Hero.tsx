"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ArrowDown, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Clean viewport initialization to avoid Flash of Unstyled Content (FOUC)
      gsap.set([titleRef.current, subtitleRef.current, textRef.current, ctaRef.current, metricsRef.current], {
        opacity: 0,
        y: 20,
      });

      // Cinematic entrance zoom with optimal hardware acceleration overrides
      tl.fromTo(
        bgRef.current,
        { scale: 1.15, filter: "brightness(0.2)" },
        { scale: 1, filter: "brightness(0.45)", duration: 2.2, ease: "power3.inOut" }
      );

      tl.to(subtitleRef.current, { opacity: 1, y: 0, duration: 1 }, "-=1.5")
        .to(titleRef.current, { opacity: 1, y: 0, duration: 1.2 }, "-=1.2")
        .to(textRef.current, { opacity: 1, y: 0, duration: 1 }, "-=1.0")
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 1 }, "-=0.8")
        .to(metricsRef.current, { opacity: 1, y: 0, duration: 1.2 }, "-=0.7");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark-base pt-24 md:pt-32 pb-16"
      aria-labelledby="hero-title"
    >
      {/* Background Cinematic Resin Driveway Visual with Optimized Responsiveness */}
      <div 
        ref={bgRef} 
        className="absolute inset-0 w-full h-full select-none pointer-events-none z-0 will-animate"
      >
        <img
  src="/images/Hero.jpeg"
  alt="Hero"
  className="absolute inset-0 w-full h-full object-cover object-bottom"
/>
        {/* Cinematic gradient overlays targeting perfect visual readability and structural contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-base via-brand-dark-base/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-base/80 via-transparent to-brand-dark-base/50" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 z-10 flex flex-col justify-between min-h-[calc(100vh-140px)] gap-16">
        
        {/* Architectural Hero Copy */}
        <div className="max-w-4xl mt-auto pt-12">
          
          <div ref={subtitleRef} className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-brand-gold" aria-hidden="true" />
            <span className="text-[10px] md:text-xs tracking-[0.3em] text-brand-gold uppercase font-semibold">
              BESPOKE ARCHITECTURAL SURFACING
            </span>
          </div>

          <h1
            id="hero-title"
            ref={titleRef}
            className="font-serif text-white tracking-tight leading-[1.1] mb-6 font-normal"
            style={{ fontSize: "var(--text-hero-title)" }}
          >
            Luxury Resin Driveways for <span className="italic text-brand-gold-light">Exceptional Homes.</span>.
          </h1>

          <p
            ref={textRef}
            className="text-brand-stone max-w-2xl leading-relaxed mb-10 font-light"
            style={{ fontSize: "var(--text-lead)" }}
          >
            Crafted with premium natural aggregates and precision installation, our bespoke resin bound driveways create elegant entrances that complement Britain's most distinguished homes.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="#quote"
              className="px-8 py-4 bg-brand-gold hover:bg-brand-gold-dark text-brand-dark-base text-xs font-semibold uppercase tracking-widest transition-all duration-300 text-center rounded-sm shadow-xl shadow-brand-gold/5 premium-glow-hover"
            >
              Request Your Bespoke Proposal
            </Link>
            
            <Link
              href="#finishes"
              className="px-8 py-4 border border-white/10 hover:border-brand-gold text-white hover:text-brand-gold text-xs font-semibold uppercase tracking-widest transition-all duration-300 text-center rounded-sm backdrop-blur-sm focus-visible:border-brand-gold"
            >
              View Signature Projects
            </Link>
          </div>
        </div>

        {/* Live Structural Performance Metrics */}
        <div
          ref={metricsRef}
          className="border-t border-white/10 pt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mt-auto"
        >
          {siteConfig.performanceMetrics.map((metric, index) => (
            <div key={index} className="flex items-start gap-4" role="group" aria-label="Performance Metric">
              <CheckCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <span className="block text-xl md:text-2xl font-serif text-white tracking-tight">
                  {metric.value}
                </span>
                <span className="block text-[10px] uppercase tracking-wider text-brand-stone">
                  {metric.label}
                </span>
              </div>
            </div>
          ))}

          {/* Simple scroll dynamic hook */}
          <div className="flex md:justify-end items-center col-span-1 md:col-span-3 lg:col-span-1 mt-4 md:mt-0">
            <button
              onClick={() => {
                document.getElementById("philosophy")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-brand-stone hover:text-brand-gold transition-colors duration-300"
              aria-label="Scroll down to begin experience"
            >
              <span>Scroll to Begin Experience</span>
              <ArrowDown className="w-4 h-4 animate-bounce" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}