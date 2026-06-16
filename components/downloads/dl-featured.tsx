"use client";

import { Download, Server, Monitor, BarChart3 } from "lucide-react";

const featured = [
  {
    icon: Server,
    name: "Motadata Agent for Linux",
    description: "Lightweight monitoring agent for Linux servers including Ubuntu, CentOS, and Debian",
    version: "v4.2.1",
    size: "34 MB",
  },
  {
    icon: Monitor,
    name: "Motadata Agent for Windows",
    description: "Monitoring agent for Windows Server 2016+ and Windows 10+",
    version: "v4.2.1",
    size: "42 MB",
  },
  {
    icon: BarChart3,
    name: "Excel Collector",
    description: "Unified collector for AWS, Azure, and GCP environments",
    version: "v2.1.0",
    size: "28 MB",
  },
];

export function DlFeatured() {
  return (
    <section className="relative z-10 border-t border-border py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <span className="text-overline text-primary">Popular</span>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {featured.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="group/card flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-colors hover:border-primary/40"
              >
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover/card:bg-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-label-sm text-primary">
                      Popular
                    </span>
                  </div>
                  <h3 className="mb-2 text-heading-sm text-foreground leading-snug">{item.name}</h3>
                  <p className="flex-1 text-body-xs text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-caption text-muted-foreground">
                    <span>{item.version}</span>
                    <span>•</span>
                    <span>{item.size}</span>
                  </div>
                </div>
                <a
                  href="#"
                  className="flex w-full items-center justify-between px-6 border-t border-primary/20 py-3 text-label-md text-primary transition-opacity duration-200 opacity-0 group-hover/card:opacity-100"
                >
                  Download
                  <Download className="h-3.5 w-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
