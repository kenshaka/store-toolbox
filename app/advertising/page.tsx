import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/advertising",
  },
  title: "廣告與合作揭露",
  description:
    "開店小工具箱的廣告與合作揭露，說明本站可能使用的廣告、Cookie、第三方廣告服務、內容獨立性與聯絡方式。",
  keywords: [
    "開店小工具箱廣告",
    "廣告揭露",
    "合作揭露",
    "Google AdSense",
    "Cookie 說明",
  ],
  openGraph: {
    title: "廣告與合作揭露｜開店小工具箱",
    description:
      "說明開店小工具箱可能使用的廣告服務、Cookie、內容獨立性與合作聯絡方式。",
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

export default function AdvertisingPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
          <p className="text-sm font-semibold text-orange-700">
            Advertising Disclosure
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            廣告與合作揭露
          </h1>

          <p className="mt-4 text-sm text-stone-500">
            最後更新日期：2026 年 7 月 11 日
          </p>

          <div className="mt-8 space-y-8 leading-8 text-stone-700">
            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                一、本站的營運方式
              </h2>
              <p className="mt-3">
                開店小工具箱提供餐飲店、小吃店、飲料店與小型商家使用的免費試算工具與文章內容。
                為了維持網站營運、主機費用與後續內容更新，本站可能透過第三方廣告服務或合作內容取得收入。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                二、第三方廣告服務
              </h2>
              <p className="mt-3">
                本站可能使用 Google AdSense 或其他第三方廣告服務。第三方廣告供應商可能會使用
                Cookie、裝置識別碼或類似技術，依使用者造訪本站或其他網站的情況，顯示一般或個人化廣告。
              </p>
              <p className="mt-3">
                廣告內容由第三方廣告服務或廣告主提供，本站無法保證每一則廣告內容、商品、服務或外部網站都符合使用者需求。
                使用者點擊廣告後進入第三方網站，應自行判斷該網站的內容、交易條件與隱私權政策。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                三、內容獨立性
              </h2>
              <p className="mt-3">
                本站的工具公式、文章說明與經營建議會盡量以小店常見情境與實用性為優先。
                廣告投放或合作收入不代表本站保證特定商品、平台、服務或廣告主的效果。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                四、Cookie 與隱私權
              </h2>
              <p className="mt-3">
                關於 Cookie、網站流量分析、第三方服務與資料處理方式，請參考本站的
                <Link href="/privacy" className="font-bold text-orange-700 hover:underline">
                  隱私權政策
                </Link>
                。使用者也可以透過瀏覽器設定封鎖、刪除或限制 Cookie。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                五、合作與廣告聯絡
              </h2>
              <p className="mt-3">
                如果你有內容合作、工具合作、錯誤回報或廣告相關問題，請透過
                <Link href="/contact" className="font-bold text-orange-700 hover:underline">
                  聯絡我們
                </Link>
                頁面與本站聯繫。
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
