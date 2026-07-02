import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { getToolStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "餐飲毛利率計算器",
  description:
    "免費餐飲毛利率計算器，輸入商品售價、食材成本、包材成本、平台抽成與目標毛利率，快速計算單品毛利、毛利率與建議售價。",
  keywords: [
    "餐飲毛利率計算器",
    "毛利率計算",
    "餐飲定價",
    "餐點成本計算",
    "食材成本計算",
    "外送平台抽成",
    "小吃店定價",
    "飲料店毛利",
  ],
  openGraph: {
    title: "餐飲毛利率計算器｜開店小工具箱",
    description:
      "輸入售價、食材成本、包材成本與平台抽成，快速計算餐飲商品毛利率。",
    type: "website",
    locale: "zh_TW",
    siteName: "開店小工具箱",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "開店小工具箱：餐飲毛利、開店成本、損益兩平試算工具",
      },
    ],
  },
};

export default function RestaurantMarginCalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <JsonLd data={getToolStructuredData("restaurantMarginCalculator")} />
      {children}
    </>
  );
}
