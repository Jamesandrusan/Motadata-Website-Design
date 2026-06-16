import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { SdHero } from "@/components/schedule-demo/sd-hero";
import { SdPlans } from "@/components/schedule-demo/sd-plans";
import { CompanyCaseStudies } from "@/components/company/company-case-studies";

export default function ScheduleDemoPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <SdHero />
      <SdPlans />
      <CompanyCaseStudies />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
