"use client";

import React from "react";
import DecryptedText from "./DecryptedText";
import ScrollReveal from "./ScrollReveal";
import {
  SiPostgresql,
  SiQgis,
  SiOpencv,
  SiMediapipe,
  SiGooglegemini,
  SiReact,
  SiNextdotjs,
  SiLaravel,
  SiUnity,
  SiPython,
  SiR,
  SiApachespark,
  SiApachekafka,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";

const capabilities = [
  {
    index: "01",
    title: "Software Engineering",
    subtitle:
      "Building dependable web interfaces, spatial systems, and AI-driven digital experiences.",
    stack:
      "TypeScript · Next.js · React · Tailwind CSS · PostGIS · PostgreSQL · Docker",
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
  { name: "POSTGIS", icon: SiPostgresql },
  { name: "QGIS", icon: SiQgis },
  { name: "OPENCV", icon: SiOpencv },
  { name: "MEDIAPIPE", icon: SiMediapipe },
  { name: "GEMINI API", icon: SiGooglegemini },
  { name: "REACT", icon: SiReact },
  { name: "NEXT.JS", icon: SiNextdotjs },
  { name: "LARAVEL", icon: SiLaravel },
  { name: "UNITY", icon: SiUnity },
  { name: "PYTHON", icon: SiPython },
  { name: "R", icon: SiR },
  { name: "SQL", icon: TbSql },
  { name: "PYSPARK", icon: SiApachespark },
  { name: "APACHE KAFKA", icon: SiApachekafka },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="border-b border-white/[0.08] bg-[#0A0A0A] pt-24 sm:pt-32 pb-0"
    >
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 pb-20 sm:pb-28">
        {/* Section Label */}
        <ScrollReveal direction="up" distance={16}>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-[10px] text-[#A8242F] tracking-[0.18em]">
              02
            </span>
            <span className="font-mono text-[10px] uppercase text-white tracking-[0.18em]">
              <DecryptedText text="Core Technologies" duration={700} />
            </span>
            <div className="flex-grow h-px bg-white/[0.08]" />
          </div>
        </ScrollReveal>

        {/* Content Split: Left (Heading + Badge) & Right (Rows) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (roughly 4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between min-h-[280px]">
            <ScrollReveal direction="up" delay={80} distance={20}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[73.7px] leading-[0.95] font-normal tracking-[-0.06em] text-[#F2F0EB]">
                Architecture shaped by logic, driven by insights.
              </h2>
            </ScrollReveal>
          </div>

          {/* Right Column (8 cols): Rows */}
          <div className="lg:col-span-8 divide-y divide-white/[0.08] border-t lg:border-t-0 border-white/[0.08]">
            {capabilities.map((item, idx) => (
              <ScrollReveal key={item.index} delay={120 + idx * 100} distance={20}>
                <div className="relative py-8 px-4 sm:px-6 -mx-4 sm:-mx-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start hover:bg-white/[0.02] transition-all duration-300 group">
                  {/* Left Accent Marker (Red Hairline on Hover) */}
                  <span
                    className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#A8242F] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Index */}
                  <div className="md:col-span-1 font-bold font-mono text-[10px] text-white/50 group-hover:text-[#A8242F] transition-colors">
                    {item.index}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="md:col-span-5">
                    <h3 className="text-[20px] font-normal text-[#F2F0EB] group-hover:text-white transition-colors mb-1 tracking-[0.1em]">
                      {item.title}
                    </h3>
                    <p className="text-[12px] text-white/70 group-hover:text-white/90 leading-relaxed transition-colors">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Tools & Tech Stack */}
                  <div className="md:col-span-6">
                    <p className="text-[12px] text-white/90 group-hover:text-white leading-[2.8] font-sans md:text-right tracking-[0.10em] transition-colors">
                      {item.stack}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
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
            {marqueeTechs.map((tech) => {
              const Icon = tech.icon;
              return (
                <React.Fragment key={tech.name}>
                  <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-white/40 whitespace-nowrap hover:text-white transition-colors group cursor-default">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/40 group-hover:text-[#A8242F] transition-colors shrink-0" />
                    <span>{tech.name}</span>
                  </div>
                  <span className="text-white/20 select-none">•</span>
                </React.Fragment>
              );
            })}
          </div>

          {/* Seamless duplicate loop */}
          <div
            className="flex items-center gap-6 sm:gap-8 px-3 sm:px-4"
            aria-hidden="true"
          >
            {marqueeTechs.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <React.Fragment key={`dup-${tech.name}-${idx}`}>
                  <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-white/40 whitespace-nowrap hover:text-white transition-colors group cursor-default">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/40 group-hover:text-[#A8242F] transition-colors shrink-0" />
                    <span>{tech.name}</span>
                  </div>
                  <span className="text-white/20 select-none">•</span>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
