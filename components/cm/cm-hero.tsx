"use client";

import { ArrowRight, Cloud, Activity, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";

/* ── Cloud Monitoring Dashboard Visual (CSS/SVG) ── */
function HeroDashboard() {
  const kpis = [
    { icon: Cloud, label: "CLOUD INSTANCES", value: "247", color: "text-sky-500", bgLine: "bg-sky-400" },
    { icon: Activity, label: "AVAILABILITY", value: "99.8", unit: "%", color: "text-emerald-500", bgLine: "bg-emerald-400" },
    { icon: Clock, label: "AVG RESPONSE", value: "45", unit: "ms", color: "text-amber-500", bgLine: "bg-amber-400" },
    { icon: AlertTriangle, label: "ACTIVE ALERTS", value: "12", color: "text-rose-500", bgLine: "bg-rose-400" },
  ];

  const cloudNodes = [
    { name: "AWS", color: "bg-orange-500", ring: "ring-orange-200" },
    { name: "Azure", color: "bg-sky-500", ring: "ring-sky-200" },
    { name: "GCP", color: "bg-emerald-500", ring: "ring-emerald-200" },
  ];

  const metricsData = [
    { time: "00:00", cpu: 42, mem: 58, net: 31 },
    { time: "04:00", cpu: 38, mem: 55, net: 28 },
    { time: "08:00", cpu: 65, mem: 72, net: 45 },
    { time: "12:00", cpu: 78, mem: 80, net: 62 },
    { time: "16:00", cpu: 71, mem: 76, net: 55 },
    { time: "20:00", cpu: 55, mem: 65, net: 40 },
    { time: "Now", cpu: 48, mem: 60, net: 35 },
  ];

  const cpuPath = metricsData.map((d, i) => `${i === 0 ? "M" : "L"}${i * (180 / 6)},${60 - (d.cpu / 100) * 50}`).join(" ");
  const memPath = metricsData.map((d, i) => `${i === 0 ? "M" : "L"}${i * (180 / 6)},${60 - (d.mem / 100) * 50}`).join(" ");
  const netPath = metricsData.map((d, i) => `${i === 0 ? "M" : "L"}${i * (180 / 6)},${60 - (d.net / 100) * 50}`).join(" ");

  return (
    <div className="relative rounded-l-2xl border border-border/60 border-r-0 bg-white shadow-lg overflow-hidden" style={{ aspectRatio: "3839/2399" }}>
      <div className="absolute inset-0 flex flex-col p-4 lg:p-5">
        {/* Row 1: KPI Cards */}
        <div className="grid grid-cols-4 gap-3 mb-3">
          {kpis.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <div key={kpi.label} className="rounded-xl border border-border/40 bg-white p-3 relative overflow-hidden">
                <div className={`absolute bottom-0 left-0 right-0 h-[2px] ${kpi.bgLine} opacity-40`} />
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Icon className={`h-3 w-3 ${kpi.color}`} />
                  <span className="text-[8px] font-semibold text-foreground/40 uppercase tracking-wider">{kpi.label}</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-heading-lg text-foreground/80">{kpi.value}</span>
                  {kpi.unit && <span className="text-[10px] font-medium text-foreground/35">{kpi.unit}</span>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Row 2: Cloud Topology + Metrics Chart */}
        <div className="grid grid-cols-2 gap-3 mb-3 flex-1 min-h-0">
          {/* Cloud Topology */}
          <div className="rounded-xl border border-border/40 bg-white p-3 flex flex-col">
            <div className="flex items-center justify-between mb-1">
              <div>
                <span className="text-[11px] font-semibold text-foreground/70">Cloud Topology</span>
                <p className="text-[8px] text-foreground/35">Multi-cloud infrastructure map</p>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[8px] text-foreground/35 font-medium">Live</span>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <svg viewBox="0 0 200 120" className="w-full h-full max-h-[120px]">
                {/* Connection lines from each cloud to central hub */}
                <line x1="40" y1="35" x2="100" y2="60" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,2" opacity="0.5" />
                <line x1="160" y1="35" x2="100" y2="60" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,2" opacity="0.5" />
                <line x1="100" y1="100" x2="100" y2="60" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,2" opacity="0.5" />
                {/* Cross connections */}
                <line x1="40" y1="35" x2="160" y2="35" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2,3" opacity="0.3" />
                <line x1="40" y1="35" x2="100" y2="100" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2,3" opacity="0.3" />
                <line x1="160" y1="35" x2="100" y2="100" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2,3" opacity="0.3" />

                {/* Central hub */}
                <circle cx="100" cy="60" r="10" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
                <text x="100" y="63" textAnchor="middle" fontSize="6" fill="#64748b" fontWeight="600">HUB</text>

                {/* AWS node */}
                <circle cx="40" cy="35" r="14" fill="#fff7ed" stroke="#f97316" strokeWidth="1.2" />
                <text x="40" y="34" textAnchor="middle" fontSize="7" fill="#f97316" fontWeight="700">AWS</text>
                <text x="40" y="42" textAnchor="middle" fontSize="5" fill="#9a3412">96 inst.</text>

                {/* Azure node */}
                <circle cx="160" cy="35" r="14" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.2" />
                <text x="160" y="34" textAnchor="middle" fontSize="6.5" fill="#3b82f6" fontWeight="700">Azure</text>
                <text x="160" y="42" textAnchor="middle" fontSize="5" fill="#1e40af">82 inst.</text>

                {/* GCP node */}
                <circle cx="100" cy="100" r="14" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.2" />
                <text x="100" y="99" textAnchor="middle" fontSize="7" fill="#10b981" fontWeight="700">GCP</text>
                <text x="100" y="107" textAnchor="middle" fontSize="5" fill="#065f46">69 inst.</text>

                {/* Small satellite nodes around each cloud */}
                {/* AWS satellites */}
                <circle cx="20" cy="20" r="4" fill="#fed7aa" opacity="0.7" />
                <circle cx="55" cy="18" r="3" fill="#fed7aa" opacity="0.5" />
                <circle cx="22" cy="48" r="3.5" fill="#fed7aa" opacity="0.6" />

                {/* Azure satellites */}
                <circle cx="145" cy="18" r="3" fill="#bfdbfe" opacity="0.5" />
                <circle cx="178" cy="22" r="4" fill="#bfdbfe" opacity="0.7" />
                <circle cx="180" cy="48" r="3.5" fill="#bfdbfe" opacity="0.6" />

                {/* GCP satellites */}
                <circle cx="80" cy="112" r="3" fill="#a7f3d0" opacity="0.5" />
                <circle cx="120" cy="112" r="3.5" fill="#a7f3d0" opacity="0.6" />
              </svg>
            </div>
            <div className="flex items-center gap-3 mt-1.5">
              {cloudNodes.map((n) => (
                <div key={n.name} className="flex items-center gap-1">
                  <div className={`h-2 w-2 rounded-full ${n.color}`} />
                  <span className="text-[7px] text-foreground/40 font-medium">{n.name}</span>
                </div>
              ))}
              <div className="flex items-center gap-1 ml-auto">
                <span className="text-[7px] text-foreground/30">247 total instances</span>
              </div>
            </div>
          </div>

          {/* Metrics Chart */}
          <div className="rounded-xl border border-border/40 bg-white p-3 flex flex-col">
            <div className="flex items-center justify-between mb-1">
              <div>
                <span className="text-[11px] font-semibold text-foreground/70">Performance Metrics</span>
                <p className="text-[8px] text-foreground/35">CPU, Memory, Network (24h)</p>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[8px] text-foreground/35 font-medium">Live</span>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <svg viewBox="0 0 190 70" className="w-full h-full max-h-[100px]" preserveAspectRatio="xMidYMid meet">
                {/* Grid lines */}
                {[0, 25, 50, 75, 100].map((v) => (
                  <g key={v}>
                    <line x1="5" y1={60 - (v / 100) * 50} x2="185" y2={60 - (v / 100) * 50} stroke="#e2e8f0" strokeWidth="0.5" />
                    <text x="2" y={62 - (v / 100) * 50} fontSize="4" fill="#94a3b8" textAnchor="end">{v}</text>
                  </g>
                ))}
                {/* Time labels */}
                {metricsData.map((d, i) => (
                  <text key={i} x={5 + i * (180 / 6)} y="68" fontSize="4" fill="#94a3b8" textAnchor="middle">{d.time}</text>
                ))}
                {/* CPU line */}
                <path d={cpuPath} fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                {/* Memory line */}
                <path d={memPath} fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                {/* Network line */}
                <path d={netPath} fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex items-center gap-3 mt-1">
              {[
                { color: "bg-blue-500", label: "CPU" },
                { color: "bg-violet-500", label: "Memory" },
                { color: "bg-emerald-500", label: "Network" },
              ].map((m) => (
                <div key={m.label} className="flex items-center gap-1">
                  <div className={`h-1.5 w-1.5 rounded-full ${m.color}`} />
                  <span className="text-[7px] text-foreground/35">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 3: Service Status Table */}
        <div className="rounded-xl border border-border/40 bg-white p-3">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-[11px] font-semibold text-foreground/70">Cloud Service Health</span>
              <span className="ml-2 text-[8px] text-foreground/35">Real-time availability monitoring</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[8px] text-foreground/35 font-medium">Live</span>
            </div>
          </div>
          <div className="grid grid-cols-[1.5fr,0.5fr,0.5fr,1fr] gap-2 mb-1 px-1">
            <span className="text-[8px] font-semibold text-foreground/30 uppercase">Service</span>
            <span className="text-[8px] font-semibold text-foreground/30 uppercase">Status</span>
            <span className="text-[8px] font-semibold text-foreground/30 uppercase">Latency</span>
            <span className="text-[8px] font-semibold text-foreground/30 uppercase">Trend</span>
          </div>
          <div className="space-y-[3px]">
            {[
              { name: "EC2 Compute (us-east-1)", status: "Healthy", latency: "12 ms", statusColor: "text-emerald-500", spark: "M0,6 L6,5 L12,7 L18,4 L24,6 L30,5 L36,7 L40,5", sparkColor: "#10b981" },
              { name: "Azure SQL Database", status: "Healthy", latency: "18 ms", statusColor: "text-emerald-500", spark: "M0,8 L6,6 L12,5 L18,7 L24,4 L30,6 L36,5 L40,7", sparkColor: "#3b82f6" },
              { name: "GCP Cloud Functions", status: "Warning", latency: "89 ms", statusColor: "text-amber-500", spark: "M0,4 L6,7 L12,9 L18,6 L24,8 L30,10 L36,7 L40,9", sparkColor: "#f59e0b" },
              { name: "S3 Object Storage", status: "Healthy", latency: "8 ms", statusColor: "text-emerald-500", spark: "M0,5 L6,4 L12,6 L18,5 L24,4 L30,5 L36,6 L40,4", sparkColor: "#10b981" },
            ].map((s) => (
              <div key={s.name} className="grid grid-cols-[1.5fr,0.5fr,0.5fr,1fr] gap-2 items-center rounded-lg bg-foreground/[0.02] px-2 py-1.5">
                <span className="text-[9px] font-medium text-foreground/60">{s.name}</span>
                <span className={`text-[9px] font-semibold ${s.statusColor}`}>{s.status}</span>
                <span className="text-[9px] font-semibold text-foreground/60">{s.latency}</span>
                <svg viewBox="0 0 40 12" className="w-full h-3" preserveAspectRatio="none">
                  <path d={s.spark} fill="none" stroke={s.sparkColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CMHero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <HeroOrbs />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr,1fr] lg:gap-8">

          {/* ── Left: Text Content ── */}
          <div className="max-w-xl">
            <FadeUp delay={100}>
              <AnimatedBadge text="ObserveOps | Cloud Monitoring" />
            </FadeUp>

            <FadeUp delay={250}>
              <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.1] tracking-tight">
                Monitor Performance, and Availability of Cloud Infrastructure
              </h1>
            </FadeUp>

            <FadeUp delay={400}>
              <p className="mt-5 text-body-md text-muted-foreground">
                Get real-time insights into your cloud deployments. Monitor your cloud infrastructure with absolute visibility of events, logs, and metrics with an AI-powered cloud monitoring tool at scale.
              </p>
            </FadeUp>

            <FadeUp delay={550}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button size="lg" className="hero-shimmer h-12 px-7 text-[15px] bg-foreground text-background hover:bg-foreground/90">
                  Explore the Platform <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-7 text-[15px]">
                  Request a Demo
                </Button>
              </div>
            </FadeUp>

            <FadeUp delay={600}>
              <p className="mt-6 max-w-md text-body-xs text-muted-foreground">
                For CIOs defining digital strategy, for IT Directors enforcing uptime, for NOC Engineers protecting performance — Cloud Monitoring is the intelligence layer that unifies them all.
              </p>
            </FadeUp>
          </div>

          {/* ── Right: Dashboard — starts from the second half, bleeds to right viewport edge ── */}
          <FadeUp delay={500}>
            <div className="relative lg:-mr-[calc((100vw-80rem)/2+3rem)] lg:w-[calc(100%+(100vw-80rem)/2+3rem)]">
              {/* Orange rectangle behind the dashboard — offset 32px left & 32px bottom */}
              <div className="absolute -left-8 -bottom-8 w-full h-full rounded-l-2xl bg-primary/15" />

              <div className="relative">
                <HeroDashboard />
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
