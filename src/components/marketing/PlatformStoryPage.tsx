import {
  EditorialHero,
  FeatureBlocks,
} from "@/components/marketing/EditorialHero";
import { FinalCTA } from "@/components/marketing/HomeSections";
import {
  CreatorProofBand,
  FaqSection,
  JourneyRail,
  OutcomeStats,
  ShortlistSection,
} from "@/components/marketing/AudienceSections";
import {
  AiInsightsPanel,
  CampaignLifecycleBand,
  ModuleNavGrid,
  SocialPerformanceGrid,
  SpotlightSection,
} from "@/components/marketing/PlatformSections";
import type { PlatformRichPage } from "@/content/marketing/platform-pages";

export function PlatformStoryPage({ cfg }: { cfg: PlatformRichPage }) {
  const useLifecycleBand =
    cfg.workflow && cfg.workflow.items.length >= 6;

  return (
    <>
      <EditorialHero {...cfg.hero} />

      {cfg.proof ? <CreatorProofBand {...cfg.proof} /> : null}

      {cfg.modules ? <ModuleNavGrid modules={cfg.modules} /> : null}

      {cfg.shortlist ? <ShortlistSection content={cfg.shortlist} /> : null}

      {cfg.socialPosts ? (
        <SocialPerformanceGrid posts={cfg.socialPosts} />
      ) : null}

      {cfg.insights ? <AiInsightsPanel insights={cfg.insights} /> : null}

      {cfg.outcomes ? (
        <OutcomeStats
          content={{
            eyebrow: cfg.outcomes.eyebrow,
            headline: cfg.outcomes.headline,
            body: cfg.outcomes.body ?? "",
            stats: cfg.outcomes.stats.map((stat) => ({
              value: stat.value,
              label: stat.label,
              meta: stat.meta ?? "",
            })),
          }}
        />
      ) : null}

      {cfg.spotlight ? <SpotlightSection spotlight={cfg.spotlight} /> : null}

      <FeatureBlocks items={cfg.features} />

      {cfg.workflow && !useLifecycleBand ? (
        <JourneyRail
          content={{
            eyebrow: cfg.workflow.eyebrow,
            headline: cfg.workflow.headline,
            body: cfg.workflow.body ?? "",
            items: cfg.workflow.items,
          }}
        />
      ) : null}

      {cfg.workflow && useLifecycleBand ? (
        <CampaignLifecycleBand workflow={cfg.workflow} />
      ) : null}

      {cfg.faq ? (
        <FaqSection
          headline={"Questions about\n" + cfg.title.toLowerCase() + "."}
          items={cfg.faq}
        />
      ) : null}

      <FinalCTA />
    </>
  );
}
