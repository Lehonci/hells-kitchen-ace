"use client";

import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[0.08] py-8">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[10px] text-white/70">
        {/* Left: Copyright */}
        <div>© 2026 Lehonci</div>

        {/* Right: Exact links from Figma */}
        <div className="flex flex-wrap items-center gap-6">
          <a
            href="https://github.com/zafiraryani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#A8242F] transition-colors"
          >
            GitHub
          </a>
          <span>LinkedIn — available on request</span>
          <span>Instagram — available on request</span>
          <button
            onClick={scrollToTop}
            className="text-white hover:text-[#A8242F] transition-colors focus:outline-none"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
