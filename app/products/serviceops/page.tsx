import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { SOHero } from "@/components/serviceops/so-hero";
import { SOFeaturesGrid } from "@/components/serviceops/so-features-grid";
import { SOSuite } from "@/components/serviceops/so-suite";
import { SOIntellicore } from "@/components/serviceops/so-intellicore";
import { SOPrecisionRoles } from "@/components/serviceops/so-precision-roles";
import { SOImpactStats } from "@/components/serviceops/so-impact-stats";
import { SOTestimonial } from "@/components/serviceops/so-testimonial";
import { SOIndustry } from "@/components/serviceops/so-industry";
import { SOEditions } from "@/components/serviceops/so-editions";
import { SOFuture } from "@/components/serviceops/so-future";
import { SOCta } from "@/components/serviceops/so-cta";
import { SOFaq } from "@/components/serviceops/so-faq";

export default function ServiceOpsPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />

      {/* Hero */}
      <SOHero />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Features Grid */}
      <SOFeaturesGrid />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* The ServiceOps Suite */}
      <SOSuite />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* IntelliCore Engine */}
      <SOIntellicore />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Precision for Every Role */}
      <SOPrecisionRoles />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Measured Impact */}
      <SOImpactStats />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Testimonial */}
      <SOTestimonial />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Industry Solutions */}
      <SOIndustry />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Editions */}
      <SOEditions />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Future */}
      <SOFuture />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* CTA */}
      <SOCta />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* FAQ */}
      <SOFaq />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
