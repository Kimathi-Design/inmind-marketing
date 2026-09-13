import type { Metadata } from "next";
import {
  EditorialHero,
  FeatureBlocks,
} from "@/components/marketing/EditorialHero";
import { FinalCTA } from "@/components/marketing/HomeSections";
import { MarketingImage } from "@/components/marketing/MarketingImage";
import { SectionHeader } from "@/components/marketing/SectionHeader";

export type MarketingPageConfig = {
  title: string;
  description: string;
  hero: {
    eyebrow?: string;
    headline: string;
    body: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    image?: { src: string; alt: string };
    dark?: boolean;
  };
  features: { title: string; body: string }[];
  /** Numbered walkthrough of how this audience works in the product. */
  steps?: {
    eyebrow: string;
    headline: string;
    body?: string;
    items: { title: string; body: string }[];
  };
  /** Editorial band pairing an image with supporting proof points. */
  deepDive?: {
    eyebrow: string;
    headline: string;
    body: string;
    points: string[];
    image: { src: string; alt: string };
  };
};

export function pageMetadata(cfg: MarketingPageConfig): Metadata {
  return {
    title: cfg.title,
    description: cfg.description,
    openGraph: { title: cfg.title, description: cfg.description },
  };
}

function StepsSection({ steps }: { steps: NonNullable<MarketingPageConfig["steps"]> }) {
  return (
    <section className="border-y border-[var(--im-line)] bg-[var(--im-panel-soft)] py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <SectionHeader
          eyebrow={steps.eyebrow}
          headline={steps.headline}
          body={steps.body}
        />
        <ol className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {steps.items.map((item, index) => (
            <li key={item.title} className="border-t border-[var(--im-line)] pt-5">
              <p className="text-[12px] tabular-nums text-[var(--im-muted)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-[17px] font-semibold tracking-[-0.03em] text-[var(--im-ink)]">
                {item.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--im-ink-soft)]">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function DeepDiveSection({
  deepDive,
}: {
  deepDive: NonNullable<MarketingPageConfig["deepDive"]>;
}) {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 px-5 sm:px-6 md:px-8 lg:grid-cols-12 lg:px-10 xl:px-12">
        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow={deepDive.eyebrow}
            headline={deepDive.headline}
            body={deepDive.body}
          />
          <ul className="mt-6 space-y-3">
            {deepDive.points.map((point) => (
              <li
                key={point}
                className="relative pl-5 text-[15.5px] leading-relaxed text-[var(--im-ink-soft)] before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--im-muted)]"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] lg:col-span-6 lg:aspect-[5/4]">
          <MarketingImage
            src={deepDive.image.src}
            alt={deepDive.image.alt}
            fill
            className="absolute inset-0"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}

export function MarketingStoryPage({ cfg }: { cfg: MarketingPageConfig }) {
  return (
    <>
      <EditorialHero {...cfg.hero} />
      <FeatureBlocks items={cfg.features} />
      {cfg.steps ? <StepsSection steps={cfg.steps} /> : null}
      {cfg.deepDive ? <DeepDiveSection deepDive={cfg.deepDive} /> : null}
      <FinalCTA />
    </>
  );
}
