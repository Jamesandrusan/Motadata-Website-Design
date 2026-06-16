import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { CtaSection } from "@/components/cta-section";
import { CmpHero } from "@/components/comparison/cmp-hero";
import { CmpGrid } from "@/components/comparison/cmp-grid";
import { CmpInfo } from "@/components/comparison/cmp-info";

export default function ComparisonPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <CmpHero />
      <CmpGrid />
      <CmpInfo />
      <CtaSection
        title="Still Have Questions?"
        description="Talk to our experts to get a personalized comparison based on your specific requirements and use cases."
      >
        <a
          href="#"
          className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-label-md text-foreground transition-opacity hover:opacity-90"
        >
          Schedule a Call
        </a>
        <a
          href="#"
          className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 text-label-md text-white transition-colors hover:bg-white/20"
        >
          Request Demo
        </a>
      </CtaSection>
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
