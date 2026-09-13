import type { Metadata } from "next";
import { ContactPage } from "@/components/marketing/ContactPage";
import { contactPage } from "@/content/marketing/contact";

export const metadata: Metadata = {
  title: contactPage.title,
  description: contactPage.description,
  openGraph: {
    title: contactPage.title,
    description: contactPage.description,
  },
};

export default function Page() {
  return <ContactPage />;
}
