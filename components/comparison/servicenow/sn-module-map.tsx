"use client";

import { Check, Minus, TriangleAlert } from "lucide-react";
import {
  moduleIntro,
  moduleRows,
  moduleTakeaway,
  type CellStatus,
} from "@/lib/servicenow-comparison-data";
import { Reveal, SectionHeader } from "./sn-shared";

const statusStyles: Record<
  CellStatus,
  { dot: string; icon: typeof Check }
> = {
  good: { dot: "text-emerald-500", icon: Check },
  warn: { dot: "text-amber-500", icon: TriangleAlert },
  bad: { dot: "text-rose-500", icon: Minus },
};

function Cell({
  text,
  status,
  highlight = false,
}: {
  text: string;
  status: CellStatus;
  highlight?: boolean;
}) {
  const { dot, icon: Icon } = statusStyles[status];
  return (
    <td className="px-5 py-4 align-top">
      <div className="flex gap-2.5">
        <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${dot}`} />
        <span
          className={`text-body-xs ${
            highlight ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          {text}
        </span>
      </div>
    </td>
  );
}

export function SnModuleMap() {
  return (
    <section
      id="module-map"
      className="relative z-10 scroll-mt-28 border-t border-border bg-background py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Feature Packaging"
            title="A full module map, not a checklist"
            intro={moduleIntro}
          />
        </Reveal>

        {/* Legend */}
        <Reveal delay={60}>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="inline-flex items-center gap-2 text-caption text-muted-foreground">
              <Check className="h-4 w-4 text-emerald-500" /> Included / core
            </span>
            <span className="inline-flex items-center gap-2 text-caption text-muted-foreground">
              <TriangleAlert className="h-4 w-4 text-amber-500" /> Higher tier or
              paid add-on
            </span>
            <span className="inline-flex items-center gap-2 text-caption text-muted-foreground">
              <Minus className="h-4 w-4 text-rose-500" /> Not native / separate
              product
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3.5 pr-5 text-label-lg text-foreground">
                    Module / Capability
                  </th>
                  <th className="px-5 py-3.5 text-label-lg text-foreground">
                    ServiceNow ITSM
                  </th>
                  <th className="px-5 py-3.5 text-label-lg text-primary">
                    Motadata ServiceOps
                  </th>
                </tr>
              </thead>
              <tbody>
                {moduleRows.map((row) => (
                  <tr
                    key={row.capability}
                    className="border-b border-border/50 transition-colors hover:bg-muted/30"
                  >
                    <th className="py-4 pr-5 text-left align-top text-label-md text-foreground">
                      {row.capability}
                    </th>
                    <Cell
                      text={row.servicenow.text}
                      status={row.servicenow.status}
                    />
                    <Cell
                      text={row.motadata.text}
                      status={row.motadata.status}
                      highlight
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 border-l-2 border-primary pl-5">
            <p className="text-body-sm text-foreground">{moduleTakeaway}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
