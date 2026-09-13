import {
  pageMetadata,
} from "@/components/marketing/MarketingStoryPage";
import { PlatformStoryPage } from "@/components/marketing/PlatformStoryPage";
import { platformOverviewPage } from "@/content/marketing/platform-pages";

export const metadata = pageMetadata(platformOverviewPage);

export default function Page() {
  return <PlatformStoryPage cfg={platformOverviewPage} />;
}
