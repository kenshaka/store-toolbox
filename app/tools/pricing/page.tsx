import ToolCategoryLandingPage from "@/components/tool-category-landing-page";
import { getToolCategoryPageMetadata } from "@/lib/tool-category-pages";

export const metadata = getToolCategoryPageMetadata("pricing");

export default function PricingToolsPage() {
  return <ToolCategoryLandingPage categorySlug="pricing" />;
}
