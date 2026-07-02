import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { getToolStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "滿額加購活動計算器",
  description:
    "免費滿額加購活動計算器，輸入滿額門檻、加購價、商品成本、加購率與每日訂單數，快速試算餐飲店、小吃店、飲料店的加購活動是否划算。",
  keywords: [
    "滿額加購計算器",
    "滿額加購活動",
    "加購價計算",
    "餐飲促銷活動",
    "小吃店活動",
    "飲料店活動",
    "餐飲毛利",
  ],
  openGraph: {
    title: "滿額加購活動計算器｜開店小工具箱",
    description:
      "輸入滿額門檻、加購價與商品成本，快速試算滿額加購活動會不會賺錢。",
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

export default function AddOnPromotionCalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <JsonLd data={getToolStructuredData("addOnPromotionCalculator")} />
      {children}
    </>
  );
}
