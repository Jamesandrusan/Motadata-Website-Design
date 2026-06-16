import type { ServiceOpsIntegrationData } from "@/components/integrations/serviceops-integration-types";

export const observeopsData: ServiceOpsIntegrationData = {
  meta: {
    title: "ServiceOps + ObserveOps Integration | Motadata",
    description: "Detect faster. Respond smarter. Resolve without delay.",
  },
  hero: {
    badge: "ServiceOps Integration",
    headline: "ServiceOps + ObserveOps",
    tagline: "From alert to action. Automatically.",
    description: "Detect faster. Respond smarter. Resolve without delay.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "See It in Action", href: "/contact" },
  },
  compatibility: {
    headline: "Native integration between ObserveOps and ServiceOps",
    description: "Observability meets service execution in one unified platform.",
  },
  whyItMatters: {
    label: "Why this integration matters",
    title: "Monitoring tells you something is wrong. Service management ensures it gets fixed.",
    description: "But when these systems don't talk, alerts stay alerts, tickets come late, and resolution slows down.\nServiceOps + ObserveOps changes that.\nEvery signal becomes a workflow.\nEvery alert becomes action.\nEvery issue moves toward resolution automatically.\nFrom fragmented tools to unified operations. From detection to resolution without delay.",
  },
  keyOutcomes: {
    label: "Key Outcomes",
    title: "What you unlock with ObserveOps + ServiceOps",
    items: [
      { title: "Automated ticket creation", description: "Convert alerts into incidents instantly with zero manual effort." },
      { title: "Faster incident response", description: "Trigger workflows the moment anomalies are detected." },
      { title: "Context-rich tickets", description: "Attach metrics, logs, and topology insights to every incident." },
      { title: "Reduced MTTR", description: "Eliminate delays between detection and action." },
      { title: "Noise reduction", description: "Filter and prioritize alerts before they become tickets." },
      { title: "Closed-loop operations", description: "Track every issue from detection to resolution in one system." },
    ],
  },
  howItWorks: {
    label: "How it works",
    title: "From signal to solution",
    steps: [
      { title: "Detect", description: "ObserveOps identifies anomalies across infrastructure, applications, and network." },
      { title: "Trigger", description: "Alerts automatically create incidents in ServiceOps." },
      { title: "Enrich", description: "Tickets are populated with full observability context." },
      { title: "Act", description: "Workflows, automation, and teams drive resolution." },
    ],
  },
  coreUseCases: {
    label: "Core Use Cases",
    title: "Built for real-world IT operations",
    items: [
      { title: "Incident auto-creation", description: "Ensure no critical alert goes unnoticed or untracked." },
      { title: "Proactive issue resolution", description: "Act on anomalies before users are impacted." },
      { title: "Unified NOC + Service Desk", description: "Align operations teams with shared visibility and workflows." },
      { title: "SLA-driven operations", description: "Respond faster with automated escalation and prioritization." },
      { title: "Root cause-driven workflows", description: "Use observability insights to resolve issues at the source." },
    ],
  },
  personaValue: {
    label: "Persona Value",
    title: "From chaos to clarity. From insight to action.",
    personas: [
      { role: "For NOC Engineers", description: "Reduce alert fatigue and act only on what matters with automated workflows." },
      { role: "For Service Desk Leaders", description: "Ensure every incident is tracked, prioritized, and resolved faster." },
      { role: "For CIOs and CTOs", description: "Transform IT from reactive firefighting to proactive, AI-driven operations." },
    ],
  },
  enterpriseReadiness: {
    label: "Enterprise Impact",
    title: "One platform. Complete control.",
    description: "No missed alerts.\nNo delayed responses.\nNo disconnected systems.\nJust intelligent, automated IT operations at scale.\nBuilt to unify observability, service management, and automation into one seamless experience.",
  },
  relatedIntegrations: {
    label: "Related Integrations",
    title: "Extend your operational ecosystem",
    items: [
    { name: "Slack", slug: "slack" },
    { name: "Microsoft Teams", slug: "microsoft-teams" },
    { name: "Jira", slug: "jira" },
    ],
  },
  closingCta: {
    headline: "Turn every alert into action",
    description: "Observe smarter. Respond faster. Resolve better.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Explore ObserveOps", href: "/products/observeops" },
  },
};
