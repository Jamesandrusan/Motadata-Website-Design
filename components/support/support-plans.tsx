"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Standard",
    price: "Included",
    subtitle: "with all plans",
    features: [
      "Email support",
      "Knowledge base access",
      "Community forum",
      "8\u00d75 coverage",
      "48h response SLA",
    ],
    buttonText: "Current Plan",
    buttonVariant: "outline" as const,
    disabled: true,
    popular: false,
  },
  {
    name: "Premium",
    price: "Custom",
    subtitle: "per deployment",
    features: [
      "Everything in Standard",
      "Phone support",
      "24\u00d75 coverage",
      "4h response SLA",
      "Dedicated CSM",
      "Quarterly reviews",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "default" as const,
    disabled: false,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    subtitle: "enterprise agreement",
    features: [
      "Everything in Premium",
      "24\u00d77 coverage",
      "1h critical SLA",
      "Named support engineer",
      "Custom integrations",
      "On-site training",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    disabled: false,
    popular: false,
  },
];

export function SupportPlans() {
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
          <span className="text-label-md text-primary">Support Plans</span>
          <h2 className="mt-2 text-display-md">
            Choose the Right Plan for Your Team
          </h2>
        </motion.div>

        {/* Plan cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-xl border bg-white p-8 ${
                plan.popular ? "border-primary/40 shadow-md" : "border-border"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-label-sm-strong text-white">
                  Popular
                </span>
              )}

              <h3 className="text-heading-md">{plan.name}</h3>
              <p className="mt-2 text-heading-xl">{plan.price}</p>
              <p className="mt-1 text-body-xs text-muted-foreground">{plan.subtitle}</p>

              {/* Features */}
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <div className="mt-auto pt-6">
                <Button
                  variant={plan.buttonVariant}
                  disabled={plan.disabled}
                  className="w-full"
                >
                  {plan.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
