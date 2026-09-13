"use client";

import { useMemo, useState } from "react";
import { ResourceCard } from "@/components/marketing/ResourceCard";
import { ResourceSidebar } from "@/components/marketing/ResourceSidebar";
import type { Resource, ResourceKind } from "@/content/marketing/resources";

export function ResourceCollection({
  kind,
  eyebrow,
  title,
  description,
  resources,
  categories,
  counts,
}: {
  kind: ResourceKind;
  eyebrow: string;
  title: string;
  description: string;
  resources: Resource[];
  categories: string[];
  counts: Record<string, number>;
}) {
  const [category, setCategory] = useState("All");

  const visible = useMemo(
    () =>
      category === "All"
        ? resources
        : resources.filter((r) => r.category === category),
    [category, resources]
  );

  return (
    <section className="pt-28 pb-20 sm:pt-32 md:pb-28 lg:pt-36">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <header className="max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--im-muted)]">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-[var(--im-ink)]">
            {title}
          </h1>
          <p className="mt-5 text-[16px] leading-relaxed text-[var(--im-ink-soft)] md:text-[17px]">
            {description}
          </p>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14 md:mt-16">
          <ResourceSidebar
            activeKind={kind}
            categories={categories}
            activeCategory={category}
            onCategoryChange={setCategory}
            counts={counts}
          />

          <div>
            <div className="grid auto-rows-fr gap-5 sm:grid-cols-2">
              {visible.map((resource) => (
                <ResourceCard key={resource.slug} resource={resource} />
              ))}
            </div>
            <p className="mt-8 text-[13.5px] text-[var(--im-muted)]">
              {visible.length} {visible.length === 1 ? "resource" : "resources"}{" "}
              in {category}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
