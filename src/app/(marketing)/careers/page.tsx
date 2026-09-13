import type { Metadata } from "next";
import { CareersPage } from "@/components/marketing/CareersPage";
import { careersContent } from "@/content/marketing/careers";

export const metadata: Metadata = {
  title: careersContent.title,
  description: careersContent.description,
  openGraph: {
    title: careersContent.title,
    description: careersContent.description,
  },
};

export default function Page() {
  return <CareersPage />;
}
