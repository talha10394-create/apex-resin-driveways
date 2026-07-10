"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const strokeLineRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal the vertical luxury separator line
      gsap.fromTo(
        strokeLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );

      // Slide in left column elements
      gsap.fromTo(
        leftContentRef.current?.children || [],
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftContentRef.current,
            start: "top 85%",
          },
        }
      );

      // Fade up right column paragraphs
      gsap.fromTo(
        rightContentRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightContentRef.current,
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
      id="philosophy"
      className="relative z-10 bg-brand-dark-base border-t border-white/5 py-24 md:py-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Editorial Concept */}
          <div ref={leftContentRef} className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-superwidest text-brand-gold font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
              CHRONICLE OF CRAFT
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight leading-tight">
              Bespoke Surfacing <br />
              <span className="italic text-brand-gold-light">Reimagined for the Modern Estate</span>
            </h2>
            
            {/* Elegant visual display card */}
            <div className="relative p-8 bg-brand-dark-surface border border-white/5 rounded-sm overflow-hidden gold-border-hover transition-all mt-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-3xl pointer-events-none" />
              <p className="text-xs tracking-widest text-brand-gold uppercase font-semibold mb-2">
                THE APEX SEAMLESS METHOD
              </p>
              <p className="text-sm text-brand-stone leading-relaxed">
                We synthesize premium quartz and granite aggregates with superior-grade UV-stable aliphatic polyurethane. This produces a flawless architectural platform that never settles, fractures, or pools water.
              </p>
            </div>
          </div>

          {/* Luxury Geometric Separator Line */}
          <div className="hidden lg:block lg:col-span-1 h-full min-h-[350px] relative justify-center">
            <div
              ref={strokeLineRef}
              className="absolute left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-brand-gold/40 via-brand-gold/10 to-transparent origin-top"
            />
          </div>

          {/* Right Column - Deep Narrative */}
          <div ref={rightContentRef} className="lg:col-span-6 space-y-6 text-brand-stone font-light text-base md:text-lg leading-relaxed pt-2">
            <p className="font-normal text-white">
              A driveway is more than structural functionality. It is the architectural prelude to your home, defining the spatial sequence of arrival.
            </p>
            <p>
              Our signature hand-trowelled resin bound pavements provide an uninterrupted, high-contrast canvas that accentuates clean structural masonry and natural landscape lines. Each formulation is custom-calibrated to match or contrast perfectly with your property’s exterior cladding, brickwork, or local stone heritage.
            </p>
            <p>
              By completely eliminating water retention, loose aggregate displacement, and surface cracking, Apex provides the premier sustainable ground engineering choice for high-net-worth developers and homeowners alike.
            </p>
            
            <div className="pt-6">
              <Link
                href="#quote"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold hover:text-white transition-colors duration-300 font-bold group"
              >
                REQUEST AN ARCHITECTURAL EVALUATION
                <ArrowUpRight className="w-4.5 h-4.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Inline fallback Link component
function Link({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}