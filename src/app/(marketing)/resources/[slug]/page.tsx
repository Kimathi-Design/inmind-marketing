import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleSidebar } from "@/components/marketing/ArticleSidebar";
import { FinalCTA } from "@/components/marketing/HomeSections";
import { MarketingImage } from "@/components/marketing/MarketingImage";
import { ResourceCard } from "@/components/marketing/ResourceCard";
import {
  collectionForKind,
  findResource,
  RESOURCES,
} from "@/content/marketing/resources";

export function generateStaticParams() {
  return RESOURCES.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = findResource(slug);
  if (!resource) return {};
  return {
    title: resource.title,
    description: resource.excerpt,
    openGraph: {
      title: resource.title,
      description: resource.excerpt,
      type: "article",
      images: [{ url: resource.image }],
    },
  };
}

function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = findResource(slug);
  if (!resource) notFound();

  const collection = collectionForKind(resource.kind);
  const toc = resource.body
    .filter((block) => block.type === "h2")
    .map((block) => ({
      id: slugifyHeading(block.text),
      text: block.text,
    }));

  const related = RESOURCES.filter(
    (r) => r.kind === resource.kind && r.slug !== resource.slug
  ).slice(0, 3);

  return (
    <>
      <article className="pt-28 sm:pt-32 lg:pt-36">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <header className="max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--im-muted)]">
              {resource.category}
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-[var(--im-ink)]">
              {resource.title}
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-[var(--im-ink-soft)] md:text-[18px]">
              {resource.excerpt}
            </p>
          </header>

          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[24px] md:mt-12">
            <MarketingImage
              src={resource.image}
              alt={resource.title}
              fill
              priority
              className="absolute inset-0"
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
          </div>

          {resource.stats?.length ? (
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {resource.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[18px] border border-[var(--im-line)] bg-white/60 p-5"
                >
                  <p className="text-[28px] font-semibold tracking-[-0.04em] text-[var(--im-ink)]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[13.5px] leading-snug text-[var(--im-ink-soft)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-12 grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14 md:mt-16">
            <ArticleSidebar
              backHref={`/resources/${collection.slug}`}
              backLabel={`All ${collection.label.toLowerCase()}`}
              meta={[
                { label: "Read", value: resource.readTime },
                { label: "Published", value: resource.date },
                { label: "Topic", value: resource.category },
              ]}
              toc={toc}
              tags={resource.tags}
            />

            <div className="max-w-[720px]">
              {resource.body.map((block, index) => {
                if (block.type === "h2") {
                  return (
                    <h2
                      key={index}
                      id={slugifyHeading(block.text)}
                      className="mt-12 scroll-mt-28 text-[clamp(1.4rem,2.5vw,1.9rem)] font-semibold leading-[1.15] tracking-[-0.035em] text-[var(--im-ink)] first:mt-0"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "h3") {
                  return (
                    <h3
                      key={index}
                      className="mt-8 text-[18px] font-semibold tracking-[-0.02em] text-[var(--im-ink)]"
                    >
                      {block.text}
                    </h3>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <ul key={index} className="mt-5 space-y-3">
                      {block.items.map((item) => (
                        <li
                          key={item}
                          className="relative pl-5 text-[16px] leading-relaxed text-[var(--im-ink-soft)] before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--im-muted)]"
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
                    className="mt-5 text-[16.5px] leading-[1.75] text-[var(--im-ink-soft)]"
                  >
                    {block.text}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </article>

      {related.length ? (
        <section className="pt-20 pb-16 md:pt-24 md:pb-20">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-[-0.04em]">
              More in {collection.label.toLowerCase()}
            </h2>
            <div className="mt-7 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ResourceCard key={item.slug} resource={item} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div className="pb-10" />
      )}

      <FinalCTA />
    </>
  );
}
