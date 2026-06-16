# Typography System

Single source of truth for every text style on the Motadata site.
Tokens live in `app/globals.css` (`@layer components`). Change a token there → it propagates across every page automatically.

> **Rule of thumb:** never write raw `text-{size} font-{weight} leading-{x} tracking-{y}` on a `<p>` / `<h*>` / `<span>` in a component. Pick a token. If no token fits, talk to a designer — don't invent one inline.

---

## Design principles

1. **Tokens are type-only** — they define `font-size`, `font-weight`, `line-height`, `letter-spacing`. They never bake in `color`.
2. **Color is composable** — pair any token with `text-foreground` (default body), `text-muted-foreground` (secondary), or `text-primary` (accent). On dark surfaces use `text-white/90`, `text-white/70`, etc.
3. **Responsive scaling is baked in** — `display-*` tokens already include `sm:` upscales. Don't re-declare them in the consumer.
4. **One purpose per token** — a token names a *role*, not just a size. `text-overline` is "small uppercase eyebrow", not "12px text".

---

## The scale

| Token             | Size                  | Weight    | Leading   | Tracking | Use for                                               |
|-------------------|----------------------|-----------|-----------|----------|-------------------------------------------------------|
| `text-display-xl` | `text-5xl` → `6xl`   | bold      | tight     | tight    | Marquee hero headline                                  |
| `text-display-lg` | `text-4xl` → `5xl`   | bold      | tight     | tight    | Product / landing hero headline                        |
| `text-display-md` | `text-3xl` → `4xl`   | bold      | tight     | tight    | Section-level headline (big section)                   |
| `text-heading-xl` | `text-3xl`            | bold      | tight     | tight    | Section title                                          |
| `text-heading-lg` | `text-2xl`            | bold      | snug      | tight    | Card group title                                       |
| `text-heading-md` | `text-xl`             | semibold  | snug      | tight    | Sub-section title                                      |
| `text-heading-sm` | `text-lg`             | semibold  | snug      | tight    | Card title                                             |
| `text-heading-xs` | `text-base`           | semibold  | snug      | tight    | Small card / list-row title                            |
| `text-body-lg`    | `text-lg`             | medium    | relaxed   | —        | Large blockquote / intro lead                          |
| `text-body-md`    | `text-base`           | medium    | relaxed   | —        | Default paragraph (hero subhead, section description)  |
| `text-body-sm`    | `text-[15px]`         | medium    | relaxed   | —        | Card body, feature description                         |
| `text-body-xs`    | `text-sm`             | medium    | relaxed   | —        | Tertiary paragraph, FAQ answer                         |
| `text-label-lg`   | `text-base`           | semibold  | snug      | —        | Primary button label                                   |
| `text-label-md`   | `text-sm`             | semibold  | snug      | —        | Secondary button / tab label / inline label            |
| `text-label-md-strong` | `text-sm`        | bold      | snug      | —        | Strong emphasis (step number, status pill)             |
| `text-label-sm`   | `text-xs`             | semibold  | snug      | —        | Tag / pill / badge                                     |
| `text-label-md-medium` | `text-sm`        | medium    | snug      | —        | Inline labels, list values, nav links (lighter)        |
| `text-label-sm-medium` | `text-xs`        | medium    | snug      | —        | Light inline tiny labels                               |
| `text-label-sm-strong` | `text-xs`        | bold      | snug      | —        | Strong tiny tag (severity badge, alert pill)           |
| `text-overline`   | `text-xs`             | semibold  | snug      | widest   | Eyebrow above a section title (uppercase)              |
| `text-overline-sm`| `text-[10px]`         | semibold  | snug      | widest   | Tiny uppercase label inside a card                     |
| `text-caption`    | `text-xs`             | medium    | normal    | —        | Metadata, timestamps, fine print                       |

---

## Usage patterns

### Hero block
```tsx
<p className="text-overline text-primary">Capabilities</p>
<h1 className="text-display-lg text-foreground">
  Hybrid Infrastructure Monitoring
</h1>
<p className="text-body-md text-muted-foreground">
  ObserveOps gives you a complete, real-time view of every system…
</p>
<p className="text-body-xs text-muted-foreground">
  For CIOs defining digital strategy, for IT Directors enforcing uptime…
</p>
```

