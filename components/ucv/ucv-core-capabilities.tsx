"use client";

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

interface Capability {
  icon: LucideIcon;
  label: string;
}

const capabilities: Capability[] = [
  { icon: Monitor, label: "OS-Level Monitoring" },
  { icon: Server, label: "Virtualization Intelligence" },
  { icon: HardDrive, label: "HCI Visibility" },
  { icon: LayoutTemplate, label: "Template-Driven Monitoring" },
  { icon: Search, label: "Auto-Discovery & Mapping" },
  { icon: BarChart3, label: "SLA-Linked Performance" },
];

export function UCVCoreCapabilities() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex gap-2.5 justify-center flex-wrap"
        >
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
              >
                <div className="flex items-center gap-2 rounded-lg px-5 py-2.5 text-body-xs text-muted-foreground ring-1 ring-border/40 transition-all duration-200 hover:text-foreground hover:bg-neutral-100 hover:ring-primary/40">
                  <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="whitespace-nowrap">{cap.label}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
