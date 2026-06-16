"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { PTHero } from "./pt-hero";
import { PTFeaturesGrid } from "./pt-features-grid";
import { PTCapabilitiesTabs } from "./pt-capabilities-tabs";
import { PTImpactStats } from "./pt-impact-stats";
import { PTTestimonial } from "./pt-testimonial";
import { PTWhyMotadata } from "./pt-why-motadata";
import { PTEnterpriseVisibility } from "./pt-enterprise-visibility";
import { PTIndustrySolutions } from "./pt-industry-solutions";
import { PTJourney } from "./pt-journey";
import { PTFaq } from "./pt-faq";
import { PTCta } from "./pt-cta";
import type { ProductPageData } from "./types";

function SectionDivider() {
  return (
    <div className="relative z-10 mx-auto max-w-7xl">
      <div className="section-divider" />
    </div>
  );
}

export function ProductPageTemplate({ data }: { data: ProductPageData }) {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <PTHero data={data.hero} />
      <SectionDivider />
      <PTFeaturesGrid data={data.featuresGrid} />
      <SectionDivider />
      <PTCapabilitiesTabs data={data.capabilities} />
      <SectionDivider />
      <PTImpactStats data={data.impactStats} />
      <SectionDivider />
      <PTTestimonial data={data.testimonial} />
      <SectionDivider />
      <PTWhyMotadata data={data.whyMotadata} />
      <SectionDivider />
      <PTEnterpriseVisibility data={data.enterpriseVisibility} />
      <SectionDivider />
      <PTIndustrySolutions data={data.industrySolutions} />
      <SectionDivider />
      <PTJourney data={data.journey} />
      <SectionDivider />
      <PTFaq data={data.faq} />
      <SectionDivider />
      <PTCta data={data.cta} />
      <SectionDivider />
      <Footer />
    </main>
  );
}
