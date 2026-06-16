"use client";

import { MessageSquare, Trophy, GitBranch, Award, Code, Calendar, LifeBuoy, Star, ArrowRight } from "lucide-react";

const smallCards = [
  { icon: Trophy, title: "Spartans Program", desc: "Become a Motadata champion and earn exclusive rewards" },
  { icon: GitBranch, title: "Open Source", desc: "Contribute to our growing collection of open source projects" },
  { icon: Award, title: "Certification", desc: "Get certified and validate your expertise" },
  { icon: Code, title: "Developer Hub", desc: "Access APIs, SDKs, and technical documentation" },
];

const bottomCards = [
  { icon: LifeBuoy, title: "Support Forum", desc: "Get help from community experts and support team" },
  { icon: Star, title: "Champions", desc: "Meet our community leaders and brand ambassadors" },
];

export function CmPrograms() {
  return (
    <section className="relative z-10 border-t border-border py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-8">
          <span className="text-overline text-primary">Motadata for Community</span>
          <p className="mt-2 text-body-xs text-muted-foreground">
            Join our vibrant community of IT professionals, developers, and innovators building the future of observability
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Voices of Community — featured card */}
          <a
            href="#"
            className="group/card row-span-2 flex flex-col justify-between rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40 lg:col-span-1"
          >
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover/card:bg-primary/20">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-heading-sm text-foreground transition-colors group-hover/card:text-primary">
                Voices of Community
              </h3>
              <p className="mt-2 text-body-xs text-muted-foreground">
                Share your expertise, learn from peers, and shape the future of IT observability
                through collaborative discussions and knowledge sharing.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-1.5 text-label-md text-primary">
              Join the Discussion
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/card:translate-x-0.5" />
            </span>
          </a>

          {/* 4 small cards */}
          {smallCards.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.title}
                href="#"
                className="group/card flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover/card:bg-primary/20">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-label-md text-foreground transition-colors group-hover/card:text-primary">
                  {c.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{c.desc}</p>
              </a>
            );
          })}

          {/* Community Events — featured card */}
          <a
            href="#"
            className="group/card flex flex-col justify-between rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40 lg:col-span-1"
          >
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover/card:bg-primary/20">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-heading-sm text-foreground transition-colors group-hover/card:text-primary">
                Community Events & Webinars
              </h3>
              <p className="mt-2 text-body-xs text-muted-foreground">
                Join live sessions, workshops, and networking events with industry experts and fellow practitioners
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-1.5 text-label-md text-primary">
              View Calendar
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/card:translate-x-0.5" />
            </span>
          </a>

          {/* 2 bottom cards */}
          {bottomCards.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.title}
                href="#"
                className="group/card flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover/card:bg-primary/20">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-label-md text-foreground transition-colors group-hover/card:text-primary">
                  {c.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{c.desc}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
