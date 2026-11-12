"use client";

import React, { useEffect, useState, useRef, useMemo, useCallback } from "react";

interface ScrambleTextProps {
  text: string;
  duration?: number; // total animation duration in ms (default 900ms)
  tickSpeed?: number; // interval tick speed in ms (default 45ms)
  delay?: number; // delay before starting in ms
  className?: string;
  animateOn?: "view" | "hover" | "both";
  useTextCharsOnly?: boolean; // scramble using the text's own letters (al.is-a.dev style)
  customChars?: string;
  as?: React.ElementType;
}

export default function DecryptedText({
  text,
  duration = 900,
  tickSpeed = 45,
  delay = 0,
  className = "",
  animateOn = "both",
  useTextCharsOnly = true,
  customChars,
  as: Component = "span",
  ...props
}: ScrambleTextProps & React.HTMLAttributes<HTMLElement>) {
  const [displayText, setDisplayText] = useState<string>(text);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const containerRef = useRef<HTMLElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hasAnimatedRef = useRef<boolean>(false);

  // Pool of characters used for scrambling
  // al.is-a.dev uses the string's own characters for a smooth, organic feel
  const charPool = useMemo(() => {
    if (customChars && customChars.length > 0) {
      return customChars.split("");
    }
    if (useTextCharsOnly) {
      const clean = text.replace(/[\s\t\n]/g, "").split("");
      if (clean.length > 0) return clean;
    }
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
  }, [text, useTextCharsOnly, customChars]);

  const triggerAnimation = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setIsAnimating(true);

    // Each character gets an individual threshold float between 0 and 1
    // (exact mathematical mechanism from al.is-a.dev)
    const thresholds = text.split("").map(() => Math.random());

    timeoutRef.current = setTimeout(() => {
      const startTime = Date.now();

      intervalRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(1, elapsed / duration);

        const next = text
          .split("")
          .map((char, index) => {
            if (char === " " || char === "\n" || char === "\t") {
              return char;
            }
            // Once progress crosses this character's random threshold, it resolves
            if (progress >= thresholds[index]) {
              return char;
            }
            // Otherwise, pick a random letter from the pool
            return charPool[Math.floor(Math.random() * charPool.length)];
          })
          .join("");

        setDisplayText(next);

        if (progress >= 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setDisplayText(text);
          setIsAnimating(false);
          hasAnimatedRef.current = true;
        }
      }, tickSpeed);
    }, delay);
  }, [text, duration, tickSpeed, delay, charPool]);

  // Viewport trigger using IntersectionObserver
  useEffect(() => {
    if (animateOn === "hover") return;

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            triggerAnimation();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [animateOn, triggerAnimation]);

  // Clean up
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if ((animateOn === "hover" || animateOn === "both") && !isAnimating) {
      triggerAnimation();
    }
  };

  return (
    <Component
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      className={`inline-block cursor-default select-none ${className}`}
      aria-label={text}
      {...props}
    >
      <span aria-hidden="true">{displayText}</span>
    </Component>
  );
}
