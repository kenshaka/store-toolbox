import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { getBlogIndexStructuredData } from "@/lib/structured-data";
import Link from "next/link";
import TrackedLink from "@/components/tracked-link";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "餐飲經營文章",
  description:
    "開店小工具箱的餐飲經營文章，整理滿額加購、餐飲毛利、折扣活動、定價試算與小店促銷活動的實用教學。",
  keywords: [
    "餐飲經營",
    "餐飲毛利",
    "滿額加購",
    "折扣活動",
    "餐飲促銷",
    "小吃店經營",
    "飲料店經營",
    "開店教學",
  ],
  openGraph: {
    title: "餐飲經營文章｜開店小工具箱",
    description:
      "整理餐飲毛利、滿額加購、折扣活動與小店促銷試算的實用文章。",
    type: "website",
    locale: "zh_TW",
    siteName: "開店小工具箱",
  },
};


export default function BlogPage() {
  return (
    <>
      <JsonLd data={getBlogIndexStructuredData(posts)} />
      <main className="bg-stone-50 text-stone-900">
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div>
          <p className="text-sm font-semibold text-orange-700">
            Blog
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            餐飲經營文章
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
            整理餐飲店、小吃店、飲料店常見的營運問題，
            包含滿額加購、餐飲毛利、折扣活動、菜單定價與促銷試算，
            幫助小店老闆在做活動前先把數字算清楚。
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {posts.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm text-stone-500">
                <span className="rounded-full bg-orange-50 px-3 py-1 font-semibold text-orange-700">
                  {article.category}
                </span>
                <span>{article.date}</span>
              </div>

              <h2 className="mt-4 text-2xl font-bold text-stone-900">
                {article.title}
              </h2>

              <p className="mt-3 leading-7 text-stone-700">
                {article.description}
              </p>

              <p className="mt-5 text-sm font-bold text-orange-700">
                閱讀文章 →
              </p>
            </Link>
          ))}
        </div>

        <section className="mt-10 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">
            推薦先從哪裡開始？
          </h2>

          <p className="mt-4 leading-7 text-stone-700">
            如果你正在設計店內促銷活動，可以先看滿額加購文章，
            再搭配本站的滿額加購活動計算器，快速試算加購價、成本、
            加購率與預估每日增加毛利。
          </p>

          <TrackedLink
            href="/tools/add-on-promotion-calculator"
            eventName="click_article_cta"
            eventParams={{
              article_slug: "blog_index",
              destination: "/tools/add-on-promotion-calculator",
              tool_id: "add_on_promotion",
            }}
            className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
          >
            使用滿額加購活動計算器
          </TrackedLink>
        </section>
      </section>
      </main>
    </>
  );
}