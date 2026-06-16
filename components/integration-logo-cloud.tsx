"use client";

import { useState, useEffect, useCallback } from "react";

/* ── Icon CDN helper ── */
const ICON = (slug: string, hex: string) =>
  `https://cdn.simpleicons.org/${slug}/${hex}`;

interface LogoItem {
  name: string;
  short: string;
  icon: string;
}

const allLogos: LogoItem[] = [
  { name: "AWS", short: "AWS", icon: ICON("amazonwebservices", "FF9900") },
  { name: "Azure", short: "Az", icon: ICON("microsoftazure", "0078D4") },
  { name: "Google Cloud", short: "GC", icon: ICON("googlecloud", "4285F4") },
  { name: "Docker", short: "Dk", icon: ICON("docker", "2496ED") },
  { name: "Kubernetes", short: "K8s", icon: ICON("kubernetes", "326CE5") },
  { name: "Terraform", short: "Tf", icon: ICON("terraform", "844FBA") },
  { name: "Jenkins", short: "Jk", icon: ICON("jenkins", "D24939") },
  { name: "Ansible", short: "An", icon: ICON("ansible", "EE0000") },
  { name: "GitHub", short: "GH", icon: ICON("github", "181717") },
  { name: "GitLab", short: "GL", icon: ICON("gitlab", "FC6D26") },
  { name: "Jira", short: "Ji", icon: ICON("jira", "0052CC") },
  { name: "Slack", short: "Sl", icon: ICON("slack", "4A154B") },
  { name: "Datadog", short: "DD", icon: ICON("datadog", "632CA6") },
  { name: "Grafana", short: "Gr", icon: ICON("grafana", "F46800") },
  { name: "Prometheus", short: "Pr", icon: ICON("prometheus", "E6522C") },
  { name: "New Relic", short: "NR", icon: ICON("newrelic", "1CE783") },
  { name: "Splunk", short: "Sp", icon: ICON("splunk", "000000") },
  { name: "PagerDuty", short: "PD", icon: ICON("pagerduty", "06AC38") },
  { name: "ServiceNow", short: "SN", icon: ICON("servicenow", "62B58F") },
  { name: "PostgreSQL", short: "Pg", icon: ICON("postgresql", "4169E1") },
  { name: "MongoDB", short: "Mg", icon: ICON("mongodb", "47A248") },
  { name: "Redis", short: "Rd", icon: ICON("redis", "DC382D") },
  { name: "Elasticsearch", short: "Es", icon: ICON("elasticsearch", "005571") },
  { name: "Nginx", short: "Nx", icon: ICON("nginx", "009639") },
];

// Predefined scattered positions (percentage-based) for a cloud layout
const positions = [
  { x: 5, y: 12 }, { x: 20, y: 5 }, { x: 38, y: 15 }, { x: 55, y: 8 },
  { x: 72, y: 12 }, { x: 88, y: 6 }, { x: 10, y: 38 }, { x: 28, y: 32 },
  { x: 45, y: 42 }, { x: 62, y: 35 }, { x: 80, y: 40 }, { x: 92, y: 30 },
  { x: 3, y: 62 }, { x: 18, y: 58 }, { x: 35, y: 65 }, { x: 52, y: 60 },
  { x: 68, y: 68 }, { x: 85, y: 55 }, { x: 8, y: 85 }, { x: 25, y: 82 },
  { x: 42, y: 88 }, { x: 58, y: 84 }, { x: 75, y: 90 }, { x: 90, y: 80 },
];

function CloudLogo({
  item,
  pos,
  highlighted,
}: {
  item: LogoItem;
  pos: { x: number; y: number };
  highlighted: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div
      className="absolute transition-all duration-700 ease-in-out"
      style={{
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        transform: highlighted ? "scale(1.3)" : "scale(1)",
        opacity: highlighted ? 1 : 0.55,
        zIndex: highlighted ? 10 : 1,
      }}
      title={item.name}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl border bg-white shadow-sm transition-all duration-500 ${
          highlighted ? "border-primary/40 shadow-lg shadow-primary/10" : "border-border/60"
        }`}
      >
        {failed ? (
          <span className="text-[9px] font-bold text-muted-foreground">{item.short}</span>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.icon}
            alt={item.name}
            width={22}
            height={22}
            loading="lazy"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      {/* Name label below, visible when highlighted */}
      <div
        className="mt-1 text-center text-[10px] font-medium transition-opacity duration-500"
        style={{ opacity: highlighted ? 1 : 0, color: "hsl(var(--muted-foreground))" }}
      >
        {item.name}
      </div>
    </div>
  );
}

/* ── Option J: Floating Logo Cloud ── */
export function IntegrationLogoCloud() {
  const [highlighted, setHighlighted] = useState<Set<number>>(new Set([0, 5, 10, 18]));

  const cycle = useCallback(() => {
    setHighlighted(() => {
      const next = new Set<number>();
      // Pick 4 random indices
      while (next.size < 4) {
        next.add(Math.floor(Math.random() * allLogos.length));
      }
      return next;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(cycle, 2500);
    return () => clearInterval(interval);
  }, [cycle]);

  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-24">
        {/* Text */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-overline text-primary">
            Integrations
          </p>
          <h2 className="mt-3 text-heading-xl text-foreground sm:text-4xl">
            200+ Out-of-the-Box Integrations
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-body-md text-muted-foreground">
            Connect with your entire technology stack instantly. No complex
            configurations, no lengthy setups — just seamless integration with
            the tools you already use.
          </p>
        </div>

        {/* Cloud */}
        <div className="relative mx-auto mt-14" style={{ height: 420, maxWidth: 900 }}>
          {/* Radial gradient background */}
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.03) 0%, transparent 70%)",
            }}
          />
          {allLogos.map((item, i) => (
            <CloudLogo
              key={item.name}
              item={item}
              pos={positions[i]}
              highlighted={highlighted.has(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
