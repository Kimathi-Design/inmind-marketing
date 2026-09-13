import { pageMetadata } from "@/components/marketing/MarketingStoryPage";
import { PlatformStoryPage } from "@/components/marketing/PlatformStoryPage";
import { socialPlatformPage } from "@/content/marketing/platform-pages";

export const metadata = pageMetadata(socialPlatformPage);

export default function Page() {
  return <PlatformStoryPage cfg={socialPlatformPage} />;
}
