import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { IntHero } from "@/components/integrations/int-hero";
import { IntCategories } from "@/components/integrations/int-categories";

export default function IntegrationsPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />

      {/* Hero */}
      <IntHero />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Category switcher + grid */}
      <IntCategories />

      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
