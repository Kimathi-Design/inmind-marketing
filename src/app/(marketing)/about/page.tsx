import type { Metadata } from "next";
import { AboutPage } from "@/components/marketing/AboutPage";
import { aboutContent } from "@/content/marketing/about";

export const metadata: Metadata = {
  title: aboutContent.title,
  description: aboutContent.description,
  openGraph: {
    title: aboutContent.title,
    description: aboutContent.description,
  },
};

export default function Page() {
  return <AboutPage />;
}
