"use client";

import { motion } from "framer-motion";
import {
  Zap, ShieldCheck, Target, Settings, Lock, TrendingUp,
  KeyRound, RefreshCw, Users, UserCheck, Clock, CheckCircle2,
  Eye, Link2, Workflow, ServerCog, Globe, Fingerprint,
  MessageSquare, Bell, Gauge, BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* Map outcome titles to contextual icons via keyword matching */
const iconKeywords: [RegExp, LucideIcon][] = [
  [/single sign|sso|login|sign-on|authenticat/i, KeyRound],
  [/onboard|provisioning|lifecycle|provision/i, UserCheck],
  [/sync|synchroniz|real-time user|accurate user/i, RefreshCw],
  [/automat|reduced manual|reduced admin|overhead|reduced it|eliminate/i, Settings],
  [/access control|permission|role-based|access govern/i, Lock],
  [/security|secure|compliance|governance|audit|trust/i, ShieldCheck],
  [/faster|speed|instant|quick|accelerat|response time/i, Zap],
  [/identity|unified.*control|centrali/i, Fingerprint],
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
  [/time|clock|sla|faster/i, Clock],
];

function getIconForTitle(title: string): LucideIcon {
  for (const [regex, icon] of iconKeywords) {
    if (regex.test(title)) return icon;
  }
  return CheckCircle2;
}

/* Ensure no two adjacent items share the same icon */
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

interface SDKeyOutcomesProps {
  data: {
    label: string;
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
}

export function SDKeyOutcomes({ data }: SDKeyOutcomesProps) {
  const icons = resolveIcons(data.items);

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

        <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
          <div className="grid md:grid-cols-3">
            {data.items.map((item, i) => {
              const Icon = icons[i];
              const isNotFirstCol = i % 3 !== 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`group p-6 lg:p-8 transition-colors hover:bg-neutral-50 border-b border-border/40 ${
                    isNotFirstCol ? "md:border-l border-border/40" : ""
                  }`}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-primary/10">
                    <Icon className="h-5 w-5 text-foreground/50 transition-colors group-hover:text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-body-xs text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
