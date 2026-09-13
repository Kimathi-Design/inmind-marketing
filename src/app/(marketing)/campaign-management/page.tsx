import { pageMetadata } from "@/components/marketing/MarketingStoryPage";
import { PlatformStoryPage } from "@/components/marketing/PlatformStoryPage";
import { campaignsPlatformPage } from "@/content/marketing/platform-pages";

export const metadata = pageMetadata(campaignsPlatformPage);

export default function Page() {
  return <PlatformStoryPage cfg={campaignsPlatformPage} />;
}
