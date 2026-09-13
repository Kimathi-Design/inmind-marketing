import type { Metadata } from "next";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import {
  ThemeProvider,
  themeInitScript,
} from "@/components/theme/ThemeProvider";
import { BRAND_PRODUCT } from "@/lib/brand";
import { jost } from "@/lib/fonts";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: BRAND_PRODUCT,
    template: `%s · ${BRAND_PRODUCT}`,
  },
};

export default function LegalLayout({
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
          {children}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
