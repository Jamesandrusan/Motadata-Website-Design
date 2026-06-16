import type { ServiceOpsIntegrationData } from "@/components/integrations/serviceops-integration-types";

export const office365Data: ServiceOpsIntegrationData = {
  meta: {
    title: "ServiceOps + Office 365 Integration | Motadata",
    description: "Emails become actions. Users become context. Service becomes seamless.",
  },
  hero: {
    badge: "ServiceOps Integration",
    headline: "ServiceOps + Office 365",
    tagline: "Workflows that move at the speed of communication.",
    description: "Emails become actions. Users become context. Service becomes seamless.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Talk to an Expert", href: "/contact" },
  },
  compatibility: {
    headline: "ServiceOps integrates seamlessly with Microsoft Office 365",
    description: "From inbox to incident. From communication to resolution.",
  },
  whyItMatters: {
    label: "Why this integration matters",
    title: "Work happens in email. Service should too.",
    description: "Requests don't start in portals.\nThey start in inboxes.\nSupport teams spend hours switching between tools. Copying data. Losing context. Delaying resolution.\nServiceOps integrates with Office 365 to turn communication into action.\nSo every email becomes a structured service workflow.\nNo duplication. No delays. No missed requests.\nFrom scattered conversations to connected service delivery. From inbox chaos to operational clarity.",
  },
  keyOutcomes: {
    label: "Key Outcomes",
    title: "What you unlock with Office 365 + ServiceOps",
    items: [
      { title: "Email-to-ticket automation", description: "Convert emails into incidents and service requests instantly." },
      { title: "Unified user context", description: "Sync user profiles for faster identification and response." },
      { title: "Faster response times", description: "Capture, route, and resolve requests without manual intervention." },
      { title: "Reduced ticket leakage", description: "Ensure no request is lost in inboxes or missed by teams." },
      { title: "Improved service efficiency", description: "Streamline workflows and improve agent productivity." },
      { title: "Better user experience", description: "Users get support from the channel they already use." },
    ],
  },
  howItWorks: {
    label: "How it works",
    title: "From communication to resolution",
    steps: [
      { title: "Capture", description: "Emails from Office 365 are automatically ingested into ServiceOps." },
      { title: "Convert", description: "Messages are transformed into structured tickets with full context." },
      { title: "Enrich", description: "User data and history are mapped instantly." },
      { title: "Resolve", description: "Workflows route, prioritize, and close requests faster." },
    ],
  },
  coreUseCases: {
    label: "Core Use Cases",
    title: "Built for modern, communication-first IT support",
    items: [
      { title: "Email-driven service desk", description: "Turn every incoming email into a trackable ticket." },
      { title: "Automated request routing", description: "Assign tickets based on content, priority, or user role." },
      { title: "User profile synchronization", description: "Keep user data updated across systems for accurate service delivery." },
      { title: "Incident tracking from email", description: "Ensure every issue is logged, tracked, and resolved with SLA visibility." },
      { title: "Hybrid support environments", description: "Support users across remote and distributed teams effortlessly." },
    ],
  },
  personaValue: {
    label: "Persona Value",
    title: "Efficiency for teams. Simplicity for users.",
    personas: [
      { role: "For Service Desk Leaders", description: "Reduce manual ticket logging and improve response SLAs by automating email-driven workflows." },
      { role: "For IT Directors", description: "Unify communication and service management to eliminate silos and improve operational visibility." },
      { role: "For IT Operations Teams", description: "Spend less time managing emails. Focus more on resolving issues faster and more effectively." },
    ],
  },
  enterpriseReadiness: {
    label: "Enterprise Readiness",
    title: "Email meets ITSM. At enterprise scale.",
    description: "Every email is captured.\nEvery request is tracked.\nEvery workflow is automated.\nServiceOps + Office 365 ensures communication-driven IT support at scale.\nStructured. Measurable. Always connected.",
  },
  relatedIntegrations: {
    label: "Related Integrations",
    title: "Extend your communication ecosystem",
    items: [
    { name: "Microsoft Teams", slug: "microsoft-teams" },
    { name: "Google Workspace", slug: "google-workspace" },
    { name: "Slack", slug: "slack" },
    { name: "Jira", slug: "jira" },
    ],
  },
  closingCta: {
    headline: "Turn every email into action",
    description: "Connect ServiceOps with Office 365. Capture requests. Automate workflows. Deliver service that's always connected.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Explore Integrations", href: "/resources/integrations/serviceops" },
  },
};
