import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { WbWatch } from "@/components/webinars/wb-watch";

export default function WebinarWatchPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <WbWatch />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
