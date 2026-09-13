"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Badge,
  Button,
  CheckIcon,
  SearchIcon,
  cn,
} from "@inmind/ui";
import { DonutRing, StackMeter } from "@/components/charts/AnimatedCharts";
import { MarketingImage } from "@/components/marketing/MarketingImage";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { FadeUp } from "@/components/motion/Reveal";
import type { FaqItem } from "@/content/marketing/audiences";

const SHELL =
  "mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12";

/* ------------------------------------------------------------------ shared */

export function FaqSection({
  eyebrow = "Questions",
  headline,
  items,
}: {
  eyebrow?: string;
  headline: string;
  items: FaqItem[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className={cn(SHELL, "grid gap-10 lg:grid-cols-12 lg:gap-14")}>
        <div className="lg:col-span-5">
          <SectionHeader eyebrow={eyebrow} headline={headline} />
        </div>
        <div className="lg:col-span-7">
          <ul className="border-t border-[var(--im-line)]">
            {items.map((item, index) => {
              const isOpen = open === index;
              return (
                <li key={item.q} className="border-b border-[var(--im-line)]">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-[16px] font-medium tracking-[-0.02em] text-[var(--im-ink)] md:text-[17px]">
                      {item.q}
                    </span>
                    <span
                      className={cn(
                        "mt-1 shrink-0 text-[var(--im-muted)] transition-transform duration-300",
                        isOpen && "rotate-45"
                      )}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-5 pr-8 text-[15px] leading-relaxed text-[var(--im-ink-soft)]">
                          {item.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- creators */

export function CreatorProofBand({
  eyebrow,
  stats,
}: {
  eyebrow: string;
  stats: { value: string; label: string }[];
}) {
  return (
    <section className="bg-[#0a0a0b] py-14 text-white md:py-16">
      <div className={SHELL}>
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
          {eyebrow}
        </p>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <FadeUp key={stat.value} delay={i * 0.06}>
              <div className="border-t border-white/15 pt-5">
                <p className="text-[34px] font-semibold tracking-[-0.045em] md:text-[40px]">
                  {stat.value}
                </p>
                <p className="mt-2 max-w-[280px] text-[14px] leading-relaxed text-white/55">
                  {stat.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MediaKitSection({
  content,
}: {
  content: typeof import("@/content/marketing/audiences").creatorsContent.mediaKit;
}) {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className={cn(SHELL, "grid items-center gap-10 lg:grid-cols-12 lg:gap-14")}>
        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow={content.eyebrow}
            headline={content.headline}
            body={content.body}
          />
          <ul className="mt-6 space-y-3">
            {content.points.map((point) => (
              <li key={point} className="flex gap-3">
                <CheckIcon
                  size={15}
                  className="mt-1 shrink-0 text-[var(--im-violet)]"
                />
                <span className="text-[15.5px] leading-relaxed text-[var(--im-ink-soft)]">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6">
          <FadeUp>
            <div className="rounded-[24px] border border-[var(--im-line)] bg-[var(--im-fill)] p-6 shadow-[var(--im-shadow-md)]">
              <div className="flex items-center gap-3.5">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                  <MarketingImage
                    src={content.card.avatar}
                    alt={content.card.name}
                    fill
                    className="absolute inset-0"
                    sizes="56px"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[17px] font-semibold tracking-[-0.03em] text-[var(--im-ink)]">
                    {content.card.name}
                  </p>
                  <p className="text-[13px] text-[var(--im-muted)]">
                    {content.card.handle} · {content.card.niche}
                  </p>
                </div>
                <Badge tone="success" className="ml-auto shrink-0">
                  Verified
                </Badge>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--im-muted)]">
                    Rate card
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {content.card.rates.map((rate) => (
                      <li
                        key={rate.label}
                        className="flex items-baseline justify-between gap-3 border-b border-[var(--im-line)] pb-2.5"
                      >
                        <span className="text-[13.5px] text-[var(--im-ink-soft)]">
                          {rate.label}
                        </span>
                        <span className="text-[13.5px] font-medium tabular-nums text-[var(--im-ink)]">
                          {rate.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--im-muted)]">
                    Audience
                  </p>
                  <div className="mt-3 flex items-center gap-4">
                    <DonutRing
                      segments={content.card.audience}
                      size={104}
                      thickness={11}
                      centerValue="62%"
                      centerSubtext="Kenya"
                    />
                    <ul className="space-y-1.5">
                      {content.card.audience.map((seg) => (
                        <li
                          key={seg.label}
                          className="flex items-center gap-2 text-[12.5px] text-[var(--im-ink-soft)]"
                        >
                          <span
                            className="h-2 w-2 shrink-0 rounded-full"
                            style={{ background: seg.color }}
                          />
                          {seg.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/** Vertical timeline rail, used on the creator journey. */
export function JourneyRail({
  content,
}: {
  content: {
    eyebrow: string;
    headline: string;
    body: string;
    items: { title: string; body: string }[];
  };
}) {
  return (
    <section className="border-y border-[var(--im-line)] bg-[var(--im-panel-soft)] py-16 md:py-20 lg:py-24">
      <div className={cn(SHELL, "grid gap-10 lg:grid-cols-12 lg:gap-14")}>
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              eyebrow={content.eyebrow}
              headline={content.headline}
              body={content.body}
            />
          </div>
        </div>
        <ol className="relative lg:col-span-8">
          <span
            className="absolute left-[15px] top-2 bottom-2 w-px bg-[var(--im-line)]"
            aria-hidden
          />
          {content.items.map((item, index) => (
            <li key={item.title} className="relative pl-12 pb-8 last:pb-0">
              <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--im-line)] bg-[var(--im-fill)] text-[12px] font-medium tabular-nums text-[var(--im-ink)]">
                {index + 1}
              </span>
              <h3 className="text-[17px] font-semibold tracking-[-0.03em] text-[var(--im-ink)]">
                {item.title}
              </h3>
              <p className="mt-1.5 max-w-xl text-[14.5px] leading-relaxed text-[var(--im-ink-soft)]">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function EarningsSection({
  content,
}: {
  content: typeof import("@/content/marketing/audiences").creatorsContent.earnings;
}) {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className={cn(SHELL, "grid items-center gap-10 lg:grid-cols-12 lg:gap-14")}>
        <div className="lg:col-span-6">
          <FadeUp>
            <div className="rounded-[24px] border border-[var(--im-line)] bg-[var(--im-fill)] p-6 shadow-[var(--im-shadow-sm)]">
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--im-muted)]">
                Earnings pipeline
              </p>
              <p className="mt-2 text-[32px] font-semibold tracking-[-0.045em] text-[var(--im-ink)]">
                KES 695,000
              </p>
              <p className="text-[13px] text-[var(--im-muted)]">
                Across 7 active campaigns
              </p>
              <div className="mt-6">
                <StackMeter
                  segments={content.pipeline}
                  totalLabel="Thousands (KES)"
                />
              </div>
            </div>
          </FadeUp>
        </div>
        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow={content.eyebrow}
            headline={content.headline}
            body={content.body}
          />
          <ul className="mt-6 space-y-3">
            {content.notes.map((note) => (
              <li key={note} className="flex gap-3">
                <CheckIcon
                  size={15}
                  className="mt-1 shrink-0 text-[var(--im-violet)]"
                />
                <span className="text-[15.5px] leading-relaxed text-[var(--im-ink-soft)]">
                  {note}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function VoicesSection({
  content,
}: {
  content: typeof import("@/content/marketing/audiences").creatorsContent.voices;
}) {
  return (
    <section className="border-y border-[var(--im-line)] bg-[var(--im-panel-soft)] py-16 md:py-20 lg:py-24">
      <div className={SHELL}>
        <SectionHeader eyebrow={content.eyebrow} headline={content.headline} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {content.quotes.map((q, i) => (
            <FadeUp key={q.name} delay={i * 0.06}>
              <figure className="flex h-full flex-col rounded-[22px] border border-[var(--im-line)] bg-[var(--im-fill)] p-6">
                <blockquote className="flex-1 text-[16px] leading-relaxed tracking-[-0.01em] text-[var(--im-ink)]">
                  “{q.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-[var(--im-line)] pt-5">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <MarketingImage
                      src={q.avatar}
                      alt={q.name}
                      fill
                      className="absolute inset-0"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-[var(--im-ink)]">
                      {q.name}
                    </p>
                    <p className="text-[12.5px] text-[var(--im-muted)]">
                      {q.role}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ brands */

export function OutcomeStats({
  content,
}: {
  content: typeof import("@/content/marketing/audiences").brandsContent.outcomes;
}) {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className={SHELL}>
        <SectionHeader
          eyebrow={content.eyebrow}
          headline={content.headline}
          body={content.body}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.stats.map((stat, i) => (
            <FadeUp key={stat.value + stat.meta} delay={i * 0.06}>
              <div className="h-full rounded-[20px] border border-[var(--im-line)] bg-[var(--im-panel)] p-6">
                <p className="text-[34px] font-semibold tracking-[-0.045em] text-[var(--im-ink)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-[14.5px] leading-snug text-[var(--im-ink-soft)]">
                  {stat.label}
                </p>
                <p className="mt-4 text-[12px] uppercase tracking-[0.1em] text-[var(--im-muted)]">
                  {stat.meta}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Horizontal stepped timeline, used for the brand campaign lifecycle. */
export function LifecycleTimeline({
  content,
}: {
  content: typeof import("@/content/marketing/audiences").brandsContent.lifecycle;
}) {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#0a0a0b] py-16 text-white md:py-20 lg:py-24">
      <div className={SHELL}>
        <SectionHeader
          light
          eyebrow={content.eyebrow}
          headline={content.headline}
          body={content.body}
        />

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
          {content.stages.map((stage, index) => (
            <button
              key={stage.title}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-[13.5px] font-medium transition-colors",
                active === index
                  ? "bg-[var(--im-fill)] text-[#0a0a0b]"
                  : "bg-white/[0.07] text-white/60 hover:bg-white/[0.12] hover:text-white"
              )}
            >
              <span className="mr-2 tabular-nums opacity-60">
                {String(index + 1).padStart(2, "0")}
              </span>
              {stage.title}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-px overflow-hidden rounded-[20px] border border-white/10 bg-white/10 sm:grid-cols-7">
          {content.stages.map((stage, index) => (
            <button
              key={stage.title}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                "group flex flex-col items-start bg-[#0a0a0b] p-4 text-left transition-colors",
                active === index ? "bg-white/[0.06]" : "hover:bg-white/[0.03]"
              )}
            >
              <span
                className={cn(
                  "h-1 w-full rounded-full transition-colors",
                  index <= active ? "bg-[var(--im-violet)]" : "bg-white/15"
                )}
              />
              <span className="mt-3 text-[12.5px] font-medium text-white/80">
                {stage.title}
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-2xl"
          >
            <p className="text-[11px] uppercase tracking-[0.14em] text-white/40">
              Stage {String(active + 1).padStart(2, "0")}
            </p>
            <p className="mt-2 text-[24px] font-semibold tracking-[-0.035em] md:text-[28px]">
              {content.stages[active].title}
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-white/60 md:text-[16px]">
              {content.stages[active].body}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export function ShortlistSection({
  content,
}: {
  content: typeof import("@/content/marketing/audiences").brandsContent.shortlist;
}) {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className={cn(SHELL, "grid items-center gap-10 lg:grid-cols-12 lg:gap-14")}>
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow={content.eyebrow}
            headline={content.headline}
            body={content.body}
          />
          <ul className="mt-6 flex flex-wrap gap-2">
            {content.signals.map((signal) => (
              <li key={signal}>
                <Badge tone="neutral">{signal}</Badge>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <FadeUp>
            <div className="overflow-hidden rounded-[24px] border border-[var(--im-line)] bg-[var(--im-fill)] shadow-[var(--im-shadow-md)]">
              <div className="flex items-center gap-2.5 border-b border-[var(--im-line)] px-5 py-4">
                <SearchIcon size={15} className="shrink-0 text-[var(--im-muted)]" />
                <p className="truncate text-[14px] text-[var(--im-ink-soft)]">
                  {content.query}
                </p>
              </div>
              <ul>
                {content.results.map((result) => (
                  <li
                    key={result.name}
                    className="flex items-center gap-4 border-b border-[var(--im-line)] px-5 py-4 last:border-b-0"
                  >
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                      <MarketingImage
                        src={result.avatar}
                        alt={result.name}
                        fill
                        className="absolute inset-0"
                        sizes="44px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[15px] font-medium tracking-[-0.02em] text-[var(--im-ink)]">
                        {result.name}
                      </p>
                      <p className="truncate text-[12.5px] text-[var(--im-muted)]">
                        {result.meta}
                      </p>
                    </div>
                    <div className="w-24 shrink-0 sm:w-32">
                      <div className="h-1.5 overflow-hidden rounded-full bg-[var(--im-surface)]">
                        <span
                          className="block h-full rounded-full bg-[var(--im-violet)]"
                          style={{ width: `${result.score}%` }}
                        />
                      </div>
                    </div>
                    <p className="w-10 shrink-0 text-right text-[14px] font-medium tabular-nums text-[var(--im-ink)]">
                      {result.score}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

export function ComparisonSection({
  content,
}: {
  content: typeof import("@/content/marketing/audiences").brandsContent.comparison;
}) {
  return (
    <section className="border-y border-[var(--im-line)] bg-[var(--im-panel-soft)] py-16 md:py-20 lg:py-24">
      <div className={SHELL}>
        <SectionHeader
          eyebrow={content.eyebrow}
          headline={content.headline}
          body={content.body}
        />
        <div className="mt-10 overflow-hidden rounded-[20px] border border-[var(--im-line)] bg-[var(--im-fill)]">
          <div className="hidden grid-cols-[1fr_1.3fr_1.3fr] gap-4 border-b border-[var(--im-line)] px-6 py-4 md:grid">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--im-muted)]">
              Dimension
            </p>
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--im-muted)]">
              Paid media alone
            </p>
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--im-violet)]">
              Creator-led
            </p>
          </div>
          {content.rows.map((row) => (
            <div
              key={row.dimension}
              className="grid gap-2 border-b border-[var(--im-line)] px-6 py-5 last:border-b-0 md:grid-cols-[1fr_1.3fr_1.3fr] md:gap-4"
            >
              <p className="text-[15px] font-medium tracking-[-0.02em] text-[var(--im-ink)]">
                {row.dimension}
              </p>
              <p className="text-[14.5px] leading-relaxed text-[var(--im-muted)]">
                {row.paid}
              </p>
              <p className="text-[14.5px] leading-relaxed text-[var(--im-ink-soft)]">
                {row.creator}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- agencies */

export function MissionControlSection({
  content,
}: {
  content: typeof import("@/content/marketing/audiences").agenciesContent.control;
}) {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className={cn(SHELL, "grid items-center gap-10 lg:grid-cols-12 lg:gap-14")}>
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow={content.eyebrow}
            headline={content.headline}
            body={content.body}
          />
          <ul className="mt-6 space-y-3">
            {content.points.map((point) => (
              <li key={point} className="flex gap-3">
                <CheckIcon
                  size={15}
                  className="mt-1 shrink-0 text-[var(--im-violet)]"
                />
                <span className="text-[15.5px] leading-relaxed text-[var(--im-ink-soft)]">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <FadeUp>
            <div className="overflow-hidden rounded-[24px] border border-[var(--im-line)] bg-[var(--im-fill)] shadow-[var(--im-shadow-md)]">
              <div className="flex items-center justify-between border-b border-[var(--im-line)] px-5 py-4">
                <p className="text-[14px] font-medium tracking-[-0.02em] text-[var(--im-ink)]">
                  Client book
                </p>
                <p className="text-[12.5px] text-[var(--im-muted)]">
                  10 active campaigns
                </p>
              </div>
              <ul>
                {content.clients.map((client) => (
                  <li
                    key={client.name}
                    className="border-b border-[var(--im-line)] px-5 py-4 last:border-b-0"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                      <p className="text-[15px] font-medium tracking-[-0.02em] text-[var(--im-ink)]">
                        {client.name}
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-[12.5px] text-[var(--im-muted)]">
                          {client.campaigns} campaigns
                        </span>
                        <Badge tone={client.tone} dot>
                          {client.stage}
                        </Badge>
                      </div>
                    </div>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[var(--im-surface)]">
                      <span
                        className="block h-full rounded-full bg-[var(--im-ink)]"
                        style={{ width: `${client.progress}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

export function RosterSection({
  content,
}: {
  content: typeof import("@/content/marketing/audiences").agenciesContent.roster;
}) {
  return (
    <section className="border-y border-[var(--im-line)] bg-[var(--im-panel-soft)] py-16 md:py-20 lg:py-24">
      <div className={SHELL}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow={content.eyebrow}
            headline={content.headline}
            body={content.body}
          />
          <ul className="flex flex-wrap gap-2">
            {content.pools.map((pool) => (
              <li key={pool}>
                <Badge tone="neutral">{pool}</Badge>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {content.creators.map((creator, i) => (
            <FadeUp key={creator.name} delay={i * 0.04}>
              <div className="group overflow-hidden rounded-[18px] border border-[var(--im-line)] bg-[var(--im-fill)]">
                <div className="relative aspect-square overflow-hidden">
                  <MarketingImage
                    src={creator.src}
                    alt={creator.name}
                    fill
                    hoverZoom
                    className="absolute inset-0"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  {creator.managed ? (
                    <span className="absolute left-2.5 top-2.5 rounded-full bg-[var(--im-panel-strong)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.08em] text-[var(--im-ink)] backdrop-blur-sm">
                      Managed
                    </span>
                  ) : null}
                </div>
                <div className="p-3.5">
                  <p className="truncate text-[14px] font-medium tracking-[-0.02em] text-[var(--im-ink)]">
                    {creator.name}
                  </p>
                  <p className="text-[12.5px] text-[var(--im-muted)]">
                    {creator.niche}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CommissionsSection({
  content,
}: {
  content: typeof import("@/content/marketing/audiences").agenciesContent.commissions;
}) {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className={cn(SHELL, "grid items-center gap-10 lg:grid-cols-12 lg:gap-14")}>
        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow={content.eyebrow}
            headline={content.headline}
            body={content.body}
          />
          <ul className="mt-6 space-y-3">
            {content.points.map((point) => (
              <li key={point} className="flex gap-3">
                <CheckIcon
                  size={15}
                  className="mt-1 shrink-0 text-[var(--im-violet)]"
                />
                <span className="text-[15.5px] leading-relaxed text-[var(--im-ink-soft)]">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6">
          <FadeUp>
            <div className="rounded-[24px] border border-[var(--im-line)] bg-[var(--im-fill)] p-6 shadow-[var(--im-shadow-sm)]">
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--im-muted)]">
                Campaign budget split
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-6">
                <DonutRing
                  segments={content.split}
                  size={140}
                  thickness={14}
                  centerValue="26%"
                  centerSubtext="Commission"
                />
                <ul className="space-y-3">
                  {content.split.map((seg) => (
                    <li key={seg.label} className="flex items-center gap-2.5">
                      <span
                        className="h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{ background: seg.color }}
                      />
                      <span className="text-[14px] text-[var(--im-ink-soft)]">
                        {seg.label}
                      </span>
                      <span className="text-[14px] font-medium tabular-nums text-[var(--im-ink)]">
                        {seg.value}%
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/** Three-column numbered grid, used for the agency workflow. */
export function WorkflowColumns({
  content,
}: {
  content: {
    eyebrow: string;
    headline: string;
    body: string;
    items: { title: string; body: string }[];
  };
}) {
  return (
    <section className="bg-[#0a0a0b] py-16 text-white md:py-20 lg:py-24">
      <div className={SHELL}>
        <SectionHeader
          light
          eyebrow={content.eyebrow}
          headline={content.headline}
          body={content.body}
        />
        <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item, index) => (
            <li key={item.title} className="border-t border-white/15 pt-5">
              <p className="text-[12px] tabular-nums text-white/40">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-[17px] font-semibold tracking-[-0.03em] text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-white/55">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ shared */

export function RelatedResources({
  eyebrow,
  headline,
  href,
  linkLabel,
  children,
}: {
  eyebrow: string;
  headline: string;
  href: string;
  linkLabel: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className={SHELL}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader eyebrow={eyebrow} headline={headline} />
          <Link href={href}>
            <Button variant="secondary" size="sm">
              {linkLabel}
              <ArrowUpRight size={14} className="ml-1.5" />
            </Button>
          </Link>
        </div>
        <div className="mt-10 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {children}
        </div>
      </div>
    </section>
  );
}
