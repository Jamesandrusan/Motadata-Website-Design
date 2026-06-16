"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How quickly can I get a product demo?",
    a: "Our team typically schedules personalised demos within 24–48 hours of your request. Fill out the contact form above with your requirements and a solutions engineer will reach out to confirm the session at your preferred time.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes. Motadata offers a fully functional free trial for both ObserveOps (unified observability) and ServiceOps (IT service management). No credit card is required — simply sign up and start monitoring or managing services right away.",
  },
  {
    q: "What support plans are available?",
    a: "We offer Standard, Premium, and Enterprise support tiers with varying SLA commitments, ranging from business-hours coverage to 24×7 global support. Enterprise plans include a dedicated customer success manager and priority escalation paths.",
  },
  {
    q: "Can I schedule a call with the sales team?",
    a: "Absolutely. Use the contact form at the top of this page, email sales@motadata.com, or call +91 79 2970 0100 during business hours. Our sales team covers multiple time zones and will find a slot that works for you.",
  },
  {
    q: "Where are your data centres located?",
    a: "Motadata supports both on-premises deployment and cloud hosting. Our SaaS offering is hosted on major cloud providers (AWS, Azure) with data residency options to meet regional compliance requirements. We also support air-gapped and private-cloud deployments.",
  },
  {
    q: "Is Motadata suitable for enterprise-scale environments?",
    a: "Yes. Motadata is trusted by 5,800+ organisations worldwide, including large enterprises managing tens of thousands of nodes. The platform is built for horizontal scalability, high availability, and multi-tenant architectures without compromising on performance.",
  },
];

export function ContactFaq() {
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
              <p className="text-overline text-primary">
                FAQ
              </p>
              <h2 className="mt-3 text-display-md">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-body-md text-muted-foreground">
                Have more questions? Reach out via the form above or email us at{" "}
                <a
                  href="mailto:sales@motadata.com"
                  className="text-primary hover:underline underline-offset-2"
                >
                  sales@motadata.com
                </a>
                .
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
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className="group flex w-full items-center justify-between px-6 py-6 lg:px-8 lg:py-7 text-left transition-colors hover:bg-muted/10"
                    >
                      <span className="text-label-lg pr-4 transition-colors group-hover:text-primary">
                        {faq.q}
                      </span>
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
                          <p className="px-6 pb-6 lg:px-8 text-body-xs text-muted-foreground">
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
