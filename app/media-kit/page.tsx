import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { MediaKitContent } from "@/components/media-kit/media-kit-content";

export default function MediaKitPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <MediaKitContent />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
