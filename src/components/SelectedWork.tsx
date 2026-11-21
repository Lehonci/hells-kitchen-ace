"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import DecryptedText from "./DecryptedText";
import ScrollReveal from "./ScrollReveal";
import { LineReveal, SectionRule } from "./MotionPrimitives";

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
    repoUrl: "https://github.com/Lehonci/analisis-olist-bigdata",
  },
  {
    index: "02",
    category: "Predictive Modeling",
    title: "Ames Housing",
    description:
      "Analisis data mining dan prediksi harga rumah berbasis R Markdown melalui enam tahapan CRISP-DM.",
    highlight: "End-to-end CRISP-DM report",
    tags: ["R", "ggplot2", "dplyr", "R Markdown"],
    repoUrl: "https://github.com/Lehonci/ames-housing-data-mining",
  },
  {
    index: "03",
    category: "Data Analytics",
    title: "Sleep Quality Insights",
    description:
      "EDA terhadap 374 responden untuk memetakan hubungan tingkat stres, kualitas tidur, dan tekanan darah.",
    highlight: "374 respondent records",
    tags: ["Python", "pandas", "Seaborn", "scikit-learn"],
    repoUrl: "https://github.com/Lehonci/sleep-quality-insights",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="border-b border-white/10 bg-[#0A0A0A] py-24 sm:py-32">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
        {/* Section Label */}
        <ScrollReveal direction="up" distance={14}>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-[10px] text-[#A8242F] tracking-[0.18em]">
              01
            </span>
            <span className="font-mono text-[10px] uppercase text-white tracking-[0.18em]">
              <DecryptedText text="Selected Work" duration={700} />
            </span>
            <SectionRule className="bg-white/10" />
          </div>
        </ScrollReveal>

        {/* Heading & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-white/10 mb-0">
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[73.7px] leading-[0.95] font-normal tracking-[-0.06em] text-[#F2F0EB]">
              <LineReveal text="Systems built to make data move." />
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pl-6">
            <ScrollReveal direction="up" delay={140} distance={14} blur>
              <p className="text-[14px] leading-[24px] text-white/80">
                Selected projects in software engineering and data analytics.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Projects Rows with Staggered Spring & Brutalist Hover Physics */}
        <div className="divide-y divide-white/10 border-b border-white/10">
          {selectedProjects.map((p, idx) => (
            <ScrollReveal key={p.index} delay={80 + idx * 90} distance={22} blur>
              <motion.article
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className="relative py-11 px-4 sm:px-6 -mx-4 sm:-mx-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start hover:bg-white/[0.025] transition-colors duration-300 group"
              >
                {/* Left Accent Marker (Red Hairline on Hover) */}
                <span
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#A8242F] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top pointer-events-none"
                  aria-hidden="true"
                />

                {/* Left Column: Index + Category & Title (5 cols) */}
                <div className="lg:col-span-5 flex items-start gap-6 sm:gap-10">
                  <span className="font-mono text-[10px] text-white/60 group-hover:text-[#A8242F] pt-0.5 w-6 flex-shrink-0 transition-colors tabular-nums">
                    {p.index}
                  </span>
                  <div>
                    <span className="font-sans text-[10px] uppercase text-[#A8242F] tracking-[0.18em] block mb-2 font-medium">
                      {p.category}
                    </span>
                    <h3 className="text-2xl sm:text-[30px] font-normal leading-[1.2] tracking-[-0.03em] text-[#F2F0EB] group-hover:text-white transition-colors">
                      {p.title}
                    </h3>
                  </div>
                </div>

                {/* Middle Column: Description & Highlight (4 cols) */}
                <div className="lg:col-span-4 flex flex-col justify-between pr-4">
                  <p className="text-[14px] leading-[24px] text-white/80 group-hover:text-white/95 transition-colors mb-3">
                    {p.description}
                  </p>
                  <div className="font-mono text-[10px] text-white/50 group-hover:text-white/70 uppercase tracking-[0.15em] transition-colors">
                    {p.highlight}
                  </div>
                </div>

                {/* Right Column: Tags & Arrow button (3 cols) */}
                <div className="lg:col-span-3 flex items-start justify-between lg:justify-end gap-6 pt-0.5">
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-[10px] text-white/50 group-hover:text-white/75 uppercase tracking-[0.14em] lg:justify-end transition-colors">
                    {p.tags.map((t) => (
                      <span key={t} className="hover:text-white transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-11 h-11 border border-white/20 flex items-center justify-center text-[#F2F0EB] group-hover:border-[#A8242F] group-hover:bg-[#A8242F]/10 group-hover:text-[#A8242F] transition-colors flex-shrink-0"
                    aria-label={`View ${p.title} repository`}
                  >
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </motion.a>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Card: The rest of the build log */}
        <ScrollReveal delay={180} distance={20} blur>
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="mt-12 border border-white/10 p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-[#0A0A0A] hover:border-white/25 transition-colors group/card"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40 block mb-2 group-hover/card:text-[#A8242F] transition-colors">
                The rest of the build log
              </span>
              <p className="font-sans text-[14px] text-white/80">
                More experiments, deployed interfaces, and source code.
              </p>
            </div>
            <Link
              href="/archive"
              className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.14em] text-[#F2F0EB] hover:text-[#A8242F] border-b border-white/20 pb-0.5 hover:border-[#A8242F] transition-all flex-shrink-0 group/link"
            >
              <span>See all work</span>
              <span className="transform group-hover/link:translate-x-1.5 transition-transform">→</span>
            </Link>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
