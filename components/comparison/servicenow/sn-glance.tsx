"use client";

import { verdictCards, glanceRows } from "@/lib/servicenow-comparison-data";
import { Reveal, SectionHeader } from "./sn-shared";

export function SnGlance() {
  return (
    <section id="tldr" className="relative z-10 scroll-mt-28 bg-background py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <Reveal>
          <SectionHeader
            eyebrow="The Bottom Line"
            title="Motadata vs ServiceNow at a glance"
            intro="Neither platform is a universal winner. Here is the short version before the deep dive."
          />
        </Reveal>

        {/* Connected verdict card — Motadata vs competitor + shared note */}
        <Reveal>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border">
            {/* Two columns with VS marker */}
            <div className="relative grid md:grid-cols-2">
              {/* Motadata — left, accent */}
              <div className="border-b border-border bg-primary/[0.04] px-8 py-7 sm:px-12 sm:py-9 md:border-b-0 md:border-r">
                <h3 className="text-heading-md text-foreground">
                  {verdictCards.motadata.name}
                </h3>
                <p className="mt-4 text-body-xs text-muted-foreground">
                  {verdictCards.motadata.body}
                </p>
              </div>

              {/* ServiceNow — right */}
              <div className="bg-card px-8 py-7 sm:px-12 sm:py-9">
                <h3 className="text-heading-md text-foreground">
                  {verdictCards.servicenow.name}
                </h3>
                <p className="mt-4 text-body-xs text-muted-foreground">
                  {verdictCards.servicenow.body}
                </p>
              </div>

              {/* VS badge centered on the divider */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-background bg-primary text-label-sm text-primary-foreground shadow-sm">
                  VS
                </span>
              </div>
            </div>

            {/* Shared note — full-width footer */}
            <div className="border-t border-border bg-muted/20 px-8 py-6 sm:px-12">
              <p className="text-body-xs text-muted-foreground">
                {verdictCards.note}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Glance table — minimalist, boxless */}
        <Reveal delay={80}>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3.5 pr-5 text-label-lg text-foreground">
                    Aspect
                  </th>
                  <th className="px-5 py-3.5 text-label-lg text-primary">
                    Motadata ServiceOps
                  </th>
                  <th className="px-5 py-3.5 text-label-lg text-foreground">
                    ServiceNow ITSM
                  </th>
                </tr>
              </thead>
              <tbody>
                {glanceRows.map((row) => (
                  <tr
                    key={row.aspect}
                    className="border-b border-border/50 transition-colors hover:bg-muted/30"
                  >
                    <th className="py-4 pr-5 text-left align-top text-label-md text-foreground">
                      {row.aspect}
                    </th>
                    <td className="px-5 py-4 align-top text-body-xs text-foreground">
                      {row.motadata}
                    </td>
                    <td className="px-5 py-4 align-top text-body-xs text-muted-foreground">
                      {row.servicenow}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
