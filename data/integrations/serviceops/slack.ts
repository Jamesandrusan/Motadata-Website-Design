import type { ServiceOpsIntegrationData } from "@/components/integrations/serviceops-integration-types";

export const slackData: ServiceOpsIntegrationData = {
  meta: {
    title: "ServiceOps + Slack Integration | Motadata",
    description: "Bring IT support into the flow of work. Convert Slack messages into tickets. Resolve issues without switching context.",
  },
  hero: {
    badge: "ServiceOps Integration",
    headline: "ServiceOps + Slack",
    tagline: "Where conversations turn into action. Instantly.",
    description: "Bring IT support into the flow of work. Convert Slack messages into tickets. Resolve issues without switching context.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Talk to an Expert", href: "/contact" },
  },
  compatibility: {
    headline: "ServiceOps integrates seamlessly with Slack",
    description: "From chat to resolution. Without friction.",
  },
  whyItMatters: {
    label: "Why this integration matters",
    title: "Work happens in Slack. Support should too.",
    description: "Teams don't stop to raise tickets.\nThey message. They collaborate. They move fast.\nBut when support stays outside Slack, requests get lost. Context disappears. Delays increase.\nServiceOps bridges that gap.\nTurning conversations into structured actions.\nBringing IT service into the heartbeat of your organization.\nFrom scattered chats to structured service. From missed messages to measurable outcomes.",
  },
  keyOutcomes: {
    label: "Key Outcomes",
    title: "What you unlock with Slack + ServiceOps",
    items: [
      { title: "Instant ticket creation", description: "Convert Slack messages into tickets in seconds." },
      { title: "Context-rich support", description: "Capture full conversation history with every request." },
      { title: "Faster collaboration", description: "Agents and users resolve issues together in real time." },
      { title: "Reduced tool switching", description: "Stay inside Slack while managing support workflows." },
      { title: "Improved response times", description: "Eliminate delays caused by fragmented communication." },
      { title: "Chat-driven service experience", description: "Make IT support feel natural, fast, and conversational." },
    ],
  },
  howItWorks: {
    label: "How it works",
    title: "From message to resolution",
    steps: [
      { title: "Detect", description: "User raises an issue in Slack." },
      { title: "Convert", description: "ServiceOps automatically creates a ticket with context." },
      { title: "Collaborate", description: "Agents respond, assign, and resolve within Slack or ServiceOps." },
      { title: "Notify", description: "Real-time updates keep everyone aligned until closure." },
    ],
  },
  coreUseCases: {
    label: "Core Use Cases",
    title: "Built for modern, collaborative IT teams",
    items: [
      { title: "ChatOps for IT support", description: "Handle incidents and requests directly from Slack channels." },
      { title: "DevOps collaboration", description: "Bridge gaps between developers, IT, and support teams." },
      { title: "Incident war rooms", description: "Enable real-time coordination during outages." },
      { title: "Automated workflows", description: "Trigger ticket creation, approvals, and updates via Slack." },
      { title: "Service notifications", description: "Push alerts, escalations, and updates into channels." },
      { title: "Knowledge sharing", description: "Deliver instant answers using integrated knowledge workflows." },
    ],
  },
  personaValue: {
    label: "Persona Value",
    title: "Built for speed, collaboration, and control",
    personas: [
      { role: "For Service Desk Leaders", description: "Reduce ticket chaos from unstructured chats. Improve visibility and response times while enabling true omnichannel support." },
      { role: "For IT Directors", description: "Break silos between teams. Enable faster issue resolution through real-time collaboration." },
      { role: "For NOC and IT Operations Teams", description: "Turn Slack into an operational command center. Respond faster with shared context and fewer escalations." },
      { role: "For CIOs and CTOs", description: "Drive productivity across teams. Ensure collaboration translates into measurable service outcomes." },
    ],
  },
  enterpriseReadiness: {
    label: "Enterprise Readiness",
    title: "Collaboration meets control",
    description: "ServiceOps + Slack enables organizations to adopt ChatOps without losing structure.\nEvery conversation becomes trackable.\nEvery request becomes actionable.\nEvery outcome becomes measurable.\nThis is collaboration with accountability. Unified. Intelligent. Always connected.",
  },
  relatedIntegrations: {
    label: "Related Integrations",
    title: "Extend your collaboration ecosystem",
    items: [
    { name: "Microsoft Teams", slug: "microsoft-teams" },
    { name: "WhatsApp", slug: "whatsapp" },
    { name: "Email", slug: "office-365" },
    { name: "Web Portal", slug: "web-portal" },
    ],
  },
  closingCta: {
    headline: "Turn conversations into outcomes",
    description: "Bring IT service into Slack. Respond faster. Collaborate better. Resolve smarter.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Explore Integrations", href: "/resources/integrations/serviceops" },
  },
};
