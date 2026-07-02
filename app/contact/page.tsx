import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import TrackedLink from "@/components/tracked-link";
import { getContactStructuredData } from "@/lib/structured-data";

const contactEmail = "stbnpc168@gmail.com";
const mailtoHref = `mailto:${contactEmail}`;

export const metadata: Metadata = {
  alternates: {
    canonical: "/contact",
  },
  title: "聯絡我們",
  description:
    "聯絡開店小工具箱：如果你有工具建議、錯誤回報、合作需求或網站內容相關問題，歡迎透過電子郵件與我們聯繫。",
  keywords: [
    "開店小工具箱聯絡",
    "聯絡我們",
    "工具建議",
    "錯誤回報",
    "餐飲工具合作",
    "開店工具建議",
  ],
  openGraph: {
    title: "聯絡我們｜開店小工具箱",
    description:
      "如果你有工具建議、錯誤回報、合作需求或網站內容相關問題，歡迎聯絡開店小工具箱。",
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

const contactReasons = [
  "發現工具頁數字、文案或操作流程有錯誤。",
  "希望新增某一種餐飲、開店或小店經營試算工具。",
  "想提供使用心得、改善建議或真實經營情境。",
  "有內容合作、工具合作或其他商務合作需求。",
];

const emailTips = [
  "你使用的頁面網址或工具名稱。",
  "遇到的問題、建議或想新增的功能。",
  "如果是錯誤回報，可以附上輸入數字、截圖或重現步驟。",
  "如果是合作需求，可以簡單說明合作方式與聯絡人資訊。",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={getContactStructuredData(contactEmail)} />
      <main className="bg-stone-50 text-stone-900">
        <section className="mx-auto max-w-5xl px-6 py-12">
          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
            <p className="text-sm font-semibold text-orange-700">
              Contact
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight">
              聯絡我們
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
              如果你有工具建議、錯誤回報、合作需求，或想提供開店小工具箱的改善意見，
              歡迎透過電子郵件聯繫。本站目前不使用表單，也不需要註冊帳號。
            </p>

            <div className="mt-8 rounded-3xl border border-orange-200 bg-orange-50 p-6">
              <p className="text-sm font-semibold text-orange-800">
                聯絡信箱
              </p>
              <a
                href={mailtoHref}
                className="mt-3 inline-flex text-2xl font-bold text-orange-900 hover:text-orange-700 hover:underline"
              >
                {contactEmail}
              </a>
              <p className="mt-4 text-sm leading-6 text-orange-950">
                點擊信箱會開啟你裝置預設的寄信工具；也可以直接複製信箱到 Gmail 或其他信箱服務寄信。
              </p>
            </div>
          </div>

          <section className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold">
                適合來信的情況
              </h2>

              <ul className="mt-5 space-y-3">
                {contactReasons.map((reason) => (
                  <li
                    key={reason}
                    className="rounded-2xl bg-stone-100 p-4 text-sm leading-6 text-stone-700"
                  >
                    {reason}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold">
                來信時建議附上
              </h2>

              <ul className="mt-5 space-y-3">
                {emailTips.map((tip) => (
                  <li
                    key={tip}
                    className="rounded-2xl bg-stone-100 p-4 text-sm leading-6 text-stone-700"
                  >
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">
              關於試算結果與專業建議
            </h2>

            <p className="mt-4 leading-7 text-stone-700">
              開店小工具箱提供的是一般經營試算工具與內容整理，適合用來做定價、促銷、開店成本與營運壓力的初步判斷。
              如果你的問題涉及稅務、法律、會計申報、合約或投資決策，建議另外諮詢合格的專業人士。
            </p>
          </section>

          <section className="mt-8 rounded-3xl bg-stone-900 p-6 text-white shadow-sm sm:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold text-orange-300">
                  還不確定要問什麼？
                </p>
                <h2 className="mt-2 text-2xl font-bold">
                  先看看常見問題或直接使用工具
                </h2>
                <p className="mt-3 max-w-2xl leading-7 text-stone-300">
                  常見問題整理了工具結果、資料儲存、免費使用與使用限制等說明。
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/faq"
                  className="rounded-full bg-white px-5 py-3 text-sm font-bold text-stone-900 transition hover:bg-orange-100"
                >
                  查看常見問題
                </Link>
                <TrackedLink
                  href="/tools"
                  eventName="click_nav"
                  eventParams={{ nav_item: "工具總覽", destination: "/tools" }}
                  className="rounded-full border border-stone-500 px-5 py-3 text-sm font-bold text-white transition hover:border-orange-300 hover:text-orange-200"
                >
                  查看所有工具
                </TrackedLink>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
