import type { ServiceOpsIntegrationData } from "@/components/integrations/serviceops-integration-types";

export const microsoftTeamsData: ServiceOpsIntegrationData = {
  meta: {
    title: "ServiceOps + Microsoft Teams Integration | Motadata",
    description: "Empower users to raise incidents and track updates directly within Microsoft Teams.",
  },
  hero: {
    badge: "ServiceOps Integration",
    headline: "ServiceOps + Microsoft Teams",
    tagline: "Report faster. Respond smarter. Resolve right from chat.",
    description: "Empower users to raise incidents and track updates directly within Microsoft Teams. Bring IT support where work happens. Eliminate delays. Accelerate resolution.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Talk to an Expert", href: "/contact" },
  },
  compatibility: {
    headline: "ServiceOps integrates seamlessly with Microsoft Teams",
    description: "Your service desk. Your collaboration hub. Fully connected.",
  },
  whyItMatters: {
    label: "Why this integration matters",
    title: "Support should live where conversations happen",
    description: "Today's workforce lives inside collaboration tools. But IT support still lives somewhere else.\nThat gap slows everything down. Users switch tools. Context gets lost. Responses take longer.\nServiceOps brings service management directly into Teams.\nNo switching. No waiting. No friction.\nFrom scattered requests to structured service delivery. From delayed support to real-time response.",
  },
  keyOutcomes: {
    label: "Key Outcomes",
    title: "What you unlock with Teams + ServiceOps",
    items: [
      { title: "Instant incident reporting", description: "Raise tickets directly from Teams chat without logging into another system." },
      { title: "Real-time status updates", description: "Track ticket progress, approvals, and resolutions within Teams conversations." },
      { title: "Faster response times", description: "Eliminate delays caused by tool switching and manual communication." },
      { title: "Improved user experience", description: "Deliver support in a familiar interface employees already use daily." },
      { title: "Context-rich collaboration", description: "Share updates, comments, and service insights seamlessly across teams." },
      { title: "Reduced service desk load", description: "Enable self-service and automated responses through chat-driven workflows." },
    ],
  },
  howItWorks: {
    label: "How it works",
    title: "Support that moves at the speed of conversation",
    steps: [
      { title: "Raise", description: "Users report incidents or requests directly from Teams chat or bot interface." },
      { title: "Sync", description: "Tickets are created instantly in ServiceOps with full context." },
      { title: "Engage", description: "Agents respond, update, and collaborate without leaving Teams." },
      { title: "Resolve", description: "Updates sync in real time. Users stay informed. Issues close faster." },
    ],
  },
  coreUseCases: {
    label: "Core Use Cases",
    title: "Built for modern, chat-first workplaces",
    items: [
      { title: "Chat-based incident logging", description: "Allow employees to report issues instantly from Teams." },
      { title: "Ticket tracking in conversations", description: "Keep users updated without emails or portal logins." },
      { title: "Automated service responses", description: "Use bots to answer common queries and reduce ticket volume." },
      { title: "Approval workflows in Teams", description: "Enable managers to approve requests directly within chat." },
      { title: "IT announcements and alerts", description: "Broadcast service updates, outages, and maintenance notifications." },
      { title: "Remote workforce support", description: "Provide seamless IT support for distributed teams across locations." },
    ],
  },
  personaValue: {
    label: "Persona Value",
    title: "Built for speed, simplicity, and adoption",
    personas: [
      { role: "For Service Desk Leaders", description: "Increase ticket visibility and user engagement without adding workload. Deliver faster support with fewer touchpoints." },
      { role: "For IT Directors", description: "Drive higher service adoption and improve SLA performance by embedding ITSM into daily workflows." },
      { role: "For NOC and IT Operations Teams", description: "Reduce noise from emails and fragmented communication. Get structured, actionable requests from Teams." },
      { role: "For CIOs and CTOs", description: "Enhance employee experience while improving operational efficiency. Align IT support with modern workplace tools." },
    ],
  },
  enterpriseReadiness: {
    label: "Enterprise Readiness",
    title: "Collaboration meets service management at scale",
    description: "Motadata ServiceOps integrates with Microsoft Teams to support enterprise-wide communication and service delivery. Whether it's incident reporting, approvals, or updates, everything flows through a single collaborative layer.",
  },
  relatedIntegrations: {
    label: "Related Integrations",
    title: "Extend your collaboration ecosystem",
    items: [
    { name: "Slack", slug: "slack" },
    { name: "Microsoft Outlook", slug: "office-365" },
    { name: "Zoom", slug: "zoom" },
    { name: "Google Workspace", slug: "google-workspace" },
    ],
  },
  closingCta: {
    headline: "Deliver service where work happens",
    description: "Bring IT support into Microsoft Teams. Reduce friction. Improve experience. Accelerate resolution.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Explore Integrations", href: "/resources/integrations/serviceops" },
  },
};
