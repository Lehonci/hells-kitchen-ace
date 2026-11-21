"use client";

import React from "react";
import { motion } from "framer-motion";

interface LineRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  immediate?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

/**
 * Spring-based word/phrase cascade reveal inspired by variant-01.com ("appear-line")
 * and cuewake.app spring physics (stiffness: 75, damping: 20, mass: 1).
 * Uses subtle Y-rise + blur resolve so italic serifs and tight kerning never clip or jitter.
 */
export function LineReveal({
  text,
  className = "",
  delay = 0.05,
  stagger = 0.045,
  immediate = false,
  as = "span",
}: LineRevealProps) {
  const words = text.split(" ");
  const MotionTag = motion[as];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0.001,
      y: 14,
      filter: "blur(5px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 85,
        damping: 20,
        mass: 0.9,
      },
    },
  };

  if (immediate) {
    return (
      <MotionTag
        className={`inline-block ${className}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, idx) => (
          <React.Fragment key={`${word}-${idx}`}>
            <motion.span variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
            {idx < words.length - 1 ? " " : ""}
          </React.Fragment>
        ))}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {words.map((word, idx) => (
        <React.Fragment key={`${word}-${idx}`}>
          <motion.span variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
          {idx < words.length - 1 ? " " : ""}
        </React.Fragment>
      ))}
    </MotionTag>
  );
}

interface SectionRuleProps {
  className?: string;
  delay?: number;
}

/**
 * Architectural hairline divider that draws itself left-to-right on scroll into view.
 */
export function SectionRule({ className = "bg-white/10", delay = 0.1 }: SectionRuleProps) {
  return (
    <motion.div
      className={`flex-grow h-px origin-left ${className}`}
      initial={{ scaleX: 0, opacity: 0.3 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    />
  );
}
