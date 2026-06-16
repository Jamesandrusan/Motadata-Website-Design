"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const stats = [
  {
    num: "50%",
    percent: 50,
    label: "Faster root-cause correlation",
    desc: "with unified telemetry and AI-driven context",
  },
  {
    num: "70%",
    percent: 70,
    label: "Increase in resource utilization",
    desc: "through capacity forecasting",
  },
  {
    num: "99.9%",
    percent: 99.9,
    label: "Uptime reliability maintained",
    desc: "across hybrid and multi-cloud workloads",
  },
];

/* ── Reusable heading block ── */
function SectionHeading({ center = true }: { center?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`max-w-2xl mb-10 ${center ? "mx-auto text-center" : ""}`}
    >
      <p className="text-overline text-primary">
        Measured Impact
      </p>
      <h2 className="mt-3 text-display-md">
        Real-world impact. Proven results.
      </h2>
      <p className="mt-4 text-body-md text-muted-foreground">
        See how infrastructure teams are transforming their operations with Motadata Hybrid
        Infrastructure Monitoring.
      </p>
    </motion.div>
  );
}

/* ── Circular progress ring ── */
function CircularProgress({ percent, delay }: { percent: number; color?: string; delay: number }) {
  const size = 120;
  const stroke = 8;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;
  const opacity = percent / 100;

  return (
    <svg width={size} height={size} className="mx-auto">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="currentColor" className="text-primary/10" strokeWidth={stroke} />
      <motion.circle
        cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={`hsl(var(--primary) / ${opacity})`} strokeWidth={stroke} strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
        style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
      />
    </svg>
  );
}

/* ── Animated count-up number ── */
function CountUp({ value, suffix = "%", duration = 1.5 }: { value: number; suffix?: string; duration?: number }) {
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

  return <span ref={ref}>{display}{suffix}</span>;
}

