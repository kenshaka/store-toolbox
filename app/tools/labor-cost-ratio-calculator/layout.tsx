import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { getToolStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  alternates: {
    canonical: "/tools/labor-cost-ratio-calculator",
  },
  title: "人事成本怎麼算？薪資占營業額比例與目標營業額試算",
  description:
    "想知道員工薪水占比會不會太高？免費人事成本占比計算器可輸入月營業額、正職薪資、兼職時數、老闆薪資與額外人事負擔，估算薪資占營業額比例。",
  keywords: [
    "人事成本占比試算器",
    "人事成本計算",
    "餐飲人事成本",
    "薪資占營業額",
    "小吃店人事成本",
    "飲料店人事成本",
    "排班成本",
    "餐飲營業額",
  ],
  openGraph: {
    title: "人事成本怎麼算？｜開店小工具箱",
    description:
      "輸入營業額、正職薪資、兼職時數與老闆薪資，快速估算人事成本占比與目標營業額。",
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

export default function LaborCostRatioCalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <JsonLd data={getToolStructuredData("laborCostRatioCalculator")} />
      {children}
    </>
  );
}
