"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Clock, User, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import type { BlogPost } from "@/data/blog-posts";
import { BlogThumbnail } from "./blog-thumbnail";

interface BlogLatestHeroProps {
  post: BlogPost;
}

export function BlogLatestHero({ post }: BlogLatestHeroProps) {
  return (
    <motion.div
      className="flex h-full flex-col"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      {/* Panel label */}
      <div className="mb-5 flex items-center gap-2 border-b border-border/50 pb-3">
        <BookOpen className="h-3.5 w-3.5 text-primary" />
        <span className="text-overline text-muted-foreground">
          Latest
        </span>
      </div>

      <Link href={`/blog/${post.slug}`} className="group flex flex-1 flex-col">
        {/* Thumbnail */}
        <div className="overflow-hidden rounded-xl">
          <BlogThumbnail
            category={post.category}
            title={post.title}
            uid={`latest-${post.slug}`}
            aspectClass="aspect-[16/9]"
            titleSize="lg"
          />
        </div>

        {/* Content */}
        <div className="mt-5 flex flex-1 flex-col">
          <span className="self-start rounded-full border border-primary/20 bg-primary/8 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
            {post.category}
          </span>

          <h2 className="mt-3 line-clamp-2 text-[20px] font-bold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-[22px]">
            {post.title}
          </h2>

          <p className="mt-2.5 line-clamp-3 text-[13px] leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>

          {/* Footer row */}
          <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
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
            <span className="flex items-center gap-1 whitespace-nowrap text-[12px] font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
              Read Article
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
