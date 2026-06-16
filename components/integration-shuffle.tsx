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
  { name: "Apache", short: "Ap", icon: ICON("apache", "D22128") },
  { name: "Consul", short: "Co", icon: ICON("consul", "F24C53") },
  { name: "Vault", short: "Vt", icon: ICON("vault", "FFEC6E") },
  { name: "Kafka", short: "Kf", icon: ICON("apachekafka", "231F20") },
  { name: "RabbitMQ", short: "RQ", icon: ICON("rabbitmq", "FF6600") },
  { name: "MySQL", short: "My", icon: ICON("mysql", "4479A1") },
];

const GRID_COUNT = 20; // 10 columns x 2 rows

/* ── Single cell ── */
function ShuffleCell({
  item,
  swapping,
}: {
  item: LogoItem;
  swapping: boolean;
}) {
  const [failed, setFailed] = useState(false);

  // Reset failed state when item changes
  useEffect(() => {
    setFailed(false);
  }, [item.icon]);

  return (
    <div
      className="flex aspect-square items-center justify-center border-r border-b transition-all duration-500"
      style={{
        opacity: swapping ? 0 : 1,
        transform: swapping ? "scale(0.7)" : "scale(1)",
        borderColor: "hsl(var(--border))",
      }}
      title={item.name}
    >
      {failed ? (
        <span className="text-[10px] font-bold text-muted-foreground">
          {item.short}
        </span>
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
  );
}

/* ── Option 5: Shuffling Logo Grid ── */

export function IntegrationShuffle() {
  const [grid, setGrid] = useState<LogoItem[]>(() => allLogos.slice(0, GRID_COUNT));
  const [swappingIdx, setSwappingIdx] = useState<number | null>(null);

  const shuffleOne = useCallback(() => {
    setGrid((prev) => {
      // Pick a random cell to swap
      const idx = Math.floor(Math.random() * GRID_COUNT);
      // Pick a random logo NOT currently in the grid
      const currentNames = new Set(prev.map((l) => l.name));
      const available = allLogos.filter((l) => !currentNames.has(l.name));
      if (available.length === 0) return prev;

      const newLogo = available[Math.floor(Math.random() * available.length)];
      const next = [...prev];
      next[idx] = newLogo;

      setSwappingIdx(idx);
      // Clear swapping state after animation
      setTimeout(() => setSwappingIdx(null), 100);

      return next;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(shuffleOne, 1500);
    return () => clearInterval(interval);
  }, [shuffleOne]);

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

        {/* 10x2 bordered grid */}
        <div
          className="mx-auto mt-14 overflow-hidden rounded-2xl border"
          style={{ borderColor: "hsl(var(--border))" }}
        >
          <div className="grid grid-cols-10 border-t border-l" style={{ borderColor: "hsl(var(--border))" }}>
            {grid.map((item, i) => (
              <ShuffleCell
                key={i}
                item={item}
                swapping={swappingIdx === i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
