"use client";

import Link from "next/link";
import { Rocket, TrendingUp, Award, ArrowRight } from "lucide-react";

const featured = [
  {
    icon: Rocket,
    category: "Product Launch",
    title: "Motadata Launches AI-Native AIOps Platform with Predictive Analytics",
    description:
      "Revolutionary platform combines machine learning with real-time observability to predict and prevent IT incidents before they impact business operations.",
    date: "January 15, 2025",
  },
  {
    icon: TrendingUp,
    category: "Funding",
    title: "Motadata Raises $50M Series C to Accelerate Global Expansion",
    description:
      "Latest funding round led by top-tier investors will fuel product innovation and expansion into new markets across North America and Europe.",
    date: "December 10, 2024",
  },
  {
    icon: Award,
    category: "Recognition",
    title: "Motadata Named a Leader in Gartner Magic Quadrant for IT Monitoring",
    description:
      "Recognition as a Leader for the third consecutive year validates Motadata's vision for unified observability and AI-driven operations.",
    date: "November 20, 2024",
  },
];

export function PrFeatured() {
  return (
    <section className="relative z-10 border-t border-border py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <span className="text-overline text-primary">
            Featured News
          </span>
          <div className="h-px flex-1 bg-border" />
          <span className="text-body-xs text-muted-foreground">
            Latest announcements and major updates
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {featured.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                href="/resources/press-releases/release-notes"
                key={item.title}
                className="group/card flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover/card:bg-primary/20">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-label-sm text-primary">
                    {item.category}
                  </span>
                </div>
                <h3 className="mb-2 text-heading-sm text-foreground leading-snug">
                  {item.title}
                </h3>
                <p className="mb-4 flex-1 text-body-xs text-muted-foreground">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-caption text-muted-foreground">{item.date}</span>
                  <span className="inline-flex items-center gap-1 text-label-md text-primary opacity-0 transition-opacity group-hover/card:opacity-100">
                    Read More
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
