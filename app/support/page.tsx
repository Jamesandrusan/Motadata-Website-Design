import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { SupportHero } from "@/components/support/support-hero";
import { SupportChannels } from "@/components/support/support-channels";
import { SupportResources } from "@/components/support/support-resources";
import { SupportPlans } from "@/components/support/support-plans";
import { SupportFaq } from "@/components/support/support-faq";
import { SupportCta } from "@/components/support/support-cta";
import { CompanyCaseStudies } from "@/components/company/company-case-studies";

export default function SupportPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <SupportHero />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>
      <SupportChannels />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>
      <SupportResources />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>
      <CompanyCaseStudies />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>
      <SupportPlans />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>
      <SupportFaq />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>
      <SupportCta />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>
      <Footer />
    </main>
  );
}
