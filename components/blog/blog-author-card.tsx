"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import type { BlogAuthor } from "@/data/blog-posts";

interface BlogAuthorCardProps {
  author: BlogAuthor;
  reviewer?: BlogAuthor;
  publishedAt?: string;
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function AuthorTooltip({
  author,
  children,
}: {
  author: BlogAuthor;
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && author.linkedin && (
        <div className="absolute left-0 bottom-full mb-2 z-50 w-64 rounded-lg border bg-popover p-4 shadow-lg animate-in fade-in-0 zoom-in-95 duration-200">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-muted/50 text-label-md-strong text-primary">
              {author.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="min-w-0">
              <p className="text-label-md text-foreground truncate">
                {author.name}
              </p>
              <p className="text-[12px] text-muted-foreground">{author.role}</p>
            </div>
          </div>
          {author.bio && (
            <p className="mt-3 text-[12px] leading-relaxed text-muted-foreground line-clamp-3">
              {author.bio}
            </p>
          )}
          <a
            href={author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-medium text-[#0A66C2] hover:underline"
          >
            <LinkedInIcon className="h-3.5 w-3.5" />
            View LinkedIn Profile
          </a>
        </div>
      )}
    </div>
  );
}

function AuthorColumn({
  label,
  author,
}: {
  label: string;
  author: BlogAuthor;
}) {
  return (
    <div className="flex flex-col">
      <p className="text-overline-sm text-muted-foreground/60 mb-3">
        {label}
      </p>
      <AuthorTooltip author={author}>
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-muted/50 text-label-md-strong text-primary transition-colors group-hover:bg-primary/10">
            {author.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <p className="text-label-md text-foreground group-hover:text-primary transition-colors truncate">
                {author.name}
              </p>
              {author.linkedin && (
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[#0A66C2] hover:text-[#004182] transition-colors shrink-0"
                >
                  <LinkedInIcon className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
            <p className="text-[12px] text-muted-foreground truncate">
              {author.role}
            </p>
          </div>
        </div>
      </AuthorTooltip>
    </div>
  );
}

export function BlogAuthorCard({
  author,
  reviewer,
  publishedAt,
}: BlogAuthorCardProps) {
  return (
    <motion.div
      className="w-full pb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="rounded-xl border bg-card p-6">
        <div
          className={`grid gap-6 ${
            reviewer && publishedAt
              ? "sm:grid-cols-3"
              : reviewer
                ? "sm:grid-cols-2"
                : ""
          }`}
        >
          {/* Written by */}
          <AuthorColumn label="Written by" author={author} />

          {/* Reviewed by */}
          {reviewer && <AuthorColumn label="Reviewed by" author={reviewer} />}

          {/* Published */}
          {publishedAt && (
            <div className="flex flex-col">
              <p className="text-overline-sm text-muted-foreground/60 mb-3">
                Published
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-muted/50 text-primary">
                  <Calendar className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-label-md text-foreground">
                    {new Date(publishedAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <p className="text-[12px] text-muted-foreground">
                    {getTimeAgo(publishedAt)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function getTimeAgo(dateStr: string): string {
  const now = new Date();
  const published = new Date(dateStr);
  const diffMs = now.getTime() - published.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 1) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
  }
  if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  }
  const years = Math.floor(diffDays / 365);
  return `${years} ${years === 1 ? "year" : "years"} ago`;
}
