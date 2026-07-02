import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { getToolStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "折扣活動損益計算器",
  description:
    "免費折扣活動損益計算器，輸入商品原價、活動售價、成本、原本銷量與活動後預估銷量，快速判斷打折促銷後毛利是增加還是減少。",
  keywords: [
    "折扣活動計算器",
    "促銷活動計算",
    "打折會不會虧",
    "餐飲折扣活動",
    "毛利試算",
    "小吃店促銷",
    "飲料店促銷",
    "活動毛利",
  ],
  openGraph: {
    title: "折扣活動損益計算器｜開店小工具箱",
    description:
      "輸入原價、活動價、成本與預估銷量，快速判斷打折活動是否划算。",
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

export default function DiscountProfitCalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <JsonLd data={getToolStructuredData("discountProfitCalculator")} />
      {children}
    </>
  );
}
