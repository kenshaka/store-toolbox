import Link from "next/link";

const primaryLinks = [
  {
    href: "/",
    title: "回到首頁",
    description: "重新查看開店小工具箱的主要工具與最新文章。",
  },
  {
    href: "/tools",
    title: "查看所有工具",
    description: "依照單品定價、活動促銷、通路成本與整店經營找到合適的試算工具。",
  },
  {
    href: "/blog",
    title: "閱讀開店文章",
    description: "從定價、毛利、外送抽成與促銷活動文章中找到實用範例。",
  },
];

const suggestedTools = [
  {
    href: "/tools/restaurant-margin-calculator",
    title: "餐飲毛利率計算器",
  },
  {
    href: "/tools/break-even-calculator",
    title: "開店損益兩平試算器",
  },
  {
    href: "/tools/startup-cost-calculator",
    title: "開店成本試算器",
  },
];

export default function NotFound() {
  return (
    <main className="bg-stone-50 text-stone-900">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold text-orange-700">404</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            找不到這個頁面
          </h1>
          <p className="mt-5 max-w-2xl leading-7 text-stone-700">
            這個網址可能已經不存在，或是輸入時有錯字。你可以回到首頁，查看所有開店工具，或閱讀餐飲定價、毛利與促銷活動相關文章。
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-stone-200 bg-stone-50 p-5 transition hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50 hover:shadow-md"
              >
                <h2 className="text-lg font-bold text-stone-900">
                  {link.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-orange-700">
            常用工具入口
          </p>
          <h2 className="mt-2 text-2xl font-bold">
            也可以直接從這幾個工具開始
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {suggestedTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="rounded-full bg-stone-100 px-4 py-2 text-sm font-bold text-stone-700 transition hover:bg-orange-100 hover:text-orange-800"
              >
                {tool.title}
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
