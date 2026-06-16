"use client";

import { useState, useCallback } from "react";
import {
  Search,
  Download,
  ChevronDown,
  Grid3X3,
  List,
  X,
  Copy,
  Check,
  FileText,
  FileJson,
  Eye,
  EyeOff,
  Sparkles,
} from "lucide-react";
import {
  blogImageList,
  getIllustrationType,
  type BlogImageEntry,
  type BlogImageCategory,
} from "@/data/blog-image-data";
import { FeaturedImageSVG } from "@/components/blog-images/featured-image-svg";
import {
  generateImagePrompt,
  exportPromptsAsJSON,
  exportPromptsAsText,
} from "@/lib/prompt-generator";

const ALL_CATEGORIES: BlogImageCategory[] = [
  "Network Monitoring",
  "ITSM",
  "IT Infrastructure",
  "Cloud Computing",
  "Application Monitoring",
  "ObserveOps",
  "ServiceOps",
  "AIOps",
  "Engineering",
  "Industry News",
  "Product Updates",
  "Network Management",
];

export default function BlogImagesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<BlogImageCategory | "All">("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [downloading, setDownloading] = useState<number | null>(null);
  const [downloadAllActive, setDownloadAllActive] = useState(false);
  const [expandedPrompt, setExpandedPrompt] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [showPrompts, setShowPrompts] = useState(false);

  const filtered = blogImageList.filter((b) => {
    const matchCat = category === "All" || b.category === category;
    const q = search.toLowerCase();
    const matchQ =
      !q ||
      b.title.toLowerCase().includes(q) ||
      b.excerpt.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  /* ── Category stats ── */
  const categoryStats = ALL_CATEGORIES.map((cat) => ({
    name: cat,
    count: blogImageList.filter((b) => b.category === cat).length,
  }));

  const downloadSVG = useCallback((entry: BlogImageEntry) => {
    setDownloading(entry.id);
    const svgEl = document.getElementById(`blog-svg-${entry.id}`);
    if (!svgEl) {
      setDownloading(null);
      return;
    }

    const clone = svgEl.cloneNode(true) as SVGElement;
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    clone.removeAttribute("id");
    clone.removeAttribute("class");
    clone.setAttribute("width", "800");
    clone.setAttribute("height", "450");

    const svgStr = new XMLSerializer().serializeToString(clone);
    const blob = new Blob(
      ['<?xml version="1.0" encoding="UTF-8"?>\n' + svgStr],
      { type: "image/svg+xml" }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${entry.slug}-featured.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setTimeout(() => setDownloading(null), 500);
  }, []);

  const downloadAll = useCallback(async () => {
    setDownloadAllActive(true);
    for (const entry of filtered) {
      downloadSVG(entry);
      await new Promise((r) => setTimeout(r, 300));
    }
    setDownloadAllActive(false);
  }, [filtered, downloadSVG]);

  const copyPrompt = useCallback((entry: BlogImageEntry) => {
    const prompt = generateImagePrompt(entry);
    navigator.clipboard.writeText(prompt);
    setCopiedId(entry.id);
    setTimeout(() => setCopiedId(null), 2000);
  }, []);

  const exportAllPrompts = useCallback(
    (format: "json" | "text") => {
      const content =
        format === "json"
          ? exportPromptsAsJSON(filtered)
          : exportPromptsAsText(filtered);
      const blob = new Blob([content], {
        type: format === "json" ? "application/json" : "text/plain",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `blog-image-prompts.${format === "json" ? "json" : "txt"}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    },
    [filtered]
  );

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-[#1E1E1E] bg-[#0D0D0D]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F17463]/15">
                <Sparkles className="h-5 w-5 text-[#F17463]" />
              </div>
              <div>
                <h1 className="text-heading-md text-white">
                  Blog Featured Image Generator
                </h1>
                <p className="text-sm text-gray-500">
                  {filtered.length} of {blogImageList.length} images &middot;
                  800&times;450 SVG &middot; 16:9 aspect ratio
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Toggle Prompt View */}
            <button
              onClick={() => setShowPrompts(!showPrompts)}
              className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-label-md transition-colors ${
                showPrompts
                  ? "border-[#F17463] bg-[#F17463]/10 text-[#F17463]"
                  : "border-[#2A2A2A] text-gray-400 hover:bg-[#1E1E1E]"
              }`}
            >
              {showPrompts ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
              {showPrompts ? "Hide Prompts" : "Show Prompts"}
            </button>

            {/* Export Prompts */}
            <div className="relative group">
              <button className="flex items-center gap-2 rounded-lg border border-[#2A2A2A] px-3 py-2 text-label-md text-gray-400 hover:bg-[#1E1E1E]">
                <FileText className="h-4 w-4" />
                Export Prompts
                <ChevronDown className="h-3 w-3" />
              </button>
              <div className="absolute right-0 top-full mt-1 hidden w-48 rounded-lg border border-[#2A2A2A] bg-[#161616] py-1 shadow-lg group-hover:block z-50">
                <button
                  onClick={() => exportAllPrompts("json")}
                  className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:bg-[#1E1E1E]"
                >
                  <FileJson className="h-4 w-4" />
                  Export as JSON
                </button>
                <button
                  onClick={() => exportAllPrompts("text")}
                  className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:bg-[#1E1E1E]"
                >
                  <FileText className="h-4 w-4" />
                  Export as Text
                </button>
              </div>
            </div>

            {/* Download All SVGs */}
            <button
              onClick={downloadAll}
              disabled={downloadAllActive}
              className="flex items-center gap-2 rounded-lg bg-[#F17463] px-4 py-2 text-label-md text-white transition-colors hover:bg-[#d9614f] disabled:opacity-50"
            >
              <Download className="h-4 w-4" />
              {downloadAllActive
                ? "Downloading..."
                : `Download All SVGs (${filtered.length})`}
            </button>
          </div>
        </div>
      </header>

      {/* ── Filter Bar ── */}
      <div className="sticky top-[73px] z-40 border-b border-[#1E1E1E] bg-[#0D0D0D]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-3 px-6 py-3">
          {/* Search */}
          <div className="relative flex-1 min-w-[240px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search by title, category, or keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-[#2A2A2A] bg-[#161616] py-2 pl-10 pr-10 text-sm text-gray-200 placeholder-gray-600 focus:border-[#F17463] focus:outline-none focus:ring-1 focus:ring-[#F17463]"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Category */}
          <div className="relative">
            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value as BlogImageCategory | "All")
              }
              className="appearance-none rounded-lg border border-[#2A2A2A] bg-[#161616] py-2 pl-3 pr-8 text-sm text-gray-300 focus:border-[#F17463] focus:outline-none"
            >
              <option value="All">
                All Categories ({blogImageList.length})
              </option>
              {categoryStats.map(({ name, count }) => (
                <option key={name} value={name}>
                  {name} ({count})
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          </div>

          {/* View Mode */}
          <div className="flex rounded-lg border border-[#2A2A2A] bg-[#161616]">
            <button
              onClick={() => setViewMode("list")}
              className={`rounded-l-lg px-3 py-2 ${
                viewMode === "list"
                  ? "bg-[#2A2A2A] text-white"
                  : "text-gray-500"
              }`}
            >
              <List className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`rounded-r-lg px-3 py-2 ${
                viewMode === "grid"
                  ? "bg-[#2A2A2A] text-white"
                  : "text-gray-500"
              }`}
            >
              <Grid3X3 className="h-4 w-4" />
            </button>
          </div>

          {/* Category pills — quick filters */}
          <div className="flex w-full flex-wrap gap-1.5 pt-1">
            <button
              onClick={() => setCategory("All")}
              className={`rounded-full px-3 py-1 text-[11px] font-medium transition-colors ${
                category === "All"
                  ? "bg-[#F17463] text-white"
                  : "bg-[#1E1E1E] text-gray-500 hover:bg-[#2A2A2A]"
              }`}
            >
              All
            </button>
            {categoryStats.map(({ name, count }) => (
              <button
                key={name}
                onClick={() => setCategory(name)}
                className={`rounded-full px-3 py-1 text-[11px] font-medium transition-colors ${
                  category === name
                    ? "bg-[#F17463] text-white"
                    : "bg-[#1E1E1E] text-gray-500 hover:bg-[#2A2A2A]"
                }`}
              >
                {name}
                <span className="ml-1 opacity-60">{count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div className="border-b border-[#1A1A1A] bg-[#0D0D0D]/60">
        <div className="mx-auto flex max-w-[1600px] items-center gap-6 px-6 py-2">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
            {blogImageList.length} total blogs
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="inline-block h-2 w-2 rounded-full bg-[#F17463]" />
            {ALL_CATEGORIES.length} categories
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="inline-block h-2 w-2 rounded-full bg-blue-500" />
            25 illustration types
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="inline-block h-2 w-2 rounded-full bg-purple-500" />
            SVG vector output
          </div>
          {filtered.length !== blogImageList.length && (
            <div className="ml-auto text-caption text-[#F17463]">
              Showing {filtered.length} of {blogImageList.length}
            </div>
          )}
        </div>
      </div>

      {/* ── Content ── */}
      <div className="mx-auto max-w-[1600px] px-6 py-8">
        {viewMode === "list" ? (
          <div className="space-y-6">
            {filtered.map((entry) => (
              <ListCard
                key={entry.id}
                entry={entry}
                downloading={downloading === entry.id}
                onDownload={() => downloadSVG(entry)}
                onCopyPrompt={() => copyPrompt(entry)}
                copied={copiedId === entry.id}
                showPrompt={showPrompts}
                expandedPrompt={expandedPrompt === entry.id}
                onTogglePrompt={() =>
                  setExpandedPrompt(
                    expandedPrompt === entry.id ? null : entry.id
                  )
                }
              />
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((entry) => (
              <GridCard
                key={entry.id}
                entry={entry}
                downloading={downloading === entry.id}
                onDownload={() => downloadSVG(entry)}
                onCopyPrompt={() => copyPrompt(entry)}
                copied={copiedId === entry.id}
                showPrompt={showPrompts}
              />
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-lg font-medium text-gray-500">No blogs found</p>
            <p className="mt-1 text-sm text-gray-600">
              Try adjusting your search or category filter
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

/* ── List Card ── Left: title/desc/prompt, Right: SVG image ── */
function ListCard({
  entry,
  downloading,
  onDownload,
  onCopyPrompt,
  copied,
  showPrompt,
  expandedPrompt,
  onTogglePrompt,
}: {
  entry: BlogImageEntry;
  downloading: boolean;
  onDownload: () => void;
  onCopyPrompt: () => void;
  copied: boolean;
  showPrompt: boolean;
  expandedPrompt: boolean;
  onTogglePrompt: () => void;
}) {
  const illustrationType = getIllustrationType(entry);

  return (
    <div className="group overflow-hidden rounded-xl border border-[#1E1E1E] bg-[#111111] transition-shadow hover:border-[#2A2A2A]">
      <div className="flex">
        {/* Left text panel */}
        <div className="flex flex-1 flex-col justify-between p-6 min-w-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block rounded-full bg-[#F17463]/15 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#F17463]">
                {entry.category}
              </span>
              <span className="rounded bg-[#1E1E1E] px-2 py-0.5 text-[10px] font-mono text-gray-500">
                {illustrationType}
              </span>
              <span className="text-[11px] text-gray-600">
                {entry.readTime} read
              </span>
            </div>

            <h3 className="mt-3 text-heading-sm leading-snug text-gray-100 line-clamp-2">
              {entry.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-2">
              {entry.excerpt}
            </p>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <span className="text-xs text-gray-600">By {entry.author}</span>
            <span className="text-xs text-gray-700">&middot;</span>
            <span className="text-[10px] font-mono text-gray-600">
              #{entry.id} &middot; {entry.slug}
            </span>
            <div className="ml-auto flex items-center gap-1.5">
              {/* Copy Prompt */}
              <button
                onClick={onCopyPrompt}
                className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-caption transition-colors ${
                  copied
                    ? "border-green-700 bg-green-900/30 text-green-400"
                    : "border-[#2A2A2A] bg-[#161616] text-gray-400 hover:bg-[#F17463]/10 hover:text-[#F17463] hover:border-[#F17463]/30"
                }`}
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
                {copied ? "Copied!" : "Prompt"}
              </button>
              {/* View Prompt */}
              <button
                onClick={onTogglePrompt}
                className={`flex items-center gap-1 rounded-lg border px-3 py-1.5 text-caption transition-colors ${
                  expandedPrompt
                    ? "border-[#F17463]/30 bg-[#F17463]/10 text-[#F17463]"
                    : "border-[#2A2A2A] bg-[#161616] text-gray-400 hover:bg-[#1E1E1E]"
                }`}
              >
                <FileText className="h-3.5 w-3.5" />
                {expandedPrompt ? "Hide" : "View"}
              </button>
              {/* Download SVG */}
              <button
                onClick={onDownload}
                disabled={downloading}
                className="flex items-center gap-1.5 rounded-lg border border-[#2A2A2A] bg-[#161616] px-3 py-1.5 text-caption text-gray-400 transition-colors hover:bg-[#F17463] hover:text-white hover:border-[#F17463] disabled:opacity-50"
              >
                <Download className="h-3.5 w-3.5" />
                {downloading ? "..." : "SVG"}
              </button>
            </div>
          </div>
        </div>

        {/* Right SVG preview */}
        <div className="w-[420px] shrink-0 border-l border-[#1E1E1E] bg-[#0A0A0A] p-3">
          <div className="overflow-hidden rounded-lg">
            <FeaturedImageSVG entry={entry} id={`blog-svg-${entry.id}`} />
          </div>
        </div>
      </div>

      {/* Expandable prompt area */}
      {(expandedPrompt || showPrompt) && (
        <div className="border-t border-[#1E1E1E] bg-[#0D0D0D] px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-label-sm uppercase tracking-wider text-gray-500">
              AI Image Generation Prompt
            </span>
            <button
              onClick={onCopyPrompt}
              className="flex items-center gap-1.5 rounded-md bg-[#161616] px-3 py-1 text-caption text-gray-400 border border-[#2A2A2A] hover:bg-[#F17463] hover:text-white hover:border-[#F17463] transition-colors"
            >
              {copied ? (
                <Check className="h-3 w-3" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
              {copied ? "Copied!" : "Copy Prompt"}
            </button>
          </div>
          <textarea
            readOnly
            value={generateImagePrompt(entry)}
            className="w-full h-48 rounded-lg border border-[#2A2A2A] bg-[#161616] p-4 text-xs font-mono text-gray-400 leading-relaxed resize-none focus:border-[#F17463] focus:outline-none focus:ring-1 focus:ring-[#F17463]"
          />
        </div>
      )}
    </div>
  );
}

/* ── Grid Card ── */
function GridCard({
  entry,
  downloading,
  onDownload,
  onCopyPrompt,
  copied,
  showPrompt,
}: {
  entry: BlogImageEntry;
  downloading: boolean;
  onDownload: () => void;
  onCopyPrompt: () => void;
  copied: boolean;
  showPrompt: boolean;
}) {
  const illustrationType = getIllustrationType(entry);

  return (
    <div className="group overflow-hidden rounded-xl border border-[#1E1E1E] bg-[#111111] transition-shadow hover:border-[#2A2A2A]">
      {/* SVG preview */}
      <div className="bg-[#0A0A0A] p-2">
        <div className="overflow-hidden rounded-lg">
          <FeaturedImageSVG entry={entry} id={`blog-svg-${entry.id}`} />
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-center gap-2">
          <span className="inline-block rounded-full bg-[#F17463]/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#F17463]">
            {entry.category}
          </span>
          <span className="rounded bg-[#1E1E1E] px-1.5 py-0.5 text-[9px] font-mono text-gray-500">
            {illustrationType}
          </span>
        </div>

        <h3 className="mt-2 text-label-md-strong leading-snug text-gray-100 line-clamp-2">
          {entry.title}
        </h3>

        {showPrompt && (
          <textarea
            readOnly
            value={generateImagePrompt(entry)}
            className="mt-2 w-full h-28 rounded-md border border-[#2A2A2A] bg-[#161616] p-2 text-[9px] font-mono text-gray-500 leading-relaxed resize-none"
          />
        )}

        <div className="mt-3 flex items-center justify-between">
          <span className="text-[10px] text-gray-600">
            {entry.readTime} &middot; {entry.author}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={onCopyPrompt}
              className={`flex items-center gap-1 rounded-md border px-2 py-1 text-[10px] font-medium transition-colors ${
                copied
                  ? "border-green-700 bg-green-900/30 text-green-400"
                  : "border-[#2A2A2A] text-gray-500 hover:bg-[#F17463]/10 hover:text-[#F17463] hover:border-[#F17463]/30"
              }`}
            >
              {copied ? (
                <Check className="h-3 w-3" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
              {copied ? "OK" : "Prompt"}
            </button>
            <button
              onClick={onDownload}
              disabled={downloading}
              className="flex items-center gap-1 rounded-md border border-[#2A2A2A] px-2 py-1 text-[10px] font-medium text-gray-500 transition-colors hover:bg-[#F17463] hover:text-white hover:border-[#F17463] disabled:opacity-50"
            >
              <Download className="h-3 w-3" />
              {downloading ? "..." : "SVG"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
