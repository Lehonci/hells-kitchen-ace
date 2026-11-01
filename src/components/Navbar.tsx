"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-white/[0.08]">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 h-[72px] flex items-center justify-between">
        {/* Left: Brand */}
        <Link
          href="/"
          className="flex items-center gap-3.5 group focus:outline-none"
        >
          <div className="w-8 h-8 border border-white/20 flex items-center justify-center font-sans uppercase tracking-[0.18em] font-medium text-[10px] text-[#F2F0EB] group-hover:border-[#A8242F] group-hover:text-[#A8242F] transition-colors">
            Z
          </div>
          <span className="text-[16px] font-medium tracking-tight text-[#F2F0EB]">
            Lehonci
          </span>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-[11px] font-sans uppercase tracking-[0.18em] text-white">
          <Link
            href="/#work"
            className="hover:text-[#A8242F] transition-colors"
          >
            Selected Work
          </Link>
          <Link
            href="/#expertise"
            className="hover:text-[#A8242F] transition-colors"
          >
            Expertise
          </Link>
          <Link
            href="/#experience"
            className="hover:text-[#A8242F] transition-colors"
          >
            Experience
          </Link>
          <Link
            href="/archive"
            className="hover:text-[#A8242F] transition-colors"
          >
            Work Archive
          </Link>
          <Link
            href="/offscreen"
            className="hover:text-[#A8242F] transition-colors"
          >
            Off-Screen
          </Link>
        </nav>

        {/* Right: CTA Link */}
        <div className="hidden md:flex items-center justify-end">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.18em] text-[#F2F0EB] border-b border-white/20 pb-0.5 hover:text-[#A8242F] hover:border-[#A8242F] transition-colors group"
          >
            <span>Let's Connect</span>
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-white/[0.08] px-6 py-6 flex flex-col gap-4 text-xs font-sans uppercase tracking-[0.18em]">
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
            href="/offscreen"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/80 hover:text-white uppercase tracking-wider py-1"
          >
            Off-Screen
          </Link>
          <div className="pt-4 border-t border-white/[0.08]">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 text-[#A8242F] uppercase tracking-wider font-semibold"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
