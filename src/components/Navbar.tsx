"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 90, damping: 20 }}
      className="sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/[0.08]"
    >
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 h-[72px] flex items-center justify-between">
        {/* Left: Brand */}
        <Link
          href="/"
          className="flex items-center gap-3.5 group focus:outline-none"
        >
          <motion.div
            whileHover={{ scale: 1.06, rotate: 90 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="w-8 h-8 border border-white/20 flex items-center justify-center font-sans uppercase tracking-[0.18em] font-medium text-[10px] text-[#F2F0EB] group-hover:border-[#A8242F] group-hover:text-[#A8242F] transition-colors"
          >
            <span className="group-hover:-rotate-90 transition-transform duration-300">
              Z
            </span>
          </motion.div>
          <span className="text-[16px] font-medium tracking-tight text-[#F2F0EB] group-hover:text-white transition-colors">
            Lehonci
          </span>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-[11px] font-sans uppercase tracking-[0.18em] text-white/80">
          <Link
            href="/#work"
            className="relative pb-1 hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#A8242F] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Selected Work
          </Link>
          <Link
            href="/#expertise"
            className="relative pb-1 hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#A8242F] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Expertise
          </Link>
          <Link
            href="/#experience"
            className="relative pb-1 hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#A8242F] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Experience
          </Link>
          <Link
            href="/archive"
            className="relative pb-1 hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#A8242F] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Work Archive
          </Link>
          <Link
            href="/downtime"
            className="relative pb-1 hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#A8242F] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Downtime
          </Link>
        </nav>

        {/* Right: CTA Link */}
        <div className="hidden md:flex items-center justify-end">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.18em] text-[#F2F0EB] border-b border-white/20 pb-0.5 hover:text-[#A8242F] hover:border-[#A8242F] transition-colors group"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#F2F0EB] group-hover:text-[#A8242F] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white/80 hover:text-white"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Scroll-Linked Progress Hairline */}
      <motion.div
        style={{ scaleX }}
        className="h-[1.5px] bg-[#A8242F] origin-left w-full"
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 22 }}
            className="md:hidden overflow-hidden bg-[#0A0A0A] border-b border-white/[0.08]"
          >
            <div className="px-6 py-6 flex flex-col gap-4 text-xs font-sans uppercase tracking-[0.18em]">
              <Link
                href="/#work"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-[#A8242F] uppercase tracking-wider py-1"
              >
                Selected Work
              </Link>
              <Link
                href="/#expertise"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-[#A8242F] uppercase tracking-wider py-1"
              >
                Expertise
              </Link>
              <Link
                href="/#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-[#A8242F] uppercase tracking-wider py-1"
              >
                Experience
              </Link>
              <Link
                href="/archive"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-[#A8242F] uppercase tracking-wider py-1"
              >
                Work Archive
              </Link>
              <Link
                href="/downtime"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white uppercase tracking-wider py-1"
              >
                Downtime
              </Link>
              <div className="pt-4 border-t border-white/[0.08]">
                <Link
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 text-[#A8242F] uppercase tracking-wider font-semibold"
                >
                  <span>Let&apos;s Connect</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
