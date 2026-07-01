import type { Metadata } from "next";

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
  },
};

export default function AddOnPromotionCalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}