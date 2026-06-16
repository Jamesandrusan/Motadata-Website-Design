"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ── Icon CDN helper ── */
const ICON = (slug: string, hex: string) =>
  `https://cdn.simpleicons.org/${slug}/${hex}`;

interface LogoItem {
  name: string;
  short: string;
  icon: string;
}

/* ── 3 rows of logos ── */
const row1: LogoItem[] = [
  { name: "AWS", short: "AWS", icon: ICON("amazonwebservices", "FF9900") },
  { name: "Azure", short: "Az", icon: ICON("microsoftazure", "0078D4") },
  { name: "Google Cloud", short: "GC", icon: ICON("googlecloud", "4285F4") },
  { name: "Slack", short: "Sl", icon: ICON("slack", "4A154B") },
  { name: "Docker", short: "Dk", icon: ICON("docker", "2496ED") },
  { name: "Kubernetes", short: "K8s", icon: ICON("kubernetes", "326CE5") },
  { name: "GitHub", short: "GH", icon: ICON("github", "181717") },
  { name: "Terraform", short: "Tf", icon: ICON("terraform", "844FBA") },
];

const row2: LogoItem[] = [
  { name: "Jira", short: "Ji", icon: ICON("jira", "0052CC") },
  { name: "ServiceNow", short: "SN", icon: ICON("servicenow", "62B58F") },
  { name: "Datadog", short: "DD", icon: ICON("datadog", "632CA6") },
  { name: "Splunk", short: "Sp", icon: ICON("splunk", "000000") },
  { name: "Grafana", short: "Gr", icon: ICON("grafana", "F46800") },
  { name: "Jenkins", short: "Jk", icon: ICON("jenkins", "D24939") },
  { name: "PostgreSQL", short: "Pg", icon: ICON("postgresql", "4169E1") },
  { name: "MongoDB", short: "Mg", icon: ICON("mongodb", "47A248") },
];

const row3: LogoItem[] = [
  { name: "Redis", short: "Rd", icon: ICON("redis", "DC382D") },
  { name: "Elasticsearch", short: "Es", icon: ICON("elasticsearch", "005571") },
  { name: "Prometheus", short: "Pr", icon: ICON("prometheus", "E6522C") },
  { name: "Ansible", short: "An", icon: ICON("ansible", "EE0000") },
  { name: "GitLab", short: "GL", icon: ICON("gitlab", "FC6D26") },
  { name: "PagerDuty", short: "PD", icon: ICON("pagerduty", "06AC38") },
  { name: "New Relic", short: "NR", icon: ICON("newrelic", "1CE783") },
  { name: "Nginx", short: "Nx", icon: ICON("nginx", "009639") },
];

/* ── Single logo card ── */
function LogoCard({ item }: { item: LogoItem }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="group relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border bg-white shadow-sm transition-all duration-200 hover:border-primary/40">
      {failed ? (
        <span className="text-[10px] font-bold text-muted-foreground">
          {item.short}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.icon}
          alt={item.name}
          width={24}
          height={24}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}

      {/* Tooltip */}
      <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground/90 px-2.5 py-1 text-[10px] font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        {item.name}
      </span>
    </div>
  );
}

/* ── Scrolling row ── */
function MarqueeRow({
  items,
  reverse,
  speed = 30,
}: {
  items: LogoItem[];
  reverse?: boolean;
  speed?: number;
}) {
  // Duplicate items 4x for seamless loop
  const duped = [...items, ...items, ...items, ...items];

  return (
    <div
      className="flex w-full overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        maskImage:
          "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className="flex shrink-0 gap-4"
        style={{
          animation: `marquee-row ${speed}s linear infinite${reverse ? " reverse" : ""}`,
        }}
      >
        {duped.map((item, i) => (
          <LogoCard key={`${item.name}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

/* ── Full Marquee Integration Section ── */

export function IntegrationMarquee() {
  return (
    <section className="relative z-10 overflow-hidden bg-white">
      {/* ── Text content ── */}
      <div className="relative z-10 mx-auto max-w-2xl px-6 pt-24 text-center">
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

      {/* ── Scrolling logo rows ── */}
      <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-4 pb-24">
        <MarqueeRow items={row1} speed={35} />
        <MarqueeRow items={row2} speed={30} reverse />
        <MarqueeRow items={row3} speed={38} />
      </div>
    </section>
  );
}
