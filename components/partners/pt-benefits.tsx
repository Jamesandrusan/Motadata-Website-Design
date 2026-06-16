"use client";

import { BarChart3, GraduationCap, Megaphone, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

const benefits = [
  {
    icon: BarChart3,
    title: "Business Advantages",
    desc: "Enhanced revenue opportunities through competitive partner margins and incentives.",
  },
  {
    icon: GraduationCap,
    title: "Sales and Technical Advantages",
    desc: "Comprehensive enablement support designed to empower both sales and technical teams.",
  },
  {
    icon: Megaphone,
    title: "Marketing Advantages",
    desc: "Access to Motadata\u2019s branded assets along with opportunities for joint promotions and campaigns.",
  },
  {
    icon: Headphones,
    title: "Technical Support Advantages",
    desc: "Round-the-clock assistance backed by a dedicated support manager for seamless operations.",
  },
];

export function PtBenefits() {
  return (
    <section className="relative z-10 py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="mb-3 text-overline text-primary">Partner Benefits</p>
          <h2 className="text-heading-xl lg:text-4xl">Everything You Need to Succeed</h2>
          <p className="mt-4 text-base text-muted-foreground">
            As a Motadata partner, you get access to tools, training, and resources designed to drive your business forward.
          </p>
        </div>

        <div className="rounded-2xl border border-border/60 overflow-hidden bg-card">
          <div className="grid md:grid-cols-2">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              const isRightCol = i % 2 !== 0;
              const isBottomRow = i >= 2;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`group relative overflow-hidden p-6 lg:p-8 transition-colors ${
                    !isBottomRow ? "border-b border-border/40" : ""
                  } ${isRightCol ? "md:border-l border-border/40" : ""}`}
                >
                  <DottedGlowBackground
                    className="opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                    gap={14}
                    radius={1.2}
                    opacity={0.4}
                  />
                  <div className="relative z-10">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-primary/10">
                      <Icon className="h-5 w-5 text-foreground/50 transition-colors group-hover:text-primary" />
                    </div>
                    <h3 className="text-base font-bold">{b.title}</h3>
                    <p className="mt-2 text-body-xs text-muted-foreground">{b.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
