import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { GlossaryHero } from "@/components/glossary/glossary-hero";
import { GlossaryGrid } from "@/components/glossary/glossary-grid";

export default function GlossaryPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <GlossaryHero />
      <GlossaryGrid />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
