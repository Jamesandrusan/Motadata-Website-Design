import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { WpDetail } from "@/components/whitepapers/wp-detail";
import { whitepapers, getWhitepaper } from "@/lib/whitepapers-data";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return whitepapers.map((w) => ({ id: w.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const wp = getWhitepaper(id);
  if (!wp) return {};
  return { title: `${wp.title} | Motadata Whitepaper`, description: wp.desc };
}

export default async function WhitepaperDetailPage({ params }: Props) {
  const { id } = await params;
  const wp = getWhitepaper(id);
  if (!wp) notFound();
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <WpDetail wp={wp} />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
