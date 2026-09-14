import type { MetadataRoute } from "next";
import { RESOURCES } from "@/content/marketing/resources";
import { siteUrl } from "@/lib/site";

const paths = [
  "/",
  "/creators",
  "/brands",
  "/agencies",
  "/platform",
  "/features",
  "/creator-discovery",
  "/campaign-management",
  "/analytics",
  "/social-intelligence",
  "/ai",
  "/about",
  "/careers",
  "/faq",
  "/resources",
  "/resources/insights",
  "/resources/case-studies",
  "/resources/blog",
  ...RESOURCES.map((resource) => `/resources/${resource.slug}`),
  "/contact",
  "/privacy",
  "/terms",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/faq" ? 0.8 : 0.7,
  }));
}
