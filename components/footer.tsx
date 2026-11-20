import { BrandLogo } from "@/components/brand-logo";
import { FooterGroup, type FooterLink } from "@/components/footer-group";
import { FooterAccordion, type FooterSection } from "@/components/footer-accordion";

const h = (labels: string[]): FooterLink[] => labels.map((label) => ({ label, href: "#" }));

/* Each inner array is one desktop column; each group is one mobile accordion row. */
const columns: { title: string; links: FooterLink[] }[][] = [
  [{ title: "ObserveOps", links: [
    { label: "Network Observability", href: "#" },
    { label: "Network Configuration & Compliance Management", href: "#" },
    { label: "Hybrid Infrastructure Monitoring", href: "/products/observeops/hybrid-infrastructure-monitoring" },
    { label: "Log Monitoring", href: "#" },
    { label: "Application Performance Monitoring", href: "#" },
    { label: "Real User Monitoring", href: "#" },
  ] }],
  [{ title: "ServiceOps", links: h(["Service Management", "IT Asset Management", "Configuration Management (CMDB)", "Patch & Deployment Management", "Agentic AI & Orchestration", "MSP Edition"]) }],
  [
    { title: "By Use Cases", links: h(["Cloud Monitoring", "ITSM for MSP", "Hybrid IT Monitoring", "Log Monitoring", "NetOps", "Linux Network Monitoring"]) },
    { title: "By Technologies", links: h(["Log Parsing & Indexing", "Security & Compliance", "IT Operations Analytics (ITOA)", "AI/ML Algorithms", "SNMP, WMI, ICMP, Syslog"]) },
  ],
  [{ title: "Resources", links: [
    { label: "Getting Started", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "Integrations", href: "#" },
    { label: "Whitepapers", href: "#" },
    { label: "Ebooks", href: "#" },
    { label: "Product Brochures", href: "#" },
    { label: "Success Stories", href: "#" },
    { label: "Downloads", href: "#" },
    { label: "Comparison", href: "#" },
    { label: "IT Glossary", href: "/resources/glossary" },
  ] }],
  [{ title: "Community", links: [
    { label: "Blog", href: "/blog" },
    { label: "Press Releases", href: "/resources/press-releases" },
    { label: "Events", href: "/resources/events" },
    { label: "Webinars", href: "/resources/webinars" },
    { label: "Community", href: "/resources/community" },
    { label: "Partner Portal", href: "/resources/partners" },
  ] }],
  [
    { title: "Company", links: [
      { label: "Company", href: "/company" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact" },
      { label: "Customer Support", href: "/support" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Legal", href: "/legal" },
      { label: "DPDPA Compliance", href: "/dpdpa" },
      { label: "Media Kit", href: "/media-kit" },
    ] },
    { title: "Get in Touch", links: [
      ...h(["Request Demo", "Sales", "Support"]),
      { label: "sales@motadata.com", href: "mailto:sales@motadata.com" },
      { label: "support@motadata.com", href: "mailto:support@motadata.com" },
    ] },
  ],
];

/* Mobile accordion sections, named like the navbar menus. */
const [observeOps, serviceOps, solutions, resources, community, company] = columns;
const mobileSections: FooterSection[] = [
  { label: "Products", groups: [...observeOps, ...serviceOps] },
  { label: "Solutions", groups: solutions },
  { label: "Resources", groups: [...resources, ...community] },
  { label: "Company", groups: company },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/40 bg-white">
      {/* Top — Brand + AI Summarize */}
      <div className="mx-auto w-full max-w-7xl px-6 pt-12 pb-8 lg:pt-14 lg:pb-10">
        {/* Centred stack on mobile/tablet; logo left, AI tools right on desktop */}
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <BrandLogo className="h-7 w-auto" />
            <p className="mt-3 text-body-xs text-muted-foreground">
              Unified Observability Platform for Modern IT Operations
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 lg:flex-row">
            <span className="text-body-xs text-muted-foreground">Summarize with AI what Motadata does:</span>
            <div className="flex items-center gap-2">
              {/* ChatGPT (OpenAI) */}
              <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted-foreground sm:h-8 sm:w-8 sm:rounded-lg transition-colors hover:border-primary/50 hover:text-primary" title="Summarize with ChatGPT">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>
              </a>
              {/* Perplexity */}
              <a href="https://perplexity.ai" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted-foreground sm:h-8 sm:w-8 sm:rounded-lg transition-colors hover:border-primary/50 hover:text-primary" title="Summarize with Perplexity">
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor"><path d="M8 .188a.5.5 0 0 1 .503.5V4.03l3.022-2.92.059-.048a.51.51 0 0 1 .49-.054.5.5 0 0 1 .306.46v3.247h1.117l.1.01a.5.5 0 0 1 .403.49v5.558a.5.5 0 0 1-.503.5H12.38v3.258a.5.5 0 0 1-.312.462.51.51 0 0 1-.55-.11l-3.016-3.018v3.448c0 .275-.225.5-.503.5a.5.5 0 0 1-.503-.5v-3.448l-3.018 3.019a.51.51 0 0 1-.548.11.5.5 0 0 1-.312-.463v-3.258H2.503a.5.5 0 0 1-.503-.5V5.215l.01-.1c.047-.229.25-.4.493-.4H3.62V1.469l.006-.074a.5.5 0 0 1 .302-.387.51.51 0 0 1 .547.102l3.023 2.92V.687c0-.276.225-.5.503-.5M4.626 9.333v3.984l2.87-2.872v-4.01zm3.877 1.113 2.871 2.871V9.333l-2.87-2.897zm3.733-1.668a.5.5 0 0 1 .145.35v1.145h.612V5.715H9.201zm-9.23 1.495h.613V9.13c0-.131.052-.257.145-.35l3.033-3.064h-3.79zm1.62-5.558H6.76L4.626 2.652zm4.613 0h2.134V2.652z"/></svg>
              </a>
              {/* Gemini */}
              <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted-foreground sm:h-8 sm:w-8 sm:rounded-lg transition-colors hover:border-primary/50 hover:text-primary" title="Summarize with Gemini">
                <svg className="h-4 w-4" viewBox="0 0 28 28" fill="currentColor"><path d="M14 28C14 26.0633 13.6267 24.2433 12.88 22.54C12.1567 20.8367 11.165 19.355 9.905 18.095C8.645 16.835 7.16333 15.8433 5.46 15.12C3.75667 14.3733 1.93667 14 0 14C1.93667 14 3.75667 13.6383 5.46 12.915C7.16333 12.1683 8.645 11.165 9.905 9.905C11.165 8.645 12.1567 7.16333 12.88 5.46C13.6267 3.75667 14 1.93667 14 0C14 1.93667 14.3617 3.75667 15.085 5.46C15.8317 7.16333 16.835 8.645 18.095 9.905C19.355 11.165 20.8367 12.1683 22.54 12.915C24.2433 13.6383 26.0633 14 28 14C26.0633 14 24.2433 14.3733 22.54 15.12C20.8367 15.8433 19.355 16.835 18.095 18.095C16.835 19.355 15.8317 20.8367 15.085 22.54C14.3617 24.2433 14 26.0633 14 28Z"/></svg>
              </a>
              {/* Claude (Anthropic) */}
              <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted-foreground sm:h-8 sm:w-8 sm:rounded-lg transition-colors hover:border-primary/50 hover:text-primary" title="Summarize with Claude">
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor"><path d="m3.127 10.604 3.135-1.76.053-.153-.053-.085H6.11l-.525-.032-1.791-.048-1.554-.065-1.505-.08-.38-.081L0 7.832l.036-.234.32-.214.455.04 1.009.069 1.513.105 1.097.064 1.626.17h.259l.036-.105-.089-.065-.068-.064-1.566-1.062-1.695-1.121-.887-.646-.48-.327-.243-.306-.104-.67.435-.48.585.04.15.04.593.456 1.267.981 1.654 1.218.242.202.097-.068.012-.049-.109-.181-.9-1.626-.96-1.655-.428-.686-.113-.411a2 2 0 0 1-.068-.484l.496-.674L4.446 0l.662.089.279.242.411.94.666 1.48 1.033 2.014.302.597.162.553.06.17h.105v-.097l.085-1.134.157-1.392.154-1.792.052-.504.25-.605.497-.327.387.186.319.456-.045.294-.19 1.23-.37 1.93-.243 1.29h.142l.161-.16.654-.868 1.097-1.372.484-.545.565-.601.363-.287h.686l.505.751-.226.775-.707.895-.585.759-.839 1.13-.524.904.048.072.125-.012 1.897-.403 1.024-.186 1.223-.21.553.258.06.263-.218.536-1.307.323-1.533.307-2.284.54-.028.02.032.04 1.029.098.44.024h1.077l2.005.15.525.346.315.424-.053.323-.807.411-3.631-.863-.872-.218h-.12v.073l.726.71 1.331 1.202 1.667 1.55.084.383-.214.302-.226-.032-1.464-1.101-.565-.497-1.28-1.077h-.084v.113l.295.432 1.557 2.34.08.718-.112.234-.404.141-.444-.08-.911-1.28-.94-1.44-.759-1.291-.093.053-.448 4.821-.21.246-.484.186-.403-.307-.214-.496.214-.98.258-1.28.21-1.016.19-1.263.112-.42-.008-.028-.092.012-.953 1.307-1.448 1.957-1.146 1.227-.274.109-.477-.247.045-.44.266-.39 1.586-2.018.956-1.25.617-.723-.004-.105h-.036l-4.212 2.736-.75.096-.324-.302.04-.496.154-.162 1.267-.871z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider — desktop only; on mobile the accordion's top border is the single line */}
      <div className="mx-auto hidden max-w-7xl px-6 lg:block"><div className="h-px w-full bg-border/40" /></div>

      {/* Links — accordion on mobile/tablet, 6 columns on desktop */}
      <div className="mx-auto w-full max-w-7xl px-6 pb-4 pt-2 lg:py-12">
        <FooterAccordion sections={mobileSections} />
        <div className="hidden lg:grid lg:grid-cols-6 lg:gap-x-6">
          {columns.map((groups, i) => (
            <div key={i}>
              {groups.map((g, j) => (
                <FooterGroup key={g.title} title={g.title} links={g.links} className={j > 0 ? "lg:mt-8" : ""} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto hidden max-w-7xl px-6 lg:block"><div className="h-px w-full bg-border/40" /></div>
      <div className="mx-auto w-full max-w-7xl px-6 pt-6 pb-8 lg:py-6">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:gap-4">
          <a href="/components" className="order-3 text-center text-[13px] lg:order-none text-muted-foreground transition-colors hover:text-primary">&copy; {new Date().getFullYear()} Motadata. All rights reserved.</a>
          <div className="order-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 lg:order-none lg:justify-start">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "#" },
              { label: "Features", href: "/features" },
              { label: "Sitemap", href: "#" },
              { label: "Brand Guidelines", href: "/brand-guidelines" },
              { label: "Media Kit", href: "/media-kit" },
              { label: "Login", href: "/login" },
              { label: "Email Signature", href: "/email-signature" },
              { label: "EDM Template", href: "/edm-template" },
              { label: "ObserveOps Brochure", href: "/observeops-brochure" },
              { label: "ServiceOps Brochure", href: "/serviceops-brochure" },
              { label: "Product Corporate Presentation", href: "/corporate-presentation" },
              { label: "Icons", href: "/motadata-icons.html" },
            ].map((link) => (
              <a key={link.label} href={link.href} className="text-[13px] text-muted-foreground transition-colors hover:text-primary">{link.label}</a>
            ))}
          </div>
          {/* Social icons */}
          <div className="order-1 flex items-center gap-3 lg:order-none">
            {[
              { label: "Twitter", icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
              { label: "LinkedIn", icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
              { label: "YouTube", icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
              { label: "Facebook", icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
            ].map((s) => (
              <a key={s.label} href="#" aria-label={s.label} className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary lg:h-auto lg:w-auto lg:border-0">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
