"use client";

import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[0.08] py-8">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-4 font-mono text-[10px] text-white/60 uppercase tracking-[0.14em]">
        {/* Left: Copyright */}
        <div>© 2026 Lehonci</div>

        {/* Right: Back to top button */}
        <button
          onClick={scrollToTop}
          className="hover:text-[#A8242F] transition-colors flex items-center gap-1.5 focus:outline-none group"
          aria-label="Scroll back to top"
        >
          <span>Back to top</span>
          <span className="transform group-hover:-translate-y-0.5 transition-transform">
            ↑
          </span>
        </button>
      </div>
    </footer>
  );
}
