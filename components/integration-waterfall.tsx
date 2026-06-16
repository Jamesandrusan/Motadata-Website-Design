"use client";

import { useState } from "react";

/* ── Icon CDN helper ── */
const ICON = (slug: string, hex: string) =>
  `https://cdn.simpleicons.org/${slug}/${hex}`;

interface LogoItem {
  name: string;
  short: string;
  icon: string;
  color: string;
  category: string;
}

const row1: LogoItem[] = [
  { name: "AWS", short: "AWS", icon: ICON("amazonwebservices", "FF9900"), color: "#FF9900", category: "Cloud Platform" },
  { name: "Azure", short: "Az", icon: ICON("microsoftazure", "0078D4"), color: "#0078D4", category: "Cloud Platform" },
  { name: "Google Cloud", short: "GC", icon: ICON("googlecloud", "4285F4"), color: "#4285F4", category: "Cloud Platform" },
  { name: "Slack", short: "Sl", icon: ICON("slack", "4A154B"), color: "#4A154B", category: "Collaboration" },
  { name: "ServiceNow", short: "SN", icon: ICON("servicenow", "62B58F"), color: "#62B58F", category: "ITSM" },
  { name: "Docker", short: "Dk", icon: ICON("docker", "2496ED"), color: "#2496ED", category: "Container" },
  { name: "Kubernetes", short: "K8s", icon: ICON("kubernetes", "326CE5"), color: "#326CE5", category: "Container" },
  { name: "Terraform", short: "Tf", icon: ICON("terraform", "844FBA"), color: "#844FBA", category: "IaC" },
  { name: "VMware", short: "VM", icon: ICON("vmware", "607078"), color: "#607078", category: "Virtualization" },
  { name: "Cloudflare", short: "CF", icon: ICON("cloudflare", "F38020"), color: "#F38020", category: "CDN" },
  { name: "DigitalOcean", short: "DO", icon: ICON("digitalocean", "0080FF"), color: "#0080FF", category: "Cloud Platform" },
  { name: "Heroku", short: "Hk", icon: ICON("heroku", "430098"), color: "#430098", category: "PaaS" },
];

const row2: LogoItem[] = [
  { name: "Jira", short: "Ji", icon: ICON("jira", "0052CC"), color: "#0052CC", category: "Collaboration" },
  { name: "Datadog", short: "DD", icon: ICON("datadog", "632CA6"), color: "#632CA6", category: "Monitoring" },
  { name: "Splunk", short: "Sp", icon: ICON("splunk", "000000"), color: "#000000", category: "Logging" },
  { name: "Grafana", short: "Gr", icon: ICON("grafana", "F46800"), color: "#F46800", category: "Visualization" },
  { name: "Prometheus", short: "Pr", icon: ICON("prometheus", "E6522C"), color: "#E6522C", category: "Monitoring" },
  { name: "PagerDuty", short: "PD", icon: ICON("pagerduty", "06AC38"), color: "#06AC38", category: "Alerting" },
  { name: "New Relic", short: "NR", icon: ICON("newrelic", "1CE783"), color: "#1CE783", category: "APM" },
  { name: "Elastic", short: "El", icon: ICON("elastic", "005571"), color: "#005571", category: "Search" },
  { name: "Dynatrace", short: "Dt", icon: ICON("dynatrace", "1496FF"), color: "#1496FF", category: "APM" },
  { name: "Sentry", short: "St", icon: ICON("sentry", "362D59"), color: "#362D59", category: "Monitoring" },
  { name: "Nagios", short: "Ng", icon: ICON("nagios", "999999"), color: "#999999", category: "Monitoring" },
  { name: "Zabbix", short: "Zb", icon: ICON("zabbix", "D40000"), color: "#D40000", category: "Monitoring" },
];

const row3: LogoItem[] = [
  { name: "Jenkins", short: "Jk", icon: ICON("jenkins", "D24939"), color: "#D24939", category: "CI/CD" },
  { name: "GitHub", short: "GH", icon: ICON("github", "181717"), color: "#181717", category: "DevOps" },
  { name: "GitLab", short: "GL", icon: ICON("gitlab", "FC6D26"), color: "#FC6D26", category: "DevOps" },
  { name: "PostgreSQL", short: "Pg", icon: ICON("postgresql", "4169E1"), color: "#4169E1", category: "Database" },
  { name: "MongoDB", short: "Mg", icon: ICON("mongodb", "47A248"), color: "#47A248", category: "Database" },
  { name: "Redis", short: "Rd", icon: ICON("redis", "DC382D"), color: "#DC382D", category: "Database" },
  { name: "MySQL", short: "My", icon: ICON("mysql", "4479A1"), color: "#4479A1", category: "Database" },
  { name: "Ansible", short: "An", icon: ICON("ansible", "EE0000"), color: "#EE0000", category: "Automation" },
  { name: "Kafka", short: "Kf", icon: ICON("apachekafka", "231F20"), color: "#231F20", category: "Messaging" },
  { name: "RabbitMQ", short: "RQ", icon: ICON("rabbitmq", "FF6600"), color: "#FF6600", category: "Messaging" },
  { name: "Nginx", short: "Nx", icon: ICON("nginx", "009639"), color: "#009639", category: "Web Server" },
  { name: "Elasticsearch", short: "Es", icon: ICON("elasticsearch", "005571"), color: "#005571", category: "Search" },
];

