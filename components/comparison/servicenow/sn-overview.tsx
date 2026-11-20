"use client";

import { Info } from "lucide-react";
import { overview } from "@/lib/servicenow-comparison-data";
import { Reveal, SectionHeader } from "./sn-shared";

export function SnOverview() {
  return (
    <section id="overview" className="relative z-10 scroll-mt-28 border-t border-border bg-background py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <Reveal>
          <SectionHeader
            eyebrow="The Contenders"
            title="A quick overview of both ITSM platforms"
          />
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2">
          {/* Motadata */}
          <Reveal>
            <div className="md:border-r md:border-border md:pr-12">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-overline text-primary">Motadata</span>
              </div>
              <h3 className="mt-3 text-heading-lg text-foreground">
                {overview.motadata.name}
              </h3>
              <div className="mt-4 space-y-3">
                {overview.motadata.body.map((p, i) => (
                  <p key={i} className="text-body-sm text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ServiceNow */}
          <Reveal delay={80}>
            <div className="mt-10 border-t border-border pt-10 md:mt-0 md:border-t-0 md:pl-12 md:pt-0">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                <span className="text-overline text-muted-foreground">
                  ServiceNow
                </span>
              </div>
              <h3 className="mt-3 text-heading-lg text-foreground">
                {overview.servicenow.name}
              </h3>
              <div className="mt-4 space-y-3">
                {overview.servicenow.body.map((p, i) => (
                  <p key={i} className="text-body-sm text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Method note — card */}
        <Reveal delay={120}>
          <div className="mt-12 flex gap-4 rounded-2xl border border-border bg-muted/30 p-6 sm:p-7">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Info className="h-5 w-5" />
            </span>
            <div>
              <h4 className="text-label-lg text-foreground">
                {overview.method.title}
              </h4>
              <p className="mt-2 text-body-xs text-muted-foreground">
                {overview.method.body}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
