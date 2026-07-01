import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { getBlogPostStructuredData } from "@/lib/structured-data";
import { notFound } from "next/navigation";
import { getPostBySlug, getPostMetadata, posts } from "@/lib/posts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return getPostMetadata(post);
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const PostContent = post.Content;

  return (
    <>
      <JsonLd data={getBlogPostStructuredData(post)} />
      <PostContent />
    </>
  );
}
