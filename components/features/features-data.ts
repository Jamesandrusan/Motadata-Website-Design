import {
  Network, AlertTriangle, Activity, Gauge, ShieldCheck, BarChart3, CheckCircle2,
  Server, Clock, BrainCircuit, Bell, Eye, Map, GitBranch, LayoutTemplate,
  FileText, CalendarClock, TrendingUp, Search, Box, Cpu, Database, HardDrive, Tag, Sparkles,
  Terminal, FileSearch, Filter, Radio, Compass, Flame, Code, Workflow, FolderSync, Users,
  Headset, Zap, MessageSquare, Globe, BookOpen, Mail, Smartphone, PieChart,
  Package, Layers, Monitor, Key, Barcode, Link2, ClipboardList, Webhook, MapPin, Ban, Truck, LocateFixed,
  RefreshCw, TestTube, Undo2, Stethoscope, Settings, type LucideIcon,
} from "lucide-react";

export type ProductSwitch = "observeops" | "serviceops";

export interface Feature {
  slug: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  category: string;
  product: ProductSwitch;
}

export interface FeatureCategory {
  name: string;
  product: ProductSwitch;
  count: number;
}

/* ══════════════════════════════════════
   ObserveOps Features
   ══════════════════════════════════════ */

const networkObservability: Feature[] = [
  { slug: "end-to-end-layer-topology", title: "End to End Layer Topology", desc: "Get detailed visibility across your network with topology mapping. The holistic topology builds a robust and healthy network.", icon: Network, category: "Network Observability", product: "observeops" },
  { slug: "alerts-for-loss-of-availability", title: "Alerts for Loss of Availability", desc: "Don't miss out on any failures or losses. Stay alerted about the network's health and availability all the time.", icon: AlertTriangle, category: "Network Observability", product: "observeops" },
  { slug: "network-flow-traffic-analysis", title: "Network Flow Traffic Analysis", desc: "Monitor the transmitted and moving data across the network at any given time with Net-flow, SFlow, and IPFIX.", icon: Activity, category: "Network Observability", product: "observeops" },
  { slug: "network-performance-monitoring", title: "Network Performance Monitoring", desc: "Keep an eye on the entire network and ensure uninterrupted network performance.", icon: Gauge, category: "Network Observability", product: "observeops" },
  { slug: "vpn-monitoring", title: "Virtual Private Network Monitoring (IPsec/SSL)", desc: "Trace the connections, applications, and tunnels to ensure a secure private network and encrypted data transmission.", icon: ShieldCheck, category: "Network Observability", product: "observeops" },
  { slug: "metric-drilldowns", title: "Metric Drilldowns", desc: "Get granular metric details like CPU and memory usage, average, comparison with historical data points, and much more.", icon: BarChart3, category: "Network Observability", product: "observeops" },
  { slug: "service-checks", title: "Service Checks", desc: "Ensure the service's availability at any point of time. Get alerted whenever the specific services are down.", icon: CheckCircle2, category: "Network Observability", product: "observeops" },
];

