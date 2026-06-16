import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ServiceOpsBrochureContent } from "@/components/serviceops-brochure/serviceops-brochure-content";

export default function ServiceOpsBrochurePage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <ServiceOpsBrochureContent />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
