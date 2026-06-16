import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { BrandGuidelinesContent } from "@/components/brand-guidelines/brand-guidelines-content";

export default function BrandGuidelinesPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <BrandGuidelinesContent />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
