"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Edition {
  name: string;
  idealFor: string;
  capabilities: string[];
  highlighted?: boolean;
}

const editions: Edition[] = [
  {
    name: "Professional",
    idealFor: "Mid-size Enterprises",
    capabilities: [
      "Infrastructure and network monitoring",
      "Log aggregation and analysis",
      "On-premises deployment ready",
      "Basic alerting and reporting",
      "Performance metrics tracking",
      "Custom dashboards and visualization",
      "Email and SMS notifications",
      "Standard integrations support",
    ],
  },
  {
    name: "Enterprise",
    idealFor: "Large Organizations",
    capabilities: [
      "Application Performance Monitoring (APM)",
      "Real User Monitoring (RUM)",
      "Network Configuration & Compliance (NCCM)",
      "Predictive analytics and AI-driven insights",
      "Advanced anomaly detection",
      "Distributed tracing capabilities",
      "Custom correlation rules",
      "Priority support and SLA",
      "Multi-cloud monitoring",
    ],
    highlighted: true,
  },
  {
    name: "MSP Edition",
    idealFor: "Managed Service Providers",
    capabilities: [
      "Multi-tenant management",
      "SLA tracking and reporting",
      "Client isolation and security",
      "White-label branding capabilities",
      "Automated billing integration",
      "Dedicated account management",
      "API access for automation",
      "Customizable client portals",
    ],
  },
];

const INITIAL_SHOW = 4;

function EditionCard({ edition, index }: { edition: Edition; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const visibleCaps = expanded
    ? edition.capabilities
    : edition.capabilities.slice(0, INITIAL_SHOW);
  const hasMore = edition.capabilities.length > INITIAL_SHOW;

  return (
    <motion.div
      key={edition.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="px-6 lg:px-8 py-8"
    >
      {/* Edition name */}
      <h3 className="text-heading-md">{edition.name}</h3>

      {/* Ideal For */}
      <p className="mt-3 text-overline text-muted-foreground">
        Ideal For
      </p>
      <p className="mt-1 text-body-md text-foreground">
        {edition.idealFor}
      </p>

      {/* Core Capabilities label */}
      <p className="mt-6 text-overline text-muted-foreground">
        Core Capabilities
      </p>

      {/* Capabilities list */}
      <ul className="mt-4 space-y-3">
        {visibleCaps.map((cap) => (
          <li key={cap} className="flex items-start gap-3">
            <Check className="text-primary h-4 w-4 mt-0.5 shrink-0" />
            <span className="text-body-xs text-muted-foreground">
              {cap}
            </span>
          </li>
        ))}
        <AnimatePresence>
          {expanded &&
            edition.capabilities.slice(INITIAL_SHOW).map((cap) => (
              <motion.li
                key={cap}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-3"
              >
                <Check className="text-primary h-4 w-4 mt-0.5 shrink-0" />
                <span className="text-body-xs text-muted-foreground">
                  {cap}
                </span>
              </motion.li>
            ))}
        </AnimatePresence>
      </ul>

      {/* Show More / Show Less toggle */}
      {hasMore && (
        <div className="mt-6">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-label-md text-primary hover:underline"
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </motion.div>
  );
}

export function OOEditions() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-14"
        >
          <p className="text-overline text-primary">
            Editions
          </p>
          <h2 className="mt-3 text-display-md">
            Select the Edition That Matches Your Scale
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            Engineered for agility. Licensed for growth. Deployed your way —
            on-prem, private, or hybrid cloud.
          </p>
        </motion.div>

        {/* Edition cards — no boxes, just vertical dividers */}
        <div className="grid md:grid-cols-3">
          {editions.map((edition, i) => (
            <EditionCard key={edition.name} edition={edition} index={i} />
          ))}
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Button className="bg-foreground text-background hover:bg-foreground/90">
            Request a Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline">Compare Editions</Button>
        </motion.div>
      </div>
    </section>
  );
}
