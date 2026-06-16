"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  FileText,
  Video,
  Download,
  GitBranch,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

const resources = [
  {
    icon: BookOpen,
    title: "Knowledge Base",
    description:
      "Browse comprehensive articles, tutorials, and how-to guides for all products.",
  },
  {
    icon: FileText,
    title: "Documentation",
    description:
      "Technical reference, API docs, and integration guides for developers.",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description:
      "Step-by-step video walkthroughs for common tasks and configurations.",
  },
  {
    icon: Download,
    title: "Downloads",
    description:
      "Agents, collectors, plugins, and latest product releases.",
  },
  {
    icon: GitBranch,
    title: "Release Notes",
    description:
      "Stay updated with the latest product updates, fixes, and new features.",
  },
  {
    icon: HelpCircle,
    title: "Getting Started",
    description:
      "Quick start guides to get up and running with Motadata products.",
  },
];

export function SupportResources() {
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
          <span className="text-label-md text-primary">Self-Service Resources</span>
          <h2 className="mt-2 text-display-md">
            Find Answers Quickly
          </h2>
        </motion.div>

        {/* Resource cards — connected grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 overflow-hidden rounded-2xl border border-border/60 bg-white"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, i) => (
              <div
                key={resource.title}
                className={`group cursor-pointer p-8 transition-colors hover:bg-muted/30 ${
                  i >= 3 ? "border-t border-border/40" : ""
                } ${i % 3 !== 0 ? "lg:border-l lg:border-border/40" : ""} ${
                  i % 2 !== 0 ? "max-lg:border-l max-lg:border-border/40" : ""
                } ${i >= 2 && i < 3 ? "max-lg:border-t max-lg:border-border/40" : ""}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{resource.title}</h3>
                    <p className="mt-2 text-body-xs text-muted-foreground leading-relaxed">
                      {resource.description}
                    </p>
                  </div>
                  <resource.icon className="h-5 w-5 shrink-0 ml-4 text-primary transition-transform duration-300 group-hover:scale-150" />
                </div>
                <div className="mt-4 flex items-center gap-1.5 opacity-0 translate-x-[-4px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <span className="text-label-md text-foreground">Learn More</span>
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
