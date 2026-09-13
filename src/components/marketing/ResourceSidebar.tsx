"use client";

import Link from "next/link";
import { Button, cn } from "@inmind/ui";
import { RESOURCE_COLLECTIONS } from "@/content/marketing/resources";
import type { ResourceKind } from "@/content/marketing/resources";

/**
 * Sticky rail for the resource collections. Offset clears the fixed marketing nav.
 */
export function ResourceSidebar({
  activeKind,
  categories,
  activeCategory,
  onCategoryChange,
  counts,
}: {
  activeKind: ResourceKind;
  categories?: string[];
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
  counts?: Record<string, number>;
}) {
  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <nav aria-label="Resource collections">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--im-muted)]">
          Resources
        </p>
        <ul className="mt-4 space-y-1">
          {RESOURCE_COLLECTIONS.map((collection) => {
            const active = collection.kind === activeKind;
            return (
              <li key={collection.kind}>
                <Link
                  href={`/resources/${collection.slug}`}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between rounded-[12px] px-3 py-2.5 text-[15px] transition-colors",
                    active
                      ? "bg-[var(--im-ink)] font-medium text-[var(--im-on-ink)]"
                      : "text-[var(--im-ink-soft)] hover:bg-[var(--im-panel-soft)] hover:text-[var(--im-ink)]"
                  )}
                >
                  {collection.label}
                  {counts?.[collection.kind] ? (
                    <span
                      className={cn(
                        "text-[12px] tabular-nums",
                        active
                          ? "text-[var(--im-on-ink)] opacity-60"
                          : "text-[var(--im-muted)]"
                      )}
                    >
                      {counts[collection.kind]}
                    </span>
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {categories?.length ? (
        <div className="mt-8 border-t border-[var(--im-line)] pt-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--im-muted)]">
            Topics
          </p>
          <div className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:items-start">
            {["All", ...categories].map((category) => {
              const active = category === activeCategory;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => onCategoryChange?.(category)}
                  aria-pressed={active}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-[13.5px] transition-colors lg:rounded-[10px] lg:px-3 lg:py-2",
                    active
                      ? "bg-[var(--im-panel)] font-medium text-[var(--im-ink)]"
                      : "text-[var(--im-ink-soft)] hover:bg-[var(--im-panel-soft)] hover:text-[var(--im-ink)]"
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      <div className="mt-8 rounded-[18px] border border-[var(--im-line)] bg-[var(--im-panel)] p-5">
        <p className="text-[15px] font-semibold tracking-[-0.02em]">
          Planning a creator programme?
        </p>
        <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--im-ink-soft)]">
          Tell us the objective and we will shape the strategy, the mix and the
          measurement.
        </p>
        <Link href="/contact" className="mt-4 block">
          <Button variant="secondary" size="md" fullWidth>
            Talk to us
          </Button>
        </Link>
      </div>
    </aside>
  );
}
