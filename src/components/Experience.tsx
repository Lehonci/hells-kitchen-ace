"use client";

import React from "react";

const leadershipExperience = [
  {
    period: "2024—2025",
    role: "Public Relations Staff",
    org: "IT Fest Competition & Micro Technology Education",
    desc: "Mengelola promosi acara, komunikasi eksternal, briefing teknis peserta, serta koordinasi juri dan tamu.",
  },
  {
    period: "2025",
    role: "Class Representative",
    org: "Etika Profesi — TPL 61B, IPB University",
    desc: "Menjembatani komunikasi akademis dosen–mahasiswa dan memimpin proyek sosial kunjungan tim ke panti asuhan.",
  },
  {
    period: "2024—2025",
    role: "Member",
    org: "KEMALA IPB",
    desc: "Berpartisipasi dalam kegiatan Keluarga Mahasiswa Lampung di Sekolah Vokasi IPB University.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-white/[0.08] bg-[#0A0A0A] py-24 sm:py-32">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[10px] text-[#A8242F] tracking-[0.18em]">
            03
          </span>
          <span className="font-mono text-[10px] uppercase text-white tracking-[0.18em]">
            Leadership & Experience
          </span>
          <div className="flex-grow h-px bg-white/[0.08]" />
        </div>

        {/* Content Split: Left (Heading) & Right (Timeline Articles) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[73.7px] leading-[0.95] font-normal tracking-[-0.06em] text-[#F2F0EB]">
              Beyond the terminal.
            </h2>
          </div>

          {/* Right Column: 3 Articles */}
          <div className="lg:col-span-8 divide-y divide-white/[0.08] border-t lg:border-t-0 border-white/[0.08]">
            {leadershipExperience.map((item, idx) => (
              <article
                key={idx}
                className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-white/[0.015] transition-colors"
              >
                {/* Period (2 cols) */}
                <div className="md:col-span-2 font-mono text-[10px] text-white">
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
