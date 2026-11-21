"use client";

import React, { useEffect, useState, useRef } from "react";

function isPointOverText(el: HTMLElement, x: number, y: number): boolean {
  if (typeof document === "undefined") return false;
  const range = document.createRange();
  for (let i = 0; i < el.childNodes.length; i++) {
    const node = el.childNodes[i];
    if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
      range.selectNodeContents(node);
      const rects = range.getClientRects();
      for (let j = 0; j < rects.length; j++) {
        const r = rects[j];
        if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) {
          return true;
        }
      }
    }
  }
  return false;
}

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const centerRef = useRef<HTMLDivElement | null>(null);
  const auraRef = useRef<HTMLDivElement | null>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const auraPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef<number | null>(null);
  const lastTouchTime = useRef<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Support both standard mice/trackpads and Windows laptops with touchscreens
    const hasFinePointer =
      window.matchMedia("(any-pointer: fine)").matches ||
      window.matchMedia("(pointer: fine)").matches;

    if (!hasFinePointer) return;

    setMounted(true);
    document.documentElement.classList.add("custom-cursor-active");

    const updateHoverState = (target: HTMLElement | null, x: number, y: number) => {
      if (!target) {
        setIsHovered(false);
        return;
      }

      // 1. Links with href, buttons, and form controls
      if (
        target.closest(
          "a[href], button, input, textarea, select, [role='button']"
        )
      ) {
        setIsHovered(true);
        return;
      }

      // 2. Images
      if (target.closest("img, picture")) {
        setIsHovered(true);
        return;
      }

      // 3. Actual visible text glyphs (ignores empty padding/space in block elements)
      if (isPointOverText(target, x, y)) {
        setIsHovered(true);
        return;
      }

      setIsHovered(false);
    };

    const onMouseMove = (e: MouseEvent) => {
      // Ignore emulated mousemove events right after touch interaction
      if (Date.now() - lastTouchTime.current < 500) return;

      document.documentElement.classList.add("custom-cursor-active");
      mousePos.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);

      // Snap center plus (+) crosshair immediately (0 latency)
      if (centerRef.current) {
        centerRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Initialize trailing circle position on first move
      if (auraPos.current.x === -100 && auraPos.current.y === -100) {
        auraPos.current = { x: e.clientX, y: e.clientY };
      }

      updateHoverState(e.target as HTMLElement | null, e.clientX, e.clientY);
    };

    const onTouchStart = () => {
      lastTouchTime.current = Date.now();
      setIsVisible(false);
      document.documentElement.classList.remove("custom-cursor-active");
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Smooth physics trailing loop for the circular border & fill
    const render = () => {
      const lerp = 0.22;
      auraPos.current.x += (mousePos.current.x - auraPos.current.x) * lerp;
      auraPos.current.y += (mousePos.current.y - auraPos.current.y) * lerp;

      if (auraRef.current) {
        auraRef.current.style.transform = `translate3d(${auraPos.current.x}px, ${auraPos.current.y}px, 0)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Trailing Circle Border (Idle: red outline only -> Hover text/img/btn/link: adds ~15% red fill) */}
      <div
        ref={auraRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[9998] transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ willChange: "transform" }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ease-out border-[1.5px] ${
            isClicked
              ? "w-9 h-9 bg-[#A8242F]/25 border-[#A8242F] scale-90"
              : isHovered
              ? "w-10 h-10 bg-[#A8242F]/15 border-[#A8242F] shadow-[0_0_16px_rgba(168,36,47,0.22)] scale-100"
              : "w-8 h-8 bg-transparent border-[#A8242F]/75 scale-100"
          }`}
        />
      </div>

      {/* Primary Center Cursor: Plus (+) when idle -> Solid Circle Dot when hovering */}
      <div
        ref={centerRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ willChange: "transform" }}
      >
        <div
          className={`relative -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 flex items-center justify-center transition-transform duration-200 ease-out ${
            isClicked ? "scale-75" : "scale-100"
          }`}
        >
          {/* Idle: Crisp Plus (+) Crosshair */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ease-out ${
              isHovered
                ? "opacity-0 scale-0 rotate-45"
                : "opacity-100 scale-100 rotate-0"
            }`}
          >
            <span className="absolute w-3.5 h-[1.5px] bg-[#F2F0EB]/90" />
            <span className="absolute h-3.5 w-[1.5px] bg-[#F2F0EB]/90" />
          </div>

          {/* Hover: Solid Round Dot */}
          <span
            className={`absolute w-2 h-2 rounded-full bg-[#A8242F] transition-all duration-200 ease-out ${
              isHovered ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          />
        </div>
      </div>
    </>
  );
}
