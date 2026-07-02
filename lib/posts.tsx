import type { Metadata } from "next";
import { addOnPromotionExamplePost } from "@/content/posts/add-on-promotion-example";
import { addOnVsDiscountPromotionPost } from "@/content/posts/add-on-vs-discount-promotion";
import { discountPromotionProfitPost } from "@/content/posts/discount-promotion-profit";
import { drinkShopMarginPost } from "@/content/posts/drink-shop-margin";
import { foodDeliveryPlatformFeePost } from "@/content/posts/food-delivery-platform-fee";
import { foodPricingFormulaPost } from "@/content/posts/food-pricing-formula";
import { increaseAverageOrderValuePost } from "@/content/posts/increase-average-order-value";
import { menuPriceIncreasePost } from "@/content/posts/menu-price-increase";
import { restaurantFoodCostItemsPost } from "@/content/posts/restaurant-food-cost-items";
import { restaurantMarginBenchmarkPost } from "@/content/posts/restaurant-margin-benchmark";
import { restaurantMarginHowToCalculatePost } from "@/content/posts/restaurant-margin-how-to-calculate";
import { restaurantPromotionChecklistPost } from "@/content/posts/restaurant-promotion-checklist";
import { restaurantPromotionCostPost } from "@/content/posts/restaurant-promotion-cost";
import type { BlogPost } from "@/lib/post-types";

export type { BlogPost } from "@/lib/post-types";

export const posts: BlogPost[] = [
  addOnPromotionExamplePost,
  restaurantMarginHowToCalculatePost,
  discountPromotionProfitPost,
  foodPricingFormulaPost,
  drinkShopMarginPost,
  addOnVsDiscountPromotionPost,
  foodDeliveryPlatformFeePost,
  restaurantPromotionCostPost,
  restaurantFoodCostItemsPost,
  restaurantMarginBenchmarkPost,
  menuPriceIncreasePost,
  restaurantPromotionChecklistPost,
  increaseAverageOrderValuePost,
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getPostMetadata(post: BlogPost): Metadata {
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.openGraphTitle,
      description: post.openGraphDescription,
      type: "article",
      locale: "zh_TW",
      siteName: "開店小工具箱",
    },
  };
}
