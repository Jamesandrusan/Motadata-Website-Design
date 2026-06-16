import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { FtDetailV2 } from "@/components/free-trial/ft-detail-v2";
import { FtTrust } from "@/components/free-trial/ft-trust";

export default function FreeTrialV2ServiceopsPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <FtDetailV2 productSlug="serviceops" />
      <FtTrust />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
