import { CampaignsSection } from "@/components/CampaignsSection";
import { ContactSection } from "@/components/ContactSection";
import { DifferentiatorSection } from "@/components/DifferentiatorSection";
import { DumoSystem } from "@/components/DumoSystem";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IndustriesSection } from "@/components/IndustriesSection";
import { OperatingModel } from "@/components/OperatingModel";
import { OperationSection } from "@/components/OperationSection";
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
        <DumoSystem />
        <OperationSection />
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
