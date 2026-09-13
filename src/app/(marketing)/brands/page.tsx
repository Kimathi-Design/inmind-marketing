import {
  EditorialHero,
  FeatureBlocks,
} from "@/components/marketing/EditorialHero";
import { FinalCTA } from "@/components/marketing/HomeSections";
import {
  ComparisonSection,
  FaqSection,
  LifecycleTimeline,
  OutcomeStats,
  RelatedResources,
  ShortlistSection,
} from "@/components/marketing/AudienceSections";
import {
  DeepDiveSection,
  pageMetadata,
} from "@/components/marketing/MarketingStoryPage";
import { ResourceCard } from "@/components/marketing/ResourceCard";
import { brandsContent } from "@/content/marketing/audiences";
import { brandsPage } from "@/content/marketing/pages";
import { RESOURCES } from "@/content/marketing/resources";

export const metadata = pageMetadata(brandsPage);

const caseStudies = RESOURCES.filter((r) => r.kind === "case-study").slice(0, 3);

export default function Page() {
  return (
    <>
      <EditorialHero {...brandsPage.hero} />
      <OutcomeStats content={brandsContent.outcomes} />
      <ShortlistSection content={brandsContent.shortlist} />
      <LifecycleTimeline content={brandsContent.lifecycle} />
      <FeatureBlocks items={brandsPage.features} />
      {brandsPage.deepDive ? (
        <DeepDiveSection deepDive={brandsPage.deepDive} />
      ) : null}
      <ComparisonSection content={brandsContent.comparison} />
      <RelatedResources
        eyebrow="Proof"
        headline={"Campaigns we have\nalready run."}
        href="/resources/case-studies"
        linkLabel="All case studies"
      >
        {caseStudies.map((resource) => (
          <ResourceCard key={resource.slug} resource={resource} />
        ))}
      </RelatedResources>
      <FaqSection
        headline={"What marketing teams\nask before starting."}
        items={brandsContent.faq}
      />
      <FinalCTA />
    </>
  );
}
