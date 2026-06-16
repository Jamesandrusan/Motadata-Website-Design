"use client";

import { motion } from "framer-motion";
import { ArrowRight, Rocket, GraduationCap, Users, Check } from "lucide-react";


const paths = [
  {
    icon: Rocket,
    title: "Free Trial",
    description:
      "Start your 30-day free trial and explore all features of Motadata with full access to our unified observability platform.",
    features: [
      "Full platform access",
      "30-day trial period",
      "No credit card required",
      "Access to all features",
    ],
    cta: "Start Free Trial",
    href: "#",
    featured: true,
  },
  {
    icon: GraduationCap,
    title: "Training & Certification",
    description:
      "Learn Motadata through our comprehensive training programs and become a certified expert in unified observability.",
    features: [
      "Self-paced courses",
      "Live training sessions",
      "Certification programs",
      "Hands-on labs",
    ],
    cta: "Explore Training",
    href: "#",
    featured: false,
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Join our vibrant community of IT professionals sharing knowledge, best practices, and solutions.",
    features: [
      "Discussion forums",
      "Knowledge base",
      "User groups",
      "Monthly webinars",
    ],
    cta: "Join Community",
    href: "#",
    featured: false,
  },
];

export function GsPaths() {
  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-label-md uppercase tracking-widest text-primary">
            Choose Your Path
          </span>
          <h2 className="mt-3 text-display-md">
            Select the Best Way to Get Started
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            Select the best way to get started with Motadata based on your role
            and objectives.
          </p>
        </motion.div>

        {/* Connected panel container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 overflow-hidden rounded-2xl border border-border"
        >
          <div className="grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
            {paths.map((path) => (
              <div key={path.title} className="group relative flex flex-col bg-card">
                {/* Card body */}
                <div className="flex flex-1 flex-col px-7 pt-7 pb-6">
                  {/* Icon */}
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-primary/10">
                    <path.icon className="h-5 w-5 text-foreground/50 transition-colors group-hover:text-primary" />
                  </div>

                  <h3 className="text-heading-md">{path.title}</h3>
                  <p className="mt-2 text-body-xs text-muted-foreground">
                    {path.description}
                  </p>

                  <ul className="mt-5 flex-1 space-y-2.5">
                    {path.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                      >
                        <Check className="h-3.5 w-3.5 flex-shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA footer */}
                <div className="border-t border-border bg-muted/40 px-7 pt-4 pb-5">
                  <a
                    href={path.href}
                    className="inline-flex items-center gap-1 text-label-md text-muted-foreground transition-colors group-hover:text-primary"
                  >
                    {path.cta}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
