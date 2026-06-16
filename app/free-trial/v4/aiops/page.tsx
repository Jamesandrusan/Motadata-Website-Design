import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { FtDetailV4 } from "@/components/free-trial/ft-detail-v4";
import { FtTrust } from "@/components/free-trial/ft-trust";

export default function FreeTrialV4AiopsPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <FtDetailV4 productSlug="aiops" />
      <FtTrust />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
