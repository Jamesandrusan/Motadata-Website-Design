"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What makes ObserveOps different from other observability platforms?",
    a: "ObserveOps is built on Motastore, our proprietary high-performance datastore engineered specifically for observability workloads. It unifies metrics, logs, traces, and topology in a single platform with AI-driven analytics at the core. Unlike fragmented solutions, ObserveOps provides complete visibility across network, infrastructure, applications, and user experience with automated correlation and predictive insights.",
  },
  {
    q: "Can ObserveOps be deployed on-premises?",
    a: "Yes. ObserveOps is designed for flexible deployment — on-premises, private cloud, or hybrid environments. This ensures full data sovereignty and compliance with regulatory requirements while maintaining enterprise-grade performance and security.",
  },
  {
    q: "Which edition is right for my organization?",
    a: "The Professional edition is ideal for mid-size enterprises requiring infrastructure and network monitoring with basic analytics. The Enterprise edition adds APM, RUM, NCCM, and AI-driven insights for large organizations with complex hybrid environments. The MSP edition is built for managed service providers with multi-tenant capabilities, white-labeling, and automated billing integration.",
  },
  {
    q: "How does ObserveOps integrate with existing tools?",
    a: "ObserveOps provides extensive integration capabilities through standard protocols and APIs. It can ingest data from existing monitoring tools, SIEM systems, ticketing platforms, and automation frameworks. Our flexible architecture ensures seamless integration with your current IT ecosystem without requiring a complete replacement.",
  },
  {
    q: "What kind of AI capabilities does ObserveOps provide?",
    a: "ObserveOps leverages AI for automated anomaly detection, predictive analytics, intelligent correlation, and root cause analysis. The platform learns from your environment to reduce alert fatigue, predict potential issues before they impact users, and provide actionable recommendations for resolution. AI capabilities are continuously enhanced through machine learning models trained on observability patterns.",
  },
];

export function OOFaq() {
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
                Find answers to common questions about ObserveOps and our
                platform capabilities.
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
