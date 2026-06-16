import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { EvDetail } from "@/components/events/ev-detail";
import { getEventBySlug, getAllEventSlugs } from "@/components/events/ev-event-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllEventSlugs().map((slug) => ({ slug }));
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getEventBySlug(slug);

  if (!data) notFound();

  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <EvDetail data={data} />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
