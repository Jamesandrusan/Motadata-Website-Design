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

interface Category {
  label: string;
  items: LogoItem[];
}

const categories: Category[] = [
  {
    label: "Cloud",
    items: [
      { name: "AWS", short: "AWS", icon: ICON("amazonwebservices", "FF9900") },
      { name: "Azure", short: "Az", icon: ICON("microsoftazure", "0078D4") },
      { name: "Google Cloud", short: "GC", icon: ICON("googlecloud", "4285F4") },
      { name: "Docker", short: "Dk", icon: ICON("docker", "2496ED") },
      { name: "Kubernetes", short: "K8s", icon: ICON("kubernetes", "326CE5") },
      { name: "Terraform", short: "Tf", icon: ICON("terraform", "844FBA") },
    ],
  },
  {
    label: "DevOps",
    items: [
      { name: "Jenkins", short: "Jk", icon: ICON("jenkins", "D24939") },
      { name: "Ansible", short: "An", icon: ICON("ansible", "EE0000") },
      { name: "GitHub", short: "GH", icon: ICON("github", "181717") },
      { name: "GitLab", short: "GL", icon: ICON("gitlab", "FC6D26") },
      { name: "Jira", short: "Ji", icon: ICON("jira", "0052CC") },
      { name: "Consul", short: "Co", icon: ICON("consul", "F24C53") },
    ],
  },
  {
    label: "Monitoring",
    items: [
      { name: "Datadog", short: "DD", icon: ICON("datadog", "632CA6") },
      { name: "Grafana", short: "Gr", icon: ICON("grafana", "F46800") },
      { name: "Prometheus", short: "Pr", icon: ICON("prometheus", "E6522C") },
      { name: "New Relic", short: "NR", icon: ICON("newrelic", "1CE783") },
      { name: "Splunk", short: "Sp", icon: ICON("splunk", "000000") },
      { name: "PagerDuty", short: "PD", icon: ICON("pagerduty", "06AC38") },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "PostgreSQL", short: "Pg", icon: ICON("postgresql", "4169E1") },
      { name: "MongoDB", short: "Mg", icon: ICON("mongodb", "47A248") },
      { name: "Redis", short: "Rd", icon: ICON("redis", "DC382D") },
      { name: "Elasticsearch", short: "Es", icon: ICON("elasticsearch", "005571") },
      { name: "MySQL", short: "My", icon: ICON("mysql", "4479A1") },
      { name: "Kafka", short: "Kf", icon: ICON("apachekafka", "231F20") },
    ],
  },
  {
    label: "Collaboration",
    items: [
      { name: "Slack", short: "Sl", icon: ICON("slack", "4A154B") },
      { name: "ServiceNow", short: "SN", icon: ICON("servicenow", "62B58F") },
      { name: "Nginx", short: "Nx", icon: ICON("nginx", "009639") },
      { name: "Apache", short: "Ap", icon: ICON("apache", "D22128") },
      { name: "Vault", short: "Vt", icon: ICON("vault", "FFEC6E") },
      { name: "RabbitMQ", short: "RQ", icon: ICON("rabbitmq", "FF6600") },
    ],
  },
];

function TabCard({ item }: { item: LogoItem }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="group flex flex-col items-center gap-3 rounded-2xl border bg-white p-6 transition-all duration-300 hover:border-primary/40">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted/50 transition-colors duration-300 group-hover:bg-primary/[0.06]">
        {failed ? (
          <span className="text-label-sm-strong text-muted-foreground">{item.short}</span>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.icon}
            alt={item.name}
            width={28}
            height={28}
            loading="lazy"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <span className="text-label-md text-foreground">{item.name}</span>
    </div>
  );
}

/* ── Option I: Tabbed Categories ── */
export function IntegrationTabs() {
  const [active, setActive] = useState(0);

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

        {/* Tab buttons */}
        <div className="mx-auto mt-12 flex max-w-xl flex-wrap justify-center gap-2">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2 text-label-md transition-all duration-300 ${
                active === i
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {categories[active].items.map((item) => (
            <TabCard key={item.name} item={item} />
          ))}
        </div>

        {/* Count badge */}
        <div className="mt-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-4 py-1.5 text-caption text-muted-foreground">
            + 200 more integrations available
          </span>
        </div>
      </div>
    </section>
  );
}
