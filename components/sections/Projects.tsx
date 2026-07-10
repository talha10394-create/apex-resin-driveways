"use client";

import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "../ui/ProjectCard";
import { gsap } from "gsap";

const projectFilters = ["All Estates", "Manor Houses", "Contemporary", "Urban Plazas"];

const eliteProjects = [
  {
    title: "The Wentworth Manor",
    location: "Surrey Belt, UK",
    area: "420 m² Surface",
    blend: "Cotswold Amber Blend",
    category: "Manor Houses",
    image: "/public/images/hero.webp", // Leverages the architectural centerpiece image [1]
  },
  {
    title: "Belgravia Courtyard",
    location: "London, SW1X",
    area: "180 m² Surface",
    blend: "Platinum Quartz Granite",
    category: "Urban Plazas",
    image: "/public/images/hero.webp",
  },
  {
    title: "The Obsidian Villa",
    location: "Cheshire Golden Triangle",
    area: "295 m² Surface",
    blend: "Basalt Crystal Blend",
    category: "Contemporary",
    image: "/public/images/hero.webp",
  },
  {
    title: "Cotswolds Barn Conversion",
    location: "Chipping Norton",
    area: "350 m² Surface",
    blend: "Warm Honey Quartz",
    category: "Manor Houses",
    image: "/public/images/hero.webp",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All Estates");
  const gridRef = useRef<HTMLDivElement>(null);

  // Smooth filter transitioning utilizing GSAP
  useEffect(() => {
    const cards = gridRef.current?.children;
    if (!cards) return;

    gsap.fromTo(
      cards,
      { opacity: 0, scale: 0.97, y: 15 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
        overwrite: "auto",
      }
    );
  }, [activeFilter]);

  const filteredProjects = eliteProjects.filter(
    (project) => activeFilter === "All Estates" || project.category === activeFilter
  );

  return (
    <section id="portfolio" className="relative z-10 bg-brand-dark-base py-24 md:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Subheader Grid */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-superwidest text-brand-gold font-bold flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
              ARCHITECTURAL SHOWCASE
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
              Selected Estate <span className="italic text-brand-gold-light">Installations</span>
            </h2>
            <p className="text-brand-stone font-light mt-4 leading-relaxed">
              Explore our pristine, fully-completed custom mineral configurations integrated into high-profile residential properties [1].
            </p>
          </div>

          {/* Filtering Controls */}
          <div className="flex flex-wrap gap-2 border-b border-white/5 pb-4 lg:pb-0 lg:border-none">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 text-xs uppercase tracking-widest transition-all duration-300 border rounded-sm ${
                  activeFilter === filter
                    ? "border-brand-gold text-brand-gold-light bg-brand-gold/5"
                    : "border-transparent text-brand-stone hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Card Layout Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch"
        >
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={`${project.title}-${idx}`}
              title={project.title}
              location={project.location}
              area={project.area}
              blend={project.blend}
              image={project.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}