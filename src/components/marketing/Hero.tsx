"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Avatar, Badge, Button, Glass, cn } from "@inmind/ui";
import { MarketingImage } from "@/components/marketing/MarketingImage";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { TextReveal, EASE } from "@/components/motion/Reveal";
import {
  FloatingElement,
  MagneticLayer,
} from "@/components/motion/FloatingElement";
import { home } from "@/content/marketing/home";

function StatCard({
  label,
  value,
  meta,
  className,
}: {
  label: string;
  value: string;
  meta?: string;
  className?: string;
}) {
  return (
    <Glass
      padding="sm"
      className={cn(
        "flex flex-col items-center justify-center text-center shadow-[var(--im-shadow-md)] backdrop-blur-xl",
        className
      )}
    >
      <p className="text-[9.5px] font-medium uppercase tracking-[0.1em] text-[var(--im-muted)] sm:text-[10px]">
        {label}
      </p>
      <p className="mt-1 text-[16px] font-semibold leading-none tracking-[-0.04em] tabular-nums text-[var(--im-ink)] sm:mt-1.5 sm:text-[20px] md:text-[22px]">
        {value}
      </p>
      {meta ? (
        <p className="mt-1 text-[10px] leading-snug text-[var(--im-muted)] sm:mt-1.5 sm:text-[11px]">
          {meta}
        </p>
      ) : null}
    </Glass>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const h = home.hero;

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-16 top-24 h-64 w-64 rounded-full bg-[var(--im-pink)]/10 blur-3xl md:h-72 md:w-72" />
        <div className="absolute bottom-16 right-0 h-64 w-64 rounded-full bg-[var(--im-violet)]/10 blur-3xl md:h-80 md:w-80" />
      </div>

      <div className="h-16 shrink-0 md:h-[4.5rem]" aria-hidden />

      <MarketingShell className="flex flex-1 flex-col justify-center py-4 pb-6 sm:py-6 md:py-10 lg:py-12">
        {/*
          Mobile: copy → CTAs → image
          Desktop: copy+CTAs left, image right
        */}
        <div className="grid flex-1 grid-cols-1 items-center gap-5 sm:gap-6 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* 1. Copy */}
          <div className="order-1 flex min-w-0 flex-col items-center text-center lg:col-span-5 lg:items-start lg:self-end lg:pb-2 lg:text-left">
            <motion.p
              className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--im-muted)]"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease: EASE }}
            >
              {h.eyebrow}
            </motion.p>

            <div className="mt-2.5 w-full md:mt-4">
              <h1 className="sr-only">Influence, intelligently managed.</h1>
              <div aria-hidden="true">
                <TextReveal
                  as="p"
                  nowrap
                  lines={["Influence,", "intelligently managed."]}
                  delay={0.3}
                  className="text-[min(2.85rem,calc((100vw-2.5rem)/10.2))] font-semibold leading-[0.96] tracking-[-0.055em] text-[var(--im-ink)] md:hidden"
                />
                <TextReveal
                  as="p"
                  lines={[...h.headlineLines]}
                  delay={0.3}
                  className="hidden text-[clamp(2.5rem,6.2vw,5.75rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-[var(--im-ink)] md:block"
                />
              </div>
            </div>

            <motion.p
              className="mt-3 max-w-[34rem] text-[14.5px] leading-relaxed text-[var(--im-ink-soft)] sm:mt-4 md:mt-6 md:text-[16.5px]"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.65, ease: EASE }}
            >
              {h.description}
            </motion.p>
          </div>

          {/* 2. CTAs, after description on mobile; under copy on desktop */}
          <div className="order-2 flex min-w-0 flex-col items-center text-center lg:order-3 lg:col-span-5 lg:items-start lg:self-start lg:pt-2 lg:text-left">
            <motion.div
              className="flex w-full max-w-md flex-row items-center justify-center gap-2.5 sm:gap-3 lg:justify-start"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.65, ease: EASE }}
            >
              <Link
                href={h.primaryCta.href}
                className="min-w-0 flex-1 sm:flex-none"
              >
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  className="sm:w-auto"
                >
                  {h.primaryCta.label}
                </Button>
              </Link>
              <Link
                href={h.secondaryCta.href}
                className="min-w-0 flex-1 sm:flex-none"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  fullWidth
                  className="sm:w-auto"
                >
                  {h.secondaryCta.label}
                </Button>
              </Link>
            </motion.div>

            <motion.p
              className="mt-3 max-w-md text-[12px] leading-snug text-[var(--im-muted)] sm:mt-4 md:mt-5 md:text-[13px]"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.6 }}
            >
              {h.trust}
            </motion.p>
          </div>

          {/* 3. Visual, bottom on mobile; right column on desktop */}
          <div className="order-3 relative min-w-0 overflow-visible px-3 pt-2 sm:px-4 lg:order-2 lg:col-span-7 lg:row-span-2 lg:self-center lg:px-0 lg:pt-0">
            <MagneticLayer className="relative mx-auto w-full max-w-[420px] overflow-visible sm:max-w-[520px] lg:ml-auto lg:mr-0 lg:max-w-none">
              <motion.div
                initial={reduce ? false : { opacity: 0, scale: 0.97, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.9, ease: EASE }}
                className="relative mx-auto aspect-[4/5] w-full max-h-[min(38svh,340px)] overflow-hidden rounded-[22px] sm:max-h-[min(48svh,460px)] sm:rounded-[24px] md:max-h-[min(56svh,520px)] md:rounded-[28px] lg:max-h-[min(68svh,620px)] lg:aspect-[5/6]"
              >
                <MarketingImage
                  src="/images/marketing/hero/team-collab.webp"
                  alt="Brand and creator teams collaborating in the studio"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 48vw"
                  className="h-full w-full"
                  objectPosition="center 30%"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              </motion.div>

              {/* 1/4, Creator profile, top-left */}
              <FloatingElement
                className="absolute -left-1 -top-2 z-10 w-[min(168px,68%)] sm:-left-4 sm:-top-4 sm:w-[min(228px,78%)] md:-left-5"
                amplitude={5}
                duration={7}
              >
                <motion.div
                  initial={reduce ? false : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.95, duration: 0.7, ease: EASE }}
                >
                  <Glass
                    padding="md"
                    className="!p-2.5 shadow-[var(--im-shadow-lg)] backdrop-blur-xl sm:!p-5"
                  >
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <Avatar
                        name="Dennis Ombachi"
                        src="/avatars/dennis-ombachi.webp"
                        size="sm"
                        className="sm:hidden"
                      />
                      <Avatar
                        name="Dennis Ombachi"
                        src="/avatars/dennis-ombachi.webp"
                        size="md"
                        className="hidden sm:block"
                      />
                      <div className="min-w-0">
                        <p className="truncate text-[12px] font-semibold tracking-[-0.02em] sm:text-[13.5px]">
                          Dennis Ombachi
                        </p>
                        <p className="text-[10px] text-[var(--im-muted)] sm:text-[11.5px]">
                          Culinary · Nairobi
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 grid grid-cols-3 gap-1 border-t border-[var(--im-line)] pt-2 text-center sm:mt-3 sm:gap-2 sm:pt-3">
                      <div>
                        <p className="text-[11.5px] font-semibold tabular-nums tracking-[-0.02em] sm:text-[13px]">
                          92
                        </p>
                        <p className="mt-0.5 text-[8.5px] uppercase tracking-[0.06em] text-[var(--im-muted)] sm:text-[9.5px]">
                          Score
                        </p>
                      </div>
                      <div>
                        <p className="text-[11.5px] font-semibold tabular-nums tracking-[-0.02em] sm:text-[13px]">
                          1.6M
                        </p>
                        <p className="mt-0.5 text-[8.5px] uppercase tracking-[0.06em] text-[var(--im-muted)] sm:text-[9.5px]">
                          IG
                        </p>
                      </div>
                      <div>
                        <p className="text-[11.5px] font-semibold tabular-nums tracking-[-0.02em] sm:text-[13px]">
                          4.2%
                        </p>
                        <p className="mt-0.5 text-[8.5px] uppercase tracking-[0.06em] text-[var(--im-muted)] sm:text-[9.5px]">
                          ER
                        </p>
                      </div>
                    </div>
                  </Glass>
                </motion.div>
              </FloatingElement>

              {/* 2/4 mobile · desktop also, Live reach, top-right */}
              <FloatingElement
                className="absolute -right-1 -top-2 z-10 w-[96px] sm:-right-4 sm:top-[36%] sm:w-[140px] md:-right-5"
                amplitude={4}
                duration={5.5}
              >
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.05, duration: 0.65, ease: EASE }}
                >
                  <StatCard
                    label="Live reach"
                    value="4.8M"
                    meta="ER 9.4%"
                    className="!p-2.5 sm:!p-4"
                  />
                </motion.div>
              </FloatingElement>

              {/* Desktop only, Match Score */}
              <FloatingElement
                className="absolute -right-2 -top-3 z-10 hidden w-[124px] sm:block md:-right-5 lg:-top-8 xl:-top-10"
                amplitude={6}
                duration={6.5}
              >
                <motion.div
                  initial={reduce ? false : { opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.65, ease: EASE }}
                >
                  <StatCard
                    label="Match Score"
                    value="98%"
                    meta="Audience fit"
                  />
                </motion.div>
              </FloatingElement>

              {/* Desktop only, Shortlist */}
              <FloatingElement
                className="absolute -left-2 top-[42%] z-10 hidden w-[128px] sm:block sm:-left-4 md:-left-5"
                amplitude={5}
                duration={7.2}
              >
                <motion.div
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.15, duration: 0.65, ease: EASE }}
                >
                  <StatCard
                    label="Shortlist"
                    value="24"
                    meta="Creators ranked"
                  />
                </motion.div>
              </FloatingElement>

              {/* 3/4, Trending, bottom-left */}
              <FloatingElement
                className="absolute -bottom-2 -left-1 z-10 w-[92px] sm:-bottom-4 sm:-left-4 sm:w-[124px] md:-left-5 lg:-bottom-8 xl:-bottom-10"
                amplitude={3}
                duration={8}
              >
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6, ease: EASE }}
                >
                  <Glass
                    padding="sm"
                    className="flex flex-col items-center justify-center !p-2 text-center shadow-[var(--im-shadow-md)] backdrop-blur-xl sm:!p-4"
                  >
                    <Badge tone="success" dot>
                      Trending
                    </Badge>
                    <p className="mt-1 text-[16px] font-semibold leading-none tracking-[-0.04em] tabular-nums sm:mt-2 sm:text-[22px]">
                      +32%
                    </p>
                    <p className="mt-1 text-[9.5px] text-[var(--im-muted)] sm:text-[11px]">
                      Vs last campaign
                    </p>
                  </Glass>
                </motion.div>
              </FloatingElement>

              {/* 4/4, ROI, bottom-right */}
              <FloatingElement
                className="absolute -bottom-2 -right-1 z-10 w-[96px] sm:-bottom-4 sm:-right-4 sm:w-[140px] md:-right-5"
                amplitude={4}
                duration={6.8}
              >
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.25, duration: 0.6, ease: EASE }}
                >
                  <StatCard
                    label="ROI"
                    value="3.2×"
                    meta="Vs paid"
                    className="!p-2.5 sm:!p-4"
                  />
                </motion.div>
              </FloatingElement>
            </MagneticLayer>
          </div>
        </div>
      </MarketingShell>
    </section>
  );
}
