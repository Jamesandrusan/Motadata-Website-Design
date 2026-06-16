import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { CtaSection } from "@/components/cta-section";
import { DlHero } from "@/components/downloads/dl-hero";
import { DlFeatured } from "@/components/downloads/dl-featured";
import { DlGrid } from "@/components/downloads/dl-grid";
import { DlRequirements } from "@/components/downloads/dl-requirements";

export default function DownloadsPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <DlHero />
      <DlFeatured />
      <DlGrid />
      <DlRequirements />
      <CtaSection
        title="Need Help with Installation?"
        description="Our documentation and support team are here to help you get started quickly."
      >
        <a
          href="#"
          className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-label-md text-foreground transition-opacity hover:opacity-90"
        >
          View Documentation
        </a>
        <a
          href="#"
          className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 text-label-md text-white transition-colors hover:bg-white/20"
        >
          Contact Support
        </a>
      </CtaSection>
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
