import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { GsHero } from "@/components/getting-started/gs-hero";
import { GsPaths } from "@/components/getting-started/gs-paths";
import { GsResources } from "@/components/getting-started/gs-resources";
import { GsUseCases } from "@/components/getting-started/gs-use-cases";
import { GsCta } from "@/components/getting-started/gs-cta";

export default function GettingStartedPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />

      {/* Hero */}
      <GsHero />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Choose Your Path */}
      <GsPaths />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Learning Resources */}
      <GsResources />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* Popular Use Cases */}
      <GsUseCases />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* CTA */}
      <GsCta />

      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
