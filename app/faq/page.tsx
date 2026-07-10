import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import TrackedLink from "@/components/tracked-link";
import { getGeneralFaqStructuredData } from "@/lib/structured-data";
import type { FaqItem } from "@/lib/tools";

const faqs: FaqItem[] = [
  {
    question: "這些試算結果可以直接當作定價依據嗎？",
    answer:
      "不建議直接照抄。本站工具適合做定價、促銷與開店前的初步試算，實際決策仍要搭配你的食材成本、租金、人事、水電、淡旺季、備料損耗與現場營運狀況判斷。",
  },
  {
    question: "餐飲毛利率和淨利率差在哪？",
    answer:
      "餐飲毛利率通常只看商品售價扣掉食材、包材、平台抽成等直接成本後剩下的比例；淨利率還會再扣掉租金、人事、水電、行銷、稅務與其他營運費用。",
  },
  {
    question: "工具會儲存我輸入的數字嗎？",
    answer:
      "目前不會。本站計算器的數字是在瀏覽器中即時計算，不需要註冊帳號，也不會把你輸入的售價、成本、訂單數等資料主動儲存到網站資料庫。",
  },
  {
    question: "這些工具是否免費？",
    answer:
      "目前開店小工具箱提供的試算工具可以免費使用。本站可能透過廣告或合作內容維持營運，但工具是否免費、是否有其他服務，仍會以網站頁面實際說明為準。",
  },
  {
    question: "網站上的廣告會影響試算結果嗎？",
    answer:
      "不會。本站工具的公式與試算結果不會因廣告內容而改變。若網站顯示 Google AdSense 或其他第三方廣告，廣告內容由第三方服務或廣告主提供；使用者點擊廣告後進入外部網站，應自行判斷該網站內容與交易條件。",
  },
  {
    question: "外送平台抽成試算包含哪些成本？",
    answer:
      "外送平台抽成試算主要用來估算平台抽成、食材成本、包材成本、店家補貼與外送售價對毛利的影響。實際還可能有平台活動費、行銷費、出餐壓力與客訴成本，需要依店家狀況另外評估。",
  },
  {
    question: "開店成本試算適合哪些店？",
    answer:
      "開店成本試算適合餐飲店、小吃店、飲料店、外帶店、攤商與小型商店做初步預算。若是大型餐廳、加盟展店或高額裝潢設備投資，建議再另外製作更完整的資金表與現金流估算。",
  },
  {
    question: "可以把試算結果複製給夥伴或店長嗎？",
    answer:
      "可以。多數工具頁都有複製試算結果按鈕，方便你把摘要貼到 LINE、記事本、簡報或內部討論中。不過複製內容仍只是試算摘要，正式決策前建議重新確認輸入數字。",
  },
  {
    question: "可以建議新增工具或回報錯誤嗎？",
    answer:
      "可以。如果你希望新增特定餐飲、促銷、開店或營運試算工具，或發現頁面內容、公式、文字有問題，可以透過聯絡頁提供建議或回報。",
  },
];

export const metadata: Metadata = {
  alternates: {
    canonical: "/faq",
  },
  title: "常見問題",
  description:
    "開店小工具箱常見問題：整理試算結果使用方式、餐飲毛利率、外送平台抽成、開店成本、資料儲存、免費使用、廣告揭露與錯誤回報等說明。",
  keywords: [
    "開店小工具箱常見問題",
    "餐飲毛利率問題",
    "開店工具 FAQ",
    "外送平台抽成試算",
    "開店成本試算",
    "試算工具資料儲存",
    "餐飲工具免費",
    "廣告揭露",
  ],
  openGraph: {
    title: "常見問題｜開店小工具箱",
    description:
      "整理開店小工具箱的試算結果、資料儲存、免費使用、廣告揭露、外送抽成、開店成本與錯誤回報等常見問題。",
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

export default function FaqPage() {
  return (
    <>
      <JsonLd data={getGeneralFaqStructuredData(faqs)} />
      <main className="bg-stone-50 text-stone-900">
        <section className="mx-auto max-w-5xl px-6 py-12">
          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
            <p className="text-sm font-semibold text-orange-700">
              FAQ
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight">
              常見問題
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
              這裡整理開店小工具箱常見的使用問題，包含試算結果怎麼看、資料是否會被儲存、
              工具是否免費、廣告是否影響內容，以及外送抽成、開店成本與毛利率等常見觀念。
            </p>
          </div>

          <div className="mt-8 grid gap-5">
            {faqs.map((faq, index) => (
              <section
                key={faq.question}
                className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-sm font-bold text-orange-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-stone-900">
                      {faq.question}
                    </h2>
                    <p className="mt-3 leading-7 text-stone-700">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">
              還有其他問題？
            </h2>

            <p className="mt-4 leading-7 text-stone-700">
              如果你發現工具內容有誤，或希望新增更貼近小店現場情境的試算工具，
              可以透過聯絡頁提供建議。若你只是想先開始試算，可以直接回到工具總覽。
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-stone-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
              >
                聯絡我們
              </Link>
              <TrackedLink
                href="/tools"
                eventName="click_nav"
                eventParams={{ nav_item: "工具總覽", destination: "/tools" }}
                className="rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-bold text-stone-900 transition hover:border-orange-300 hover:text-orange-700"
              >
                查看所有工具
              </TrackedLink>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
