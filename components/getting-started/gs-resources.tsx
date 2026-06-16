"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Code2, Server, Wrench } from "lucide-react";

const resources = [
  {
    audience: "For Beginners",
    icon: BookOpen,
    title: "Introduction to Motadata",
    description:
      "Learn the fundamentals of unified observability and how Motadata can transform your IT operations.",
    type: "Video Course",
    duration: "45 min",
    href: "#",
  },
  {
    audience: "For Developers",
    icon: Code2,
    title: "API Integration Guide",
    description:
      "Build custom integrations and automate workflows using the Motadata REST API.",
    type: "Interactive Tutorial",
    duration: "2 hours",
    href: "#",
  },
  {
    audience: "For IT Admins",
    icon: Server,
    title: "Infrastructure Monitoring Setup",
    description:
      "Deploy and configure monitoring for your entire infrastructure in under an hour.",
    type: "Step-by-step Guide",
    duration: "1 hour",
    href: "#",
  },
  {
    audience: "For ServiceOps",
    icon: Wrench,
    title: "ITSM Implementation",
    description:
      "Set up incident management, change control, and service desk workflows.",
    type: "Workshop",
    duration: "90 min",
    href: "#",
  },
];

export function GsResources() {
  return (
    <section className="relative z-10 bg-muted/30 py-24">
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
            Learning Resources
          </span>
          <h2 className="mt-3 text-display-md">
            Comprehensive Training Materials
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            Comprehensive training materials designed for different roles and
            expertise levels.
          </p>
        </motion.div>

        {/* Connected 2×2 panel grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 overflow-hidden rounded-2xl border border-border bg-card"
        >
          <div className="grid sm:grid-cols-2">
            {resources.map((res, i) => (
              <a
                key={res.title}
                href={res.href}
                className={`group flex flex-col p-6 transition-colors hover:bg-muted/40 ${[
                  "",                                                        // 0: top-left — no divider
                  "border-t border-border sm:border-t-0 sm:border-l",      // 1: top-right — top on mobile, left on desktop
                  "border-t border-border",                                  // 2: bottom-left — top always
                  "border-t border-border sm:border-l",                     // 3: bottom-right — top always + left on desktop
                ][i]}`}
              >
                {/* Icon */}
                <res.icon className="mb-2 h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />

                {/* Content */}
                <div className="flex-1">
                  <span className="text-overline text-primary">
                    {res.audience}
                  </span>
                  <h3 className="mt-1 font-semibold leading-snug">
                    {res.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-body-xs text-muted-foreground">
                    {res.description}
                  </p>
                </div>

                {/* Bottom row: meta left · arrow right */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-caption text-muted-foreground">
                    <span className="font-medium">{res.type}</span>
                    <span className="text-muted-foreground/40">•</span>
                    <span>{res.duration}</span>
                  </div>
                  <span className="flex items-center gap-1 text-label-sm text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Start learning
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-8 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-label-md text-primary hover:underline"
          >
            View All Learning Resources
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