const infrastructureMonitoring: Feature[] = [
  { slug: "broad-monitoring-coverage", title: "Broad Monitoring Coverage", desc: "Enhance the monitoring coverage with end-to-end performance capabilities across your hybrid infrastructure.", icon: Server, category: "Infrastructure Monitoring", product: "observeops" },
  { slug: "mttr-reduction", title: "Mean Time To Resolution (MTTR) Reduction", desc: "Troubleshoot hundreds of log parsing applications and reduce Mean Time To Resolution (MTTR) which helps you get operational visibility across your all applications.", icon: Clock, category: "Infrastructure Monitoring", product: "observeops" },
  { slug: "intelligent-alerting", title: "Intelligent Alerting", desc: "An advanced AI-driven alert system that notifies you what matters and detects anomalies to save you from inevitable failures.", icon: BrainCircuit, category: "Infrastructure Monitoring", product: "observeops" },
  { slug: "third-party-notifications", title: "Third-party Notifications", desc: "Get prioritized notifications for the subscribed third-party applications under one roof. Subscribe to the application and stay alerted.", icon: Bell, category: "Infrastructure Monitoring", product: "observeops" },
  { slug: "360-degree-visibility", title: "Complete 360-degree Visibility", desc: "Obtain crystal clear visibility across your network and monitor the metrics that matter for you with comprehensive 360-degree monitoring.", icon: Eye, category: "Infrastructure Monitoring", product: "observeops" },
  { slug: "topology-maps", title: "Topology Maps", desc: "Get a detailed, real-time mapping of your topology model across your network - powerful, insightful, visual topology maps.", icon: Map, category: "Infrastructure Monitoring", product: "observeops" },
  { slug: "dependency-mapping", title: "Dependency Mapping", desc: "Stay informed about the application's dependency, the interconnection between applications, and how that impacts the overall performance and status of the infrastructure.", icon: GitBranch, category: "Infrastructure Monitoring", product: "observeops" },
  { slug: "monitoring-apps", title: "Monitoring Apps", desc: "Monitor applications with a pre-built template and ensure a smooth user experience with thousands of monitoring templates, so you do not miss anything.", icon: LayoutTemplate, category: "Infrastructure Monitoring", product: "observeops" },
  { slug: "scheduled-reports", title: "Scheduled Reports", desc: "Get Round-the-clock monitoring and pre-scheduled reports via mail to your inbox with no human intervention about events and failures taking place in your infrastructure.", icon: FileText, category: "Infrastructure Monitoring", product: "observeops" },
  { slug: "real-time-analytics", title: "Real-time Analytics", desc: "Stay informed about real-time data and powerful, actionable insights to ensure the network's availability and functioning operations.", icon: TrendingUp, category: "Infrastructure Monitoring", product: "observeops" },
  { slug: "scheduled-discovery", title: "Scheduled Discovery", desc: "The advanced auto-discovery jobs make it easy to discover the newly added network components with pre-defined rules.", icon: CalendarClock, category: "Infrastructure Monitoring", product: "observeops" },
  { slug: "top-n-lists", title: "Top N Lists", desc: "Get daily reports of top N lists of CPU usage, server traffic, network health, and more with simple configurations.", icon: BarChart3, category: "Infrastructure Monitoring", product: "observeops" },
  { slug: "real-time-monitoring-alerts", title: "Real-time Monitoring Alerts", desc: "Receive instant alerts for critical infrastructure events with intelligent thresholds and automated escalation to ensure rapid response.", icon: Bell, category: "Infrastructure Monitoring", product: "observeops" },
  { slug: "network-traffic-analysis", title: "Network Traffic Analysis", desc: "Analyze network traffic patterns, bandwidth utilization, and application performance with deep packet inspection and flow analysis.", icon: Activity, category: "Infrastructure Monitoring", product: "observeops" },
  { slug: "nutanix-monitoring", title: "Nutanix Monitoring Support", desc: "Monitor Nutanix hyperconverged infrastructure with specialized metrics for cluster health, VM performance, and storage efficiency.", icon: Box, category: "Infrastructure Monitoring", product: "observeops" },
  { slug: "cisco-ip-sla-monitoring", title: "Cisco IP SLA Monitoring", desc: "Track Cisco IP SLA performance metrics to ensure network reliability, measure latency, jitter, and packet loss across WAN connections.", icon: Cpu, category: "Infrastructure Monitoring", product: "observeops" },
  { slug: "cisco-aci-monitoring", title: "Cisco ACI Monitoring", desc: "Comprehensive monitoring for Cisco Application Centric Infrastructure with fabric health, endpoint tracking, and policy compliance.", icon: Database, category: "Infrastructure Monitoring", product: "observeops" },
  { slug: "storage-monitoring", title: "Storage Monitoring", desc: "Monitor storage systems including SAN, NAS, and cloud storage with capacity tracking, performance metrics, and predictive analytics.", icon: HardDrive, category: "Infrastructure Monitoring", product: "observeops" },
  { slug: "tag-management", title: "Tag Management", desc: "Organize and categorize infrastructure resources with flexible tagging for better resource management and automated workflows.", icon: Tag, category: "Infrastructure Monitoring", product: "observeops" },
  { slug: "anomaly-detection-predictive-analysis", title: "Anomaly Detection & Predictive Analysis", desc: "Leverage AI-powered anomaly detection to identify unusual patterns and predict potential issues before they impact your infrastructure.", icon: Sparkles, category: "Infrastructure Monitoring", product: "observeops" },
];

