"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Button,
  CampaignIcon,
  ChartIcon,
  CheckIcon,
  CloseIcon,
  LayersIcon,
  MenuIcon,
  MessageIcon,
  OpportunityIcon,
  SearchIcon,
  SparkIcon,
  StudioIcon,
  UserIcon,
  cn,
} from "@inmind/ui";
import {
  NAV_CTA,
  PLATFORM_MEGA,
  PRIMARY_NAV,
  type MegaItem,
} from "@/content/marketing/navigation";
import { EASE } from "@/components/motion/Reveal";
import { BrandMark } from "@/components/marketing/BrandMark";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

function MegaIcon({ name }: { name: MegaItem["icon"] }) {
  const props = { size: 16, className: "shrink-0 text-[var(--im-ink)]" };
  switch (name) {
    case "search":
      return <SearchIcon {...props} />;
    case "chart":
      return <ChartIcon {...props} />;
    case "user":
      return <UserIcon {...props} />;
    case "campaign":
      return <CampaignIcon {...props} />;
    case "check":
      return <CheckIcon {...props} />;
    case "message":
      return <MessageIcon {...props} />;
    case "spark":
      return <SparkIcon {...props} />;
    case "layers":
      return <LayersIcon {...props} />;
    case "opportunity":
      return <OpportunityIcon {...props} />;
    case "studio":
      return <StudioIcon {...props} />;
    default:
      return <SparkIcon {...props} />;
  }
}

export function MarketingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[padding,background,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled ? "px-3 pt-3 md:px-4" : "px-0 pt-0"
        )}
      >
        <div
          className={cn(
            "mx-auto flex h-14 w-full max-w-[1440px] items-center justify-between gap-4 border border-transparent transition-[background-color,box-shadow,border-color,border-radius,padding,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:h-16",
            scrolled
              ? "rounded-[18px] border-[var(--im-line)] bg-[var(--im-glass)] px-4 shadow-[var(--im-shadow-md)] backdrop-blur-[18px] md:px-5"
              : "rounded-none bg-transparent px-5 shadow-none backdrop-blur-0 sm:px-6 md:px-8 lg:px-10 xl:px-12"
          )}
        >
          <Link
            href="/"
            className="inline-flex shrink-0 items-center self-center leading-none text-[var(--im-ink)]"
          >
            <BrandMark />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {PRIMARY_NAV.map((item) =>
              item.label === "Platform" ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="rounded-[11px] px-3 py-2 text-[13.5px] font-medium text-[var(--im-ink-soft)] transition-colors hover:text-[var(--im-ink)]"
                    onFocus={() => setMegaOpen(true)}
                  >
                    {item.label}
                  </Link>
                  <AnimatePresence>
                    {megaOpen ? (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.28, ease: EASE }}
                        className="absolute left-1/2 top-full z-50 w-[min(920px,88vw)] -translate-x-1/2 pt-3"
                      >
                        <div className="rounded-[20px] border border-[var(--im-line)] bg-[var(--im-panel-strong)] p-5 shadow-[var(--im-shadow-lg)] backdrop-blur-[20px]">
                          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {PLATFORM_MEGA.map((section) => (
                              <div key={section.title}>
                                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--im-muted)]">
                                  {section.title}
                                </p>
                                <ul className="space-y-1">
                                  {section.items.map((it) => (
                                    <li key={it.href + it.label}>
                                      <Link
                                        href={it.href}
                                        className="group flex gap-2.5 rounded-[12px] p-2 transition-colors hover:bg-[var(--im-surface)]"
                                        onClick={() => setMegaOpen(false)}
                                      >
                                        <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-[9px] border border-[var(--im-line)] bg-[var(--im-fill)]">
                                          <MegaIcon name={it.icon} />
                                        </span>
                                        <span>
                                          <span className="block text-[13px] font-medium tracking-[-0.02em] text-[var(--im-ink)]">
                                            {it.label}
                                          </span>
                                          <span className="mt-0.5 block text-[11.5px] leading-snug text-[var(--im-muted)]">
                                            {it.description}
                                          </span>
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[11px] px-3 py-2 text-[13.5px] font-medium text-[var(--im-ink-soft)] transition-colors hover:text-[var(--im-ink)]"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href={NAV_CTA.href} className="hidden sm:inline-flex">
              <Button variant="primary" size="sm" className="h-10 rounded-[12px]">
                {NAV_CTA.label}
                <ArrowUpRight size={14} className="ml-1 opacity-80" />
              </Button>
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] border border-[var(--im-line)] bg-[var(--im-panel)] text-[var(--im-ink)] lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <CloseIcon size={16} /> : <MenuIcon size={16} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="fixed inset-0 z-40 bg-[var(--im-page)]/95 pt-20 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="mx-auto flex max-w-lg flex-col gap-1 px-5">
              {PRIMARY_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-[14px] px-4 py-3.5 text-[18px] font-medium tracking-[-0.03em] text-[var(--im-ink)]"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 border-t border-[var(--im-line)] pt-4">
                <Link href={NAV_CTA.href} onClick={() => setMobileOpen(false)}>
                  <Button variant="primary" size="lg" fullWidth>
                    {NAV_CTA.label}
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
