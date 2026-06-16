"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  BrainCircuit,
  Globe,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SectionItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const sections: SectionItem[] = [
  {
    icon: Layers,
    title: "Full-Stack Insight Across Hybrid & Multi-Cloud Environments",
    desc: "Enterprises run workloads everywhere — datacenters, private cloud, public cloud, containers, Kubernetes, and converged systems. Motadata delivers unified insight across all of them, eliminating visibility gaps that create operational risk. IT Directors and SRE Leaders gain a single, authoritative view of every layer, regardless of where or how it runs.",
  },
  {
    icon: BrainCircuit,
    title: "Predictive Intelligence for Capacity & Performance Planning",
    desc: "Modern infrastructure must anticipate demand, not react to it. Motadata's AI-based forecasting highlights capacity saturation, resource drift, and performance risks long before users notice them. CIOs gain strategic foresight, enabling proactive investment planning and prevention of service degradation.",
  },
  {
    icon: Globe,
    title: "Vendor-Neutral Coverage for Complex Enterprise Ecosystems",
    desc: "Large organizations rely on a diverse mix of technologies — legacy servers, virtualized environments, HCI, SAN/NAS storage, multiple clouds, and container orchestration. Motadata supports them all with vendor-agnostic depth: Dell EMC, HPE, Hitachi, Huawei, NetApp, VMware, Nutanix, Hyper-V, Kubernetes and more. This gives enterprises freedom to evolve their architecture without losing observability continuity.",
  },
  {
    icon: Workflow,
    title: "Automation & Correlation for High-Efficiency Operations",
    desc: "Hybrid environments generate noise without context. Motadata applies correlation across metrics, logs, traces, storage, cloud and compute, then uses runbook automation to resolve recurring issues autonomously. NOC teams reduce toil, incidents resolve faster, and operations scale without scaling effort.",
  },
];

export function HIMEnterpriseVisibility() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-14"
        >
          <p className="text-overline text-primary">
            Enterprise Ready
          </p>
          <h2 className="mt-3 text-display-md">
            Unified Visibility for a Hybrid, High-Velocity Enterprise
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            One platform to understand every system, every workload, and every environment — delivering clarity that scales, intelligence that adapts, and performance that endures.
          </p>
        </motion.div>

        <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
          <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-border/40">
            {sections.map((section, i) => {
              const Icon = section.icon;
              const isActive = i === activeIndex;
              return (
                <div
                  key={i}
                  className={`cursor-pointer transition-[flex,background-color] duration-500 ease-in-out ${
                    isActive ? "lg:flex-[2.2] bg-neutral-50" : "lg:flex-[1] bg-white"
                  }`}
                  onClick={() => setActiveIndex(i)}
                  onMouseEnter={() => setActiveIndex(i)}
                >
                  <div className="flex flex-col h-full px-6 py-8 lg:px-7 lg:py-10">
                    {/* Icon */}
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg mb-5 transition-colors duration-300 ${
                      isActive ? "bg-primary/10" : "bg-foreground/5"
                    }`}>
                      <Icon className={`h-5 w-5 transition-colors duration-300 ${
                        isActive ? "text-primary" : "text-foreground/50"
                      }`} />
                    </div>

                    {/* Title — always visible */}
                    <h3 className="text-lg font-semibold text-foreground">
                      {section.title}
                    </h3>

                    {/* Description — only on active (desktop), always on mobile */}
                    <div className={`hidden lg:block overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive
                        ? "max-h-[300px] opacity-100 mt-4"
                        : "max-h-0 opacity-0 mt-0"
                    }`}>
                      <p className="text-body-xs text-muted-foreground">
                        {section.desc}
                      </p>
                    </div>

                    <p className="mt-3 text-body-xs text-muted-foreground lg:hidden">
                      {section.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
