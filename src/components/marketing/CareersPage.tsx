"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Button,
  CheckIcon,
} from "@inmind/ui";
import { EditorialHero } from "@/components/marketing/EditorialHero";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { marketingShellClass } from "@/components/marketing/MarketingShell";
import { FadeUp } from "@/components/motion/Reveal";
import { careersContent as c } from "@/content/marketing/careers";

export function CareersPage() {
  return (
    <>
      <EditorialHero {...c.hero} />

      <section className="border-y border-[var(--im-line)] bg-[var(--im-panel-soft)] py-16 md:py-20 lg:py-24">
        <div className={marketingShellClass}>
          <SectionHeader
            eyebrow={c.why.eyebrow}
            headline={c.why.headline}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {c.why.items.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.06}>
                <div className="h-full rounded-[20px] border border-[var(--im-line)] bg-[var(--im-panel)] p-6">
                  <h3 className="text-[17px] font-semibold tracking-[-0.03em] text-[var(--im-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--im-ink-soft)]">
                    {item.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section
        id="open-roles"
        className="scroll-mt-28 py-16 md:py-20 lg:py-24"
      >
        <div className={marketingShellClass}>
          <SectionHeader
            eyebrow="Open roles"
            headline="Current opportunities."
            body="Click through to apply. We review every application personally."
          />
          <ul className="mt-10 divide-y divide-[var(--im-line)] rounded-[22px] border border-[var(--im-line)] bg-[var(--im-panel)]">
            {c.openings.map((job, i) => (
              <FadeUp key={job.id} delay={i * 0.04}>
                <li>
                  <Link
                    href={`/contact?role=${job.id}`}
                    className="group flex flex-col gap-3 p-6 transition-colors hover:bg-[var(--im-panel-strong)] sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="min-w-0">
                      <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--im-muted)]">
                        {job.team} · {job.type}
                      </p>
                      <h3 className="mt-1 text-[18px] font-semibold tracking-[-0.03em] text-[var(--im-ink)]">
                        {job.title}
                      </h3>
                      <p className="mt-1 text-[13.5px] text-[var(--im-muted)]">
                        {job.location}
                      </p>
                      <p className="mt-2 max-w-2xl text-[14.5px] leading-relaxed text-[var(--im-ink-soft)]">
                        {job.summary}
                      </p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1 text-[13.5px] font-medium text-[var(--im-ink)]">
                      Apply
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </Link>
                </li>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[var(--im-surface)] py-16 md:py-20 lg:py-24">
        <div
          className={`${marketingShellClass} grid gap-10 lg:grid-cols-12 lg:gap-14`}
        >
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow={c.benefits.eyebrow}
              headline={c.benefits.headline}
            />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {c.benefits.items.map((item) => (
              <li key={item} className="flex gap-3 rounded-[16px] border border-[var(--im-line)] bg-[var(--im-panel)] p-4">
                <CheckIcon
                  size={15}
                  className="mt-0.5 shrink-0 text-[var(--im-violet)]"
                />
                <span className="text-[14.5px] leading-relaxed text-[var(--im-ink-soft)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-[var(--im-line)] bg-[var(--im-panel-soft)] py-16 md:py-20 lg:py-24">
        <div className={marketingShellClass}>
          <SectionHeader
            eyebrow={c.process.eyebrow}
            headline={c.process.headline}
          />
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.process.steps.map((step, index) => (
              <li
                key={step.title}
                className="border-t border-[var(--im-line)] pt-5"
              >
                <p className="text-[12px] tabular-nums text-[var(--im-muted)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-[17px] font-semibold tracking-[-0.03em] text-[var(--im-ink)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--im-ink-soft)]">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <div className={marketingShellClass}>
          <div className="rounded-[24px] border border-[var(--im-line)] bg-[#0a0a0b] p-8 text-white md:p-10">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-[-0.04em]">
              {c.apply.headline}
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/60">
              {c.apply.body}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${c.apply.email}`}
                className="text-[15px] font-medium text-white underline-offset-4 hover:underline"
              >
                {c.apply.email}
              </a>
              <Link href={c.apply.href}>
                <Button variant="secondary" size="md">
                  {c.apply.cta}
                  <ArrowUpRight size={14} className="ml-1.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
