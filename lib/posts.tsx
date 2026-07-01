import type { Metadata } from "next";
import { addOnPromotionExamplePost } from "@/content/posts/add-on-promotion-example";
import { discountPromotionProfitPost } from "@/content/posts/discount-promotion-profit";
import { restaurantMarginHowToCalculatePost } from "@/content/posts/restaurant-margin-how-to-calculate";
import type { BlogPost } from "@/lib/post-types";

export type { BlogPost } from "@/lib/post-types";

export const posts: BlogPost[] = [
  addOnPromotionExamplePost,
  restaurantMarginHowToCalculatePost,
  discountPromotionProfitPost,
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
