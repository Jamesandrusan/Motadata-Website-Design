/**
 * scan-components.mjs
 *
 * Scans components/ and generates app/components/_auto-registry.json.
 * Runs automatically before `npm run dev` and `npm run build`.
 *
 * Usage:  node scripts/scan-components.mjs
 */

import { readdirSync, statSync, readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const COMPONENTS_DIR = join(ROOT, "components");
const OUTPUT = join(ROOT, "app", "components", "_auto-registry.json");

/* ── Skip these sub-directories entirely ── */
const SKIP_DIRS = new Set(["ui", "registry", "node_modules", ".git"]);

/* ── Human-readable category labels ── */
const CATEGORY_LABELS = {
  root:         "Page Sections",
  him:          "HIM – Hybrid Infrastructure Monitoring",
  cm:           "CM – Change Management",
  observeops:   "ObserveOps",
  serviceops:   "ServiceOps",
  support:      "Support",
  careers:      "Careers",
  company:      "Company",
  contact:      "Contact",
  blog:         "Blog",
  resources:    "Resources",
  partners:     "Partners",
  pricing:      "Pricing",
};

function labelFor(dir) {
  return CATEGORY_LABELS[dir] ?? (dir.charAt(0).toUpperCase() + dir.slice(1).replace(/-/g, " "));
}

/* ── Extract exported React component names (uppercase) ── */
function extractExports(content) {
  const found = new Set();
  // export function Foo / export async function Foo
  for (const [, name] of content.matchAll(/^export\s+(?:async\s+)?function\s+([A-Z][a-zA-Z0-9]*)/gm)) {
    found.add(name);
  }
  // export const Foo = ...
  for (const [, name] of content.matchAll(/^export\s+const\s+([A-Z][a-zA-Z0-9]*)\s*=/gm)) {
    found.add(name);
  }
  // export class Foo
  for (const [, name] of content.matchAll(/^export\s+class\s+([A-Z][a-zA-Z0-9]*)/gm)) {
    found.add(name);
  }
  return [...found];
}

/* ── Recursive directory scan ── */
function scan(dir, category = "root") {
  const entries = [];
  let items;
  try { items = readdirSync(dir); } catch { return entries; }

  for (const item of items) {
    const full = join(dir, item);
    const stat = statSync(full);

    if (stat.isDirectory()) {
      if (!SKIP_DIRS.has(item)) {
        entries.push(...scan(full, item));
      }
    } else if (/\.(tsx|ts)$/.test(item) && !item.startsWith("_")) {
      const content = readFileSync(full, "utf-8");
      const exports = extractExports(content);
      if (exports.length > 0) {
        const relFile = full
          .replace(ROOT + "\\", "")
          .replace(ROOT + "/", "")
          .replace(/\\/g, "/");
        entries.push({ file: relFile, category, exports });
      }
    }
  }
  return entries;
}

/* ── Build grouped output ── */
const allFiles = scan(COMPONENTS_DIR);

const byCategory = {};
for (const entry of allFiles) {
  if (!byCategory[entry.category]) byCategory[entry.category] = [];
  byCategory[entry.category].push({ file: entry.file, exports: entry.exports });
}

const categories = Object.entries(byCategory)
  .sort(([a], [b]) => {
    // root first, then alphabetical
    if (a === "root") return -1;
    if (b === "root") return 1;
    return a.localeCompare(b);
  })
  .map(([id, files]) => ({
    id,
    label: labelFor(id),
    files,
    totalComponents: files.reduce((s, f) => s + f.exports.length, 0),
  }));

const result = {
  generatedAt: new Date().toISOString(),
  totalFiles: allFiles.length,
  totalComponents: allFiles.reduce((s, f) => s + f.exports.length, 0),
  categories,
};

writeFileSync(OUTPUT, JSON.stringify(result, null, 2));

console.log(
  `✓ scan-components: ${result.totalFiles} files · ${result.totalComponents} components → app/components/_auto-registry.json`
);
