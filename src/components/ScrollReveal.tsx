"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number; // Delay in milliseconds (converted to seconds for Framer Motion)
  duration?: number; // Duration in milliseconds (used when spring=false)
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number; // Distance in pixels
  className?: string;
  threshold?: number;
  once?: boolean;
  immediate?: boolean;
  blur?: boolean;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  distance = 22,
  className = "",
  threshold = 0.15,
  once = true,
  immediate = false,
  blur = false,
}: ScrollRevealProps) {
  const initialX =
    direction === "left" ? distance : direction === "right" ? -distance : 0;
  const initialY =
    direction === "up" ? distance : direction === "down" ? -distance : 0;

  const initial = {
    opacity: 0.001,
    x: initialX,
    y: initialY,
    ...(blur ? { filter: "blur(6px)" } : {}),
  };

  const target = {
    opacity: 1,
    x: 0,
    y: 0,
    ...(blur ? { filter: "blur(0px)" } : {}),
  };

  const transition = {
    type: "spring" as const,
    stiffness: 72,
    damping: 20,
    mass: 1,
    delay: delay / 1000,
  };

  if (immediate) {
    return (
      <motion.div
        className={className}
        initial={initial}
        animate={target}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={target}
      viewport={{ once, amount: threshold }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