const logAnalytics: Feature[] = [
  { slug: "agent-agentless-collection", title: "Agent & Agentless Collection", desc: "Collect log events from target devices, servers and applications with the flexibility you need to effectively scale your logging.", icon: Terminal, category: "Log Analytics", product: "observeops" },
  { slug: "log-filtering", title: "Log Filtering", desc: "Find specific logs with keyword filtering, from a specific source or collector and troubleshoot the issues faster.", icon: Filter, category: "Log Analytics", product: "observeops" },
  { slug: "log-alerting", title: "Log Alerting", desc: "Stay alerted whenever a certain threshold is met in pre-defined logs and stay one step ahead.", icon: Bell, category: "Log Analytics", product: "observeops" },
  { slug: "log-live-tail", title: "Log Live Tail", desc: "The live tail supports filter capabilities to filter out the logs which are important to reduce the time for troubleshooting. It also supports keywords search to highlight with colour.", icon: Radio, category: "Log Analytics", product: "observeops" },
  { slug: "log-explorer", title: "Log Explorer", desc: "Get all of your logs centralized and visualize any type of log from any source in any format. A scalable log monitoring solution for rapid troubleshooting.", icon: Compass, category: "Log Analytics", product: "observeops" },
  { slug: "firewall-monitoring", title: "Firewall Monitoring", desc: "Track all the firewall monitoring metrics and achieve effective firewall performance. Discover security breaches and resolve the errors caused by internal users.", icon: Flame, category: "Log Analytics", product: "observeops" },
  { slug: "log-parsing-apps", title: "Log Parsing Apps", desc: "Analyze millions of log events using out-of-the-box log parsing applications, which helps you get operational visibility across your Infra.", icon: Code, category: "Log Analytics", product: "observeops" },
  { slug: "dynamic-log-parsers", title: "Dynamic Log Parsers", desc: "Use an automated powerful log parser with no manual parsing that improves efficiency and saves time and effort.", icon: FileSearch, category: "Log Analytics", product: "observeops" },
  { slug: "network-flow-explorer", title: "Network Flow Explorer", desc: "Get the posture of bandwidth utilization by monitoring the network traffic flowing from source to destination and vice versa.", icon: Search, category: "Log Analytics", product: "observeops" },
];

const networkAutomation: Feature[] = [
  { slug: "runbook-automation", title: "Runbook Automation", desc: "Make your automation one step ahead with python integration and Runbook remediation. Define, build, manage and generate workflow reports to smoothen up the network operations.", icon: Workflow, category: "Network Automation", product: "observeops" },
  { slug: "automated-processes", title: "Automated Processes", desc: "Turn your organization's routine and mundane tasks into automated practices. Optimize performance and save time and cost.", icon: Zap, category: "Network Automation", product: "observeops" },
  { slug: "configure-change-management", title: "Configure and Change Management", desc: "Stay up to date on configuration changes with alerts and view the changes made. Leverage role-based access for complete control on who can make changes to devices & configurations.", icon: FolderSync, category: "Network Automation", product: "observeops" },
  { slug: "ldap-integration", title: "LDAP Integration", desc: "Use your existing LDAP server as a master source for the instances, streamline user activities, and automate admin tasks.", icon: Users, category: "Network Automation", product: "observeops" },
];

