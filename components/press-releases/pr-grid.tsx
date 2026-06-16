"use client";

import { ArrowRight } from "lucide-react";

const releases = [
  {
    category: "Product Launch",
    date: "January 15, 2025",
    title: "Motadata Launches AI-Native AIOps Platform with Predictive Analytics",
    description:
      "Revolutionary platform combines machine learning with real-time observability to predict and prevent IT incidents.",
  },
  {
    category: "Funding",
    date: "December 10, 2024",
    title: "Motadata Raises $50M Series C to Accelerate Global Expansion",
    description:
      "Latest funding round will fuel product innovation and expansion into North America and Europe.",
  },
  {
    category: "Recognition",
    date: "November 20, 2024",
    title: "Motadata Named a Leader in Gartner Magic Quadrant for IT Monitoring",
    description:
      "Third consecutive year as a Leader validates our unified observability vision.",
  },
  {
    category: "Partnership",
    date: "October 5, 2024",
    title: "Motadata Partners with AWS to Deliver Cloud-Native Observability",
    description:
      "Strategic partnership brings deep AWS integration for seamless cloud monitoring and management.",
  },
  {
    category: "Compliance",
    date: "September 18, 2024",
    title: "Motadata Achieves SOC 2 Type II and ISO 27001 Certification",
    description:
      "Enterprise-grade security certifications demonstrate commitment to data protection and compliance.",
  },
  {
    category: "Company News",
    date: "August 22, 2024",
    title: "Motadata Opens New R&D Center in Bangalore",
    description:
      "New facility will house 200+ engineers focused on AI/ML innovation for IT operations.",
  },
  {
    category: "Product Update",
    date: "July 30, 2024",
    title: "Motadata Releases ServiceOps 5.0 with Agentic AI Capabilities",
    description:
      "Major update introduces autonomous AI agents for incident classification and resolution.",
  },
  {
    category: "Company News",
    date: "June 15, 2024",
    title: "Motadata Surpasses 2,000 Enterprise Customers Worldwide",
    description:
      "Milestone reflects growing demand for unified observability and service management solutions.",
  },
  {
    category: "Recognition",
    date: "May 8, 2024",
    title: "Motadata Wins 'Best AIOps Solution' at IT World Awards 2024",
    description:
      "Industry recognition for innovative approach to AI-driven IT operations and monitoring.",
  },
];

export function PrGrid() {
  return (
    <section className="relative z-10 border-t border-border py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left — sticky header */}
          <div className="lg:w-2/5">
            <div className="lg:sticky lg:top-24">
              <span className="text-overline text-primary">
                Archive
              </span>
              <h2 className="mt-3 text-heading-lg sm:text-3xl">
                All Press Releases
              </h2>
              <p className="mt-3 text-body-xs text-muted-foreground">
                Complete archive of company announcements, product launches, partnerships,
                and milestone achievements.
              </p>
            </div>
          </div>

          {/* Right — connected release list */}
          <div className="lg:w-3/5">
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="divide-y divide-border">
                {releases.map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="group/item flex gap-5 px-6 py-5 transition-colors hover:bg-muted/30"
                  >
                    {/* Date + category column */}
                    <div className="w-36 shrink-0 pt-0.5">
                      <p className="text-[11px] font-medium text-primary">{item.category}</p>
                      <p className="mt-0.5 text-caption text-muted-foreground">{item.date}</p>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <p className="text-heading-sm text-foreground leading-snug transition-colors group-hover/item:text-primary">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground/80">
                        {item.description}
                      </p>
                    </div>

                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-transparent transition-all group-hover/item:text-primary group-hover/item:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
