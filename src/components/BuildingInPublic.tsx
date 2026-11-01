"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function BuildingInPublic() {
  // Generate realistic GitHub activity blocks
  const activityWeeks = Array.from({ length: 36 }, (_, i) => {
    return Array.from({ length: 7 }, (_, j) => {
      const val = (i * 7 + j) % 5;
      if (val === 0) return "bg-white/[0.05]";
      if (val === 1) return "bg-[#A8242F]/30";
      if (val === 2) return "bg-[#A8242F]/60";
      if (val === 3) return "bg-[#A8242F]/80";
      return "bg-[#A8242F]";
    });
  });

  return (
    <section className="border-b border-white/[0.08] bg-[#0A0A0A] py-24 sm:py-32">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[10px] text-[#A8242F] tracking-[0.18em]">
            04
          </span>
          <span className="font-mono text-[10px] uppercase text-white tracking-[0.18em]">
            Open Source Activity
          </span>
          <div className="flex-grow h-px bg-white/[0.08]" />
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Link */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/70 block mb-2">
              GitHub / Lehonci
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#F2F0EB] tracking-tight leading-snug mb-8">
              Building in public, one commit at a time.
            </h2>
            <div>
              <a
                href="https://github.com/Lehonci"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] text-[#F2F0EB] border-b border-white/20 pb-0.5 hover:text-[#A8242F] hover:border-[#A8242F] transition-all group font-sans"
              >
                <span>View GitHub profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: GitHub Activity Visualizer */}
          <div className="lg:col-span-7 flex flex-col justify-center items-end">
            <div className="w-full max-w-[576px] p-6 bg-[#0D0D0D] border border-white/[0.08]">
              <div className="flex items-center justify-between font-mono text-[10px] text-white/60 mb-4 uppercase tracking-widest">
                <span>Recent Commits & Contributions</span>
                <span className="text-[#A8242F]">Active</span>
              </div>
              <div className="flex gap-1.5 justify-between overflow-x-auto pb-2">
                {activityWeeks.slice(0, 28).map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1.5">
                    {week.map((colorClass, dIdx) => (
                      <div
                        key={dIdx}
                        className={`w-2.5 h-2.5 rounded-[1px] ${colorClass}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
