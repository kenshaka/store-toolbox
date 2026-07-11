import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/privacy",
  },
  title: "隱私權政策",
  description:
    "開店小工具箱的隱私權政策，說明本網站如何處理使用者資料、Cookie、第三方服務、流量分析與廣告相關資訊。",
  openGraph: {
    title: "隱私權政策｜開店小工具箱",
    description:
      "說明開店小工具箱如何處理使用者資料、Cookie、第三方服務與流量分析。",
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

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#fffaf3] text-stone-950">
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-3xl border border-orange-100/80 bg-white/95 p-6 shadow-sm shadow-orange-950/5 sm:p-10">
          <p className="text-sm font-semibold text-orange-700">
            Privacy Policy
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            隱私權政策
          </h1>

          <p className="mt-4 text-sm text-stone-500">
            最後更新日期：2026 年 7 月 11 日
          </p>

          <div className="mt-8 space-y-8 leading-8 text-stone-700">
            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                一、關於本網站
              </h2>
              <p className="mt-3">
                開店小工具箱是一個提供餐飲店、小吃店、飲料店等商店老闆使用的線上試算工具網站。
                本網站目前提供餐飲毛利率、滿額加購、折扣活動、菜單漲價、外送平台抽成、開店成本、損益兩平與人事成本占比等試算工具，
                協助使用者進行基礎定價、促銷活動、通路成本與開店營運試算。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                二、本網站目前蒐集的資料
              </h2>
              <p className="mt-3">
                本網站目前不要求使用者註冊帳號，也不要求使用者主動提供姓名、電話、電子郵件、
                地址、付款資料或其他可直接識別個人的資料。
              </p>
              <p className="mt-3">
                使用者在計算器中輸入的數字，例如商品售價、成本、折扣、每日訂單數等，
                目前僅在使用者的瀏覽器中即時計算，不會主動儲存到本網站資料庫。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                三、網站紀錄與技術資料
              </h2>
              <p className="mt-3">
                當使用者瀏覽本網站時，網站主機、瀏覽器或第三方服務可能會自動產生部分技術紀錄，
                例如瀏覽器類型、裝置資訊、作業系統、造訪時間、頁面瀏覽紀錄、IP 位址或錯誤紀錄。
                這些資料主要用於維持網站正常運作、改善網站效能、排除錯誤與分析整體使用情況。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                四、Cookie 與類似技術
              </h2>
              <p className="mt-3">
                本網站可能使用 Cookie 或類似技術，以便提供網站功能、分析流量、
                改善使用體驗、衡量內容成效或顯示廣告。Cookie 是網站儲存在使用者瀏覽器中的小型文字檔案，
                可協助網站記住部分設定或辨識瀏覽器。
              </p>
              <p className="mt-3">
                第三方廣告服務供應商可能會使用 Cookie、裝置識別碼或類似技術，
                依使用者造訪本網站或其他網站的情況顯示一般或個人化廣告。
              </p>
              <p className="mt-3">
                使用者可以透過瀏覽器設定封鎖、刪除或限制 Cookie。不過，停用部分 Cookie
                可能會影響某些網站功能、流量分析或廣告顯示。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                五、第三方服務
              </h2>
              <p className="mt-3">
                本網站可能使用第三方服務，例如網站流量分析、廣告投放、網站主機、
                安全防護或錯誤監控服務。這些第三方服務可能依其自身隱私權政策處理相關資料。
              </p>
              <p className="mt-3">
                本網站使用 Google Analytics 協助分析使用者如何瀏覽本網站，
                例如頁面瀏覽、停留時間、裝置類型與流量來源等資訊。
              </p>
              <p className="mt-3">
                本網站可能使用 Google AdSense 或其他廣告服務。第三方廣告供應商可能會使用
                Cookie 或類似技術，根據使用者造訪本網站或其他網站的情況顯示相關廣告。
              </p>
              <p className="mt-3">
                關於本站廣告、合作內容與第三方廣告服務的說明，請參考
                <Link href="/advertising" className="font-bold text-orange-700 hover:underline">
                  廣告與合作揭露
                </Link>
                頁面。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                六、資料使用目的
              </h2>
              <p className="mt-3">本網站可能基於以下目的使用相關資料：</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>提供、維護與改善網站功能。</li>
                <li>分析網站流量與使用情況。</li>
                <li>排除錯誤、維護網站安全與穩定性。</li>
                <li>改善頁面內容、工具設計與使用者體驗。</li>
                <li>顯示廣告或衡量廣告成效。</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                七、資料分享
              </h2>
              <p className="mt-3">
                本網站不會出售使用者的個人資料。惟在網站營運、主機代管、流量分析、
                廣告服務、法律要求或維護網站安全的必要範圍內，可能會與相關第三方服務提供者
                處理必要資料。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                八、外部連結
              </h2>
              <p className="mt-3">
                本網站可能包含連往第三方網站的連結。使用者點擊外部連結後，
                將進入非本網站控制的網站。該第三方網站的資料處理方式，應以其自身隱私權政策為準。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                九、兒童隱私
              </h2>
              <p className="mt-3">
                本網站內容主要提供給商店營運相關使用者參考，
                並非以兒童為主要服務對象。本網站不會故意蒐集兒童的個人資料。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                十、隱私權政策的修改
              </h2>
              <p className="mt-3">
                本網站可能因功能調整、第三方服務變更、法規或營運需求而更新本隱私權政策。
                政策更新後，將於本頁面修改最後更新日期。建議使用者定期查看本頁內容。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                十一、聯絡方式
              </h2>
              <p className="mt-3">
                如果你對本隱私權政策或資料處理方式有任何問題，請透過
                <Link href="/contact" className="font-bold text-orange-700 hover:underline">
                  聯絡我們
                </Link>
                頁面與我們聯繫。
              </p>
            </section>

            <div className="rounded-2xl border border-orange-100/80 bg-orange-50/50 p-5 text-sm leading-7 text-stone-600">
              <p>
                提醒：本頁內容為一般網站隱私權政策範本，並非法律意見。
                若網站未來加入會員系統、付款功能、表單、電子報或跨境服務，
                建議依實際功能重新調整本政策內容。
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}