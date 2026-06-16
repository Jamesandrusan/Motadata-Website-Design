"use client";

import { motion } from "framer-motion";
import {
  User, Users, UserCog, Headset, ShieldCheck, Settings,
  MonitorCog, BarChart3, Building2, Briefcase, Globe,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const personaIconMap: [RegExp, LucideIcon][] = [
  [/IT admin|it administrator|system admin|sysadmin/i, MonitorCog],
  [/IT manager|it director|it leader|IT lead/i, UserCog],
  [/service desk|helpdesk|help desk|support agent|support team|L1|L2/i, Headset],
  [/CISO|security|infosec|information security/i, ShieldCheck],
  [/CIO|CTO|executive|leadership|C-suite|VP/i, Briefcase],
  [/HR|human resource|people ops|people team/i, Users],
  [/end user|employee|staff|workforce|business user/i, User],
  [/developer|devops|engineer|platform/i, Settings],
  [/analyst|reporting|compliance|audit/i, BarChart3],
  [/manager|head of|director|operations/i, Building2],
  [/global|enterprise|organization/i, Globe],
];

function getPersonaIcon(role: string): LucideIcon {
  for (const [regex, icon] of personaIconMap) {
    if (regex.test(role)) return icon;
  }
  return User;
}

function resolvePersonaIcons(personas: Array<{ role: string }>): LucideIcon[] {
  const fallbacks: LucideIcon[] = [UserCog, Headset, ShieldCheck];
  const icons = personas.map((p) => getPersonaIcon(p.role));
  for (let i = 1; i < icons.length; i++) {
    if (icons[i] === icons[i - 1]) {
      icons[i] = fallbacks[i % fallbacks.length];
    }
  }
  return icons;
}

interface SDPersonaValueProps {
  data: {
    label: string;
    title: string;
    personas: Array<{
      role: string;
      description: string;
    }>;
  };
}

export function SDPersonaValue({ data }: SDPersonaValueProps) {
  const icons = resolvePersonaIcons(data.personas);

  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-14"
        >
          <p className="text-overline text-primary">
            {data.label}
          </p>
          <h2 className="mt-3 text-display-md">
            {data.title}
          </h2>
        </motion.div>

        <div className={`grid gap-6 ${data.personas.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"}`}>
          {data.personas.map((persona, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={persona.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group rounded-2xl border border-border/60 bg-card p-6 lg:p-8 transition-colors hover:border-primary/30"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-primary/10">
                  <Icon className="h-5 w-5 text-foreground/50 transition-colors group-hover:text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{persona.role}</h3>
                <p className="mt-3 text-body-xs text-muted-foreground">
                  {persona.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
