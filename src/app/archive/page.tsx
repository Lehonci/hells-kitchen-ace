"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

interface ArchiveProject {
  index: string;
  category: string;
  title: string;
  description: string;
  highlight: string;
  tags: string[];
  repoUrl: string;
}

const archiveProjects: ArchiveProject[] = [
  {
    index: "01",
    category: "Data Engineering",
    title: "Olist Big Data Pipeline",
    description:
      "Pipeline transaksi e-commerce bervolume tinggi untuk data cleaning, aggregation, dan customer segmentation berbasis RFM.",
    highlight: "Real-time ingestion architecture",
    tags: ["Kafka", "PySpark", "PostgreSQL", "Docker"],
    repoUrl: "https://github.com/zafiraryani",
  },
  {
    index: "02",
    category: "Spatial Engineering",
    title: "SIREN",
    description:
      "Sistem respons emergensi dan navigasi dengan shortest-path routing, spatial query optimization, dan dashboard dispatch ambulans.",
    highlight: "PostGIS spatial routing",
    tags: ["PostGIS", "QGIS", "Express.js", "Next.js"],
    repoUrl: "https://github.com/zafiraryani",
  },
  {
    index: "03",
    category: "Computer Vision",
    title: "Veriface",
    description:
      "Pipeline analisis citra, 3D passive liveness, dan otomasi laporan serta video berbantuan Gemini API.",
    highlight: "478 facial landmarks tracked",
    tags: ["OpenCV", "MediaPipe", "Gemini", "FFmpeg"],
    repoUrl: "https://github.com/zafiraryani",
  },
  {
    index: "04",
    category: "Predictive Modeling",
    title: "Ames Housing",
    description:
      "Analisis regresi linear multivariat komprehensif terhadap 79 fitur properti untuk memprediksi nilai jual rumah secara akurat.",
    highlight: "Cross-validated RMSE 0.114",
    tags: ["Python", "Scikit-Learn", "Pandas", "Seaborn"],
    repoUrl: "https://github.com/zafiraryani",
  },
  {
    index: "05",
    category: "Data Analytics",
    title: "Sleep Quality Insights",
    description:
      "Studi eksplorasi korelasi multivariat antara durasi tidur, tingkat stres, dan aktivitas fisik berbasis survei gaya hidup.",
    highlight: "K-Means clustering & ANOVA",
    tags: ["R", "ggplot2", "tidyverse", "Quarto"],
    repoUrl: "https://github.com/zafiraryani",
  },
  {
    index: "06",
    category: "Web Development",
    title: "Charmbuddy · bloo.my",
    description:
      "Katalog digital custom craft dan web storefront terintegrasi dengan WhatsApp direct order system.",
    highlight: "Atomic UI architecture",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    repoUrl: "https://github.com/zafiraryani",
  },
  {
    index: "07",
    category: "Augmented Reality",
    title: "NETWORLD AR",
    description:
      "Aplikasi simulasi interaktif untuk visualisasi topologi jaringan komputer 3D di ruang fisik secara real-time.",
    highlight: "ARCore spatial tracking",
    tags: ["Unity", "AR Foundation", "C#", "Blender"],
    repoUrl: "https://github.com/zafiraryani",
  },
];

const categories = [
  "All",
  "Data Engineering",
  "Spatial Engineering",
  "Computer Vision",
  "Predictive Modeling",
  "Data Analytics",
  "Web Development",
  "Augmented Reality",
];

export default function WorkArchivePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered =
    selectedCategory === "All"
      ? archiveProjects
      : archiveProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-20 min-h-screen bg-[#0A0A0A]">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        {/* Back Link */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to main portfolio</span>
          </Link>
        </div>

        {/* Header */}
        <div className="border-b border-white/[0.08] pb-16 mb-16">
          <div className="font-mono text-[10px] text-[#A8242F] tracking-[0.18em] uppercase mb-4">
            Work archive
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[73.7px] leading-[0.95] font-normal tracking-[-0.06em] text-[#F2F0EB] mb-8">
            A growing archive of things I’ve built.
          </h1>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`font-mono text-[10px] uppercase tracking-wider px-3.5 py-1.5 border transition-all ${
                  selectedCategory === c
                    ? "bg-[#F2F0EB] text-[#0A0A0A] border-[#F2F0EB] font-semibold"
                    : "bg-[#0D0D0D] text-white/70 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards with Large Typographic Numbers */}
        <div className="space-y-12">
          {filtered.map((item) => (
            <article
              key={item.index}
              className="p-8 sm:p-14 bg-[#0D0D0D] border border-white/[0.08] relative overflow-hidden group hover:border-white/20 transition-all"
            >
              {/* Massive index number watermark */}
              <div className="absolute right-6 top-0 select-none pointer-events-none font-mono text-[120px] sm:text-[180px] font-bold text-white/[0.02] group-hover:text-[#A8242F]/[0.04] transition-colors leading-none">
                {item.index}
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#A8242F] block mb-2">
                    {item.category}
                  </span>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] uppercase text-white/80 bg-white/[0.04] px-2 py-0.5 border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-normal leading-tight text-[#F2F0EB] mb-4">
                    {item.title}
                  </h2>
                  <p className="text-[14px] leading-relaxed text-white/90 mb-4">
                    {item.description}
                  </p>
                  <div className="font-mono text-[11px] text-white tracking-[0.12em] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A8242F]" />
                    <span>{item.highlight}</span>
                  </div>
                </div>

                <div className="lg:col-span-3 flex justify-start lg:justify-end">
                  <a
                    href={item.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#F2F0EB] border border-white/20 px-4 py-2.5 hover:border-[#A8242F] hover:text-[#A8242F] transition-all"
                  >
                    <span>Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
