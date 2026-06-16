import type { ServiceOpsIntegrationData } from "@/components/integrations/serviceops-integration-types";

export const jiraData: ServiceOpsIntegrationData = {
  meta: {
    title: "ServiceOps + Jira Integration | Motadata",
    description: "Enable bi-directional synchronization between IT service tickets and development issues.",
  },
  hero: {
    badge: "ServiceOps Integration",
    headline: "ServiceOps + Jira",
    tagline: "From tickets to code. From issues to resolution. In sync.",
    description: "Enable bi-directional synchronization between IT service tickets and development issues. Align ITSM with DevOps. Deliver faster resolutions without silos.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Talk to an Expert", href: "/contact" },
  },
  compatibility: {
    headline: "ServiceOps integrates seamlessly with Jira",
    description: "Service management meets development workflows. Fully connected. Fully aligned.",
  },
  whyItMatters: {
    label: "Why this integration matters",
    title: "Why connect ServiceOps with Jira?",
    description: "Because incidents don't stop at IT. They flow into development. They demand collaboration.\nServiceOps manages service delivery. Jira manages development execution. When they operate in isolation, delays grow, context is lost, and resolution slows.\nThis integration bridges that gap. It creates a shared operational language between IT and engineering teams.\nFrom disconnected workflows to continuous collaboration. From manual handoffs to synchronized execution.",
  },
  keyOutcomes: {
    label: "Key Outcomes",
    title: "What you unlock with Jira + ServiceOps",
    items: [
      { title: "Bi-directional ticket synchronization", description: "Sync incidents, problems, and changes with Jira issues in real time." },
      { title: "Unified IT and Dev workflows", description: "Align service teams and development teams on a single flow of work." },
      { title: "Faster incident resolution", description: "Reduce back-and-forth. Enable direct collaboration between teams." },
      { title: "Context-rich issue tracking", description: "Share logs, alerts, service data, and updates across both systems." },
      { title: "Reduced manual handoffs", description: "Automate ticket creation, updates, and status transitions." },
      { title: "End-to-end visibility", description: "Track issues from user report to code fix to service restoration." },
    ],
  },
  howItWorks: {
    label: "How it works",
    title: "One flow. Multiple teams. Zero friction.",
    steps: [
      { title: "Detect", description: "Incidents or service requests are created in ServiceOps." },
      { title: "Sync", description: "Relevant tickets are automatically pushed to Jira as issues." },
      { title: "Collaborate", description: "Developers work in Jira while IT teams track progress in ServiceOps." },
      { title: "Resolve", description: "Updates sync back in real time. Tickets close together. Systems stay aligned." },
    ],
  },
  coreUseCases: {
    label: "Core Use Cases",
    title: "Built for modern DevOps-driven enterprises",
    items: [
      { title: "Incident to bug conversion", description: "Automatically convert IT incidents into Jira bugs with full context." },
      { title: "Change and release coordination", description: "Align IT change management with development release cycles." },
      { title: "Major incident collaboration", description: "Enable real-time collaboration between NOC, service desk, and dev teams." },
      { title: "Problem management integration", description: "Link recurring incidents to development backlog for permanent fixes." },
      { title: "DevOps and ITSM alignment", description: "Create a seamless bridge between service operations and engineering execution." },
      { title: "SLA-driven development workflows", description: "Ensure development priorities align with IT service SLAs." },
    ],
  },
  personaValue: {
    label: "Persona Value",
    title: "Built for teams that need speed, clarity, and collaboration",
    personas: [
      { role: "For Service Desk Leaders", description: "Eliminate communication gaps with development teams. Resolve tickets faster with direct visibility into engineering progress." },
      { role: "For IT Directors", description: "Break silos between ITSM and DevOps. Create a unified workflow that improves SLA performance and operational efficiency." },
      { role: "For NOC and IT Operations Teams", description: "Reduce escalation delays. Get real-time updates from developers without chasing status across tools." },
      { role: "For CIOs and CTOs", description: "Align IT operations with software delivery. Drive faster innovation while maintaining service reliability and governance." },
    ],
  },
  enterpriseReadiness: {
    label: "Enterprise Readiness",
    title: "Built for scale, speed, and cross-team collaboration",
    description: "Motadata ServiceOps integrates with Jira to support high-velocity environments where IT and development must operate as one. From incident escalation to release coordination, the integration ensures seamless communication, full traceability, and faster outcomes.",
  },
  relatedIntegrations: {
    label: "Related Integrations",
    title: "Extend your DevOps ecosystem",
    items: [
    { name: "GitHub", slug: "github" },
    { name: "GitLab", slug: "gitlab" },
    { name: "Bitbucket", slug: "bitbucket" },
    { name: "Azure DevOps", slug: "azure-devops" },
    { name: "Jenkins", slug: "jenkins" },
    ],
  },
  closingCta: {
    headline: "One workflow. One truth. Faster outcomes.",
    description: "Connect Motadata ServiceOps with Jira to eliminate silos, accelerate resolution, and unify IT and development.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Explore Integrations", href: "/resources/integrations/serviceops" },
  },
};
