"use client";

import { motion } from "framer-motion";

/* ── Heatmap Panel ── */
function HeatmapPanel() {
  const rows = 6;
  const cols = 10;
  const cells = Array.from({ length: rows * cols }, (_, i) => {
    const val = Math.random();
    if (val > 0.9) return "bg-primary/40";
    if (val > 0.7) return "bg-primary/20";
    if (val > 0.4) return "bg-foreground/15";
    return "bg-foreground/8";
  });

  return (
    <div className="rounded-lg border border-border/40 bg-neutral-50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-label-sm text-foreground/70">Server Health Heatmap</span>
        <span className="text-[10px] text-muted-foreground">60 hosts</span>
      </div>
      <div
        className="grid gap-1"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {cells.map((color, i) => (
          <div key={i} className={`aspect-square rounded-sm ${color}`} />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between text-[10px] text-muted-foreground">
        <span>Low utilization</span>
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-sm bg-foreground/8" />
          <div className="h-2 w-2 rounded-sm bg-foreground/15" />
          <div className="h-2 w-2 rounded-sm bg-primary/20" />
          <div className="h-2 w-2 rounded-sm bg-primary/40" />
        </div>
        <span>High utilization</span>
      </div>
    </div>
  );
}

/* ── Network Flow Panel ── */
function NetworkFlowPanel() {
  const nodes = [
    { label: "Load Balancer", x: 50, y: 20 },
    { label: "App Server 1", x: 20, y: 60 },
    { label: "App Server 2", x: 50, y: 60 },
    { label: "App Server 3", x: 80, y: 60 },
    { label: "Database", x: 50, y: 95 },
  ];

  return (
    <div className="rounded-lg border border-border/40 bg-neutral-50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-label-sm text-foreground/70">Network Flow</span>
        <div className="flex items-center gap-1">
          <div className="h-1.5 w-1.5 rounded-full bg-primary/60 animate-pulse" />
          <span className="text-[10px] text-muted-foreground">Live</span>
        </div>
      </div>
      <div className="relative h-40">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 110">
          {/* Connections */}
          <line x1="50" y1="25" x2="20" y2="55" stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="3,2" />
          <line x1="50" y1="25" x2="50" y2="55" stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="3,2" />
          <line x1="50" y1="25" x2="80" y2="55" stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="3,2" />
          <line x1="20" y1="65" x2="50" y2="90" stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="3,2" />
          <line x1="50" y1="65" x2="50" y2="90" stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="3,2" />
          <line x1="80" y1="65" x2="50" y2="90" stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="3,2" />
        </svg>
        {nodes.map((node) => (
          <div
            key={node.label}
            className="absolute flex flex-col items-center"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md border border-border/50 bg-white shadow-sm">
              <div className="h-2 w-2 rounded-full bg-foreground/20" />
            </div>
            <span className="mt-1 text-[8px] font-medium text-muted-foreground whitespace-nowrap">
              {node.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Latency Table Panel ── */
function LatencyTablePanel() {
  const services = [
    { name: "API Gateway", latency: 12, max: 100 },
    { name: "Auth Service", latency: 8, max: 100 },
    { name: "Payment API", latency: 45, max: 100 },
    { name: "User Service", latency: 18, max: 100 },
    { name: "Order Service", latency: 32, max: 100 },
  ];

  return (
    <div className="rounded-lg border border-border/40 bg-neutral-50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-label-sm text-foreground/70">Service Latency</span>
        <span className="text-[10px] text-muted-foreground">P95 response</span>
      </div>
      <div className="space-y-2.5">
        {services.map((svc) => (
          <div key={svc.name}>
            <div className="mb-1 flex items-center justify-between">
              <span className="text-[11px] font-medium text-foreground/70">{svc.name}</span>
              <span className={`text-[11px] font-medium ${svc.latency > 30 ? "text-primary" : "text-muted-foreground"}`}>
                {svc.latency}ms
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-border/30">
              <div
                className={`h-full rounded-full transition-all ${svc.latency > 30 ? "bg-primary/30" : "bg-foreground/15"}`}
                style={{ width: `${(svc.latency / svc.max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HIMDashboardVisuals() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-14"
        >
          <p className="text-overline text-primary">
            Live Dashboards
          </p>
          <h2 className="mt-3 text-display-md">
            Your Infrastructure, at a Glance
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            Real-time dashboards that surface the signals that matter across your entire hybrid
            environment.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[HeatmapPanel, NetworkFlowPanel, LatencyTablePanel].map((Panel, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Panel />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
