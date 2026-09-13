import {
  EditorialHero,
  FeatureBlocks,
} from "@/components/marketing/EditorialHero";
import { FinalCTA } from "@/components/marketing/HomeSections";
import {
  CreatorProofBand,
  EarningsSection,
  FaqSection,
  JourneyRail,
  MediaKitSection,
  VoicesSection,
} from "@/components/marketing/AudienceSections";
import {
  DeepDiveSection,
  pageMetadata,
} from "@/components/marketing/MarketingStoryPage";
import { creatorsContent } from "@/content/marketing/audiences";
import { creatorsPage } from "@/content/marketing/pages";

export const metadata = pageMetadata(creatorsPage);

export default function Page() {
  return (
    <>
      <EditorialHero {...creatorsPage.hero} />
      <CreatorProofBand {...creatorsContent.proof} />
      <MediaKitSection content={creatorsContent.mediaKit} />
      <FeatureBlocks items={creatorsPage.features} />
      <JourneyRail content={creatorsContent.journey} />
      {creatorsPage.deepDive ? (
        <DeepDiveSection deepDive={creatorsPage.deepDive} />
      ) : null}
      <EarningsSection content={creatorsContent.earnings} />
      <VoicesSection content={creatorsContent.voices} />
      <FaqSection
        headline={"Questions creators\nask us first."}
        items={creatorsContent.faq}
      />
      <FinalCTA />
    </>
  );
}
