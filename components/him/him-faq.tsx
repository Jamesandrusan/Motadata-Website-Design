"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What types of infrastructure can be monitored?",
    a: "Our Infrastructure Monitoring supports servers (Windows, Linux, Unix), virtual environments (VMware, Hyper-V, KVM), cloud platforms (AWS, Azure, GCP), containers (Docker, Kubernetes), storage systems, and databases. Monitor physical servers, virtual machines, cloud instances, and hybrid infrastructure from a single platform with comprehensive performance metrics and health insights.",
  },
  {
    q: "How does agentless monitoring work?",
    a: "Agentless monitoring uses standard protocols like SNMP, WMI, SSH, and cloud APIs to collect metrics without installing agents on target systems. This approach reduces overhead, simplifies deployment, and works seamlessly with devices that cannot run agents. For deeper insights, optional lightweight agents are available for enhanced monitoring capabilities.",
  },
  {
    q: "Can Infrastructure Monitoring handle hybrid and multi-cloud environments?",
    a: "Yes. Our platform is built for hybrid and multi-cloud monitoring with native integrations for AWS, Azure, Google Cloud, and private cloud platforms. Monitor resources across on-premises data centers and multiple cloud providers with unified visibility, cross-platform correlation, and consistent performance tracking regardless of where your workloads run.",
  },
  {
    q: "What kind of performance metrics are collected?",
    a: "We collect comprehensive metrics including CPU utilization, memory usage, disk I/O, network throughput, process-level performance, service availability, and custom metrics. Historical data retention enables trend analysis, capacity planning, and performance baselining. Set custom thresholds, create calculated metrics, and monitor KPIs specific to your infrastructure needs.",
  },
  {
    q: "How does auto-discovery identify new infrastructure components?",
    a: "Auto-discovery continuously scans your network using multiple discovery methods including IP range scanning, cloud API integration, VMware discovery, active directory integration, and DNS queries. New devices, virtual machines, cloud instances, and services are automatically detected, classified, and added to monitoring with appropriate templates and configurations applied based on device type.",
  },
];

export function HIMFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
          <div className="grid lg:grid-cols-[1fr,1.2fr]">
            {/* Left — heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center p-8 lg:p-12"
            >
              <p className="text-overline text-primary">FAQ</p>
              <h2 className="mt-3 text-display-md">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-body-md text-muted-foreground">
                Find answers to common questions about Infrastructure Monitoring and our
                capabilities.
              </p>
            </motion.div>

            {/* Right — accordion */}
            <div className="border-t lg:border-t-0 lg:border-l border-border/40 divide-y divide-border/40">
              {faqs.map((faq, i) => {
                const isOpen = i === openIndex;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className="group flex w-full items-center justify-between px-6 py-6 lg:px-8 lg:py-7 text-left transition-colors hover:bg-muted/10"
                    >
                      <span className="text-label-lg pr-4 transition-colors group-hover:text-primary">{faq.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-primary" : "text-muted-foreground"
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-5 lg:px-8 text-body-xs text-muted-foreground">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
