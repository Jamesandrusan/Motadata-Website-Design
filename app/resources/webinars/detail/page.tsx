import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { WbDetail } from "@/components/webinars/wb-detail";

export default function WebinarDetailPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <WbDetail />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
