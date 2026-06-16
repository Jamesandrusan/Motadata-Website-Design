"use client";

import { useState } from "react";

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
  { name: "Kafka", short: "Kf", icon: ICON("apachekafka", "231F20") },
  { name: "RabbitMQ", short: "RQ", icon: ICON("rabbitmq", "FF6600") },
  { name: "MySQL", short: "My", icon: ICON("mysql", "4479A1") },
];

// Honeycomb layout: rows alternate between 7 and 6 items, offset
const rows = [
  allLogos.slice(0, 7),
  allLogos.slice(7, 13),
  allLogos.slice(13, 20),
  allLogos.slice(20, 26),
];

const HEX_W = 88;
const HEX_H = 76;
const GAP_X = 4;
const GAP_Y = 4;

function HexCell({ item }: { item: LogoItem }) {
  const [failed, setFailed] = useState(false);
  return (
    <div
      className="group relative flex items-center justify-center transition-all duration-300 hover:scale-110 hover:z-10"
      style={{ width: HEX_W, height: HEX_H }}
      title={item.name}
    >
      {/* Hex shape via clip-path */}
      <div
        className="absolute inset-0 border border-border/60 bg-white transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary/[0.03]"
        style={{
          clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        }}
      />
      <div className="relative z-10">
        {failed ? (
          <span className="text-[10px] font-bold text-muted-foreground">{item.short}</span>
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
      </div>
      {/* Tooltip */}
      <div className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground/90 px-2 py-0.5 text-[10px] font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        {item.name}
      </div>
    </div>
  );
}

/* ── Option G: Honeycomb Grid ── */
export function IntegrationHoneycomb() {
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

        {/* Honeycomb */}
        <div className="mt-14 flex flex-col items-center" style={{ gap: GAP_Y }}>
          {rows.map((row, ri) => (
            <div
              key={ri}
              className="flex items-center"
              style={{
                gap: GAP_X,
                marginLeft: ri % 2 === 1 ? (HEX_W + GAP_X) / 2 : 0,
              }}
            >
              {row.map((item) => (
                <HexCell key={item.name} item={item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
