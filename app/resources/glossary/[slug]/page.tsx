import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { GlossaryDetail } from "@/components/glossary/glossary-detail";
import { getGlossaryPost, getAllGlossarySlugs } from "@/components/glossary/glossary-posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllGlossarySlugs().map((slug) => ({ slug }));
}

export default async function GlossaryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getGlossaryPost(slug);

  if (!data) notFound();

  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <GlossaryDetail data={data} />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
