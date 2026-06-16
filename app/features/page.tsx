import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { FtGrid } from "@/components/features/ft-grid";

export default function FeaturesPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <FtGrid />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
