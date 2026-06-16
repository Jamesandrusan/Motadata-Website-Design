import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { CtaSection } from "@/components/cta-section";
import { SsHero } from "@/components/success-stories/ss-hero";
import { SsGrid } from "@/components/success-stories/ss-grid";
import { SsRatings } from "@/components/success-stories/ss-ratings";

export default function SuccessStoriesPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <SsHero />
      <SsGrid />
      <SsRatings />
      <CtaSection />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
