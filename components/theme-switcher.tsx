"use client";

import { useState, useEffect } from "react";

/*
  Hero Brand Archetype palettes:
  Bold, commanding, powerful — think Nike, FedEx, Marvel.
  Each theme sets --primary, --ring, --gradient-from, --gradient-to.
  Everything on the page reads from these CSS variables.
*/

const themes = [
  {
    name: "Coral",
    swatch: "#f17463",
    primary: "7 84% 67%",
    gradientFrom: "7 84% 60%",
    gradientTo: "350 75% 55%",
  },
  {
    name: "Commander",
    swatch: "#da4a3a",
    primary: "6 72% 54%",
    gradientFrom: "6 72% 50%",
    gradientTo: "340 65% 45%",
  },
  {
    name: "Titan",
    swatch: "#1d4ed8",
    primary: "226 71% 48%",
    gradientFrom: "226 71% 45%",
    gradientTo: "250 65% 42%",
  },
  {
    name: "Obsidian",
    swatch: "#18181b",
    primary: "240 6% 10%",
    gradientFrom: "240 6% 10%",
    gradientTo: "220 10% 22%",
  },
  {
    name: "Valor",
    swatch: "#9f1239",
    primary: "343 88% 35%",
    gradientFrom: "343 88% 32%",
    gradientTo: "10 70% 40%",
  },
  {
    name: "Forge",
    swatch: "#c2410c",
    primary: "21 90% 40%",
    gradientFrom: "21 90% 38%",
    gradientTo: "38 92% 45%",
  },
  {
    name: "Imperial",
    swatch: "#a855f7",
    primary: "271 81% 65%",
    gradientFrom: "271 81% 56%",
    gradientTo: "310 70% 50%",
  },
  {
    name: "Apex",
    swatch: "#0891b2",
    primary: "192 91% 37%",
    gradientFrom: "192 91% 34%",
    gradientTo: "210 80% 42%",
  },
  {
    name: "Crown",
    swatch: "#b45309",
    primary: "32 95% 37%",
    gradientFrom: "32 95% 34%",
    gradientTo: "15 80% 38%",
  },
  {
    name: "Stealth",
    swatch: "#475569",
    primary: "215 19% 35%",
    gradientFrom: "215 19% 30%",
    gradientTo: "240 10% 20%",
  },
  {
    name: "Crimson",
    swatch: "#dc2626",
    primary: "0 72% 51%",
    gradientFrom: "0 72% 46%",
    gradientTo: "330 65% 42%",
  },
];

export function ThemeSwitcher() {
  const [active, setActive] = useState(0); // Default to "Coral" theme
  const [open, setOpen] = useState(false);

  function apply(index: number) {
    setActive(index);
    const t = themes[index];
    const root = document.documentElement;

    // These 4 variables drive the ENTIRE page color
    root.style.setProperty("--primary", t.primary);
    root.style.setProperty("--ring", t.primary);
    root.style.setProperty("--gradient-from", t.gradientFrom);
    root.style.setProperty("--gradient-to", t.gradientTo);
  }

  // Apply default theme on mount
  useEffect(() => {
    apply(0); // Apply Coral theme on load
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-[100] flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow-lg transition-transform hover:scale-110"
        title="Open theme switcher"
      >
        <span className="h-4 w-4 rounded-full" style={{ background: themes[active].swatch }} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-1/2 z-[100] -translate-x-1/2">
      <div className="flex items-center gap-1.5 rounded-2xl border bg-white/95 px-4 py-3 shadow-xl backdrop-blur-lg">
        <span className="mr-1.5 text-overline-sm text-muted-foreground">
          Hero
        </span>

        <div className="flex items-center gap-1">
          {themes.map((t, i) => (
            <button
              key={t.name}
              onClick={() => apply(i)}
              title={t.name}
              className="group relative flex flex-col items-center"
            >
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full border-2 transition-all ${
                  active === i ? "border-foreground scale-110" : "border-transparent hover:scale-105"
                }`}
              >
                <span
                  className="h-4 w-4 rounded-full"
                  style={{ background: t.swatch }}
                />
              </span>
              <span
                className={`mt-0.5 text-[9px] font-medium transition-opacity ${
                  active === i ? "text-foreground opacity-100" : "text-muted-foreground opacity-0 group-hover:opacity-100"
                }`}
              >
                {t.name}
              </span>
            </button>
          ))}
        </div>

        <button
          onClick={() => setOpen(false)}
          className="ml-2 flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          title="Minimize"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 5h6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
