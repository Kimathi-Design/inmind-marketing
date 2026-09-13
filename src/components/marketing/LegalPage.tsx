"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button, cn } from "@inmind/ui";
import { openCookiePreferences } from "@/components/marketing/CookieConsent";
import { LEGAL_DOCS, type LegalDoc } from "@/content/marketing/legal";
import { BRAND_PRODUCT } from "@/lib/brand";

function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function LegalPage({ doc }: { doc: LegalDoc }) {
  const toc = doc.body
    .filter((block) => block.type === "h2")
    .map((block) => ({ id: slugifyHeading(block.text), text: block.text }));

  const [activeId, setActiveId] = useState(toc[0]?.id ?? "");

  useEffect(() => {
    const headings = toc
      .map((entry) => document.getElementById(entry.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-120px 0px -65% 0px", threshold: 0 }
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
    // toc is derived from the static doc, so it is stable per page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doc.slug]);

  return (
    <div className="im-atmosphere min-h-screen">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-6 md:px-8 md:py-20">
        <Link
          href="/"
          className="text-[13.5px] text-[var(--im-muted)] transition-colors hover:text-[var(--im-ink)]"
        >
          ← Back to {BRAND_PRODUCT}
        </Link>

        <header className="mt-8 max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--im-muted)]">
            Legal
          </p>
          <h1 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-[var(--im-ink)]">
            {doc.title}
          </h1>
          <p className="mt-4 text-[13.5px] text-[var(--im-muted)]">
            Last updated {doc.updated}
          </p>
          <p className="mt-6 text-[16px] leading-relaxed text-[var(--im-ink-soft)]">
            {doc.intro}
          </p>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14 md:mt-16">
          <aside className="lg:sticky lg:top-12 lg:self-start">
            <nav aria-label="Legal documents">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--im-muted)]">
                Documents
              </p>
              <ul className="mt-4 space-y-1">
                {LEGAL_DOCS.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/${item.slug}`}
                      aria-current={item.slug === doc.slug ? "page" : undefined}
                      className={cn(
                        "block rounded-[12px] px-3 py-2.5 text-[15px] transition-colors",
                        item.slug === doc.slug
                          ? "bg-[var(--im-ink)] font-medium text-[var(--im-on-ink)]"
                          : "text-[var(--im-ink-soft)] hover:bg-[var(--im-panel-soft)] hover:text-[var(--im-ink)]"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav
              aria-label="On this page"
              className="mt-8 border-t border-[var(--im-line)] pt-6"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--im-muted)]">
                On this page
              </p>
              <ul className="mt-4 max-h-[52vh] space-y-1 overflow-y-auto pr-1">
                {toc.map((entry) => (
                  <li key={entry.id}>
                    <a
                      href={`#${entry.id}`}
                      aria-current={
                        entry.id === activeId ? "location" : undefined
                      }
                      className={cn(
                        "block border-l-2 py-1.5 pl-3 text-[13.5px] leading-snug transition-colors",
                        entry.id === activeId
                          ? "border-[var(--im-ink)] font-medium text-[var(--im-ink)]"
                          : "border-transparent text-[var(--im-ink-soft)] hover:border-[var(--im-line)] hover:text-[var(--im-ink)]"
                      )}
                    >
                      {entry.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="max-w-[760px]">
            {doc.body.map((block, index) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={index}
                    id={slugifyHeading(block.text)}
                    className="mt-12 scroll-mt-12 text-[22px] font-semibold leading-[1.2] tracking-[-0.03em] text-[var(--im-ink)] first:mt-0"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "h3") {
                return (
                  <h3
                    key={index}
                    className="mt-7 text-[17px] font-semibold tracking-[-0.02em] text-[var(--im-ink)]"
                  >
                    {block.text}
                  </h3>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={index} className="mt-4 space-y-2.5">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="relative pl-5 text-[15.5px] leading-relaxed text-[var(--im-ink-soft)] before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--im-muted)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p
                  key={index}
                  className="mt-4 text-[15.5px] leading-[1.75] text-[var(--im-ink-soft)]"
                >
                  {block.text}
                </p>
              );
            })}

            {doc.slug === "cookies" ? (
              <div className="mt-14 rounded-[20px] border border-[var(--im-line)] bg-[var(--im-panel)] p-6">
                <p className="text-[15px] font-semibold tracking-[-0.02em]">
                  Manage your cookie preferences
                </p>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--im-ink-soft)]">
                  Reopen the consent panel to change or withdraw your choice at
                  any time.
                </p>
                <div className="mt-4">
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={openCookiePreferences}
                  >
                    Cookie preferences
                  </Button>
                </div>
              </div>
            ) : null}

            <div
              className={cn(
                "rounded-[20px] border border-[var(--im-line)] bg-[var(--im-panel)] p-6",
                doc.slug === "cookies" ? "mt-6" : "mt-14"
              )}
            >
              <p className="text-[15px] font-semibold tracking-[-0.02em]">
                Questions about this document?
              </p>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--im-ink-soft)]">
                Reach the team at{" "}
                <a
                  href="mailto:support@inmind.media"
                  className="font-medium text-[var(--im-violet)] underline-offset-4 hover:underline"
                >
                  support@inmind.media
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
