import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import TrackedLink from "@/components/tracked-link";
import { getAboutStructuredData } from "@/lib/structured-data";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "關於本站",
  description:
    "關於開店小工具箱：提供餐飲店、小吃店、飲料店與小店老闆使用的免費營運試算工具，協助試算餐飲毛利、外送平台抽成、滿額加購與折扣活動損益。",
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
  },
};

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
              主要整理餐飲店、小吃店、飲料店與小型商店常用的毛利、成本、促銷活動試算工具。
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
                做成可以直接輸入數字的計算器，讓你快速估算滿額加購、餐飲毛利率、外送平台抽成、菜單漲價與折扣活動損益。
              </p>

              <p className="mt-4 leading-7 text-stone-700">
                這些工具不是要取代會計、稅務或專業顧問，而是協助你在日常經營中先做基本判斷，
                例如加購價是否太低、外送平台抽成後毛利是否被吃掉、菜單漲價後毛利是否改善、折扣活動需要多賣幾份才打平。
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
            <h2 className="text-2xl font-bold">
              文章內容的定位
            </h2>

            <p className="mt-4 leading-7 text-stone-700">
              除了工具頁，本站也會整理餐飲毛利、滿額加購、外送平台抽成、折扣活動、菜單定價與促銷試算相關文章。
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
              實際經營結果仍會受到租金、人事、水電、原物料波動、平台抽成、備料耗損、活動執行與顧客反應影響。
              建議你把試算結果當成決策前的初步參考，再搭配實際銷售紀錄與現場狀況調整。
            </p>
          </section>
        </section>
      </main>
    </>
  );
}
