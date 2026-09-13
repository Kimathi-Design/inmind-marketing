import Link from "next/link";
import {
  EditorialHero,
} from "@/components/marketing/EditorialHero";
import { FinalCTA } from "@/components/marketing/HomeSections";
import { MarketingImage } from "@/components/marketing/MarketingImage";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { marketingShellClass } from "@/components/marketing/MarketingShell";
import { FadeUp } from "@/components/motion/Reveal";
import { aboutContent as c } from "@/content/marketing/about";
import { ArrowUpRight } from "@inmind/ui";

export function AboutPage() {
  return (
    <>
      <EditorialHero {...c.hero} />

      <section className="border-y border-[var(--im-line)] bg-[var(--im-panel-soft)] py-16 md:py-20 lg:py-24">
        <div className={marketingShellClass}>
          <SectionHeader
            eyebrow={c.beliefs.eyebrow}
            headline={c.beliefs.headline}
            body={c.beliefs.body}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {c.beliefs.items.map((item, i) => (
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

      <section className="py-16 md:py-20 lg:py-24">
        <div
          className={`${marketingShellClass} grid items-center gap-10 lg:grid-cols-12 lg:gap-14`}
        >
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow={c.story.eyebrow}
              headline={c.story.headline}
              body={c.story.body}
            />
            <ul className="mt-6 space-y-3">
              {c.story.points.map((point) => (
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
              src={c.story.image.src}
              alt={c.story.image.alt}
              fill
              className="absolute inset-0"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--im-surface)] py-16 md:py-20 lg:py-24">
        <div className={marketingShellClass}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-[20px] border border-[var(--im-line)] bg-[var(--im-panel)] p-6"
              >
                <h3 className="text-[16px] font-semibold tracking-[-0.03em] text-[var(--im-ink)]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--im-ink-soft)]">
                  {pillar.body}
                </p>
                {"href" in pillar && pillar.href ? (
                  <Link
                    href={pillar.href}
                    className="mt-4 inline-flex items-center gap-1 text-[13.5px] font-medium text-[var(--im-ink)] hover:text-[var(--im-violet)]"
                  >
                    View careers
                    <ArrowUpRight size={13} />
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
