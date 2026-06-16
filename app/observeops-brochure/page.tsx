import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ObserveOpsBrochureContent } from "@/components/observeops-brochure/observeops-brochure-content";

export default function ObserveOpsBrochurePage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <ObserveOpsBrochureContent />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
