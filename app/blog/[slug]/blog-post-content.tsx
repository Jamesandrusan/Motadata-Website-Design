"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Quote, Lightbulb, Pen, CheckCircle } from "lucide-react";

function LinkedInFilled({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
import { Badge } from "@/components/ui/badge";
import { BlogShare } from "@/components/blog/blog-share";
import { BlogRelated } from "@/components/blog/blog-related";
import { BlogToc } from "@/components/blog/blog-toc";
import { BlogAuthorCard } from "@/components/blog/blog-author-card";
import { BlogNewsletter } from "@/components/blog/blog-newsletter";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { getPostBySlug } from "@/data/blog-posts";
import type { BlogPost, BlogInterstitial } from "@/data/blog-posts";

interface BlogPostContentProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

const richContentStyles = `
  [&>p]:mb-5 [&>p]:text-[15px] [&>p]:leading-[1.8] [&>p]:text-muted-foreground
  [&>h2]:mb-4 [&>h2]:mt-12 [&>h2]:text-xl [&>h2]:font-bold [&>h2]:tracking-tight [&>h2]:text-foreground [&>h2]:scroll-mt-20
  [&>h3]:mb-3 [&>h3]:mt-8 [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:text-foreground [&>h3]:scroll-mt-20
  [&>ul]:mb-5 [&>ul]:ml-6 [&>ul]:list-disc [&>ul]:space-y-2
  [&>ul>li]:text-[15px] [&>ul>li]:leading-[1.8] [&>ul>li]:text-muted-foreground
  [&>ol]:mb-5 [&>ol]:ml-6 [&>ol]:list-decimal [&>ol]:space-y-2
  [&>ol>li]:text-[15px] [&>ol>li]:leading-[1.8] [&>ol>li]:text-muted-foreground
  [&_strong]:font-semibold [&_strong]:text-foreground

  [&_table]:w-full [&_table]:my-8 [&_table]:overflow-hidden [&_table]:rounded-lg [&_table]:border [&_table]:text-[14px]
  [&_thead]:bg-muted/50
  [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:text-[13px] [&_th]:font-semibold [&_th]:text-foreground
  [&_td]:px-4 [&_td]:py-3 [&_td]:text-[13px] [&_td]:text-muted-foreground [&_td]:border-t

  [&_blockquote]:my-10 [&_blockquote]:rounded-xl [&_blockquote]:border-l-4 [&_blockquote]:border-border [&_blockquote]:bg-muted/30 [&_blockquote]:px-6 [&_blockquote]:py-6
  [&_blockquote_p]:text-[15px] [&_blockquote_p]:leading-[1.8] [&_blockquote_p]:text-foreground [&_blockquote_p]:italic [&_blockquote_p]:mb-2
  [&_blockquote_cite]:text-[13px] [&_blockquote_cite]:font-semibold [&_blockquote_cite]:not-italic [&_blockquote_cite]:text-primary

  [&_.blog-diagram]:my-8 [&_.blog-diagram]:rounded-xl [&_.blog-diagram]:border [&_.blog-diagram]:bg-muted/20 [&_.blog-diagram]:p-6 [&_.blog-diagram]:overflow-hidden
  [&_.blog-diagram-title]:mb-4 [&_.blog-diagram-title]:text-center [&_.blog-diagram-title]:text-sm [&_.blog-diagram-title]:font-semibold [&_.blog-diagram-title]:text-foreground
  [&_.blog-diagram-caption]:mt-4 [&_.blog-diagram-caption]:text-center [&_.blog-diagram-caption]:text-[12px] [&_.blog-diagram-caption]:text-muted-foreground/70

  [&_.blog-proscons]:my-6 [&_.blog-proscons]:grid [&_.blog-proscons]:gap-4 [&_.blog-proscons]:sm:grid-cols-2
  [&_.blog-pros]:rounded-xl [&_.blog-pros]:border [&_.blog-pros]:border-border [&_.blog-pros]:bg-card [&_.blog-pros]:p-5
  [&_.blog-cons]:rounded-xl [&_.blog-cons]:border [&_.blog-cons]:border-border [&_.blog-cons]:bg-card [&_.blog-cons]:p-5
  [&_.blog-proscons-title]:mb-3 [&_.blog-proscons-title]:text-[13px] [&_.blog-proscons-title]:font-bold [&_.blog-proscons-title]:uppercase [&_.blog-proscons-title]:tracking-wider
  [&_.blog-pros_.blog-proscons-title]:text-green-700
  [&_.blog-cons_.blog-proscons-title]:text-red-700
  [&_.blog-proscons_ul]:ml-5 [&_.blog-proscons_ul]:space-y-1.5 [&_.blog-proscons_ul]:list-disc
  [&_.blog-proscons_li]:text-[13px] [&_.blog-proscons_li]:leading-relaxed [&_.blog-proscons_li]:text-muted-foreground
  [&_.blog-pros_li]:marker:text-green-500
  [&_.blog-cons_li]:marker:text-red-500


  [&_details]:my-0 [&_details]:rounded-none [&_details]:border-0 [&_details]:bg-white [&_details]:overflow-hidden [&_details]:transition-colors
  [&_details[open]]:bg-white
  [&_summary]:cursor-pointer [&_summary]:px-6 [&_summary]:py-5 [&_summary]:text-base [&_summary]:font-semibold [&_summary]:text-foreground [&_summary]:transition-colors [&_summary]:list-none [&_summary]:flex [&_summary]:items-center [&_summary]:justify-between
  [&_summary]:marker:hidden [&_summary::-webkit-details-marker]:hidden
  [&_details_p]:px-6 [&_details_p]:pb-5 [&_details_p]:text-sm [&_details_p]:leading-relaxed [&_details_p]:text-muted-foreground

  [&>div>img]:w-full [&>div>img]:h-auto [&>div>img]:object-cover
  [&_.blog-cta-block]:my-12 [&_.blog-cta-block]:rounded-xl [&_.blog-cta-block]:border [&_.blog-cta-block]:bg-card [&_.blog-cta-block]:p-8 [&_.blog-cta-block]:text-center
  [&_.blog-cta-title]:text-xl [&_.blog-cta-title]:font-bold [&_.blog-cta-title]:text-foreground [&_.blog-cta-title]:mb-3
  [&_.blog-cta-block>p]:text-[14px] [&_.blog-cta-block>p]:leading-relaxed [&_.blog-cta-block>p]:text-muted-foreground [&_.blog-cta-block>p]:mb-5
  [&_.blog-cta-button]:inline-flex [&_.blog-cta-button]:items-center [&_.blog-cta-button]:rounded-md [&_.blog-cta-button]:bg-primary [&_.blog-cta-button]:px-6 [&_.blog-cta-button]:py-2.5 [&_.blog-cta-button]:text-[14px] [&_.blog-cta-button]:font-medium [&_.blog-cta-button]:text-primary-foreground [&_.blog-cta-button]:transition-colors [&_.blog-cta-button]:hover:bg-primary/90 [&_.blog-cta-button]:no-underline
`;

export function BlogPostContent({ post, relatedPosts }: BlogPostContentProps) {
  const [version, setVersion] = useState(1);
  const contentRef = useRef<HTMLDivElement>(null);

  // Load alternate post for version switch
  const altPost = getPostBySlug("top-it-asset-management-tools");

  // Determine which post data to display based on version
  const showAlt = post.slug === "network-topology-comprehensive-guide" && version === 2 && altPost;
  const displayPost = showAlt ? altPost : post;

  const hasToc = displayPost.toc && displayPost.toc.length > 0;

  // Wrap consecutive <details> elements in a connected container
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const details = el.querySelectorAll("details");
    if (details.length === 0) return;

    // Group consecutive details
    let group: Element[] = [];
    details.forEach((d, i) => {
      group.push(d);
      const next = d.nextElementSibling;
      const isLast = i === details.length - 1;
      if (isLast || !next || next.tagName !== "DETAILS") {
        if (group.length > 0) {
          const wrapper = document.createElement("div");
          wrapper.className = "blog-faq-connected my-6";
          group[0].parentNode?.insertBefore(wrapper, group[0]);
          group.forEach((item) => wrapper.appendChild(item));
        }
        group = [];
      }
    });
  }, [displayPost.content]);

  return (
    <>
      <article className="relative z-10">
        <div className="mx-auto w-full max-w-7xl px-6 pt-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-body-xs text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Version Switch - only for network topology post */}
          {post.slug === "network-topology-comprehensive-guide" && (
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-border/60 bg-muted/30 px-4 py-3">
              <span className="text-body-xs text-muted-foreground">View:</span>
              <div className="flex gap-1 rounded-lg bg-background p-1 border border-border/40">
                <button
                  onClick={() => setVersion(1)}
                  className={`rounded-md px-4 py-1.5 text-label-md transition-all ${
                    version === 1
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Option 1
                </button>
                <button
                  onClick={() => setVersion(2)}
                  className={`rounded-md px-4 py-1.5 text-label-md transition-all ${
                    version === 2
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Option 2
                </button>
              </div>
              <span className="text-caption text-muted-foreground">
                {version === 1 ? "Network Topology Guide" : "Top ITAM Tools 2026"}
              </span>
            </div>
          )}

          {/* ── Two-column layout: left content, right sticky TOC ── */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`grid gap-12 ${hasToc ? "lg:grid-cols-[1fr_280px]" : ""}`}>
              {/* ── Left column: header + article content ── */}
              <div>
                {/* Header */}
                <div className="mb-10">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="border-border bg-muted/50 text-primary text-[11px]">
                      {displayPost.category}
                    </Badge>
                    <span className="flex items-center gap-1 text-[13px] text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      {displayPost.readingTime}
                    </span>
                  </div>

                  <h1 className="mt-5 text-display-md lg:text-[2.5rem] lg:leading-[1.15]">
                    {displayPost.title}
                  </h1>

                  <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
                    {displayPost.excerpt}
                  </p>

                  {/* Author & date — with layout switcher */}
                  <AuthorMetaSection
                    author={displayPost.author}
                    reviewer={displayPost.reviewer}
                    publishedAt={displayPost.publishedAt}
                    readingTime={displayPost.readingTime}
                  />
                </div>

                {/* Thin divider */}
                <div className="mb-10 h-px bg-border/60" />

                {/* Article content — split at h2 to inject interstitials */}
                <BlogContentWithInterstitials
                  content={displayPost.content}
                  interstitials={displayPost.interstitials}
                  contentRef={contentRef}
                  className={richContentStyles}
                />

                {/* Author card — inside left column */}
                <div className="mt-12">
                  <BlogAuthorCard author={displayPost.author} />
                </div>

                {/* Tags + Share — inside left column */}
                <div className="pb-12">
                  <div className="flex flex-col gap-6 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap gap-2">
                      {displayPost.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="border-border bg-muted/50 text-muted-foreground text-[11px]"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <BlogShare title={displayPost.title} slug={post.slug} />
                  </div>
                </div>
              </div>

              {/* ── Right column: sticky TOC + newsletter ── */}
              {hasToc && (
                <aside className="hidden lg:block">
                  <div className="sticky top-20 space-y-6">
                    <BlogToc items={displayPost.toc!} />
                    <BlogNewsletter />
                  </div>
                </aside>
              )}
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related posts */}
      <div className="border-t">
        <BlogRelated posts={relatedPosts} />
      </div>
    </>
  );
}

/* ── Split content at <h2 and inject interstitials ── */
function BlogContentWithInterstitials({
  content,
  interstitials,
  contentRef,
  className,
}: {
  content: string;
  interstitials?: BlogInterstitial[];
  contentRef: React.RefObject<HTMLDivElement | null>;
  className: string;
}) {
  if (!interstitials || interstitials.length === 0) {
    return (
      <div
        ref={contentRef}
        className={className}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  // Split at every <h2 — first chunk is intro before first h2
  const chunks = content.split(/(?=<h2[\s>])/);
  // Build a map: afterSection index → array of interstitials
  const interMap = new Map<number, BlogInterstitial[]>();
  interstitials.forEach((item) => {
    const list = interMap.get(item.afterSection) || [];
    list.push(item);
    interMap.set(item.afterSection, list);
  });

  // h2 section index: first chunk (index 0 in chunks) is the intro (no h2),
  // chunk 1 is h2 #0, chunk 2 is h2 #1, etc.
  return (
    <div ref={contentRef}>
      {chunks.map((chunk, i) => {
        const h2Index = i - 1; // intro = -1, first h2 = 0, etc.
        return (
          <div key={i}>
            <div
              className={className}
              dangerouslySetInnerHTML={{ __html: chunk }}
            />
            {interMap.get(h2Index)?.map((item, j) => (
              <BlogInterstitialBlock key={`${h2Index}-${j}`} data={item} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

/* ── Blog interstitial cards ── */
function BlogInterstitialBlock({ data }: { data: BlogInterstitial }) {
  if (data.type === "stats" && data.items) {
    return (
      <div className="group relative my-8 overflow-hidden rounded-xl border border-primary/40 bg-primary/[0.03] p-6">
        <DottedGlowBackground className="opacity-0 transition-opacity duration-500 group-hover:opacity-100" gap={18} radius={1} opacity={0.3} />
        <div className="relative z-10 grid grid-cols-3 divide-x divide-border/40">
          {data.items.map((item, i) => (
            <div key={i} className="px-4 text-center first:pl-0 last:pr-0">
              <p className="text-heading-lg text-primary">{item.value}</p>
              <p className="mt-1 text-caption text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (data.type === "testimonial") {
    return (
      <div className="group relative my-8 overflow-hidden rounded-xl border border-primary/40 bg-primary/[0.03] p-6">
        <DottedGlowBackground className="opacity-0 transition-opacity duration-500 group-hover:opacity-100" gap={18} radius={1} opacity={0.3} />
        <div className="relative z-10">
          <Quote className="h-5 w-5 text-primary/40 mb-3" />
          <p className="text-sm leading-relaxed text-foreground/80 italic">
            &ldquo;{data.quote}&rdquo;
          </p>
          <div className="mt-4 flex items-center gap-2">
            <div className="h-px flex-1 bg-border/40" />
            <p className="text-caption text-muted-foreground shrink-0">
              {data.author} &middot; {data.role}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (data.type === "callout") {
    return (
      <div className="group relative my-8 overflow-hidden rounded-xl border border-primary/40 bg-primary/[0.03] p-6">
        <DottedGlowBackground className="opacity-0 transition-opacity duration-500 group-hover:opacity-100" gap={18} radius={1} opacity={0.25} />
        <div className="relative z-10 flex items-start gap-3">
          <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-label-md text-foreground">{data.title}</p>
            <p className="mt-2 text-body-xs text-muted-foreground">{data.body}</p>
          </div>
        </div>
      </div>
    );
  }

  if (data.type === "cta") {
    const v = data.variant || "black";

    const wrapperClass =
      v === "black"
        ? "bg-[#111] text-white"
        : v === "orange"
          ? "text-white"
          : "bg-muted/30 border border-border/60 text-foreground";

    const wrapperStyle =
      v === "orange"
        ? { background: "linear-gradient(135deg, hsl(var(--gradient-from)), hsl(var(--gradient-to)))" }
        : undefined;

    const dotColor =
      v === "white" ? undefined : "rgba(255,255,255,0.3)";

    const descClass =
      v === "white"
        ? "text-muted-foreground"
        : "text-white/50";

    const btnClass =
      v === "black"
        ? "bg-primary text-primary-foreground hover:opacity-90"
        : v === "orange"
          ? "bg-white text-foreground hover:bg-white/90"
          : "bg-primary text-primary-foreground hover:opacity-90";

    return (
      <div
        className={`group relative my-8 overflow-hidden rounded-2xl p-8 ${wrapperClass}`}
        style={wrapperStyle}
      >
        <DottedGlowBackground
          className="opacity-0 transition-opacity duration-500 group-hover:opacity-50"
          gap={14}
          radius={1.8}
          opacity={0.6}
          color={dotColor}
        />
        <div className="relative z-10">
          <h3 className="text-heading-md sm:text-2xl">
            {data.title}
          </h3>
          <p className={`mt-3 max-w-lg text-sm leading-relaxed ${descClass}`}>
            {data.body}
          </p>
          <div className="mt-6">
            <a
              href={data.buttonHref || "#"}
              className={`inline-flex h-11 items-center gap-2 rounded-xl px-6 text-label-md transition-opacity ${btnClass}`}
            >
              {data.buttonText || "Learn More"}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

/* ── Author Hover Tooltip ── */
function AuthorHoverTooltip({
  author,
  children,
  variant = "default",
}: {
  author: BlogPost["author"];
  children: React.ReactNode;
  variant?: "default" | "minimal";
}) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && variant === "default" && (
        <div className="absolute left-0 top-full mt-2 z-50 w-64 rounded-xl border bg-popover p-4 shadow-xl animate-in fade-in-0 zoom-in-95 duration-200">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-label-md-strong text-primary">
              {author.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div className="min-w-0">
              <p className="text-label-md text-foreground truncate">{author.name}</p>
              <p className="text-[11px] text-muted-foreground">{author.role}</p>
            </div>
          </div>
          {author.bio && (
            <p className="mt-3 text-[12px] leading-relaxed text-muted-foreground line-clamp-3">
              {author.bio}
            </p>
          )}
          {author.linkedin && (
            <a
              href={author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-[#f17463] px-3 py-1.5 text-[12px] font-medium text-white hover:bg-[#d4564a] transition-colors"
            >
              <LinkedInFilled className="h-3 w-3" />
              Visit Profile
            </a>
          )}
        </div>
      )}
      {show && variant === "minimal" && (
        <div className="absolute right-0 top-full mt-2 z-50 w-56 rounded-lg bg-foreground text-background px-4 py-3 shadow-xl animate-in fade-in-0 slide-in-from-top-1 duration-150">
          <p className="text-[12px] font-semibold">{author.name}</p>
          <p className="text-[11px] opacity-70">{author.role}</p>
          {author.bio && (
            <p className="mt-2 text-[11px] leading-relaxed opacity-60 line-clamp-2">
              {author.bio}
            </p>
          )}
          {author.linkedin && (
            <a
              href={author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-[#f17463] hover:underline"
            >
              <LinkedInFilled className="h-3 w-3" />
              Visit Profile
            </a>
          )}
          <div className="absolute right-2 -top-1 h-2 w-2 rotate-45 bg-foreground" />
        </div>
      )}
    </div>
  );
}

/* ── Author Meta Section with layout switcher (mockup layout is A) ── */
function AuthorMetaSection({
  author,
  reviewer,
  publishedAt,
  readingTime,
}: {
  author: BlogPost["author"];
  reviewer?: BlogPost["reviewer"];
  publishedAt: string;
  readingTime: string;
}) {
  const [layout, setLayout] = useState<"A" | "B" | "C" | "D" | "E">("A");

  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const shortDate = new Date(publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="mt-8">
      {/* Layout switcher — keep older options as requested */}
      <div className="mb-4 flex items-center gap-1 rounded-lg bg-muted/50 p-1 w-fit border border-border/40">
        {(["A", "B", "C", "D", "E"] as const).map((opt) => (
          <button
            key={opt}
            onClick={() => setLayout(opt)}
            className={`rounded-md px-3 py-1 text-caption transition-all ${
              layout === opt
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {opt === "A" && "3-Column (New)"}
            {opt === "B" && "Inline"}
            {opt === "C" && "Pills"}
            {opt === "D" && "Stacked"}
            {opt === "E" && "3 Cards"}
          </button>
        ))}
      </div>

      {/* Layout A: 3-Column with mockup design icons */}
      {layout === "A" && (
        <div className={`grid gap-6 ${reviewer ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
          {/* Written by */}
          <div className="flex flex-col">
            <p className="text-overline-sm text-muted-foreground/80 mb-2.5">Written by</p>
            <AuthorHoverTooltip author={author}>
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <User className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-label-md text-foreground group-hover:text-primary transition-colors truncate">{author.name}</p>
                    {author.linkedin && (
                      <LinkedInFilled className="h-3.5 w-3.5 text-[#f17463] shrink-0" />
                    )}
                  </div>
                  <p className="text-[12px] text-muted-foreground truncate">{author.role}</p>
                </div>
              </div>
            </AuthorHoverTooltip>
          </div>

          {/* Reviewed by */}
          {reviewer && (
            <div className="flex flex-col">
              <p className="text-overline-sm text-muted-foreground/80 mb-2.5">Reviewed by</p>
              <AuthorHoverTooltip author={reviewer}>
                <div className="flex items-center gap-3 cursor-pointer group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <User className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="text-label-md text-foreground group-hover:text-primary transition-colors truncate">{reviewer.name}</p>
                      {reviewer.linkedin && (
                        <LinkedInFilled className="h-3.5 w-3.5 text-[#f17463] shrink-0" />
                      )}
                    </div>
                    <p className="text-[12px] text-muted-foreground truncate">{reviewer.role}</p>
                  </div>
                </div>
              </AuthorHoverTooltip>
            </div>
          )}

          {/* Published */}
          <div className="flex flex-col">
            <p className="text-overline-sm text-muted-foreground/80 mb-2.5">Published</p>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Calendar className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-label-md text-foreground">{formattedDate}</p>
                <p className="text-[12px] text-muted-foreground">{readingTime}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Layout B: Inline row with dot separators */}
      {layout === "B" && (
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <AuthorHoverTooltip author={author}>
            <span className="flex items-center gap-1.5 text-muted-foreground cursor-pointer group">
              <Pen className="h-3 w-3" />
              <span className="text-[12px]">Written by</span>
              <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{author.name}</span>
              <LinkedInFilled className="h-3.5 w-3.5 text-[#f17463]" />
            </span>
          </AuthorHoverTooltip>
          {reviewer && (
            <>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
              <AuthorHoverTooltip author={reviewer}>
                <span className="flex items-center gap-1.5 text-muted-foreground cursor-pointer group">
                  <CheckCircle className="h-3 w-3" />
                  <span className="text-[12px]">Reviewed by</span>
                  <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{reviewer.name}</span>
                  <LinkedInFilled className="h-3.5 w-3.5 text-[#f17463]" />
                </span>
              </AuthorHoverTooltip>
            </>
          )}
          <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Calendar className="h-3 w-3" />
            <span className="font-semibold text-foreground">{shortDate}</span>
          </span>
        </div>
      )}

      {/* Layout C: Compact pills — minimalist */}
      {layout === "C" && (
        <div className="flex flex-wrap items-center gap-3">
          <AuthorHoverTooltip author={author} variant="minimal">
            <span className="inline-flex items-center gap-1.5 cursor-pointer text-[13px]">
              <span className="text-muted-foreground">Written by</span>
              <span className="font-semibold text-foreground">{author.name}</span>
              <LinkedInFilled className="h-3.5 w-3.5 text-[#f17463]" />
            </span>
          </AuthorHoverTooltip>
          {reviewer && (
            <>
              <span className="h-3.5 w-px bg-border" />
              <AuthorHoverTooltip author={reviewer} variant="minimal">
                <span className="inline-flex items-center gap-1.5 cursor-pointer text-[13px]">
                  <span className="text-muted-foreground">Reviewed by</span>
                  <span className="font-semibold text-foreground">{reviewer.name}</span>
                  <LinkedInFilled className="h-3.5 w-3.5 text-[#f17463]" />
                </span>
              </AuthorHoverTooltip>
            </>
          )}
          <span className="h-3.5 w-px bg-border" />
          <span className="inline-flex items-center gap-1.5 text-[13px]">
            <Calendar className="h-3 w-3 text-muted-foreground" />
            <span className="font-semibold text-foreground">{shortDate}</span>
          </span>
        </div>
      )}

      {/* Layout D: Two-line stacked — labels + values */}
      {layout === "D" && (
        <div className="flex flex-wrap items-start gap-12">
          <AuthorHoverTooltip author={author}>
            <div className="cursor-pointer group">
              <p className="text-overline-sm text-muted-foreground/60 mb-1">Written by</p>
              <div className="flex items-center gap-1.5">
                <p className="text-label-md text-foreground group-hover:text-primary transition-colors">{author.name}</p>
                <LinkedInFilled className="h-3.5 w-3.5 text-[#f17463]" />
              </div>
            </div>
          </AuthorHoverTooltip>
          {reviewer && (
            <AuthorHoverTooltip author={reviewer}>
              <div className="cursor-pointer group">
                <p className="text-overline-sm text-muted-foreground/60 mb-1">Reviewed by</p>
                <div className="flex items-center gap-1.5">
                  <p className="text-label-md text-foreground group-hover:text-primary transition-colors">{reviewer.name}</p>
                  <LinkedInFilled className="h-3.5 w-3.5 text-[#f17463]" />
                </div>
              </div>
            </AuthorHoverTooltip>
          )}
          <div>
            <p className="text-overline-sm text-muted-foreground/60 mb-1">Published</p>
            <p className="text-label-md text-foreground">{formattedDate}</p>
          </div>
        </div>
      )}

      {/* Layout E: Three separate borderless blocks using option A's author treatment */}
      {layout === "E" && (
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="min-w-0">
            <p className="mb-3 text-overline-sm text-muted-foreground/80">Written by</p>
            <AuthorHoverTooltip author={author}>
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <User className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="truncate text-label-md text-foreground transition-colors group-hover:text-primary">{author.name}</p>
                    {author.linkedin && (
                      <LinkedInFilled className="h-3.5 w-3.5 shrink-0 text-[#f17463]" />
                    )}
                  </div>
                  <p className="truncate text-[12px] text-muted-foreground">{author.role}</p>
                </div>
              </div>
            </AuthorHoverTooltip>
          </div>

          <div className="min-w-0">
            <p className="mb-3 text-overline-sm text-muted-foreground/80">Reviewed by</p>
            <AuthorHoverTooltip author={author}>
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <User className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="truncate text-label-md text-foreground transition-colors group-hover:text-primary">{author.name}</p>
                    {author.linkedin && (
                      <LinkedInFilled className="h-3.5 w-3.5 shrink-0 text-[#f17463]" />
                    )}
                  </div>
                  <p className="truncate text-[12px] text-muted-foreground">{author.role}</p>
                </div>
              </div>
            </AuthorHoverTooltip>
          </div>

          <div className="min-w-0">
            <p className="mb-3 text-overline-sm text-muted-foreground/80">Published</p>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Calendar className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div className="min-w-0">
                <p className="truncate text-label-md text-foreground">{formattedDate}</p>
                <p className="truncate text-[12px] text-muted-foreground">{readingTime}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
