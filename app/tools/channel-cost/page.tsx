import ToolCategoryLandingPage from "@/components/tool-category-landing-page";
import { getToolCategoryPageMetadata } from "@/lib/tool-category-pages";

export const metadata = getToolCategoryPageMetadata("channelCost");

export default function ChannelCostToolsPage() {
  return <ToolCategoryLandingPage categorySlug="channelCost" />;
}
