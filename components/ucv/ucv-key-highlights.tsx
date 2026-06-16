"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  HardDrive,
  LayoutTemplate,
  Search,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

interface Highlight {
  icon: LucideIcon;
  title: string;
  desc: string;
  bullets: string[];
}

const highlights: Highlight[] = [
  {
    icon: Monitor,
    title: "Deep OS-Level Monitoring Across Environments",
    desc: "Gain real-time visibility into compute performance across Windows, Linux, and Unix systems.",
    bullets: [
      "CPU utilization, load patterns, and scheduling behavior",
      "Memory consumption, swap usage, and pressure indicators",
      "Process and service-level monitoring with execution insights",
      "System-level counters for granular performance diagnostics",
    ],
  },
  {
    icon: Server,
    title: "Virtualization & Hypervisor Intelligence",
    desc: "Understand how virtual infrastructure impacts workload performance.",
    bullets: [
      "Native support for VMware, Hyper-V, and Citrix environments",
      "Host-to-VM resource allocation and utilization tracking",
      "CPU ready time, memory ballooning, and contention analysis",
      "Datastore and hypervisor-level performance correlation",
    ],
  },
  {
    icon: HardDrive,
    title: "Hyper-Converged Infrastructure (HCI) Visibility",
    desc: "Monitor compute and storage convergence as a unified system.",
    bullets: [
      "Support for Nutanix and modern HCI architectures",
      "Node, cluster, and storage performance monitoring",
      "Correlation between compute workloads and storage I/O",
    ],
  },
  {
    icon: LayoutTemplate,
    title: "Template-Driven Monitoring Standardization",
    desc: "Scale monitoring with consistency across environments.",
    bullets: [
      "Pre-built templates for OS, hypervisors, and platforms",
      "Customizable thresholds aligned with organizational policies",
      "Rapid onboarding of new systems without manual configuration",
    ],
  },
  {
    icon: Search,
    title: "Auto-Discovery & Dependency Mapping",
    desc: "Continuously discover compute assets and their relationships.",
    bullets: [
      "Agent-based and agentless discovery across environments",
      "Dynamic mapping of hosts, VMs, clusters, and services",
      "Dependency visualization across infrastructure and applications",
    ],
  },
  {
    icon: BarChart3,
    title: "SLA-Linked Performance Visibility",
    desc: "Translate compute metrics into service impact.",
    bullets: [
      "Map infrastructure performance to business services",
      "Define SLA thresholds for availability and utilization",
      "Visual dashboards aligned with service-level objectives",
    ],
  },
];

export function UCVKeyHighlights() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(i);
          }
        },
        { threshold: 0.4, rootMargin: "-10% 0px -70% 0px" }
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12 lg:gap-16">
          {/* Left — Sticky heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="text-overline text-primary">
              Key Highlights
            </p>
            <h2 className="mt-3 text-display-md">
              Complete Compute Coverage at a Glance
            </h2>
            <p className="mt-4 text-body-md text-muted-foreground">
              Gain real-time visibility into compute performance across Windows, Linux, and Unix systems.
            </p>
          </motion.div>

          {/* Right — Single column connected box layout */}
          <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
            <div className="divide-y divide-border/40">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                const isActive = i === activeIndex;
                return (
                  <motion.div
                    key={item.title}
                    ref={(el) => { cardRefs.current[i] = el; }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={`group p-6 lg:p-8 transition-colors duration-300 ${
                      isActive ? "bg-neutral-50" : "hover:bg-neutral-50"
                    }`}
                  >
                    <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300 ${
                      isActive ? "bg-primary/10" : "bg-foreground/5 group-hover:bg-primary/10"
                    }`}>
                      <Icon className={`h-5 w-5 transition-colors duration-300 ${
                        isActive ? "text-primary" : "text-foreground/50 group-hover:text-primary"
                      }`} />
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1.5 text-body-md text-muted-foreground">
                      {item.desc}
                    </p>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive ? "max-h-[400px] opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
                    }`}>
                      <div className="border-t border-border/40 mb-3" />
                      <ul className="space-y-2">
                        {item.bullets.map((bullet, j) => (
                          <li key={j} className="flex items-start gap-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.9 14.9" className="mt-1.5 h-3 w-3 shrink-0">
                              <path fill="#f17463" d="M0,10.4c0,2.5,2,4.4,4.4,4.4h0V6h0C2,6,0,8,0,10.4Z"/>
                              <path fill="#f17463" d="M14.9,4.4c0-2.5-2-4.4-4.4-4.4h0v8.9h0c2.4,0,4.4-2,4.4-4.4Z"/>
                              <path fill="#f17463" d="M6,10.4c0,2.5,2,4.4,4.4,4.4s4.4-2,4.4-4.4h0c0,0-8.9,0-8.9,0h0Z"/>
                              <path fill="#f17463" d="M8.9,4.4C8.9,2,6.9,0,4.4,0S0,2,0,4.4h0c0,0,8.9,0,8.9,0h0Z"/>
                            </svg>
                            <span className="text-body-md text-muted-foreground">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
