import Link from "next/link";
import TrackedLink from "@/components/tracked-link";
import { posts } from "@/lib/posts";
import { toolsByCategory } from "@/lib/tools";

export default function Home() {
  const latestPosts = posts.slice(-6).reverse();

  return (
    <main className="bg-stone-50 text-stone-900">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="mb-4 text-sm font-semibold text-orange-700">
          給小店老闆的實用試算工具
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          開店小工具箱
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
          幫餐飲店、小吃店、飲料店快速試算餐飲毛利率、滿額加購、折扣活動、外送平台抽成、菜單漲價、開店成本、損益兩平與人事成本占比，
          讓你在做定價、促銷或開店前先知道數字是否合理。
        </p>

        <div className="mt-10 grid gap-6">
          {toolsByCategory.map((category) => (
            <section
              key={category.slug}
              className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm"
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
                </div>

                <span className="w-fit rounded-full bg-stone-100 px-4 py-2 text-sm font-bold text-stone-700">
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
                    className="rounded-2xl border border-stone-200 bg-stone-50 p-5 transition hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50 hover:shadow-md"
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

        <div className="mt-14 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">這個網站可以幫你做什麼？</h2>
          <p className="mt-4 leading-7 text-stone-700">
            商店在做定價、促銷或開店規劃時，除了看「客人會不會買」，還要計算「毛利、固定成本和人事成本撐不撐得住」。
            開店小工具箱會把常見的經營問題變成簡單的計算器，讓你在投入成本或推出活動前先有基本判斷。
          </p>
        </div>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-orange-700">
            工具分類
          </p>
          <h2 className="mt-2 text-2xl font-bold">
            依照你現在遇到的經營問題選工具
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {toolsByCategory.map((category) => (
              <div key={category.slug} className="rounded-2xl bg-stone-100 p-5">
                <h3 className="font-bold">{category.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  {category.description}
                </p>
                <p className="mt-4 text-sm text-stone-600">
                  {category.tools.map((tool) => tool.navLabel).join("、")}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-orange-700">
            適合誰使用
          </p>
          <h2 className="mt-2 text-2xl font-bold">
            給餐飲店、小吃店、飲料店與小型商店的簡單營運工具
          </h2>

          <p className="mt-4 leading-7 text-stone-700">
            如果你正在設計滿額加購、折扣促銷、菜單定價、外送平台售價、開店預算或排班人力，
            可以先用這些免費工具快速試算。網站目前特別適合小吃店、飲料店、外帶店、攤商、
            餐飲創業者，以及想在投入成本前先確認毛利與營運壓力的小店老闆。
          </p>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-orange-700">
                最新開店文章
              </p>
              <h2 className="mt-2 text-2xl font-bold">
                餐飲活動怎麼算才不會虧？
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
            從滿額加購、餐飲毛利率、外送平台抽成、菜單漲價到折扣活動，整理常見的試算範例與公式，
            幫助你避免促銷做得很熱鬧卻沒有真正賺錢。
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-2xl border border-stone-200 p-5 transition hover:border-orange-200 hover:bg-orange-50"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500">
                  <span className="rounded-full bg-stone-100 px-3 py-1 font-semibold text-stone-700">
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

        <section className="mt-8 rounded-2xl bg-stone-900 p-6 text-white shadow-sm">
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
