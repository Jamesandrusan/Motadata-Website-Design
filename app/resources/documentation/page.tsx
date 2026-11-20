import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { DocHero } from "@/components/documentation/doc-hero";
import { DocProducts } from "@/components/documentation/doc-products";
import { DocCta } from "@/components/documentation/doc-cta";

export default function DocumentationPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />

      {/* Hero */}
      <DocHero />

      {/* Documentation by Product */}
      <DocProducts />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="section-divider" />
      </div>

      {/* CTA */}
      <DocCta />

      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
