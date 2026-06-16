"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What makes ServiceOps different from traditional ITSM platforms?",
    a: "ServiceOps is built with AI-powered automation at its core, not as an add-on. Unlike traditional ITSM tools, ServiceOps uses intelligent virtual agents that can resolve 70% of requests automatically, learns from every interaction, and provides predictive insights. It combines modern service desk, incident management, change control, and asset management in a unified platform designed for enterprise scale.",
  },
  {
    q: "Can ServiceOps be deployed on-premises?",
    a: "Yes. ServiceOps supports flexible deployment options including on-premises, private cloud, or hybrid environments. This ensures complete data sovereignty and compliance with regulatory requirements while maintaining enterprise-grade performance and security for all service management operations.",
  },
  {
    q: "Which edition is right for my organization?",
    a: "The Professional edition is ideal for growing IT teams requiring core incident and service desk management with basic automation. The Enterprise edition adds AI-powered virtual agents, advanced automation, omnichannel support, and full CMDB for large organizations with complex service requirements. The MSP edition provides multi-tenant capabilities, white-labeling, and automated billing for managed service providers.",
  },
  {
    q: "How does ServiceOps integrate with existing tools?",
    a: "ServiceOps provides extensive integration capabilities through standard APIs and protocols. It seamlessly connects with monitoring tools, communication platforms (Slack, Teams), ticketing systems, and automation frameworks. The platform can import data from existing CMDBs and integrate with your current IT ecosystem without requiring wholesale replacement.",
  },
  {
    q: "What kind of AI capabilities does ServiceOps provide?",
    a: "ServiceOps leverages AI for intelligent virtual agents with natural language understanding, automated ticket categorization and routing, predictive issue resolution, sentiment analysis for prioritization, and continuous learning from resolved incidents. The AI identifies automation opportunities, suggests knowledge base articles, and provides intelligent recommendations to accelerate resolution times while improving service quality.",
  },
];

export function SOFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
          <div className="grid lg:grid-cols-[1fr,1.2fr]">
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
                Find answers to common questions about ServiceOps and our platform capabilities.
              </p>
            </motion.div>

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
