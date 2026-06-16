import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { PtHero } from "@/components/partners/pt-hero";
import { PtPortal } from "@/components/partners/pt-portal";
import { PtTypes } from "@/components/partners/pt-types";
import { PtWhy } from "@/components/partners/pt-why";
import { PtBenefits } from "@/components/partners/pt-benefits";
import { PtProgression } from "@/components/partners/pt-progression";
import { PtTiers } from "@/components/partners/pt-tiers";
import { PtCta } from "@/components/partners/pt-cta";

export default function PartnersPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <PtHero />
      <PtPortal />
      <PtTypes />
      <PtWhy />
      <PtBenefits />
      <PtProgression />
      <PtTiers />
      <PtCta />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
