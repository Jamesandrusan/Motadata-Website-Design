"use client";

import { Users, BookOpen, GitBranch } from "lucide-react";

const resources = [
  {
    icon: Users,
    title: "User Groups",
    desc: "Join local meetups and virtual user groups",
    stat: "25",
    statLabel: "Groups",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base",
    desc: "Community-contributed guides and tutorials",
    stat: "1200",
    statLabel: "Articles",
  },
  {
    icon: GitBranch,
    title: "Open Source",
    desc: "Contribute to our open source projects",
    stat: "15",
    statLabel: "Projects",
  },
];

export function CmResources() {
  return (
    <section className="relative z-10 border-t border-border py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <span className="text-overline text-primary">Community Resources</span>
          <div className="h-px flex-1 bg-border" />
          <span className="text-body-xs text-muted-foreground">Learn, contribute, and grow with the community</span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {resources.map((r) => {
            const Icon = r.icon;
            return (
              <a
                key={r.title}
                href="#"
                className="group/card flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover/card:bg-primary/20">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-right">
                    <p className="text-heading-lg text-foreground">{r.stat}</p>
                    <p className="text-[11px] text-muted-foreground">{r.statLabel}</p>
                  </div>
                </div>
                <h3 className="text-label-md text-foreground transition-colors group-hover/card:text-primary">
                  {r.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{r.desc}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
