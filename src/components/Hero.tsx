"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const months = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ];
      const month = months[now.getMonth()];
      const year = now.getFullYear();

      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      setTimeString(`${day} ${month} ${year} • ${hours}:${minutes}:${seconds} WIB`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="border-b border-white/10 bg-[#0A0A0A] relative">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[654px]">
          {/* Left Column (8 cols in Figma) */}
          <div className="lg:col-span-8 pt-14 pb-10 px-6 sm:px-10 lg:px-14 flex flex-col justify-between border-l border-r border-b lg:border-b-0 border-white/10 relative">
            {/* Red plus crosshair marker centered on the left border */}
            <div className="absolute top-[80px] -left-[6.5px] pointer-events-none select-none z-20">
              <div className="relative w-[13px] h-[13px]">
                <span className="absolute top-[6px] left-0 w-[13px] h-[1px] bg-[#8B0000]" />
                <span className="absolute top-0 left-[6px] w-[1px] h-[13px] bg-[#8B0000]" />
              </div>
            </div>

            <div>
              {/* Top Row: Location & Status */}
              <div className="flex items-center justify-between font-sans text-[10px] uppercase tracking-[0.18em] mb-8">
                <span className="text-white/50">Bogor, Indonesia</span>
                <span className="flex items-center gap-2 text-[#D9D9D9]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B0000] inline-block animate-pulse-dot" />
                  <span>Open to internship</span>
                </span>
              </div>

              {/* Sub-label */}
              <div className="font-mono text-[11px] text-white/45 uppercase tracking-[0.2em] mb-4">
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
            <div className="pt-10 mt-14 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5">
                <h2 className="text-[22px] sm:text-[24px] font-normal text-[#F2F0EB] leading-[1.2] tracking-tight">
                  Engineering data into meaningful decisions.
                </h2>
              </div>
              <div className="md:col-span-7 flex flex-col justify-between">
                <p className="text-[14px] text-white/60 leading-[1.7] mb-6">
                  Mahasiswi Software Engineering IPB University yang berfokus pada
                  data analytics, spatial data processing, serta data-driven AI
                  automation.
                </p>
                <div>
                  <Link
                    href="/#work"
                    className="inline-flex items-center gap-2 text-[11px] text-[#F2F0EB] border-b border-white/30 pb-0.5 hover:text-[#A8242F] hover:border-[#A8242F] transition-all group font-sans uppercase tracking-[0.12em]"
                  >
                    <span>Explore selected work</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column / Sidebar (4 cols in Figma) */}
          <div className="lg:col-span-4 relative flex flex-col justify-between border-l lg:border-l-0 border-r border-white/10 min-h-[500px] lg:min-h-[654px] overflow-hidden">
            {/* Abstract Brutalist Concrete Background Image - full bleed spanning entire sidebar */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/hero-brutalist.png"
                alt="Abstract concrete blocks in black and white"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover object-center"
              />
              {/* Subtle dark tint overlay (Figma 5:438 opacity 0.25) */}
              <div className="absolute inset-0 bg-black/25 pointer-events-none" />
            </div>

            {/* Top metadata strip (Figma 5:439: 54px height, border-b border-white/25) */}
            <div className="relative z-10 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-[#F2F0EB] px-5 sm:px-6 h-[54px] border-b border-white/25 bg-black/20 backdrop-blur-[1px]">
              <span>Portfolio / 2026</span>
              <span>{timeString || "01 NOV 2026 • --:--:-- WIB"}</span>
            </div>

            {/* Middle open space letting the brutalist image show through */}
            <div className="relative z-0 flex-grow pointer-events-none" />

            {/* Bottom area: Current Target on left + Red Stamp on right over image */}
            <div className="relative z-10 flex items-end justify-between">
              {/* Current Target card (Figma 5:444: 240px wide, border-t border-r border-white/20) */}
              <div className="w-[240px] max-w-[65%] p-5 sm:p-6 bg-[#0A0A0A] border-t border-r border-white/20">
                <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/45 block mb-1">
                  Current target
                </span>
                <p className="text-[13px] sm:text-[14px] font-normal text-[#F2F0EB] leading-snug">
                  Data Analyst / Data Engineer Internship
                </p>
              </div>

              {/* Red Circle Stamp Graphic (Figma 5:450: 80x80px positioned over bottom-right of image) */}
              <div className="p-4 sm:p-5 select-none pointer-events-none">
                <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
                  <svg
                    viewBox="0 0 80 80"
                    className="w-full h-full text-[#8B0000] stroke-current fill-none stroke-[0.8] opacity-80"
                  >
                    <circle cx="40" cy="40" r="39" />
                    <circle
                      cx="40"
                      cy="40"
                      r="28"
                      strokeWidth="0.6"
                      strokeDasharray="3 3"
                      opacity="0.6"
                    />
                    <path
                      d="M40 8 L40 72 M8 40 L72 40"
                      strokeWidth="0.6"
                      opacity="0.4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
