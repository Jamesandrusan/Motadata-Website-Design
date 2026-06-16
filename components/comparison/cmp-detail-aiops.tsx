"use client";

import { Globe, Brain, Database, BarChart3, Monitor } from "lucide-react";
import type { ComparisonData } from "@/lib/comparison-data";

const icons = [Globe, Brain, Database, BarChart3, Monitor];

export function CmpDetailAiops({ data }: { data: ComparisonData }) {
  return (
    <section className="relative z-10 py-20 border-t border-border">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">

          {/* Left — sticky CTA */}
          <div className="lg:sticky lg:top-28">
            <p className="mb-3 text-overline text-primary">
              AIOps Advantage
            </p>
            <h2 className="text-heading-xl lg:text-4xl">
              Why Motadata&apos;s AIOps Reigns Supreme
            </h2>
            <p className="mt-4 text-body-md text-muted-foreground">
              Motadata AIOps is loved by IT teams to consolidate their monitoring tools. The ability
              to scale to process billions of metrics and terabytes of log data makes Motadata one of
              the top observability platforms.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-6 text-label-md text-primary-foreground transition-opacity hover:opacity-90"
            >
              {data.aiopsCta}
            </a>
          </div>

          {/* Right — connected boxes */}
          <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border">
            {data.aiopsFeatures.map((f, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="bg-card p-6">
                  <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </span>
                  <p className="mb-1.5 text-lg font-semibold text-foreground">{f.title}</p>
                  <p className="text-body-xs text-muted-foreground">{f.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
