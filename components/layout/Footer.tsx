"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ArrowUp, ArrowUpRight, Compass, ShieldCheck } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 bg-brand-dark-base border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Decorative vector grid pattern */}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-brand-gold/5 to-transparent pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Segment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/5">
          
          {/* Brand Representation Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 border border-brand-gold/30 rounded-lg group-hover:border-brand-gold transition-colors duration-500" />
                <Image
                  src="/public/images/logo.webp"
                  alt="Apex Resin"
                  width={32}
                  height={32}
                  className="object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <svg className="w-6 h-6 text-brand-gold" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
                  <path d="M50,15 L15,85 L40,85 L50,60 L60,85 L85,85 Z" />
                  <path d="M50,45 L35,80 L65,80 Z" strokeWidth="4" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-[0.2em] text-sm uppercase text-white font-semibold">
                  APEX
                </span>
                <span className="text-[9px] tracking-superwidest uppercase text-brand-gold">
                  RESIN DRIVEWAYS
                </span>
              </div>
            </Link>

            <p className="text-xs text-brand-stone font-light leading-relaxed max-w-sm">
              Architectural Resin Bound Surfacing for the UK's finest private residential estates [1]. Fully BBA-approved, permeable stone formations designed to elevate first impressions permanently [1].
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-[10px] tracking-widest text-brand-gold uppercase">
                <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0 stroke-[1.5]" />
                <span>BBA COMPLIANT</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-1.5 text-[10px] tracking-widest text-brand-gold uppercase">
                <Compass className="w-4 h-4 text-brand-gold shrink-0 stroke-[1.5]" />
                <span>SUDS COMPLIANT</span>
              </div>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-superwidest text-white font-semibold">
              SPECIFICATION PATHS
            </h4>
            <ul className="space-y-2.5">
              {siteConfig.navItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-xs text-brand-stone hover:text-brand-gold transition-colors font-light flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Services column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-superwidest text-white font-semibold">
              UK COVERAGE AREAS
            </h4>
            <ul className="space-y-2.5 text-xs text-brand-stone font-light">
              {siteConfig.locations.map((loc, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-brand-gold rounded-full" />
                  {loc}
                </li>
              ))}
            </ul>
          </div>

          {/* Back to top column */}
          <div className="lg:col-span-2 flex justify-start lg:justify-end items-start">
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full border border-white/10 hover:border-brand-gold flex items-center justify-center text-brand-stone hover:text-brand-gold transition-all duration-300"
              aria-label="Scroll back to top of the page"
            >
              <ArrowUp className="w-5 h-5 stroke-[1.2]" />
            </button>
          </div>

        </div>

        {/* Bottom Legal Segment */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <p className="text-[10px] tracking-wide text-brand-stone font-light">
              &copy; {new Date().getFullYear()} Apex Resin Driveways Ltd. All Rights Reserved.
            </p>
            <p className="text-[9px] text-brand-stone/60 leading-relaxed font-light">
              Registered in England & Wales • Company No: 12345678 • VAT Registration No: GB 123 4567 89 [1].
            </p>
          </div>

          <div className="flex items-center gap-6 text-[10px] tracking-widest uppercase text-brand-stone">
            <Link href="#privacy" className="hover:text-brand-gold transition-colors font-light">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-brand-gold transition-colors font-light">
              Terms of Engagement
            </Link>
            <Link href="#cookies" className="hover:text-brand-gold transition-colors font-light">
              Cookie Directive
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}