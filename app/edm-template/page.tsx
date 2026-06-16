import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { EdmTemplateContent } from "@/components/edm-template/edm-template-content";

export default function EdmTemplatePage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <EdmTemplateContent />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}
