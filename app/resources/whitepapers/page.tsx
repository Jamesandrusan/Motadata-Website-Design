import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { WpHero } from "@/components/whitepapers/wp-hero";
import { WpGrid } from "@/components/whitepapers/wp-grid";

export default function WhitepapersPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <WpHero />
      <WpGrid />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