### Section header
```tsx
<p className="text-overline text-primary">Why Motadata</p>
<h2 className="text-display-md text-foreground">
  Infrastructure Monitoring Capabilities
</h2>
<p className="text-body-md text-muted-foreground">
  Complete Hybrid Infrastructure Intelligence
</p>
```

### Feature card
```tsx
<h3 className="text-heading-sm text-foreground">Real-Time Tracking</h3>
<p className="text-body-sm text-muted-foreground">
  CPU, memory, processes, and services across Windows, Linux, and Unix.
</p>
```

### Button / CTA
```tsx
<button className="text-label-md text-primary">Learn more</button>
<button className="text-label-lg text-background bg-foreground">
  Schedule demo
</button>
```

### Tag / status pill
```tsx
<span className="text-label-sm text-primary bg-primary/10 rounded-full px-2 py-0.5">
  New
</span>
```

### Eyebrow inside a card
```tsx
<p className="text-overline-sm text-muted-foreground">Protocols</p>
```

---

## Do / Don't

✅ **Do**
```tsx
<p className="text-body-md text-muted-foreground">…</p>
```

❌ **Don't** redeclare the underlying utilities
```tsx
<p className="text-base font-medium leading-relaxed text-muted-foreground">…</p>
```

✅ **Do** compose color with a token
```tsx
<h2 className="text-heading-xl text-foreground">Title</h2>
```

❌ **Don't** create a "with color" sibling token
```css
/* No: this duplicates intent */
.text-heading-xl-muted { @apply text-heading-xl text-muted-foreground; }
```

✅ **Do** override breakpoints inline if a one-off needs it
```tsx
<h1 className="text-display-md sm:text-display-xl">…</h1>
```

❌ **Don't** redefine the responsive scale on every consumer
```tsx
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">…</h1>
```

---

## Changing the system

To restyle the entire site:

1. Open `app/globals.css`.
2. Find the `TYPOGRAPHY SYSTEM` block.
3. Tweak the `@apply` line of any token (e.g. bump `font-medium` → `font-semibold` on `.text-body-md`).
4. Save. Every page picks it up immediately — no per-component changes needed.

To add a new token, append it to the same block and document it in this file.

---

## Migration table (legacy → token)

These are the most common raw-utility combos that existed before the system, and the token they map to. Used as the basis for the bulk codemod.

| Legacy class string                                              | Token replacement                  |
|------------------------------------------------------------------|------------------------------------|
| `text-base font-medium leading-relaxed text-muted-foreground`    | `text-body-md text-muted-foreground` |
| `text-[15px] font-medium leading-relaxed text-muted-foreground`  | `text-body-sm text-muted-foreground` |
| `text-sm font-medium text-muted-foreground`                      | `text-body-xs text-muted-foreground` (or `text-caption` if metadata) |
| `text-xs font-semibold uppercase tracking-widest text-primary`   | `text-overline text-primary`         |
| `text-xs font-semibold uppercase tracking-widest text-muted-foreground` | `text-overline text-muted-foreground` |
| `text-3xl font-bold tracking-tight sm:text-4xl`                  | `text-display-md`                    |
| `text-4xl font-bold tracking-tight sm:text-5xl`                  | `text-display-lg`                    |
| `text-xl font-bold tracking-tight lg:text-2xl`                   | `text-heading-md`                    |
| `text-lg font-semibold tracking-tight`                           | `text-heading-sm`                    |

Anything outside the table that uses raw type utilities is technical debt — adopt a token next time you touch the file.

---

## Documented exceptions

These raw patterns are kept by design and should NOT be migrated:

### Navbar micro-eyebrows — `text-[Npx] font-bold uppercase tracking-[0.14em]`
Used in `components/navbar.tsx` for dropdown column labels, mega-menu eyebrows, and tiny "NEW" pills. Custom tracking-[0.14em] (between `tracking-wide` and `tracking-widest`) is intentional for the tight visual rhythm of a compact horizontal nav. Sizes range `text-[9.5px]` → `text-[13px]`. ~31 occurrences. Treat as a sibling scale for navigation only.

### `text-2xl/3xl font-bold tracking-tight lg:text-3xl/4xl` mixed responsive
A handful of headlines need fine-grained responsive control beyond what `text-display-md`/`text-heading-xl` provide (e.g., 2-step upscale across `lg:` breakpoint). Keep raw when the responsive ramp is design-intentional.

If you add another exception, document it here so future contributors know it's not technical debt.
