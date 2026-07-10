"use client";

import React from "react";
import ImageReveal from "./ImageReveal";
import { ArrowUpRight, Maximize2, MapPin } from "lucide-react";

interface ProjectCardProps {
  title: string;
  location: string;
  area: string;
  blend: string;
  image: string;
}

export default function ProjectCard({
  title,
  location,
  area,
  blend,
  image,
}: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col bg-brand-dark-surface border border-white/5 rounded-sm overflow-hidden transition-all duration-500 hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/5">
      {/* Premium Visual Reveal Wrapper */}
      <div className="relative overflow-hidden w-full">
        <div className="aspect-[16/10] w-full bg-brand-dark-base flex items-center justify-center border-b border-white/5">
  <div className="text-center px-6">
    <span className="block text-[10px] uppercase tracking-[0.35em] text-brand-gold mb-3">
      Signature Project
    </span>

    <h3 className="font-serif text-2xl text-white mb-3">
      Project Photography
    </h3>

    <p className="text-sm text-brand-stone/70 leading-relaxed max-w-xs mx-auto">
      Professional installation photography will be added here to showcase our
      completed luxury resin driveway projects.
    </p>
  </div>
</div>
        
        {/* Hover Action Layer */}
        <div className="absolute inset-0 bg-brand-dark-base/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20">
          <div className="w-12 h-12 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-gold bg-brand-dark-base/80 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
            <Maximize2 className="w-4 h-4 stroke-[1.5]" />
          </div>
        </div>

        {/* Floating Category Label */}
        <div className="absolute top-4 left-4 z-20 bg-brand-dark-base/85 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded-sm">
          <span className="text-[9px] tracking-superwidest uppercase text-brand-gold font-bold">
            {blend}
          </span>
        </div>
      </div>

      {/* Metadata Panel */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center gap-1.5 text-brand-stone text-xs mb-3 font-light">
            <MapPin className="w-3.5 h-3.5 text-brand-gold" />
            <span>{location}</span>
          </div>

          <h3 className="text-xl font-serif text-white tracking-tight mb-2 group-hover:text-brand-gold-light transition-colors duration-300">
            {title}
          </h3>
        </div>

        {/* Structural Spec Footer */}
        <div className="border-t border-white/5 pt-5 mt-6 flex items-center justify-between">
          <div>
            <span className="block text-[9px] uppercase tracking-widest text-brand-stone">
              System Specification
            </span>
            <span className="block text-xs font-semibold text-white tracking-wide mt-0.5">
              Seamless Permeable • {area}
            </span>
          </div>

          <span className="w-8 h-8 rounded-sm border border-white/10 flex items-center justify-center text-brand-stone group-hover:text-brand-gold group-hover:border-brand-gold/30 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </div>
  );
}