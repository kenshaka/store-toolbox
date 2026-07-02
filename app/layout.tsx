import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import Script from "next/script";
import { getWebsiteStructuredData } from "@/lib/structured-data";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import "./globals.css";

const gaMeasurementId = "G-EQXRCDDHPT";

export const metadata: Metadata = {
  title: {
    default: "開店小工具箱｜餐飲毛利、開店成本、損益兩平試算工具",
    template: "%s｜開店小工具箱",
  },
  description:
    "開店小工具箱提供餐飲店、小吃店、飲料店常用的營運試算工具，包含餐飲毛利率、滿額加購、折扣活動、菜單漲價、外送平台抽成、開店成本、損益兩平與人事成本占比試算，幫助小店老闆在定價、促銷或開店前先算清楚。",
  keywords: [
    "開店工具",
    "餐飲毛利率計算器",
    "滿額加購計算器",
    "折扣活動計算器",
    "外送平台抽成試算器",
    "菜單漲價試算器",
    "開店損益兩平試算器",
    "開店成本試算器",
    "人事成本占比試算器",
    "餐飲定價",
    "小吃店經營",
    "飲料店經營",
    "開店成本",
    "小店老闆工具",
  ],
  authors: [{ name: "開店小工具箱" }],
  creator: "開店小工具箱",
  verification: {
    google: "7h4UCCg5sFtqIh2i73rOb4gG36E3hZFuJuvRG9CLdbo",
  },
  openGraph: {
    title: "開店小工具箱｜餐飲毛利、開店成本、損益兩平試算工具",
    description:
      "給小店老闆使用的簡單試算工具，快速計算餐飲毛利率、滿額加購、折扣活動、外送抽成、菜單漲價、開店成本、損益兩平與人事成本占比。",
    type: "website",
    locale: "zh_TW",
    siteName: "開店小工具箱",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant-TW">
      <body className="bg-stone-50 text-stone-900 antialiased">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaMeasurementId}');
            `,
          }}
        />
        <JsonLd data={getWebsiteStructuredData()} />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
