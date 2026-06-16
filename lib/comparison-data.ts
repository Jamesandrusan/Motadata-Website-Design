export interface FeatureRow {
  feature: string;
  motadata: boolean | string;
  competitor: boolean | string;
}

export interface FeatureTab {
  label: string;
  rows: FeatureRow[];
}

export interface TableRow {
  feature: string;
  motadata: string;
  competitor: string;
}

export interface AiopsFeature {
  title: string;
  description: string;
}

export interface Differentiator {
  title: string;
  description: string;
}

export interface WhyChoose {
  stat: string;
  title: string;
  description: string;
}

export interface ComparisonData {
  slug: string;
  tag: string;
  competitor: string;
  title: string;
  subtitle: string;
  altTitle: string;
  altBody: string[];
  aiopsCta: string;
  aiopsFeatures: AiopsFeature[];
  tableTitle: string;
  tableRows: TableRow[];
  featureTabs: FeatureTab[];
  stats: { value: string; label: string }[];
  keyDifferentiators: Differentiator[];
  whyChoose: WhyChoose[];
  switchCta: { title: string; description: string };
}

export const comparisons: ComparisonData[] = [
  {
    slug: "motadata-vs-manageengine",
    tag: "Enterprise Tools",
    competitor: "ManageEngine",
    title: "Motadata vs ManageEngine",
    subtitle:
      "Discover why forward-thinking enterprises are choosing Motadata's unified AI-native platform over ManageEngine's fragmented suite of tools.",
    altTitle: "The Modern Alternative to ManageEngine",
    altBody: [
      "While ManageEngine offers a broad suite of products, enterprises are increasingly finding that managing multiple separate tools creates unnecessary complexity and hidden costs. Motadata delivers a unified platform that combines observability and service operations with AI-native capabilities that ManageEngine simply cannot match.",
      "Built for modern cloud-native environments, Motadata provides the comprehensive visibility and intelligent automation that today's IT teams need—all in a single, intuitive platform.",
    ],
    aiopsCta: "Try It Today",
    aiopsFeatures: [
      {
        title: "Built as a unified observability across network, server, and cloud",
        description:
          "Motadata AIOps is a unified observability cloud that seamlessly covers network, server, and cloud landscapes. Its comprehensive approach ensures a holistic view, giving you the power to navigate through the complexities of your infrastructure with unparalleled ease.",
      },
      {
        title: "AI ready across data sources",
        description:
          "Motadata AIOps is an AI-powered IT management platform that gathers intel from metrics, logs, and traffic to spot anomalies before they become major issues. AIOps uses multiple algorithms depending upon the data type and source to ensure that every event that affects performance is captured and notified.",
      },
      {
        title: "Motadata uses propriety data store",
        description:
          "Motadata utilizes a proprietary data store, MotaStore, to deliver complete data control across diverse sources through AI-powered analytics. This high-performance datalake ensures rapid data ingestion from hybrid infrastructures, enhancing ITOps, DevOps, and SecOps.",
      },
      {
        title: "MotaStore is built to process high-cardinality data",
        description:
          "MotaStore thrives in the face of data's ever-growing complexity. Its high-cardinality processing muscle lets it effortlessly crunch through oceans of diverse information, from countless product variations to user profiles bursting with unique traits.",
      },
      {
        title: "Motadata is easy to self host and gives single pane of glass",
        description:
          "Motadata ends your search for a hassle-free self-hosted solution. Unlike its competition that has complex management of multiple consoles and information silos, Motadata uses a single backend for comprehensive observability, simplifying the entire process.",
      },
    ],
    tableTitle: "Motadata vs ManageEngine: The Ultimate Comparison",
    tableRows: [
      { feature: "Datastores", motadata: "Single", competitor: "Multiple" },
      { feature: "Agent", motadata: "One", competitor: "Multiple" },
      { feature: "Context", motadata: "Built-in", competitor: "Humans" },
      { feature: "Pricing", motadata: "Usage-based", competitor: "Ingest-based" },
      { feature: "Retention", motadata: "1 Years +", competitor: "Days" },
      {
        feature: "Analytics on high cardinality data",
        motadata: "In seconds",
        competitor: "Not built for high cardinality data",
      },
    ],
    featureTabs: [
      {
        label: "Platform Capabilities",
        rows: [
          { feature: "Unified Observability + ServiceOps", motadata: true, competitor: false },
          { feature: "AI-Native Architecture", motadata: true, competitor: false },
          { feature: "Network Monitoring", motadata: true, competitor: true },
          { feature: "Application Performance Monitoring", motadata: true, competitor: true },
          { feature: "Service Desk", motadata: true, competitor: true },
          { feature: "Asset Management", motadata: true, competitor: true },
          { feature: "Log Monitoring", motadata: true, competitor: true },
          { feature: "Real User Monitoring", motadata: true, competitor: true },
        ],
      },
      {
        label: "AI & Automation",
        rows: [
          { feature: "AI-Powered Root Cause Analysis", motadata: true, competitor: true },
          { feature: "Predictive Analytics", motadata: true, competitor: false },
          { feature: "Intelligent Alerting", motadata: true, competitor: true },
          { feature: "Auto-Remediation", motadata: true, competitor: false },
          { feature: "AI Agent for IT Operations", motadata: true, competitor: false },
        ],
      },
      {
        label: "Deployment & Integration",
        rows: [
          { feature: "Cloud-Native Architecture", motadata: true, competitor: false },
          { feature: "On-Premise Deployment", motadata: true, competitor: true },
          { feature: "Hybrid Cloud Support", motadata: true, competitor: true },
          { feature: "500+ Integrations", motadata: true, competitor: true },
          { feature: "OpenTelemetry Support", motadata: true, competitor: false },
        ],
      },
      {
        label: "User Experience",
        rows: [
          { feature: "Modern, Intuitive UI", motadata: true, competitor: false },
          { feature: "Single Pane of Glass", motadata: true, competitor: false },
          { feature: "Customizable Dashboards", motadata: true, competitor: true },
          { feature: "Mobile App", motadata: true, competitor: true },
          { feature: "Role-Based Access Control", motadata: true, competitor: true },
        ],
      },
    ],
    stats: [
      { value: "70%", label: "Faster Deployment" },
      { value: "50%", label: "Reduction in MTTR" },
      { value: "1", label: "Unified Platform" },
      { value: "500+", label: "Integrations" },
    ],
    keyDifferentiators: [
      {
        title: "Unified Platform",
        description:
          "Motadata combines ObserveOps and ServiceOps in a single platform, eliminating the need for multiple tools. ManageEngine requires separate products for complete coverage.",
      },
      {
        title: "AI-Native Architecture",
        description:
          "Built from the ground up with AI at its core, Motadata uses deep learning to provide predictive insights and automated remediation that ManageEngine cannot match.",
      },
      {
        title: "Modern Technology Stack",
        description:
          "Cloud-native architecture with microservices ensures scalability and performance. ManageEngine's legacy architecture can struggle with modern cloud environments.",
      },
      {
        title: "Transparent Pricing",
        description:
          "Simple, predictable pricing with no hidden fees. ManageEngine's complex licensing model often leads to unexpected costs as your needs grow.",
      },
    ],
    whyChoose: [
      {
        stat: "70%",
        title: "Faster Deployment",
        description: "Get up and running in days, not months, with our streamlined onboarding process.",
      },
      {
        stat: "50%",
        title: "Reduction in MTTR",
        description: "AI-powered insights help teams resolve incidents faster and prevent future issues.",
      },
      {
        stat: "",
        title: "Better Team Collaboration",
        description: "Unified platform breaks down silos between infrastructure and service management teams.",
      },
      {
        stat: "",
        title: "Comprehensive Insights",
        description: "Full-stack visibility from infrastructure to end-user experience in one platform.",
      },
    ],
    switchCta: {
      title: "Ready to Make the Switch?",
      description:
        "Join the growing number of enterprises choosing Motadata over ManageEngine for their IT operations.",
    },
  },
  {
    slug: "motadata-vs-solarwinds",
    tag: "Legacy Platforms",
    competitor: "SolarWinds",
    title: "Motadata vs SolarWinds",
    subtitle:
      "Compare modern cloud-native architecture against legacy monitoring tools. Discover why enterprises choose Motadata for faster deployment and better scalability.",
    altTitle: "The Modern Alternative to SolarWinds",
    altBody: [
      "SolarWinds has long been a staple of network monitoring, but its legacy architecture and complex licensing make it increasingly difficult to scale in modern cloud environments. Motadata delivers a unified, cloud-native platform built for today's hybrid infrastructure.",
      "With AI-powered insights and a single pane of glass across your entire IT environment, Motadata helps you move beyond the limitations of legacy tools and into a new era of intelligent IT operations.",
    ],
    aiopsCta: "Try It Today",
    aiopsFeatures: [
      {
        title: "Built as a unified observability across network, server, and cloud",
        description:
          "Motadata AIOps is a unified observability cloud that seamlessly covers network, server, and cloud landscapes, giving you complete visibility across your entire infrastructure.",
      },
      {
        title: "AI ready across data sources",
        description:
          "Motadata's AI-powered platform gathers intel from metrics, logs, and traffic to spot anomalies before they become major issues, unlike SolarWinds' rule-based alerting.",
      },
      {
        title: "Motadata uses propriety data store",
        description:
          "Motadata utilizes MotaStore, a proprietary high-performance data lake that ensures rapid data ingestion from hybrid infrastructures with complete data control.",
      },
      {
        title: "MotaStore is built to process high-cardinality data",
        description:
          "Unlike SolarWinds which struggles with scale, MotaStore effortlessly processes high-cardinality data from diverse sources across your entire infrastructure.",
      },
      {
        title: "Motadata is easy to self host and gives single pane of glass",
        description:
          "Motadata provides a single backend for comprehensive observability, replacing SolarWinds' complex multi-console management with one intuitive platform.",
      },
    ],
    tableTitle: "Motadata vs SolarWinds: The Ultimate Comparison",
    tableRows: [
      { feature: "Datastores", motadata: "Single", competitor: "Multiple" },
      { feature: "Agent", motadata: "One", competitor: "Multiple" },
      { feature: "Context", motadata: "Built-in", competitor: "Humans" },
      { feature: "Pricing", motadata: "Usage-based", competitor: "Per-node" },
      { feature: "Retention", motadata: "1 Years +", competitor: "Limited" },
      {
        feature: "Analytics on high cardinality data",
        motadata: "In seconds",
        competitor: "Not optimized",
      },
    ],
    featureTabs: [
      {
        label: "Platform Capabilities",
        rows: [
          { feature: "Unified Observability + ServiceOps", motadata: true, competitor: false },
          { feature: "AI-Native Architecture", motadata: true, competitor: false },
          { feature: "Network Monitoring", motadata: true, competitor: true },
          { feature: "Application Performance Monitoring", motadata: true, competitor: true },
          { feature: "Service Desk", motadata: true, competitor: false },
          { feature: "Asset Management", motadata: true, competitor: true },
          { feature: "Log Monitoring", motadata: true, competitor: true },
          { feature: "Cloud Infrastructure Monitoring", motadata: true, competitor: false },
        ],
      },
      {
        label: "AI & Automation",
        rows: [
          { feature: "AI-Powered Root Cause Analysis", motadata: true, competitor: false },
          { feature: "Predictive Analytics", motadata: true, competitor: false },
          { feature: "Intelligent Alerting", motadata: true, competitor: true },
          { feature: "Auto-Remediation", motadata: true, competitor: false },
          { feature: "AI Agent for IT Operations", motadata: true, competitor: false },
        ],
      },
      {
        label: "Deployment & Integration",
        rows: [
          { feature: "Cloud-Native Architecture", motadata: true, competitor: false },
          { feature: "On-Premise Deployment", motadata: true, competitor: true },
          { feature: "Hybrid Cloud Support", motadata: true, competitor: true },
          { feature: "500+ Integrations", motadata: true, competitor: true },
          { feature: "OpenTelemetry Support", motadata: true, competitor: false },
        ],
      },
      {
        label: "User Experience",
        rows: [
          { feature: "Modern, Intuitive UI", motadata: true, competitor: false },
          { feature: "Single Pane of Glass", motadata: true, competitor: false },
          { feature: "Customizable Dashboards", motadata: true, competitor: true },
          { feature: "Mobile App", motadata: true, competitor: true },
          { feature: "Role-Based Access Control", motadata: true, competitor: true },
        ],
      },
    ],
    stats: [
      { value: "70%", label: "Faster Deployment" },
      { value: "50%", label: "Reduction in MTTR" },
      { value: "1", label: "Unified Platform" },
      { value: "500+", label: "Integrations" },
    ],
    keyDifferentiators: [
      {
        title: "Cloud-Native Architecture",
        description:
          "Motadata is built for modern hybrid environments from day one. SolarWinds' legacy on-premise architecture struggles to adapt to cloud-first infrastructure.",
      },
      {
        title: "AI-Powered Operations",
        description:
          "Motadata's AI engine automatically detects anomalies and suggests remediation. SolarWinds relies on manual threshold-based rules that generate alert fatigue.",
      },
      {
        title: "Unified Observability",
        description:
          "One platform for network, server, cloud, and service management. SolarWinds requires multiple separate products to achieve the same coverage.",
      },
      {
        title: "Predictable Pricing",
        description:
          "Simple usage-based pricing scales with your needs. SolarWinds' per-node licensing becomes expensive as infrastructure grows.",
      },
    ],
    whyChoose: [
      {
        stat: "70%",
        title: "Faster Deployment",
        description: "Get up and running in days, not months, with our streamlined onboarding process.",
      },
      {
        stat: "50%",
        title: "Reduction in MTTR",
        description: "AI-powered insights help teams resolve incidents faster and prevent future issues.",
      },
      {
        stat: "",
        title: "Eliminate Tool Sprawl",
        description: "Replace multiple SolarWinds products with a single unified Motadata platform.",
      },
      {
        stat: "",
        title: "Full-Stack Visibility",
        description: "Monitor everything from network devices to end-user experience in one place.",
      },
    ],
    switchCta: {
      title: "Ready to Make the Switch?",
      description:
        "Join the growing number of enterprises choosing Motadata over SolarWinds for their IT operations.",
    },
  },
  {
    slug: "motadata-vs-whatsup-gold",
    tag: "Network Monitoring",
    competitor: "WhatsUp Gold",
    title: "Motadata vs WhatsUp Gold",
    subtitle:
      "Discover why enterprises choose Motadata for comprehensive IT operations management with full-stack observability and advanced automation capabilities.",
    altTitle: "The Modern Alternative to WhatsUp Gold",
    altBody: [
      "WhatsUp Gold is a capable network monitoring tool, but it falls short when enterprises need full-stack observability that spans applications, infrastructure, and service operations. Motadata delivers a comprehensive platform that goes far beyond basic network monitoring.",
      "With AI-native capabilities and a unified architecture, Motadata empowers IT teams to move from reactive monitoring to proactive operations—something WhatsUp Gold's limited scope cannot provide.",
    ],
    aiopsCta: "Try It Today",
    aiopsFeatures: [
      {
        title: "Built as a unified observability across network, server, and cloud",
        description:
          "Unlike WhatsUp Gold's network-centric focus, Motadata AIOps covers network, server, and cloud landscapes for complete unified observability.",
      },
      {
        title: "AI ready across data sources",
        description:
          "Motadata's AI ingests metrics, logs, and traffic to spot anomalies automatically—going far beyond WhatsUp Gold's threshold-based alerting.",
      },
      {
        title: "Motadata uses propriety data store",
        description:
          "MotaStore delivers complete data control with AI-powered analytics across diverse sources, providing depth that WhatsUp Gold simply cannot match.",
      },
      {
        title: "MotaStore is built to process high-cardinality data",
        description:
          "MotaStore handles complex, high-cardinality data at enterprise scale, making it ideal for large organizations that have outgrown WhatsUp Gold.",
      },
      {
        title: "Motadata is easy to self host and gives single pane of glass",
        description:
          "Motadata consolidates all IT operations in one platform, replacing the need for WhatsUp Gold plus multiple other tools to get full coverage.",
      },
    ],
    tableTitle: "Motadata vs WhatsUp Gold: The Ultimate Comparison",
    tableRows: [
      { feature: "Datastores", motadata: "Single", competitor: "Multiple" },
      { feature: "Agent", motadata: "One", competitor: "Multiple" },
      { feature: "Context", motadata: "Built-in", competitor: "Humans" },
      { feature: "Pricing", motadata: "Usage-based", competitor: "Per-device" },
      { feature: "Retention", motadata: "1 Years +", competitor: "Limited" },
      {
        feature: "Analytics on high cardinality data",
        motadata: "In seconds",
        competitor: "Not supported",
      },
    ],
    featureTabs: [
      {
        label: "Platform Capabilities",
        rows: [
          { feature: "Unified Observability + ServiceOps", motadata: true, competitor: false },
          { feature: "AI-Native Architecture", motadata: true, competitor: false },
          { feature: "Network Monitoring", motadata: true, competitor: true },
          { feature: "Application Performance Monitoring", motadata: true, competitor: false },
          { feature: "Service Desk", motadata: true, competitor: false },
          { feature: "Asset Management", motadata: true, competitor: false },
          { feature: "Log Monitoring", motadata: true, competitor: false },
          { feature: "Cloud Infrastructure Monitoring", motadata: true, competitor: false },
        ],
      },
      {
        label: "AI & Automation",
        rows: [
          { feature: "AI-Powered Root Cause Analysis", motadata: true, competitor: false },
          { feature: "Predictive Analytics", motadata: true, competitor: false },
          { feature: "Intelligent Alerting", motadata: true, competitor: true },
          { feature: "Auto-Remediation", motadata: true, competitor: false },
          { feature: "AI Agent for IT Operations", motadata: true, competitor: false },
        ],
      },
      {
        label: "Deployment & Integration",
        rows: [
          { feature: "Cloud-Native Architecture", motadata: true, competitor: false },
          { feature: "On-Premise Deployment", motadata: true, competitor: true },
          { feature: "Hybrid Cloud Support", motadata: true, competitor: false },
          { feature: "500+ Integrations", motadata: true, competitor: false },
          { feature: "OpenTelemetry Support", motadata: true, competitor: false },
        ],
      },
      {
        label: "User Experience",
        rows: [
          { feature: "Modern, Intuitive UI", motadata: true, competitor: false },
          { feature: "Single Pane of Glass", motadata: true, competitor: false },
          { feature: "Customizable Dashboards", motadata: true, competitor: true },
          { feature: "Mobile App", motadata: true, competitor: true },
          { feature: "Role-Based Access Control", motadata: true, competitor: true },
        ],
      },
    ],
    stats: [
      { value: "70%", label: "Faster Deployment" },
      { value: "50%", label: "Reduction in MTTR" },
      { value: "1", label: "Unified Platform" },
      { value: "500+", label: "Integrations" },
    ],
    keyDifferentiators: [
      {
        title: "Full-Stack Coverage",
        description:
          "Motadata covers network, server, cloud, and service desk in one platform. WhatsUp Gold is focused on network monitoring and requires additional tools for full coverage.",
      },
      {
        title: "AI-Native Automation",
        description:
          "Motadata's AI automatically identifies root causes and triggers remediation. WhatsUp Gold's threshold-based alerting requires manual investigation and response.",
      },
      {
        title: "Integrated Service Operations",
        description:
          "Built-in ITSM eliminates the need for separate service desk software. WhatsUp Gold has no native service operations capability.",
      },
      {
        title: "Enterprise Scalability",
        description:
          "Motadata scales from SMB to large enterprise with consistent performance. WhatsUp Gold's architecture shows limitations in large, complex environments.",
      },
    ],
    whyChoose: [
      {
        stat: "70%",
        title: "Faster Deployment",
        description: "Get up and running in days, not months, with our streamlined onboarding process.",
      },
      {
        stat: "50%",
        title: "Reduction in MTTR",
        description: "AI-powered insights help teams resolve incidents faster and prevent future issues.",
      },
      {
        stat: "",
        title: "Beyond Network Monitoring",
        description: "Extend visibility from network devices to applications, cloud, and service operations.",
      },
      {
        stat: "",
        title: "Fewer Tools to Manage",
        description: "Replace WhatsUp Gold plus separate tools with one unified platform.",
      },
    ],
    switchCta: {
      title: "Ready to Make the Switch?",
      description:
        "Join the growing number of enterprises choosing Motadata over WhatsUp Gold for their IT operations.",
    },
  },
  {
    slug: "motadata-vs-datadog",
    tag: "Cloud Monitoring",
    competitor: "Datadog",
    title: "Motadata vs Datadog",
    subtitle:
      "Compare cost-effective observability with enterprise-grade features against premium-priced alternatives. Better value with flexible deployment options.",
    altTitle: "The Cost-Effective Alternative to Datadog",
    altBody: [
      "Datadog is a powerful observability platform, but its pricing model can result in unpredictable costs that spiral as your infrastructure grows. Motadata delivers enterprise-grade observability with transparent, usage-based pricing that scales predictably.",
      "With on-premise and hybrid deployment options, Motadata gives enterprises the flexibility and data sovereignty that Datadog's SaaS-only model cannot provide—at a fraction of the cost.",
    ],
    aiopsCta: "Try It Today",
    aiopsFeatures: [
      {
        title: "Built as a unified observability across network, server, and cloud",
        description:
          "Motadata AIOps provides complete unified observability across network, server, and cloud at a predictable cost—unlike Datadog's usage-based billing that can surprise you.",
      },
      {
        title: "AI ready across data sources",
        description:
          "Motadata's AI platform provides intelligent anomaly detection across all data sources with transparent pricing, versus Datadog's add-on AI features that increase costs.",
      },
      {
        title: "Motadata uses propriety data store",
        description:
          "MotaStore keeps your data on-premise or in your cloud, giving you full data sovereignty—a critical advantage over Datadog's centralized cloud-only storage.",
      },
      {
        title: "MotaStore is built to process high-cardinality data",
        description:
          "Process high-cardinality data without the per-metric pricing shock. MotaStore handles unlimited custom metrics at a fixed cost.",
      },
      {
        title: "Motadata is easy to self host and gives single pane of glass",
        description:
          "Deploy on your own infrastructure for complete control and compliance, with a single unified console—eliminating Datadog's multi-product complexity.",
      },
    ],
    tableTitle: "Motadata vs Datadog: The Ultimate Comparison",
    tableRows: [
      { feature: "Datastores", motadata: "Single", competitor: "Multiple" },
      { feature: "Agent", motadata: "One", competitor: "Multiple" },
      { feature: "Context", motadata: "Built-in", competitor: "Humans" },
      { feature: "Pricing", motadata: "Usage-based", competitor: "Per-host + per-metric" },
      { feature: "Retention", motadata: "1 Years +", competitor: "15 months (paid)" },
      {
        feature: "Analytics on high cardinality data",
        motadata: "In seconds",
        competitor: "Limited by cost",
      },
    ],
    featureTabs: [
      {
        label: "Platform Capabilities",
        rows: [
          { feature: "Unified Observability + ServiceOps", motadata: true, competitor: false },
          { feature: "AI-Native Architecture", motadata: true, competitor: true },
          { feature: "Network Monitoring", motadata: true, competitor: true },
          { feature: "Application Performance Monitoring", motadata: true, competitor: true },
          { feature: "Service Desk", motadata: true, competitor: false },
          { feature: "Asset Management", motadata: true, competitor: false },
          { feature: "Log Monitoring", motadata: true, competitor: true },
          { feature: "On-Premise Deployment", motadata: true, competitor: false },
        ],
      },
      {
        label: "AI & Automation",
        rows: [
          { feature: "AI-Powered Root Cause Analysis", motadata: true, competitor: true },
          { feature: "Predictive Analytics", motadata: true, competitor: true },
          { feature: "Intelligent Alerting", motadata: true, competitor: true },
          { feature: "Auto-Remediation", motadata: true, competitor: false },
          { feature: "AI Agent for IT Operations", motadata: true, competitor: false },
        ],
      },
      {
        label: "Deployment & Integration",
        rows: [
          { feature: "Cloud-Native Architecture", motadata: true, competitor: true },
          { feature: "On-Premise Deployment", motadata: true, competitor: false },
          { feature: "Hybrid Cloud Support", motadata: true, competitor: true },
          { feature: "500+ Integrations", motadata: true, competitor: true },
          { feature: "OpenTelemetry Support", motadata: true, competitor: true },
        ],
      },
      {
        label: "User Experience",
        rows: [
          { feature: "Modern, Intuitive UI", motadata: true, competitor: true },
          { feature: "Single Pane of Glass", motadata: true, competitor: false },
          { feature: "Customizable Dashboards", motadata: true, competitor: true },
          { feature: "Mobile App", motadata: true, competitor: true },
          { feature: "Predictable Pricing", motadata: true, competitor: false },
        ],
      },
    ],
    stats: [
      { value: "60%", label: "Cost Reduction" },
      { value: "50%", label: "Reduction in MTTR" },
      { value: "1", label: "Unified Platform" },
      { value: "500+", label: "Integrations" },
    ],
    keyDifferentiators: [
      {
        title: "Data Sovereignty",
        description:
          "Motadata supports on-premise and hybrid deployments, giving you full control over your data. Datadog's SaaS-only model means your data lives in their cloud.",
      },
      {
        title: "Predictable Costs",
        description:
          "Motadata's usage-based pricing scales transparently. Datadog's per-host and per-custom-metric billing can result in bill shock as infrastructure scales.",
      },
      {
        title: "Integrated ITSM",
        description:
          "Built-in service desk and asset management eliminate the need for separate tools. Datadog focuses on observability only and requires additional ITSM platforms.",
      },
      {
        title: "No Ingest Tax",
        description:
          "Send all your logs and metrics without worrying about ingest costs. Datadog charges per GB ingested, discouraging comprehensive data collection.",
      },
    ],
    whyChoose: [
      {
        stat: "60%",
        title: "Cost Reduction",
        description: "Cut monitoring costs significantly by replacing Datadog with Motadata's transparent pricing.",
      },
      {
        stat: "50%",
        title: "Reduction in MTTR",
        description: "AI-powered insights help teams resolve incidents faster and prevent future issues.",
      },
      {
        stat: "",
        title: "Full Data Control",
        description: "Deploy on-premise or hybrid to maintain data sovereignty and compliance.",
      },
      {
        stat: "",
        title: "Unified Platform",
        description: "Combine observability and service management in one platform instead of multiple tools.",
      },
    ],
    switchCta: {
      title: "Ready to Make the Switch?",
      description:
        "Join the growing number of enterprises choosing Motadata over Datadog for their IT operations.",
    },
  },
  {
    slug: "motadata-vs-dynatrace",
    tag: "APM Solutions",
    competitor: "Dynatrace",
    title: "Motadata vs Dynatrace",
    subtitle:
      "Enterprise observability with predictable pricing and flexible deployment options. See how Motadata delivers better TCO and comprehensive ITSM integration.",
    altTitle: "The Modern Alternative to Dynatrace",
    altBody: [
      "Dynatrace is a powerful APM solution, but its premium pricing and complex licensing make it inaccessible for many enterprises. Motadata delivers comparable observability capabilities with transparent pricing and the added advantage of built-in ITSM.",
      "Unlike Dynatrace's separate product modules, Motadata unifies observability and service operations in a single platform—reducing total cost of ownership while delivering better operational outcomes.",
    ],
    aiopsCta: "Try It Today",
    aiopsFeatures: [
      {
        title: "Built as a unified observability across network, server, and cloud",
        description:
          "Motadata provides comprehensive observability across your entire infrastructure at a predictable cost, without Dynatrace's module-by-module pricing.",
      },
      {
        title: "AI ready across data sources",
        description:
          "Motadata's Davis-inspired AI detects anomalies across all data sources with built-in intelligence, included at no extra cost unlike Dynatrace's premium AI features.",
      },
      {
        title: "Motadata uses propriety data store",
        description:
          "MotaStore provides full data sovereignty with on-premise or hybrid deployment—critical for regulated industries that cannot use Dynatrace's cloud-only offering.",
      },
      {
        title: "MotaStore is built to process high-cardinality data",
        description:
          "Process high-cardinality metrics and traces at scale without per-DEM-unit pricing. MotaStore handles unlimited entities at a fixed operational cost.",
      },
      {
        title: "Motadata is easy to self host and gives single pane of glass",
        description:
          "One platform for observability and ITSM, self-hosted on your infrastructure—eliminating the need for separate Dynatrace and ServiceNow licenses.",
      },
    ],
    tableTitle: "Motadata vs Dynatrace: The Ultimate Comparison",
    tableRows: [
      { feature: "Datastores", motadata: "Single", competitor: "Multiple" },
      { feature: "Agent", motadata: "One", competitor: "OneAgent (costly)" },
      { feature: "Context", motadata: "Built-in", competitor: "Davis AI (premium)" },
      { feature: "Pricing", motadata: "Usage-based", competitor: "DEM unit-based" },
      { feature: "Retention", motadata: "1 Years +", competitor: "35 days default" },
      {
        feature: "Analytics on high cardinality data",
        motadata: "In seconds",
        competitor: "Limited retention",
      },
    ],
    featureTabs: [
      {
        label: "Platform Capabilities",
        rows: [
          { feature: "Unified Observability + ServiceOps", motadata: true, competitor: false },
          { feature: "AI-Native Architecture", motadata: true, competitor: true },
          { feature: "Network Monitoring", motadata: true, competitor: true },
          { feature: "Application Performance Monitoring", motadata: true, competitor: true },
          { feature: "Service Desk", motadata: true, competitor: false },
          { feature: "Asset Management", motadata: true, competitor: false },
          { feature: "Log Monitoring", motadata: true, competitor: true },
          { feature: "On-Premise Deployment", motadata: true, competitor: false },
        ],
      },
      {
        label: "AI & Automation",
        rows: [
          { feature: "AI-Powered Root Cause Analysis", motadata: true, competitor: true },
          { feature: "Predictive Analytics", motadata: true, competitor: true },
          { feature: "Intelligent Alerting", motadata: true, competitor: true },
          { feature: "Auto-Remediation", motadata: true, competitor: true },
          { feature: "AI Agent for IT Operations", motadata: true, competitor: false },
        ],
      },
      {
        label: "Deployment & Integration",
        rows: [
          { feature: "Cloud-Native Architecture", motadata: true, competitor: true },
          { feature: "On-Premise Deployment", motadata: true, competitor: false },
          { feature: "Hybrid Cloud Support", motadata: true, competitor: true },
          { feature: "500+ Integrations", motadata: true, competitor: true },
          { feature: "OpenTelemetry Support", motadata: true, competitor: true },
        ],
      },
      {
        label: "User Experience",
        rows: [
          { feature: "Modern, Intuitive UI", motadata: true, competitor: true },
          { feature: "Single Pane of Glass", motadata: true, competitor: false },
          { feature: "Customizable Dashboards", motadata: true, competitor: true },
          { feature: "Mobile App", motadata: true, competitor: true },
          { feature: "Predictable Pricing", motadata: true, competitor: false },
        ],
      },
    ],
    stats: [
      { value: "65%", label: "Lower TCO" },
      { value: "50%", label: "Reduction in MTTR" },
      { value: "1", label: "Unified Platform" },
      { value: "500+", label: "Integrations" },
    ],
    keyDifferentiators: [
      {
        title: "Better TCO",
        description:
          "Motadata delivers comparable APM capabilities at a fraction of the cost. Dynatrace's DEM unit-based pricing and premium AI add-ons drive up total cost of ownership significantly.",
      },
      {
        title: "On-Premise Deployment",
        description:
          "Motadata supports full on-premise deployment for regulated industries. Dynatrace's managed offering has limitations and adds significant cost for private cloud deployments.",
      },
      {
        title: "Built-in ITSM",
        description:
          "Motadata includes service desk and asset management out of the box. Dynatrace focuses solely on observability, requiring separate ITSM tools at additional cost.",
      },
      {
        title: "Transparent AI Pricing",
        description:
          "Motadata's AI capabilities are included in the base platform. Dynatrace's Davis AI is a premium feature with additional licensing costs.",
      },
    ],
    whyChoose: [
      {
        stat: "65%",
        title: "Lower TCO",
        description: "Significantly reduce total cost of ownership compared to Dynatrace's premium pricing.",
      },
      {
        stat: "50%",
        title: "Reduction in MTTR",
        description: "AI-powered insights help teams resolve incidents faster and prevent future issues.",
      },
      {
        stat: "",
        title: "Compliance Ready",
        description: "On-premise deployment options meet strict data residency and compliance requirements.",
      },
      {
        stat: "",
        title: "Unified Operations",
        description: "Replace Dynatrace plus your service desk with a single integrated platform.",
      },
    ],
    switchCta: {
      title: "Ready to Make the Switch?",
      description:
        "Join the growing number of enterprises choosing Motadata over Dynatrace for their IT operations.",
    },
  },
  {
    slug: "motadata-vs-new-relic",
    tag: "Cloud Native",
    competitor: "New Relic",
    title: "Motadata vs New Relic",
    subtitle:
      "Full-stack observability with better pricing and broader monitoring capabilities. Unified AIOps + ServiceOps platform with better cost per monitored entity.",
    altTitle: "The Modern Alternative to New Relic",
    altBody: [
      "New Relic offers broad observability capabilities but its per-user and data ingest pricing model can create unpredictable costs as teams and data volumes grow. Motadata delivers equivalent observability with transparent, predictable pricing.",
      "With built-in ITSM capabilities and flexible deployment options including on-premise, Motadata provides a more complete and cost-effective solution for enterprises looking to consolidate their monitoring and service management toolstack.",
    ],
    aiopsCta: "Try It Today",
    aiopsFeatures: [
      {
        title: "Built as a unified observability across network, server, and cloud",
        description:
          "Motadata provides complete observability across network, server, and cloud—without New Relic's separate pricing tiers for different data types.",
      },
      {
        title: "AI ready across data sources",
        description:
          "Motadata's AI intelligence is included across all data sources at no extra cost, unlike New Relic's Applied Intelligence add-on pricing.",
      },
      {
        title: "Motadata uses propriety data store",
        description:
          "MotaStore provides full data sovereignty with on-premise deployment options, giving regulated enterprises control that New Relic's cloud model cannot provide.",
      },
      {
        title: "MotaStore is built to process high-cardinality data",
        description:
          "Process high-cardinality data without worrying about ingest costs. MotaStore handles all your data at a predictable fixed cost.",
      },
      {
        title: "Motadata is easy to self host and gives single pane of glass",
        description:
          "One platform for full-stack observability and ITSM, with flexible self-hosting options—replacing both New Relic and your service desk with a single solution.",
      },
    ],
    tableTitle: "Motadata vs New Relic: The Ultimate Comparison",
    tableRows: [
      { feature: "Datastores", motadata: "Single", competitor: "Multiple" },
      { feature: "Agent", motadata: "One", competitor: "Multiple" },
      { feature: "Context", motadata: "Built-in", competitor: "Humans" },
      { feature: "Pricing", motadata: "Usage-based", competitor: "Per-user + ingest" },
      { feature: "Retention", motadata: "1 Years +", competitor: "8 days (free tier)" },
      {
        feature: "Analytics on high cardinality data",
        motadata: "In seconds",
        competitor: "Limited by ingest cost",
      },
    ],
    featureTabs: [
      {
        label: "Platform Capabilities",
        rows: [
          { feature: "Unified Observability + ServiceOps", motadata: true, competitor: false },
          { feature: "AI-Native Architecture", motadata: true, competitor: true },
          { feature: "Network Monitoring", motadata: true, competitor: true },
          { feature: "Application Performance Monitoring", motadata: true, competitor: true },
          { feature: "Service Desk", motadata: true, competitor: false },
          { feature: "Asset Management", motadata: true, competitor: false },
          { feature: "Log Monitoring", motadata: true, competitor: true },
          { feature: "On-Premise Deployment", motadata: true, competitor: false },
        ],
      },
      {
        label: "AI & Automation",
        rows: [
          { feature: "AI-Powered Root Cause Analysis", motadata: true, competitor: true },
          { feature: "Predictive Analytics", motadata: true, competitor: true },
          { feature: "Intelligent Alerting", motadata: true, competitor: true },
          { feature: "Auto-Remediation", motadata: true, competitor: false },
          { feature: "AI Agent for IT Operations", motadata: true, competitor: false },
        ],
      },
      {
        label: "Deployment & Integration",
        rows: [
          { feature: "Cloud-Native Architecture", motadata: true, competitor: true },
          { feature: "On-Premise Deployment", motadata: true, competitor: false },
          { feature: "Hybrid Cloud Support", motadata: true, competitor: true },
          { feature: "500+ Integrations", motadata: true, competitor: true },
          { feature: "OpenTelemetry Support", motadata: true, competitor: true },
        ],
      },
      {
        label: "User Experience",
        rows: [
          { feature: "Modern, Intuitive UI", motadata: true, competitor: true },
          { feature: "Single Pane of Glass", motadata: true, competitor: false },
          { feature: "Customizable Dashboards", motadata: true, competitor: true },
          { feature: "Mobile App", motadata: true, competitor: true },
          { feature: "Predictable Pricing", motadata: true, competitor: false },
        ],
      },
    ],
    stats: [
      { value: "60%", label: "Cost Reduction" },
      { value: "50%", label: "Reduction in MTTR" },
      { value: "1", label: "Unified Platform" },
      { value: "500+", label: "Integrations" },
    ],
    keyDifferentiators: [
      {
        title: "No Ingest Billing",
        description:
          "Motadata uses predictable usage-based pricing with no per-GB ingest charges. New Relic's data ingest model penalises teams for collecting comprehensive telemetry.",
      },
      {
        title: "On-Premise & Hybrid Deployment",
        description:
          "Motadata offers flexible deployment including on-premise for data-sensitive organisations. New Relic is SaaS-only with no self-hosted option.",
      },
      {
        title: "Integrated Service Operations",
        description:
          "Motadata's built-in ITSM means one vendor for observability and service management. New Relic requires separate tooling for incident and change management.",
      },
      {
        title: "Unified Single Agent",
        description:
          "One lightweight agent covers all monitoring needs. New Relic's multiple agents for different signal types add complexity and overhead to deployments.",
      },
    ],
    whyChoose: [
      {
        stat: "60%",
        title: "Cost Reduction",
        description: "Cut monitoring spend by replacing New Relic's ingest-based billing with Motadata's transparent pricing.",
      },
      {
        stat: "50%",
        title: "Reduction in MTTR",
        description: "AI-powered insights help teams resolve incidents faster and prevent future issues.",
      },
      {
        stat: "",
        title: "Full Data Control",
        description: "Deploy on-premise or hybrid to maintain data sovereignty and meet compliance requirements.",
      },
      {
        stat: "",
        title: "One Platform for All",
        description: "Consolidate observability and ITSM into a single platform, reducing vendor complexity.",
      },
    ],
    switchCta: {
      title: "Ready to Make the Switch?",
      description:
        "Join the growing number of enterprises choosing Motadata over New Relic for their IT operations.",
    },
  },
];

export function getComparison(slug: string): ComparisonData | undefined {
  return comparisons.find((c) => c.slug === slug);
}
