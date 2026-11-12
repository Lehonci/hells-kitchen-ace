"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number; // Delay in milliseconds
  duration?: number; // Duration in milliseconds
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number; // Distance in pixels
  className?: string;
  threshold?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 700,
  direction = "up",
  distance = 24,
  className = "",
  threshold = 0.15,
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [threshold, once]);

  // Compute translation transform
  let transformHidden = "none";
  if (direction === "up") transformHidden = `translateY(${distance}px)`;
  if (direction === "down") transformHidden = `translateY(-${distance}px)`;
  if (direction === "left") transformHidden = `translateX(${distance}px)`;
  if (direction === "right") transformHidden = `translateX(-${distance}px)`;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : transformHidden,
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
