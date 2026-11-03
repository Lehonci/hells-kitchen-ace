"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const leadershipExperience = [
  {
    period: "2024—2025",
    role: "Public Relations Staff",
    org: "IT Fest Competition & Micro Technology Education",
    desc: "Mengelola promosi acara, komunikasi eksternal, briefing teknis peserta, serta koordinasi juri dan tamu.",
  },
  {
    period: "2025",
    role: "Social Initiative Project",
    org: "Etika Profesi — IPB University",
    desc: "Mengelola publikasi digital dan media sosial untuk kampanye inisiatif sosial kunjungan ke panti asuhan.",
  },
  {
    period: "2024—2025",
    role: "Member",
    org: "KEMALA IPB",
    desc: "Anggota Keluarga Mahasiswa Lampung di Sekolah Vokasi IPB University.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-white/[0.08] bg-[#0A0A0A] py-20 sm:py-24"
    >
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[10px] text-[#A8242F] tracking-[0.18em]">
            03
          </span>
          <span className="font-mono text-[10px] uppercase text-white tracking-[0.18em]">
            Experience
          </span>
          <div className="flex-grow h-px bg-white/[0.08]" />
        </div>

        {/* Content Split: Left (Heading + Get to know me) & Right (Timeline Articles) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[73.7px] leading-[0.95] font-normal tracking-[-0.06em] text-[#F2F0EB] mb-6">
                Beyond the terminal.
              </h2>
              <p className="text-[14px] leading-[24px] text-white/50 max-w-sm mb-8">
                Ada juga versi saya yang hidup di luar project board, dataset, dan
                deadline.
              </p>
              <Link
                href="/downtime"
                className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.14em] text-[#F2F0EB] border-b border-white/30 pb-1 hover:text-[#A8242F] hover:border-[#A8242F] transition-all group"
              >
                <span>Get to know me</span>
                <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Articles */}
          <div className="lg:col-span-8 divide-y divide-white/[0.08] border-t lg:border-t-0 border-white/[0.08]">
            {leadershipExperience.map((item, idx) => (
              <article
                key={idx}
                className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-white/[0.015] transition-colors"
              >
                {/* Period (2 cols) */}
                <div className="md:col-span-2 font-mono text-[10px] text-[#A8242F]">
                  {item.period}
                </div>

                {/* Role & Org (5 cols) */}
                <div className="md:col-span-5">
                  <h3 className="text-[20px] font-normal text-[#F2F0EB] mb-1 tracking-tight">
                    {item.role}
                  </h3>
                  <p className="text-[12px] text-white/70 leading-relaxed">
                    {item.org}
                  </p>
                </div>

                {/* Description (5 cols) */}
                <div className="md:col-span-5">
                  <p className="text-[14px] leading-[1.7] text-white">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
