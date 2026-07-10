"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Globe, Compass, ShieldCheck } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const regions = [
  {
    title: "London & Home Counties",
    cities: ["Mayfair & Belgravia", "Surrey Hills (Guildford, Weybridge)", "Berkshire (Windsor, Ascot)", "Beaconsfield & Buckinghamshire"],
    description: "Our primary surveyors are active daily across London and the surrounding private residential estates, delivering bespoke consultations [1].",
  },
  {
    title: "The Cotswolds & South West",
    cities: ["Chipping Campden", "Stow-on-the-Wold", "Cirencester", "Bath & Somerset Districts"],
    description: "Providing sympathetic stone blend formulations that complement traditional honeyed limestone facades and heritage barn conversion guidelines.",
  },
  {
    title: "Northern Enclaves",
    cities: ["Alderley Edge & Wilmslow", "Cheshire Golden Triangle", "Prestbury", "Knutsford"],
    description: "Serving high-profile architectural modern villas with dark basalt, platinum quartz, and high-contrast geometric estate entrances.",
  },
];

export default function AreasCovered() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal header
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

      // Reveal region cards with slight delay cascade
      gsap.fromTo(
        gridRef.current?.children || [],
        { opacity: 0, y: 40 },
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
      id="areas-covered"
      className="relative z-10 bg-brand-dark-base py-24 md:py-36 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Subheader */}
        <div ref={headerRef} className="max-w-3xl mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-superwidest text-brand-gold font-bold flex items-center gap-2 mb-4">
            <Globe className="w-4 h-4 text-brand-gold shrink-0 animate-spin-slow" />
            REGIONAL OPERATIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
            Nationwide Deployments for <span className="italic text-brand-gold-light">Elite Paving</span>
          </h2>
          <p className="text-brand-stone font-light mt-4 leading-relaxed max-w-2xl">
            While our regional architectural offices are located in London and Surrey, our hand-trowelling teams deploy nationwide across the UK's most distinguished zip codes [1].
          </p>
        </div>

        {/* Region Grid */}
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {regions.map((region, idx) => (
            <div
              key={idx}
              className="group p-8 bg-brand-dark-surface border border-white/5 rounded-sm relative transition-all duration-500 hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/5 flex flex-col justify-between"
            >
              {/* Dynamic decorative line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
              
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                    <MapPin className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-serif text-white tracking-tight font-semibold">
                    {region.title}
                  </h3>
                </div>

                <p className="text-xs text-brand-stone leading-relaxed font-light mb-8">
                  {region.description}
                </p>
              </div>

              {/* Sub-areas list */}
              <div className="border-t border-white/5 pt-6 mt-auto">
                <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold block mb-3">
                  Key Surveying Corridors
                </span>
                <ul className="space-y-2">
                  {region.cities.map((city, cIdx) => (
                    <li key={cIdx} className="flex items-center gap-2 text-xs text-brand-stone-light font-light">
                      <Compass className="w-3.5 h-3.5 text-brand-gold/60 shrink-0" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Access Banner */}
        <div className="mt-16 p-8 bg-brand-dark-surface border border-brand-gold/15 rounded-sm flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-gold/[0.01] blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-brand-gold shrink-0 stroke-[1.2]" />
            <div>
              <p className="text-sm font-serif text-white font-semibold">
                Looking for a local project site visit?
              </p>
              <p className="text-xs text-brand-stone font-light">
                Our architectural surveyors carry complete aggregate material selector boxes directly to your location [1].
              </p>
            </div>
          </div>

          <a
            href="#quote"
            className="px-6 py-3 bg-brand-gold hover:bg-brand-gold-dark text-brand-dark-base text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-sm inline-block text-center whitespace-nowrap self-stretch lg:self-auto"
          >
            REQUEST SURVEYOR VISIT
          </a>
        </div>

      </div>
    </section>
  );
}