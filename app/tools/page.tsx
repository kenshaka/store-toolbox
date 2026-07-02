import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import TrackedLink from "@/components/tracked-link";
import { getToolsIndexStructuredData } from "@/lib/structured-data";
import { toolsByCategory } from "@/lib/tools";

export const metadata: Metadata = {
  alternates: {
    canonical: "/tools",
  },
  title: "餐飲開店試算工具總覽｜毛利率、開店成本、外送抽成",
  description:
    "免費餐飲開店試算工具總覽，包含餐飲毛利率計算器、餐廳開店成本估算器、外送平台抽成計算、滿額加購活動計算、損益兩平計算器與人事成本占比計算。",
  keywords: [
    "開店工具",
    "餐飲工具",
    "餐飲毛利率計算器",
    "滿額加購計算器",
    "折扣活動計算器",
    "外送平台抽成試算器",
    "菜單漲價試算器",
    "開店損益兩平試算器",
    "開店成本試算器",
    "人事成本占比試算器",
    "小吃店經營",
    "飲料店經營",
    "小店老闆工具",
  ],
  openGraph: {
    title: "開店工具總覽｜開店小工具箱",
    description:
      "整理小店老闆常用的營運試算工具，包含餐飲毛利率、滿額加購、折扣活動、外送平台抽成、菜單漲價、開店成本、損益兩平與人事成本占比試算。",
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
  "設計滿額加購活動前，先確認加購價和成本是否有毛利。",
  "調整菜單售價前，先試算食材、包材、成本上漲和平台抽成後的毛利率。",
  "上架外送平台前，先估算抽成、包材、折扣補貼後是否還有足夠毛利。",
  "開店前先估算啟動資金、損益兩平營業額與人事成本占比是否合理。",
];

export default function ToolsPage() {
  return (
    <>
      <JsonLd data={getToolsIndexStructuredData()} />
      <main className="bg-stone-50 text-stone-900">
        <section className="mx-auto max-w-5xl px-6 py-12">
          <div>
            <p className="text-sm font-semibold text-orange-700">
              Tools
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight">
              餐飲開店試算工具總覽
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
              整理餐廳、小吃店、飲料店與小型商店常用的免費試算工具，
              依照單品定價、活動促銷、通路成本與整店經營分組，幫助你用餐飲毛利率計算器、餐廳開店成本估算器、外送平台抽成計算、滿額加購活動計算、損益兩平計算器與人事成本占比計算，先把毛利、成本、銷量與營運壓力算清楚。
            </p>
          </div>

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
                              使用工具
                            </TrackedLink>

                            <Link
                              href={tool.articleHref}
                              className="inline-flex rounded-full bg-orange-50 px-5 py-3 text-sm font-bold text-orange-700 transition hover:bg-orange-100"
                            >
                              閱讀相關文章
                            </Link>
                          </div>
                        </div>

                        <div className="rounded-2xl bg-stone-100 p-5 lg:w-80">
                          <p className="text-sm font-bold text-stone-900">
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
            <h2 className="text-2xl font-bold">
              適合什麼時候使用？
            </h2>

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
            <h2 className="text-2xl font-bold">
              工具結果僅供初步試算
            </h2>
            <p className="mt-4 leading-7 text-stone-300">
              本站工具適合用來快速估算活動與定價方向。實際經營仍需考慮人事、租金、水電、
              原物料波動、平台抽成、備料耗損與現場執行狀況。建議把試算結果當作決策參考，
              再搭配實際銷售紀錄調整。
            </p>
          </section>
        </section>
      </main>
    </>
  );
}
