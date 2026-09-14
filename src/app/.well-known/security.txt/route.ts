import { siteUrl } from "@/lib/site";

export async function GET() {
  const base = siteUrl();
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);

  const body = [
    "Contact: mailto:support@inmind.media",
    `Expires: ${expires.toISOString()}`,
    "Preferred-Languages: en",
    `Canonical: ${base}/.well-known/security.txt`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
