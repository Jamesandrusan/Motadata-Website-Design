import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { TechHero } from "@/components/solutions/tech-hero";
import { TechListing } from "@/components/solutions/tech-listing";

export default function ByTechnologiesPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />

      {/* Hero */}
      <TechHero />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Technology Listing */}
      <TechListing />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
