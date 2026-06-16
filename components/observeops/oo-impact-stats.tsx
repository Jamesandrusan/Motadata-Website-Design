"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    percent: 50,
    num: "50%",
    label: "Reduction in Alert Fatigue",
    desc: "Via AI-driven correlation",
  },
  {
    percent: 40,
    num: "40%",
    label: "Faster MTTR",
    desc: "With unified telemetry",
  },
  {
    percent: 30,
    num: "30%",
    label: "Cost Savings",
    desc: "From platform consolidation",
  },
  {
    percent: 99.9,
    num: "99.9%",
    label: "Uptime Maintained",
    desc: "Across mission-critical systems",
  },
];

/* ── Animated count-up number ── */
function CountUp({
  value,
  suffix = "%",
  duration = 1.5,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const start = 0;
    const end = value;
    const startTime = performance.now();
    const ms = duration * 1000;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / ms, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * eased;

      if (end % 1 !== 0) {
        setDisplay(current.toFixed(1));
      } else {
        setDisplay(Math.round(current).toString());
      }

      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function OOImpactStats() {
  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-14"
        >
          <h2 className="text-display-md">
            Measured Results. Documented Success.
          </h2>
        </motion.div>

        {/* 4-column dot grid stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border/40">
          {stats.map((s, i) => {
            const filledDots = Math.round(s.percent);
            return (
              <motion.div
                key={`dots-${s.num}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="px-6 lg:px-8"
              >
                {/* Number */}
                <p className="text-display-lg tracking-tight text-primary sm:text-5xl">
                  <CountUp value={s.percent} />
                </p>

                {/* Label + description */}
                <p className="mt-4 text-base lg:text-lg leading-relaxed text-foreground">
                  <span className="font-semibold">{s.label}</span>{" "}
                  <span className="text-muted-foreground">{s.desc}</span>
                </p>

                {/* 10x10 dot grid — fills bottom to top */}
                <div className="mt-8 grid grid-cols-10 w-full gap-[10px]">
                  {Array.from({ length: 100 }).map((_, dotIndex) => {
                    const row = Math.floor(dotIndex / 10);
                    const col = dotIndex % 10;
                    const bottomUpIndex = (9 - row) * 10 + col;
                    const isFilled = bottomUpIndex < filledDots;
                    return (
                      <div
                        key={dotIndex}
                        className="flex items-center justify-center aspect-square"
                      >
                        <motion.div
                          className="rounded-full"
                          style={{
                            width: "50%",
                            height: "50%",
                            backgroundColor: "hsl(var(--foreground) / 0.1)",
                          }}
                          whileInView={{
                            backgroundColor: isFilled
                              ? "hsl(var(--foreground) / 0.8)"
                              : "hsl(var(--foreground) / 0.1)",
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.15,
                            delay: isFilled
                              ? i * 0.15 + bottomUpIndex * 0.006
                              : 0,
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
