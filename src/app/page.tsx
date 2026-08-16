import { HomeAutomation } from "@/components/home/Automation";
import { HomeClose } from "@/components/home/Close";
import { HomeContrast } from "@/components/home/Contrast";
import { HomeConversations } from "@/components/home/Conversations";
import { HomeHero } from "@/components/home/Hero";
import { HomeHowItWorks } from "@/components/home/HowItWorks";
import { HomeIntelligence } from "@/components/home/Intelligence";
import { HomeLeads } from "@/components/home/Leads";
import { HomeLiveOps } from "@/components/home/LiveOps";
import { HomeMetrics } from "@/components/home/Metrics";
import { HomeProblem } from "@/components/home/Problem";
import { HomeProduct } from "@/components/home/Product";
import { HomeProof } from "@/components/home/Proof";
import { HomeSystem } from "@/components/home/System";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeProof />
      <HomeProblem />
      <HomeSystem />
      <HomeProduct />
      <HomeLeads />
      <HomeConversations />
      <HomeIntelligence />
      <HomeAutomation />
      <HomeLiveOps />
      <HomeMetrics />
      <HomeHowItWorks />
      <HomeContrast />
      <HomeClose />
    </main>
  );
}