const platformFeatures: Feature[] = [
  { slug: "anomaly-outlier-detection", title: "Anomaly/Outlier Detection", desc: "Discover the patterns that fall out of behaviour and data outlier with advanced configurations to resolve the elements that slow down the overall performance.", icon: Sparkles, category: "Platform Features", product: "observeops" },
  { slug: "single-dashboard-metrics-logs", title: "Single Dashboard for Metrics & Logs", desc: "Get one powerful unified dashboard for all the metrics, log events, streaming data, SNMP data and much more.", icon: LayoutTemplate, category: "Platform Features", product: "observeops" },
  { slug: "email-notifications", title: "Email Notifications", desc: "Stay up to date about infrastructure's activity, health, and status with email notifications. Stay alerted about failures and prioritized events.", icon: Mail, category: "Platform Features", product: "observeops" },
  { slug: "root-cause-analysis", title: "Root Cause Analysis", desc: "Discover performance bottlenecks to improve the overall user experience. Constant monitoring helps you find the root cause faster and resolve the failures.", icon: Search, category: "Platform Features", product: "observeops" },
  { slug: "forecasting", title: "Forecasting", desc: "With the algorithms of AI and ML, observe the patterns and behaviours and forecast the potential failures before they cause any damage.", icon: TrendingUp, category: "Platform Features", product: "observeops" },
  { slug: "continuous-service-delivery", title: "Continuous Service Delivery", desc: "Come what may happen, get 24*7 continuous service delivered and offer the same advanced and powerful services to your customers.", icon: RefreshCw, category: "Platform Features", product: "observeops" },
  { slug: "optimal-business-agility", title: "Optimal Business Agility", desc: "With advanced monitoring and IT operations, stand strong in the market amid competitors and excel the growth of your business.", icon: TrendingUp, category: "Platform Features", product: "observeops" },
  { slug: "asset-discovery-scan-management", title: "Asset Discovery Scan Management", desc: "The advanced auto-discovery facility makes it easy to discover and manage the assets.", icon: Search, category: "Platform Features", product: "observeops" },
  { slug: "identify-silos", title: "Identify Silos", desc: "Break silos and improve the overall performance of the application.", icon: Eye, category: "Platform Features", product: "observeops" },
  { slug: "correlation", title: "Correlation", desc: "Discover patterns, detect noise and establish logical connections between data.", icon: GitBranch, category: "Platform Features", product: "observeops" },
];

/* ══════════════════════════════════════
   ServiceOps Features
   ══════════════════════════════════════ */

const serviceDesk: Feature[] = [
  { slug: "auto-ticket-assignment", title: "Auto-ticket Assignment", desc: "Leverage in-built AI-based load balancing algorithm to automate ticket prioritization, categorization, and assignment to appropriate technicians.", icon: Zap, category: "Service Desk", product: "serviceops" },
  { slug: "slas-and-escalation", title: "SLAs and Escalation", desc: "Easily customize SLAs and deliver timely services and faster resolutions with automated SLA escalation.", icon: Clock, category: "Service Desk", product: "serviceops" },
  { slug: "multi-channel-support", title: "Multi-channel Support", desc: "Allow end-users to raise tickets via multiple channels like a support portal, chat, phone, email, mobile app, and even third-party apps.", icon: Globe, category: "Service Desk", product: "serviceops" },
  { slug: "self-service-portal", title: "Self-service Portal", desc: "Enable end-users to easily create requests, track ticket status and approvals, and find answers to common issues by themselves.", icon: BookOpen, category: "Service Desk", product: "serviceops" },
  { slug: "service-catalogs", title: "Service Catalogs", desc: "Present available services by creating service items from templates with custom workflows, SLAs, approvals, tasks, and scenarios.", icon: ClipboardList, category: "Service Desk", product: "serviceops" },
  { slug: "workflow-automation", title: "Workflow Automation", desc: "Streamline the resolution process with workflows based on certain criteria. Visualize multiple levels and actions through the drag-and-drop workflow designer.", icon: Workflow, category: "Service Desk", product: "serviceops" },
  { slug: "live-chat-channel", title: "Live Chat Channel", desc: "Enable end-users to get instant resolutions and facilitate better collaboration between support technicians with a live chat channel.", icon: MessageSquare, category: "Service Desk", product: "serviceops" },
  { slug: "email-to-ticket", title: "Email to Ticket", desc: "Automatically create tickets from emails using email command and assign the ticket to an appropriate technician.", icon: Mail, category: "Service Desk", product: "serviceops" },
  { slug: "smart-notifications", title: "Smart Notifications", desc: "Keep end-users, technicians, and key stakeholders in the loop about the entire ticket resolution process with custom notifications.", icon: Bell, category: "Service Desk", product: "serviceops" },
  { slug: "active-directory-support", title: "Active Directory Support", desc: "Create a network for Windows Active Directory to support password resets, account unlocks, and so on from the service desk portal.", icon: Users, category: "Service Desk", product: "serviceops" },
  { slug: "feedback", title: "Feedback", desc: "Track customer satisfaction index by easily capturing feedback for each resolved request.", icon: Headset, category: "Service Desk", product: "serviceops" },
  { slug: "integration", title: "Integration", desc: "Easily integrate the IT service desk with third-party applications to create and edit ticket requests using REST API.", icon: Link2, category: "Service Desk", product: "serviceops" },
  { slug: "mobile-app", title: "Mobile App", desc: "Resolve incidents and address service requests on the go with our native mobile app. Enable users to create and track tickets from anywhere, anytime.", icon: Smartphone, category: "Service Desk", product: "serviceops" },
  { slug: "reporting-dashboard", title: "Reporting & Dashboard", desc: "Obtain visibility into your service management processes with OOB reports and monitor service desk performance with a comprehensive dashboard.", icon: PieChart, category: "Service Desk", product: "serviceops" },
];

