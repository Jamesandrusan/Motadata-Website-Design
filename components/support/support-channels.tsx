"use client";

import { motion } from "framer-motion";
import { Mail, Phone, TicketCheck } from "lucide-react";

const channels = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Detailed assistance via email",
    link: "support@motadata.com",
    href: "mailto:support@motadata.com",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Talk to a support specialist",
    link: "1800 889 1915 (Toll-free)",
    href: "tel:18008891915",
  },
  {
    icon: TicketCheck,
    title: "Support Portal",
    description: "Access tickets, track issues, view history",
    link: "Raise Ticket",
    href: "#",
  },
];

export function SupportChannels() {
  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-label-md uppercase tracking-widest text-primary">Support Channels</span>
          <h2 className="mt-3 text-display-md">
            Get Support Your Way
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            Multiple channels to reach our expert team, available when you need us.
          </p>
        </motion.div>

        {/* Channel cards — 3 columns */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {channels.map((channel, i) => (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-white p-6 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-foreground/5">
                <channel.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">{channel.title}</h3>
              <p className="mt-2 text-body-xs text-muted-foreground">{channel.description}</p>
              <a
                href={channel.href}
                className="mt-4 inline-block text-label-md text-primary hover:underline"
              >
                {channel.link}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
