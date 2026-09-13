import Link from "next/link";
import { ArrowUpRight, cn } from "@inmind/ui";
import { MarketingImage } from "@/components/marketing/MarketingImage";
import type { Resource } from "@/content/marketing/resources";

export function ResourceCard({
  resource,
  size = "md",
}: {
  resource: Resource;
  size?: "md" | "lg";
}) {
  return (
    <Link
      href={`/resources/${resource.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-[var(--im-line)] bg-[var(--im-panel)] transition-colors hover:border-[var(--im-ink)]/25"
    >
      <div
        className={cn(
          "relative w-full overflow-hidden",
          size === "lg" ? "aspect-[16/10]" : "aspect-[16/11]"
        )}
      >
        <MarketingImage
          src={resource.image}
          alt={resource.title}
          fill
          hoverZoom
          className="absolute inset-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="line-clamp-2 min-h-[2rem] text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--im-muted)]">
          {resource.category}
        </p>
        <h3
          className={cn(
            "mt-3 line-clamp-3 font-semibold tracking-[-0.03em] text-[var(--im-ink)]",
            size === "lg"
              ? "min-h-[4.5rem] text-[22px] leading-[1.2] sm:min-h-[5.625rem] sm:text-[26px]"
              : "min-h-[4.125rem] text-[18px] leading-[1.25]"
          )}
        >
          {resource.title}
        </h3>
        <p className="mt-2.5 line-clamp-3 min-h-[4.35rem] flex-1 text-[14.5px] leading-relaxed text-[var(--im-ink-soft)]">
          {resource.excerpt}
        </p>
        <div className="mt-5 flex shrink-0 items-center justify-between border-t border-[var(--im-line)] pt-4 text-[13px] text-[var(--im-muted)]">
          <span>
            {resource.readTime} · {resource.date}
          </span>
          <span className="inline-flex items-center gap-1 font-medium text-[var(--im-ink)]">
            Read
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
