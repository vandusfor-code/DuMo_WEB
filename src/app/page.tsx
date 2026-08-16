import { HomeCampaigns } from "@/components/home/Campaigns";
import { HomeClose } from "@/components/home/Close";
import { HomeHero } from "@/components/home/Hero";
import { HomeOperation } from "@/components/home/Operation";
import { HomeProblem } from "@/components/home/Problem";
import { HomeStatement } from "@/components/home/Statement";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeProblem />
      <HomeStatement />
      <HomeOperation />
      <HomeCampaigns />
      <HomeClose />
    </main>
  );
}
