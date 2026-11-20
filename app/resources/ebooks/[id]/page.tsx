import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { EbDetail } from "@/components/ebooks/eb-detail";
import { ebooks, getEbook } from "@/lib/ebooks-data";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return ebooks.map((e) => ({ id: e.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const eb = getEbook(id);
  if (!eb) return {};
  return { title: `${eb.title} | Motadata Ebook`, description: eb.desc };
}

export default async function EbookDetailPage({ params }: Props) {
  const { id } = await params;
  const eb = getEbook(id);
  if (!eb) notFound();
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <EbDetail eb={eb} />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
