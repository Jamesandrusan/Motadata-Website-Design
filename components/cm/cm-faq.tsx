"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is cloud monitoring?",
    a: "Cloud monitoring is the process of evaluating stability, performance, logs, and metrics of cloud infrastructure. It provides comprehensive observability across public, private, and hybrid cloud environments. By continuously analyzing cloud resources, workloads, and services, organizations gain real-time insights into utilization patterns, cost efficiency, and potential issues before they impact business operations.",
  },
  {
    q: "Why do you need cloud monitoring?",
    a: "Cloud monitoring is essential for maintaining optimal performance, security, and cost efficiency in cloud environments. It helps you detect issues before they impact users, optimize resource utilization, ensure compliance, and make data-driven decisions about your infrastructure.",
  },
  {
    q: "What should you look for in a good Cloud Monitoring tool?",
    a: "A good cloud monitoring tool should provide comprehensive visibility across all cloud platforms, real-time alerting, AI-powered anomaly detection, cost optimization insights, security monitoring, and seamless integration with your existing infrastructure.",
  },
  {
    q: "What is network monitoring, and why is it important?",
    a: "Network monitoring is the continuous process of tracking network performance, availability, and security. It's important because it helps prevent downtime, optimize network performance, ensure security, and maintain compliance with industry standards.",
  },
  {
    q: "How does cloud monitoring work?",
    a: "Cloud monitoring works by collecting metrics, logs, and events from your cloud resources through agents, APIs, or native integrations. This data is then analyzed in real-time to detect anomalies, track performance, and trigger alerts when thresholds are exceeded.",
  },
  {
    q: "How can cloud monitoring enhance and resolve issues?",
    a: "Cloud monitoring enhances issue resolution by providing real-time visibility, automated alerting, root cause analysis, and AI-powered recommendations. This enables teams to identify and fix problems faster, often before they impact end users.",
  },
];

export function CMFAQ() {
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
                Find answers to common questions about cloud monitoring and our
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
