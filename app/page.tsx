import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { PainPoints } from "@/components/pain-points";
import { CompanyIntro } from "@/components/company-intro";
import { FeaturesSection } from "@/components/features-section";
import { CtaSection } from "@/components/cta-section";
import { ServiceTabs } from "@/components/service-tabs";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PainPoints />
      <CompanyIntro />
      <ServiceTabs />
      <FeaturesSection />
      <CtaSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
