export type FaqItem = {
  question: string;
  answer: string;
};

export type ToolCategorySlug =
  | "pricing"
  | "promotion"
  | "channelCost"
  | "operations";

export type ToolCategory = {
  slug: ToolCategorySlug;
  title: string;
  description: string;
  homeDescription: string;
};

export const toolCategories = [
  {
    slug: "pricing",
    title: "單品定價",
    description:
      "適合用來檢查單一商品的售價、成本、毛利率與漲價後變化。",
    homeDescription:
      "先確認每個品項賣出去後還剩多少毛利，再決定售價或漲價幅度。",
  },
  {
    slug: "promotion",
    title: "活動促銷",
    description:
      "適合用來評估滿額加購、折扣活動是否真的能增加毛利。",
    homeDescription:
      "推出促銷前，先試算加購價、折扣價與銷量變化是否划算。",
  },
  {
    slug: "channelCost",
    title: "通路成本",
    description:
      "適合用來估算外送平台抽成、包材成本與平台價是否合理。",
    homeDescription:
      "上架外送平台前，先看抽成與包材扣完後每筆訂單還剩多少。",
  },
  {
    slug: "operations",
    title: "整店經營",
    description:
      "適合用來估算開店預算、損益兩平與人事成本占比。",
    homeDescription:
      "從整間店的角度檢查固定成本、啟動資金與人力配置是否撐得住。",
  },
] as const satisfies readonly ToolCategory[];

export type ToolKey =
  | "addOnPromotionCalculator"
  | "restaurantMarginCalculator"
  | "foodDeliveryFeeCalculator"
  | "menuPriceIncreaseCalculator"
  | "discountProfitCalculator"
  | "breakEvenCalculator"
  | "startupCostCalculator"
  | "laborCostRatioCalculator";

