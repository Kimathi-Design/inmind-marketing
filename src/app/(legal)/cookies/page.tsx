import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/LegalPage";
import { findLegalDoc } from "@/content/marketing/legal";

const doc = findLegalDoc("cookies")!;

export const metadata: Metadata = {
  title: doc.title,
  description: doc.description,
};

export default function CookiesPage() {
  return <LegalPage doc={doc} />;
}
