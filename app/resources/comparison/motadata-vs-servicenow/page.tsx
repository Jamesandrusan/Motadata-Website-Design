import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { SnHero } from "@/components/comparison/servicenow/sn-hero";
import { SnScope } from "@/components/comparison/servicenow/sn-scope";
import { SnNav } from "@/components/comparison/servicenow/sn-nav";
import { SnGlance } from "@/components/comparison/servicenow/sn-glance";
import { SnOverview } from "@/components/comparison/servicenow/sn-overview";
import { SnModuleMap } from "@/components/comparison/servicenow/sn-module-map";
import { SnDeepDive } from "@/components/comparison/servicenow/sn-deep-dive";
import { SnDecision } from "@/components/comparison/servicenow/sn-decision";
import { SnRecognition } from "@/components/comparison/servicenow/sn-recognition";
import { SnFaq } from "@/components/comparison/servicenow/sn-faq";

export const metadata: Metadata = {
  title: "How to Choose Between Motadata and ServiceNow | Motadata ServiceOps",
  description:
    "A 2026 head-to-head comparison of Motadata ServiceOps and ServiceNow ITSM: module packaging, asset and patch management, AI, deployment, scalability, and total cost of ownership.",
};

export default function MotadataVsServiceNowPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <SnHero />
      <SnScope />
      <SnNav />
      <SnGlance />
      <SnOverview />
      <SnModuleMap />
      <SnDeepDive />
      <SnRecognition />
      <SnDecision />
      <SnFaq />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
