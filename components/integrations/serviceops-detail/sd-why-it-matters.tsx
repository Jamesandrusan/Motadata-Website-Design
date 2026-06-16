"use client";

import { motion } from "framer-motion";

interface SDWhyItMattersProps {
  data: {
    label: string;
    title: string;
    description: string;
  };
}

export function SDWhyItMatters({ data }: SDWhyItMattersProps) {
  const paragraphs = data.description.split("\n").filter(Boolean);

  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Label + Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-overline text-primary">
              {data.label}
            </p>
            <h2 className="mt-3 text-display-md">
              {data.title}
            </h2>

          </motion.div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-4"
          >
            {paragraphs.map((p, i) => (
              <p key={i} className="text-[15px] leading-[1.8] text-muted-foreground">
                {p}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
