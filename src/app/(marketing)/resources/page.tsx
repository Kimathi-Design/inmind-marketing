import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@inmind/ui";
import { EditorialHero } from "@/components/marketing/EditorialHero";
import { FinalCTA } from "@/components/marketing/HomeSections";
import { ResourceCard } from "@/components/marketing/ResourceCard";
import {
  RESOURCE_COLLECTIONS,
  RESOURCES,
  resourcesByKind,
} from "@/content/marketing/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Case studies, insights and long-form strategy writing on creator marketing, campaign operations and measurement.",
};

const featured = RESOURCES.find((r) => r.slug === "influence-intelligence-trends-2026")!;

export default function Page() {
  return (
    <>
      <EditorialHero
        eyebrow="Resources"
        headline={"Understand what's shaping\nthe creator economy."}
        body="Case studies from live campaigns, market intelligence on where budgets are moving, and long-form strategy writing from the InMind team."
        primaryCta={{ label: "Read case studies", href: "/resources/case-studies" }}
        secondaryCta={{ label: "Browse insights", href: "/resources/insights" }}
        image={{
          src: "/images/marketing/editorial/film-01.webp",
          alt: "Editorial photography",
        }}
      />

      <section className="pb-16 md:pb-20">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="grid gap-4 sm:grid-cols-3">
            {RESOURCE_COLLECTIONS.map((collection) => (
              <Link
                key={collection.kind}
                href={`/resources/${collection.slug}`}
                className="group rounded-[20px] border border-[var(--im-line)] bg-white/60 p-6 transition-colors hover:border-[var(--im-ink)]/25"
              >
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-[18px] font-semibold tracking-[-0.03em]">
                    {collection.label}
                  </h2>
                  <ArrowUpRight
                    size={15}
                    className="mt-1 text-[var(--im-muted)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--im-ink-soft)]">
                  {collection.description}
                </p>
                <p className="mt-4 text-[13px] text-[var(--im-muted)]">
                  {resourcesByKind(collection.kind).length} pieces
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--im-muted)]">
            Featured
          </p>
          <div className="mt-5 max-w-3xl">
            <ResourceCard resource={featured} size="lg" />
          </div>
        </div>
      </section>

      {RESOURCE_COLLECTIONS.map((collection) => (
        <section key={collection.kind} className="pb-16 md:pb-20">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <h2 className="text-[clamp(1.6rem,3vw,2.25rem)] font-semibold leading-[1.1] tracking-[-0.04em]">
                  {collection.title}
                </h2>
                <p className="mt-2.5 text-[15px] leading-relaxed text-[var(--im-ink-soft)]">
                  {collection.description}
                </p>
              </div>
              <Link
                href={`/resources/${collection.slug}`}
                className="group inline-flex items-center gap-1.5 text-[14.5px] font-medium text-[var(--im-ink)]"
              >
                View all {collection.label.toLowerCase()}
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
            <div className="mt-7 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {resourcesByKind(collection.kind)
                .slice(0, 3)
                .map((resource) => (
                  <ResourceCard key={resource.slug} resource={resource} />
                ))}
            </div>
          </div>
        </section>
      ))}

      <FinalCTA />
    </>
  );
}
