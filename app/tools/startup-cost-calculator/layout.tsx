import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { getToolStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  alternates: {
    canonical: "/tools/startup-cost-calculator",
  },
  title: "開店要準備多少錢？開店成本、裝潢設備與周轉金試算",
  description:
    "想知道開店成本怎麼算？免費開店成本試算器可輸入押金、裝潢、設備、初期備料、開幕行銷與周轉金，快速估算餐廳、小吃店、飲料店開店前需要準備多少啟動資金。",
  keywords: [
    "開店成本試算器",
    "開店成本計算",
    "開店預算",
    "餐飲開店成本",
    "小吃店開店成本",
    "飲料店開店成本",
    "裝潢設備成本",
    "周轉金",
  ],
  openGraph: {
    title: "開店要準備多少錢？｜開店小工具箱",
    description:
      "輸入押金、裝潢、設備、備料與周轉金，快速估算小店開店前需要準備多少錢。",
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

export default function StartupCostCalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <JsonLd data={getToolStructuredData("startupCostCalculator")} />
      {children}
    </>
  );
}
