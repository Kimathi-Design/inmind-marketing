import { pageMetadata } from "@/components/marketing/MarketingStoryPage";
import { PlatformStoryPage } from "@/components/marketing/PlatformStoryPage";
import { featuresPlatformPage } from "@/content/marketing/platform-pages";

export const metadata = pageMetadata(featuresPlatformPage);

export default function Page() {
  return <PlatformStoryPage cfg={featuresPlatformPage} />;
}
