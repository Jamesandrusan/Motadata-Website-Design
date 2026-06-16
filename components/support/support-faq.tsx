"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do I submit a support ticket?",
    a: "You can submit tickets through our support portal, via email at support@motadata.com, or directly from within the Motadata platform.",
  },
  {
    q: "What are your support hours?",
    a: "Standard support is available 8\u00d75 (Mon-Fri, 9AM-6PM IST). Premium plans include 24\u00d75 coverage, and Enterprise plans offer 24\u00d77 support.",
  },
  {
    q: "How do I escalate an issue?",
    a: "If your issue isn\u2019t being resolved in a timely manner, you can escalate through your Customer Success Manager or by emailing escalation@motadata.com.",
  },
  {
    q: "Do you provide on-site support?",
    a: "On-site support and training are available as part of our Enterprise support plan. Contact your account manager to arrange a visit.",
  },
  {
    q: "How do I access the knowledge base?",
    a: "The knowledge base is available at docs.motadata.com and is accessible to all customers with an active license.",
  },
];

export function SupportFaq() {
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
              <p className="text-overline text-primary">Support FAQ</p>
              <h2 className="mt-3 text-display-md">
                Common Support Questions
              </h2>
              <p className="mt-4 text-body-md text-muted-foreground">
                Find answers to the most common questions about our support services and how to get help.
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
