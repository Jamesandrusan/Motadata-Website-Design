"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Globe, FileCheck, Shield, Scale } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

interface Cert {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const certifications: Cert[] = [
  {
    icon: FileCheck,
    title: "SOC 1 Type II",
    desc: "Ensures strong internal controls for financial reporting and overall information security.",
  },
  {
    icon: Lock,
    title: "SOC 2 Type II",
    desc: "Evaluates how well an organization manages security, availability, processing integrity, confidentiality, and privacy.",
  },
  {
    icon: ShieldCheck,
    title: "SOC 3",
    desc: "Provides public assurance of an organization's data protection and security practices.",
  },
  {
    icon: Globe,
    title: "GDPR",
    desc: "A regulation that protects personal data and privacy for individuals in the European Union.",
  },
  {
    icon: Shield,
    title: "CIS",
    desc: "A set of security best practices designed to help organizations strengthen their cybersecurity posture.",
  },
  {
    icon: Scale,
    title: "POPIA",
    desc: "South Africa's data protection law that governs how personal information is collected, used, and safeguarded.",
  },
];

export function CompanySecurity() {
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
            Security & Compliance
          </p>
          <h2 className="mt-3 text-display-md">
            Enterprise-Grade Security & Compliance
          </h2>
        </motion.div>

        {/* Bordered container — 4 cols */}
        <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {certifications.map((cert, i) => {
              const Icon = cert.icon;
              const isNotFirstCol = i % 3 !== 0;
              const isSecondRow = i >= 3;
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`group relative overflow-hidden p-6 lg:p-8 text-center transition-colors hover:bg-neutral-50 ${
                    isNotFirstCol ? "md:border-l border-border/40" : ""
                  } ${isSecondRow ? "border-t border-border/40" : ""} ${
                    i % 2 !== 0 ? "sm:border-l sm:max-md:border-l" : ""
                  } ${i >= 2 ? "sm:max-md:border-t" : ""}`}
                >
                  <DottedGlowBackground
                    className="opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                    gap={14}
                    radius={1.2}
                    opacity={0.4}
                  />
                  <div className="relative z-10">
                    <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-primary/10">
                      <Icon className="h-5 w-5 text-foreground/50 transition-colors group-hover:text-primary" />
                    </div>
                    <h3 className="text-label-lg">{cert.title}</h3>
                    <p className="mt-1 text-body-xs text-muted-foreground">
                      {cert.desc}
                    </p>
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
