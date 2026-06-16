"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── CountUp animation component ── */
function CountUp({
  value,
  suffix = "",
  prefix = "",
  duration = 1.5,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
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
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/* ── Stat data ── */
const stats = [
  { value: 45, suffix: "%", prefix: "", label: "Downtime Reduction", desc: "with AI-powered anomaly detection and automated alerting" },
  { value: 2.1, suffix: "M", prefix: "$", label: "Average Annual Savings", desc: "through resource optimization and cloud waste elimination" },
  { value: 68, suffix: "%", prefix: "", label: "Faster Incident Resolution", desc: "with unified telemetry and root-cause correlation" },
  { value: 3, suffix: "x", prefix: "", label: "Improved Efficiency", desc: "through automated workflows and intelligent insights" },
];

export function CMImpactStats() {
  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        {/* Centered heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-10"
        >
          <p className="text-overline text-primary">
            Cost Savings
          </p>
          <h2 className="mt-3 text-display-md">
            Optimise your return rate and retain more of your income
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            Secure premium profits. We seamlessly provide you with the highest returns. Keep up to an extra 17.6% after taxes. Some of your earnings could be exempt from local and city taxes.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="py-6 text-center"
            >
              <p className="stat-number text-display-lg sm:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} prefix={s.prefix} />
              </p>
              <p className="mt-4 text-xl font-semibold">{s.label}</p>
              <p className="mt-2 text-body-xs text-muted-foreground">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
