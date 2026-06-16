"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const contactCards = [
  {
    icon: Phone,
    title: "Phone",
    details: ["1800 889 1915 (Toll-free)"],
  },
  {
    icon: Mail,
    title: "Support",
    details: ["support@motadata.com"],
  },
  {
    icon: Mail,
    title: "Sales Inquiry",
    details: ["sales@motadata.com"],
  },
  {
    icon: Mail,
    title: "Questions",
    details: ["info@motadata.com"],
  },
];

export function ContactForm() {
  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid lg:grid-cols-[1fr_360px] gap-16 lg:gap-24">

          {/* Left — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-label-md uppercase tracking-widest text-primary">
              Contact Us
            </p>
            <h2 className="mt-3 text-heading-xl text-foreground sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              We&apos;d love to hear from you. Fill out the form and our team will be in touch shortly.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-10 space-y-5">
              {/* First + Last name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block text-label-md text-foreground">
                    First name
                  </label>
                  <Input placeholder="First name" />
                </div>
                <div>
                  <label className="mb-1.5 block text-label-md text-foreground">
                    Last name
                  </label>
                  <Input placeholder="Last name" />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-label-md text-foreground">
                  Email
                </label>
                <Input type="email" placeholder="info@example.com" />
              </div>

              <div>
                <label className="mb-1.5 block text-label-md text-foreground">
                  Phone number
                </label>
                <Input type="tel" placeholder="+1 (999) 999-9999" />
              </div>

              <div>
                <label className="mb-1.5 block text-label-md text-foreground">
                  Message
                </label>
                <textarea
                  className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm min-h-[130px] resize-none placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-ring"
                  placeholder="Leave us a message..."
                />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-1">
                <p className="text-caption text-muted-foreground">
                  You agree to our{" "}
                  <a href="#" className="underline underline-offset-2 hover:text-foreground">
                    Privacy policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline underline-offset-2 hover:text-foreground">
                    Terms
                  </a>
                </p>
                <Button className="hero-shimmer shrink-0 h-11 px-6">
                  Send Message <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Right — Contact info */}
          <div className="flex flex-col gap-8 lg:pt-[72px]">
            {contactCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/8 border border-primary/15">
                  <card.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-label-md text-foreground">{card.title}</h3>
                  {card.details.map((detail) => (
                    <p key={detail} className="mt-0.5 text-body-xs text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
