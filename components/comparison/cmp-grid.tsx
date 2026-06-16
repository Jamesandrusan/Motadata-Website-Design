"use client";

import { ArrowRight } from "lucide-react";

const comparisons = [
  {
    id: "manageengine",
    slug: "motadata-vs-manageengine",
    tag: "Enterprise Tools",
    title: "Motadata vs ManageEngine",
    description:
      "See how Motadata delivers superior unified observability with AI-powered insights and native integrations versus ManageEngine's fragmented product suite.",
  },
  {
    id: "solarwinds",
    slug: "motadata-vs-solarwinds",
    tag: "Legacy Platforms",
    title: "Motadata vs SolarWinds",
    description:
      "Compare modern cloud-native architecture against legacy monitoring tools. Discover why enterprises choose Motadata for faster deployment and better scalability.",
  },
  {
    id: "whatsup-gold",
    slug: "motadata-vs-whatsup-gold",
    tag: "Network Monitoring",
    title: "Motadata vs WhatsUp Gold",
    description:
      "Discover why enterprises choose Motadata for comprehensive IT operations management with full-stack observability and advanced automation capabilities.",
  },
  {
    id: "datadog",
    slug: "motadata-vs-datadog",
    tag: "Cloud Monitoring",
    title: "Motadata vs Datadog",
    description:
      "Compare cost-effective observability with enterprise-grade features against premium-priced alternatives. Better value with flexible deployment options.",
  },
  {
    id: "dynatrace",
    slug: "motadata-vs-dynatrace",
    tag: "APM Solutions",
    title: "Motadata vs Dynatrace",
    description:
      "Enterprise observability with predictable pricing and flexible deployment options. See how Motadata delivers better TCO and comprehensive ITSM integration.",
  },
  {
    id: "new-relic",
    slug: "motadata-vs-new-relic",
    tag: "Cloud Native",
    title: "Motadata vs New Relic",
    description:
      "Full-stack observability with better pricing and broader monitoring capabilities. Unified AIOps + ServiceOps platform with better cost per monitored entity.",
  },
];

export function CmpGrid() {
  return (
    <section className="relative z-10 pb-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c) => (
            <div
              key={c.id}
              className="group/card flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-colors hover:border-primary/40"
            >
              <div className="flex flex-1 flex-col p-8">
                {/* Tag */}
                <span className="mb-4 inline-flex w-fit text-label-sm text-primary">
                  {c.tag}
                </span>
                {/* Title */}
                <h3 className="mb-3 text-heading-sm text-foreground">
                  {c.title}
                </h3>
                {/* Description */}
                <p className="flex-1 text-body-xs text-muted-foreground">
                  {c.description}
                </p>
              </div>
              {/* CTA */}
              <a
                href={`/resources/comparison/${c.slug}`}
                className="flex w-full items-center justify-between px-6 border-t border-primary/20 py-3 text-label-md text-primary transition-opacity duration-200 opacity-0 group-hover/card:opacity-100"
              >
                View Comparison
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