const assetManager: Feature[] = [
  { slug: "agent-agentless-discovery", title: "Agent & Agentless Discovery", desc: "Discover and import data for IT assets in your network automatically using versatile scanning methods.", icon: Search, category: "Asset Manager", product: "serviceops" },
  { slug: "software-management-metering", title: "Software Management & Metering", desc: "Automatically categorize software and get utilization information to plan software purchases and ensure compliance.", icon: Package, category: "Asset Manager", product: "serviceops" },
  { slug: "cmdb", title: "CMDB", desc: "Keep a comprehensive repository of all assets in the organization with CMDB. Get detailed visibility into how they are linked to one another.", icon: Layers, category: "Asset Manager", product: "serviceops" },
  { slug: "asset-baseline", title: "Asset Baseline", desc: "Define a set of attributes that all instances of the same asset type should have in order to back out after a change and restore to the original configuration.", icon: Settings, category: "Asset Manager", product: "serviceops" },
  { slug: "remote-desktop", title: "Remote Desktop", desc: "Connect to remote computers over both intranet and internet with support for chat, file transfer, and video call.", icon: Monitor, category: "Asset Manager", product: "serviceops" },
  { slug: "software-normalization", title: "Software Normalization", desc: "Create a comprehensive view of software used across multiple systems, offices, and networks based on conditional rules.", icon: FolderSync, category: "Asset Manager", product: "serviceops" },
  { slug: "advanced-search-for-assets", title: "Advanced Search for Assets", desc: "Leverage advanced search to perform complex queries using keywords and search options to find assets and asset information.", icon: Search, category: "Asset Manager", product: "serviceops" },
  { slug: "product-vendor-catalog", title: "Product and Vendor Catalog", desc: "Maintain a database of products from different vendors with price, warranty, and maintenance details.", icon: BookOpen, category: "Asset Manager", product: "serviceops" },
  { slug: "barcode-qr-code", title: "Barcode & QR Code Configuration", desc: "Generate barcode and QR code tags for efficient tracking of hardware assets to ensure good fault tolerance and fast scanning.", icon: Barcode, category: "Asset Manager", product: "serviceops" },
  { slug: "asset-association-ticket", title: "Asset Association with Ticket", desc: "Easily associate assets to incident, request, problem, or change tickets to get relevant information.", icon: Link2, category: "Asset Manager", product: "serviceops" },
  { slug: "audit-trail", title: "Audit Trail", desc: "Track changes made to an asset by scanning history logs using the audit trail.", icon: ClipboardList, category: "Asset Manager", product: "serviceops" },
  { slug: "asset-workflows", title: "Workflows", desc: "Automate CMDB property updates based on certain events with robust workflows.", icon: Workflow, category: "Asset Manager", product: "serviceops" },
  { slug: "inventory-reports", title: "Inventory Reports", desc: "Generate customizable, out-of-the-box reports to track asset inventory and key metrics like asset utilization.", icon: FileText, category: "Asset Manager", product: "serviceops" },
  { slug: "webhook", title: "Webhook", desc: "Trigger API calls using workflow automation with Webhook support to improve integration capability with other products.", icon: Webhook, category: "Asset Manager", product: "serviceops" },
  { slug: "relationship-mapping", title: "Relationship Mapping", desc: "Map and visualize dependencies among assets to perform impact analysis for change deployment or RCA for a problem.", icon: GitBranch, category: "Asset Manager", product: "serviceops" },
  { slug: "prohibited-software", title: "Prohibited Software", desc: "Mark certain software as prohibited during discovery based on rules. Automatically remove the prohibited software with the auto-uninstall feature.", icon: Ban, category: "Asset Manager", product: "serviceops" },
  { slug: "track-asset-movement", title: "Track Asset Movement", desc: "Track movements and set approvals for assets moving in and out of the premise, e.g., sending assets out for repair.", icon: Truck, category: "Asset Manager", product: "serviceops" },
  { slug: "asset-location-tracking", title: "Asset Location Tracking", desc: "Track the location of IT assets in the network with location mapping support for different IP addresses ranges.", icon: LocateFixed, category: "Asset Manager", product: "serviceops" },
];

