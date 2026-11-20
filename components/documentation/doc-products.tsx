"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Infinity as InfinityIcon,
  Activity,
  Headset,
  Network,
  ClipboardList,
  LayoutGrid,
  List,
  LayoutList,
  Rows3,
  type LucideIcon,
} from "lucide-react";

/* ── Data types ── */
interface DocProduct {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  /* short highlight chips shown under the description */
  topics: string[];
  isNew?: boolean;
}

/* ── Products ──
   Each card links to its own documentation page at
   /resources/documentation/<slug>. */
const products: DocProduct[] = [
  {
    slug: "observeops-infinity",
    icon: InfinityIcon,
    title: "ObserveOps Infinity",
    description:
      "The next generation of unified, AI-native observability — built to scale limitlessly across your entire hybrid IT estate with intelligent correlation and automation.",
    topics: ["User Guide", "Deployment", "API Docs", "Release Notes"],
    isNew: true,
  },
  {
    slug: "observeops",
    icon: Activity,
    title: "ObserveOps",
    description:
      "One platform that combines the power of Artificial Intelligence and Machine Learning to provide deep insights into your IT infrastructure. It enables real-time monitoring, analysis, and proactive management of diverse IT components, including networks, servers, applications, logs, flows, and more.",
    topics: ["User Guide", "Installation", "API Docs", "FAQs"],
  },
  {
    slug: "serviceops",
    icon: Headset,
    title: "ServiceOps",
    description:
      "Automates support workflow, eliminates manual/back-end complexities and encourages self-service for maximum productivity and superior user experience.",
    topics: ["Getting Started", "Core Concepts", "Integrations", "How-To"],
  },
  {
    slug: "network-monitoring",
    icon: Network,
    title: "Network Monitoring System",
    description:
      "Enables IT admins with a comprehensive picture of the overall IT health and also gives root-cause analysis, enabling them to resolve network issues before they affect business processes.",
    topics: ["Installation", "User Guide", "Configuration", "IPAM"],
  },
  {
    slug: "itsm",
    icon: ClipboardList,
    title: "IT Service Management",
    description:
      "Organizes information, automates support workflow, eliminates manual/back-end complexities and encourages self-service for maximum productivity and superior user experience.",
    topics: ["Install & Upgrade", "Integration", "User Guide", "FAQs"],
  },
];

