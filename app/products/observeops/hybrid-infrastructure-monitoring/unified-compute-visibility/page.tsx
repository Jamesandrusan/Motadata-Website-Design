import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { UCVHero } from "@/components/ucv/ucv-hero";
import { UCVKeyHighlights } from "@/components/ucv/ucv-key-highlights";
import { UCVComputeIntelligence } from "@/components/ucv/ucv-compute-intelligence";
import { UCVHowItWorks } from "@/components/ucv/ucv-how-it-works";
import { UCVPrecisionRoles } from "@/components/ucv/ucv-precision-roles";
import { UCVVisibilityControl } from "@/components/ucv/ucv-visibility-control";
import { UCVExploreHim } from "@/components/ucv/ucv-explore-him";
import { UCVCta } from "@/components/ucv/ucv-cta";

function SectionDivider() {
  return (
    <div className="relative z-10 mx-auto max-w-7xl">
      <div className="section-divider" />
    </div>
  );
}

export default function UnifiedComputeVisibilityPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />

      {/* Hero */}
      <UCVHero />

      <SectionDivider />

      {/* Key Highlights */}
      <UCVKeyHighlights />

      <SectionDivider />

      {/* From Metrics to Meaningful Compute Intelligence */}
      <UCVComputeIntelligence />

      <SectionDivider />

      {/* How It Works */}
      <UCVHowItWorks />

      <SectionDivider />

      {/* Precision for Every Role */}
      <UCVPrecisionRoles />

      <SectionDivider />

      {/* From Visibility to Control */}
      <UCVVisibilityControl />

      <SectionDivider />

      {/* Continue Exploring */}
      <UCVExploreHim />

      <SectionDivider />

      {/* CTA */}
      <UCVCta />

      <SectionDivider />

      {/* Footer */}
      <Footer />
    </main>
  );
}
