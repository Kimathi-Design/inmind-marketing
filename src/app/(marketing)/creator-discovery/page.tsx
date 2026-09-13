import { pageMetadata } from "@/components/marketing/MarketingStoryPage";
import { PlatformStoryPage } from "@/components/marketing/PlatformStoryPage";
import { discoveryPlatformPage } from "@/content/marketing/platform-pages";

export const metadata = pageMetadata(discoveryPlatformPage);

export default function Page() {
  return <PlatformStoryPage cfg={discoveryPlatformPage} />;
}
