import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import TrackedLink from "@/components/tracked-link";
import { getToolsIndexStructuredData } from "@/lib/structured-data";
import { tools, toolsByCategory } from "@/lib/tools";

export const metadata: Metadata = {
  alternates: {
    canonical: "/tools",
  },
  title: "小店成本、售價、利潤與開店預算計算工具總覽",
  description:
    "不知道成本、售價、利潤、開店預算或每天要賣多少怎麼算？整理餐飲毛利率、開店成本、外送抽成、打折促銷、損益兩平與人事成本試算工具。",
  keywords: [
    "開店工具",
    "餐飲工具",
    "成本怎麼算",
    "售價怎麼算",
    "利潤怎麼算",
    "開店要準備多少錢",
    "每天要賣多少才不虧",
    "打折會不會賠錢",
    "餐飲毛利率計算器",
    "外送平台抽成試算器",
    "開店成本試算器",
    "小吃店經營",
    "飲料店經營",
    "小店老闆工具",
  ],
  openGraph: {
    title: "小店成本、售價與利潤工具總覽｜開店小工具箱",
    description:
      "用白話問題找到適合的小店試算工具：成本怎麼算、售價怎麼訂、開店要準備多少錢、每天要賣多少才不虧。",
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

const useCases = [
  "不知道商品售價怎麼訂時，先算食材、包材、平台抽成與目標毛利。",
  "不知道打折或加購活動會不會賠錢時，先比較活動前後每日毛利。",
  "不知道外送抽成後剩多少時，先把平台費、包材與店家補貼一起扣掉。",
  "不知道開店要準備多少錢、每天要賣多少時，先估固定成本、啟動資金與訂單數。",
];

export default function ToolsPage() {
  return (
    <>
      <JsonLd data={getToolsIndexStructuredData()} />
      <main className="bg-stone-50 text-stone-900">
        <section className="mx-auto max-w-5xl px-6 py-12">
          <div>
            <p className="text-sm font-semibold text-orange-700">Tools</p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight">
              不知道成本、售價或利潤怎麼算？先從這裡選工具
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
              小店老闆不一定會搜尋工具名稱，更多時候是想知道「開店要準備多少錢」、
              「餐點要賣多少才會賺」、「每天要賣幾筆才不虧」或「打折會不會賠錢」。
              這裡依照實際經營問題整理對應的免費試算工具。
            </p>
          </div>

          <section className="mt-10 rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-orange-700">
              你可能正在找
            </p>
            <h2 className="mt-2 text-2xl font-bold text-stone-900">
              用問題找到對應計算器
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {tools.map((tool) => (
                <TrackedLink
                  key={tool.href}
                  href={tool.href}
                  eventName="select_tool"
                  eventParams={{
                    tool_id: tool.toolId,
                    tool_name: tool.title,
                    link_location: "tools_intent",
                  }}
                  className="rounded-2xl border border-stone-200 bg-stone-50 p-5 transition hover:border-orange-200 hover:bg-orange-50"
                >
                  <h3 className="text-lg font-bold text-stone-900">
                    {tool.plainQuestion}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    {tool.plainDescription}
                  </p>
                  <p className="mt-4 text-sm font-bold text-orange-700">
                    {tool.ctaLabel} →
                  </p>
                </TrackedLink>
              ))}
            </div>
          </section>

          <div className="mt-10 grid gap-8">
            {toolsByCategory.map((category) => (
              <section key={category.slug}>
                <div className="mb-5 rounded-3xl bg-white p-6 shadow-sm">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-orange-700">
                        工具分類
                      </p>
                      <h2 className="mt-2 text-3xl font-bold text-stone-900">
                        {category.title}
                      </h2>
                      <p className="mt-3 max-w-2xl leading-7 text-stone-700">
                        {category.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <span className="w-fit rounded-full bg-stone-100 px-4 py-2 text-sm font-bold text-stone-700">
                        {category.tools.length} 個工具
                      </span>
                      <Link
                        href={category.href}
                        className="w-fit rounded-full bg-orange-50 px-4 py-2 text-sm font-bold text-orange-700 transition hover:bg-orange-100"
                      >
                        查看分類頁
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6">
                  {category.tools.map((tool) => (
                    <section
                      key={tool.href}
                      className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm"
                    >
                      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <p className="text-sm font-semibold text-orange-700">
                            {tool.category}
                          </p>

                          <h3 className="mt-2 text-2xl font-bold text-stone-900">
                            {tool.title}
                          </h3>

                          <p className="mt-3 max-w-2xl leading-7 text-stone-700">
                            {tool.description}
                          </p>

                          <div className="mt-5 flex flex-wrap gap-3">
                            <TrackedLink
                              href={tool.href}
                              eventName="select_tool"
                              eventParams={{
                                tool_id: tool.toolId,
                                tool_name: tool.title,
                                link_location: `tools_index_${category.slug}`,
                              }}
                              className="inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
                            >
                              {tool.ctaLabel}
                            </TrackedLink>

                            <Link
                              href={tool.articleHref}
                              className="inline-flex rounded-full bg-orange-50 px-5 py-3 text-sm font-bold text-orange-700 transition hover:bg-orange-100"
                            >
                              看算法說明
                            </Link>
                          </div>
                        </div>

                        <div className="rounded-2xl bg-stone-100 p-5 lg:w-80">
                          <p className="text-sm font-bold text-stone-900">
                            常見搜尋說法
                          </p>
                          <ul className="mt-3 grid gap-2 text-sm leading-6 text-stone-700">
                            {tool.searchIntents.slice(0, 3).map((intent) => (
                              <li key={intent}>・{intent}</li>
                            ))}
                          </ul>
                          <p className="mt-4 text-sm font-bold text-stone-900">
                            對應文章
                          </p>
                          <Link
                            href={tool.articleHref}
                            className="mt-3 block text-sm leading-6 text-stone-700 hover:text-orange-700 hover:underline"
                          >
                            {tool.articleTitle}
                          </Link>
                        </div>
                      </div>
                    </section>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-10 rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">哪些問題適合先用工具試算？</h2>

            <ul className="mt-5 grid gap-4 md:grid-cols-2">
              {useCases.map((useCase) => (
                <li
                  key={useCase}
                  className="rounded-2xl bg-stone-100 p-5 text-sm leading-6 text-stone-700"
                >
                  {useCase}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8 rounded-3xl bg-stone-900 p-6 text-white shadow-sm">
            <h2 className="text-2xl font-bold">工具結果僅供初步試算</h2>
            <p className="mt-4 leading-7 text-stone-300">
              本站工具適合用來快速估算成本、售價、毛利、促銷、外送抽成與開店預算。
              實際經營仍需考慮人事、租金、水電、原物料波動、平台抽成、備料耗損與現場執行狀況。
              建議把試算結果當作決策參考，再搭配實際銷售紀錄調整。
            </p>
          </section>
        </section>
      </main>
    </>
  );
}
