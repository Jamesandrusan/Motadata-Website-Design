import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { OOHero } from "@/components/observeops/oo-hero";
import { OOFeaturesGrid } from "@/components/observeops/oo-features-grid";
import { OOSuite } from "@/components/observeops/oo-suite";
import { OOMotastore } from "@/components/observeops/oo-motastore";
import { OOPrecisionRoles } from "@/components/observeops/oo-precision-roles";
import { OOImpactStats } from "@/components/observeops/oo-impact-stats";
import { HIMTestimonial } from "@/components/him/him-testimonial";
import { OOIndustry } from "@/components/observeops/oo-industry";
import { OOEditions } from "@/components/observeops/oo-editions";
import { OOFuture } from "@/components/observeops/oo-future";
import { OOCta } from "@/components/observeops/oo-cta";
import { OOFaq } from "@/components/observeops/oo-faq";

export default function ObserveOpsPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />

      {/* Hero */}
      <OOHero />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Features Grid */}
      <OOFeaturesGrid />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* The ObserveOps Suite */}
      <OOSuite />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Motastore Engine */}
      <OOMotastore />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Precision for Every Role */}
      <OOPrecisionRoles />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Measured Impact */}
      <OOImpactStats />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Testimonial */}
      <HIMTestimonial />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Industry Solutions */}
      <OOIndustry />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Editions */}
      <OOEditions />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Future of IT Operations */}
      <OOFuture />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* CTA */}
      <OOCta />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* FAQ */}
      <OOFaq />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
