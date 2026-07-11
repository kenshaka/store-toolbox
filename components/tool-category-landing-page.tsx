import Link from "next/link";
import JsonLd from "@/components/json-ld";
import TrackedLink from "@/components/tracked-link";
import { getToolCategoryStructuredData } from "@/lib/structured-data";
import { getToolCategoryPage } from "@/lib/tool-category-pages";
import type { ToolCategorySlug } from "@/lib/tools";

type ToolCategoryLandingPageProps = {
  categorySlug: ToolCategorySlug;
};

export default function ToolCategoryLandingPage({
  categorySlug,
}: ToolCategoryLandingPageProps) {
  const page = getToolCategoryPage(categorySlug);

  return (
    <>
      <JsonLd data={getToolCategoryStructuredData(categorySlug, page.faqs)} />
      <main className="bg-[#fffaf3] text-stone-950">
        <section className="mx-auto max-w-5xl px-6 py-12">
          <div className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
            <Link href="/" className="hover:text-orange-700 hover:underline">
              首頁
            </Link>
            <span>/</span>
            <Link
              href="/tools"
              className="hover:text-orange-700 hover:underline"
            >
              工具總覽
            </Link>
            <span>/</span>
            <span className="font-semibold text-stone-700">
              {page.title}工具
            </span>
          </div>

          <header className="mt-8 rounded-3xl border border-orange-100/80 bg-white/95 p-8 shadow-sm shadow-orange-950/5">
            <p className="text-sm font-semibold text-orange-700">工具分類</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
              {page.title}工具
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
              {page.lead}
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-stone-600">
              {page.longDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="#tools"
                className="inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
              >
                查看這類工具
              </Link>
              <Link
                href="/tools"
                className="inline-flex rounded-full bg-orange-50 px-5 py-3 text-sm font-bold text-orange-700 transition hover:bg-orange-100"
              >
                回到所有工具
              </Link>
            </div>
          </header>

          <section
            id="tools"
            className="mt-8 rounded-3xl border border-orange-100/80 bg-white/95 p-6 shadow-sm shadow-orange-950/5"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-orange-700">
                  這個分類的工具
                </p>
                <h2 className="mt-2 text-3xl font-bold text-stone-900">
                  {page.title}相關試算
                </h2>
              </div>
              <span className="w-fit rounded-full bg-stone-100 px-4 py-2 text-sm font-bold text-stone-700">
                {page.tools.length} 個工具
              </span>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {page.tools.map((tool) => (
                <article
                  key={tool.href}
                  className="rounded-2xl border border-orange-100/80 bg-orange-50/35 p-5"
                >
                  <p className="text-xs font-semibold text-orange-700">
                    {tool.category}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-stone-900">
                    {tool.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-stone-700">
                    {tool.description}
                  </p>
                  <p className="mt-4 rounded-2xl border border-orange-100/80 bg-white/95 p-4 text-sm font-semibold leading-6 text-stone-700">
                    {tool.plainQuestion}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <TrackedLink
                      href={tool.href}
                      eventName="select_tool"
                      eventParams={{
                        tool_id: tool.toolId,
                        tool_name: tool.title,
                        link_location: `category_${page.slug}`,
                      }}
                      className="inline-flex rounded-full bg-stone-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-orange-700"
                    >
                      {tool.ctaLabel}
                    </TrackedLink>
                    <Link
                      href={tool.articleHref}
                      className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-orange-700 transition hover:bg-orange-50"
                    >
                      看算法文章
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <section className="rounded-3xl border border-orange-100/80 bg-white/95 p-6 shadow-sm shadow-orange-950/5">
              <p className="text-sm font-semibold text-orange-700">
                適合哪些店家
              </p>
              <h2 className="mt-2 text-2xl font-bold text-stone-900">
                什麼情況可以先看這類工具？
              </h2>
              <ul className="mt-5 grid gap-3">
                {page.suitableFor.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-orange-100/80 bg-orange-50/35 p-4 text-sm leading-6 text-stone-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-orange-100/80 bg-white/95 p-6 shadow-sm shadow-orange-950/5">
              <p className="text-sm font-semibold text-orange-700">
                使用順序建議
              </p>
              <h2 className="mt-2 text-2xl font-bold text-stone-900">
                建議先算什麼、再看什麼？
              </h2>
              <ol className="mt-5 grid gap-3">
                {page.useSteps.map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-3 rounded-2xl border border-orange-100/80 bg-orange-50/35 p-4 text-sm leading-6 text-stone-700"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-stone-900 text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <section className="mt-8 rounded-3xl border border-orange-100/80 bg-white/95 p-6 shadow-sm shadow-orange-950/5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-orange-700">
                  相關文章
                </p>
                <h2 className="mt-2 text-2xl font-bold text-stone-900">
                  搭配教學文章一起看
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-sm font-bold text-orange-700 hover:underline"
              >
                看全部文章 →
              </Link>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {page.relatedArticles.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="rounded-2xl border border-orange-100/80 bg-white/60 p-5 transition hover:border-orange-200 hover:bg-orange-50"
                >
                  <p className="text-xs font-semibold text-stone-500">
                    對應工具：{article.toolTitle}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-stone-900">
                    {article.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-8 rounded-3xl border border-orange-100/80 bg-white/95 p-6 shadow-sm shadow-orange-950/5">
            <p className="text-sm font-semibold text-orange-700">常見問題</p>
            <h2 className="mt-2 text-2xl font-bold text-stone-900">
              {page.title}工具常見問題
            </h2>
            <div className="mt-6 grid gap-4">
              {page.faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-2xl border border-orange-100/80 bg-orange-50/50 p-5"
                >
                  <h3 className="font-bold text-stone-900">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-700">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-8 rounded-3xl bg-gradient-to-br from-stone-950 via-stone-900 to-orange-950 p-6 text-white shadow-sm shadow-orange-950/10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold">還不確定該用哪一個工具？</h2>
                <p className="mt-3 leading-7 text-stone-300">
                  可以回到工具總覽，從「成本怎麼算、售價怎麼訂、活動會不會虧、每天要賣多少」這些白話問題重新選擇。
                </p>
              </div>
              <Link
                href="/tools"
                className="inline-flex w-fit rounded-full bg-white px-5 py-3 text-sm font-bold text-stone-900 transition hover:bg-orange-100"
              >
                回到所有工具
              </Link>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
