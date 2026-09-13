import {
  EditorialHero,
  FeatureBlocks,
} from "@/components/marketing/EditorialHero";
import { FinalCTA } from "@/components/marketing/HomeSections";
import {
  CommissionsSection,
  FaqSection,
  MissionControlSection,
  RelatedResources,
  RosterSection,
  WorkflowColumns,
} from "@/components/marketing/AudienceSections";
import {
  DeepDiveSection,
  pageMetadata,
} from "@/components/marketing/MarketingStoryPage";
import { ResourceCard } from "@/components/marketing/ResourceCard";
import { agenciesContent } from "@/content/marketing/audiences";
import { agenciesPage } from "@/content/marketing/pages";
import { RESOURCES } from "@/content/marketing/resources";

export const metadata = pageMetadata(agenciesPage);

const insights = RESOURCES.filter((r) => r.kind === "insight").slice(0, 3);

export default function Page() {
  return (
    <>
      <EditorialHero {...agenciesPage.hero} />
      <MissionControlSection content={agenciesContent.control} />
      <FeatureBlocks items={agenciesPage.features} />
      <RosterSection content={agenciesContent.roster} />
      <CommissionsSection content={agenciesContent.commissions} />
      {agenciesPage.deepDive ? (
        <DeepDiveSection deepDive={agenciesPage.deepDive} />
      ) : null}
      <WorkflowColumns content={agenciesContent.workflow} />
      <RelatedResources
        eyebrow="Reading"
        headline={"Insights for teams\nrunning the work."}
        href="/resources/insights"
        linkLabel="All insights"
      >
        {insights.map((resource) => (
          <ResourceCard key={resource.slug} resource={resource} />
        ))}
      </RelatedResources>
      <FaqSection
        headline={"What agencies ask\nbefore moving over."}
        items={agenciesContent.faq}
      />
      <FinalCTA />
    </>
  );
}
