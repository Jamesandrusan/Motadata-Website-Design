import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { CareersHero } from "@/components/careers/careers-hero";
import { CareersPerks } from "@/components/careers/careers-perks";
import { CareersOpenings } from "@/components/careers/careers-openings";

import { CareersWhyJoin } from "@/components/careers/careers-why-join";
import { CareersCelebration } from "@/components/careers/careers-celebration";
import { CareersCta } from "@/components/careers/careers-cta";

export default function CareersPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <CareersHero />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>
      <CareersWhyJoin />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>
      <CareersPerks />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>
      <CareersOpenings />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>
      <CareersCelebration />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>
      <CareersCta />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>
      <Footer />
    </main>
  );
}
