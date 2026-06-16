import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { BrHero } from "@/components/brochures/br-hero";
import { BrGrid } from "@/components/brochures/br-grid";

export default function BrochuresPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <BrHero />
      <BrGrid />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
