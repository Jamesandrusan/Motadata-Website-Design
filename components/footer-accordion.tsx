"use client";

import { useId, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import type { FooterLink } from "@/components/footer-group";

export type FooterSection = { label: string; groups: { title: string; links: FooterLink[] }[] };

/* Mobile/tablet footer navigation: one soft card per top-level category (named like the
   navbar menus). The card shows what it holds; tapping it grows the card to show that
   category's link groups. One card open at a time. Hidden at lg, where the columns show. */
export function FooterAccordion({ sections }: { sections: FooterSection[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const base = useId();

  return (
    <div className="space-y-3 lg:hidden">
      {sections.map((sec, i) => {
        const isOpen = open === i;
        const btnId = `${base}-btn-${i}`;
        const panelId = `${base}-panel-${i}`;
        return (
          <div
            key={sec.label}
            className={`rounded-2xl border px-5 transition-colors duration-200 ${
              isOpen ? "border-border bg-card shadow-sm" : "border-border/60 bg-muted/40"
            }`}
          >
            <h3 className="m-0">
              <button
                type="button"
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-16 w-full items-center justify-between gap-4 py-4 text-left"
              >
                <span className="min-w-0">
                  <span className="block text-label-lg text-foreground">{sec.label}</span>
                  <span className="mt-0.5 block truncate text-caption text-muted-foreground">
                    {sec.groups.map((g) => g.title).join(" · ")}
                  </span>
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-primary" : "text-muted-foreground"
                  }`}
                  strokeWidth={1.75}
                  aria-hidden
                />
              </button>
            </h3>

            {/* Height animates via the grid-rows 0fr → 1fr technique */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden" inert={!isOpen}>
                <div className="grid grid-cols-1 gap-6 border-t border-border/50 pb-5 pt-4 sm:grid-cols-2">
                  {sec.groups.map((g) => (
                    <div key={g.title}>
                      <h4 className="text-[11px] font-bold uppercase leading-snug tracking-widest text-muted-foreground/60">{g.title}</h4>
                      <ul className="mt-1.5">
                        {g.links.map((l) => (
                          <li key={l.label}>
                            <a
                              href={l.href}
                              className="group flex items-center justify-between gap-3 py-2 text-body-xs text-muted-foreground transition-colors hover:text-primary"
                            >
                              <span>{l.label}</span>
                              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
