"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="border-b border-white/[0.08] bg-[#0A0A0A] relative">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[654px]">
        {/* Left Column (roughly 8 cols on desktop) */}
        <div className="lg:col-span-8 p-8 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.08] relative">
          {/* Subtle red plus crosshair icon in top-left margin */}
          <div className="absolute top-12 -left-2 hidden xl:block pointer-events-none select-none">
            <div className="relative w-3.5 h-3.5">
              <span className="absolute top-1.5 left-0 w-3.5 h-px bg-[#8B0000]" />
              <span className="absolute top-0 left-1.5 w-px h-3.5 bg-[#8B0000]" />
            </div>
          </div>

          <div>
            {/* Top Row: Location & Status */}
            <div className="flex items-center justify-between font-sans text-[10px] uppercase tracking-[0.18em] mb-8">
              <span className="text-white">Bogor, Indonesia</span>
              <span className="flex items-center gap-2 text-[#D9D9D9]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B0000] inline-block animate-pulse-dot" />
                <span>Open to internship</span>
              </span>
            </div>

            {/* Sub-label */}
            <div className="font-mono text-[11px] text-white/90 uppercase tracking-[0.18em] mb-4">
              Software Engineering / Data
            </div>

            {/* Display Heading: Instrument Serif + Manrope */}
            <h1 className="select-none tracking-[-0.075em]">
              <span className="font-serif italic text-[#9F1D28] text-6xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[141px] leading-[0.85] font-normal block">
                Zafira
              </span>
              <span className="font-sans font-normal text-[#F2F0EB] text-6xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[141px] leading-[0.88] block mt-1 sm:mt-2">
                Ryani Putri.
              </span>
            </h1>
          </div>

          {/* Bottom Statement Row */}
          <div className="pt-10 mt-14 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5">
              <h2 className="text-[22px] sm:text-[24px] font-normal text-[#F2F0EB] leading-[1.25] tracking-tight">
                Engineering data into meaningful decisions.
              </h2>
            </div>
            <div className="md:col-span-7 flex flex-col justify-between">
              <p className="text-[14px] text-white leading-[1.7] mb-6">
                Mahasiswi Software Engineering IPB University yang berfokus pada
                data analytics, spatial data processing, serta data-driven AI
                automation.
              </p>
              <div>
                <Link
                  href="/#work"
                  className="inline-flex items-center gap-2 text-[11px] text-[#F2F0EB] border-b border-white/30 pb-0.5 hover:text-[#A8242F] hover:border-[#A8242F] transition-all group font-sans"
                >
                  <span>Explore selected work</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column / Sidebar (4 cols on desktop) */}
        <div className="lg:col-span-4 flex flex-col justify-between bg-[#0e0e0e] relative overflow-hidden">
          {/* Top metadata strip */}
          <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-[#F2F0EB] px-8 py-3.5 border-b border-white/[0.08] bg-[#0A0A0A]">
            <span>Portfolio / 2026</span>
            <span>05°29′S 105°16′E</span>
          </div>

          {/* Abstract Brutalist Concrete Image */}
          <div className="relative flex-grow min-h-[380px] sm:min-h-[460px] w-full overflow-hidden grayscale contrast-125 brightness-95">
            <Image
              src="/images/hero-brutalist.png"
              alt="Abstract concrete blocks in black and white"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 35vw"
              className="object-cover object-center"
            />
          </div>

          {/* Bottom Card: Current Target */}
          <div className="p-7 bg-[#0A0A0A] border-t border-white/[0.08] flex items-center justify-between relative z-10">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/70 block mb-1">
                Current target
              </span>
              <p className="text-[14px] font-normal text-[#F2F0EB] leading-snug">
                Data Analyst / Data Engineer Internship
              </p>
            </div>

            {/* Red Circle Stamp Graphic (80x80px in Figma) */}
            <div className="w-16 h-16 flex-shrink-0 relative">
              <svg
                viewBox="0 0 80 80"
                className="w-full h-full text-[#8B0000] stroke-current fill-none stroke-[1.2] opacity-80"
              >
                <circle cx="40" cy="40" r="36" strokeDasharray="3 3" />
                <circle cx="40" cy="40" r="26" strokeWidth="0.8" />
                <path d="M40 8 L40 72 M8 40 L72 40" strokeWidth="0.8" opacity="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
