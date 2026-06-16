"use client";

import type { ComparisonData } from "@/lib/comparison-data";

export function CmpDetailAlt({ data }: { data: ComparisonData }) {
  return (
    <section className="relative z-10 py-20 border-t border-border">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">

          {/* Left — text */}
          <div className="flex-1">
            <p className="mb-3 text-overline text-primary">
              Why Switch?
            </p>
            <h2 className="text-heading-xl lg:text-4xl">
              {data.altTitle}
            </h2>
            <div className="mt-6 space-y-4">
              {data.altBody.map((para, i) => (
                <p key={i} className="text-body-md text-muted-foreground">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right — 2×2 stats grid connected */}
          <div className="w-full lg:w-80 xl:w-96 shrink-0">
            <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-border">
              {data.stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`bg-card px-6 py-7 ${
                    i % 2 === 0 ? "border-r border-border" : ""
                  } ${i < 2 ? "border-b border-border" : ""}`}
                >
                  <p className="text-heading-xl text-primary leading-none">{s.value}</p>
                  <p className="mt-2 text-body-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
