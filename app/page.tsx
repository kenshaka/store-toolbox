import type { Metadata } from "next";
import Link from "next/link";
import TrackedLink from "@/components/tracked-link";
import { posts } from "@/lib/posts";
import { tools, toolsByCategory } from "@/lib/tools";
import { AdSenseSlot } from "@/components/adsense-slot";
import { adsenseSlots } from "@/lib/adsense-slots";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  title: "小店成本、售價與利潤計算工具｜開店小工具箱",
  description:
    "免費小店經營試算工具，幫餐廳、小吃店、飲料店與小型商家快速計算開店成本、餐飲成本、商品售價、毛利率、外送抽成、促銷活動與人事成本。",
};

export default function Home() {
  const latestPosts = posts.slice(-6).reverse();

  return (
    <main className="bg-[#fffaf3] text-stone-950">
      <section className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
        <div className="rounded-[2rem] border border-orange-100/80 bg-white/70 p-6 shadow-sm shadow-orange-950/5 sm:p-10">
          <p className="brand-pill w-fit">
            給小店老闆的免費試算工具
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight text-stone-950 sm:text-5xl sm:leading-tight">
            幫小店老闆快速算成本、售價、利潤與開店預算
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
            不確定餐點要賣多少、開店要準備多少錢、每天要賣幾筆才不虧，
            或外送抽成、打折促銷、人事成本會不會吃掉利潤？開店小工具箱把小店經營常見問題整理成簡單計算器，讓你先用數字做基本判斷。
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-sm font-semibold text-stone-700">
            <span className="rounded-full bg-orange-50 px-3 py-2 text-orange-800 ring-1 ring-orange-100">免登入</span>
            <span className="rounded-full bg-amber-50 px-3 py-2 text-amber-800 ring-1 ring-amber-100">免費使用</span>
            <span className="rounded-full bg-stone-100 px-3 py-2 text-stone-700 ring-1 ring-stone-200">輸入數字即可試算</span>
          </div>
        </div>

        <section className="mt-10 rounded-3xl border border-orange-100/80 bg-white/95 p-6 shadow-sm shadow-orange-950/5">
          <p className="text-sm font-semibold text-orange-700">
            不知道要用哪個工具？
          </p>
          <h2 className="mt-2 text-2xl font-bold text-stone-900">
            先從你想解決的問題開始
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
                  link_location: "home_intent",
                }}
                className="rounded-2xl border border-orange-100/80 bg-orange-50/35 p-5 transition hover:-translate-y-0.5 hover:border-orange-200 hover:bg-orange-50/80 hover:shadow-sm hover:shadow-orange-950/5"
              >
                <h3 className="text-lg font-bold text-stone-900">
                  {tool.plainQuestion}
                </h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {tool.homeDescription}
                </p>
                <p className="mt-4 text-sm font-bold text-orange-700">
                  {tool.ctaLabel} →
                </p>
              </TrackedLink>
            ))}
          </div>
        </section>

        <AdSenseSlot
          slot={adsenseSlots.homeAfterIntent}
          className="mt-10"
        />

        <div className="mt-10 grid gap-6">
          {toolsByCategory.map((category) => (
            <section
              key={category.slug}
              className="rounded-3xl border border-orange-100/80 bg-white/95 p-6 shadow-sm shadow-orange-950/5"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-orange-700">
                    工具分類
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-stone-900">
                    {category.title}
                  </h2>
                  <p className="mt-3 max-w-2xl leading-7 text-stone-700">
                    {category.homeDescription}
                  </p>
                  <Link
                    href={category.href}
                    className="mt-4 inline-flex text-sm font-bold text-orange-700 hover:underline"
                  >
                    查看{category.title}工具 →
                  </Link>
                </div>

                <span className="w-fit rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-sm font-bold text-orange-800">
                  {category.tools.length} 個工具
                </span>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {category.tools.map((tool) => (
                  <TrackedLink
                    key={tool.href}
                    href={tool.href}
                    eventName="select_tool"
                    eventParams={{
                      tool_id: tool.toolId,
                      tool_name: tool.title,
                      link_location: "home_card",
                    }}
                    className="rounded-2xl border border-orange-100/80 bg-orange-50/35 p-5 transition hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50/80 hover:shadow-md hover:shadow-orange-950/5"
                  >
                    <p className="text-xs font-semibold text-orange-700">
                      {tool.category}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-stone-900">
                      {tool.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-stone-600">
                      {tool.homeDescription}
                    </p>
                  </TrackedLink>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-orange-100/80 bg-white/95 p-6 shadow-sm shadow-orange-950/5">
          <h2 className="text-2xl font-bold">這個網站可以幫你做什麼？</h2>
          <p className="mt-4 leading-7 text-stone-700">
            很多小店問題一開始不會叫「損益兩平」或「活動損益」，而是「要賣多少才不虧」、
            「成本要怎麼算」、「打折會不會賠錢」。本站用白話問題引導你找到對應工具，
            再用毛利、固定成本、營業額與人事成本做初步試算。
          </p>
        </div>

        <section className="mt-8 rounded-2xl border border-orange-100/80 bg-white/95 p-6 shadow-sm shadow-orange-950/5">
          <p className="text-sm font-semibold text-orange-700">適合誰使用</p>
          <h2 className="mt-2 text-2xl font-bold">
            給餐飲店、小吃店、飲料店、攤商與小型商家的簡單營運工具
          </h2>

          <p className="mt-4 leading-7 text-stone-700">
            如果你正在估餐飲成本、商品售價、開店預算、外送平台價格、促銷活動或排班人力，
            可以先用這些免費工具快速試算。網站目前特別適合小吃店、飲料店、外帶店、攤商、
            餐飲創業者，以及想在投入成本前先確認利潤與現金壓力的小店老闆。
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-orange-100/80 bg-white/95 p-6 shadow-sm shadow-orange-950/5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-orange-700">
                最新開店文章
              </p>
              <h2 className="mt-2 text-2xl font-bold">
                成本、售價與利潤怎麼算才不會只靠感覺？
              </h2>
            </div>

            <Link
              href="/blog"
              className="text-sm font-bold text-orange-700 hover:underline"
            >
              看全部文章 →
            </Link>
          </div>

          <p className="mt-4 leading-7 text-stone-700">
            從餐飲成本怎麼算、餐點售價怎麼訂、開店要準備多少錢、外送抽成後剩多少，
            到打折活動會不會賠錢，整理常見的試算範例與公式，幫助你避免定價、促銷或開店預算只憑感覺。
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-2xl border border-orange-100/80 bg-white/60 p-5 transition hover:border-orange-200 hover:bg-orange-50"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500">
                  <span className="rounded-full bg-orange-50 px-3 py-1 font-semibold text-orange-700 ring-1 ring-orange-100">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                </div>

                <h3 className="mt-3 text-xl font-bold text-stone-900">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-orange-100/80 bg-white/95 p-6 shadow-sm shadow-orange-950/5">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-orange-700">常見問題</p>
              <h2 className="mt-2 text-2xl font-bold">
                使用工具前，可以先了解試算限制
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-stone-700">
                整理試算結果怎麼看、工具是否儲存輸入數字、餐飲毛利率與淨利率差異、外送抽成與開店成本等常見問題。
              </p>
            </div>

            <Link
              href="/faq"
              className="inline-flex w-fit rounded-full bg-stone-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
            >
              查看常見問題
            </Link>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-gradient-to-br from-stone-950 via-stone-900 to-orange-950 p-6 text-white shadow-sm shadow-orange-950/10">
          <h2 className="text-2xl font-bold">使用前提醒</h2>
          <p className="mt-4 leading-7 text-stone-300">
            本站工具適合用來做活動、定價與開店前的初步試算，實際經營仍需考慮人事、租金、水電、
            原物料波動、平台抽成、備料損耗、淡旺季與現場執行狀況。建議把試算結果當作決策參考，
            再搭配實際銷售紀錄調整活動方案。
          </p>
        </section>
      </section>
    </main>
  );
}
