import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { SdDemoDetail } from "@/components/schedule-demo/sd-demo-detail";
import { CompanyCaseStudies } from "@/components/company/company-case-studies";

export default function DemoAIOpsPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <SdDemoDetail product="aiops" />
      <CompanyCaseStudies />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
