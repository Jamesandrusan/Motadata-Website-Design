"use client";

import Link from "next/link";
import { TrendingUp, Clock } from "lucide-react";
import type { BlogPost } from "@/data/blog-posts";
import { BlogThumbnail } from "./blog-thumbnail";

/* Trending slugs — order determines ranking */
const TRENDING_SLUGS = [
  "network-topology-comprehensive-guide",
  "reducing-mttr-intelligent-correlation",
  "cloud-cost-optimization-observability",
  "apm-distributed-tracing-best-practices",
];

interface BlogTrendingProps {
  allPosts: BlogPost[];
}

export function BlogTrending({ allPosts }: BlogTrendingProps) {
  const trending = TRENDING_SLUGS
    .map((slug) => allPosts.find((p) => p.slug === slug))
    .filter(Boolean) as BlogPost[];

  return (
    <aside>
      {/* Section header */}
      <div className="mb-5 flex items-center gap-2 border-b border-border/60 pb-4">
        <TrendingUp className="h-4 w-4 text-primary" />
        <h2 className="text-[13px] font-bold uppercase tracking-widest text-foreground">
          What&apos;s Trending
        </h2>
      </div>

      {/* Items */}
      <div>
        {trending.map((post, i) => (
          <div key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex items-start gap-3 py-3.5"
            >
              {/* Thumbnail */}
              <div className="w-[72px] flex-shrink-0 overflow-hidden rounded-md">
                <BlogThumbnail
                  category={post.category}
                  title={post.title}
                  uid={`trending-${post.slug}`}
                  aspectClass="aspect-[4/3]"
                  titleSize="xs"
                />
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <span className="text-overline-sm text-primary">
                  {post.category}
                </span>
                <h3 className="mt-0.5 line-clamp-2 text-[12.5px] font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <div className="mt-1 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <Clock className="h-2.5 w-2.5" />
                  {post.readingTime}
                </div>
              </div>
            </Link>

            {/* Separator */}
            {i < trending.length - 1 && (
              <div className="border-t border-border/50" />
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
