"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
  {
    question: "Do resin driveways require planning permission?",
    answer: "No. If your resin-bound driveway is installed correctly on a fully porous sub-base (such as permeable concrete or an engineered MOT Type 3 stone layer), it is fully porous and complies with Sustainable Urban Drainage Systems (SUDs) legislation, bypassing the need for planning permissions [1].",
  },
  {
    question: "What is the difference between Aliphatic and Aromatic resin binders?",
    answer: "Aromatic resin binders are highly sensitive to ultraviolet radiation. Within months of outdoor exposure, solar UV causes them to break down and oxidize, turning dark, yellow, and structurally brittle. Aliphatic resin is inherently UVR-stable, guaranteeing your aggregate blend retains its original rich, crystalline color permanently [1].",
  },
  {
    question: "How long will a premium hand-trowelled resin driveway last?",
    answer: "When engineered over a robust, load-bearing sub-base and hand-screeded at the certified depth of 18mm to 24mm, an aliphatic resin system will endure in excess of 25 to 30 years [1]. Our systems are fully backed by our formal 25-Year Structural Premium Warranty [1].",
  },
  {
    question: "Is there any loose gravel tracking, and how is it cleaned?",
    answer: "None. Unlike loose gravel stones that track onto roadways and damage car tires, resin bound paving fully encapsulates every individual stone within a monolithic polyurethane envelope [1]. Maintenance is exceptionally simple: a routine power washing or seasonal sweeping is all that is required to restore visual brilliance.",
  },
  {
    question: "How long does the physical installation take to cure?",
    answer: "Our standard residential installations typically require 2 to 3 days on site, subject to existing sub-base prep. Once our artisans have finished hand-trowelling the surface layer, it cures quickly: pedestrian access is permitted after 12 hours, and standard vehicular parking after 24 to 48 hours.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        listRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: listRef.current,
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
      id="technical-spec"
      className="relative z-10 bg-brand-dark-base py-24 md:py-36 border-t border-white/5 overflow-hidden section-lazy"
      aria-labelledby="faq-title"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* FAQ Intro Column */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <span className="text-xs uppercase tracking-superwidest text-brand-gold font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
              SYSTEM METRICS FAQ
            </span>
            <h2 
              id="faq-title"
              className="font-serif text-white tracking-tight leading-tight"
              style={{ fontSize: "var(--text-section-title)" }}
            >
              Addressing the <br />
              <span className="italic text-brand-gold-light">Technical Dimensions</span>
            </h2>
            <p className="text-brand-stone font-light text-base leading-relaxed">
              We believe in total transparency. Explore the engineering and structural details that make our resinbound systems industry-leading [1].
            </p>
            <div className="hidden lg:flex items-center gap-2.5 pt-4 text-brand-stone/80 text-xs font-light border-t border-white/5">
              <HelpCircle className="w-4 h-4 text-brand-gold" />
              <span>Have additional bespoke queries? Contact our concierge desk.</span>
            </div>
          </div>

          {/* Accordion List Column with semantic, accessible button control properties */}
          <div ref={listRef} className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={cn(
                    "border border-white/5 rounded-sm overflow-hidden transition-colors duration-300",
                    isOpen ? "bg-brand-dark-surface/60 border-brand-gold/15" : "bg-brand-dark-surface/30"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold group"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    id={`faq-question-${idx}`}
                  >
                    <span className="font-serif text-base md:text-lg text-white font-semibold tracking-tight transition-colors duration-300 group-hover:text-brand-gold-light">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-brand-gold shrink-0 transition-transform duration-300",
                        isOpen ? "rotate-180" : "rotate-0"
                      )}
                    />
                  </button>

                  <div
                    id={`faq-answer-${idx}`}
                    aria-labelledby={`faq-question-${idx}`}
                    role="region"
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pt-2 text-xs md:text-sm text-brand-stone font-light leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}