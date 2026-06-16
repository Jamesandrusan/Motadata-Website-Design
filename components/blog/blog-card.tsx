"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, User } from "lucide-react";
import type { BlogPost } from "@/data/blog-posts";
import { BlogThumbnail } from "./blog-thumbnail";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
    >
      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="overflow-hidden rounded-xl border bg-card shadow-sm transition-colors hover:border-primary/40">
          <BlogThumbnail
            category={post.category}
            title={post.title}
            uid={post.slug}
            aspectClass="aspect-[16/9]"
            titleSize="sm"
          />

          <div className="p-5">
            <span className="inline-block rounded-full border border-primary/20 bg-primary/8 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
              {post.category}
            </span>

            <h3 className="mt-3 line-clamp-2 text-heading-sm leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
              {post.title}
            </h3>

            <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
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
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
