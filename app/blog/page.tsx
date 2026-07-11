import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { getBlogIndexStructuredData } from "@/lib/structured-data";
import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  alternates: {
    canonical: "/blog",
  },
  title: "小店成本、售價與利潤怎麼算｜開店經營文章",
  description:
    "整理小店老闆常見問題：餐飲成本怎麼算、餐點售價怎麼訂、開店要準備多少錢、打折會不會賠錢、外送抽成後剩多少。",
  keywords: [
    "成本怎麼算",
    "售價怎麼算",
    "利潤怎麼算",
    "開店要準備多少錢",
    "打折會不會賠錢",
    "外送抽成怎麼算",
    "餐飲經營",
    "小吃店經營",
    "飲料店經營",
  ],
  openGraph: {
    title: "小店成本、售價與利潤文章｜開店小工具箱",
    description:
      "整理成本怎麼算、售價怎麼訂、開店要準備多少錢、打折會不會賠錢與外送抽成的實用文章。",
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
      <main className="bg-[#fffaf3] text-stone-950">
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div>
          <p className="text-sm font-semibold text-orange-700">
            Blog
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            小店成本、售價與利潤怎麼算
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
            整理餐廳、小吃店、飲料店與小型商家常見的營運問題，
            包含餐飲成本怎麼算、餐點售價怎麼訂、開店要準備多少錢、每天要賣多少才不虧、打折會不會賠錢與外送抽成後剩多少，
            幫助小店老闆在定價、促銷、外送上架或開店規劃前先把數字算清楚。
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {posts.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="rounded-3xl border border-orange-100/80 bg-white/95 p-6 shadow-sm shadow-orange-950/5 transition hover:-translate-y-1 hover:shadow-md"
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
                看這篇怎麼算 →
              </p>
            </Link>
          ))}
        </div>

        <section className="mt-10 rounded-3xl border border-orange-100/80 bg-white/95 p-6 shadow-sm shadow-orange-950/5">
          <h2 className="text-2xl font-bold">
            看完問題說明後，可以直接用工具試算
          </h2>

          <p className="mt-4 leading-7 text-stone-700">
            每篇文章都會盡量連回對應的試算工具。如果你想先從問題開始，也可以回到工具總覽，從「成本怎麼算、售價怎麼訂、開店要準備多少錢、打折會不會賠錢」選擇適合的工具。
          </p>

          <Link
            href="/tools"
            className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
          >
            查看小店成本與利潤試算工具
          </Link>
        </section>
      </section>
      </main>
    </>
  );
}