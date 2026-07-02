import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { toolCategories, tools } from "@/lib/tools";

const siteUrl = "https://store-toolbox.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const toolCategoryRoutes = toolCategories.map((category) => category.href);
  const toolRoutes = tools.map((tool) => tool.href);
  const blogRoutes = posts.map((post) => `/blog/${post.slug}`);

  const routes = [
    "",
    "/tools",
    ...toolCategoryRoutes,
    ...toolRoutes,
    "/blog",
    ...blogRoutes,
    "/about",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/tools") ? 0.9 : 0.5,
  }));
}