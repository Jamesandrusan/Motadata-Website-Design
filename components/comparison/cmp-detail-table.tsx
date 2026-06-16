"use client";

import { Check, X } from "lucide-react";
import type { ComparisonData } from "@/lib/comparison-data";

export function CmpDetailTable({ data }: { data: ComparisonData }) {
  return (
    <section className="relative z-10 py-20 border-t border-border">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <p className="mb-3 text-overline text-primary">
            Quick Overview
          </p>
          <h2 className="text-heading-xl lg:text-4xl">
            {data.tableTitle}
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border">
          {/* Header */}
          <div className="grid grid-cols-3 bg-muted/50 px-6 py-4 text-overline text-muted-foreground">
            <span>Feature</span>
            <span className="text-center text-primary">Motadata</span>
            <span className="text-center">{data.competitor}</span>
          </div>

          {/* Rows */}
          <div className="divide-y divide-border">
            {data.tableRows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 items-center px-6 py-4 bg-card text-sm"
              >
                <span className="font-medium text-foreground">{row.feature}</span>
                <span className="text-center font-semibold text-primary">{row.motadata}</span>
                <span className="text-center text-muted-foreground">{row.competitor}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
