import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { EvHero } from "@/components/events/ev-hero";
import { EvEvents } from "@/components/events/ev-events";
import { EvCta } from "@/components/events/ev-cta";

export default function EventsPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <EvHero />
      <EvEvents />
      <EvCta />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
