"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="h-[120px] w-full flex items-center justify-center font-mono text-[10px] text-white/30 animate-pulse">
        Loading contributions...
      </div>
    ),
  }
);

export default function BuildingInPublic() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Theme custom untuk warna merah porto kamu
  const theme = {
    light: ["#161b22", "#4c0505", "#7f1d1d", "#b91c1c", "#ef4444"],
    dark: ["#161b22", "#3a0a0d", "#631015", "#8a1922", "#A8242F"],
  };

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

          {/* Right Column: Real GitHub Activity */}
          <div className="lg:col-span-7 flex flex-col justify-center items-end">
            <div className="w-full max-w-[576px] p-6 bg-[#0D0D0D] border border-white/[0.08] overflow-hidden">
              <div className="flex items-center justify-between font-mono text-[10px] text-white/60 mb-6 uppercase tracking-widest">
                <span>Recent Contributions</span>
                <span className="text-[#A8242F]">Live Feed</span>
              </div>

              <div className="flex justify-center github-calendar-container overflow-hidden min-h-[120px] items-center">
                {mounted ? (
                  <GitHubCalendar
                    username="Lehonci"
                    blockSize={10}
                    blockMargin={5}
                    fontSize={10}
                    theme={theme}
                    colorScheme="dark"
                    showColorLegend={false}
                    showTotalCount={false}
                  />
                ) : (
                  <div className="h-[120px] w-full flex items-center justify-center font-mono text-[10px] text-white/30 animate-pulse">
                    Loading contributions...
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
