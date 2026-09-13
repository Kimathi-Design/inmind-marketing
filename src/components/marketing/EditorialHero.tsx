"use client";

import Link from "next/link";
import { Button, ArrowUpRight, cn } from "@inmind/ui";
import { TextReveal } from "@/components/motion/Reveal";
import { MarketingImage } from "@/components/marketing/MarketingImage";

export function EditorialHero({
  eyebrow,
  headline,
  body,
  primaryCta,
  secondaryCta,
  image,
  dark = false,
}: {
  eyebrow?: string;
  headline: string;
  body: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: { src: string; alt: string };
  dark?: boolean;
}) {
  const lines = headline.split("\n");
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24",
        dark ? "bg-[#0a0a0b] text-white" : ""
      )}
    >
      <div className="mx-auto grid w-full max-w-[1440px] items-end gap-10 px-5 sm:px-6 md:px-8 lg:grid-cols-12 lg:px-10 xl:px-12">
        <div className={cn(image ? "lg:col-span-6" : "lg:col-span-9")}>
          {eyebrow ? (
            <p
              className={cn(
                "text-[11px] font-medium uppercase tracking-[0.16em]",
                dark ? "text-white/45" : "text-[var(--im-muted)]"
              )}
            >
              {eyebrow}
            </p>
          ) : null}
          <TextReveal
            lines={lines}
            className={cn(
              "mt-4 text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.05em]",
              dark ? "text-white" : "text-[var(--im-ink)]"
            )}
          />
          <p
            className={cn(
              "mt-6 max-w-xl text-[16px] leading-relaxed md:text-[17px]",
              dark ? "text-white/65" : "text-[var(--im-ink-soft)]"
            )}
          >
            {body}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
              {primaryCta ? (
                <Link href={primaryCta.href} className="w-full sm:w-auto">
                  <Button
                    variant={dark ? "secondary" : "primary"}
                    size="lg"
                    fullWidth
                    className="sm:w-auto"
                  >
                    {primaryCta.label}
                    <ArrowUpRight size={14} className="ml-1.5" />
                  </Button>
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link href={secondaryCta.href} className="w-full sm:w-auto">
                  <Button
                    variant={dark ? "ghost" : "secondary"}
                    size="lg"
                    fullWidth
                    className={cn(
                      "sm:w-auto",
                      dark && "text-white hover:bg-[var(--im-panel-strong)]/10"
                    )}
                  >
                    {secondaryCta.label}
                  </Button>
                </Link>
              ) : null}
            </div>
          )}
        </div>
        {image ? (
          <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] lg:col-span-6 lg:aspect-[5/4]">
            <MarketingImage
              src={image.src}
              alt={image.alt}
              fill
              priority
              className="absolute inset-0"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function FeatureBlocks({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <section className="pb-20 md:pb-28">
      <div className="mx-auto grid w-full max-w-[1440px] gap-4 px-5 sm:grid-cols-2 sm:px-6 md:px-8 lg:grid-cols-3 lg:px-10 xl:px-12">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-[20px] border border-[var(--im-line)] bg-[var(--im-panel)] p-6"
          >
            <h3 className="text-[18px] font-semibold tracking-[-0.03em]">
              {item.title}
            </h3>
            <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--im-ink-soft)]">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
