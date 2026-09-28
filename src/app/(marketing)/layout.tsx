import type { Metadata } from "next";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import { MarketingNav } from "@/components/marketing/MarketingNav";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { SiteAnalytics } from "@/components/marketing/SiteAnalytics";
import { JsonLd, siteJsonLd } from "@/components/marketing/JsonLd";
import {
  ThemeProvider,
  themeInitScript,
} from "@/components/theme/ThemeProvider";
import { SITE } from "@/content/marketing/navigation";
import { jost } from "@/lib/fonts";
import { siteUrl } from "@/lib/site";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: SITE.product,
    template: `%s · ${SITE.product}`,
  },
  description: SITE.tagline,
  openGraph: {
    title: SITE.product,
    description: SITE.tagline,
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "InMind",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.product,
    description: SITE.tagline,
    images: ["/og.png"],
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
        <JsonLd data={siteJsonLd()} />
        <ThemeProvider>
          <div className="im-atmosphere min-h-screen overflow-x-clip bg-[var(--im-page)] text-[var(--im-ink)]">
            <MarketingNav />
            <main>{children}</main>
            <MarketingFooter />
            <CookieConsent />
            <SiteAnalytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
