export interface GlossaryTerm {
  term: string;
  letter: string;
  slug: string;
}

function toSlug(term: string): string {
  return term
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function term(name: string, letter: string): GlossaryTerm {
  return { term: name, letter, slug: toSlug(name) };
}

export const glossaryTerms: GlossaryTerm[] = [
  // A
  term("Access Control List (ACL)", "A"),
  term("Active Directory", "A"),
  term("Advanced Persistent Threat (APTs)", "A"),
  term("Agent-Based Monitoring", "A"),
  term("Anomaly Detection", "A"),
  term("Apache Web Server", "A"),
  term("API Monitoring", "A"),
  term("Application Infrastructure", "A"),
  term("Application Mapping", "A"),
  term("Asset Discovery", "A"),
  term("Automate Linux Patching", "A"),
  term("AWS CloudTrail", "A"),
  term("AWS CloudWatch", "A"),
  term("AWS Lambda", "A"),
  term("Azure Functions", "A"),

  // B
  term("Bandwidth Consumption", "B"),
  term("Blue/Green Deployment", "B"),

  // C
  term("Canary Deployment", "C"),
  term("Change Impact Analysis", "C"),
  term("CI/CD", "C"),
  term("CIDR", "C"),
  term("Cloud Automation", "C"),
  term("Cloud Migration", "C"),
  term("Cloud-Native Architecture", "C"),
  term("Configuration Management Database (CMDB)", "C"),
  term("Container as a Service", "C"),
  term("Container Monitoring", "C"),
  term("Continuous Delivery", "C"),
  term("Cyber Threat Intelligence", "C"),

  // D
  term("Data Lakehouse", "D"),
  term("Data Logging", "D"),
  term("Data Observability", "D"),
  term("Database Cardinality", "D"),
  term("Database Concurrency", "D"),
  term("Database Index", "D"),
  term("Database Management System (DBMS)", "D"),
  term("Database Performance Tuning", "D"),
  term("Database Query", "D"),
  term("Database Schema", "D"),
  term("Delivery Pipelines", "D"),
  term("DevOps", "D"),
  term("DevOps Automation", "D"),
  term("DevSecOps", "D"),
  term("Digital Transformation", "D"),
  term("Distributed Tracing", "D"),
  term("Domain Controller", "D"),
  term("Downtime", "D"),

  // E
  term("End-User Network Experience Monitoring", "E"),
  term("Enterprise Network", "E"),
  term("Event Correlation", "E"),

  // F
  term("File Integrity", "F"),
  term("File Sharing Security", "F"),
  term("Firewall", "F"),
  term("FTP Server", "F"),
  term("Full-stack Observability", "F"),
  term("Function as a Service", "F"),

  // G
  term("GitOps", "G"),

  // H
  term("Help Desk Software", "H"),
  term("Hyper-V", "H"),
  term("Hyperscale Computing", "H"),

  // I
  term("IIS Application Pool", "I"),
  term("IIS Server", "I"),
  term("Index Fragmentation", "I"),
  term("Infrastructure as a Service (IaaS)", "I"),
  term("Infrastructure as Code", "I"),
  term("Insider Threat", "I"),
  term("IoT (Internet of Things)", "I"),
  term("IPv6", "I"),
  term("IT Asset", "I"),
  term("IT Incident", "I"),
  term("IT Risk Management", "I"),
  term("IT Storage", "I"),
  term("ITIL", "I"),
  term("ITIL Service Catalog", "I"),
  term("ITSM System", "I"),

  // K
  term("Knowledge Base", "K"),
  term("Kubernetes", "K"),

  // L
  term("Linux Server", "L"),
  term("Log4Shell", "L"),

  // M
  term("Managed File Transfer", "M"),
  term("MySQL Database", "M"),

  // N
  term("Network Access Control", "N"),
  term("Network Activity", "N"),
  term("Network Administration", "N"),
  term("Network Automation", "N"),
  term("Network Availability", "N"),
  term("Network Backup", "N"),
  term("Network Bandwidth", "N"),
  term("Network Capacity", "N"),
  term("Network Compliance", "N"),
  term("Network Configuration", "N"),
  term("Network Congestion", "N"),
  term("Network Device Identification", "N"),
  term("Network Devices", "N"),
  term("Network Discovery", "N"),
  term("Network Downtime", "N"),
  term("Network Infrastructure", "N"),
  term("Network Metrics", "N"),
  term("Network Node", "N"),
  term("Network Protocols", "N"),
  term("Network Troubleshooting", "N"),
  term("Network Visualization", "N"),
  term("NoSQL Database", "N"),

  // O
  term("OpenTracing", "O"),
  term("Operating System", "O"),
  term("OSI Layers", "O"),

  // P
  term("Packet Loss", "P"),
  term("PCAP", "P"),
  term("Ping", "P"),

  // Q
  term("QoS in Networking", "Q"),

  // R
  term("Relational Database", "R"),
  term("Remote Access", "R"),
  term("Remote Desktop Protocol", "R"),
  term("Remote Desktop Services", "R"),
  term("Reverse Proxy", "R"),
  term("Role-Based Access Control (RBAC)", "R"),
  term("Root Cause Analysis", "R"),

  // S
  term("Security Information and Event Management (SIEM)", "S"),
  term("Server Infrastructure", "S"),
  term("Service Level Agreement", "S"),
  term("SNMP", "S"),
  term("SNMP Traps", "S"),
  term("SNMP Walk", "S"),
  term("Software-Defined Networking", "S"),
  term("SQL Database", "S"),
  term("SQL Performance Tuning", "S"),
  term("Storage Resource Monitoring", "S"),
  term("Subnetting", "S"),
  term("Syslog", "S"),

  // V
  term("Virtual Local Area Network (VLAN)", "V"),
  term("Virtual Machine", "V"),
  term("Virtualization", "V"),
  term("Vulnerability Assessment", "V"),

  // W
  term("Web Server", "W"),
  term("Website Monitoring", "W"),
  term("Windows Event Log", "W"),
  term("Windows Server", "W"),
  term("WSUS", "W"),

  // Z
  term("Zero Trust Security", "Z"),
];

export const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function getAvailableLetters(terms: GlossaryTerm[]): Set<string> {
  return new Set(terms.map((t) => t.letter));
}

export function groupByLetter(terms: GlossaryTerm[]): Record<string, GlossaryTerm[]> {
  const grouped: Record<string, GlossaryTerm[]> = {};
  for (const t of terms) {
    if (!grouped[t.letter]) grouped[t.letter] = [];
    grouped[t.letter].push(t);
  }
  return grouped;
}
