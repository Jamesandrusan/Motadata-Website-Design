"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { FtHero } from "@/components/free-trial/ft-hero";
import { FtPlans } from "@/components/free-trial/ft-plans";
import { FtPlansV2 } from "@/components/free-trial/ft-plans-v2";
import { FtPlansV3 } from "@/components/free-trial/ft-plans-v3";
import { FtPlansV4 } from "@/components/free-trial/ft-plans-v4";
import { FtPlansV5 } from "@/components/free-trial/ft-plans-v5";
import { FtTrust } from "@/components/free-trial/ft-trust";

const options = [
  { id: 1, label: "Option 1", desc: "Two Cards" },
  { id: 2, label: "Option 2", desc: "Tabbed View" },
  { id: 3, label: "Option 3", desc: "Comparison" },
  { id: 4, label: "Option 4", desc: "Accordion" },
  { id: 5, label: "Option 5", desc: "Step Wizard" },
];

export default function FreeTrialPage() {
  const [selected, setSelected] = useState(1);

  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />

      {/* Option Switcher — small absolute pill */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="flex gap-0.5 rounded-lg border border-border bg-background/90 p-0.5 shadow-lg backdrop-blur-md">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelected(opt.id)}
              className={`flex h-6 w-6 items-center justify-center rounded-md text-[10px] font-bold transition-all ${
                selected === opt.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {opt.id}
            </button>
          ))}
        </div>
      </div>

      {/* Full page content based on selection */}
      {selected === 1 && (
        <>
          <FtHero />
          <FtPlans />
          <FtTrust />
        </>
      )}
      {selected === 2 && <FtPlansV2 />}
      {selected === 3 && <FtPlansV3 />}
      {selected === 4 && <FtPlansV4 />}
      {selected === 5 && <FtPlansV5 />}

      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
