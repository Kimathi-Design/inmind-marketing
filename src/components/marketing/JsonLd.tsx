import { siteUrl } from "@/lib/site";
import { SITE } from "@/content/marketing/navigation";
import { BRAND_NAME } from "@/lib/brand";

type JsonLdValue = Record<string, unknown> | Record<string, unknown>[];

export function JsonLd({ data }: { data: JsonLdValue }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/** Organization + WebSite for the marketing shell. */
export function siteJsonLd() {
  const base = siteUrl();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: BRAND_NAME,
        legalName: "The AdMind Limited",
        url: base,
        logo: {
          "@type": "ImageObject",
          url: `${base}/brand/inmind-black.png`,
        },
        email: "support@inmind.media",
        sameAs: [],
        description: SITE.tagline,
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: BRAND_NAME,
        description: SITE.tagline,
        publisher: { "@id": `${base}/#organization` },
        inLanguage: "en",
      },
    ],
  };
}

export function faqPageJsonLd(
  items: readonly { q: string; a: string }[]
) {
  const base = siteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${base}/faq#faq`,
    url: `${base}/faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
