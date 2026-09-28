import Link from "next/link";
import type { Metadata } from "next";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import { BrandMark } from "@/components/marketing/BrandMark";
import { SiteAnalytics } from "@/components/marketing/SiteAnalytics";
import {
  ThemeProvider,
  themeInitScript,
} from "@/components/theme/ThemeProvider";
import { SITE } from "@/content/marketing/navigation";
import { jost } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: `Page not found · ${SITE.product}`,
  description: "That page does not exist or has moved.",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${jost.variable} h-full`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full font-sans antialiased">
        <ThemeProvider>
          <div className="im-atmosphere flex min-h-screen flex-col overflow-x-clip bg-[var(--im-page)] text-[var(--im-ink)]">
            <header className="px-5 pt-8 sm:px-8">
              <Link href="/" aria-label="InMind home" className="inline-flex">
                <BrandMark />
              </Link>
            </header>

            <main className="flex flex-1 flex-col items-center justify-center px-5 py-20 text-center sm:px-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--im-muted)]">
                404
              </p>
              <h1 className="mt-4 max-w-xl text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.04em]">
                This page is not here.
              </h1>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[var(--im-muted)]">
                The link may be broken, or the page may have moved. Head home
                or tell us what you were looking for.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--im-ink)] px-6 text-[14px] font-medium text-[var(--im-page)] transition-opacity hover:opacity-90"
                >
                  Back to home
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--im-line)] bg-[var(--im-fill)] px-6 text-[14px] font-medium text-[var(--im-ink)] transition-colors hover:bg-[var(--im-surface)]"
                >
                  Contact us
                </Link>
              </div>
              <nav
                aria-label="Popular pages"
                className="mt-14 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[13.5px] text-[var(--im-muted)]"
              >
                {[
                  { href: "/platform", label: "Platform" },
                  { href: "/faq", label: "FAQ" },
                  { href: "/creators", label: "Creators" },
                  { href: "/brands", label: "Brands" },
                  { href: "/resources", label: "Resources" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="underline-offset-4 hover:text-[var(--im-ink)] hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </main>

            <CookieConsent />
            <SiteAnalytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
