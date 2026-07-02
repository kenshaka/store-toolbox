import ToolCategoryLandingPage from "@/components/tool-category-landing-page";
import { getToolCategoryPageMetadata } from "@/lib/tool-category-pages";

export const metadata = getToolCategoryPageMetadata("promotion");

export default function PromotionToolsPage() {
  return <ToolCategoryLandingPage categorySlug="promotion" />;
}
