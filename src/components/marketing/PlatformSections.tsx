"use client";

import Link from "next/link";
import { ArrowUpRight, cn, Glass } from "@inmind/ui";
import { MarketingImage } from "@/components/marketing/MarketingImage";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { FadeUp } from "@/components/motion/Reveal";
import type { PlatformRichPage } from "@/content/marketing/platform-pages";
const SHELL =
  "mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12";

export function ModuleNavGrid({
  modules,
}: {
  modules: NonNullable<PlatformRichPage["modules"]>;
}) {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className={SHELL}>
        <SectionHeader
          eyebrow="Modules"
          headline={"Explore the\nfull platform."}
          body="Each module is connected to the same creator graph, campaign record and performance layer."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod, i) => (
            <FadeUp key={mod.href} delay={i * 0.05}>
              <Link
                href={mod.href}
                className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-[var(--im-line)] bg-[var(--im-panel)] transition-[box-shadow,border-color] hover:border-[var(--im-ink)]/15 hover:shadow-[var(--im-shadow-md)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <MarketingImage
                    src={mod.image}
                    alt={mod.label}
                    fill
                    hoverZoom
                    className="absolute inset-0"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[17px] font-semibold tracking-[-0.03em] text-[var(--im-ink)]">
                      {mod.label}
                    </h3>
                    <ArrowUpRight
                      size={16}
                      className="mt-0.5 shrink-0 text-[var(--im-muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--im-ink)]"
                    />
                  </div>
                  <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-[var(--im-ink-soft)]">
                    {mod.description}
                  </p>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SpotlightSection({
  spotlight,
}: {
  spotlight: NonNullable<PlatformRichPage["spotlight"]>;
}) {
  const textCol = (
    <div className="lg:col-span-6">
      <SectionHeader
        eyebrow={spotlight.eyebrow}
        headline={spotlight.headline}
        body={spotlight.body}
      />
      <ul className="mt-6 space-y-3">
        {spotlight.points.map((point) => (
          <li
            key={point}
            className="relative pl-5 text-[15.5px] leading-relaxed text-[var(--im-ink-soft)] before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--im-muted)]"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );

  const imageCol = (
    <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] lg:col-span-6 lg:aspect-[5/4]">
      <MarketingImage
        src={spotlight.image.src}
        alt={spotlight.image.alt}
        fill
        className="absolute inset-0"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  );

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div
        className={cn(
          SHELL,
          "grid items-center gap-10 lg:grid-cols-12 lg:gap-14"
        )}
      >
        {spotlight.reverse ? (
          <>
            {imageCol}
            {textCol}
          </>
        ) : (
          <>
            {textCol}
            {imageCol}
          </>
        )}
      </div>
    </section>
  );
}

export function SocialPerformanceGrid({
  posts,
}: {
  posts: NonNullable<PlatformRichPage["socialPosts"]>;
}) {
  return (
    <section className="border-y border-[var(--im-line)] bg-[var(--im-panel-soft)] py-16 md:py-20 lg:py-24">
      <div className={SHELL}>
        <SectionHeader
          eyebrow="Live posts"
          headline={"Performance as\ncontent goes live."}
          body="Every post in the campaign context: views, engagement and lift against expectations."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {posts.map((post, i) => (
            <FadeUp key={post.img} delay={i * 0.08}>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-[22px]">
                <MarketingImage
                  src={post.img}
                  alt="Campaign content performance"
                  fill
                  hoverZoom
                  className="absolute inset-0"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-x-3 bottom-3 flex gap-2">
                  <Glass padding="sm" className="flex-1 !bg-[var(--im-panel-strong)]">
                    <p className="text-[10px] uppercase text-[var(--im-muted)]">
                      Views
                    </p>
                    <p className="text-[18px] font-semibold tabular-nums">
                      {post.views}
                    </p>
                  </Glass>
                  <Glass padding="sm" className="flex-1 !bg-[var(--im-panel-strong)]">
                    <p className="text-[10px] uppercase text-[var(--im-muted)]">
                      ER
                    </p>
                    <p className="text-[18px] font-semibold tabular-nums">
                      {post.er}
                    </p>
                  </Glass>
                  <Glass padding="sm" className="flex-1 !bg-[var(--im-panel-strong)]">
                    <p className="text-[10px] uppercase text-[var(--im-muted)]">
                      Lift
                    </p>
                    <p className="text-[18px] font-semibold tabular-nums text-emerald-600">
                      {post.lift}
                    </p>
                  </Glass>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AiInsightsPanel({
  insights,
}: {
  insights: NonNullable<PlatformRichPage["insights"]>;
}) {
  return (
    <section className="bg-[#0a0a0b] py-16 text-white md:py-20 lg:py-24">
      <div className={SHELL}>
        <SectionHeader
          light
          eyebrow={insights.eyebrow}
          headline={insights.headline}
          body={insights.body}
        />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {insights.items.map((item, i) => (
            <FadeUp key={item} delay={i * 0.04}>
              <li className="flex gap-3 rounded-[16px] border border-white/10 bg-white/[0.04] p-4">
                <span
                  className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--im-violet)]"
                  aria-hidden
                />
                <p className="text-[14.5px] leading-relaxed text-white/75">
                  {item}
                </p>
              </li>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CampaignLifecycleBand({
  workflow,
}: {
  workflow: NonNullable<PlatformRichPage["workflow"]>;
}) {
  if (workflow.items.length >= 6) {
    return (
      <section className="bg-[#0a0a0b] py-16 text-white md:py-20 lg:py-24">
        <div className={SHELL}>
          <SectionHeader
            light
            eyebrow={workflow.eyebrow}
            headline={workflow.headline}
            body={workflow.body}
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-[20px] border border-white/10 bg-white/10 sm:grid-cols-7">
            {workflow.items.map((item, index) => (
              <div
                key={item.title}
                className="bg-[#0a0a0b] p-4 text-left sm:p-5"
              >
                <p className="text-[11px] tabular-nums text-white/40">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-[14px] font-semibold tracking-[-0.02em] text-white">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/50">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return null;
}