/* ── Card ── */
function ProductCard({ product }: { product: DocProduct }) {
  const Icon = product.icon;
  return (
    <Link
      href={`/resources/documentation/${product.slug}`}
      className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
    >
      {product.isNew && (
        <span className="absolute right-5 top-5 rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
          New
        </span>
      )}

      {/* Icon tile — brochure-style primary tint */}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
        <Icon className="h-6 w-6 text-primary" />
      </div>

      <h3 className="mt-5 text-heading-md">{product.title}</h3>
      <p className="mt-2 text-body-xs leading-relaxed text-muted-foreground">
        {product.description}
      </p>

      {/* Topic chips */}
      <div className="mt-5 flex flex-wrap gap-2">
        {product.topics.map((topic) => (
          <span
            key={topic}
            className="rounded-full border border-border/70 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
          >
            {topic}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-auto flex items-center pt-6">
        <span className="inline-flex items-center gap-1.5 text-label-md text-primary">
          View Documentation
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

/* ── Row (Option 2: full-width list) ── */
function ProductRow({ product }: { product: DocProduct }) {
  const Icon = product.icon;
  return (
    <Link
      href={`/resources/documentation/${product.slug}`}
      className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 sm:gap-6 sm:p-7"
    >
      {/* Icon tile */}
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
        <Icon className="h-6 w-6 text-primary" />
      </div>

      {/* Text */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="text-heading-sm">{product.title}</h3>
          {product.isNew && (
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
              New
            </span>
          )}
        </div>
        <p className="mt-1 text-body-xs leading-relaxed text-muted-foreground line-clamp-2">
          {product.description}
        </p>
      </div>

      {/* Action */}
      <span className="hidden flex-shrink-0 items-center gap-1.5 text-label-md text-primary sm:inline-flex">
        View Documentation
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
      <ArrowRight className="h-4 w-4 flex-shrink-0 text-primary transition-transform group-hover:translate-x-0.5 sm:hidden" />
    </Link>
  );
}

/* ── Detailed row (Option 3: full-width list + topic chips)
   With arrowOnly (Option 4): same layout but only an arrow on the right. ── */
function ProductRowDetailed({
  product,
  arrowOnly = false,
}: {
  product: DocProduct;
  arrowOnly?: boolean;
}) {
  const Icon = product.icon;
  return (
    <Link
      href={`/resources/documentation/${product.slug}`}
      className="group flex items-start gap-5 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 sm:gap-6 sm:p-7"
    >
      {/* Icon tile */}
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
        <Icon className="h-6 w-6 text-primary" />
      </div>

      {/* Text */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="text-heading-sm">{product.title}</h3>
          {product.isNew && (
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
              New
            </span>
          )}
        </div>
        <p className="mt-1 text-body-xs leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        {/* Topic chips */}
        <div className="mt-3 flex flex-wrap gap-2">
          {product.topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-border/70 px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Action */}
      {arrowOnly ? (
        <ArrowRight className="h-4 w-4 flex-shrink-0 self-center text-primary transition-transform group-hover:translate-x-0.5" />
      ) : (
        <>
          <span className="hidden flex-shrink-0 items-center gap-1.5 self-center text-label-md text-primary sm:inline-flex">
            View Documentation
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
          <ArrowRight className="h-4 w-4 flex-shrink-0 self-center text-primary transition-transform group-hover:translate-x-0.5 sm:hidden" />
        </>
      )}
    </Link>
  );
}

type ViewMode = "cards" | "rows" | "detailed" | "compact";

const viewOptions: { key: ViewMode; label: string; icon: LucideIcon }[] = [
  { key: "cards", label: "Cards", icon: LayoutGrid },
  { key: "rows", label: "List", icon: List },
  { key: "detailed", label: "Detailed", icon: LayoutList },
  { key: "compact", label: "Compact", icon: Rows3 },
];

export function DocProducts() {
  const [view, setView] = useState<ViewMode>("cards");

  return (
    <section className="relative z-10 pb-24">
      <div className="relative mx-auto w-full max-w-7xl px-6">

        {/* Layout switcher — floated to the right so it doesn't take a full row */}
        <div className="absolute right-6 top-0 z-20">
          <div className="inline-flex items-center gap-1 rounded-xl border border-border bg-card p-1 shadow-sm">
            {viewOptions.map((opt) => {
              const OptIcon = opt.icon;
              const isActive = view === opt.key;
              return (
                <button
                  key={opt.key}
                  onClick={() => setView(opt.key)}
                  aria-label={opt.label}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-label-md transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  }`}
                >
                  <OptIcon className="h-4 w-4" />
                  <span className="hidden sm:inline">{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Layouts — top padding clears the floated switcher */}
        <div className="pt-16 sm:pt-14">
        <AnimatePresence mode="wait">
          {view === "cards" && (
            <motion.div
              key="cards"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </motion.div>
          )}

          {view === "rows" && (
            <motion.div
              key="rows"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="mx-auto flex max-w-4xl flex-col gap-4"
            >
              {products.map((product) => (
                <ProductRow key={product.slug} product={product} />
              ))}
            </motion.div>
          )}

          {view === "detailed" && (
            <motion.div
              key="detailed"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="mx-auto flex max-w-4xl flex-col gap-4"
            >
              {products.map((product) => (
                <ProductRowDetailed key={product.slug} product={product} />
              ))}
            </motion.div>
          )}

          {view === "compact" && (
            <motion.div
              key="compact"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="mx-auto flex max-w-4xl flex-col gap-4"
            >
              {products.map((product) => (
                <ProductRowDetailed key={product.slug} product={product} arrowOnly />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
