"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Compass, Ruler, Layers } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const serviceItems = [
  {
    icon: Compass,
    title: "Estate Driveway Formations",
    subtitle: "GRAND PORTALS",
    description: "Multi-layered resin installations designed to handle demanding vehicular loads without deformation. Hand-finished seamless transitions connecting boundary gates directly to main house entries.",
    features: ["Load-tested up to 40 tonnes", "Custom granite sett border integration", "SUDs compliant sub-base design"],
  },
  {
    icon: Layers,
    title: "Premium Terraces & Courtyards",
    subtitle: "OUTDOOR ARCHITECTURE",
    description: "Architectural stone carpets engineered for pristine residential pool decks, visual pedestrian plazas, and integrated garden walk pathways that match the interior flooring profile exactly.",
    features: ["Highly tactile, bare-foot friendly", "Zero UV coloration change guaranteed", "Algae-resistant compound matrix"],
  },
  {
    icon: Ruler,
    title: "Bespoke Geometric Detailing",
    subtitle: "SURFACE TAILORING",
    description: "Bespoke stone blending and inlay detailing. Seamless integration of recessed drainage covers, custom perimeter layouts, and elegant steps featuring precise, flawless mitred edges.",
    features: ["Invisible access hatch integration", "Artisan color shading transitions", "Precision hand-trowelled margins"],
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header fade-in
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

      // Grid cards sequential reveal
      gsap.fromTo(
        gridRef.current?.children || [],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
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
      id="finishes"
      className="relative z-10 bg-brand-dark-surface border-t border-white/5 py-24 md:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-base/30 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Section Header */}
        <div ref={headerRef} className="max-w-3xl mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-superwidest text-brand-gold font-bold flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
            INSTALLATION SPECTRUM
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
            Seamless Stone Systems Engineered for <span className="italic text-brand-gold-light">Pristine Architecture</span>
          </h2>
          <p className="text-brand-stone font-light mt-4 leading-relaxed max-w-2xl">
            Our specialized services span across master-planned estate entrances to integrated luxury outdoor spaces, utilizing purely certified structural minerals.
          </p>
        </div>

        {/* Services Editorial Grid */}
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {serviceItems.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between p-8 md:p-10 bg-brand-dark-base border border-white/5 rounded-sm transition-all duration-500 hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/5"
              >
                {/* Visual glow on card hover */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div>
                  {/* Service Icon with soft highlight */}
                  <div className="w-12 h-12 flex items-center justify-center border border-white/10 text-brand-gold rounded-sm mb-8 group-hover:border-brand-gold/40 transition-colors duration-500">
                    <Icon className="w-5 h-5 stroke-[1.2]" />
                  </div>

                  <span className="text-[10px] tracking-superwidest uppercase text-brand-gold font-bold mb-2 block">
                    {service.subtitle}
                  </span>
                  
                  <h3 className="text-xl md:text-2xl font-serif text-white tracking-tight mb-4 group-hover:text-brand-gold-light transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-brand-stone font-light text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Bulleted High-end Features list */}
                <div className="border-t border-white/5 pt-6 mt-auto">
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-brand-stone/80">
                        <span className="w-1 h-1 bg-brand-gold rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#quote"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white group-hover:text-brand-gold transition-colors duration-300 font-bold"
                  >
                    View Details
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}