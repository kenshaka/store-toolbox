import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import TrackedLink from "@/components/tracked-link";
import { getAboutStructuredData } from "@/lib/structured-data";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
  alternates: {
    canonical: "/about",
  },
  title: "關於本站",
  description:
    "關於開店小工具箱：提供餐飲店、小吃店、飲料店與小店老闆使用的免費營運試算工具，協助試算餐飲毛利、外送抽成、滿額加購、開店成本、損益兩平與人事成本占比。",
  keywords: [
    "開店小工具箱",
    "關於本站",
    "開店工具",
    "餐飲經營工具",
    "餐飲毛利試算",
    "小店老闆工具",
    "滿額加購計算",
    "外送平台抽成",
    "折扣活動試算",
  ],
  openGraph: {
    title: "關於開店小工具箱｜開店小工具箱",
    description:
      "開店小工具箱提供小店老闆使用的免費營運試算工具，協助在定價、促銷與活動設計前先把數字算清楚。",
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

const methodologySteps = [
  {
    title: "先定義問題與欄位",
    description:
      "每個工具先說明要解決的經營問題，再界定售價、直接成本、固定成本、毛利率、抽成與營業天數等欄位口徑。",
  },
  {
    title: "使用可追溯的基本公式",
    description:
      "工具以成本、售價、毛利、營業額與占比之間的基本數學關係計算，並在頁面中公開公式、假設與適用限制。",
  },
  {
    title: "加入示範情境與判讀",
    description:
      "示範數字會清楚標示為教學情境，不包裝成真實店家成果；重點是說明結果應如何判斷，以及下一步要檢查哪些資料。",
  },
  {
    title: "依實際回饋持續修正",
    description:
      "若公式、欄位說明或文章內容有錯誤，會依回報重新檢查並更新。重要內容會標示最後檢視日期。",
  },
];

const editorialPrinciples = [
  "不捏造店家訪談、營業成果或無法驗證的成功案例。",
  "不把示範數字寫成所有餐飲店都適用的唯一標準。",
  "明確區分毛利、淨利、直接成本、固定成本與通路費用。",
  "文章以解決實際經營問題為優先，不為了增加頁數重複改寫相同內容。",
  "涉及會計、稅務、法律、勞動法令或投資決策時，提醒使用者另尋合格專業人員。",
];

const audiences = [
  "正在設計促銷活動的餐飲店、小吃店與飲料店。",
  "想確認商品定價、食材成本與包材成本是否合理的小店老闆。",
  "準備測試滿額加購、折扣活動或外送平台售價的經營者。",
  "需要快速估算毛利、成本與銷量變化的個人店家或攤商。",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={getAboutStructuredData()} />
      <main className="bg-stone-50 text-stone-900">
        <section className="mx-auto max-w-5xl px-6 py-12">
          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
            <p className="text-sm font-semibold text-orange-700">
              About
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight">
              關於開店小工具箱
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
              開店小工具箱是一個給小店老闆使用的免費營運試算工具網站，
              主要整理餐飲店、小吃店、飲料店與小型商店常用的毛利、成本、促銷活動、開店預算與人事成本試算工具。
              目標是讓店家在推出活動或調整價格前，先用簡單的數字判斷方向是否合理。
            </p>
          </div>

          <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
            <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold">
                這個網站可以幫你做什麼？
              </h2>

              <p className="mt-4 leading-7 text-stone-700">
                很多小店在做活動時，會先思考客人會不會買、活動看起來夠不夠吸引人，
                但比較少先試算活動做完之後是否還有毛利。本站把常見的餐飲促銷與定價問題，
                做成可以直接輸入數字的計算器，讓你快速估算滿額加購、餐飲毛利率、外送平台抽成、菜單漲價、折扣活動損益、開店成本、損益兩平與人事成本占比。
              </p>

              <p className="mt-4 leading-7 text-stone-700">
                這些工具不是要取代會計、稅務或專業顧問，而是協助你在日常經營中先做基本判斷，
                例如加購價是否太低、外送平台抽成後毛利是否被吃掉、菜單漲價後毛利是否改善、折扣活動需要多賣幾份才打平、開店資金是否足夠，以及人事成本是否超出營業額承受範圍。
              </p>
            </div>

            <aside className="rounded-3xl bg-stone-900 p-6 text-white shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold">
                目前網站定位
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-6 text-stone-300">
                <p>免費工具站</p>
                <p>以台灣小店與餐飲經營者為主要使用情境</p>
                <p>用簡單公式協助初步試算</p>
                <p>工具結果僅供經營決策參考</p>
              </div>
            </aside>
          </section>

          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">
              適合誰使用？
            </h2>

            <ul className="mt-5 grid gap-4 md:grid-cols-2">
              {audiences.map((audience) => (
                <li
                  key={audience}
                  className="rounded-2xl bg-stone-100 p-5 text-sm leading-6 text-stone-700"
                >
                  {audience}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">
              目前提供的工具
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => (
                <TrackedLink
                  key={tool.href}
                  href={tool.href}
                  eventName="select_tool"
                  eventParams={{
                    tool_id: tool.toolId,
                    tool_name: tool.title,
                    link_location: "about_page",
                  }}
                  className="rounded-2xl border border-stone-200 bg-stone-50 p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="font-bold text-stone-900">
                    {tool.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-stone-700">
                    {tool.description}
                  </p>
                  <p className="mt-4 text-sm font-bold text-orange-700">
                    使用工具 →
                  </p>
                </TrackedLink>
              ))}
            </div>
          </section>

          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold text-orange-700">
              計算方法與內容流程
            </p>
            <h2 className="mt-2 text-2xl font-bold">
              工具與文章是怎麼整理的？
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-stone-700">
              本站不只提供計算結果，也會說明欄位口徑、公式、示範情境、常見誤區與工具限制。
              目的是讓使用者知道數字從哪裡來，而不是把計算器當成無法檢查的黑盒子。
            </p>

            <ol className="mt-6 grid gap-4 md:grid-cols-2">
              {methodologySteps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-stone-200 bg-stone-50 p-5"
                >
                  <p className="text-sm font-bold text-orange-700">
                    步驟 {index + 1}
                  </p>
                  <h3 className="mt-2 font-bold text-stone-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-stone-700">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
            <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold">內容編輯原則</h2>
              <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-stone-700">
                {editorialPrinciples.map((principle) => (
                  <li key={principle}>{principle}</li>
                ))}
              </ul>
            </div>

            <aside className="rounded-3xl bg-orange-50 p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-orange-950">
                發現公式或內容有問題？
              </h2>
              <p className="mt-4 text-sm leading-7 text-orange-950">
                請提供頁面網址、你輸入的數字、預期結果與實際結果。本站會先重現問題，再確認是公式、欄位說明或顯示方式需要修正。
              </p>
              <TrackedLink
                href="/contact"
                eventName="click_nav"
                eventParams={{ nav_item: "內容回報", destination: "/contact" }}
                className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
              >
                回報內容或工具問題
              </TrackedLink>
            </aside>
          </section>

          <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">
              文章內容的定位
            </h2>

            <p className="mt-4 leading-7 text-stone-700">
              除了工具頁，本站也會整理餐飲毛利、滿額加購、外送平台抽成、折扣活動、菜單定價、開店成本與促銷試算相關文章。
              文章會盡量用小店常見情境說明公式與判斷方式，讓你不只會使用工具，也能理解背後邏輯。
            </p>

            <div className="mt-6">
              <TrackedLink
                href="/blog"
                eventName="click_nav"
                eventParams={{ nav_item: "文章", destination: "/blog" }}
                className="inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
              >
                查看餐飲經營文章
              </TrackedLink>
            </div>
          </section>

          <section className="mt-8 rounded-3xl bg-orange-50 p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-orange-950">
              使用前提醒
            </h2>

            <p className="mt-4 leading-7 text-orange-950">
              本站提供的工具與文章僅供一般試算與經營參考，不構成會計、稅務、法律或財務建議。
              實際經營結果仍會受到租金、人事、水電、原物料波動、平台抽成、備料耗損、淡旺季、活動執行與顧客反應影響。
              建議你把試算結果當成決策前的初步參考，再搭配實際銷售紀錄與現場狀況調整。
            </p>
          </section>
        </section>
      </main>
    </>
  );
}
