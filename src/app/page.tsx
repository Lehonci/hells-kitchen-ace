import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import BuildingInPublic from "@/components/BuildingInPublic";
import ContactSection from "@/components/ContactSection";

export default function Home() {
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