const patchManager: Feature[] = [
  { slug: "automated-patch-management", title: "Automated Patch Management", desc: "Automate all stages of patch management like scanning, testing, approval, and deployment for all the machines in your network.", icon: RefreshCw, category: "Patch Manager", product: "serviceops" },
  { slug: "test-group-machines", title: "Test Group Machines", desc: "Use different Test Group Machines to automate testing of missing patches before distributing them on various networks to avert vulnerabilities.", icon: TestTube, category: "Patch Manager", product: "serviceops" },
  { slug: "rollback-patch-updates", title: "Rollback Patch Updates", desc: "Rollback or uninstall insignificant patches or patches to outdated applications that have been declined.", icon: Undo2, category: "Patch Manager", product: "serviceops" },
  { slug: "system-health-detection", title: "System Health Detection", desc: "Identify missing patches and categorize them based on severity by assessing all endpoints with System Health Detection.", icon: Stethoscope, category: "Patch Manager", product: "serviceops" },
  { slug: "adaptable-deployment-policy", title: "Adaptable Deployment Policy", desc: "Effortlessly define or customize patch deployment policies to fit your specific organizational requirements.", icon: Settings, category: "Patch Manager", product: "serviceops" },
  { slug: "windows-patch-management", title: "Windows Patch Management", desc: "Automatically install the latest features update and software packages for the Windows machines in your network.", icon: Monitor, category: "Patch Manager", product: "serviceops" },
];

/* ── Exports ── */

export const allFeatures: Feature[] = [
  ...networkObservability,
  ...infrastructureMonitoring,
  ...logAnalytics,
  ...networkAutomation,
  ...platformFeatures,
  ...serviceDesk,
  ...assetManager,
  ...patchManager,
];

export const categories: FeatureCategory[] = [
  { name: "Network Observability", product: "observeops", count: networkObservability.length },
  { name: "Infrastructure Monitoring", product: "observeops", count: infrastructureMonitoring.length },
  { name: "Log Analytics", product: "observeops", count: logAnalytics.length },
  { name: "Network Automation", product: "observeops", count: networkAutomation.length },
  { name: "Platform Features", product: "observeops", count: platformFeatures.length },
  { name: "Service Desk", product: "serviceops", count: serviceDesk.length },
  { name: "Asset Manager", product: "serviceops", count: assetManager.length },
  { name: "Patch Manager", product: "serviceops", count: patchManager.length },
];

export function getFeatureBySlug(slug: string): Feature | undefined {
  return allFeatures.find((f) => f.slug === slug);
}

export function getRelatedFeatures(feature: Feature, limit = 3): Feature[] {
  return allFeatures
    .filter((f) => f.category === feature.category && f.slug !== feature.slug)
    .slice(0, limit);
}
