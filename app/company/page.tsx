import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { CompanyHero } from "@/components/company/company-hero";
import { CompanyMission } from "@/components/company/company-mission";
import { CompanyValues } from "@/components/company/company-values";
import { CompanyLeadership } from "@/components/company/company-leadership";
import { CompanyAwards } from "@/components/company/company-awards";
import { CompanyRecognition } from "@/components/company/company-recognition";
import { CompanyCaseStudies } from "@/components/company/company-case-studies";
import { CompanySecurity } from "@/components/company/company-security";
import { CompanyCta } from "@/components/company/company-cta";

export default function CompanyPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />

      <CompanyHero />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>

      <CompanyMission />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>

      <CompanyValues />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>

      <CompanyLeadership />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>

      <CompanyAwards />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>

      <CompanyRecognition />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>

      <CompanyCaseStudies />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>

      <CompanySecurity />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>

      <CompanyCta />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>

      <Footer />
    </main>
  );
}
