"use client";
import React from "react";
import { motion } from "framer-motion";

interface AnimatedShapeProps {
  className?: string;
  delay?: number;
}

export function AnimatedHexagon({ className = "", delay = 0 }: AnimatedShapeProps) {
  return (
    <motion.svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      className={`pointer-events-none ${className}`}
      initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.1, 1],
        rotate: [0, 360],
      }}
      transition={{
        duration: 20,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <path
        d="M30 2L52 16.5V45.5L30 60L8 45.5V16.5L30 2Z"
        stroke="hsl(var(--primary) / 0.3)"
        strokeWidth="1.5"
        fill="hsl(var(--primary) / 0.05)"
      />
      <path
        d="M30 12L45 21V39L30 48L15 39V21L30 12Z"
        stroke="hsl(var(--primary) / 0.2)"
        strokeWidth="1"
        fill="none"
      />
    </motion.svg>
  );
}

export function AnimatedStar({ className = "", delay = 0 }: AnimatedShapeProps) {
  return (
    <motion.svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      className={`pointer-events-none ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0.2, 0.5, 0.2],
        scale: [0.8, 1.2, 0.8],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 15,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <path
        d="M25 2L28.5 18.5L43 15L32.5 27.5L48 32L32.5 36.5L43 49L28.5 41.5L25 58L21.5 41.5L7 49L17.5 36.5L2 32L17.5 27.5L7 15L21.5 18.5L25 2Z"
        stroke="hsl(var(--primary) / 0.25)"
        strokeWidth="1"
        fill="hsl(var(--primary) / 0.04)"
      />
    </motion.svg>
  );
}

export function AnimatedRing({ className = "", delay = 0 }: AnimatedShapeProps) {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      className={`pointer-events-none ${className}`}
    >
      <motion.circle
        cx="40"
        cy="40"
        r="35"
        stroke="hsl(var(--primary) / 0.15)"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0, rotate: 0 }}
        animate={{
          pathLength: [0, 1, 0],
          rotate: 360,
        }}
        transition={{
          pathLength: { duration: 3, delay, repeat: Infinity },
          rotate: { duration: 25, delay, repeat: Infinity, ease: "linear" }
        }}
      />
      <motion.circle
        cx="40"
        cy="40"
        r="28"
        stroke="hsl(var(--primary) / 0.2)"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0, rotate: 0 }}
        animate={{
          pathLength: [0, 1, 0],
          rotate: -360,
        }}
        transition={{
          pathLength: { duration: 4, delay: delay + 0.5, repeat: Infinity },
          rotate: { duration: 20, delay, repeat: Infinity, ease: "linear" }
        }}
      />
      <motion.circle
        cx="40"
        cy="40"
        r="20"
        stroke="hsl(var(--primary) / 0.25)"
        strokeWidth="1"
        fill="hsl(var(--primary) / 0.03)"
        initial={{ scale: 0.8 }}
        animate={{
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 3,
          delay,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.svg>
  );
}

export function FloatingOrb({ className = "", delay = 0 }: AnimatedShapeProps) {
  return (
    <motion.div
      className={`pointer-events-none ${className}`}
      initial={{ y: 0, x: 0 }}
      animate={{
        y: [-20, 20, -20],
        x: [-10, 10, -10],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 rounded-full bg-primary/5 blur-xl" />
        <div className="absolute inset-2 rounded-full bg-primary/10 blur-lg" />
        <div className="absolute inset-4 rounded-full bg-primary/20" />
      </div>
    </motion.div>
  );
}

export function AnimatedPulse({ className = "", delay = 0 }: AnimatedShapeProps) {
  return (
    <motion.div
      className={`pointer-events-none absolute ${className}`}
      initial={{ scale: 0, opacity: 1 }}
      animate={{
        scale: [0, 2.5],
        opacity: [0.8, 0],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeOut"
      }}
    >
      <div className="h-24 w-24 rounded-full border-2 border-primary/30" />
    </motion.div>
  );
}
