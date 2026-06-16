"use client";

import { Monitor, Globe, Box, Server } from "lucide-react";

const requirements = [
  {
    icon: Server,
    platform: "Linux",
    items: ["2 CPU cores", "4 GB RAM", "10 GB disk space", "Network connectivity"],
  },
  {
    icon: Monitor,
    platform: "Windows",
    items: ["2 CPU cores", "4 GB RAM", "10 GB disk space", "Network connectivity"],
  },
  {
    icon: Globe,
    platform: "Cloud",
    items: ["IAM permissions", "Network access", "API credentials", "5 GB file storage"],
  },
  {
    icon: Box,
    platform: "Containers",
    items: ["Kubernetes 1.20+", "Docker 20.10+", "Cluster admin access", "Persistent volumes"],
  },
];

export function DlRequirements() {
  return (
    <section className="relative z-10 border-t border-border py-16">
      <div className="mx-auto w-full max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-10">
          <p className="mb-3 text-overline text-primary">
            System Requirements
          </p>
          <h2 className="text-heading-xl lg:text-4xl">
            Before You Install
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Minimum requirements for running Motadata agents and collectors.
          </p>
        </div>

        {/* Grid */}
        <div className="overflow-hidden rounded-2xl border border-border">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {requirements.map((r, i) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.platform}
                  className={`bg-card p-6 ${i % 2 === 0 ? "sm:border-r border-border" : ""} ${i < 2 ? "border-b border-border sm:border-b" : ""} ${i < 3 ? "lg:border-r lg:border-b-0" : "lg:border-b-0"}`}
                >
                  <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </span>
                  <p className="mb-4 text-label-lg text-foreground">{r.platform}</p>
                  <ul className="space-y-2">
                    {r.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-body-xs text-muted-foreground">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>


      </div>
    </section>
  );
}
