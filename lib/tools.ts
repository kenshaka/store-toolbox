export type FaqItem = {
  question: string;
  answer: string;
};

export type ToolKey =
  | "addOnPromotionCalculator"
  | "restaurantMarginCalculator"
  | "discountProfitCalculator";

export type Tool = {
  key: ToolKey;
  toolId: string;
  navLabel: string;
  title: string;
  category: string;
  href: string;
  homeDescription: string;
  description: string;
  structuredDescription: string;
  articleTitle: string;
  articleHref: string;
  keywords: string[];
  faqs: FaqItem[];
};

export const tools = [
  {
    key: "addOnPromotionCalculator",
    toolId: "add_on_promotion",
    navLabel: "滿額加購",
    title: "滿額加購活動計算器",
    category: "餐飲促銷活動",
    href: "/tools/add-on-promotion-calculator",
    homeDescription:
      "輸入滿額門檻、加購價與商品成本，快速試算加購活動是否划算。",
    description:
      "輸入滿額門檻、加購價、商品成本、加購率與每日訂單數，快速試算滿額加購活動是否划算。",
    structuredDescription:
      "免費滿額加購活動計算器，輸入滿額門檻、加購價、商品成本、加購率與每日訂單數，快速試算餐飲店、小吃店、飲料店的加購活動是否划算。",
    articleTitle: "滿 150 元加購 40 元划算嗎？餐飲店滿額加購活動怎麼算",
    articleHref: "/blog/add-on-promotion-example",
    keywords: ["滿額加購計算器", "滿額加購活動", "餐飲促銷活動"],
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
  {
    key: "restaurantMarginCalculator",
    toolId: "restaurant_margin",
    navLabel: "餐飲毛利",
    title: "餐飲毛利率計算器",
    category: "餐飲定價與毛利",
    href: "/tools/restaurant-margin-calculator",
    homeDescription:
      "輸入售價與成本，計算單品毛利、毛利率與定價是否合理。",
    description:
      "輸入商品售價、食材成本、包材成本、平台抽成與目標毛利率，快速計算單品毛利與建議售價。",
    structuredDescription:
      "免費餐飲毛利率計算器，輸入商品售價、食材成本、包材成本、平台抽成與目標毛利率，快速計算單品毛利、毛利率與建議售價。",
    articleTitle:
      "餐飲毛利率怎麼算？小吃店、飲料店定價前一定要看的毛利公式",
    articleHref: "/blog/restaurant-margin-how-to-calculate",
    keywords: ["餐飲毛利率計算器", "餐飲定價", "食材成本計算"],
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
  {
    key: "discountProfitCalculator",
    toolId: "discount_profit",
    navLabel: "折扣試算",
    title: "折扣活動損益計算器",
    category: "折扣活動試算",
    href: "/tools/discount-profit-calculator",
    homeDescription:
      "試算打折後還剩多少毛利，以及需要多賣幾份才不會虧。",
    description:
      "輸入商品原價、活動售價、成本、原本銷量與活動後預估銷量，判斷打折促銷後毛利是增加還是減少。",
    structuredDescription:
      "免費折扣活動損益計算器，輸入商品原價、活動售價、成本、原本銷量與活動後預估銷量，快速判斷打折促銷後毛利是增加還是減少。",
    articleTitle:
      "折扣活動怎麼算才不會虧？餐飲店打折促銷前要先算這幾個數字",
    articleHref: "/blog/discount-promotion-profit",
    keywords: ["折扣活動計算器", "打折會不會虧", "餐飲折扣活動"],
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
] as const satisfies readonly Tool[];

export function getToolByKey(toolKey: ToolKey) {
  return tools.find((tool) => tool.key === toolKey)!;
}