export type Tool = {
  key: ToolKey;
  toolId: string;
  navLabel: string;
  title: string;
  category: string;
  categorySlug: ToolCategorySlug;
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
    categorySlug: "promotion",
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
    categorySlug: "pricing",
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
    key: "foodDeliveryFeeCalculator",
    toolId: "food_delivery_fee",
    navLabel: "外送抽成",
    title: "外送平台抽成試算器",
    category: "外送平台與成本",
    categorySlug: "channelCost",
    href: "/tools/food-delivery-fee-calculator",
    homeDescription:
      "輸入外送售價、平台抽成與成本，試算外送訂單還剩多少毛利。",
    description:
      "輸入內用售價、外送售價、食材成本、包材成本、平台抽成、店家補貼與每日訂單數，快速估算外送抽成後毛利與建議外送售價。",
    structuredDescription:
      "免費外送平台抽成試算器，輸入內用售價、外送平台售價、食材成本、包材成本、平台抽成、店家補貼與每日外送訂單數，快速估算餐飲店、小吃店、飲料店外送抽成後毛利、每日毛利與建議外送售價。",
    articleTitle: "外送平台抽成怎麼算？餐飲店上架外送前要先知道的成本",
    articleHref: "/blog/food-delivery-platform-fee",
    keywords: ["外送平台抽成試算器", "外送抽成計算", "餐飲外送成本"],
    faqs: [
      {
        question: "外送平台抽成要算進成本嗎？",
        answer:
          "要。平台抽成是每筆外送訂單都會發生的變動成本，會直接降低單品毛利。",
      },
      {
        question: "外送價格一定要比內用價格高嗎？",
        answer:
          "不一定，但如果平台抽成比例高、包材成本也高，外送價完全等同內用價時，毛利通常會明顯下降。",
      },
      {
        question: "平台活動折扣要另外算嗎？",
        answer:
          "要。如果折扣、免運補貼或平台活動費用由店家負擔，就應該在平台抽成之外再扣除。",
      },
      {
        question: "外送訂單增加就一定比較賺嗎？",
        answer:
          "不一定。要比較外送每筆毛利、每日外送總毛利，以及外送是否增加出餐壓力或影響現場服務。",
      },
    ],
  },

  {
    key: "menuPriceIncreaseCalculator",
    toolId: "menu_price_increase",
    navLabel: "菜單漲價",
    title: "菜單漲價試算器",
    category: "餐飲定價與毛利",
    categorySlug: "pricing",
    href: "/tools/menu-price-increase-calculator",
    homeDescription:
      "輸入售價、成本、調漲金額與銷量，試算漲價後每日毛利變化。",
    description:
      "輸入目前售價、目前成本、成本上漲後成本、預計調漲金額與每日銷量，快速試算菜單漲價後毛利率與每日毛利變化。",
    structuredDescription:
      "免費菜單漲價試算器，輸入目前售價、目前成本、成本上漲後成本、預計調漲金額與每日銷量，快速估算餐飲店、小吃店、飲料店漲價後毛利率、每日毛利與銷量打平點。",
    articleTitle: "菜單漲價怎麼算？漲價幅度、客單價和毛利率試算",
    articleHref: "/blog/menu-price-increase",
    keywords: ["菜單漲價試算器", "餐飲漲價計算", "餐飲定價"],
    faqs: [
      {
        question: "菜單漲價前最重要要看什麼？",
        answer:
          "建議先看目前每份毛利、成本上漲後的新毛利、漲價後毛利率，以及漲價後每日銷量下降時，總毛利是否仍能維持或增加。",
      },
      {
        question: "漲價後銷量下降就一定不好嗎？",
        answer:
          "不一定。若每份毛利提高夠多，即使銷量小幅下降，每日總毛利仍可能比原本更高。重點是比較漲價前後的每日總毛利。",
      },
      {
        question: "漲價幅度要用金額還是百分比看？",
        answer:
          "兩個都要看。金額方便設計菜單價格，百分比可以看顧客感受與毛利改善幅度。實務上常用 5 元、10 元等容易理解的級距測試。",
      },
      {
        question: "可以用套餐或加購代替漲價嗎？",
        answer:
          "可以。若直接漲價擔心顧客反彈，可以用套餐、份量升級、加購品項或規格調整提高客單價，但仍要先確認總毛利是否改善。",
      },
    ],
  },
  {
    key: "discountProfitCalculator",
    toolId: "discount_profit",
    navLabel: "折扣試算",
    title: "折扣活動損益計算器",
    category: "折扣活動試算",
    categorySlug: "promotion",
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
  {
    key: "breakEvenCalculator",
    toolId: "break_even",
    navLabel: "損益兩平",
    title: "開店損益兩平試算器",
    category: "整店營運試算",
    categorySlug: "operations",
    href: "/tools/break-even-calculator",
    homeDescription:
      "輸入固定成本、客單價與毛利率，估算每天要賣幾筆才不虧。",
    description:
      "輸入每月租金、人事、水電、固定支出、平均客單價、毛利率與營業天數，快速估算損益兩平月營業額、每日營業額與每日訂單數。",
    structuredDescription:
      "免費開店損益兩平試算器，輸入每月租金、人事成本、水電瓦斯、固定支出、平均客單價、平均毛利率與營業天數，快速估算餐飲店、小吃店、飲料店每月要做到多少營業額、每天要賣幾筆才不虧。",
    articleTitle: "餐飲店毛利率多少才合理？不同品項毛利率怎麼看",
    articleHref: "/blog/restaurant-margin-benchmark",
    keywords: ["開店損益兩平試算器", "損益兩平計算", "開店營業額試算"],
    faqs: [
      {
        question: "損益兩平是什麼意思？",
        answer:
          "損益兩平是指營業額產生的毛利剛好足以支付租金、人事、水電等固定成本，此時店家不賺也不虧。",
      },
      {
        question: "為什麼要用毛利率計算損益兩平？",
        answer:
          "因為營業額不會全部變成可用來支付固定成本的錢。扣除食材、包材、平台抽成等變動成本後，剩下的毛利才是用來支付固定成本和利潤的來源。",
      },
      {
        question: "平均客單價會影響什麼？",
        answer:
          "平均客單價會影響每天需要幾筆訂單才打平。客單價越高，在相同毛利率下，每天需要的訂單數通常越少。",
      },
      {
        question: "損益兩平算出來後就可以開店嗎？",
        answer:
          "不一定。損益兩平只是基本門檻，實際仍要評估商圈人流、尖峰出餐能力、淡旺季、周轉金與現場執行狀況。",
      },
    ],
  },
  {
    key: "startupCostCalculator",
    toolId: "startup_cost",
    navLabel: "開店成本",
    title: "開店成本試算器",
    category: "開店預算試算",
    categorySlug: "operations",
    href: "/tools/startup-cost-calculator",
    homeDescription:
      "輸入押金、裝潢、設備與周轉金，估算開店前要準備多少資金。",
    description:
      "輸入押金與預付租金、裝潢、設備、初期備料、開幕行銷、開幕前人事與周轉金月數，快速估算開一家小店需要準備多少啟動資金。",
    structuredDescription:
      "免費開店成本試算器，輸入押金與預付租金、裝潢、設備、初期備料、登記雜支、開幕行銷、開幕前人事與周轉金月數，快速估算餐飲店、小吃店、飲料店開店前需要準備多少啟動資金。",
    articleTitle: "餐點成本包含哪些？食材、包材、人力和平台費用怎麼估",
    articleHref: "/blog/restaurant-food-cost-items",
    keywords: ["開店成本試算器", "開店預算", "餐飲開店成本"],
    faqs: [
      {
        question: "開店成本通常包含哪些項目？",
        answer:
          "常見項目包含押金與預付租金、裝潢、設備、初期備料、包材、登記雜支、開幕行銷、開幕前人事訓練與周轉金。",
      },
      {
        question: "周轉金要抓幾個月比較安全？",
        answer:
          "建議至少抓 2 到 3 個月固定營運成本。若商圈來客不穩、裝潢費用高或開幕初期需要測試行銷，周轉金可以抓更保守。",
      },
      {
        question: "裝潢和設備占比太高有什麼風險？",
        answer:
          "裝潢設備花太多會壓縮備料、人事、行銷與周轉金，導致正式營業後現金緩衝不足。",
      },
      {
        question: "這個工具可以取代正式預算表嗎？",
        answer:
          "不能。這個工具適合做開店前初步估算，正式投入前仍需要逐項詢價、確認租約條件與保留追加預算。",
      },
    ],
  },
  {
    key: "laborCostRatioCalculator",
    toolId: "labor_cost_ratio",
    navLabel: "人事占比",
    title: "人事成本占比試算器",
    category: "人事成本試算",
    categorySlug: "operations",
    href: "/tools/labor-cost-ratio-calculator",
    homeDescription:
      "輸入營業額、薪資與兼職時數，估算人事成本占營業額比例。",
    description:
      "輸入月營業額、正職人數、正職平均月薪、兼職總時數、兼職時薪、老闆薪資與額外人事負擔，快速估算人事成本占比與符合目標占比所需營業額。",
    structuredDescription:
      "免費人事成本占比試算器，輸入月營業額、正職人數、正職平均月薪、兼職總時數、兼職時薪、老闆薪資、額外人事負擔與目標人事成本占比，快速估算餐飲店、小吃店、飲料店的人事成本占營業額比例。",
    articleTitle: "餐點成本包含哪些？食材、包材、人力和平台費用怎麼估",
    articleHref: "/blog/restaurant-food-cost-items",
    keywords: ["人事成本占比試算器", "人事成本計算", "薪資占營業額"],
    faqs: [
      {
        question: "人事成本占比怎麼算？",
        answer:
          "可以用每月人事成本合計除以每月營業額，再乘以 100%。人事成本應包含正職、兼職、老闆工時與額外人事負擔。",
      },
      {
        question: "老闆薪資要算進人事成本嗎？",
        answer:
          "建議要算。若老闆長時間在店裡工作卻完全不計入成本，容易高估店的實際獲利能力。",
      },
      {
        question: "人事成本占比越低越好嗎？",
        answer:
          "不一定。占比太低可能代表人手過緊、尖峰服務品質下降或老闆工時被低估。要同時看營業額、服務品質與現場負荷。",
      },
      {
        question: "如果人事占比太高怎麼辦？",
        answer:
          "可以檢查排班、尖離峰人力配置、出餐流程、菜單複雜度，也可以思考是否需要提高客單價或增加營業額。",
      },
    ],
  },
] as const satisfies readonly Tool[];

export const toolsByCategory = toolCategories.map((category) => ({
  ...category,
  tools: tools.filter((tool) => tool.categorySlug === category.slug),
}));

export function getToolByKey(toolKey: ToolKey) {
  return tools.find((tool) => tool.key === toolKey)!;
}
