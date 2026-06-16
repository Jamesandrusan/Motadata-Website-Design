import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { IntDetail } from "@/components/integrations/int-detail";

export default async function IntegrationsDetailPage({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;
  const validProduct = product === "serviceops" ? "serviceops" : "observeops";

  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <IntDetail product={validProduct} />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
