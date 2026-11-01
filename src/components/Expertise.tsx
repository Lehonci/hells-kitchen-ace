"use client";

import React from "react";

const capabilities = [
  {
    index: "01",
    title: "Data Analytics & Modeling",
    subtitle: "Turning raw records into clear, defensible insights.",
    stack: "Python · R · SQL · pandas · NumPy · scikit-learn · EDA · CRISP-DM",
  },
  {
    index: "02",
    title: "Data Engineering",
    subtitle: "Designing reliable pipelines for data in motion.",
    stack:
      "PySpark · Apache Spark · Kafka · Docker · PostgreSQL · Real-time processing",
  },
  {
    index: "03",
    title: "Spatial Engineering & WebGIS",
    subtitle: "Making location data queryable, fast, and useful.",
    stack: "PostGIS · QGIS · Supabase · pgRouting · Leaflet · OpenLayers",
  },
  {
    index: "04",
    title: "AI, Computer Vision & Automation",
    subtitle: "Connecting vision models and LLMs into practical workflows.",
    stack:
      "OpenCV · MediaPipe · Gemini API · Prompt Engineering · FFmpeg · WhisperX",
  },
  {
    index: "05",
    title: "Software, Web & AR Development",
    subtitle: "Building dependable interfaces and immersive digital experiences.",
    stack: "TypeScript · Next.js · React · Tailwind CSS · REST API · Unity · C#",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="border-b border-white/[0.08] bg-[#0A0A0A] py-24 sm:py-32">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[10px] text-[#A8242F] tracking-[0.18em]">
            02
          </span>
          <span className="font-mono text-[10px] uppercase text-white tracking-[0.18em]">
            Technical Capabilities
          </span>
          <div className="flex-grow h-px bg-white/[0.08]" />
        </div>

        {/* Content Split: Left (Heading + Badge) & Right (5 Rows) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (roughly 4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between min-h-[400px]">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[73.7px] leading-[0.95] font-normal tracking-[-0.06em] text-[#F2F0EB]">
              Tools are only as good as the questions.
            </h2>

            {/* Circular Explore/Build Badge */}
            <div className="mt-16 w-32 h-32 border border-white/20 rounded-full flex items-center justify-center p-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#F2F0EB] text-center">
                Explore / Build
              </span>
            </div>
          </div>

          {/* Right Column (8 cols): 5 Horizontal Rows */}
          <div className="lg:col-span-8 divide-y divide-white/[0.08] border-t lg:border-t-0 border-white/[0.08]">
            {capabilities.map((item) => (
              <div
                key={item.index}
                className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-start hover:bg-white/[0.015] transition-colors"
              >
                {/* Index */}
                <div className="md:col-span-1 font-mono text-[10px] text-white">
                  {item.index}
                </div>

                {/* Title & Subtitle */}
                <div className="md:col-span-5">
                  <h3 className="text-[20px] font-normal text-[#F2F0EB] mb-1 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[12px] text-white/70 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                {/* Tools & Tech Stack */}
                <div className="md:col-span-6">
                  <p className="text-[12px] text-white leading-[1.8] font-sans">
                    {item.stack}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
