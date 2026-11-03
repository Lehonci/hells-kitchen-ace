"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

interface ArchiveProject {
  category: string;
  title: string;
  description: string;
  highlight: string;
  tags: string[];
  repoUrl: string;
  statusText: string;
  previewType: string;
}

const archiveProjects: ArchiveProject[] = [
  {
    category: "Predictive Modeling",
    title: "Ames Housing",
    description:
      "Analisis data mining dan prediksi harga rumah berbasis R Markdown melalui enam tahapan CRISP-DM.",
    highlight: "End-to-end CRISP-DM report",
    tags: ["R", "ggplot2", "dplyr", "R Markdown"],
    repoUrl: "https://github.com/Lehonci/ames-housing-data-mining",
    statusText: "Preview being prepared",
    previewType: "Preview workspace",
  },
  {
    category: "Full-stack Commerce",
    title: "Charmbuddy",
    description:
      "Decoupled e-commerce platform with a Next.js storefront, Laravel FilamentPHP operations layer, and serverless PostgreSQL.",
    highlight: "Multi-platform deployment",
    tags: ["Next.js", "Laravel", "FilamentPHP", "Neon"],
    repoUrl: "https://github.com/Lehonci",
    statusText: "Open live preview",
    previewType: "Live deployment",
  },
  {
    category: "Extended Reality",
    title: "NETWORLD AR",
    description:
      "Interactive 3D learning experience that introduces computer network hardware through image-target augmented reality.",
    highlight: "Interactive hardware learning",
    tags: ["Unity 6.3", "Vuforia", "C#", "3D AR"],
    repoUrl: "https://github.com/Lehonci",
    statusText: "Preview being prepared",
    previewType: "Preview workspace",
  },
  {
    category: "Data Engineering",
    title: "Olist Big Data Pipeline",
    description:
      "Pipeline transaksi e-commerce bervolume tinggi untuk data cleaning, aggregation, dan customer segmentation berbasis RFM.",
    highlight: "Real-time ingestion architecture",
    tags: ["Kafka", "PySpark", "PostgreSQL", "Docker"],
    repoUrl: "https://github.com/Lehonci/analisis-olist-bigdata",
    statusText: "Preview being prepared",
    previewType: "Preview workspace",
  },
  {
    category: "Spatial Engineering",
    title: "SIREN",
    description:
      "Sistem respons emergensi dan navigasi dengan shortest-path routing, spatial query optimization, dan dashboard dispatch ambulans.",
    highlight: "PostGIS spatial routing",
    tags: ["PostGIS", "QGIS", "Express.js", "Next.js"],
    repoUrl: "https://github.com/Lehonci",
    statusText: "Preview being prepared",
    previewType: "Preview workspace",
  },
  {
    category: "Data Analytics",
    title: "Sleep Quality Insights",
    description:
      "EDA terhadap 374 responden untuk memetakan hubungan tingkat stres, kualitas tidur, dan tekanan darah.",
    highlight: "374 respondent records",
    tags: ["Python", "pandas", "Seaborn", "scikit-learn"],
    repoUrl: "https://github.com/Lehonci/sleep-quality-insights",
    statusText: "Preview being prepared",
    previewType: "Preview workspace",
  },
  {
    category: "Computer Vision",
    title: "Veriface",
    description:
      "Pipeline analisis citra, 3D passive liveness, dan otomasi laporan serta video berbantuan Gemini API.",
    highlight: "478 facial landmarks tracked",
    tags: ["OpenCV", "MediaPipe", "Gemini", "FFmpeg"],
    repoUrl: "https://github.com/Lehonci/Veriface",
    statusText: "Preview being prepared",
    previewType: "Preview workspace",
  },
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function WorkArchivePage() {
  const [selectedLetter, setSelectedLetter] = useState("ALL");

  const availableLetters = new Set(
    archiveProjects.map((p) => p.title[0].toUpperCase())
  );

  const filtered =
    selectedLetter === "ALL"
      ? archiveProjects
      : archiveProjects.filter(
          (p) => p.title[0].toUpperCase() === selectedLetter
        );

  return (
    <div className="py-16 sm:py-24 min-h-screen bg-[#0A0A0A]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
        {/* Back Link */}
        <div className="mb-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/60 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </Link>
        </div>

        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[10px] text-[#A8242F] tracking-[0.18em] uppercase">
            Archive /
          </span>
          <span className="font-mono text-[10px] uppercase text-white tracking-[0.18em]">
            All Selected Work
          </span>
          <div className="flex-grow h-px bg-white/10" />
        </div>

        {/* Big Display Title & Description Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-20 border-b border-white/10 mb-16">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[0.94] font-normal tracking-[-0.05em] text-[#F2F0EB]">
              A growing archive of things <br />
              I’ve <span className="font-serif italic text-[#A8242F]">built.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pl-6">
            <p className="text-[14px] leading-[24px] text-white/60">
              Data systems, experiments, web products, and spatial interfaces.
              Each entry keeps the result and its source close together.
            </p>
          </div>
        </div>

        {/* Alphabetical Filter Bar */}
        <div className="mb-20 text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-6">
            {filtered.length} {filtered.length === 1 ? "project" : "projects"} / Browse alphabetically
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-mono text-[11px] uppercase tracking-wider select-none">
            <button
              onClick={() => setSelectedLetter("ALL")}
              className={`px-1.5 py-0.5 transition-colors ${
                selectedLetter === "ALL"
                  ? "text-[#A8242F] border-b-2 border-[#A8242F] font-bold"
                  : "text-[#F2F0EB] hover:text-[#A8242F]"
              }`}
            >
              ALL
            </button>

            {alphabet.map((letter) => {
              const hasProjects = availableLetters.has(letter);
              const isSelected = selectedLetter === letter;

              return (
                <button
                  key={letter}
                  disabled={!hasProjects}
                  onClick={() => setSelectedLetter(letter)}
                  className={`px-1.5 py-0.5 transition-colors ${
                    isSelected
                      ? "text-[#A8242F] border-b-2 border-[#A8242F] font-bold"
                      : hasProjects
                      ? "text-[#F2F0EB] hover:text-[#A8242F] cursor-pointer"
                      : "text-white/20 cursor-default"
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Articles List (Figma 2-Column Cards) */}
        <div className="space-y-16">
          {filtered.map((item) => (
            <article
              key={item.title}
              className="border border-white/10 bg-[#0D0D0D] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group hover:border-white/20 transition-all"
            >
              {/* Left Column: Preview Workspace Window */}
              <div className="lg:col-span-6 bg-[#0A0A0A] border border-white/10 overflow-hidden flex flex-col justify-between min-h-[280px] sm:min-h-[320px] relative">
                {/* Window Title Bar */}
                <div className="h-9 px-4 border-b border-white/10 flex items-center justify-between bg-black/40">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B0000]" />
                  </div>
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                    {item.previewType}
                  </span>
                </div>

                {/* Window Canvas Body */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between relative bg-gradient-to-br from-[#121212] via-[#0D0D0D] to-[#0A0A0A]">
                  {/* Red accent graphic lines */}
                  <div className="space-y-2 select-none pointer-events-none mb-14">
                    <div className="w-32 h-px bg-[#8B0000]/60" />
                    <div className="w-20 h-px bg-[#8B0000]/40" />
                    <div className="w-10 h-px bg-[#8B0000]/25" />
                  </div>

                  {/* Bottom details in preview canvas */}
                  <div className="relative z-10">
                    <span className="font-mono text-[10px] uppercase text-white/45 tracking-[0.16em] block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-normal text-[#F2F0EB] tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Right Column: Project Details & Action Links */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full py-2">
                <div>
                  {/* Top metadata row */}
                  <div className="font-mono text-[11px] mb-3">
                    <span className="text-[#A8242F] font-bold uppercase tracking-[0.14em]">
                      {item.highlight}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-normal leading-[1.2] text-[#F2F0EB] tracking-[-0.03em] mb-4">
                    {item.title}
                  </h2>

                  {/* Description */}
                  <p className="text-[14px] text-white/60 leading-[1.7] mb-6">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/45 mb-8">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions Row */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-white/50">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        item.statusText === "Open live preview"
                          ? "bg-emerald-500 animate-pulse"
                          : "bg-[#8B0000]"
                      }`}
                    />
                    <span>{item.statusText}</span>
                  </div>

                  <a
                    href={item.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.12em] text-[#F2F0EB] hover:text-[#A8242F] border-b border-white/20 pb-0.5 hover:border-[#A8242F] transition-all group/link"
                  >
                    <span>View source code</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
