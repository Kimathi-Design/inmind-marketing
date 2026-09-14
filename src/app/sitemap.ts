import type { MetadataRoute } from "next";
import { RESOURCES } from "@/content/marketing/resources";

const BASE =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://inmind.media");

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
  return paths.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
