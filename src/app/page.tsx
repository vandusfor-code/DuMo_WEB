import { CampaignsSection } from "@/components/CampaignsSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { ContactSection } from "@/components/ContactSection";
import { ConversionFlow } from "@/components/ConversionFlow";
import { DifferentiatorSection } from "@/components/DifferentiatorSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IndustriesSection } from "@/components/IndustriesSection";
import { OperatingModel } from "@/components/OperatingModel";
import { ProblemSection } from "@/components/ProblemSection";
import { TeamSection } from "@/components/TeamSection";
import { TechnologySection } from "@/components/TechnologySection";

export default function Home() {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <ProblemSection />
        <CapabilitiesSection />
        <ConversionFlow />
        <TechnologySection />
        <TeamSection />
        <CampaignsSection />
        <IndustriesSection />
        <OperatingModel />
        <DifferentiatorSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