/* ── Animated motion wrapper ── */
function OptionWrapper({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

export function HIMImpactStats() {
  const [option, setOption] = useState(1);

  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        {/* Option toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center rounded-full border border-border/40 p-0.5 bg-muted/20">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <button
                key={num}
                onClick={() => setOption(num)}
                className={`flex items-center justify-center rounded-full h-5 w-5 text-[10px] font-medium transition-all ${
                  option === num
                    ? "bg-white text-foreground shadow-sm"
                    : "text-muted-foreground/60 hover:text-foreground"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* ── Option 1: Simple text only ── */}
          {option === 1 ? (
            <OptionWrapper id="option1">
              <SectionHeading />
              <div className="grid gap-6 md:grid-cols-3">
                {stats.map((s, i) => (
                  <motion.div key={s.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="py-6 text-center">
                    <p className="stat-number text-display-lg sm:text-5xl"><CountUp value={s.percent} /></p>
                    <p className="mt-4 text-xl font-semibold">{s.label}</p>
                    <p className="mt-2 text-body-xs text-muted-foreground">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </OptionWrapper>

          /* ── Option 2: Split layout ── */
          ) : option === 2 ? (
            <OptionWrapper id="option2">
              <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
                <div className="grid lg:grid-cols-[1fr,1.5fr]">
                  <div className="flex flex-col justify-center p-8 lg:p-12">
                    <p className="text-overline text-primary">Measured Impact</p>
                    <h2 className="mt-3 text-display-md">Real-world impact. Proven results.</h2>
                    <p className="mt-4 text-body-md text-muted-foreground">See how infrastructure teams are transforming their operations with Motadata Hybrid Infrastructure Monitoring.</p>
                  </div>
                  <div className="border-t lg:border-t-0 lg:border-l border-border/40 divide-y divide-border/40">
                    {stats.map((s, i) => (
                      <motion.div key={`split-${s.num}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="group px-6 py-6 lg:px-8 lg:py-8 transition-colors hover:bg-neutral-50">
                        <p className="stat-number text-heading-xl sm:text-4xl"><CountUp value={s.percent} /></p>
                        <p className="mt-2 text-xl font-semibold">{s.label}</p>
                        <p className="mt-1 text-body-xs text-muted-foreground">{s.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </OptionWrapper>

          /* ── Option 3: Connected box — heading top, 3 cards bottom ── */
          ) : option === 3 ? (
            <OptionWrapper id="option3">
              <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
                <div className="p-8 lg:p-12 border-b border-border/40">
                  <p className="text-overline text-primary">Measured Impact</p>
                  <h2 className="mt-3 text-display-md">Real-world impact. Proven results.</h2>
                  <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">See how infrastructure teams are transforming their operations with Motadata Hybrid Infrastructure Monitoring.</p>
                </div>
                <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/40">
                  {stats.map((s, i) => (
                    <motion.div key={`box-${s.num}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="px-6 py-8 lg:px-8 lg:py-10 transition-colors hover:bg-neutral-50">
                      <p className="stat-number text-heading-xl sm:text-4xl"><CountUp value={s.percent} /></p>
                      <p className="mt-3 text-xl font-semibold">{s.label}</p>
                      <p className="mt-2 text-body-xs text-muted-foreground">{s.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </OptionWrapper>

          /* ── Option 4: Circular progress rings ── */
          ) : option === 4 ? (
            <OptionWrapper id="option4">
              <SectionHeading />
              <div className="grid gap-6 md:grid-cols-3">
                {stats.map((s, i) => (
                  <motion.div key={`ring-${s.num}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="py-6 text-center">
                    <div className="relative inline-flex items-center justify-center mb-4">
                      <CircularProgress percent={s.percent} delay={i * 0.15} />
                      <p className="absolute stat-number text-heading-lg"><CountUp value={s.percent} /></p>
                    </div>
                    <p className="text-xl font-semibold">{s.label}</p>
                    <p className="mt-2 text-body-xs text-muted-foreground">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </OptionWrapper>

          /* ── Option 5: Split with progress bars inside connected box ── */
          ) : option === 5 ? (
            <OptionWrapper id="option5">
              <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
                <div className="grid lg:grid-cols-[1fr,1.5fr]">
                  <div className="flex flex-col justify-center p-8 lg:p-12">
                    <p className="text-overline text-primary">Measured Impact</p>
                    <h2 className="mt-3 text-display-md">Real-world impact. Proven results.</h2>
                    <p className="mt-4 text-body-md text-muted-foreground">See how infrastructure teams are transforming their operations with Motadata Hybrid Infrastructure Monitoring.</p>
                  </div>
                  <div className="border-t lg:border-t-0 lg:border-l border-border/40 divide-y divide-border/40">
                    {stats.map((s, i) => (
                      <motion.div key={`splitbar-${s.num}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="px-6 py-6 lg:px-8 lg:py-8 transition-colors hover:bg-neutral-50">
                        <div className="flex items-baseline justify-between mb-1">
                          <p className="text-xl font-semibold">{s.label}</p>
                          <p className="stat-number text-heading-lg ml-4 shrink-0"><CountUp value={s.percent} /></p>
                        </div>
                        <p className="text-body-xs text-muted-foreground mb-3">{s.desc}</p>
                        <div className="h-[3px] w-full rounded-full bg-foreground/[0.06] overflow-hidden">
                          <motion.div className="h-full rounded-full" style={{ backgroundColor: `hsl(var(--primary) / ${s.percent / 100})` }} initial={{ width: 0 }} whileInView={{ width: `${s.percent}%` }} viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.15, ease: "easeOut" }} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </OptionWrapper>

          /* ── Option 6: Progress bars without outer box ── */
          ) : option === 6 ? (
            <OptionWrapper id="option6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="max-w-2xl"
                >
                  <p className="text-overline text-primary">
                    Measured Impact
                  </p>
                  <h2 className="mt-3 font-bold tracking-tight">
                    <span className="block text-3xl sm:text-4xl">Real-world impact.</span>
                    <span className="block relative text-5xl sm:text-7xl leading-tight mt-1 text-white">
                      <span className="absolute inset-0" style={{ WebkitTextStroke: "3px hsl(var(--primary))", color: "transparent" }} aria-hidden="true">Proven results.</span>
                      <span className="relative">Proven results.</span>
                    </span>
                  </h2>
                  <p className="mt-4 text-body-md text-muted-foreground">
                    See how infrastructure teams are transforming their operations with Motadata Hybrid
                    Infrastructure Monitoring.
                  </p>
                </motion.div>
                <div className="space-y-10">
                  {stats.map((s, i) => (
                    <motion.div key={`bar-${s.num}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                      <div className="flex items-baseline justify-between mb-1">
                        <p className="text-xl font-semibold">{s.label}</p>
                        <p className="stat-number text-heading-lg ml-4 shrink-0"><CountUp value={s.percent} /></p>
                      </div>
                      <p className="text-body-xs text-muted-foreground mb-3">{s.desc}</p>
                      <div className="h-[3px] w-full rounded-full bg-foreground/[0.06] overflow-hidden">
                        <motion.div className="h-full rounded-full" style={{ backgroundColor: `hsl(var(--primary) / ${s.percent / 100})` }} initial={{ width: 0 }} whileInView={{ width: `${s.percent}%` }} viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.15, ease: "easeOut" }} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </OptionWrapper>

          /* ── Option 7: 10x10 dot grid with percentage fill ── */
          ) : option === 7 ? (
            <OptionWrapper id="option7">
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
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border/40">
                {[
                  { percent: 50, num: "50%", label: "Reduction in Alert Fatigue", desc: "Via AI-driven correlation" },
                  { percent: 40, num: "40%", label: "Faster MTTR", desc: "With unified telemetry" },
                  { percent: 30, num: "30%", label: "Cost Savings", desc: "From platform consolidation" },
                  { percent: 99.9, num: "99.9%", label: "Uptime Maintained", desc: "Across mission-critical systems" },
                ].map((s, i) => {
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
                          // Convert top-to-bottom index to bottom-to-top
                          const row = Math.floor(dotIndex / 10);
                          const col = dotIndex % 10;
                          const bottomUpIndex = (9 - row) * 10 + col;
                          const isFilled = bottomUpIndex < filledDots;
                          return (
                            <div key={dotIndex} className="flex items-center justify-center aspect-square">
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
                                  delay: isFilled ? i * 0.15 + bottomUpIndex * 0.006 : 0,
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
            </OptionWrapper>

          /* ── Option 8: 3-column dot grid (same style as option 7) ── */
          ) : (
            <OptionWrapper id="option8">
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
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/40">
                {[
                  { percent: 50, num: "50%", label: "Reduction in Alert Fatigue", desc: "Via AI-driven correlation" },
                  { percent: 40, num: "40%", label: "Faster MTTR", desc: "With unified telemetry" },
                  { percent: 30, num: "30%", label: "Cost Savings", desc: "From platform consolidation" },
                ].map((s, i) => {
                  const filledDots = Math.round(s.percent);
                  return (
                    <motion.div
                      key={`card-${s.num}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="px-6 lg:px-8 flex justify-center"
                    >
                      <div className="max-w-[260px] w-full">
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
                            <div key={dotIndex} className="flex items-center justify-center aspect-square">
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
                                  delay: isFilled ? i * 0.15 + bottomUpIndex * 0.006 : 0,
                                }}
                              />
                            </div>
                          );
                        })}
                      </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </OptionWrapper>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
