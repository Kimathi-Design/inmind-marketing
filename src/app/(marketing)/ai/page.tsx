import { pageMetadata } from "@/components/marketing/MarketingStoryPage";
import { PlatformStoryPage } from "@/components/marketing/PlatformStoryPage";
import { aiPlatformPage } from "@/content/marketing/platform-pages";

export const metadata = pageMetadata(aiPlatformPage);

export default function Page() {
  return <PlatformStoryPage cfg={aiPlatformPage} />;
}
