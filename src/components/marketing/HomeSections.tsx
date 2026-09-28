"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Avatar,
  Badge,
  Button,
  Glass,
  SocialIcon,
  cn,
} from "@inmind/ui";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { MarketingImage } from "@/components/marketing/MarketingImage";
import { FadeUp, Stagger, StaggerItem, EASE } from "@/components/motion/Reveal";
import { creatorWall, home } from "@/content/marketing/home";
import { ResourceCard } from "@/components/marketing/ResourceCard";
import {
  RESOURCE_COLLECTIONS,
  resourcesByKind,
} from "@/content/marketing/resources";
import {
  SparkArea,
  MiniBars,
  trendSeries,
} from "@/components/charts/AnimatedCharts";

export function PartnersMarquee() {
  const p = home.partners;
  const logos = [...p.logos, ...p.logos];

  return (
    <section className="relative overflow-hidden border-b border-[var(--im-line)] bg-[var(--im-panel-soft)] py-14 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--im-muted)]">
              {p.eyebrow}
            </p>
            <h2 className="mt-3 whitespace-pre-line text-[clamp(1.75rem,3.8vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-[var(--im-ink)]">
              {p.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--im-ink-soft)] md:text-[16px]">
              {p.body}
            </p>
          </div>
        </FadeUp>
      </div>

      <div className="relative mt-10 md:mt-12">
        <div className="im-marquee-fade overflow-hidden">
          <ul
            className="im-marquee-track flex items-center gap-10 py-2 sm:gap-14 md:gap-16"
            aria-label="Partner and client logos"
          >
            {logos.map((logo, i) => {
              const scale = "scale" in logo ? logo.scale : undefined;
              return (
                <li
                  key={`${logo.name}-${i}`}
                  className={cn(
                    "group/logo flex shrink-0 touch-manipulation items-center",
                    scale === "xl"
                      ? "h-[4.75rem] sm:h-[5.5rem] md:h-24"
                      : scale === "sm"
                        ? "h-8 sm:h-9 md:h-10"
                        : scale === "xs"
                          ? "h-7 sm:h-8 md:h-9"
                          : "h-10 sm:h-11 md:h-12"
                  )}
                  onPointerDown={(e) => {
                    e.currentTarget.dataset.pressed = "";
                  }}
                  onPointerUp={(e) => {
                    delete e.currentTarget.dataset.pressed;
                  }}
                  onPointerCancel={(e) => {
                    delete e.currentTarget.dataset.pressed;
                  }}
                  onPointerLeave={(e) => {
                    delete e.currentTarget.dataset.pressed;
                  }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={360}
                    height={96}
                    draggable={false}
                    className="pointer-events-none h-full w-auto object-contain opacity-75 grayscale transition-[opacity,filter] duration-300 group-hover/logo:opacity-100 group-hover/logo:grayscale-0 group-data-[pressed]/logo:opacity-100 group-data-[pressed]/logo:grayscale-0 dark:opacity-100 dark:grayscale-0"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function TrustStrip() {
  const t = home.trustStrip;
  const platforms = t.platforms;
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-y border-[var(--im-line)] bg-[var(--im-surface)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55] dark:opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 120% at 10% 50%, color-mix(in srgb, var(--im-fill) 90%, transparent), transparent 55%), radial-gradient(ellipse 50% 100% at 90% 40%, color-mix(in srgb, var(--im-ink) 6%, transparent), transparent 50%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--im-ink)]/15 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-6 md:px-8 md:py-16 lg:px-10 lg:py-20 xl:px-12">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--im-muted)]">
              {t.eyebrow}
            </p>
            <h2 className="mt-3 whitespace-pre-line text-[clamp(1.75rem,3.8vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-[var(--im-ink)]">
              {t.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--im-ink-soft)] md:text-[16px]">
              {t.body}
            </p>
          </div>
        </FadeUp>

        <Stagger
          className="relative mx-auto mt-10 flex max-w-3xl flex-wrap items-end justify-center gap-5 sm:gap-6 md:mt-12 md:gap-8 lg:max-w-6xl lg:gap-14 xl:max-w-7xl xl:gap-16"
          stagger={0.07}
        >
          <span
            className="pointer-events-none absolute left-[6%] right-[6%] top-[28px] hidden h-px bg-gradient-to-r from-transparent via-[var(--im-ink)]/20 to-transparent sm:block md:top-[34px]"
            aria-hidden
          />
          {platforms.map((p, i) => (
            <StaggerItem key={p.name}>
              <motion.div
                className="group relative flex flex-col items-center gap-2.5"
                animate={
                  reduce
                    ? undefined
                    : { y: [0, i % 2 === 0 ? -5 : 5, 0] }
                }
                transition={{
                  duration: 4.2 + i * 0.35,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              >
                <div
                  className={cn(
                    "relative flex h-14 w-14 items-center justify-center rounded-[18px] border border-[var(--im-glass-border)] bg-[var(--im-fill)] shadow-[var(--im-shadow-md)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:h-16 md:w-16 md:rounded-[20px]",
                    "group-hover:-translate-y-1 group-hover:shadow-[var(--im-shadow-lg)]"
                  )}
                >
                  <SocialIcon platform={p.icon} size={26} />
                </div>
                <span className="text-[12px] font-medium tracking-[-0.01em] text-[var(--im-ink)]/55 transition-colors group-hover:text-[var(--im-ink)]">
                  {p.name}
                </span>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function Manifesto() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 0% 20%, rgba(10,10,11,0.04), transparent 55%), radial-gradient(ellipse 45% 55% at 100% 85%, rgba(10,10,11,0.03), transparent 50%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-6 md:gap-14 md:px-8 lg:grid-cols-12 lg:items-end lg:px-10 xl:px-12">
        <div className="lg:col-span-7">
          <FadeUp>
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--im-muted)]">
              The shift
            </p>
          </FadeUp>
          <FadeUp delay={0.06}>
            <h2 className="mt-4 max-w-[18ch] whitespace-pre-line text-[clamp(2.35rem,5.2vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-[var(--im-ink)]">
              {home.manifesto.headline}
            </h2>
          </FadeUp>

          <div className="mt-8 max-w-xl space-y-5 border-l border-[var(--im-ink)]/15 pl-5 md:pl-6">
            {home.manifesto.body.map((p, i) => (
              <FadeUp key={p} delay={0.1 + i * 0.08}>
                <p
                  className={cn(
                    "text-[16.5px] leading-relaxed md:text-[17px]",
                    i === home.manifesto.body.length - 1
                      ? "font-medium text-[var(--im-ink)]"
                      : "text-[var(--im-ink-soft)]"
                  )}
                >
                  {p}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>

        <Stagger className="flex flex-col gap-0 lg:col-span-5" stagger={0.1}>
          {home.manifesto.words.map((w, i) => (
            <StaggerItem key={w.label}>
              <div
                className={cn(
                  "flex items-baseline gap-5 border-t border-[var(--im-line)] py-5 last:border-b sm:gap-6",
                  i === 0 && "border-t-[var(--im-ink)]/25"
                )}
              >
                <span className="w-8 shrink-0 text-[11px] font-medium tabular-nums tracking-[0.12em] text-[var(--im-muted)]">
                  {w.n}
                </span>
                <span className="text-[clamp(1.65rem,3vw,2.35rem)] font-semibold tracking-[-0.04em] text-[var(--im-ink)]">
                  {w.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function PlatformOverview() {
  const [active, setActive] = useState(0);
  const m = home.platform.modules[active];
  return (
    <section className="bg-[var(--im-surface)] py-16 sm:py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <SectionHeader
          eyebrow={home.platform.eyebrow}
          headline={home.platform.headline}
          body={home.platform.body}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="flex flex-col gap-2 lg:col-span-4">
            {home.platform.modules.map((mod, i) => (
              <button
                key={mod.id}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "rounded-[16px] border px-4 py-4 text-left transition-colors",
                  active === i
                    ? "border-[var(--im-ink)] bg-[var(--im-ink)] text-[var(--im-on-ink)]"
                    : "border-[var(--im-line)] bg-[var(--im-panel)] text-[var(--im-ink)] hover:bg-[var(--im-panel-strong)]"
                )}
              >
                <p className="text-[11px] uppercase tracking-[0.1em] opacity-60">
                  {mod.id}
                </p>
                <p className="mt-1 text-[18px] font-semibold tracking-[-0.03em]">
                  {mod.title}
                </p>
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="relative min-h-[320px] overflow-hidden rounded-[24px] lg:col-span-8"
            >
              <MarketingImage
                src={m.image}
                alt={m.title}
                fill
                className="absolute inset-0"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/60">
                  {m.id} · {m.title}
                </p>
                <p className="mt-2 max-w-lg text-[20px] font-medium leading-snug tracking-[-0.03em] text-white md:text-[24px]">
                  {m.copy}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export function DiscoverySection() {
  const d = home.discovery;
  const matches = [
    { name: "Kariuki K.", score: 98, src: "/avatars/kariuki-kamau.webp" },
    { name: "Bien B.", score: 95, src: "/avatars/bien-baraza.webp" },
    { name: "Janet M.", score: 92, src: "/avatars/janet-mbugua.webp" },
  ];
  const filters = [
    { label: "Location", value: "Kenya · Nairobi" },
    { label: "Audience", value: "Gen Z · 18-24" },
    { label: "Category", value: "Food · Culture" },
    { label: "Platforms", value: "TikTok · Instagram" },
  ];
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1440px] items-stretch gap-10 px-5 sm:px-6 md:gap-12 md:px-8 lg:grid-cols-12 lg:px-10 xl:px-12">
        <div className="flex flex-col lg:col-span-5 lg:h-full lg:justify-between lg:gap-10">
          <div>
            <SectionHeader
              eyebrow={d.eyebrow}
              headline={d.headline}
              body={d.body}
            />
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--im-ink-soft)] md:text-[15.5px]">
              {d.detail}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {d.points.map((p) => (
                <li key={p}>
                  <Badge tone="neutral">{p}</Badge>
                </li>
              ))}
            </ul>
          </div>
          <Link href={d.cta.href} className="mt-8 inline-flex lg:mt-0">
            <Button variant="primary" size="md">
              {d.cta.label}
              <ArrowUpRight size={14} className="ml-1.5" />
            </Button>
          </Link>
        </div>

        <div className="flex flex-col gap-3 lg:col-span-7 lg:h-full lg:justify-center">
          <Glass
            padding="md"
            className="shadow-[var(--im-shadow-md)]"
          >
            <p className="text-[11px] uppercase tracking-[0.1em] text-[var(--im-muted)]">
              Natural language search
            </p>
            <motion.p
              className="mt-3 font-mono text-[14px] text-[var(--im-ink)] md:text-[15px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              “{d.query}”
            </motion.p>
            <ul className="mt-5 space-y-2 pb-0.5">
              {matches.map((m, i) => (
                <motion.li
                  key={m.name}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * i, duration: 0.5, ease: EASE }}
                  className="flex items-center justify-between rounded-[14px] border border-[var(--im-line)] bg-[var(--im-panel-strong)] px-3 py-3"
                >
                  <div className="flex items-center gap-3">
                    <Avatar name={m.name} src={m.src} size="sm" />
                    <p className="text-[14px] font-medium">{m.name}</p>
                  </div>
                  <Badge tone="accent">{m.score}% Match</Badge>
                </motion.li>
              ))}
            </ul>
          </Glass>

          <Glass
            padding="md"
            className="shadow-[var(--im-shadow-md)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-[11px] uppercase tracking-[0.1em] text-[var(--im-muted)]">
                Active filters
              </p>
              <Badge tone="success" dot>
                3 ranked
              </Badge>
            </div>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {filters.map((f, i) => (
                <motion.li
                  key={f.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.45, ease: EASE }}
                  className="rounded-[14px] border border-[var(--im-line)] bg-[var(--im-panel-strong)] px-3 py-2.5"
                >
                  <p className="text-[10px] uppercase tracking-[0.08em] text-[var(--im-muted)]">
                    {f.label}
                  </p>
                  <p className="mt-0.5 text-[13.5px] font-medium tracking-[-0.02em]">
                    {f.value}
                  </p>
                </motion.li>
              ))}
            </ul>
            <p className="mt-4 text-[12.5px] leading-relaxed text-[var(--im-muted)]">
              Match Score™ prioritises audience fit, authenticity and brand
              alignment, not just reach.
            </p>
          </Glass>
        </div>
      </div>
    </section>
  );
}

export function CreatorWall() {
  return (
    <section className="overflow-hidden py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto mb-10 w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <SectionHeader
          eyebrow="Creators"
          headline="Creators who move culture."
          body="An editorial view of the talent landscape, rather than a conventional marketplace grid."
        />
      </div>
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-2 gap-3 px-5 sm:px-6 md:grid-cols-3 md:gap-4 md:px-8 lg:grid-cols-6 lg:px-10 xl:px-12">
        {creatorWall.map((c, i) => (
          <FadeUp key={c.name} delay={i * 0.05} className={cn(i === 0 && "col-span-2 row-span-2 md:col-span-1 lg:col-span-2 lg:row-span-2")}>
            <div className="group relative aspect-[3/4] overflow-hidden rounded-[20px] lg:aspect-auto lg:h-full lg:min-h-[280px]">
              <MarketingImage
                src={c.src}
                alt={c.name}
                fill
                hoverZoom
                objectPosition={"objectPosition" in c ? c.objectPosition : undefined}
                className="absolute inset-0 h-full w-full"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-90 transition-all duration-500 group-hover:translate-y-0">
                <p className="text-[15px] font-semibold text-white">{c.name}</p>
                <p className="text-[12px] text-white/70">{c.niche}</p>
                <p className="mt-1 text-[12px] text-white/85">
                  {c.metric} · {c.er}
                </p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

export function CampaignStory() {
  const [stage, setStage] = useState(0);
  const stages = home.campaigns.stages;

  return (
    <section className="bg-[#0a0a0b] py-16 text-white sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <SectionHeader
          light
          eyebrow={home.campaigns.eyebrow}
          headline={home.campaigns.headline}
          body={home.campaigns.body}
        />
        {/*
          Desktop: right panel is absolutely filled to the stages list height
          so image + copy together match the left column.
        */}
        <div className="mt-12 flex flex-col gap-8 md:mt-14 lg:flex-row lg:items-stretch lg:gap-10">
          <ol className="w-full shrink-0 space-y-1 lg:w-[32%] lg:max-w-[368px]">
            {stages.map((s, i) => (
              <li key={s.label}>
                <button
                  type="button"
                  onClick={() => setStage(i)}
                  className={cn(
                    "flex w-full items-baseline gap-3 rounded-[12px] px-3 py-2.5 text-left transition-colors",
                    stage === i
                      ? "bg-white/10 text-white"
                      : "text-white/45 hover:text-white/80"
                  )}
                >
                  <span className="text-[12px] tabular-nums opacity-60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[16px] font-medium tracking-[-0.02em]">
                    {s.label}
                  </span>
                </button>
              </li>
            ))}
          </ol>

          <div className="relative min-h-[280px] w-full flex-1 lg:min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={stage}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="flex overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] lg:absolute lg:inset-0 lg:flex-row"
              >
                <div className="relative aspect-[16/10] w-full shrink-0 lg:aspect-auto lg:h-full lg:w-[46%]">
                  <MarketingImage
                    src={stages[stage].image}
                    alt={stages[stage].label}
                    fill
                    className="absolute inset-0"
                    sizes="(max-width: 1024px) 100vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/40" />
                </div>
                <div className="flex flex-1 flex-col justify-center p-5 md:p-6 lg:p-7">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-white/45">
                    Stage {String(stage + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1.5 text-[22px] font-semibold tracking-[-0.03em] md:text-[24px]">
                    {stages[stage].label}
                  </p>
                  <p className="mt-2 max-w-md text-[14px] leading-relaxed text-white/60 md:text-[15px]">
                    {stages[stage].copy}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SocialIntelligence() {
  const s = home.social;
  const posts = [
    {
      img: "/portfolio/evening-city.webp",
      platform: "TikTok" as const,
      title: "City night reel",
      views: "1.2M",
      er: "8.4%",
      lift: "+42%",
    },
    {
      img: "/portfolio/beauty-glow.webp",
      platform: "Instagram" as const,
      title: "Beauty launch cut",
      views: "640K",
      er: "9.1%",
      lift: "+18%",
    },
    {
      img: "/portfolio/food-spread.webp",
      platform: "YouTube" as const,
      title: "Food story edit",
      views: "890K",
      er: "7.6%",
      lift: "+27%",
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <SectionHeader
          eyebrow={s.eyebrow}
          headline={s.headline}
          body={s.body}
        />
        <div className="mt-8 flex flex-wrap gap-2.5">
          {s.platforms.map((p) => (
            <span
              key={p}
              className="inline-flex items-center gap-2 border-b border-[var(--im-line)] pb-1.5 pr-3 text-[13px] text-[var(--im-ink-soft)]"
            >
              <SocialIcon platform={p as "Instagram"} size={14} />
              {p}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
          {posts.map((post, i) => (
            <FadeUp key={post.img} delay={i * 0.08}>
              <article className="group relative isolate overflow-hidden rounded-[24px] bg-[#0a0a0b]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 360px"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  <div className="absolute left-4 top-4 z-[1] flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-[10px] bg-black/35 px-2.5 py-1.5 text-[11px] font-medium text-white/90 backdrop-blur-md">
                      <SocialIcon platform={post.platform} size={12} />
                      {post.platform}
                    </span>
                    <span className="inline-flex items-center rounded-[10px] bg-emerald-400/15 px-2.5 py-1.5 text-[11px] font-semibold tabular-nums text-emerald-300 backdrop-blur-md">
                      {post.lift}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 z-[1] p-4 md:p-5">
                    <p className="text-[13px] font-medium tracking-[-0.02em] text-white/70">
                      {post.title}
                    </p>
                    <div className="mt-3 grid grid-cols-3 gap-px overflow-hidden rounded-[16px] border border-white/10 bg-white/10 backdrop-blur-xl">
                      {[
                        { label: "Views", value: post.views },
                        { label: "ER", value: post.er },
                        { label: "vs avg", value: post.lift },
                      ].map((stat) => (
                        <div
                          key={stat.label}
                          className="bg-black/45 px-3 py-3 text-center transition-colors duration-300 group-hover:bg-black/35"
                        >
                          <p className="text-[9.5px] font-medium uppercase tracking-[0.12em] text-white/45">
                            {stat.label}
                          </p>
                          <p className="mt-1 text-[17px] font-semibold tracking-[-0.03em] tabular-nums text-white md:text-[18px]">
                            {stat.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AISection() {
  const a = home.ai;
  return (
    <section className="im-atmosphere-dark bg-[#050505] py-20 text-white md:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <SectionHeader
          light
          eyebrow={a.eyebrow}
          headline={a.headline}
          body={a.body}
        />
        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {a.insights.map((insight, i) => (
            <FadeUp key={insight} delay={i * 0.06}>
              <div className="rounded-[18px] border border-white/10 bg-white/[0.04] px-5 py-4">
                <p className="text-[11px] uppercase tracking-[0.1em] text-white/40">
                  Insight {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-[16px] leading-relaxed text-white/85 md:text-[17px]">
                  {insight}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
        <Link href={a.cta.href} className="mt-10 inline-flex">
          <Button variant="secondary" size="md">
            {a.cta.label}
            <ArrowUpRight size={14} className="ml-1.5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

export function AudiencePaths() {
  const a = home.audiences;
  return (
    <section className="border-y border-[var(--im-line)] bg-[var(--im-panel-soft)] py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <SectionHeader eyebrow={a.eyebrow} headline={a.headline} body={a.body} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {a.paths.map((path, i) => (
            <FadeUp key={path.href} delay={i * 0.06}>
              <Link
                href={path.href}
                className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-[var(--im-line)] bg-[var(--im-fill)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[var(--im-shadow-md)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <MarketingImage
                    src={path.img}
                    alt={path.label}
                    fill
                    hoverZoom
                    className="absolute inset-0"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    objectPosition={
                      "objectPosition" in path ? path.objectPosition : "center"
                    }
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="text-[19px] font-semibold tracking-[-0.03em] text-[var(--im-ink)]">
                    {path.label}
                  </h3>
                  <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-[var(--im-ink-soft)]">
                    {path.blurb}
                  </p>
                  <p className="mt-5 inline-flex items-center text-[13.5px] font-medium text-[var(--im-ink)]">
                    Explore
                    <ArrowUpRight
                      size={14}
                      className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
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

export function AnalyticsPreview() {
  const reachSeries = [
    { label: "Jul 12", value: 180 },
    { label: "Jul 13", value: 240 },
    { label: "Jul 14", value: 310 },
    { label: "Jul 15", value: 290 },
    { label: "Jul 16", value: 420 },
    { label: "Jul 17", value: 510 },
    { label: "Jul 18", value: 480 },
    { label: "Jul 19", value: 620 },
    { label: "Jul 20", value: 710 },
    { label: "Jul 21", value: 690 },
    { label: "Jul 22", value: 820 },
    { label: "Jul 23", value: 940 },
    { label: "Jul 24", value: 1100 },
    { label: "Jul 25", value: 1280 },
  ];
  const creatorSeries = trendSeries(88, [
    "Dennis",
    "Bien",
    "Nyash",
    "Faith",
    "Larry",
    "Janet",
  ]);

  return (
    <section className="bg-[var(--im-surface)] py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <SectionHeader
          eyebrow={home.measurement.eyebrow}
          headline={home.measurement.headline}
          body={home.measurement.body}
        />
        <div className="mt-12 grid items-stretch gap-4 md:grid-cols-3">
          <div className="relative overflow-hidden rounded-[24px] border border-[var(--im-line)] bg-[var(--im-fill)] md:col-span-2">
            <div
              className="pointer-events-none absolute inset-0 opacity-90"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 100% 0%, rgba(255,79,216,0.08), transparent 55%), radial-gradient(ellipse 50% 50% at 0% 100%, rgba(139,92,246,0.07), transparent 50%)",
              }}
            />
            <div className="relative flex h-full flex-col p-5 md:p-6 lg:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--im-muted)]">
                    Live campaign · Lipa Na M-Pesa
                  </p>
                  <div className="mt-2 flex flex-wrap items-end gap-x-3 gap-y-1">
                    <p className="text-[36px] font-semibold leading-none tracking-[-0.04em] tabular-nums md:text-[40px]">
                      4.8M
                    </p>
                    <Badge tone="success" dot>
                      +18% vs last campaign
                    </Badge>
                  </div>
                  <p className="mt-2 text-[13px] text-[var(--im-muted)]">
                    Campaign reach · last 14 days
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Engagement", value: "9.4%" },
                    { label: "CPE", value: "KES 12" },
                    { label: "Creators", value: "24" },
                  ].map((k) => (
                    <div
                      key={k.label}
                      className="min-w-[88px] rounded-[14px] border border-[var(--im-line)] bg-[var(--im-panel-strong)] px-3 py-2"
                    >
                      <p className="text-[10px] uppercase tracking-[0.08em] text-[var(--im-muted)]">
                        {k.label}
                      </p>
                      <p className="mt-0.5 text-[15px] font-semibold tabular-nums tracking-[-0.02em]">
                        {k.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex min-h-0 flex-1 flex-col rounded-[18px] border border-[var(--im-line)] bg-[var(--im-surface)]/80 pt-4">
                <div className="mb-2 flex items-center justify-between px-4 md:px-5">
                  <p className="text-[11px] font-medium text-[var(--im-muted)]">
                    Reach trajectory
                  </p>
                  <p className="text-[11px] text-[var(--im-muted-2)]">
                    Daily · verified posts
                  </p>
                </div>
                <div className="min-h-[168px] flex-1 px-1 pb-2 md:min-h-[180px] md:px-1.5">
                  <SparkArea
                    series={reachSeries}
                    color="var(--im-ink)"
                    height={180}
                    fillOpacity={0.16}
                    showLabels
                    formatValue={(v) =>
                      v >= 1000 ? `${(v / 1000).toFixed(1)}M` : `${v}K`
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col overflow-hidden rounded-[24px] border border-[var(--im-line)] bg-[var(--im-ink)] text-[var(--im-on-ink)]">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255,79,216,0.28), transparent 55%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(139,92,246,0.22), transparent 50%)",
              }}
            />
            <div className="relative flex h-full flex-col p-5 md:p-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--im-on-ink)]/45">
                Creator performance
              </p>
              <p className="mt-2 text-[22px] font-semibold tracking-[-0.03em]">
                Who&apos;s driving campaign performance
              </p>
              <p className="mt-1 text-[13px] text-[var(--im-on-ink)]/55">
                Relative delivery score across participating creators.
              </p>
              <div className="mt-5 flex min-h-0 flex-1 flex-col rounded-[16px] border border-[var(--im-on-ink)]/10 bg-[var(--im-on-ink)]/[0.06] pt-3">
                <div className="min-h-[160px] flex-1 px-1.5 pb-2 md:min-h-[180px]">
                  <MiniBars
                    series={creatorSeries}
                    color="var(--im-on-ink)"
                    height={158}
                    className="h-full text-[var(--im-on-ink)]"
                  />
                </div>
              </div>
              <p className="mt-4 text-[12px] text-[var(--im-on-ink)]/50">
                Shift budget toward top quartile before the next publish window.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RelationshipCRM() {
  const timeline = [
    {
      when: "Mar 2026",
      title: "Lipa Na M-Pesa · confirmed",
      detail: "Approved · 1.2M views · ER 9.1%",
      tone: "success" as const,
    },
    {
      when: "Nov 2025",
      title: "Brand immersion · Nairobi",
      detail: "Compliance brief completed · preferred formats noted",
      tone: "accent" as const,
    },
    {
      when: "Aug 2025",
      title: "First collab · Njeve Season",
      detail: "Delivered on time · rebook recommended",
      tone: "neutral" as const,
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1440px] items-stretch gap-10 px-5 sm:px-6 md:gap-12 md:px-8 lg:grid-cols-12 lg:px-10 xl:px-12">
        <div className="flex flex-col justify-center lg:col-span-5">
          <SectionHeader
            eyebrow="Creator CRM"
            headline={home.crm.headline}
            body={home.crm.body}
          />
          <ul className="mt-8 space-y-3">
            {[
              "Campaign history that compounds",
              "Performance and preferences on file",
              "Relationship strength before the next invite",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[14.5px] text-[var(--im-ink-soft)]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--im-ink)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex lg:col-span-7 lg:h-full">
          <div className="relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-[24px] border border-[var(--im-line)] bg-[var(--im-fill)] shadow-[var(--im-shadow-md)]">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 55% 50% at 100% 0%, rgba(139,92,246,0.08), transparent 55%)",
              }}
            />
            <div className="relative flex h-full min-h-0 flex-col p-5 md:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--im-line)] pb-4">
                <div className="flex items-center gap-3">
                  <Avatar
                    name="Bien Baraza"
                    src="/avatars/bien-baraza.webp"
                    size="lg"
                  />
                  <div>
                    <p className="text-[16px] font-semibold tracking-[-0.02em]">
                      Bien Baraza
                    </p>
                    <p className="text-[13px] text-[var(--im-muted)]">
                      Music · Nairobi · 3 campaigns together
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-[0.1em] text-[var(--im-muted)]">
                    Relationship
                  </p>
                  <p className="mt-0.5 text-[22px] font-semibold tabular-nums tracking-[-0.03em]">
                    92
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Badge tone="accent">Priority rebook</Badge>
                <Badge tone="neutral">TikTok-first</Badge>
                <Badge tone="neutral">Reply · 4h avg</Badge>
                <Badge tone="success" dot>
                  Brand-safe
                </Badge>
              </div>

              <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--im-muted)]">
                Collaboration timeline
              </p>
              <ol className="relative mt-4 flex min-h-0 flex-1 flex-col justify-between">
                {timeline.map((event, i) => (
                  <li
                    key={event.title}
                    className="relative flex flex-1 gap-4 pb-5 last:pb-0"
                  >
                    {i < timeline.length - 1 ? (
                      <span className="absolute left-[5px] top-3 h-[calc(100%-4px)] w-px bg-[var(--im-line-strong)]" />
                    ) : null}
                    <span className="relative z-[1] mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--im-ink)]" />
                    <div className="min-w-0 flex-1 self-start rounded-[14px] border border-[var(--im-line)] bg-[var(--im-surface)]/70 px-3.5 py-2.5">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="text-[14px] font-medium tracking-[-0.02em]">
                          {event.title}
                        </p>
                        <Badge tone={event.tone}>{event.when}</Badge>
                      </div>
                      <p className="mt-1 text-[12.5px] text-[var(--im-muted)]">
                        {event.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Ecosystem() {
  return (
    <section className="py-16 sm:py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-5 text-center sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <SectionHeader
          align="center"
          headline={home.ecosystem.headline}
          body="Creators, brands and agencies share one connected intelligence layer across campaigns, social, analytics, AI and payments."
        />
        <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center gap-4">
          {["Creators", "Brands", "Agencies"].map((node, i) => (
            <FadeUp key={node} delay={i * 0.08}>
              <div className="rounded-[16px] border border-[var(--im-line)] bg-[var(--im-fill)] px-8 py-4 text-[18px] font-semibold tracking-[-0.03em] shadow-[var(--im-shadow-sm)]">
                {node}
              </div>
              {i < 2 ? (
                <div className="mx-auto h-8 w-px bg-[var(--im-line-strong)]" />
              ) : null}
            </FadeUp>
          ))}
          <FadeUp delay={0.3}>
            <div className="mt-2 rounded-full bg-[var(--im-ink)] px-5 py-2 text-[13px] font-medium text-[var(--im-on-ink)]">
              InMind Intelligence
            </div>
          </FadeUp>
        </div>
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
          {home.ecosystem.nodes.map((n) => (
            <Badge key={n} tone="neutral">
              {n}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResourcesTeaser() {
  // One featured piece from each collection so the teaser mirrors /resources.
  const cards = RESOURCE_COLLECTIONS.map(
    (collection) => resourcesByKind(collection.kind)[0]
  ).filter(Boolean);

  return (
    <section className="py-16 sm:py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader headline={home.resources.headline} />
          <Link href={home.resources.cta.href}>
            <Button variant="secondary" size="sm">
              {home.resources.cta.label}
            </Button>
          </Link>
        </div>
        <div className="mt-10 grid auto-rows-fr gap-4 md:grid-cols-3">
          {cards.map((c, i) => (
            <FadeUp key={c.slug} delay={i * 0.06} className="h-full">
              <ResourceCard resource={c} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProofStrip() {
  const p = home.proof;

  return (
    <section className="border-b border-[var(--im-line)] py-14 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--im-muted)]">
              {p.eyebrow}
            </p>
            <h2 className="mt-3 text-[clamp(1.75rem,3.8vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-[var(--im-ink)]">
              {p.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--im-ink-soft)] md:text-[16px]">
              {p.body}
            </p>
          </div>
        </FadeUp>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {p.stats.map((stat, i) => (
            <FadeUp key={stat.label} delay={0.06 * i}>
              <div className="text-center">
                <p className="text-[clamp(2.25rem,4vw,3rem)] font-semibold leading-none tracking-[-0.05em] tabular-nums text-[var(--im-ink)]">
                  <ProofCount value={stat.value} />
                </p>
                <p className="mt-3 text-[15px] font-medium tracking-[-0.02em] text-[var(--im-ink)]">
                  {stat.label}
                </p>
                <p className="mt-1 text-[12.5px] text-[var(--im-muted)]">
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

function ProofCount({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const parsed = parseProofValue(value);
    if (!parsed) {
      setDisplay(value);
      return;
    }
    if (reduce) {
      setDisplay(value);
      return;
    }
    if (!inView) {
      setDisplay(formatProofValue(parsed, 0));
      return;
    }

    const duration = 1200;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(formatProofValue(parsed, parsed.number * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
      else setDisplay(value);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, value]);

  return <span ref={ref}>{display}</span>;
}

function parseProofValue(value: string) {
  const match = value.match(/^([^\d-]*)(-?\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, num, suffix] = match;
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return { prefix, number: Number(num), suffix, decimals };
}

function formatProofValue(
  parsed: { prefix: string; number: number; suffix: string; decimals: number },
  current: number
) {
  const n =
    parsed.decimals > 0
      ? current.toFixed(parsed.decimals)
      : String(Math.round(current));
  return `${parsed.prefix}${n}${parsed.suffix}`;
}

export function StoriesStrip() {
  const s = home.stories;

  return (
    <section className="border-y border-[var(--im-line)] bg-[var(--im-panel-soft)] py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader
            eyebrow={s.eyebrow}
            headline={s.headline}
            body={s.body}
          />
          <Link href={s.cta.href} className="shrink-0">
            <Button variant="secondary" size="sm">
              {s.cta.label}
              <ArrowUpRight size={14} className="ml-1 opacity-80" />
            </Button>
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {s.items.map((story, i) => (
            <FadeUp key={story.href} delay={0.08 * i}>
              <Link
                href={story.href}
                className="group relative block overflow-hidden rounded-[22px] bg-[#0a0a0b]"
              >
                <div className="relative aspect-[4/5] sm:aspect-[3/4]">
                  <Image
                    src={story.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-80 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                  <span
                    className="absolute left-1/2 top-[42%] flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-105"
                    aria-hidden
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="ml-0.5 h-5 w-5 fill-current"
                      aria-hidden
                    >
                      <path d="M8 5.14v13.72L19 12 8 5.14Z" />
                    </svg>
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/55">
                        {story.brand}
                      </p>
                      <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white">
                        {story.result}
                      </span>
                    </div>
                    <p className="mt-3 text-[17px] font-semibold leading-snug tracking-[-0.03em] text-white md:text-[18px]">
                      {story.title}
                    </p>
                    <p className="mt-2 text-[13px] text-white/55">{story.handle}</p>
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeFaq() {
  const faq = home.faq;
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState<number | null>(0);
  const active = faq.tabs[tab];

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 sm:px-6 md:px-8 lg:grid-cols-12 lg:gap-14 lg:px-10 xl:px-12">
        <div className="lg:col-span-5">
          <SectionHeader eyebrow={faq.eyebrow} headline={faq.headline} />
          <div
            className="mt-8 flex flex-wrap gap-2"
            role="tablist"
            aria-label="FAQ audience"
          >
            {faq.tabs.map((t, index) => {
              const selected = tab === index;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => {
                    setTab(index);
                    setOpen(0);
                  }}
                  className={cn(
                    "rounded-[12px] px-3.5 py-2 text-[13.5px] font-medium transition-colors",
                    selected
                      ? "bg-[var(--im-ink)] text-[var(--im-on-ink)]"
                      : "bg-[var(--im-panel)] text-[var(--im-ink-soft)] hover:text-[var(--im-ink)]"
                  )}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-7" role="tabpanel">
          <ul className="border-t border-[var(--im-line)]">
            {active.items.map((item, index) => {
              const isOpen = open === index;
              return (
                <li
                  key={`${active.id}-${item.q}`}
                  className="border-b border-[var(--im-line)]"
                >
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
                        transition={{ duration: 0.28, ease: EASE }}
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

export function FinalCTA() {
  const c = home.finalCta;
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 md:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,79,216,0.12),transparent_50%),radial-gradient(ellipse_at_80%_80%,rgba(139,92,246,0.12),transparent_45%)]" />
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="whitespace-pre-line text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-[var(--im-ink)]">
              {c.headline}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-[var(--im-ink-soft)]">
              {c.body}
            </p>
          </div>
        </FadeUp>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
          {c.paths.map((path, i) => (
            <FadeUp key={path.id} delay={0.1 + i * 0.08}>
              <div className="flex h-full flex-col rounded-[22px] border border-[var(--im-line)] bg-[var(--im-panel)] p-6 md:p-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--im-muted)]">
                  {path.eyebrow}
                </p>
                <h3 className="mt-3 text-[22px] font-semibold leading-snug tracking-[-0.035em] text-[var(--im-ink)] md:text-[24px]">
                  {path.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[var(--im-ink-soft)]">
                  {path.body}
                </p>
                <div className="mt-8 flex flex-col gap-3">
                  <Link href={path.primary.href}>
                    <Button
                      variant={path.id === "brand" ? "primary" : "secondary"}
                      size="lg"
                      fullWidth
                    >
                      {path.primary.label}
                      <ArrowUpRight size={15} className="ml-1 opacity-80" />
                    </Button>
                  </Link>
                  <Link
                    href={path.secondary.href}
                    className="text-center text-[13.5px] font-medium text-[var(--im-ink-soft)] transition-colors hover:text-[var(--im-ink)]"
                  >
                    {path.secondary.label}
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
