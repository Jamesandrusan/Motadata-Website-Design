import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { UseCaseHero } from "@/components/solutions/usecase-hero";
import { UseCaseListing } from "@/components/solutions/usecase-listing";

export default function ByUseCasesPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />

      {/* Hero */}
      <UseCaseHero />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Use Case Listing */}
      <UseCaseListing />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
