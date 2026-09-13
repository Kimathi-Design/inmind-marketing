import type { Metadata } from "next";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import { MarketingNav } from "@/components/marketing/MarketingNav";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import {
  ThemeProvider,
  themeInitScript,
} from "@/components/theme/ThemeProvider";
import { SITE } from "@/content/marketing/navigation";
import { jost } from "@/lib/fonts";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://inmind.media"
  ),
  title: {
    default: `${SITE.product}: Influence, intelligently managed`,
    template: `%s · ${SITE.product}`,
  },
  description: SITE.tagline,
  openGraph: {
    title: SITE.product,
    description: SITE.tagline,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.product,
    description: SITE.tagline,
  },
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jost.variable} h-full`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full font-sans antialiased">
        <ThemeProvider>
          <div className="im-atmosphere min-h-screen overflow-x-clip bg-[var(--im-page)] text-[var(--im-ink)]">
            <MarketingNav />
            <main>{children}</main>
            <MarketingFooter />
            <CookieConsent />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
