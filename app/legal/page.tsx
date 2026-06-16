import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { LegalDetail } from "@/components/legal/legal-detail";

export default function LegalPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <LegalDetail />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
