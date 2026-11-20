"use client";

import { useId, useState } from "react";
import type { FooterLink } from "@/components/footer-group";

export type FooterTab = { label: string; groups: { title: string; links: FooterLink[] }[] };

/* Mobile/tablet footer navigation: a segmented pill tab bar (named like the navbar menus)
   that shows one category's link groups at a time. Hidden at lg, where the columns show. */
export function FooterTabs({ tabs }: { tabs: FooterTab[] }) {
  const [active, setActive] = useState(0);
  const base = useId();
  const tab = tabs[active];

  return (
    <div className="lg:hidden">
      <div
        role="tablist"
        aria-label="Footer navigation"
        className="-mx-6 flex gap-1 overflow-x-auto px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex gap-1 rounded-full border border-border bg-muted/50 p-1">
          {tabs.map((t, i) => (
            <button
              key={t.label}
              type="button"
              role="tab"
              id={`${base}-tab-${i}`}
              aria-selected={i === active}
              aria-controls={`${base}-panel`}
              onClick={() => setActive(i)}
              className={`h-10 shrink-0 whitespace-nowrap rounded-full px-4 text-label-md transition-colors ${
                i === active
                  ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div
        role="tabpanel"
        id={`${base}-panel`}
        aria-labelledby={`${base}-tab-${active}`}
        className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
      >
        {tab.groups.map((g) => (
          <div key={g.title}>
            <h4 className="text-overline text-muted-foreground/60">{g.title}</h4>
            <ul className="mt-2">
              {g.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="block py-2 text-body-xs text-muted-foreground transition-colors hover:text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
