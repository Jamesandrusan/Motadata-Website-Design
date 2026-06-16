"use client";

import { Building2, ShoppingCart, Settings, Briefcase, Server, User } from "lucide-react";

const types = [
  { icon: Building2, title: "Distributor", desc: "Become a primary and value added distributor in your region." },
  { icon: ShoppingCart, title: "Reseller", desc: "Offer value-added services by reselling Motadata within your domain." },
  { icon: Settings, title: "System Integrator", desc: "Include our products in your broader service and integration projects." },
  { icon: Briefcase, title: "Professional Service Partner", desc: "Deliver implementation, customization and advisory services using Motadata products." },
  { icon: Server, title: "Managed Service Provider", desc: "Use Motadata as a standalone or integrated solution in your managed services." },
  { icon: User, title: "Independent Consultant", desc: "Advise clients and recommend Motadata solutions as part of your consultancy." },
];

export function PtTypes() {
  return (
    <section className="relative z-10 py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="mb-3 text-overline text-primary">
            Empowering Partners Worldwide
          </p>
          <h2 className="text-heading-xl lg:text-4xl">
            Partner Types
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Unlock new opportunities with AI-powered Observability and Enterprise Service Management
            solutions. Our program equips you with training, tools and incentives designed to
            accelerate your sales performance and maximize profitability.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {types.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className="group/card flex flex-col rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover/card:bg-primary/20">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground">
                  {t.title}
                </h3>
                <p className="mt-2 flex-1 text-body-xs text-muted-foreground">{t.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
