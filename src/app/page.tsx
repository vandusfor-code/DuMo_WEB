import { HomeAcquisition } from "@/components/home/Acquisition";
import { HomeAnalytics } from "@/components/home/Analytics";
import { HomeClose } from "@/components/home/Close";
import { HomeDifferentiator } from "@/components/home/Differentiator";
import { HomeHero } from "@/components/home/Hero";
import { HomeIntelligence } from "@/components/home/Intelligence";
import { HomeLeadIdea } from "@/components/home/LeadIdea";
import { HomeLiveOps } from "@/components/home/LiveOps";
import { HomeOperatingLayer } from "@/components/home/OperatingLayer";
import { FollowTheLead } from "@/components/product/FollowTheLead";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeLeadIdea />
      <FollowTheLead />
      <HomeOperatingLayer />
      <HomeIntelligence />
      <HomeLiveOps />
      <HomeAcquisition />
      <HomeAnalytics />
      <HomeDifferentiator />
      <HomeClose />
    </main>
  );
}
