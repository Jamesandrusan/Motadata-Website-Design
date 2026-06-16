"use client";

import Link from "next/link";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { BlogPost } from "@/data/blog-posts";
import { BlogThumbnail } from "./blog-thumbnail";

interface BlogListItemProps {
  post: BlogPost;
  index?: number;
}

export function BlogListItem({ post, index = 0 }: BlogListItemProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
    >
      <Link href={`/blog/${post.slug}`} className="group flex gap-5 items-start">
        {/* Thumbnail */}
        <div className="w-[180px] flex-shrink-0 overflow-hidden rounded-lg">
          <BlogThumbnail
            category={post.category}
            title={post.title}
            uid={post.slug}
            aspectClass="aspect-[16/9]"
            titleSize="sm"
          />
        </div>

        {/* Info */}
        <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
          <div>
            <span className="rounded-full border border-primary/20 bg-primary/8 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
              {post.category}
            </span>

            <h3 className="mt-2 line-clamp-2 text-heading-sm leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
              {post.title}
            </h3>

            <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-muted-foreground">
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
            <span className="ml-auto flex items-center gap-1 text-primary opacity-0 transition-opacity group-hover:opacity-100">
              Read more
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
