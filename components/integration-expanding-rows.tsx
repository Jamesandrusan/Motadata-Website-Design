"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* ── Icon CDN helper ── */
const ICON = (slug: string, hex: string) =>
  `https://cdn.simpleicons.org/${slug}/${hex}`;

interface LogoItem {
  name: string;
  short: string;
  icon: string;
  desc: string;
}

interface CategoryRow {
  label: string;
  count: string;
  items: LogoItem[];
}

const rows: CategoryRow[] = [
  {
    label: "Cloud Providers",
    count: "40+",
    items: [
      { name: "AWS", short: "AWS", icon: ICON("amazonwebservices", "FF9900"), desc: "Amazon Web Services" },
      { name: "Azure", short: "Az", icon: ICON("microsoftazure", "0078D4"), desc: "Microsoft Azure" },
      { name: "Google Cloud", short: "GC", icon: ICON("googlecloud", "4285F4"), desc: "Google Cloud Platform" },
      { name: "Docker", short: "Dk", icon: ICON("docker", "2496ED"), desc: "Container Platform" },
      { name: "Kubernetes", short: "K8s", icon: ICON("kubernetes", "326CE5"), desc: "Container Orchestration" },
      { name: "Terraform", short: "Tf", icon: ICON("terraform", "844FBA"), desc: "Infrastructure as Code" },
    ],
  },
  {
    label: "DevOps & CI/CD",
    count: "35+",
    items: [
      { name: "Jenkins", short: "Jk", icon: ICON("jenkins", "D24939"), desc: "Automation Server" },
      { name: "Ansible", short: "An", icon: ICON("ansible", "EE0000"), desc: "Configuration Management" },
      { name: "GitHub", short: "GH", icon: ICON("github", "181717"), desc: "Code Hosting" },
      { name: "GitLab", short: "GL", icon: ICON("gitlab", "FC6D26"), desc: "DevOps Platform" },
      { name: "Jira", short: "Ji", icon: ICON("jira", "0052CC"), desc: "Project Management" },
      { name: "Consul", short: "Co", icon: ICON("consul", "F24C53"), desc: "Service Mesh" },
    ],
  },
  {
    label: "Monitoring & Observability",
    count: "50+",
    items: [
      { name: "Datadog", short: "DD", icon: ICON("datadog", "632CA6"), desc: "Cloud Monitoring" },
      { name: "Grafana", short: "Gr", icon: ICON("grafana", "F46800"), desc: "Visualization Platform" },
      { name: "Prometheus", short: "Pr", icon: ICON("prometheus", "E6522C"), desc: "Metrics Collection" },
      { name: "New Relic", short: "NR", icon: ICON("newrelic", "1CE783"), desc: "Application Performance" },
      { name: "Splunk", short: "Sp", icon: ICON("splunk", "000000"), desc: "Log Analytics" },
      { name: "PagerDuty", short: "PD", icon: ICON("pagerduty", "06AC38"), desc: "Incident Management" },
    ],
  },
  {
    label: "Databases & Messaging",
    count: "45+",
    items: [
      { name: "PostgreSQL", short: "Pg", icon: ICON("postgresql", "4169E1"), desc: "Relational Database" },
      { name: "MongoDB", short: "Mg", icon: ICON("mongodb", "47A248"), desc: "Document Database" },
      { name: "Redis", short: "Rd", icon: ICON("redis", "DC382D"), desc: "In-memory Store" },
      { name: "Elasticsearch", short: "Es", icon: ICON("elasticsearch", "005571"), desc: "Search Engine" },
      { name: "Kafka", short: "Kf", icon: ICON("apachekafka", "231F20"), desc: "Event Streaming" },
      { name: "MySQL", short: "My", icon: ICON("mysql", "4479A1"), desc: "Relational Database" },
    ],
  },
  {
    label: "Networking & Security",
    count: "30+",
    items: [
      { name: "Nginx", short: "Nx", icon: ICON("nginx", "009639"), desc: "Web Server" },
      { name: "Apache", short: "Ap", icon: ICON("apache", "D22128"), desc: "HTTP Server" },
      { name: "Vault", short: "Vt", icon: ICON("vault", "FFEC6E"), desc: "Secret Management" },
      { name: "Slack", short: "Sl", icon: ICON("slack", "4A154B"), desc: "Team Communication" },
      { name: "ServiceNow", short: "SN", icon: ICON("servicenow", "62B58F"), desc: "IT Service Management" },
      { name: "RabbitMQ", short: "RQ", icon: ICON("rabbitmq", "FF6600"), desc: "Message Broker" },
    ],
  },
];

function RowLogo({ item }: { item: LogoItem }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="group flex items-center gap-3 rounded-xl border bg-white p-3 transition-all duration-300 hover:border-primary/40">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/40">
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
      <div className="min-w-0">
        <p className="text-label-md text-foreground">{item.name}</p>
        <p className="text-[11px] text-muted-foreground">{item.desc}</p>
      </div>
    </div>
  );
}

function ExpandableRow({ row }: { row: CategoryRow }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border transition-all duration-300">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors duration-200 hover:bg-muted/30"
      >
        <div className="flex items-center gap-3">
          <h3 className="text-label-lg text-foreground">{row.label}</h3>
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-caption text-primary">
            {row.count}
          </span>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expandable content */}
      <div
        className="transition-all duration-500 ease-in-out"
        style={{
          maxHeight: open ? 300 : 0,
          opacity: open ? 1 : 0,
          overflow: "hidden",
        }}
      >
        <div className="grid grid-cols-2 gap-3 px-6 pb-6 sm:grid-cols-3 md:grid-cols-6">
          {row.items.map((item) => (
            <RowLogo key={item.name} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Option K: Expanding Category Rows ── */
export function IntegrationExpandingRows() {
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

        {/* Expandable rows */}
        <div className="mt-14 flex flex-col gap-3">
          {rows.map((row) => (
            <ExpandableRow key={row.label} row={row} />
          ))}
        </div>
      </div>
    </section>
  );
}
