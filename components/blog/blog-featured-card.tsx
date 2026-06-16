"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import type { BlogPost } from "@/data/blog-posts";
import { BlogThumbnail } from "./blog-thumbnail";

interface BlogFeaturedCardProps {
  post: BlogPost;
}

export function BlogFeaturedCard({ post }: BlogFeaturedCardProps) {
  return (
    <motion.article
      className="mx-auto w-full max-w-7xl px-6 pb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="overflow-hidden rounded-xl border bg-card shadow-sm transition-colors hover:border-primary/40">
          <div className="grid md:grid-cols-2">
            {/* SVG thumbnail */}
            <BlogThumbnail
              category={post.category}
              title={post.title}
              uid={`featured-${post.slug}`}
              aspectClass="h-full min-h-[280px] md:min-h-[340px]"
              titleSize="lg"
            />

            {/* Info panel */}
            <div className="flex flex-col justify-center p-8">
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-primary/20 bg-primary/8 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                  Featured
                </span>
                <span className="rounded-full border border-primary/15 bg-primary/5 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                  {post.category}
                </span>
              </div>

              <h2 className="mt-4 text-heading-lg leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                {post.title}
              </h2>

              <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>

              <div className="mt-5 flex items-center gap-4 text-[12px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  {post.author.name}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readingTime}
                </span>
              </div>

              <div className="mt-6">
                <span className="inline-flex items-center gap-1.5 text-label-md text-primary transition-colors group-hover:text-primary/80">
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
