import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { CorporatePresentationContent } from "@/components/corporate-presentation/corporate-presentation-content";

export default function CorporatePresentationPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <CorporatePresentationContent />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
