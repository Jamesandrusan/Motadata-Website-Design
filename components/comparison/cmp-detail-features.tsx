"use client";

import { useState } from "react";
import { Check, Minus, ChevronDown, Zap, Clock, Users, BarChart3 } from "lucide-react";
import type { ComparisonData } from "@/lib/comparison-data";

export function CmpDetailFeatures({ data }: { data: ComparisonData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative z-10 py-20 border-t border-border">
      <div className="mx-auto w-full max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="mb-3 text-overline text-primary">
            Detailed Breakdown
          </p>
          <h2 className="text-heading-xl lg:text-4xl">
            Feature Comparison
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            See how Motadata&apos;s unified platform stacks up against {data.competitor}&apos;s collection of products.
          </p>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border">
          {data.featureTabs.map((tab, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={tab.label}
                className={`transition-colors duration-200 ${
                  isOpen ? "bg-card" : "bg-card hover:bg-muted/20"
                }`}
              >
                {/* Trigger */}
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span
                    className={`text-label-lg transition-colors ${
                      isOpen ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {tab.label}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      isOpen
                        ? "border-primary/30 bg-primary/10 text-primary"
                        : "border-border bg-muted text-muted-foreground"
                    }`}
                  >
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {/* Content */}
                {isOpen && (
                  <div className="border-t border-border">
                    {/* Column header */}
                    <div className="grid grid-cols-3 bg-muted/40 px-6 py-3">
                      <span className="text-overline text-muted-foreground">
                        Feature
                      </span>
                      <span className="text-center text-overline text-primary">
                        Motadata
                      </span>
                      <span className="text-center text-overline text-muted-foreground">
                        {data.competitor}
                      </span>
                    </div>

                    {/* Rows */}
                    <div className="divide-y divide-border">
                      {tab.rows.map((row, j) => (
                        <div
                          key={j}
                          className="grid grid-cols-3 items-center px-6 py-4 text-sm even:bg-muted/10"
                        >
                          <span className="text-foreground">{row.feature}</span>

                          {/* Motadata */}
                          <span className="flex justify-center">
                            {row.motadata === true ? (
                              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                                <Check className="h-3.5 w-3.5 text-primary" />
                              </span>
                            ) : (
                              <span className="text-label-md text-primary">
                                {row.motadata}
                              </span>
                            )}
                          </span>

                          {/* Competitor */}
                          <span className="flex justify-center">
                            {row.competitor === false ? (
                              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted">
                                <Minus className="h-3.5 w-3.5 text-muted-foreground" />
                              </span>
                            ) : row.competitor === true ? (
                              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted">
                                <Check className="h-3.5 w-3.5 text-muted-foreground" />
                              </span>
                            ) : (
                              <span className="text-body-xs text-muted-foreground">
                                {row.competitor}
                              </span>
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Key Differentiators ── */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <p className="mb-3 text-overline text-primary">
              Key Differentiators
            </p>
            <h2 className="text-heading-xl lg:text-4xl">
              What Sets Motadata Apart
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              What sets Motadata apart from {data.competitor}&apos;s legacy approach.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {data.keyDifferentiators.map((item, i) => (
                <div
                  key={i}
                  className={`bg-card p-6 ${i % 2 === 0 ? "sm:border-r border-border" : ""} ${i < 2 ? "border-b border-border" : ""}`}
                >
                  <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </span>
                  <p className="text-label-lg text-foreground mb-2">{item.title}</p>
                  <p className="text-body-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Why Enterprises Choose Motadata ── */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <p className="mb-3 text-overline text-primary">
              Why Enterprises Choose Motadata
            </p>
            <h2 className="text-heading-xl lg:text-4xl">
              Real Benefits, Real Outcomes
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Real benefits that drive business outcomes and team productivity.
            </p>
          </div>

          {(() => {
            const icons = [Zap, Clock, Users, BarChart3];
            return (
              <div className="overflow-hidden rounded-2xl border border-border">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {data.whyChoose.map((item, i) => {
                    const Icon = icons[i % icons.length];
                    return (
                      <div
                        key={i}
                        className={`bg-card p-6 ${i % 2 === 0 ? "sm:border-r border-border" : ""} ${i < 2 ? "border-b border-border" : ""}`}
                      >
                        <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                          <Icon className="h-4 w-4 text-primary" />
                        </span>
                        <p className="text-label-lg text-foreground mb-2">
                          {item.stat ? `${item.stat} ${item.title}` : item.title}
                        </p>
                        <p className="text-body-xs text-muted-foreground">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })()}
        </div>

      </div>
    </section>
  );
}
