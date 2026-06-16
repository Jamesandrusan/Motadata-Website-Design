import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { DpdpaDetail } from "@/components/dpdpa/dpdpa-detail";

export const metadata: Metadata = {
  title: "DPDPA Compliance | Motadata",
  description:
    "How Motadata's unified observability and service-management platform helps organisations support compliance with India's Digital Personal Data Protection Act (DPDPA), 2023.",
};

export default function DpdpaPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <DpdpaDetail />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
