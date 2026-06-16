import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { WbHero } from "@/components/webinars/wb-hero";
import { WbList } from "@/components/webinars/wb-list";
import { WbCta } from "@/components/webinars/wb-cta";

export default function WebinarsPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <WbHero />
      <WbList />
      <WbCta />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
