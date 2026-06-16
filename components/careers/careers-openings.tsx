"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Briefcase, Clock, Star, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface JobOpening {
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  overview: string;
  responsibilities: string[];
  skills: string[];
}

const openings: JobOpening[] = [
  {
    title: "Pre Sales Consultant",
    department: "Presales",
    location: "Ahmedabad (WFO)",
    type: "Full-time",
    experience: "3-5 Years",
    overview:
      "As a Presales Consultant at Motadata, you will be responsible for leading the presales team and collaborating with various departments to develop compelling proposals and solutions for our clients. You will play a pivotal role in understanding client requirements, shaping solutions, and ensuring seamless communication between the sales and delivery teams. The ideal candidate should have a strong technical background, excellent communication skills, and a proven track record of successful presales management.",
    responsibilities: [
      "Collaborate with the sales team and Partners to understand customer requirements and propose technical solutions.",
      "Conduct the discovery call, assessment of requirement and gather technical requirements from customer to tailor the solutions.",
      "Provide product demonstrations and presentations to potential customers and Partners, both in-person and virtually.",
      "Collaborate and Accomplishes sales by providing the required pre-sales technical support.",
      "Answering technical compliance-related queries, analyzing the gaps, need for customization, analysis of the feasibility of required customization, and customization effort estimation.",
      "Customer requirement gathering and documentation.",
      "Prepare the Documentations like Solution Architecture, Technical Proposal, Solution Presentation, SOW, defining the solution USP, Prepare H/w sizing BOM and Software etc.",
      "Setting up PoC (Proof of Concepts) as per customer requirement.",
      "Stay updated with industry trends and competitor products to maintain a competitive advantage.",
      "Assisting the development team in understanding the requirements and defining the scope/statement of work.",
      "Engage in product training and continuously update knowledge of the company's offerings and associated technologies.",
      "Improves product marketability by improving product packaging; coordinating new product development / integrating a suitable third-party product/solution.",
      "Assist in the development of sales strategies and go-to-market plans.",
      "Collaborate with the product development/ PMG team to relay customer feedback and assist in product improvement.",
      "Attend the industry events, conferences, trade shows etc. to network and generate leads.",
    ],
    skills: [
      "Should have worked with NMS or ITSM solutions (Solarwinds, WhatsUpGold, PRTG, Freshworks, ServiceNow, BMC etc.)",
      "Should have experience in designing solution documents and proposals for NMS tenders.",
      "Should have basic knowledge of Networking, Server, Application, Cloud, SDN and IOT technology.",
      "Should have excellent communication and presentation skills both verbal and written.",
      "At least should have a deep level understanding of any one of the areas of infrastructure from above.",
      "Should have proven ability to build and maintain customer relationships.",
      "Should have ability to work collaboratively in a team-oriented environment.",
      "Should have willingness to travel as needed.",
    ],
  },
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Ahmedabad",
    type: "Full-time",
    experience: "4-6 Years",
    overview:
      "Join our engineering team to build and maintain the next generation of our unified observability and service management platform. You will work with modern frontend technologies to deliver performant, accessible, and beautiful interfaces.",
    responsibilities: [
      "Build and maintain responsive web applications using React and Next.js.",
      "Collaborate with designers and backend engineers to deliver seamless user experiences.",
      "Write clean, maintainable, and well-tested code.",
      "Participate in code reviews and contribute to engineering best practices.",
    ],
    skills: [
      "Strong proficiency in React, TypeScript, and modern CSS.",
      "Experience with Next.js and server-side rendering.",
      "Understanding of web performance optimization techniques.",
      "Excellent problem-solving and communication skills.",
    ],
  },
  {
    title: "Backend Engineer — Go/Python",
    department: "Engineering",
    location: "Ahmedabad",
    type: "Full-time",
    experience: "3-5 Years",
    overview:
      "Design and build scalable backend services that power our AI-native observability platform. Work with large-scale data pipelines and distributed systems.",
    responsibilities: [
      "Design and develop RESTful APIs and microservices.",
      "Build and optimize data pipelines for real-time telemetry processing.",
      "Ensure high availability and performance of backend systems.",
      "Collaborate with cross-functional teams on product features.",
    ],
    skills: [
      "Proficiency in Go and/or Python.",
      "Experience with distributed systems and message queues.",
      "Knowledge of SQL and NoSQL databases.",
      "Familiarity with containerization and orchestration tools.",
    ],
  },
  {
    title: "DevOps / SRE Engineer",
    department: "Engineering",
    location: "Ahmedabad",
    type: "Full-time",
    experience: "3-5 Years",
    overview:
      "Ensure reliability and scalability of our cloud infrastructure. Automate deployment pipelines and build monitoring solutions for our SaaS platform.",
    responsibilities: [
      "Manage and automate CI/CD pipelines.",
      "Monitor and improve system reliability and performance.",
      "Implement infrastructure as code using Terraform or similar tools.",
      "Respond to and resolve production incidents.",
    ],
    skills: [
      "Experience with AWS, GCP, or Azure cloud platforms.",
      "Proficiency with Docker, Kubernetes, and container orchestration.",
      "Strong scripting skills in Bash, Python, or Go.",
      "Knowledge of monitoring and observability tools.",
    ],
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Ahmedabad",
    type: "Full-time",
    experience: "3-5 Years",
    overview:
      "Shape the user experience of our enterprise platform. Create intuitive and elegant interfaces that simplify complex IT operations workflows.",
    responsibilities: [
      "Design end-to-end user experiences for web applications.",
      "Create wireframes, prototypes, and high-fidelity mockups.",
      "Conduct user research and usability testing.",
      "Collaborate with engineering to ensure design quality in implementation.",
    ],
    skills: [
      "Proficiency in Figma and modern design tools.",
      "Strong portfolio demonstrating enterprise/SaaS product design.",
      "Understanding of design systems and component-based design.",
      "Excellent visual design and typography skills.",
    ],
  },
  {
    title: "Technical Writer",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    experience: "2-4 Years",
    overview:
      "Create clear, comprehensive documentation for our platform. Help users and developers understand and get the most out of Motadata products.",
    responsibilities: [
      "Write and maintain product documentation, guides, and API references.",
      "Collaborate with engineering and product teams to understand features.",
      "Create tutorials, how-to guides, and knowledge base articles.",
      "Ensure documentation accuracy and consistency.",
    ],
    skills: [
      "Excellent technical writing and editing skills.",
      "Experience documenting software products or APIs.",
      "Familiarity with documentation tools and version control.",
      "Ability to explain complex concepts in simple terms.",
    ],
  },
  {
    title: "Enterprise Sales Executive",
    department: "Sales",
    location: "Mumbai",
    type: "Full-time",
    experience: "5-8 Years",
    overview:
      "Drive enterprise sales for our observability and service management platform. Build relationships with key decision-makers and close strategic deals.",
    responsibilities: [
      "Identify and engage enterprise prospects.",
      "Manage the full sales cycle from discovery to close.",
      "Build and maintain relationships with key stakeholders.",
      "Collaborate with presales and marketing teams.",
    ],
    skills: [
      "Proven track record in enterprise software sales.",
      "Experience selling IT infrastructure or monitoring solutions.",
      "Strong negotiation and presentation skills.",
      "Ability to understand and articulate technical solutions.",
    ],
  },
  {
    title: "Customer Success Manager",
    department: "Support",
    location: "Ahmedabad",
    type: "Full-time",
    experience: "3-5 Years",
    overview:
      "Ensure our customers achieve their goals with Motadata. Drive adoption, retention, and expansion across your portfolio of enterprise accounts.",
    responsibilities: [
      "Onboard and train new customers on the platform.",
      "Monitor customer health and drive product adoption.",
      "Identify upsell and cross-sell opportunities.",
      "Act as the voice of the customer internally.",
    ],
    skills: [
      "Experience in customer success or account management.",
      "Strong communication and relationship-building skills.",
      "Understanding of IT operations or monitoring tools.",
      "Analytical mindset with data-driven approach.",
    ],
  },
  {
    title: "AI/ML Engineer",
    department: "Engineering",
    location: "Ahmedabad",
    type: "Full-time",
    experience: "3-6 Years",
    overview:
      "Build and deploy machine learning models that power our AI-native platform. Work on anomaly detection, predictive analytics, and intelligent automation.",
    responsibilities: [
      "Develop and deploy ML models for IT operations use cases.",
      "Build data pipelines for training and inference.",
      "Research and implement state-of-the-art AI/ML techniques.",
      "Collaborate with product and engineering teams.",
    ],
    skills: [
      "Strong foundation in machine learning and deep learning.",
      "Proficiency in Python and ML frameworks (PyTorch, TensorFlow).",
      "Experience with time-series data and anomaly detection.",
      "Knowledge of MLOps and model deployment practices.",
    ],
  },
];

