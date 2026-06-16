import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactOffices } from "@/components/contact/contact-offices";
import { ContactFaq } from "@/components/contact/contact-faq";
import { ContactCta } from "@/components/contact/contact-cta";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <ContactHero />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>
      <ContactForm />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>
      <ContactOffices />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>
      <ContactFaq />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>
      <ContactCta />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="section-divider" /></div>
      <Footer />
    </main>
  );
}
