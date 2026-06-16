"use client";

import React from "react";
import {
  TextRevealCard,
  TextRevealCardTitle,
  TextRevealCardDescription,
} from "@/components/ui/text-reveal-card";
import { motion } from "framer-motion";

/**
 * Standalone text-reveal section.
 * Light background — the card itself uses --foreground as its dark bg,
 * creating a contained dark moment without breaking the overall light theme.
 */
export function TextRevealSection() {
  return (
    <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center"
      >
        <TextRevealCard
          text="Managing IT is complex"
          revealText="Motadata makes it simple"
          className="w-full max-w-3xl"
        >
          <TextRevealCardTitle>
            Hover to discover the difference
          </TextRevealCardTitle>
          <TextRevealCardDescription>
            From reactive firefighting to proactive intelligence — see how
            Motadata transforms IT operations with AI-powered observability
            and service management.
          </TextRevealCardDescription>
        </TextRevealCard>
      </motion.div>
    </div>
  );
}
