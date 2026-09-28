import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Button, cn } from "@inmind/ui";
import { EditorialHero } from "@/components/marketing/EditorialHero";
import { HomeFaq } from "@/components/marketing/HomeSections";
import { JsonLd, faqPageJsonLd } from "@/components/marketing/JsonLd";
import { marketingShellClass } from "@/components/marketing/MarketingShell";
import { home } from "@/content/marketing/home";

const faqItems: { q: string; a: string }[] = home.faq.tabs.flatMap((tab) =>
  tab.items.map((item) => ({ q: item.q, a: item.a }))
);

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers for brands, creators and agencies getting started with InMind.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ · InMind",
    description:
      "Answers for brands, creators and agencies getting started with InMind.",
  },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqItems)} />
      <EditorialHero
        eyebrow="FAQ"
        headline={"Answers before\nyou start."}
        body="Common questions from brands, creators and agencies. Still stuck? Reach out and we will help you find the right path."
        primaryCta={{ label: "Contact us", href: "/contact" }}
        secondaryCta={{ label: "Explore platform", href: "/platform" }}
      />
      <HomeFaq />
      <section className="border-t border-[var(--im-line)] py-16 md:py-20">
        <div
          className={cn(
            marketingShellClass,
            "flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"
          )}
        >
          <div>
            <h2 className="text-[22px] font-semibold tracking-[-0.03em] text-[var(--im-ink)] md:text-[24px]">
              Did not find what you need?
            </h2>
            <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-[var(--im-muted)]">
              Tell us your objective and we will point you to the right next
              step.
            </p>
          </div>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Start a conversation
              <ArrowUpRight size={15} className="ml-1 opacity-80" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
