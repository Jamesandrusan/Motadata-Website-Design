import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { CMHero } from "@/components/cm/cm-hero";
import { CMWhatIs } from "@/components/cm/cm-what-is";
import { CMWhyMatters } from "@/components/cm/cm-why-matters";
import { CMImpactStats } from "@/components/cm/cm-impact-stats";
import { CMCapabilities } from "@/components/cm/cm-capabilities";
import { CMUseCases } from "@/components/cm/cm-use-cases";
import { CMFAQ } from "@/components/cm/cm-faq";
import { CMCta } from "@/components/cm/cm-cta";
import { HIMTestimonial } from "@/components/him/him-testimonial";

export default function CloudMonitoringPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />

      {/* Hero */}
      <CMHero />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* What is Cloud Monitoring */}
      <CMWhatIs />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Why Cloud Monitoring Matters */}
      <CMWhyMatters />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Impact Stats */}
      <CMImpactStats />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Testimonial */}
      <HIMTestimonial />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Core Capabilities */}
      <CMCapabilities />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Use Cases */}
      <CMUseCases />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* FAQ */}
      <CMFAQ />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* CTA */}
      <CMCta />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
