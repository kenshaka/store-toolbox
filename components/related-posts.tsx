import Link from "next/link";
import type { BlogPost } from "@/lib/post-types";

type RelatedPostsProps = {
  posts: BlogPost[];
};

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#fffaf3] px-6 pb-12 text-stone-950">
      <div className="mx-auto max-w-4xl rounded-3xl border border-orange-100/80 bg-white/95 p-6 shadow-sm shadow-orange-950/5 sm:p-8">
        <p className="text-sm font-semibold text-orange-700">延伸閱讀</p>
        <h2 className="mt-3 text-2xl font-bold">相關文章</h2>
        <p className="mt-3 leading-7 text-stone-700">
          你也可以接著看這些主題，搭配本站工具一起檢查成本、售價、利潤與活動設計。
        </p>

        <div className="mt-6 grid gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-2xl border border-orange-100/80 bg-white/60 p-5 transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm text-stone-500">
                <span className="rounded-full bg-orange-50 px-3 py-1 font-semibold text-orange-700">
                  {post.category}
                </span>
                <span>{post.date}</span>
              </div>

              <h3 className="mt-3 text-xl font-bold text-stone-900">
                {post.title}
              </h3>

              <p className="mt-2 leading-7 text-stone-700">
                {post.description}
              </p>

              <p className="mt-4 text-sm font-bold text-orange-700">
                看這篇怎麼算 →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
