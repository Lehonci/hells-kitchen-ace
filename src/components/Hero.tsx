"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import DecryptedText from "./DecryptedText";
import RoleRotator from "./RoleRotator";
import ScrollReveal from "./ScrollReveal";
import { LineReveal } from "./MotionPrimitives";

export default function Hero() {
  const [timeString, setTimeString] = useState<string>("");
  const sectionRef = useRef<HTMLElement | null>(null);

  // Scroll-linked parallax for the brutalist concrete texture
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const months = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ];
      const month = months[now.getMonth()];
      const year = now.getFullYear();

      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      setTimeString(`${day} ${month} ${year} • ${hours}:${minutes}:${seconds} WIB`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="border-b border-white/10 bg-[#0A0A0A] relative"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[654px]">
          {/* Left Column (8 cols in Figma) */}
          <div className="lg:col-span-8 pt-14 pb-10 px-6 sm:px-10 lg:px-14 flex flex-col justify-between border-l border-r border-b lg:border-b-0 border-white/10 relative">
            {/* Red plus crosshair marker centered on the left border */}
            <motion.div
              initial={{ scale: 0, rotate: -90, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.25 }}
              className="absolute top-[80px] -left-[6.5px] pointer-events-none select-none z-20"
            >
              <div className="relative w-[13px] h-[13px]">
                <span className="absolute top-[6px] left-0 w-[13px] h-[1px] bg-[#8B0000]" />
                <span className="absolute top-0 left-[6px] w-[1px] h-[13px] bg-[#8B0000]" />
              </div>
            </motion.div>

            <div>
              {/* Top Row: Location & Status */}
              <ScrollReveal immediate direction="down" distance={10} delay={50}>
                <div className="flex items-center justify-between font-sans text-[10px] uppercase tracking-[0.18em] mb-8">
                  <span className="text-white/50">
                    <DecryptedText text="Bogor, Indonesia" duration={700} />
                  </span>
                  <span className="flex items-center gap-2 text-[#D9D9D9]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B0000] inline-block animate-pulse-dot" />
                    <DecryptedText text="Open to internship" duration={750} />
                  </span>
                </div>
              </ScrollReveal>

              {/* Sub-label: Dynamic Role Rotator with Blinking Red Cursor */}
              <ScrollReveal immediate direction="up" delay={120} distance={12}>
                <div className="font-mono text-[11px] text-white/55 uppercase tracking-[0.2em] mb-4">
                  <RoleRotator />
                </div>
              </ScrollReveal>

              {/* Display Heading: Instrument Serif + Manrope with Spring Blur Cascade */}
              <h1 className="select-none tracking-[-0.075em]">
                <motion.span
                  initial={{ opacity: 0.001, y: 24, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    type: "spring",
                    stiffness: 75,
                    damping: 20,
                    mass: 1,
                    delay: 0.14,
                  }}
                  className="font-serif italic text-[#9F1D28] text-6xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[141px] leading-[0.85] font-normal block"
                >
                  Zafira
                </motion.span>
                <span className="font-sans font-normal text-[#F2F0EB] text-6xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[141px] leading-[0.88] block mt-1 sm:mt-2">
                  <LineReveal
                    text="Ryani Putri."
                    immediate
                    delay={0.22}
                    stagger={0.08}
                  />
                </span>
              </h1>
            </div>

            {/* Bottom Statement Row with Hairline Draw + Spring Reveal */}
            <div className="pt-10 mt-14 relative">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-0 inset-x-0 h-px bg-white/10 origin-left"
                aria-hidden="true"
              />
              <ScrollReveal immediate direction="up" delay={340} distance={18} blur>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-5">
                    <h2 className="text-[22px] sm:text-[24px] font-normal text-[#F2F0EB] leading-[1.2] tracking-tight">
                      Code with purpose, data with direction.
                    </h2>
                  </div>
                  <div className="md:col-span-7 flex flex-col justify-between">
                    <p className="text-[14px] text-white/60 leading-[1.7] mb-6">
                      Mahasiswi IPB University yang berfokus
                      pada data analytics dan Software Engineering.
                    </p>
                    <div>
                      <Link
                        href="/#work"
                        className="inline-flex items-center gap-2 text-[11px] text-[#F2F0EB] border-b border-white/30 pb-0.5 hover:text-[#A8242F] hover:border-[#A8242F] transition-colors group font-sans uppercase tracking-[0.12em]"
                      >
                        <span>Explore selected work</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Column (4 cols in Figma): Full-bleed concrete image sidebar with parallax */}
          <div className="lg:col-span-4 relative flex flex-col justify-between border-l lg:border-l-0 border-r border-white/10 min-h-[500px] lg:min-h-[654px] overflow-hidden">
            {/* Abstract Brutalist Concrete Background Image with Scroll Parallax */}
            <motion.div
              style={{ y: bgY, scale: bgScale }}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1.04 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 z-0 will-change-transform"
            >
              <Image
                src="/images/hero-brutalist.png"
                alt="Abstract concrete blocks in black and white"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover object-center"
              />
              {/* Subtle dark tint overlay */}
              <div className="absolute inset-0 bg-black/25 pointer-events-none" />
            </motion.div>

            {/* Top metadata strip */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 90, damping: 20, delay: 0.25 }}
              className="relative z-10 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-[#F2F0EB] px-5 sm:px-6 h-[54px] border-b border-white/25 bg-black/25 backdrop-blur-[2px]"
            >
              <span>
                <DecryptedText text="Portofolio / 2026" duration={700} />
              </span>
              <span className="tabular-nums">
                {timeString || "01 NOV 2026 • --:--:-- WIB"}
              </span>
            </motion.div>

            {/* Middle open space */}
            <div className="relative z-0 flex-grow pointer-events-none" />

            {/* Bottom area: Current Target on left + Rotating Red Stamp on right */}
            <div className="relative z-10 flex items-end justify-between">
              {/* Current Target card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.38 }}
                className="w-[240px] max-w-[65%] p-5 sm:p-6 bg-[#0A0A0A]/95 backdrop-blur-sm border-t border-r border-white/20"
              >
                <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/45 block mb-1">
                  Current target
                </span>
                <p className="text-[13px] sm:text-[14px] font-normal text-[#F2F0EB] leading-snug">
                  <DecryptedText
                    text="Data Analyst / Data Engineer Internship"
                    duration={850}
                    delay={450}
                  />
                </p>
              </motion.div>

              {/* Red Circle Stamp Graphic with continuous slow ambient rotation (variant-01 spin style) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.45 }}
                className="p-4 sm:p-5 select-none pointer-events-none"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 sm:w-20 sm:h-20 relative"
                >
                  <svg
                    viewBox="0 0 80 80"
                    className="w-full h-full text-[#8B0000] stroke-current fill-none stroke-[0.8] opacity-85"
                  >
                    <circle cx="40" cy="40" r="39" />
                    <circle
                      cx="40"
                      cy="40"
                      r="28"
                      strokeWidth="0.6"
                      strokeDasharray="3 3"
                      opacity="0.6"
                    />
                    <path
                      d="M40 8 L40 72 M8 40 L72 40"
                      strokeWidth="0.6"
                      opacity="0.4"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
