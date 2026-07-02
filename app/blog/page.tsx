import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { getBlogIndexStructuredData } from "@/lib/structured-data";
import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  alternates: {
    canonical: "/blog",
  },
  title: "餐飲開店與成本試算文章｜毛利率、外送抽成、促銷活動",
  description:
    "整理餐飲毛利率怎麼算、餐廳開店成本估算、外送平台抽成計算、滿額加購活動計算、折扣活動損益與菜單漲價的實用教學。",
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
      "整理餐飲毛利、滿額加購、折扣活動、外送抽成、菜單漲價與開店成本試算的實用文章。",
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
            餐飲開店與成本試算文章
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
            整理餐廳、小吃店、飲料店常見的營運問題，
            包含餐飲毛利率怎麼算、餐廳開店成本估算、滿額加購活動計算、折扣活動損益、菜單漲價與外送平台抽成計算，
            幫助小店老闆在定價、促銷、外送上架或開店規劃前先把數字算清楚。
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
            文章看完後，可以直接搭配工具試算
          </h2>

          <p className="mt-4 leading-7 text-stone-700">
            每篇文章都會盡量連回對應的試算工具。如果你想先從工具開始，也可以回到工具總覽，依照單品定價、活動促銷、通路成本與整店經營選擇適合的工具。
          </p>

          <Link
            href="/tools"
            className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
          >
            查看餐飲開店試算工具
          </Link>
        </section>
      </section>
      </main>
    </>
  );
}