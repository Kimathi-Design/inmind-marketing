import { pageMetadata } from "@/components/marketing/MarketingStoryPage";
import { PlatformStoryPage } from "@/components/marketing/PlatformStoryPage";
import { analyticsPlatformPage } from "@/content/marketing/platform-pages";

export const metadata = pageMetadata(analyticsPlatformPage);

export default function Page() {
  return <PlatformStoryPage cfg={analyticsPlatformPage} />;
}
