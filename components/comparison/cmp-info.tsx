"use client";

import { LayoutList, DollarSign, BarChart3 } from "lucide-react";

const pillars = [
  {
    icon: LayoutList,
    title: "Feature Parity",
    description:
      "Side-by-side comparison of key features, capabilities, and integrations to help you understand functional differences.",
  },
  {
    icon: DollarSign,
    title: "Pricing Transparency",
    description:
      "Understand total cost of ownership including licensing, deployment, and ongoing operational expenses.",
  },
  {
    icon: BarChart3,
    title: "Real-World Performance",
    description:
      "Learn how each platform performs in enterprise environments with insights from actual customer deployments.",
  },
];

export function CmpInfo() {
  return (
    <section className="relative z-10 py-20 border-t border-border">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left text */}
          <div>
            <p className="mb-3 text-overline text-primary">
              Why Compare?
            </p>
            <h2 className="text-heading-xl lg:text-4xl">
              Make an Informed Decision
            </h2>
            <p className="mt-4 text-body-md text-muted-foreground">
              Choosing the right observability and ITSM platform is critical for your IT operations.
              Our detailed comparisons help you understand the key differences in features,
              architecture, pricing, and support.
            </p>
          </div>

          {/* Right pillars */}
          <div className="flex flex-col gap-5">
            {pillars.map((p) => (
              <div key={p.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <p.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="mb-1 text-label-md text-foreground">{p.title}</p>
                  <p className="text-body-xs text-muted-foreground">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
