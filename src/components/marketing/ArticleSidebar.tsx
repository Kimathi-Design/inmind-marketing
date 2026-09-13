"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button, cn } from "@inmind/ui";

export type TocEntry = { id: string; text: string };

export function ArticleSidebar({
  backHref,
  backLabel,
  meta,
  toc,
  tags,
}: {
  backHref: string;
  backLabel: string;
  meta: { label: string; value: string }[];
  toc: TocEntry[];
  tags: string[];
}) {
  const [activeId, setActiveId] = useState(toc[0]?.id ?? "");

  useEffect(() => {
    if (!toc.length) return;
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
      // Bias the active band toward the top of the viewport, under the fixed nav.
      { rootMargin: "-120px 0px -65% 0px", threshold: 0 }
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [toc]);

  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <Link
        href={backHref}
        className="text-[13.5px] text-[var(--im-muted)] transition-colors hover:text-[var(--im-ink)]"
      >
        ← {backLabel}
      </Link>

      <dl className="mt-6 space-y-3 border-t border-[var(--im-line)] pt-6">
        {meta.map((item) => (
          <div key={item.label} className="flex items-baseline justify-between gap-4">
            <dt className="text-[12.5px] uppercase tracking-[0.12em] text-[var(--im-muted)]">
              {item.label}
            </dt>
            <dd className="text-[13.5px] text-[var(--im-ink)]">{item.value}</dd>
          </div>
        ))}
      </dl>

      {toc.length ? (
        <nav
          aria-label="On this page"
          className="mt-8 border-t border-[var(--im-line)] pt-6"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--im-muted)]">
            On this page
          </p>
          <ul className="mt-4 space-y-1">
            {toc.map((entry) => (
              <li key={entry.id}>
                <a
                  href={`#${entry.id}`}
                  aria-current={entry.id === activeId ? "location" : undefined}
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
      ) : null}

      {tags.length ? (
        <div className="mt-8 border-t border-[var(--im-line)] pt-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--im-muted)]">
            Tags
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-black/[0.05] px-2.5 py-1 text-[12.5px] text-[var(--im-ink-soft)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-8 rounded-[18px] border border-[var(--im-line)] bg-[var(--im-panel)] p-5">
        <p className="text-[15px] font-semibold tracking-[-0.02em]">
          Build the next campaign with us
        </p>
        <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--im-ink-soft)]">
          Strategy, creator selection, orchestration and measurement in one
          operating layer.
        </p>
        <Link href="/contact" className="mt-4 block">
          <Button variant="secondary" size="md" fullWidth>
            Request a proposal
          </Button>
        </Link>
      </div>
    </aside>
  );
}
