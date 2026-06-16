import type { ServiceOpsIntegrationData } from "@/components/integrations/serviceops-integration-types";

export const googleWorkspaceData: ServiceOpsIntegrationData = {
  meta: {
    title: "ServiceOps + Google Workspace Integration | Motadata",
    description: "Connect Motadata ServiceOps with Google Workspace to streamline authentication, synchronize user profiles, and manage service access with complete control.",
  },
  hero: {
    badge: "ServiceOps Integration",
    headline: "ServiceOps + Google Workspace",
    tagline: "Simplify access. Sync users. Serve faster.",
    description: "Connect Motadata ServiceOps with Google Workspace to streamline authentication, synchronize user profiles, and manage service access with complete control. From login to resolution, every interaction stays secure, connected, and effortless.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Talk to an Expert", href: "/contact" },
  },
  compatibility: {
    headline: "ServiceOps works seamlessly with Google Workspace",
    description: "Unify identity, access, and service workflows across your organization without adding complexity.",
  },
  whyItMatters: {
    label: "Why this integration matters",
    title: "Why connect ServiceOps with Google Workspace?",
    description: "Because service starts with identity.\nWhen user data lives in silos, access becomes inconsistent, onboarding slows down, and service teams struggle with outdated or incomplete information. Authentication becomes friction. Support becomes reactive.\nThis integration ensures your service platform always knows who the user is, what access they need, and how to serve them faster. No duplication. No delays. No confusion.",
  },
  keyOutcomes: {
    label: "Key Outcomes",
    title: "What changes when identity and service stay in sync?",
    items: [
      { title: "Faster user onboarding", description: "Automatically sync user profiles and give instant access to service portals." },
      { title: "Simplified authentication", description: "Enable secure, seamless login with Google Workspace credentials." },
      { title: "Accurate user context", description: "Keep user data updated across tickets, requests, and service records." },
      { title: "Reduced manual effort", description: "Eliminate repetitive user creation and profile updates." },
      { title: "Better access control", description: "Ensure the right users have the right access at the right time." },
      { title: "Stronger security posture", description: "Centralize identity and authentication with trusted Google infrastructure." },
    ],
  },
  howItWorks: {
    label: "How it works",
    title: "From login to service delivery. One connected experience.",
    steps: [
      { title: "Authenticate", description: "Users log in to ServiceOps using Google Workspace credentials." },
      { title: "Sync", description: "User profiles automatically sync with ServiceOps, keeping records accurate and up to date." },
      { title: "Manage", description: "Access rights, roles, and service permissions align with organizational identity." },
      { title: "Serve", description: "Service teams resolve requests with full user context, without switching systems." },
    ],
  },
  coreUseCases: {
    label: "Core Use Cases",
    title: "Built for real-world service workflows",
    items: [
      { title: "Single Sign-On for ServiceOps", description: "Allow users to access the service portal using their Google Workspace login, reducing friction and improving adoption." },
      { title: "Automated User Provisioning", description: "Sync user accounts and profiles automatically, ensuring new employees are service-ready from day one." },
      { title: "Centralized Access Management", description: "Control user roles and permissions in ServiceOps based on Google Workspace identity." },
      { title: "Accurate Ticket Context", description: "Ensure every incident and request is linked to the correct user with updated profile data." },
      { title: "Faster Onboarding and Offboarding", description: "Enable quick access provisioning for new hires and seamless deactivation for exiting users." },
      { title: "Reduced IT Overhead", description: "Minimize manual user management tasks for IT teams and service desk agents." },
    ],
  },
  personaValue: {
    label: "Persona Value",
    title: "Who benefits most? Everyone involved in service delivery",
    personas: [
      { role: "For IT Directors", description: "Gain centralized control over user access and identity-driven service workflows. Reduce operational complexity while improving governance and visibility." },
      { role: "For Service Desk Leaders", description: "Equip agents with accurate user information from the start. Resolve issues faster without chasing identity details or correcting user records." },
      { role: "For MSPs", description: "Manage user access across multiple environments with consistency and scale. Ensure secure and standardized service delivery for every client." },
    ],
  },
  enterpriseReadiness: {
    label: "Enterprise Readiness",
    title: "Built for secure, scalable identity integration",
    description: "Motadata ServiceOps integrates with Google Workspace using secure authentication protocols and real-time synchronization. Whether your organization operates in a cloud-first environment or hybrid setup, this integration ensures identity, access, and service workflows remain aligned without compromising security or control.",
  },
  relatedIntegrations: {
    label: "Related Integrations",
    title: "Keep your service ecosystem connected",
    items: [
    { name: "Microsoft Azure AD", slug: "azure-ad" },
    { name: "Okta", slug: "okta" },
    { name: "Slack", slug: "slack" },
    { name: "Jira", slug: "jira" },
    ],
  },
  closingCta: {
    headline: "Connect identity. Simplify service. Deliver faster.",
    description: "Bring your service management and identity ecosystem together with Motadata ServiceOps and Google Workspace.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Explore Integrations", href: "/resources/integrations/serviceops" },
  },
};
