"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

interface ProjectItem {
  index: string;
  category: string;
  title: string;
  description: string;
  highlight: string;
  tags: string[];
  repoUrl: string;
}

const figmaProjects: ProjectItem[] = [
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

export default function SelectedWork() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section id="work" className="border-b border-white/[0.08] bg-[#0A0A0A] py-24 sm:py-32">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[10px] text-[#A8242F] tracking-[0.18em]">
            01
          </span>
          <span className="font-mono text-[10px] uppercase text-white tracking-[0.18em]">
            Selected Work
          </span>
          <div className="flex-grow h-px bg-white/[0.08]" />
        </div>

        {/* Heading & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-white/[0.08] mb-4">
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[73.7px] leading-[0.95] font-normal tracking-[-0.06em] text-[#F2F0EB]">
              Systems built to make data move.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pl-6">
            <p className="text-[14px] leading-[24px] text-white">
              Selected projects across streaming data, spatial systems, computer
              vision, and predictive analytics.
            </p>
          </div>
        </div>

        {/* Projects Rows */}
        <div className="divide-y divide-white/[0.08]">
          {figmaProjects.map((p) => (
            <article
              key={p.index}
              className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start hover:bg-white/[0.015] transition-colors group px-2 sm:px-4"
            >
              {/* Index (1 col) */}
              <div className="lg:col-span-1 font-mono text-[10px] text-white/90">
                {p.index}
              </div>

              {/* Title & Category (4 cols) */}
              <div className="lg:col-span-4">
                <span className="font-sans text-[10px] uppercase text-[#A8242F] tracking-[0.18em] block mb-2">
                  {p.category}
                </span>
                <h3 className="text-2xl sm:text-[30px] font-normal leading-[36px] tracking-[-0.04em] text-[#F2F0EB] group-hover:text-white transition-colors">
                  {p.title}
                </h3>
              </div>

              {/* Description & Highlight (4 cols) */}
              <div className="lg:col-span-4">
                <p className="text-[14px] leading-[24px] text-white/90 mb-3">
                  {p.description}
                </p>
                <div className="font-mono text-[10px] text-white tracking-[0.12em] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A8242F]" />
                  <span>{p.highlight}</span>
                </div>
              </div>

              {/* Tags & Arrow button (3 cols) */}
              <div className="lg:col-span-3 flex items-center justify-between lg:justify-end gap-6 pt-2">
                <div className="flex flex-wrap gap-x-4 gap-y-1 font-sans text-[10px] text-white tracking-[0.12em]">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                <a
                  href={p.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-white/30 flex items-center justify-center text-[#F2F0EB] hover:border-[#A8242F] hover:text-[#A8242F] transition-all flex-shrink-0 group/btn"
                  aria-label={`View ${p.title} repository`}
                >
                  <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Archive link */}
        <div className="mt-12 flex justify-end">
          <Link
            href="/archive"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#F2F0EB] hover:text-[#A8242F] transition-colors"
          >
            <span>View complete work archive (07)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
