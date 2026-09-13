import type { Metadata } from "next";
import { FinalCTA } from "@/components/marketing/HomeSections";
import { ResourceCollection } from "@/components/marketing/ResourceCollection";
import {
  categoriesForKind,
  collectionForKind,
  resourcesByKind,
  RESOURCE_COLLECTIONS,
} from "@/content/marketing/resources";

const collection = collectionForKind("blog");

export const metadata: Metadata = {
  title: collection.label,
  description: collection.description,
};

export default function Page() {
  const counts = Object.fromEntries(
    RESOURCE_COLLECTIONS.map((c) => [c.kind, resourcesByKind(c.kind).length])
  );

  return (
    <>
      <ResourceCollection
        kind="blog"
        eyebrow={collection.label}
        title={collection.title}
        description={collection.description}
        resources={resourcesByKind("blog")}
        categories={categoriesForKind("blog")}
        counts={counts}
      />
      <FinalCTA />
    </>
  );
}
