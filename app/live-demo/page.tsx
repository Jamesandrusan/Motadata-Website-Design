"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { LdPageContent } from "@/components/live-demo/ld-page-content";

export default function LiveDemoPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <LdPageContent />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
