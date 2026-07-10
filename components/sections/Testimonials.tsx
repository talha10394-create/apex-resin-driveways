"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const exclusiveTestimonials = [
  {
    quote: "The Cotswold Manor renovation required materials of the highest architectural integrity. Apex exceeded expectations, providing a warm, hand-trowelled cotswold stone entrance that perfectly frames our estate's Georgian facade [1].",
    author: "Eleanor Vance-Smythe",
    role: "Estate Director, Vance-Smythe Property Group",
    location: "Chipping Campden, Gloucestershire",
  },
  {
    quote: "SUDs compliance was a non-negotiable metric for our contemporary London villa. The permeability rate combined with the sharp modern grey basalt aggregate makes the first impression of the property completely flawless [1].",
    author: "Marcus Aurelius Thorne",
    role: "Chief Architect, MAT Architects",
    location: "Belgravia, London",
  },
  {
    quote: "Our experience with Apex was marked by structural precision. From initial soil compaction testing and edge detailing to the final pristine composite finish, their finishing crew displayed master craftsmanship [1].",
    author: "Richard Pendelton",
    role: "Homeowner",
    location: "Surrey Hills Estate, Surrey",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  const slideTransition = (nextIndex: number) => {
    const text = textContainerRef.current;
    if (!text) return;

    // Elegant fade out, shift and slide in transition
    gsap.to(text, {
      opacity: 0,
      y: 10,
      duration: 0.3,
      onComplete: () => {
        setActiveIndex(nextIndex);
        gsap.to(text, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      },
    });
  };

  const handleNext = () => {
    const next = (activeIndex + 1) % exclusiveTestimonials.length;
    slideTransition(next);
  };

  const handlePrev = () => {
    const prev = (activeIndex - 1 + exclusiveTestimonials.length) % exclusiveTestimonials.length;
    slideTransition(prev);
  };

  return (
    <section
      ref={containerRef}
      className="relative z-10 bg-brand-dark-surface py-24 md:py-36 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Static Brand Statement */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-superwidest text-brand-gold font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
              CLIENT DISCOURSE
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
              Praise from <br />
              <span className="italic text-brand-gold-light">Distinguished Homes</span>
            </h2>
            <p className="text-brand-stone font-light text-base leading-relaxed">
              We focus on building lifelong structural trust through pristine installation precision and luxury stone aesthetics [1].
            </p>
            
            {/* Sliding Arrow Controls */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-white/10 hover:border-brand-gold/40 flex items-center justify-center text-brand-stone hover:text-brand-gold transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 stroke-[1.2]" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-white/10 hover:border-brand-gold/40 flex items-center justify-center text-brand-stone hover:text-brand-gold transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 stroke-[1.2]" />
              </button>
            </div>
          </div>

          {/* Dynamic Slider Body */}
          <div className="lg:col-span-7 bg-brand-dark-base border border-white/5 p-8 md:p-12 rounded-sm relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-3xl pointer-events-none" />
            <Quote className="absolute top-8 right-12 w-16 h-16 text-brand-gold/5 stroke-[1]" />

            <div ref={textContainerRef} className="space-y-6 relative z-10">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>

              <blockquote className="text-lg md:text-xl font-serif text-brand-stone-light leading-relaxed font-light italic">
                "{exclusiveTestimonials[activeIndex].quote}"
              </blockquote>

              <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between md:items-end gap-4">
                <div>
                  <cite className="block text-white text-base not-italic font-serif font-semibold">
                    {exclusiveTestimonials[activeIndex].author}
                  </cite>
                  <span className="block text-xs uppercase tracking-widest text-brand-gold mt-1">
                    {exclusiveTestimonials[activeIndex].role}
                  </span>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-brand-stone/80">
                  {exclusiveTestimonials[activeIndex].location}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}