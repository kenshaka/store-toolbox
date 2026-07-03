import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { getToolStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  alternates: {
    canonical: "/tools/food-delivery-fee-calculator",
  },
  title: "外送抽成怎麼算？外送平台抽成後實收與毛利試算",
  description:
    "想知道外送平台抽成後還剩多少？免費外送平台抽成試算器可輸入外送售價、食材成本、包材成本、平台抽成、店家補貼與每日訂單數，估算外送成本、抽成後毛利與建議售價。",
  keywords: [
    "外送平台抽成試算器",
    "外送抽成計算",
    "餐飲外送成本",
    "外送毛利",
    "平台抽成",
    "外送定價",
    "餐飲毛利率",
    "小吃店外送",
  ],
  openGraph: {
    title: "外送抽成怎麼算？｜開店小工具箱",
    description:
      "輸入外送售價、成本、平台抽成與每日訂單數，快速試算外送訂單抽成後還剩多少毛利。",
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

export default function FoodDeliveryFeeCalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <JsonLd data={getToolStructuredData("foodDeliveryFeeCalculator")} />
      {children}
    </>
  );
}
