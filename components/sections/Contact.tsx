"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, Clock, ShieldCheck, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    size: "100-250m²",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left side text reveal
      gsap.fromTo(
        leftColRef.current?.children || [],
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftColRef.current,
            start: "top 85%",
          },
        }
      );

      // Right side form layout reveal
      gsap.fromTo(
        rightColRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightColRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      id="quote"
      className="relative z-10 bg-brand-dark-surface py-24 md:py-36 border-t border-white/5 overflow-hidden section-lazy"
      aria-labelledby="contact-title"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-base/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Contact Details */}
          <div ref={leftColRef} className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-superwidest text-brand-gold font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                DESIGN ADVISORY
              </span>
              <h2 
                id="contact-title"
                className="font-serif text-white tracking-tight leading-tight"
                style={{ fontSize: "var(--text-section-title)" }}
              >
                Initiate Your <br />
                <span className="italic text-brand-gold-light">Bespoke Proposal</span>
              </h2>
              <p className="text-brand-stone font-light text-base leading-relaxed">
                Connect directly with our surveying desk to organize your local mineral aggregate evaluation, dynamic structural advice, and end-to-end design formulation [1].
              </p>
            </div>

            {/* Direct Lines */}
            <div className="space-y-6 pt-6 border-t border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-widest text-brand-stone">
                    DIRECT ENGAGEMENT
                  </span>
                  <a
                    href={`tel:${siteConfig.telephone}`}
                    className="block text-base md:text-lg font-serif text-white hover:text-brand-gold transition-colors font-semibold focus-visible:text-brand-gold"
                    aria-label={`Call Apex at ${siteConfig.telephone}`}
                  >
                    {siteConfig.telephone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-widest text-brand-stone">
                    EMAIL CORRESPONDENCE
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="block text-base md:text-lg font-serif text-white hover:text-brand-gold transition-colors font-semibold focus-visible:text-brand-gold"
                    aria-label={`Email Apex at ${siteConfig.email}`}
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-widest text-brand-stone">
                    OPERATIONAL TIMINGS
                  </span>
                  <span className="block text-sm text-brand-stone-light">
                    Mon - Sat: 08:00 - 18:00 (Surveys Daily)
                  </span>
                </div>
              </div>
            </div>

            {/* Premium regulatory disclaimer layout */}
            <div className="relative p-6 bg-brand-dark-base border border-white/5 rounded-sm overflow-hidden hidden md:block">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 blur-2xl pointer-events-none" />
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div className="text-xs text-brand-stone leading-relaxed font-light">
                  <span className="font-semibold text-white block mb-1">PROMPT UK RESPONSE STATUS</span>
                  Our structural engineers and field operatives are located throughout key arterial UK corridors to ensure timely design consultations [1].
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Luxury Contact Form with Semantic floating labels and high visibility validation support */}
          <div ref={rightColRef} className="lg:col-span-7 bg-brand-dark-base border border-white/5 p-8 md:p-12 rounded-sm relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/5 blur-3xl pointer-events-none" />
            
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center space-y-4" role="status">
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold animate-bounce">
                  <CheckCircle className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="text-2xl font-serif text-white">Proposal Initiated</h3>
                <p className="text-xs text-brand-stone max-w-sm leading-relaxed">
                  Thank you for connecting with the Apex Concierge Desk. A senior design coordinator is reviewing your details and will be in touch shortly [1].
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" aria-label="Bespoke Proposal Form">
                <h3 className="text-xl font-serif text-white mb-6">Concierge Form</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Floating input container 1 */}
                  <div className="relative border-b border-white/10 focus-within:border-brand-gold transition-colors">
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder=" "
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="peer w-full bg-transparent py-3 text-sm text-white placeholder-transparent focus:outline-none focus:ring-0"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 top-3 text-xs uppercase tracking-widest text-brand-stone pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-gold"
                    >
                      Your Full Name
                    </label>
                  </div>

                  {/* Floating input container 2 */}
                  <div className="relative border-b border-white/10 focus-within:border-brand-gold transition-colors">
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder=" "
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="peer w-full bg-transparent py-3 text-sm text-white placeholder-transparent focus:outline-none focus:ring-0"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 top-3 text-xs uppercase tracking-widest text-brand-stone pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-gold"
                    >
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Floating input container 3 */}
                  <div className="relative border-b border-white/10 focus-within:border-brand-gold transition-colors">
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder=" "
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="peer w-full bg-transparent py-3 text-sm text-white placeholder-transparent focus:outline-none focus:ring-0"
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-0 top-3 text-xs uppercase tracking-widest text-brand-stone pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-gold"
                    >
                      Telephone Number
                    </label>
                  </div>

                  {/* Floating input container 4 */}
                  <div className="relative border-b border-white/10 focus-within:border-brand-gold transition-colors">
                    <input
                      type="text"
                      id="location"
                      required
                      placeholder=" "
                      value={formState.location}
                      onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                      className="peer w-full bg-transparent py-3 text-sm text-white placeholder-transparent focus:outline-none focus:ring-0"
                    />
                    <label
                      htmlFor="location"
                      className="absolute left-0 top-3 text-xs uppercase tracking-widest text-brand-stone pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-gold"
                    >
                      Project Postcode / Area
                    </label>
                  </div>
                </div>

                {/* Dropdown/Selection container */}
                <div className="space-y-2">
                  <label htmlFor="size" className="block text-[10px] uppercase tracking-superwidest text-brand-stone">
                    Estimated Driveway Area
                  </label>
                  <select
                    id="size"
                    value={formState.size}
                    onChange={(e) => setFormState({ ...formState, size: e.target.value })}
                    className="w-full bg-brand-dark-surface border border-white/10 p-3 text-xs text-white uppercase tracking-wider focus:outline-none focus:border-brand-gold rounded-sm cursor-pointer"
                  >
                    <option value="Under 100m²">Compact Estates (Under 100m²)</option>
                    <option value="100-250m²">Bespoke Driveway Area (100 - 250m²)</option>
                    <option value="250m²+">Grand Estates (250m²+)</option>
                  </select>
                </div>

                {/* Messaging container */}
                <div className="relative border-b border-white/10 focus-within:border-brand-gold transition-colors pt-4">
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder=" "
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="peer w-full bg-transparent py-3 text-sm text-white placeholder-transparent focus:outline-none resize-none focus:ring-0"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 top-7 text-xs uppercase tracking-widest text-brand-stone pointer-events-none transition-all duration-300 peer-placeholder-shown:top-7 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-brand-gold"
                  >
                    Details of your Estate Project
                  </label>
                </div>

                {/* Dynamic Submit Action */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-gold hover:bg-brand-gold-dark text-brand-dark-base text-xs font-bold uppercase tracking-superwidest transition-all duration-300 shadow-xl shadow-brand-gold/5 rounded-sm premium-glow-hover"
                  >
                    SUBMIT BESPOKE DESIGN ENQUIRY
                  </button>
                </div>

                <div className="text-[10px] text-brand-stone/80 leading-relaxed text-center font-light pt-2">
                  * All structural enquiries are protected under strict domestic and corporate NDAs. Your details are never processed beyond Apex-certified coordinators [1].
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}