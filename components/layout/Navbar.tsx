"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trap keyboard focus and support Escape key within Mobile Menu for WCAG AA
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500 will-animate",
          scrolled 
            ? "py-4 bg-brand-dark-base/80 backdrop-blur-xl border-b border-brand-gold/10" 
            : "py-6 bg-transparent"
        )}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Brand Representation */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group focus-visible:ring-1 focus-visible:ring-brand-gold rounded-sm"
            aria-label="Apex Resin Driveways Home"
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 border border-brand-gold/30 rounded-lg group-hover:border-brand-gold transition-colors duration-500" />
              <Image
                src="/icons/logo.png"
                alt=""
                width={32}
                height={32}
                className="object-contain"
                priority
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <svg 
                className="w-6 h-6 text-brand-gold" 
                viewBox="0 0 100 100" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="6"
                aria-hidden="true"
              >
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

          {/* Desktop Navigation with high-end premium interactions */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {siteConfig.navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="text-xs uppercase tracking-widest text-brand-stone hover:text-brand-gold transition-colors duration-300 relative py-1 group focus-visible:text-brand-gold"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Premium Call to Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <Link 
              href="#quote" 
              className="text-xs uppercase tracking-widest text-white hover:text-brand-gold transition-colors duration-300 focus-visible:text-brand-gold"
            >
              Request Sample Presentation
            </Link>
            <Link
              href="#quote"
              className="px-6 py-3 bg-brand-gold hover:bg-brand-gold-dark text-brand-dark-base text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 group border border-transparent rounded-sm premium-glow-hover"
            >
              Request a Quote
              <ArrowUpRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Hamburger Menu Trigger - Fully accessible with screen reader support */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-brand-stone hover:text-brand-gold focus-visible:text-brand-gold"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 animate-spin-slow" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        id="mobile-navigation"
        ref={mobileMenuRef}
        className={cn(
          "fixed inset-0 z-40 bg-brand-dark-base bg-opacity-98 backdrop-blur-2xl flex flex-col justify-center transition-transform duration-500 ease-in-out lg:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col items-center gap-8 px-6 text-center">
          {siteConfig.navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif tracking-widest text-brand-stone hover:text-brand-gold transition-colors focus-visible:text-brand-gold"
              tabIndex={mobileMenuOpen ? 0 : -1}
            >
              {item.label}
            </Link>
          ))}
          <div className="h-[1px] w-24 bg-brand-gold/20 my-4" />
          <Link
            href="#quote"
            onClick={() => setMobileMenuOpen(false)}
            className="px-8 py-4 bg-brand-gold text-brand-dark-base uppercase tracking-widest text-xs font-bold flex items-center gap-2 premium-glow-hover"
            tabIndex={mobileMenuOpen ? 0 : -1}
          >
            Get Design Proposal
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}