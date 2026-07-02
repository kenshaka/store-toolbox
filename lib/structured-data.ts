import type { BlogPost } from "@/lib/posts";
import { getToolByKey, toolsByCategory } from "@/lib/tools";
import type { FaqItem, ToolKey } from "@/lib/tools";

export const siteUrl = "https://store-toolbox.vercel.app";

const siteName = "開店小工具箱";
const siteDescription =
  "開店小工具箱提供餐飲店、小吃店、飲料店常用的營運試算工具，包含餐飲毛利率、滿額加購、折扣活動、外送平台抽成、菜單漲價、開店成本、損益兩平與人事成本占比試算，幫助小店老闆在定價、促銷或開店前先算清楚。";

const publisher = {
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
};

function absoluteUrl(path = "") {
  return `${siteUrl}${path}`;
}

function parseTraditionalChineseDate(date: string) {
  const match = date.match(/(\d{4})\s*年\s*(\d{1,2})\s*月\s*(\d{1,2})\s*日/);

  if (!match) {
    return undefined;
  }

  const [, year, month, day] = match;

  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

function getBreadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

function getFaqPageJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getWebsiteStructuredData() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteName,
      alternateName: "Store Toolbox",
      url: siteUrl,
      description: siteDescription,
      inLanguage: "zh-Hant-TW",
      publisher,
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
  ];
}

export function getBlogIndexStructuredData(blogPosts: BlogPost[]) {
  return [
    getBreadcrumbJsonLd([
      { name: siteName, path: "" },
      { name: "餐飲經營文章", path: "/blog" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "餐飲經營文章",
      url: absoluteUrl("/blog"),
      description:
        "開店小工具箱的餐飲經營文章，整理滿額加購、餐飲毛利、外送平台抽成、折扣活動、定價試算與小店促銷活動的實用教學。",
      inLanguage: "zh-Hant-TW",
      isPartOf: {
        "@type": "WebSite",
        name: siteName,
        url: siteUrl,
      },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: blogPosts.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(`/blog/${post.slug}`),
          name: post.title,
        })),
      },
    },
  ];
}

export function getBlogPostStructuredData(post: BlogPost) {
  const path = `/blog/${post.slug}`;
  const publishedDate = parseTraditionalChineseDate(post.date);

  return [
    getBreadcrumbJsonLd([
      { name: siteName, path: "" },
      { name: "餐飲經營文章", path: "/blog" },
      { name: post.title, path },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      keywords: post.keywords.join(", "),
      url: absoluteUrl(path),
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": absoluteUrl(path),
      },
      datePublished: publishedDate,
      dateModified: publishedDate,
      inLanguage: "zh-Hant-TW",
      author: publisher,
      publisher,
      isPartOf: {
        "@type": "Blog",
        name: "餐飲經營文章",
        url: absoluteUrl("/blog"),
      },
    },
  ];
}

export function getToolsIndexStructuredData() {
  const groupedTools = toolsByCategory.flatMap((category) => category.tools);

  return [
    getBreadcrumbJsonLd([
      { name: siteName, path: "" },
      { name: "開店工具總覽", path: "/tools" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "開店工具總覽",
      url: absoluteUrl("/tools"),
      description:
        "開店小工具箱整理餐飲店、小吃店、飲料店常用的免費試算工具，依照單品定價、活動促銷、通路成本與整店經營分組，包含餐飲毛利率、滿額加購、折扣活動、外送平台抽成、菜單漲價、開店成本、損益兩平與人事成本占比試算。",
      inLanguage: "zh-Hant-TW",
      isPartOf: {
        "@type": "WebSite",
        name: siteName,
        url: siteUrl,
      },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: groupedTools.map((tool, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(tool.href),
          name: tool.title,
          description: tool.description,
        })),
      },
    },
  ];
}

export function getAboutStructuredData() {
  return [
    getBreadcrumbJsonLd([
      { name: siteName, path: "" },
      { name: "關於本站", path: "/about" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "關於開店小工具箱",
      url: absoluteUrl("/about"),
      description:
        "開店小工具箱是一個提供小店、餐飲店、小吃店與飲料店使用的免費營運試算工具網站，協助店家在定價與促銷前先估算毛利、成本與活動損益。",
      inLanguage: "zh-Hant-TW",
      isPartOf: {
        "@type": "WebSite",
        name: siteName,
        url: siteUrl,
      },
      publisher,
    },
  ];
}

export function getContactStructuredData(contactEmail: string) {
  return [
    getBreadcrumbJsonLd([
      { name: siteName, path: "" },
      { name: "聯絡我們", path: "/contact" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "聯絡開店小工具箱",
      url: absoluteUrl("/contact"),
      description:
        "開店小工具箱的聯絡頁，提供工具建議、錯誤回報、合作需求與網站內容相關問題的聯絡方式。",
      inLanguage: "zh-Hant-TW",
      isPartOf: {
        "@type": "WebSite",
        name: siteName,
        url: siteUrl,
      },
      publisher,
      mainEntity: {
        "@type": "Organization",
        name: siteName,
        url: siteUrl,
        email: contactEmail,
      },
    },
  ];
}

export function getGeneralFaqStructuredData(faqs: FaqItem[]) {
  return [
    getBreadcrumbJsonLd([
      { name: siteName, path: "" },
      { name: "常見問題", path: "/faq" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "常見問題",
      url: absoluteUrl("/faq"),
      description:
        "開店小工具箱常見問題，說明工具試算結果、資料儲存、使用限制、免費使用與聯絡方式。",
      inLanguage: "zh-Hant-TW",
      isPartOf: {
        "@type": "WebSite",
        name: siteName,
        url: siteUrl,
      },
      publisher,
    },
    getFaqPageJsonLd(faqs),
  ];
}

export function getToolStructuredData(toolKey: ToolKey) {
  const tool = getToolByKey(toolKey);

  return [
    getBreadcrumbJsonLd([
      { name: siteName, path: "" },
      { name: tool.title, path: tool.href },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: tool.title,
      url: absoluteUrl(tool.href),
      description: tool.structuredDescription,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Any",
      browserRequirements: "Requires JavaScript. Requires HTML5.",
      inLanguage: "zh-Hant-TW",
      isAccessibleForFree: true,
      keywords: tool.keywords.join(", "),
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "TWD",
      },
      publisher,
      isPartOf: {
        "@type": "WebSite",
        name: siteName,
        url: siteUrl,
      },
      sameAs: [absoluteUrl(tool.articleHref)],
    },
    getFaqPageJsonLd(tool.faqs),
  ];
}
