"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

const recognitions = [
  {
    logo: "/logos/awards/gartner.svg",
    logoAlt: "Gartner",
    label: "Market Guide",
    title: "Featured in Market Guide for Network Automation and Orchestration 2020",
  },
  {
    logo: "/logos/awards/deloitte.svg",
    logoAlt: "Deloitte",
    label: "Technology Fast 50",
    title: "Winner for the last 3 consecutive years – Tech Fast50 India & Fast500 APAC",
  },
  {
    logo: "/logos/awards/idc.svg",
    logoAlt: "IDC",
    label: "MarketScape",
    title: "Recognized as Notable Vendor in software market report",
  },
];

export function CompanyRecognition() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-14"
        >
          <p className="text-label-md uppercase tracking-widest text-primary">
            Industry Analyst Recognition
          </p>
          <h2 className="mt-3 text-heading-xl text-foreground sm:text-4xl">
            Recognized by Leading Analysts
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            Featured in top-tier industry reports from the world&apos;s most
            respected technology research and advisory firms.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="rounded-2xl border border-border/60 overflow-hidden bg-white dark:bg-card">
          <div className="grid md:grid-cols-3">
            {recognitions.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`group relative overflow-hidden p-8 lg:p-10 transition-colors hover:bg-neutral-50 dark:hover:bg-muted/30 ${
                  i > 0
                    ? "border-t md:border-t-0 md:border-l border-border/40"
                    : ""
                }`}
              >
                <DottedGlowBackground
                  className="opacity-0 transition-opacity duration-500 group-hover:opacity-50"
                  gap={14}
                  radius={1.2}
                  opacity={0.4}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Logo */}
                  <div className="mb-5 flex h-10 items-center">
                    <Image
                      src={item.logo}
                      alt={item.logoAlt}
                      width={160}
                      height={40}
                      className="h-10 w-auto max-w-[160px] object-contain object-left"
                    />
                  </div>

                  {/* Label */}
                  <p className="text-label-sm uppercase tracking-widest text-orange-500 mb-3">
                    {item.label}
                  </p>

                  {/* Title */}
                  <h3 className="text-label-lg leading-snug text-foreground">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
