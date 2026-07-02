import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { getToolStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "開店損益兩平試算器",
  description:
    "免費開店損益兩平試算器，輸入租金、人事、水電、固定支出、平均客單價與毛利率，快速估算每月營業額與每日訂單數要做到多少才不虧。",
  keywords: [
    "開店損益兩平試算器",
    "損益兩平計算",
    "開店營業額試算",
    "餐飲店損益兩平",
    "小吃店營業額",
    "平均客單價",
    "餐飲毛利率",
    "開店成本",
  ],
  openGraph: {
    title: "開店損益兩平試算器｜開店小工具箱",
    description:
      "輸入固定成本、平均客單價與毛利率，快速估算小店每月要做到多少營業額、每天要賣幾筆才打平。",
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

export default function BreakEvenCalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <JsonLd data={getToolStructuredData("breakEvenCalculator")} />
      {children}
    </>
  );
}
