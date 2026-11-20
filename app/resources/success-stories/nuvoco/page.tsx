import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { CtaSection } from "@/components/cta-section";
import { NuvocoCaseStudy } from "@/components/success-stories/nuvoco-case-study";

export const metadata: Metadata = {
  title:
    "Nuvoco Vistas Case Study | Unified Infrastructure Monitoring & Service Management with Motadata",
  description:
    "How Nuvoco Vistas, one of India's largest building materials producers, replaced a patchwork of tools with Motadata ObserveOps and ServiceOps to unify infrastructure monitoring and IT service management across 1,000 network devices and 5,000 IT assets.",
};

export default function NuvocoCaseStudyPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <NuvocoCaseStudy />
      <CtaSection>
        <Link
          href="/schedule-demo/aiops"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-label-md font-medium text-foreground transition-opacity hover:opacity-90"
        >
          Get Personalized Demo <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/free-trial/aiops"
          className="inline-flex h-12 items-center justify-center rounded-xl border border-white/40 px-6 text-label-md font-medium text-white transition-colors hover:bg-white/10"
        >
          Start Free Trial
        </Link>
      </CtaSection>
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
