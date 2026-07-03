import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { getToolStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  alternates: {
    canonical: "/tools/menu-price-increase-calculator",
  },
  title: "菜單漲價怎麼算？成本上漲後售價與毛利試算",
  description:
    "想知道成本上漲後要不要漲價？免費菜單漲價試算器可輸入目前售價、目前成本、成本上漲後成本、預計調漲金額與每日銷量，估算漲價後毛利與銷量打平點。",
  keywords: [
    "菜單漲價試算器",
    "餐飲漲價計算",
    "菜單定價",
    "餐飲定價",
    "餐飲毛利率",
    "成本上漲",
    "小吃店漲價",
    "飲料店漲價",
  ],
  openGraph: {
    title: "菜單漲價怎麼算？｜開店小工具箱",
    description:
      "輸入售價、成本、漲價金額與預估銷量，快速試算菜單漲價後毛利是否改善。",
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

export default function MenuPriceIncreaseCalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <JsonLd data={getToolStructuredData("menuPriceIncreaseCalculator")} />
      {children}
    </>
  );
}