export function CareersOpenings() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const active = openings[activeIndex];

  return (
    <section id="openings" className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        {/* Heading */}
        <motion.div
          className="mx-auto max-w-2xl text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-label-md uppercase tracking-widest text-primary">
            Open Positions
          </p>
          <h2 className="mt-3 text-display-md">
            Join Our Team
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            Explore our current openings and find the perfect role for your
            skills and ambitions.
          </p>
        </motion.div>

        {/* Single connected container */}
        <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
          <div className="grid lg:grid-cols-[320px_1fr]" style={{ height: "700px" }}>
            {/* ── Left: Sticky position list with internal scroll ── */}
            <div className="overflow-y-auto border-b lg:border-b-0 lg:border-r border-border/40 [scrollbar-width:none] hover:[scrollbar-width:thin] [&::-webkit-scrollbar]:w-0 hover:[&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border/60 [&::-webkit-scrollbar-track]:bg-transparent">
              {openings.map((job, i) => (
                <button
                  key={job.title}
                  onClick={() => { setActiveIndex(i); setFileName(""); }}
                  className={`w-full text-left px-6 py-5 border-b border-border/40 last:border-b-0 transition-colors duration-200 ${
                    activeIndex === i
                      ? "bg-primary/5"
                      : "hover:bg-neutral-50"
                  }`}
                >
                  <h3
                    className={`text-label-md ${
                      activeIndex === i ? "text-primary" : ""
                    }`}
                  >
                    {job.title}
                  </h3>
                  <p className="mt-1 text-caption text-muted-foreground">
                    {job.department} · {job.location} · {job.type}
                  </p>
                </button>
              ))}
            </div>

            {/* ── Right: Position details ── */}
            <div className="flex flex-col overflow-hidden">
              {/* Sticky header */}
              <div className="shrink-0 border-b border-border/40 bg-white px-8 py-6 lg:px-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.title + "-header"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"
                  >
                    <div>
                      <h3 className="text-heading-lg">
                        {active.title}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-caption text-muted-foreground">
                          <Briefcase className="h-3 w-3" />
                          {active.department}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-caption text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {active.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-caption text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {active.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-caption text-muted-foreground">
                          <Star className="h-3 w-3" />
                          {active.experience}
                        </span>
                      </div>
                    </div>
                    <Button
                      size="lg"
                      className="h-11 px-6 text-sm shrink-0"
                      onClick={() => {
                        if (formRef.current && rightPanelRef.current) {
                          const panel = rightPanelRef.current;
                          const formTop = formRef.current.offsetTop - panel.offsetTop;
                          panel.scrollTo({ top: formTop, behavior: "smooth" });
                        }
                      }}
                    >
                      Apply Now <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Scrollable content */}
              <div ref={rightPanelRef} className="flex-1 overflow-y-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-8 py-8 lg:px-10"
                  >

                  {/* Overview */}
                  <div>
                    <h4 className="text-label-md uppercase tracking-wider text-primary">
                      Position Overview
                    </h4>
                    <p className="mt-3 text-body-xs text-muted-foreground">
                      {active.overview}
                    </p>
                  </div>

                  {/* Responsibilities */}
                  <div className="mt-8">
                    <h4 className="text-label-md uppercase tracking-wider text-primary">
                      Roles & Responsibilities
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {active.responsibilities.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-body-xs text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="mt-8">
                    <h4 className="text-label-md uppercase tracking-wider text-primary">
                      Skills & Qualifications
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {active.skills.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-body-xs text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Application Form — always visible at bottom */}
                  <div ref={formRef} className="mt-8">
                    <div className="h-px bg-border/60 mb-8" />

                    <div>
                      <h4 className="text-label-md uppercase tracking-wider text-primary">
                        Apply for This Position
                      </h4>
                      <p className="mt-1 text-heading-sm">{active.title}</p>
                    </div>

                      <form
                        className="mt-6 space-y-5"
                        onSubmit={(e) => e.preventDefault()}
                      >
                        {/* Full Name */}
                        <div>
                          <label className="mb-1.5 block text-label-md">
                            Full Name <span className="text-primary">*</span>
                          </label>
                          <Input
                            type="text"
                            placeholder="Enter your full name"
                            required
                            className="h-11"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="mb-1.5 block text-label-md">
                            Email Address <span className="text-primary">*</span>
                          </label>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            required
                            className="h-11"
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="mb-1.5 block text-label-md">
                            Phone Number <span className="text-primary">*</span>
                          </label>
                          <Input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            required
                            className="h-11"
                          />
                        </div>

                        {/* LinkedIn */}
                        <div>
                          <label className="mb-1.5 block text-label-md">
                            LinkedIn Profile
                          </label>
                          <Input
                            type="url"
                            placeholder="https://linkedin.com/in/username"
                            className="h-11"
                          />
                        </div>

                        {/* Resume Upload */}
                        <div>
                          <label className="mb-1.5 block text-label-md">
                            Resume/CV <span className="text-primary">*</span>
                          </label>
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              setFileName(file ? file.name : "");
                            }}
                          />
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="flex w-full flex-col items-center gap-2 rounded-xl border-2 border-dashed border-border/60 bg-muted/30 px-6 py-6 text-center transition-colors hover:border-primary/30 hover:bg-muted/50"
                          >
                            <Upload className="h-5 w-5 text-muted-foreground" />
                            {fileName ? (
                              <p className="text-label-md">{fileName}</p>
                            ) : (
                              <p className="text-body-xs text-muted-foreground">
                                Click to upload or drag and drop
                              </p>
                            )}
                            <p className="text-caption text-muted-foreground/60">
                              PDF, DOC, or DOCX (max. 5MB)
                            </p>
                          </button>
                        </div>

                        {/* Cover Letter */}
                        <div>
                          <label className="mb-1.5 block text-label-md">
                            Cover Letter
                          </label>
                          <textarea
                            placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                            rows={4}
                            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          />
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3 pt-2">
                          <Button type="submit" className="h-11 px-6 text-sm">
                            Submit Application
                          </Button>
                        </div>
                      </form>
                    </div>
                </motion.div>
              </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
