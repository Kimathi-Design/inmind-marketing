import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero";
import {
  PartnersMarquee,
  ProofStrip,
  TrustStrip,
  Manifesto,
  PlatformOverview,
  DiscoverySection,
  CreatorWall,
  CampaignStory,
  SocialIntelligence,
  AISection,
  AudiencePaths,
  AnalyticsPreview,
  RelationshipCRM,
  Ecosystem,
  StoriesStrip,
  ResourcesTeaser,
  HomeFaq,
  FinalCTA,
} from "@/components/marketing/HomeSections";
import { SITE } from "@/content/marketing/navigation";

export const metadata: Metadata = {
  title: { absolute: SITE.product },
  description: SITE.tagline,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PartnersMarquee />
      <ProofStrip />
      <TrustStrip />
      <Manifesto />
      <PlatformOverview />
      <DiscoverySection />
      <CreatorWall />
      <CampaignStory />
      <SocialIntelligence />
      <AISection />
      <AnalyticsPreview />
      <RelationshipCRM />
      <Ecosystem />
      <AudiencePaths />
      <StoriesStrip />
      <ResourcesTeaser />
      <HomeFaq />
      <FinalCTA />
    </>
  );
}
