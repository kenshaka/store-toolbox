import type { MetadataRoute } from "next";

const siteUrl = "https://store-toolbox.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/tools/add-on-promotion-calculator",
    "/tools/restaurant-margin-calculator",
    "/tools/discount-profit-calculator",
    "/blog/add-on-promotion-example",
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