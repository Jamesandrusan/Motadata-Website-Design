import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { HIMHero } from "@/components/him/him-hero";
import { HIMFeaturesGrid } from "@/components/him/him-features-grid";
import { HIMCapabilitiesTabs } from "@/components/him/him-capabilities-tabs";
import { HIMImpactStats } from "@/components/him/him-impact-stats";
import { HIMTestimonial } from "@/components/him/him-testimonial";
import { HIMWhyMotadata } from "@/components/him/him-why-motadata";
import { HIMEnterpriseVisibility } from "@/components/him/him-enterprise-visibility";
import { HIMIndustrySolutions } from "@/components/him/him-industry-solutions";
import { HIMObserveOpsJourney } from "@/components/him/him-observeops-journey";
import { HIMCta } from "@/components/him/him-cta";
import { HIMFaq } from "@/components/him/him-faq";

export default function HybridInfrastructureMonitoringPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />

      {/* Hero */}
      <HIMHero />

      {/* Divider */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Features Grid */}
      <HIMFeaturesGrid />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Capabilities Tabs */}
      <HIMCapabilitiesTabs />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Impact Stats */}
      <HIMImpactStats />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Testimonial */}
      <HIMTestimonial />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Why Motadata */}
      <HIMWhyMotadata />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Enterprise Visibility */}
      <HIMEnterpriseVisibility />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Industry Solutions */}
      <HIMIndustrySolutions />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* ObserveOps Journey */}
      <HIMObserveOpsJourney />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* FAQ */}
      <HIMFaq />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* CTA */}
      <HIMCta />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
