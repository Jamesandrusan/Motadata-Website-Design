"use client";

import { useState, useEffect } from "react";
import { List } from "lucide-react";
import { motion } from "framer-motion";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { CtaSection } from "@/components/cta-section";

/* ── Types ── */

interface TocItem {
  id: string;
  title: string;
}

/* ── TOC sidebar ── */

function PrivacyToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="rounded-xl border bg-card p-5">
      <div className="flex items-center gap-2 text-[13px] font-semibold text-foreground">
        <List className="h-4 w-4" />
        Table of Contents
      </div>
      <ul className="mt-4 space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleClick(item.id)}
              className={`block w-full text-left rounded-md px-3 py-1.5 text-[12px] leading-snug transition-colors ${
                activeId === item.id
                  ? "bg-muted font-medium text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ── Data ── */

const tocItems: TocItem[] = [
  { id: "general-statistical-info", title: "Collection of General Statistical Info" },
  { id: "personal-identifying-info", title: "Collection of Personal Identifying Info" },
  { id: "disclosure-personal-info", title: "Disclosure of Personal Identifying Info" },
  { id: "google-user-data", title: "Google User Data" },
  { id: "ai-ml-models", title: "Use of AI/ML Models" },
  { id: "cookies", title: "Cookies" },
  { id: "third-party-websites", title: "Third Party Websites" },
  { id: "changes-to-privacy-policy", title: "Changes to Privacy Policy" },
  { id: "information-handling-retention", title: "Information Handling and Retention" },
  { id: "data-removal-policy", title: "Data Removal Policy" },
];

const privacyContent = `
<h2 id="general-statistical-info">Collection, Use and Disclosure of General Statistical Information</h2>
<p>At Mindarray, we respect your privacy. We're committed to protecting it using every means we can. In this privacy policy, we inform you about how we use the information that we collect from you. The information here refers to two types of data that we collect – General Statistical Information and Personal Identifying Information.</p>

<h2 id="personal-identifying-info">Collection and Use of Personal Identifying Information</h2>
<p>In addition to collecting General Statistical Information, we may ask you to provide us with certain personal information, such as your name, street address and email address, to enable us to respond to your requests and needs. Information that can reasonably be used to identify you is referred to in this policy as "Personal Identifying Information".</p>
<p>For example, if you choose a service or transaction that requires payment, such as making a purchase online or through other means such as a purchase order, we will request Personal Identifying Information necessary for payment, invoicing, and/or shipping.</p>
<p>In addition, when you purchase a Mindarray software product, we will also ask for product registration information, which includes the name of the product acquired, as well as your name, street address, and e-mail address. This Personal Identifying Information is kept on file and updated from time to time to fulfill our continuing obligations to you, such as providing notices of new versions and giving support by e-mail.</p>
<p>When you visit our web pages by clicking on a link in the Mindarray software and choose to purchase a license, we gather certain Personal Identifying Information to facilitate your purchase and usage statistics to analyze, on a collective basis, how and the extent to which certain parts of the Mindarray is used.</p>
<p>When you provide us Personal Identifying Information in an e-mail, fax or by telephone such as when you request technical and other types of support, we use the information to locate your records and provide you with answers to your questions.</p>
<p>Also, when you submit information to us in the context of a technical support inquiry, including sending the error files, sample data to reproduce the error, Personal Identifying Information may be attached to the information submitted. Please note that you should be aware that the transmitting of the error files or sample data or other attachments may include confidential information which should be removed prior to the transmittal as we do not accept responsibility for the inadvertent subsequent disclosure of such confidential information.</p>
<p>When you ask to be placed on one of our mailing lists, we will use your e-mail address to send you messages relevant to that list.</p>

<h2 id="disclosure-personal-info">Disclosure of Personal Identifying Information</h2>
<p>We may disclose your Personal Identifying Information to appropriate third parties to process transactions you initiate, including shipping products to you and invoicing for purchases made. Examples of such third parties are our order processing and fulfillment service providers and credit card processing companies.</p>
<p>We may also disclose your Personal Identifying Information to third parties if we are required to do so by law, or if we believe that such action is necessary to:</p>
<ul>
<li>Comply with legal processes such as a search warrant, subpoena, or court order;</li>
<li>Protect our rights and property; or</li>
<li>Protect against misuse or unauthorized use of our website and/or Mindarray software products. We never loan, rent or sell your Personal Identifying Information to others.</li>
</ul>

<h2 id="google-user-data">Google User Data</h2>
<p>Mindarray's use of information received from Google APIs will adhere to <strong>Google API Services User Data Policy</strong>, including the Limited Use requirement. This means that we will only use your Google data to provide and improve our software products, and we will not share your data with third parties or use it for advertising.</p>
<p><strong>Additional Limits on Use of Your Gmail Data:</strong> In addition to the general restrictions outlined above, we also impose the following additional restrictions on our use of your Gmail data:</p>
<ul>
<li>We will only use access to your Gmail data to provide an email client that allows users to compose, send, read, and process emails. This includes reading, writing, modifying, or controlling Gmail message bodies (including attachments), metadata, headers, and settings.</li>
<li>We will not transfer your Gmail data to others unless doing so is necessary to:
  <ul>
    <li>Provide and improve the email client features</li>
    <li>Comply with applicable law</li>
    <li>As part of a merger, acquisition, or sale of assets where we provide notice to users</li>
  </ul>
</li>
<li>We will not use your Gmail data for serving any advertisements.</li>
<li>We will not allow humans to read your Gmail data unless:
  <ul>
    <li>We have your affirmative agreement for specific messages</li>
    <li>Doing so is necessary for security purposes such as investigating abuse</li>
    <li>To comply with applicable law</li>
    <li>For the Mindarray software product's internal operations</li>
  </ul>
</li>
</ul>
<p>Even in situations where human access to your Gmail data is necessary, we will only do so when the data has been aggregated and anonymized. This means that we will not be able to identify you personally from the data.</p>

<h2 id="ai-ml-models">Use of AI/ML Models</h2>
<p>Our software products utilize AI/ML models for specific purposes, as outlined below:</p>
<p><strong>Incident Management:</strong> In our ServiceOps product, AI/ML models analyze historical incident data to suggest category assignments and assignees for new incidents. This feature aims to streamline incident resolution by ensuring prompt and appropriate assignment.</p>
<p><strong>Anomaly Detection and Root Cause Analysis:</strong> Our AIOps product employs AI/ML models to analyze metrics, logs, and traces generated by various systems to identify potential anomalies and their underlying root causes. This capability helps us proactively detect and address potential issues before they impact users.</p>
<p><strong>Data Handling Practices:</strong> We emphasize that our AI/ML models do not extract or store any personally identifiable information (PII) from Gmail data. The data used to train and operate these models is derived from non-personal sources, such as system logs, metrics, and incident records. We adhere to Google's API Services User Data Policy and the Limited Use requirement, ensuring that your Gmail data is only used for the permitted purposes.</p>
<p>We are committed to protecting your privacy and will continue to update our policies and procedures to ensure that we are in compliance with all applicable regulations.</p>

<h2 id="cookies">Cookies</h2>
<p>We may set and access cookies on your computer. A cookie is a small amount of data that is sent to your browser from a Web server and stored on your computer's hard drive. We use cookies in a limited way to track usage on our site.</p>
<p>We gather information about site use by our visitors through cookie technology on an anonymous basis and analyze it at an aggregate level only. This enables us to continually improve our website to meet the needs of our users.</p>
<p>In addition, we may use temporary session cookies to track your progress through our order processing system, keeping track of information such as the contents of your shopping cart and address. These session cookies only exist for the duration of your browser session.</p>

<h2 id="third-party-websites">Third Party Websites</h2>
<p>The Mindarray Systems website may contain links to third-party websites over which we have no control or responsibility regarding content, privacy policies, or practices. We suggest that you review the privacy policy applicable to any third-party site that you visit.</p>
<p>This privacy policy applies only to our own website at www.motadata.com. Please note that all on-line and telephone credit card orders for Mindarray Systems software products may be processed by a third party.</p>

<h2 id="changes-to-privacy-policy">Changes to Privacy Policy</h2>
<p>Mindarray Systems may amend this policy at any time by posting the amended terms on our website. All amended terms will be automatically effective without further notice, 10 days after they are first posted.</p>

<h2 id="information-handling-retention">Information Handling and Retention</h2>
<p>At any time, you may review or update personal data that we hold about you, by signing in to your account on our website. When we receive any request to access, edit or delete personal data, we shall first take reasonable steps to verify your identity before granting you access or otherwise taking any action. This is important to safeguard your information.</p>
<p>We preserve and retain your information according to the respective statutory retention period to comply with the law and to support a claim or defense in court. After the expiration of that period, the corresponding data is routinely deleted, as long as it is no longer necessary for the fulfilment of the contract or the initiation of a contract.</p>

<h2 id="data-removal-policy">Data Removal Policy</h2>
<p><strong>How to Request to Delete Your Data?</strong></p>
<p>You can cancel your account by emailing <strong>dpo@motadata.com</strong>, and once your account is cancelled, all data will be automatically removed after 30 days. If you want to delete all of your data right away, send us an email at that address with your use case, and our team will do the necessary in the next working 24 hours.</p>
`;

/* ── Rich content styles ── */

const richContentStyles = `
  [&>p]:mb-5 [&>p]:text-[15px] [&>p]:leading-[1.8] [&>p]:text-muted-foreground
  [&>h2]:mb-4 [&>h2]:mt-12 [&>h2]:text-xl [&>h2]:font-bold [&>h2]:tracking-tight [&>h2]:text-foreground [&>h2]:scroll-mt-24
  [&>h3]:mb-3 [&>h3]:mt-8 [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:text-foreground [&>h3]:scroll-mt-24
  [&>ul]:mb-5 [&>ul]:ml-6 [&>ul]:list-disc [&>ul]:space-y-2
  [&>ul>li]:text-[15px] [&>ul>li]:leading-[1.8] [&>ul>li]:text-muted-foreground
  [&_ul_ul]:mt-2 [&_ul_ul]:ml-6 [&_ul_ul]:list-disc [&_ul_ul]:space-y-1
  [&>ol]:mb-5 [&>ol]:ml-6 [&>ol]:list-decimal [&>ol]:space-y-2
  [&>ol>li]:text-[15px] [&>ol>li]:leading-[1.8] [&>ol>li]:text-muted-foreground
  [&_strong]:font-semibold [&_strong]:text-foreground
`;

/* ── Main component ── */

export function PrivacyPolicyDetail() {
  return (
    <>
      {/* Hero */}
      <section className="relative z-10 overflow-hidden py-24 lg:py-32">
        <HeroOrbs />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp delay={100}>
              <div className="flex justify-center">
                <AnimatedBadge text="Legal Information" />
              </div>
            </FadeUp>
            <FadeUp delay={250}>
              <h1 className="mt-6 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight">
                Privacy Policy
              </h1>
            </FadeUp>
            <FadeUp delay={400}>
              <p className="mx-auto mt-5 max-w-2xl text-body-md text-muted-foreground">
                At Mindarray, we respect your privacy. We&apos;re committed to protecting it using every means we can.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Content + TOC */}
      <article className="relative z-10">
        <div className="mx-auto w-full max-w-7xl px-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
              {/* Left: content */}
              <div>
                <div
                  className={richContentStyles}
                  dangerouslySetInnerHTML={{ __html: privacyContent }}
                />
              </div>

              {/* Right: sticky TOC */}
              <aside className="hidden lg:block">
                <div className="sticky top-20 space-y-6">
                  <PrivacyToc items={tocItems} />
                </div>
              </aside>
            </div>
          </motion.div>
        </div>
      </article>

      {/* CTA */}
      <CtaSection />
    </>
  );
}