const row4: LogoItem[] = [
  { name: "Cisco", short: "Cc", icon: ICON("cisco", "1BA0D7"), color: "#1BA0D7", category: "Networking" },
  { name: "Fortinet", short: "Ft", icon: ICON("fortinet", "EE3124"), color: "#EE3124", category: "Security" },
  { name: "Consul", short: "Co", icon: ICON("consul", "F24C53"), color: "#F24C53", category: "Service Mesh" },
  { name: "Vault", short: "Vt", icon: ICON("vault", "FFEC6E"), color: "#FFEC6E", category: "Security" },
  { name: "ArgoCD", short: "Ar", icon: ICON("argo", "EF7B4D"), color: "#EF7B4D", category: "GitOps" },
  { name: "Helm", short: "Hm", icon: ICON("helm", "0F1689"), color: "#0F1689", category: "K8s" },
  { name: "Bitbucket", short: "BB", icon: ICON("bitbucket", "0052CC"), color: "#0052CC", category: "DevOps" },
  { name: "CircleCI", short: "CI", icon: ICON("circleci", "343434"), color: "#343434", category: "CI/CD" },
  { name: "Salesforce", short: "SF", icon: ICON("salesforce", "00A1E0"), color: "#00A1E0", category: "CRM" },
  { name: "Zendesk", short: "ZD", icon: ICON("zendesk", "03363D"), color: "#03363D", category: "Support" },
  { name: "Microsoft Teams", short: "MT", icon: ICON("microsoftteams", "6264A7"), color: "#6264A7", category: "Collaboration" },
  { name: "Snowflake", short: "SF", icon: ICON("snowflake", "29B5E8"), color: "#29B5E8", category: "Data" },
];

const rows = [
  { items: row1, speed: 35, direction: "left" as const },
  { items: row2, speed: 40, direction: "right" as const },
  { items: row3, speed: 32, direction: "left" as const },
  { items: row4, speed: 38, direction: "right" as const },
];

function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  return `${parseInt(h.substring(0, 2), 16)}, ${parseInt(h.substring(2, 4), 16)}, ${parseInt(h.substring(4, 6), 16)}`;
}

function FloatCard({ item, delay }: { item: LogoItem; delay: number }) {
  const [failed, setFailed] = useState(false);
  const rgb = hexToRgb(item.color);

  return (
    <article
      className="float-card group relative min-w-[240px] rounded-2xl border bg-white px-5 py-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Hover radial glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 20% 50%, rgba(${rgb}, 0.03), transparent 60%)`,
        }}
      />

      <div className="relative flex items-center gap-4">
        {/* Icon box with gradient bg */}
        <div
          className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
          style={{
            background: `linear-gradient(135deg, rgba(${rgb}, 0.094), rgba(${rgb}, 0.03))`,
          }}
        >
          {failed ? (
            <span
              style={{
                color: item.color,
                fontSize: "19.2px",
                fontWeight: 800,
                lineHeight: 1,
              }}
            >
              {item.short.charAt(0)}
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
              style={{ color: item.color }}
            />
          )}
          {/* Bottom glow on hover */}
          <div
            className="absolute -bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-40"
            style={{ backgroundColor: item.color }}
          />
        </div>

        {/* Text */}
        <div className="min-w-0">
          <p className="truncate text-label-md text-foreground">
            {item.name}
          </p>
          <p
            className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
          >
            {item.category}
          </p>
        </div>
      </div>
    </article>
  );
}

export function IntegrationWaterfall() {
  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Text */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-overline text-primary">
            Integrations
          </p>
          <h2 className="mt-3 text-heading-xl text-foreground sm:text-4xl">
            200+ Out-of-the-Box Integrations
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] font-medium leading-[26px] text-[#6B7280]" style={{ fontFamily: 'Inter, "Inter Fallback", system-ui, sans-serif' }}>
            Connect infrastructure, applications, and services across 200+ integrations to unify telemetry, workflows, and operational data.
          </p>
        </div>

        {/* Marquee rows */}
        <div className="mt-12 space-y-2">
          {rows.map((row, ri) => {
            const looped = [...row.items, ...row.items];
            return (
              <div
                key={ri}
                className="marquee-mask overflow-hidden py-2"
              >
                <div
                  className={`flex w-max gap-6 ${
                    row.direction === "left"
                      ? "marquee-track-left"
                      : "marquee-track-right"
                  }`}
                  style={{ "--marquee-speed": `${row.speed}s` } as React.CSSProperties}
                >
                  {looped.map((item, i) => (
                    <FloatCard
                      key={`${item.name}-${ri}-${i}`}
                      item={item}
                      delay={(i % row.items.length) * 0.4}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
