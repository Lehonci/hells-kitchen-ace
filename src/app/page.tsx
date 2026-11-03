"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import BuildingInPublic from "@/components/BuildingInPublic";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  useEffect(() => {
    const scrollToTarget = () => {
      const storedSection = sessionStorage.getItem("scrollToSection");
      const hashSection = window.location.hash
        ? window.location.hash.replace("#", "")
        : null;
      const targetId = storedSection || hashSection;

      if (targetId) {
        if (storedSection) {
          sessionStorage.removeItem("scrollToSection");
        }
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Run right away
    scrollToTarget();

    // Re-check after 150ms and 350ms to ensure full layout mount
    const timer1 = setTimeout(scrollToTarget, 150);
    const timer2 = setTimeout(scrollToTarget, 350);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div>
      <Hero />
      <SelectedWork />
      <Expertise />
      <Experience />
      <BuildingInPublic />
      <ContactSection />
    </div>
  );
}
