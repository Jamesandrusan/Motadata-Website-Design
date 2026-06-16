"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export function OOFuture() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Each word fills in opacity as user scrolls through the section
  const paragraph =
    "ObserveOps is the cornerstone of Motadata's AI-Native ITOM vision — delivering end-to-end context, automation, and intelligence. It prepares enterprises for an era of self-healing operations, agentic AI, and continuous optimization.";
  const words = paragraph.split(" ");

  return (
    <section ref={sectionRef} className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-overline text-primary"
          >
            Vision
          </motion.p>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-display-lg lg:text-6xl"
          >
            The Future of IT Operations
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-2xl font-semibold text-primary sm:text-3xl"
          >
            From Observability to Autonomy.
          </motion.p>

          {/* Scroll-driven text opacity fill */}
          <div className="mt-10 text-xl leading-relaxed sm:text-2xl lg:text-3xl lg:leading-snug font-medium">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = (i + 1) / words.length;
              return (
                <ScrollWord
                  key={`${word}-${i}`}
                  word={word}
                  progress={scrollYProgress}
                  start={start * 0.6 + 0.15}
                  end={end * 0.6 + 0.15}
                />
              );
            })}
          </div>

          {/* Bottom tagline — rounded box with dotted glow hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 group relative overflow-hidden rounded-2xl border border-border/60 bg-white px-8 py-8 lg:py-10"
          >
            <DottedGlowBackground
              className="opacity-0 transition-opacity duration-500 group-hover:opacity-60"
              gap={14}
              radius={1.2}
              opacity={0.4}
            />
            <p className="relative z-10 text-xl sm:text-2xl text-foreground">
              Built for <span className="font-bold">Today</span>. Architected for <span className="font-bold">Tomorrow</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Single word with scroll-driven opacity ── */
function ScrollWord({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  const color = useTransform(
    progress,
    [start, end],
    ["hsl(var(--muted-foreground))", "hsl(var(--foreground))"]
  );

  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.3em]">
      {word}
    </motion.span>
  );
}
