"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectItem {
  index: string;
  category: string;
  title: string;
  description: string;
  highlight: string;
  tags: string[];
  repoUrl: string;
}

const selectedProjects: ProjectItem[] = [
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
    index: "04",
    category: "Predictive Modeling",
    title: "Ames Housing",
    description:
      "Analisis data mining dan prediksi harga rumah berbasis R Markdown melalui enam tahapan CRISP-DM.",
    highlight: "End-to-end CRISP-DM report",
    tags: ["R", "ggplot2", "dplyr", "R Markdown"],
    repoUrl: "https://github.com/zafiraryani",
  },
  {
    index: "05",
    category: "Data Analytics",
    title: "Sleep Quality Insights",
    description:
      "EDA terhadap 374 responden untuk memetakan hubungan tingkat stres, kualitas tidur, dan tekanan darah.",
    highlight: "374 respondent records",
    tags: ["Python", "pandas", "Seaborn", "scikit-learn"],
    repoUrl: "https://github.com/zafiraryani",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="border-b border-white/10 bg-[#0A0A0A] py-24 sm:py-32">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[10px] text-[#A8242F] tracking-[0.18em]">
            01
          </span>
          <span className="font-mono text-[10px] uppercase text-white tracking-[0.18em]">
            Selected Work
          </span>
          <div className="flex-grow h-px bg-white/10" />
        </div>

        {/* Heading & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-white/10 mb-0">
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[73.7px] leading-[0.95] font-normal tracking-[-0.06em] text-[#F2F0EB]">
              Systems built to make data move.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pl-6">
            <p className="text-[14px] leading-[24px] text-white/60">
              Selected projects across streaming data, spatial systems, computer
              vision, and predictive analytics.
            </p>
          </div>
        </div>

        {/* Projects Rows */}
        <div className="divide-y divide-white/10 border-b border-white/10">
          {selectedProjects.map((p) => (
            <article
              key={p.index}
              className="py-11 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start hover:bg-white/[0.015] transition-colors group"
            >
              {/* Left Column: Index + Category & Title (5 cols) */}
              <div className="lg:col-span-5 flex items-start gap-6 sm:gap-10">
                <span className="font-mono text-[10px] text-white/35 pt-0.5 w-6 flex-shrink-0">
                  {p.index}
                </span>
                <div>
                  <span className="font-sans text-[10px] uppercase text-[#A8242F] tracking-[0.18em] block mb-2">
                    {p.category}
                  </span>
                  <h3 className="text-2xl sm:text-[30px] font-normal leading-[1.2] tracking-[-0.03em] text-[#F2F0EB] group-hover:text-white transition-colors">
                    {p.title}
                  </h3>
                </div>
              </div>

              {/* Middle Column: Description & Highlight (4 cols) */}
              <div className="lg:col-span-4 flex flex-col justify-between pr-4">
                <p className="text-[14px] leading-[24px] text-white/60 mb-3">
                  {p.description}
                </p>
                <div className="font-mono text-[10px] text-white/35 uppercase tracking-[0.15em]">
                  {p.highlight}
                </div>
              </div>

              {/* Right Column: Tags & Arrow button (3 cols) */}
              <div className="lg:col-span-3 flex items-start justify-between lg:justify-end gap-6 pt-0.5">
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-[10px] text-white/45 uppercase tracking-[0.14em] lg:justify-end">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                <a
                  href={p.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-white/20 flex items-center justify-center text-[#F2F0EB] hover:border-[#A8242F] hover:text-[#A8242F] transition-all flex-shrink-0 group/btn"
                  aria-label={`View ${p.title} repository`}
                >
                  <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Card: The rest of the build log */}
        <div className="mt-12 border border-white/10 p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-[#0A0A0A]">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40 block mb-2">
              The rest of the build log
            </span>
            <p className="font-sans text-[14px] text-white/50">
              More experiments, deployed interfaces, and source code.
            </p>
          </div>
          <Link
            href="/archive"
            className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.14em] text-[#F2F0EB] hover:text-[#A8242F] border-b border-white/20 pb-0.5 hover:border-[#A8242F] transition-all flex-shrink-0 group"
          >
            <span>See all work</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
