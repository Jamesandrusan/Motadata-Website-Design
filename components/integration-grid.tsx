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
  category: string;
}

const integrations: LogoItem[] = [
  { name: "AWS", short: "AWS", icon: ICON("amazonwebservices", "FF9900"), category: "Cloud" },
  { name: "Azure", short: "Az", icon: ICON("microsoftazure", "0078D4"), category: "Cloud" },
  { name: "Google Cloud", short: "GC", icon: ICON("googlecloud", "4285F4"), category: "Cloud" },
  { name: "Docker", short: "Dk", icon: ICON("docker", "2496ED"), category: "DevOps" },
  { name: "Kubernetes", short: "K8s", icon: ICON("kubernetes", "326CE5"), category: "DevOps" },
  { name: "Terraform", short: "Tf", icon: ICON("terraform", "844FBA"), category: "DevOps" },
  { name: "Jenkins", short: "Jk", icon: ICON("jenkins", "D24939"), category: "DevOps" },
  { name: "Ansible", short: "An", icon: ICON("ansible", "EE0000"), category: "DevOps" },
  { name: "GitHub", short: "GH", icon: ICON("github", "181717"), category: "Dev" },
  { name: "GitLab", short: "GL", icon: ICON("gitlab", "FC6D26"), category: "Dev" },
  { name: "Jira", short: "Ji", icon: ICON("jira", "0052CC"), category: "Dev" },
  { name: "Slack", short: "Sl", icon: ICON("slack", "4A154B"), category: "Comms" },
  { name: "Datadog", short: "DD", icon: ICON("datadog", "632CA6"), category: "Monitoring" },
  { name: "Grafana", short: "Gr", icon: ICON("grafana", "F46800"), category: "Monitoring" },
  { name: "Prometheus", short: "Pr", icon: ICON("prometheus", "E6522C"), category: "Monitoring" },
  { name: "New Relic", short: "NR", icon: ICON("newrelic", "1CE783"), category: "Monitoring" },
  { name: "Splunk", short: "Sp", icon: ICON("splunk", "000000"), category: "Monitoring" },
  { name: "PagerDuty", short: "PD", icon: ICON("pagerduty", "06AC38"), category: "Ops" },
  { name: "ServiceNow", short: "SN", icon: ICON("servicenow", "62B58F"), category: "Ops" },
  { name: "PostgreSQL", short: "Pg", icon: ICON("postgresql", "4169E1"), category: "Database" },
  { name: "MongoDB", short: "Mg", icon: ICON("mongodb", "47A248"), category: "Database" },
  { name: "Redis", short: "Rd", icon: ICON("redis", "DC382D"), category: "Database" },
  { name: "Elasticsearch", short: "Es", icon: ICON("elasticsearch", "005571"), category: "Database" },
  { name: "Nginx", short: "Nx", icon: ICON("nginx", "009639"), category: "Infra" },
];

/* ── Logo card with icon fallback ── */
function GridCard({ item }: { item: LogoItem }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="group flex flex-col items-center gap-2.5 rounded-2xl border bg-white p-4 shadow-sm transition-all duration-300 hover:border-primary/40">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted/40 transition-colors duration-300 group-hover:bg-primary/5">
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
      </div>
      <span className="text-caption text-muted-foreground transition-colors group-hover:text-foreground">
        {item.name}
      </span>
    </div>
  );
}

/* ── Option 3: Interactive Grid ── */

export function IntegrationGrid() {
  return (
    <section className="relative z-10 overflow-hidden bg-white">
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

        {/* Grid */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-8">
          {integrations.map((item) => (
            <GridCard key={item.name} item={item} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="h-12 px-8 text-[15px]">
            Start Building for Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
