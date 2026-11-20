import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { CtaSection } from "@/components/cta-section";
import { BrDetail } from "@/components/brochures/br-detail";
import { brochures, getBrochure } from "@/lib/brochures-data";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return brochures.filter((b) => b.detail).map((b) => ({ id: b.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const br = getBrochure(id);
  if (!br?.detail) return {};
  return { title: `${br.title} | Motadata Brochure`, description: br.desc };
}

export default async function BrochureDetailPage({ params }: Props) {
  const { id } = await params;
  const br = getBrochure(id);
  if (!br?.detail) notFound();
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <BrDetail br={{ ...br, detail: br.detail }} />
      <CtaSection />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
