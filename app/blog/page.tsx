"use client";

import { useState, useMemo } from "react";
import { Layers } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogFilters } from "@/components/blog/blog-filters";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogLatestHero } from "@/components/blog/blog-latest-hero";
import { BlogTrending } from "@/components/blog/blog-trending";
import { BlogPagination } from "@/components/blog/blog-pagination";
import {
  getAllPosts,
  getAllCategories,
  type BlogCategory,
} from "@/data/blog-posts";

const POSTS_PER_PAGE = 9;

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "All">("All");
  const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest");
  const [currentPage, setCurrentPage] = useState(1);

  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const latestPost = allPosts[0];

  const filteredPosts = useMemo(() => {
    // Exclude latest post from the grid (shown in hero above)
    let posts = latestPost
      ? allPosts.filter((p) => p.slug !== latestPost.slug)
      : allPosts;

    if (activeCategory !== "All") {
      posts = posts.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Sort
    return [...posts].sort((a, b) => {
      const diff =
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      return sortOrder === "latest" ? diff : -diff;
    });
  }, [allPosts, latestPost, activeCategory, searchQuery, sortOrder]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleCategoryChange = (cat: BlogCategory | "All") => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    setCurrentPage(1);
  };

  const handleSortChange = (sort: "latest" | "oldest") => {
    setSortOrder(sort);
    setCurrentPage(1);
  };

  return (
    <main className="relative min-h-screen">
      <Navbar />

      <BlogHero />

      {/* ── Top 5 Section: Latest (left) + Trending (right) ── */}
      {latestPost && (
        <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-4">
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm">
            <div className="grid divide-y divide-border/60 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:divide-x lg:divide-y-0">
              <div className="p-7 lg:p-8">
                <BlogLatestHero post={latestPost} />
              </div>
              <div className="p-7 lg:p-8">
                <BlogTrending allPosts={allPosts} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── All Articles section label ── */}
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex items-center gap-2 border-b border-border/60 pb-4">
          <Layers className="h-4 w-4 text-primary" />
          <h2 className="text-[13px] font-bold uppercase tracking-widest text-foreground">
            All Articles
          </h2>
          {(activeCategory !== "All" || searchQuery.trim()) && (
            <span className="ml-auto rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
            </span>
          )}
        </div>
      </div>

      {/* ── Filter bar: category pills + sort + search ── */}
      <BlogFilters
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        sortOrder={sortOrder}
        onSortChange={handleSortChange}
      />

      {/* ── Card grid ── */}
      <div className="mx-auto w-full max-w-7xl px-6 pt-10 pb-20">
        {paginatedPosts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-[15px] font-medium text-muted-foreground">
              No articles found
            </p>
            <p className="mt-1 text-body-xs text-muted-foreground/60">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-12">
            <BlogPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              compact
            />
          </div>
        )}
      </div>

      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
