"use client";

import { MessageCircle, LifeBuoy, Lightbulb, Puzzle } from "lucide-react";

const forums = [
  {
    icon: MessageCircle,
    title: "General Discussion",
    desc: "Ask questions, share knowledge, and connect with the community",
    topics: "2,450 topics",
    posts: "12,800 posts",
  },
  {
    icon: LifeBuoy,
    title: "Technical Support",
    desc: "Get help from experts and community members",
    topics: "3,200 topics",
    posts: "18,500 posts",
  },
  {
    icon: Lightbulb,
    title: "Feature Requests",
    desc: "Share ideas and vote on new features",
    topics: "850 topics",
    posts: "4,200 posts",
  },
  {
    icon: Puzzle,
    title: "Integrations",
    desc: "Discuss integrations, APIs, and custom development",
    topics: "1,100 topics",
    posts: "5,600 posts",
  },
];

export function CmForums() {
  return (
    <section className="relative z-10 border-t border-border py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <span className="text-overline text-primary">Community Forums</span>
          <div className="h-px flex-1 bg-border" />
          <span className="text-body-xs text-muted-foreground">Connect, discuss, and get help from the community</span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {forums.map((f) => {
            const Icon = f.icon;
            return (
              <a
                key={f.title}
                href="#"
                className="group/card flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover/card:bg-primary/20">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-label-md text-foreground transition-colors group-hover/card:text-primary">
                  {f.title}
                </h3>
                <p className="mt-1 flex-1 text-xs leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
                <div className="mt-4 flex items-center gap-3 text-caption text-muted-foreground">
                  <span>{f.topics}</span>
                  <span>•</span>
                  <span>{f.posts}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
