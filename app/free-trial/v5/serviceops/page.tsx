import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { FtDetailV5 } from "@/components/free-trial/ft-detail-v5";
import { FtTrust } from "@/components/free-trial/ft-trust";

export default function FreeTrialV5ServiceopsPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <FtDetailV5 productSlug="serviceops" />
      <FtTrust />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
