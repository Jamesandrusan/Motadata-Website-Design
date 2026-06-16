import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { CtaSection } from "@/components/cta-section";
import { CmpDetailHero } from "@/components/comparison/cmp-detail-hero";
import { CmpDetailAlt } from "@/components/comparison/cmp-detail-alt";
import { CmpDetailAiops } from "@/components/comparison/cmp-detail-aiops";
import { CmpDetailTable } from "@/components/comparison/cmp-detail-table";
import { CmpDetailFeatures } from "@/components/comparison/cmp-detail-features";
import { getComparison } from "@/lib/comparison-data";

export default async function ComparisonDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getComparison(slug);
  if (!data) notFound();

  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <CmpDetailHero data={data} />
      <CmpDetailAlt data={data} />
      <CmpDetailAiops data={data} />
      <CmpDetailTable data={data} />
      <CmpDetailFeatures data={data} />
      <CtaSection
        title={data.switchCta.title}
        description={data.switchCta.description}
      >
        <a
          href="#"
          className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-label-md text-foreground transition-opacity hover:opacity-90"
        >
          Start Free Trial
        </a>
        <a
          href="#"
          className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 text-label-md text-white transition-colors hover:bg-white/20"
        >
          Book a Demo
        </a>
      </CtaSection>
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
