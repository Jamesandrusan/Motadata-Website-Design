import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { EbHero } from "@/components/ebooks/eb-hero";
import { EbGrid } from "@/components/ebooks/eb-grid";

export default function EbooksPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <EbHero />
      <EbGrid />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
