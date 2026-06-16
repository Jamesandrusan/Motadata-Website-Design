"use client";

import { Check } from "lucide-react";

const tiers = [
  {
    name: "SILVER",
    desc: "Perfect for growing businesses ready to expand their Motadata practice.",
    requirements: [
      "Minimum annual revenue commitment",
      "At least 2 certified professionals",
      "Quarterly business reviews",
    ],
    benefits: [
      "20% partner discount",
      "Access to deal registration",
      "Marketing development funds",
      "Partner portal access",
      "Sales enablement resources",
    ],
  },
  {
    name: "GOLD",
    desc: "Designed for established partners driving significant business growth.",
    requirements: [
      "Higher revenue targets",
      "Minimum 5 certified professionals",
      "Dedicated partner manager",
    ],
    benefits: [
      "25% partner discount",
      "Priority deal registration",
      "Co-marketing opportunities",
      "Advanced training programs",
      "Technical pre-sales support",
      "Executive business reviews",
    ],
    featured: true,
  },
  {
    name: "PLATINUM",
    desc: "Elite tier for strategic partners with deep market expertise and commitment.",
    requirements: [
      "Premium revenue commitments",
      "10+ certified professionals",
      "Strategic business planning",
    ],
    benefits: [
      "30% partner discount",
      "Exclusive territory rights",
      "Joint go-to-market initiatives",
      "Product roadmap influence",
      "Dedicated technical resources",
      "Executive sponsorship",
      "NFR licenses",
    ],
  },
];

export function PtTiers() {
  return (
    <section className="relative z-10 py-20">
      <div className="mx-auto w-full max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="mb-3 text-overline text-primary">
            Partnership Tiers
          </p>
          <h2 className="text-heading-xl lg:text-4xl">
            Choose Your Partnership Level
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Select the partnership level that aligns with your business goals and unlock exclusive
            benefits, resources, and support.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`flex flex-col rounded-2xl border p-8 transition-colors ${
                t.featured
                  ? "border-primary/40 bg-primary/[0.02]"
                  : "border-border bg-card hover:border-primary/40"
              }`}
            >
              {/* Header */}
              <div className="mb-5">
                {t.featured && (
                  <span className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-label-sm text-primary">
                    Most Popular
                  </span>
                )}
                <h3 className="text-heading-sm tracking-wide text-foreground">{t.name}</h3>
                <p className="mt-2 text-body-xs text-muted-foreground">{t.desc}</p>
              </div>

              {/* Requirements */}
              <div className="mb-5">
                <p className="text-overline text-muted-foreground/60">
                  Requirements
                </p>
                <ul className="mt-3 space-y-2">
                  {t.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-body-xs text-muted-foreground">
                      <span className="mt-1 text-muted-foreground/40">•</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="flex-1">
                <p className="text-overline text-muted-foreground/60">
                  Benefits
                </p>
                <ul className="mt-3 space-y-2">
                  {t.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href="#become-partner"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-xl py-3 text-label-md transition-opacity hover:opacity-90 ${
                  t.featured
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
