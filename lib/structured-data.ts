import type { BlogPost } from "@/lib/posts";

export const siteUrl = "https://store-toolbox.vercel.app";

const siteName = "開店小工具箱";
const siteDescription =
  "開店小工具箱提供餐飲店、小吃店、飲料店常用的營運試算工具，包含滿額加購活動計算器、餐飲毛利率計算器、折扣活動損益計算器，幫助小店老闆在做活動前先算清楚。";

const publisher = {
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
};

type FaqItem = {
  question: string;
  answer: string;
};

type ToolStructuredData = {
  name: string;
  description: string;
  path: string;
  keywords: string[];
  relatedArticlePath: string;
  faqs: FaqItem[];
};

const tools = {
  addOnPromotionCalculator: {
    name: "滿額加購活動計算器",
    description:
      "免費滿額加購活動計算器，輸入滿額門檻、加購價、商品成本、加購率與每日訂單數，快速試算餐飲店、小吃店、飲料店的加購活動是否划算。",
    path: "/tools/add-on-promotion-calculator",
    keywords: ["滿額加購計算器", "滿額加購活動", "餐飲促銷活動"],
    relatedArticlePath: "/blog/add-on-promotion-example",
    faqs: [
      {
        question: "滿額加購活動適合所有餐飲店嗎？",
        answer:
          "不一定。若加購商品毛利太低、製作流程太複雜，或尖峰時段會拖慢出餐速度，就要先小規模測試。",
      },
      {
        question: "加購率要怎麼估算？",
        answer:
          "剛開始可以用 10%、20%、30% 做保守、中間、樂觀三種情境。活動上線後，再用實際訂單紀錄修正。",
      },
      {
        question: "加購商品成本要包含哪些？",
        answer:
          "建議至少包含食材、杯瓶、包材、封膜、袋子與直接耗材。成本算得越完整，試算結果越接近真實狀況。",
      },
      {
        question: "滿額門檻要怎麼設定？",
        answer:
          "可以從平均客單價往上加一點點。若平均客單價是 120 元，滿 150 元通常比滿 200 元更容易讓客人達成。",
      },
    ],
  },
  restaurantMarginCalculator: {
    name: "餐飲毛利率計算器",
    description:
      "免費餐飲毛利率計算器，輸入商品售價、食材成本、包材成本、平台抽成與目標毛利率，快速計算單品毛利、毛利率與建議售價。",
    path: "/tools/restaurant-margin-calculator",
    keywords: ["餐飲毛利率計算器", "餐飲定價", "食材成本計算"],
    relatedArticlePath: "/blog/restaurant-margin-how-to-calculate",
    faqs: [
      {
        question: "餐飲毛利率和淨利率差在哪？",
        answer:
          "毛利率只看商品售價扣掉直接成本後剩下的比例；淨利率還要再扣掉人事、租金、水電、行銷、稅務等營運成本。",
      },
      {
        question: "包材成本要算進去嗎？",
        answer:
          "建議要算。外帶與外送比例高的店，餐盒、杯子、袋子、封膜等包材成本會明顯影響實際毛利。",
      },
      {
        question: "外送平台抽成要怎麼算？",
        answer:
          "可以用商品售價乘以平台抽成比例，再從毛利中扣除。若平台抽成 30%，100 元商品就會多扣 30 元平台費。",
      },
      {
        question: "毛利率太低怎麼改善？",
        answer:
          "可以調整售價、檢查食材份量、降低包材成本、設計套餐組合，或針對外送平台設定不同售價。",
      },
    ],
  },
  discountProfitCalculator: {
    name: "折扣活動損益計算器",
    description:
      "免費折扣活動損益計算器，輸入商品原價、活動售價、成本、原本銷量與活動後預估銷量，快速判斷打折促銷後毛利是增加還是減少。",
    path: "/tools/discount-profit-calculator",
    keywords: ["折扣活動計算器", "打折會不會虧", "餐飲折扣活動"],
    relatedArticlePath: "/blog/discount-promotion-profit",
    faqs: [
      {
        question: "打折後銷量增加就一定比較賺嗎？",
        answer:
          "不一定。要比較活動前後的每日總毛利。如果銷量增加幅度不夠，總毛利仍可能比原本更低。",
      },
      {
        question: "活動價低於成本可以嗎？",
        answer:
          "一般不建議。除非是清庫存、試吃、導流或短期行銷策略，否則活動價低於成本會讓每一份商品都產生虧損。",
      },
      {
        question: "需要多賣幾份才打平？",
        answer:
          "可以用原本每日毛利除以活動每份毛利，算出活動後至少要賣幾份，才能維持原本的每日毛利。",
      },
      {
        question: "折扣活動適合用在什麼情況？",
        answer:
          "比較適合用在新品曝光、離峰時段引流、庫存壓力、或毛利率較高且出餐流程穩定的商品。",
      },
    ],
  },
} satisfies Record<string, ToolStructuredData>;

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
        "開店小工具箱的餐飲經營文章，整理滿額加購、餐飲毛利、折扣活動、定價試算與小店促銷活動的實用教學。",
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

export function getToolStructuredData(toolKey: keyof typeof tools) {
  const tool = tools[toolKey];

  return [
    getBreadcrumbJsonLd([
      { name: siteName, path: "" },
      { name: tool.name, path: tool.path },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: tool.name,
      url: absoluteUrl(tool.path),
      description: tool.description,
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
      sameAs: [absoluteUrl(tool.relatedArticlePath)],
    },
    getFaqPageJsonLd(tool.faqs),
  ];
}
