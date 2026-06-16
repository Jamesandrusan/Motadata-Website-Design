import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { FtServiceopsDetail } from "@/components/free-trial/ft-serviceops-detail";
import { FtTrust } from "@/components/free-trial/ft-trust";

export default function FreeTrialServiceopsPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <FtServiceopsDetail />
      <FtTrust />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
