"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import WhyResin from "@/components/sections/WhyResin";
import Services from "@/components/sections/Services";
import WhyChooseApex from "@/components/sections/WhyChooseApex";
import Projects from "@/components/sections/Projects";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Gallery from "@/components/sections/Gallery";
import InstallationProcess from "@/components/sections/InstallationProcess";
import Reviews from "@/components/sections/Reviews";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import AreasCovered from "@/components/sections/AreasCovered";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lenis Smooth Scroll Configuration
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Simulated Page Loader to ensure GSAP transitions fire beautifully
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 150);

    return () => {
      lenis.destroy();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {/* Luxury Loading Reveal Screen */}
      <div
        className={`fixed inset-0 bg-brand-dark-base z-[9999] transition-opacity duration-700 ease-out flex items-center justify-center pointer-events-none ${
          loading ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* Minimal architectural spinner */}
            <div className="absolute inset-0 border-2 border-brand-gold/10 rounded-full" />
            <div className="absolute inset-0 border-2 border-t-brand-gold rounded-full animate-spin" />
          </div>
          <span className="text-[10px] tracking-superwidest uppercase text-brand-gold mt-2 animate-pulse">
            APEX RESIN bound systems
          </span>
        </div>
      </div>

      <div className={`transition-opacity duration-1000 ${loading ? "opacity-0" : "opacity-100"}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Stats />
          <WhyResin />
          <Projects />
          <BeforeAfter />
          <Services />
          <Gallery />
          <InstallationProcess />
          <Testimonials />
          <Reviews />
          <FAQ />
          <AreasCovered />
          <Contact />
          <WhyChooseApex />
        </main>
        <Footer />
      </div>
    </>
  );
}