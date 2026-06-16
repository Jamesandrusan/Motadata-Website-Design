"use client";

import { motion } from "framer-motion";
import {
  KeyRound, UserCheck, Lock, Target, Zap, Settings,
  ShieldCheck, RefreshCw, Users, Clock, CheckCircle2,
  Eye, Workflow, Globe, Fingerprint, MessageSquare,
  Bell, Gauge, TrendingUp, ServerCog, Link2, BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconKeywords: [RegExp, LucideIcon][] = [
  [/single sign|sso|login|sign-on|authenticat/i, KeyRound],
  [/onboard|provisioning|lifecycle|provision|new hire/i, UserCheck],
  [/sync|synchroniz|real-time user|accurate/i, RefreshCw],
  [/automat|reduced manual|reduced admin|overhead|reduced it/i, Settings],
  [/access control|permission|role-based|access manage|centrali.*access/i, Lock],
  [/security|secure|compliance|governance|audit|trust/i, ShieldCheck],
  [/faster|speed|instant|quick|accelerat|response time/i, Zap],
  [/identity|unified.*control/i, Fingerprint],
  [/context|visibility|visib|end-to-end|closed-loop/i, Eye],
  [/ticket|incident|issue|bug|resolution|mttr/i, Target],
  [/noise|filter|priorit/i, BarChart3],
  [/collaborat|team|unified.*it|bridge/i, Users],
  [/chat|conversation|message|engagement/i, MessageSquare],
  [/notif|alert|update|status/i, Bell],
  [/workflow|orchestrat|adaptive/i, Workflow],
  [/device|endpoint|hybrid|remote|mobile/i, Globe],
  [/password|fatigue|friction|reduc.*friction/i, Link2],
  [/scale|scalab|performan/i, Gauge],
  [/vendor|open|flexib|customiz/i, ServerCog],
  [/improv|better|enhanc|experience|adoption/i, TrendingUp],
  [/email|inbox|capture|convert/i, CheckCircle2],
  [/time|clock|sla|offboard/i, Clock],
];

function getIconForTitle(title: string): LucideIcon {
  for (const [regex, icon] of iconKeywords) {
    if (regex.test(title)) return icon;
  }
  return CheckCircle2;
}

function resolveIcons(items: Array<{ title: string }>): LucideIcon[] {
  const fallbacks: LucideIcon[] = [Zap, ShieldCheck, Target, Settings, Lock, TrendingUp];
  const icons = items.map((item) => getIconForTitle(item.title));
  for (let i = 1; i < icons.length; i++) {
    if (icons[i] === icons[i - 1]) {
      icons[i] = fallbacks[i % fallbacks.length];
    }
  }
  return icons;
}

interface SDCoreUseCasesProps {
  data: {
    label: string;
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
}

export function SDCoreUseCases({ data }: SDCoreUseCasesProps) {
  const icons = resolveIcons(data.items);

  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
          <div className="grid lg:grid-cols-[1fr,1.2fr]">

            {/* Left — heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center p-8 lg:p-12"
            >
              <p className="text-overline text-primary">
                {data.label}
              </p>
              <h2 className="mt-3 text-display-md">
                {data.title}
              </h2>
            </motion.div>

            {/* Right — connected list */}
            <div className="border-t lg:border-t-0 lg:border-l border-border/40 divide-y divide-border/40">
              {data.items.map((item, i) => {
                const Icon = icons[i];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group flex items-start gap-4 px-6 py-6 lg:px-8 lg:py-8 transition-all hover:bg-neutral-100"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-primary/10 mt-0.5">
                      <Icon className="h-5 w-5 text-foreground/50 transition-colors group-hover:text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-1 text-body-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
