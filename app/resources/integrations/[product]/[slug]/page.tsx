import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { IntItemDetail } from "@/components/integrations/int-item-detail";
import { ServiceOpsDetailTemplate } from "@/components/integrations/serviceops-detail/sd-page-template";
import { serviceOpsIntegrationPages } from "@/data/integrations/serviceops";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

/* ObserveOps KPI-style pages */
const observeOpsSlugs = ["windows-server"];

/* ServiceOps marketing-style pages */
const serviceOpsSlugs = Object.keys(serviceOpsIntegrationPages);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ product: string; slug: string }>;
}): Promise<Metadata> {
  const { product, slug } = await params;
  if (product === "serviceops") {
    const data = serviceOpsIntegrationPages[slug];
    if (data) return { title: data.meta.title, description: data.meta.description };
  }
  return { title: "Integration Detail | Motadata" };
}

export default async function IntegrationItemPage({
  params,
}: {
  params: Promise<{ product: string; slug: string }>;
}) {
  const { product, slug } = await params;

  /* ServiceOps marketing pages */
  if (product === "serviceops" && serviceOpsSlugs.includes(slug)) {
    const data = serviceOpsIntegrationPages[slug];
    return (
      <main className="relative min-h-screen">
        <InteractiveGrid />
        <Navbar />
        <ServiceOpsDetailTemplate data={data} />
        <ThemeSwitcher />
        <Footer />
      </main>
    );
  }

  /* ObserveOps KPI pages */
  if (product === "observeops" && observeOpsSlugs.includes(slug)) {
    return (
      <main className="relative min-h-screen">
        <InteractiveGrid />
        <Navbar />
        <IntItemDetail product="observeops" slug={slug} />
        <ThemeSwitcher />
        <Footer />
      </main>
    );
  }

  notFound();
}
