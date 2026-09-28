import Link from "next/link";
import {
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  XIcon,
  cn,
} from "@inmind/ui";
import { FOOTER } from "@/content/marketing/navigation";
import { marketingShellClass } from "@/components/marketing/MarketingShell";
import { BrandMark } from "@/components/marketing/BrandMark";

const SOCIALS = [
  {
    Icon: InstagramIcon,
    label: "Instagram",
    href: "https://instagram.com",
  },
  {
    Icon: XIcon,
    label: "X",
    href: "https://x.com",
  },
  {
    Icon: LinkedInIcon,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    Icon: TikTokIcon,
    label: "TikTok",
    href: "https://tiktok.com",
  },
] as const;

export function MarketingFooter() {
  return (
    <footer className="border-t border-[var(--im-line)] bg-[#0a0a0b] text-white">
      <div className={cn(marketingShellClass, "py-16 lg:py-20")}>
        {/*
          Mobile: brand centered, link groups in a centered 2-col grid.
          lg: 7 equal tracks via contents, brand spans 2, each link group spans 1.
        */}
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-7 lg:gap-x-8 xl:gap-x-10">
          <div className="flex flex-col items-center text-center lg:col-span-2 lg:items-start lg:text-left">
            <p className="text-[18px] font-semibold tracking-[-0.04em]">
              <BrandMark onDark />
            </p>
            <p className="mt-3 max-w-sm text-[13.5px] leading-relaxed text-white/55">
              {FOOTER.blurb}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2.5 lg:justify-start">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-white transition-colors hover:border-white/40 hover:bg-[var(--im-panel-strong)]/10"
                >
                  <Icon size={16} className="[&_path]:!fill-current" />
                </a>
              ))}
            </div>
          </div>

          <div className="mx-auto grid w-full max-w-[20rem] grid-cols-2 justify-items-center gap-x-8 gap-y-10 text-center sm:max-w-2xl sm:grid-cols-3 sm:justify-items-start sm:text-left md:max-w-none md:grid-cols-5 lg:contents lg:text-left">
            {FOOTER.columns.map((col) => (
              <div
                key={col.title}
                className="min-w-0 last:col-span-2 sm:last:col-span-1"
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/40">
                  {col.title}
                </p>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-[13.5px] text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-[12.5px] text-white/40">
          <p>© {new Date().getFullYear()} InMind. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
