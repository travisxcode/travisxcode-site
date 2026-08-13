import { AboutSection } from "@/components/about-section";
import { ConnectSection } from "@/components/connect-section";
import { ExperienceList } from "@/components/experience-list";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { WhatIDo } from "@/components/what-i-do";

export default function HomePage() {
  return (
    <main id="content">
      <Hero />
      <WhatIDo />
      <ExperienceList />
      <SelectedWork />
      <AboutSection />
      <ConnectSection />
    </main>
  );
}
