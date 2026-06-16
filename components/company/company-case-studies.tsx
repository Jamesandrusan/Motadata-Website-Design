"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface CaseStudy {
  company: string;
  logo: string;
  logoW?: number;
  logoH?: number;
  quote: string;
  name: string;
  position: string;
  stat: string;
  statLabel: string;
}

const caseStudies: CaseStudy[] = [
  {
    company: "Airtel",
    logo: "/logos/airtel.svg",
    quote:
      "Managing a network of this scale demands intelligent monitoring. Motadata provided the depth and breadth of observability we needed across all layers of our infrastructure.",
    name: "Network Operations Team",
    position: "Airtel",
    stat: "45%",
    statLabel: "Less Downtime",
  },
  {
    company: "HDFC Life",
    logo: "/logos/hdfc-lif.svg",
    quote:
      "Security and compliance are paramount in financial services. Motadata's platform not only monitors performance but ensures we meet all regulatory requirements effortlessly.",
    name: "IT Infrastructure Team",
    position: "HDFC Life",
    stat: "80%",
    statLabel: "Faster Compliance",
  },
  {
    company: "Suzuki",
    logo: "/logos/suzuki-2.svg",
    quote:
      "With Motadata, we consolidated multiple monitoring tools into one unified platform. The seamless integration with our existing systems made the transition effortless.",
    name: "IT Operations Team",
    position: "Suzuki",
    stat: "5x",
    statLabel: "Faster Delivery",
  },
  {
    company: "Bandhan Bank",
    logo: "/logos/bandhan_bank.svg",
    logoW: 150,
    logoH: 46,
    quote:
      "Motadata's unified observability platform gave us complete visibility across our hybrid infrastructure. The proactive alerting reduced unplanned downtime significantly.",
    name: "Technology Team",
    position: "Bandhan Bank",
    stat: "70%",
    statLabel: "Reduced MTTR",
  },
  {
    company: "JSW Steel",
    logo: "/logos/jsw_steel.svg",
    quote:
      "The AI-driven analytics in Motadata helped us identify bottlenecks before they impacted our operations. It transformed our approach to IT operations management.",
    name: "Digital Transformation Team",
    position: "JSW Steel",
    stat: "60%",
    statLabel: "Cost Savings",
  },
  {
    company: "Vodafone",
    logo: "/logos/vodafone.svg",
    quote:
      "Motadata's ITSM capabilities streamlined our service desk operations. Ticket resolution times dropped dramatically and customer satisfaction scores improved across the board.",
    name: "Service Management Team",
    position: "Vodafone",
    stat: "3x",
    statLabel: "Faster Resolution",
  },
  {
    company: "ONGC",
    logo: "/logos/ongc.svg",
    quote:
      "Handling critical energy infrastructure requires rock-solid monitoring. Motadata delivered the real-time insights we needed to ensure uninterrupted operations.",
    name: "IT Infrastructure Team",
    position: "ONGC",
    stat: "99.9%",
    statLabel: "Uptime Achieved",
  },
  {
    company: "Kotak",
    logo: "/logos/kotak.svg",
    quote:
      "As a leading financial institution, we needed a monitoring solution that could scale with us. Motadata handles our complex multi-environment setup with ease.",
    name: "Technology Team",
    position: "Kotak",
    stat: "10K+",
    statLabel: "Devices Monitored",
  },
];

export function CompanyCaseStudies() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const study = caseStudies[active];

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % caseStudies.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [paused, next]);

  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        {/* Heading */}
        <motion.div
          className="mx-auto max-w-2xl text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-label-md uppercase tracking-widest text-primary">
            Case Studies
          </p>
          <h2 className="mt-3 text-display-md">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-[16px] font-medium leading-[26px] text-[#6B7280]" style={{ fontFamily: 'Inter, "Inter Fallback", system-ui, sans-serif' }}>
            See how organizations across industries leverage Motadata to transform their IT operations.
          </p>
        </motion.div>

        {/* Case study card */}
        <motion.div
          className="rounded-2xl border border-border/60 overflow-hidden bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Top — testimonial: quote left, stat right */}
          <div className="grid md:grid-cols-[3fr,1fr]">
            {/* Left — company logo, quote & person info */}
            <div className="relative p-8 lg:p-12 overflow-hidden bg-muted/40">
              <AnimatePresence initial={false}>
                <motion.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, position: "absolute", inset: 0, padding: "inherit" }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col justify-center"
                >
                  <div className="mb-5 h-10 w-28 relative">
                    <Image
                      src={study.logo}
                      alt={study.company}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <blockquote className="text-[18px] font-medium leading-[28px] text-[#0F1729]" style={{ fontFamily: 'Inter, "Inter Fallback", system-ui, sans-serif' }}>
                    &ldquo;{study.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6">
                    <p className="text-[15px] font-semibold leading-[22px]" style={{ fontFamily: 'Inter, "Inter Fallback", system-ui, sans-serif' }}>{study.name}</p>
                    <p className="text-[14px] font-medium leading-[22px] text-[#6B7280]" style={{ fontFamily: 'Inter, "Inter Fallback", system-ui, sans-serif' }}>
                      {study.position}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right — stat */}
            <div className="relative flex flex-col items-center justify-center p-8 lg:p-12 border-t md:border-t-0 md:border-l border-border/40 bg-muted/40 overflow-hidden">
              <AnimatePresence initial={false}>
                <motion.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, position: "absolute" }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                    {study.stat}
                  </p>
                  <p className="mt-2 text-[14px] font-medium leading-[22px] text-[#6B7280]" style={{ fontFamily: 'Inter, "Inter Fallback", system-ui, sans-serif' }}>
                    {study.statLabel}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom — 8 customer logos in 4×2 grid, clickable, equal size */}
          <div className="border-t border-border/40">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {caseStudies.map((cs, i) => (
                <button
                  key={cs.company}
                  onClick={() => setActive(i)}
                  className={`flex items-center justify-center h-24 transition-all duration-300 ${
                    i % 4 !== 0 ? "border-l border-border/40" : ""
                  } ${i >= 4 ? "border-t border-border/40" : ""} ${
                    active === i
                      ? "bg-primary/5"
                      : "hover:bg-muted/20"
                  }`}
                >
                  <div className="relative" style={{ width: cs.logoW ?? 112, height: cs.logoH ?? 40 }}>
                    <Image
                      src={cs.logo}
                      alt={cs.company}
                      fill
                      className={`object-contain transition-all duration-300 ${
                        active === i
                          ? "opacity-100 grayscale-0"
                          : "opacity-40 grayscale hover:opacity-70"
                      }`}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
