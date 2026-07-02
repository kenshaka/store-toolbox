import ToolCategoryLandingPage from "@/components/tool-category-landing-page";
import { getToolCategoryPageMetadata } from "@/lib/tool-category-pages";

export const metadata = getToolCategoryPageMetadata("operations");

export default function StoreOperationsToolsPage() {
  return <ToolCategoryLandingPage categorySlug="operations" />;
}
