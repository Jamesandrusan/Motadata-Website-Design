"use client";

import { motion } from "framer-motion";
import { BlogCard } from "./blog-card";
import type { BlogPost } from "@/data/blog-posts";

interface BlogRelatedProps {
  posts: BlogPost[];
}

export function BlogRelated({ posts }: BlogRelatedProps) {
  if (posts.length === 0) return null;

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-heading-lg">Related Articles</h2>
        <p className="mt-2 text-body-xs text-muted-foreground">
          Continue reading with these related posts
        </p>
      </motion.div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
