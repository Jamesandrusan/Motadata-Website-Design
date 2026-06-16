import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { FtAiopsDetail } from "@/components/free-trial/ft-aiops-detail";
import { FtTrust } from "@/components/free-trial/ft-trust";

export default function FreeTrialAiopsPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <FtAiopsDetail />
      <FtTrust />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
