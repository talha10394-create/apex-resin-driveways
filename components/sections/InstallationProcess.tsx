"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldAlert, Compass, Layers, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    num: "01",
    title: "Ground Engineering & Excavation",
    desc: "Rigid sub-base analysis is conducted to determine ground load tolerances [1]. We excavate and engineer a MOT Type 3 permeable foundation, incorporating optimal drainage slope vectors to guarantee SUDs compliance [1].",
    icon: Compass,
  },
  {
    num: "02",
    title: "Perimeter Border Detailing",
    desc: "Precision installation of matching granite setts, metal edge profiles, or visual brickwork transitions. This acts as a structural perimeter block while establishing high-contrast border profiles.",
    icon: ShieldAlert,
  },
  {
    num: "03",
    title: "Thermodynamic Polymer Blending",
    desc: "Washed, kiln-dried aggregate minerals are loaded into forced-action mixers and blended at strictly calibrated temperatures with our premium UV-stable aliphatic polyurethane resin matrix [1].",
    icon: Layers,
  },
  {
    num: "04",
    title: "Artisan Hand-Trowelled Finish",
    desc: "Our master finishers manually screed, level, and float the rich composite mix at a deep structural thickness (typically 18mm-24mm), polishing it to a seamless, slip-resistant reflective finish [1].",
    icon: Sparkles,
  },
];

export default function InstallationProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        }
      );

      // Staggered Step Reveal
      gsap.fromTo(
        stepsContainerRef.current?.children || [],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stepsContainerRef.current,
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
      className="relative z-10 bg-brand-dark-base py-24 md:py-36 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div ref={titleRef} className="max-w-3xl mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-superwidest text-brand-gold font-bold flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
            CRAFTSMANSHIP SEQUENCE
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
            The Architectural Precision of <span className="italic text-brand-gold-light">Our Installation</span>
          </h2>
          <p className="text-brand-stone font-light mt-4 leading-relaxed max-w-2xl">
            A premium resin-bound driveway relies on the unseen foundations of civil engineering. We execute each phase with mathematical and mechanical accuracy [1].
          </p>
        </div>

        {/* Steps Grid */}
        <div
          ref={stepsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="group p-8 bg-brand-dark-surface border border-white/5 rounded-sm relative flex flex-col justify-between transition-all duration-500 hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/5"
              >
                {/* Number Accent */}
                <div className="absolute top-4 right-6 font-serif text-4xl lg:text-5xl text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors duration-500">
                  {step.num}
                </div>

                <div className="mb-8">
                  <div className="w-10 h-10 flex items-center justify-center text-brand-gold bg-brand-dark-base rounded-sm mb-6 border border-white/5 group-hover:border-brand-gold/20 transition-colors">
                    <Icon className="w-4 h-4 stroke-[1.5]" />
                  </div>

                  <h3 className="text-lg md:text-xl font-serif text-white tracking-tight mb-3 group-hover:text-brand-gold-light transition-colors">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs text-brand-stone leading-relaxed font-light mt-auto">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}