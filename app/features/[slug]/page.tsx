import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { FtDetail } from "@/components/features/ft-detail";
import { allFeatures, getFeatureBySlug } from "@/components/features/features-data";

export function generateStaticParams() {
  return allFeatures.map((f) => ({ slug: f.slug }));
}

export default async function FeatureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);

  if (!feature) notFound();

  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <FtDetail slug={slug} />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
