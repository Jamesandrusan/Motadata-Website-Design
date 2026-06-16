import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { PlHero } from "@/components/partner-locator/pl-hero";
import { PlList } from "@/components/partner-locator/pl-list";
import { PlCta } from "@/components/partner-locator/pl-cta";

export default function PartnerLocatorPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <PlHero />
      <PlList />
      <PlCta />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
