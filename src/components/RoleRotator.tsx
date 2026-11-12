"use client";

import React, { useState, useEffect } from "react";

interface RoleRotatorProps {
  roles?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
  cursorClassName?: string;
}

const DEFAULT_ROLES = [
  "Software Engineering / Data Analytics",
];

export default function RoleRotator({
  roles = DEFAULT_ROLES,
  typingSpeed = 65,
  deletingSpeed = 35,
  pauseTime = 1800,
  className = "",
  cursorClassName = "text-[#A8242F]",
}: RoleRotatorProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];

    if (!isDeleting && displayText === current) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={`inline-flex items-center font-mono ${className}`}>
      <span>{displayText}</span>
      <span
        className={`ml-1 font-bold inline-block animate-pulse-dot ${cursorClassName}`}
        aria-hidden="true"
      >
        _
      </span>
    </span>
  );
}
