"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface MetricItem {
  label: string;
  sublabel: string;
}

interface CapSection {
  number: string;
  title: string;
  description: string;
  items: MetricItem[];
}

const sections: CapSection[] = [
  {
    number: "01",
    title: "Metrics & Events",
    description:
      "Gain real-time visibility into performance metrics, detect anomalies early, and ensure consistent uptime.",
    items: [
      { label: "CPU Utilization", sublabel: "Track compute usage across instances" },
      { label: "Memory Usage", sublabel: "Monitor RAM allocation and consumption" },
      { label: "Network I/O", sublabel: "Measure data transfer and bandwidth" },
      { label: "Error Rates", sublabel: "Detect and track application errors" },
    ],
  },
  {
    number: "02",
    title: "Logs & Analytics",
    description:
      "Centralize logs across systems, analyze patterns instantly, and resolve issues faster with AI-powered insights.",
    items: [
      { label: "Log Aggregation", sublabel: "Collect logs from all cloud services" },
      { label: "Search & Filter", sublabel: "Query logs with millisecond response time" },
      { label: "Pattern Detection", sublabel: "AI-powered anomaly identification" },
      { label: "Retention", sublabel: "Configurable log storage policies" },
    ],
  },
  {
    number: "03",
    title: "API & Service Health",
    description:
      "Monitor API uptime, response time, and latency to maintain reliable service performance and user experience.",
    items: [
      { label: "API Response Time", sublabel: "Track endpoint performance" },
      { label: "Request Rate", sublabel: "Monitor API call volume" },
      { label: "Success Rate", sublabel: "Track successful API responses" },
      { label: "Latency P99", sublabel: "99th percentile response time" },
    ],
  },
  {
    number: "04",
    title: "Multi-Cloud Topology",
    description:
      "Get a unified view of cloud environments, track dependencies, and optimize performance across platforms.",
    items: [
      { label: "Cloud Providers", sublabel: "AWS, Azure, GCP, and on-premise" },
      { label: "Resource Count", sublabel: "Total monitored cloud resources" },
      { label: "Dependencies", sublabel: "Service relationship mapping" },
      { label: "Cost Attribution", sublabel: "Tag-based cost tracking" },
    ],
  },
];

/* ── Scroll-trigger item ── */
function ScrollSection({
  section,
  index,
  onInView,
}: {
  section: CapSection;
  index: number;
  onInView: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (isInView) onInView(index);
  }, [isInView, index, onInView]);

  return (
    <div
      ref={ref}
      className={`py-12 transition-opacity duration-300 ${isInView ? "opacity-100" : "opacity-30"}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-display-lg text-primary/15">{section.number}</span>
        <h3 className="text-heading-md">
          {section.title}
        </h3>
      </div>
      <p className="text-body-sm text-muted-foreground mb-6">
        {section.description}
      </p>
      <div className="grid grid-cols-2 gap-4">
        {section.items.map((item) => (
          <div key={item.label}>
            <p className="font-semibold text-sm text-foreground">{item.label}</p>
            <p className="mt-0.5 text-caption text-muted-foreground">{item.sublabel}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CMCapabilities() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-36">
          {/* Left — sticky heading */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-overline text-primary">
                  Core Capabilities
                </p>
                <h2 className="mt-3 text-display-md">
                  What Does Cloud Monitoring Track?
                </h2>
                <p className="mt-4 text-body-md text-muted-foreground">
                  Advanced AI-powered monitoring platform that transforms raw server
                  data into actionable insights for proactive IT management.
                </p>

                {/* Active section indicator */}
                <div className="mt-10 space-y-3">
                  {sections.map((s, i) => (
                    <div
                      key={s.number}
                      className={`flex items-center gap-3 transition-all duration-300 ${
                        i === activeIndex
                          ? "opacity-100"
                          : "opacity-30"
                      }`}
                    >
                      <span className={`text-label-md-strong ${i === activeIndex ? "text-primary" : "text-foreground/40"}`}>
                        {s.number}
                      </span>
                      <div className={`h-px flex-1 transition-all duration-300 ${i === activeIndex ? "bg-primary/40" : "bg-border/40"}`} />
                      <span className={`text-label-md ${i === activeIndex ? "text-foreground" : "text-foreground/40"}`}>
                        {s.title}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile — heading (not sticky) */}
          <div className="lg:hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <p className="text-overline text-primary">
                Core Capabilities
              </p>
              <h2 className="mt-3 text-heading-xl">
                What Does Cloud Monitoring Track?
              </h2>
              <p className="mt-4 text-body-md text-muted-foreground">
                Advanced AI-powered monitoring platform that transforms raw server
                data into actionable insights for proactive IT management.
              </p>
            </motion.div>
          </div>

          {/* Right — scrollable sections */}
          <div className="divide-y divide-border/40">
            {sections.map((section, i) => (
              <ScrollSection
                key={section.number}
                section={section}
                index={i}
                onInView={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
