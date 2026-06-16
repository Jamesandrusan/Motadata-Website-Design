import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { PrHero } from "@/components/press-releases/pr-hero";
import { PrFeatured } from "@/components/press-releases/pr-featured";
import { PrGrid } from "@/components/press-releases/pr-grid";
import { PrCta } from "@/components/press-releases/pr-cta";

export default function PressReleasesPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <PrHero />
      <PrFeatured />
      <PrGrid />
      <PrCta />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
