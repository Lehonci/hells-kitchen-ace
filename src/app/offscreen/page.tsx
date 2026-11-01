"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

interface InterestItem {
  index: string;
  category: string;
  title: string;
  desc: string;
  image: string;
}

const figmaInterests: InterestItem[] = [
  {
    index: "01",
    category: "Stories, worldbuilding, and frame composition",
    title: "Anime, Series & Film",
    desc: "Suka menyelami cerita dengan worldbuilding yang matang, plot twist yang elegan, dan visual sinematografi yang memanjakan mata.",
    image: "/images/cinema.png",
  },
  {
    index: "02",
    category: "Soundtracks for focus and motion",
    title: "Music",
    desc: "Teman saat fokus, perjalanan, debugging, atau sekadar ingin membuat suasana terasa sedikit lebih sinematik.",
    image: "/images/music.png",
  },
  {
    index: "03",
    category: "A small, growing shelf",
    title: "Books",
    desc: "Belum menjadi pembaca paling rajin, tapi selalu terbuka pada buku yang bisa mengubah cara melihat sesuatu.",
    image: "/images/book.png",
  },
  {
    index: "04",
    category: "Play, fail, learn, repeat",
    title: "Games",
    desc: "Ruang untuk eksplorasi, strategi, cerita interaktif, dan menikmati sistem yang dirancang dengan baik.",
    image: "/images/game.png",
  },
];

export default function OffScreenPage() {
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
            <span>Back to professional side</span>
          </Link>
        </div>

        {/* Header */}
        <div className="border-b border-white/[0.08] pb-16 mb-16">
          <div className="font-mono text-[10px] text-[#A8242F] tracking-[0.18em] uppercase mb-4">
            Off-screen
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[73.7px] leading-[0.95] font-normal tracking-[-0.06em] text-[#F2F0EB]">
            Things I enjoy when the laptop is closed.
          </h1>
        </div>

        {/* 2x2 Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {figmaInterests.map((item) => (
            <article
              key={item.index}
              className="bg-[#0D0D0D] border border-white/[0.08] flex flex-col justify-between overflow-hidden"
            >
              {/* Image banner */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-black">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale contrast-125"
                />
                <div className="absolute top-4 left-4 font-mono text-[11px] text-white bg-black/70 px-2 py-0.5 border border-white/20">
                  {item.index}
                </div>
              </div>

              {/* Text content */}
              <div className="p-8">
                <span className="font-sans text-[10px] text-white/70 block mb-1">
                  {item.category}
                </span>
                <h2 className="text-2xl sm:text-[30px] font-normal text-[#F2F0EB] mb-4">
                  {item.title}
                </h2>
                <p className="text-[14px] leading-[1.7] text-white/80 max-w-md">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Closing Quote Banner */}
        <div className="border-t border-b border-white/[0.08] py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/70 block mb-4">
              Recommendations are welcome
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-normal leading-tight tracking-tight text-[#F2F0EB] max-w-3xl">
              Kalau selera kita nyambung, we already have something to talk about.
            </h3>
          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#F2F0EB] border border-white/20 px-6 py-4 hover:border-[#A8242F] hover:text-[#A8242F] transition-all flex-shrink-0"
          >
            <span>Let’s connect</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
