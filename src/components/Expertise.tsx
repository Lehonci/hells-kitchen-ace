"use client";

import React from "react";

const capabilities = [
  {
    index: "01",
    title: "Software Engineering",
    subtitle:
      "Building dependable web interfaces, spatial systems, and AI-driven digital experiences.",
    stack:
      "TypeScript · Next.js · React · Tailwind CSS · PostGIS · Supabase · Docker",
  },
  {
    index: "02",
    title: "Data & Analytics",
    subtitle:
      "Designing reliable pipelines for data in motion and turning raw records into clear, defensible insights.",
    stack:
      "Python · SQL · pandas · scikit-learn · PySpark · PostgreSQL · Kafka",
  },
];

const marqueeTechs = [
  "POSTGIS",
  "QGIS",
  "OPENCV",
  "MEDIAPIPE",
  "GEMINI API",
  "REACT",
  "NEXT.JS",
  "LARAVEL",
  "UNITY",
  "PYTHON",
  "R",
  "SQL",
  "PYSPARK",
  "APACHE KAFKA",
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="border-b border-white/[0.08] bg-[#0A0A0A] pt-24 sm:pt-32 pb-0"
    >
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 pb-20 sm:pb-28">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[10px] text-[#A8242F] tracking-[0.18em]">
            02
          </span>
          <span className="font-mono text-[10px] uppercase text-white tracking-[0.18em]">
            Core Technologies
          </span>
          <div className="flex-grow h-px bg-white/[0.08]" />
        </div>

        {/* Content Split: Left (Heading + Badge) & Right (Rows) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (roughly 4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between min-h-[280px]">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[73.7px] leading-[0.95] font-normal tracking-[-0.06em] text-[#F2F0EB]">
              Architecture shaped by logic, driven by insights.
            </h2>
          </div>

          {/* Right Column (8 cols): Rows */}
          <div className="lg:col-span-8 divide-y divide-white/[0.08] border-t lg:border-t-0 border-white/[0.08]">
            {capabilities.map((item) => (
              <div
                key={item.index}
                className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-start hover:bg-white/[0.015] transition-colors"
              >
                {/* Index */}
                <div className="md:col-span-1 font-bold font-mono text-[10px] text-[#A8242F]">
                  {item.index}
                </div>

                {/* Title & Subtitle */}
                <div className="md:col-span-5">
                  <h3 className="text-[20px] font-normal text-[#F2F0EB] mb-1 tracking-[0.1em]">
                    {item.title}
                  </h3>
                  <p className="text-[12px] text-white/70 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                {/* Tools & Tech Stack */}
                <div className="md:col-span-6">
                  <p className="text-[12px] text-white leading-[2.8] font-sans md:text-right tracking-[0.10em]">
                    {item.stack}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Running Marquee Strip */}
      <div className="w-full border-t border-b border-white/[0.08] bg-[#0A0A0A] py-3.5 sm:py-4 overflow-hidden relative">
        {/* Gradient edge masks */}
        <div className="absolute left-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] select-none">
          {/* Primary loop */}
          <div className="flex items-center gap-6 sm:gap-8 px-3 sm:px-4">
            {marqueeTechs.map((tech) => (
              <React.Fragment key={tech}>
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-white/40 whitespace-nowrap hover:text-white/80 transition-colors">
                  {tech}
                </span>
                <span className="text-white/20 select-none">•</span>
              </React.Fragment>
            ))}
          </div>

          {/* Seamless duplicate loop */}
          <div
            className="flex items-center gap-6 sm:gap-8 px-3 sm:px-4"
            aria-hidden="true"
          >
            {marqueeTechs.map((tech, idx) => (
              <React.Fragment key={`dup-${tech}-${idx}`}>
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-white/40 whitespace-nowrap hover:text-white/80 transition-colors">
                  {tech}
                </span>
                <span className="text-white/20 select-none">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
