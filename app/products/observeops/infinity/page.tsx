import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { InfinityVersionedPage } from "@/components/infinity/infinity-versioned-page";

export default function InfinityLaunchPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />

      <InfinityVersionedPage />

      <Footer />
    </main>
  );
}
