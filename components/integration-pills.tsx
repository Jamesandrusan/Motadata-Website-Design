"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ── Icon CDN helper ── */
const ICON = (slug: string, hex: string) =>
  `https://cdn.simpleicons.org/${slug}/${hex}`;

interface PillItem {
  name: string;
  short: string;
  icon: string;
}

const integrations: PillItem[] = [
  { name: "AWS", short: "AWS", icon: ICON("amazonwebservices", "FF9900") },
  { name: "Azure", short: "Az", icon: ICON("microsoftazure", "0078D4") },
  { name: "Google Cloud", short: "GC", icon: ICON("googlecloud", "4285F4") },
  { name: "Slack", short: "Sl", icon: ICON("slack", "4A154B") },
  { name: "Docker", short: "Dk", icon: ICON("docker", "2496ED") },
  { name: "Kubernetes", short: "K8s", icon: ICON("kubernetes", "326CE5") },
  { name: "GitHub", short: "GH", icon: ICON("github", "181717") },
  { name: "Terraform", short: "Tf", icon: ICON("terraform", "844FBA") },
  { name: "Jira", short: "Ji", icon: ICON("jira", "0052CC") },
  { name: "ServiceNow", short: "SN", icon: ICON("servicenow", "62B58F") },
  { name: "Datadog", short: "DD", icon: ICON("datadog", "632CA6") },
  { name: "Splunk", short: "Sp", icon: ICON("splunk", "000000") },
  { name: "Grafana", short: "Gr", icon: ICON("grafana", "F46800") },
  { name: "Jenkins", short: "Jk", icon: ICON("jenkins", "D24939") },
  { name: "PostgreSQL", short: "Pg", icon: ICON("postgresql", "4169E1") },
  { name: "MongoDB", short: "Mg", icon: ICON("mongodb", "47A248") },
  { name: "Redis", short: "Rd", icon: ICON("redis", "DC382D") },
  { name: "Elasticsearch", short: "Es", icon: ICON("elasticsearch", "005571") },
  { name: "Prometheus", short: "Pr", icon: ICON("prometheus", "E6522C") },
  { name: "Ansible", short: "An", icon: ICON("ansible", "EE0000") },
  { name: "GitLab", short: "GL", icon: ICON("gitlab", "FC6D26") },
  { name: "PagerDuty", short: "PD", icon: ICON("pagerduty", "06AC38") },
  { name: "New Relic", short: "NR", icon: ICON("newrelic", "1CE783") },
  { name: "Nginx", short: "Nx", icon: ICON("nginx", "009639") },
];

/* ── Single pill with icon ── */
function IconPill({ item }: { item: PillItem }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="group flex items-center gap-2.5 rounded-full border bg-white px-4 py-2.5 shadow-sm transition-all duration-200 hover:border-primary/40">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center">
        {failed ? (
          <span className="text-[9px] font-bold text-muted-foreground">
            {item.short}
          </span>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.icon}
            alt={item.name}
            width={18}
            height={18}
            loading="lazy"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <span className="text-body-xs text-muted-foreground transition-colors group-hover:text-foreground">
        {item.name}
      </span>
    </div>
  );
}

/* ── Option 4: Icon Pills ── */

export function IntegrationPills() {
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

        {/* Pills */}
        <div className="mx-auto mt-14 flex max-w-3xl flex-wrap justify-center gap-3">
          {integrations.map((item) => (
            <IconPill key={item.name} item={item} />
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
