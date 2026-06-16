"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowCard({ children, className, glowColor = "primary" }: GlowCardProps) {
  return (
    <motion.div
      className={cn("relative", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      {/* Glow effect */}
      <motion.div
        className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-${glowColor}/20 via-${glowColor}/10 to-${glowColor}/20 opacity-0 blur-sm transition-opacity`}
        whileHover={{ opacity: 1 }}
      />

      {/* Card content */}
      <div className="relative rounded-2xl border bg-white p-8 shadow-sm">
        {children}
      </div>
    </motion.div>
  );
}

export function StatCard({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  return (
    <motion.div
      className="group relative rounded-xl border bg-muted/40 p-4 overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Background gradient on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity"
        whileHover={{ opacity: 1 }}
      />

      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        initial={{ background: "transparent" }}
        whileHover={{
          background: "linear-gradient(90deg, hsl(var(--primary) / 0.1), transparent, hsl(var(--primary) / 0.1))",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="relative">
        <motion.p
          className="text-heading-lg text-primary"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {value}
        </motion.p>
        <p className="mt-1 text-caption text-muted-foreground">{label}</p>
      </div>

      {/* Corner accent */}
      <motion.div
        className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-primary/20 opacity-0"
        whileHover={{ opacity: 1, scale: [1, 1.5, 1] }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}
