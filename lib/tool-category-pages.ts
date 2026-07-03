import type { Metadata } from "next";
import {
  getToolCategoryBySlug,
  type FaqItem,
  type ToolCategorySlug,
} from "@/lib/tools";

type ToolCategoryPageDetail = {
  lead: string;
  longDescription: string;
  suitableFor: string[];
  useSteps: string[];
  faqs: FaqItem[];
  keywords: string[];
};

const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "開店小工具箱：餐飲毛利、開店成本、損益兩平試算工具",
};

const categoryPageDetails = {
  pricing: {
    lead: "想知道餐點成本怎麼算、商品要賣多少才會賺，或成本上漲後要不要漲價，可以先從單品定價工具開始。",
    longDescription:
      "單品定價工具適合用在餐廳、小吃店、飲料店新品上市、原物料上漲、菜單改版或外送平台售價調整前。你可以先用餐飲毛利率計算器把售價、食材、包材與平台抽成算清楚，再用菜單漲價試算器比較漲價後每日毛利是否真的改善。",
    suitableFor: [
      "正在想餐點、飲料或商品要賣多少才會賺的小吃店、飲料店與外帶店",
      "食材、包材或平台成本上升，需要重新計算售價的店家",
      "想知道餐飲成本、毛利率與建議售價怎麼算的小店老闆",
      "準備調漲菜單價格，但擔心客人變少或總毛利下降的經營者",
    ],
    useSteps: [
      "先用餐飲毛利率計算器輸入目前售價與直接成本，確認每份商品還剩多少毛利。",
      "若成本上升、售價太低或想調整菜單，再用菜單漲價試算器比較不同漲價金額的結果。",
      "把漲價後每日毛利與可能下降的銷量一起看，不只看單份毛利率。",
      "最後再回到實際菜單，檢查價格級距、顧客接受度與競品價格。",
    ],
    faqs: [
      {
        question: "單品定價應該先看售價還是成本？",
        answer:
          "建議先把食材、包材、平台抽成等直接成本列完整，再回推目前售價是否有足夠毛利。只看競品價格，容易忽略自己的成本結構。",
      },
      {
        question: "毛利率夠高就代表商品一定賺錢嗎？",
        answer:
          "不一定。毛利率只看單品直接成本，還要再考慮租金、人事、水電、耗損與行銷費用。單品毛利率是第一步，不是完整淨利。",
      },
      {
        question: "漲價前需要先試算哪些數字？",
        answer:
          "至少要看漲價前後每份毛利、毛利率、每日總毛利，以及銷量下降多少時會和原本打平。",
      },
    ],
    keywords: [
      "餐飲成本怎麼算",
      "餐點售價怎麼算",
      "毛利率怎麼算",
      "餐飲毛利率計算器",
      "菜單漲價試算器",
      "食材成本計算",
      "小吃店定價",
    ],
  },
  promotion: {
    lead: "想知道打折會不會賠錢、滿額加購會不會賺，或活動價要怎麼訂，可以先用促銷工具把成本和銷量算清楚。",
    longDescription:
      "活動促銷工具適合用在規劃滿額加購、限時折扣、新品導流或離峰促銷前。你可以先試算每筆活動訂單扣掉成本後還剩多少毛利，再估算活動後需要多賣幾份，才能維持或提升原本的每日總毛利。",
    suitableFor: [
      "準備推出滿額加購、套餐加購或第二件優惠，但想先確認會不會賺的店家",
      "想做折扣活動，但不確定打幾折才不會虧的小店老闆",
      "需要比較加購活動與直接折扣哪一種更划算的經營者",
      "正在規劃新品曝光、離峰促銷或短期活動的餐飲店",
    ],
    useSteps: [
      "先用滿額加購活動計算器確認加購商品成本、加購價與加購率是否合理。",
      "若活動形式是打折，再用折扣活動損益計算器比較活動前後每日總毛利。",
      "同時試算保守、中間、樂觀三種銷量情境，避免只用最樂觀假設。",
      "活動上線後用實際加購率與活動銷量回填，修正下一次活動門檻與價格。",
    ],
    faqs: [
      {
        question: "滿額加購和直接打折哪一種比較好？",
        answer:
          "沒有固定答案。滿額加購通常比較能提高客單價，直接打折比較容易刺激下單。實際要看商品成本、活動價、加購率與銷量變化。",
      },
      {
        question: "折扣活動最容易漏算什麼？",
        answer:
          "最容易漏算活動後每份毛利下降，以及需要多賣幾份才能維持原本總毛利。銷量增加不代表一定比較賺。",
      },
      {
        question: "加購商品要怎麼選？",
        answer:
          "建議選毛利較穩、製作流程簡單、不容易卡出餐、且和主商品有搭配感的商品。",
      },
    ],
    keywords: [
      "打折會不會賠錢",
      "滿額加購會不會賺",
      "促銷活動怎麼算",
      "滿額加購活動計算",
      "滿額加購計算器",
      "折扣活動損益計算器",
      "加購活動",
      "打折會不會虧",
    ],
  },
  channelCost: {
    lead: "想知道外送平台抽成後剩多少、外送售價要不要調整，或平台活動補貼會不會吃掉毛利，可以先算通路成本。",
    longDescription:
      "通路成本工具適合用在外送平台上架、調整外送售價、參加平台活動或比較內用與外送毛利前。你可以把平台抽成、包材、店家補貼和每日訂單數一起放進去，確認外送訂單增加後是否真的有助於整體毛利，而不是只有營業額變高。",
    suitableFor: [
      "準備上架外送平台的小吃店、飲料店與外帶店",
      "已經有外送訂單，但不確定平台抽成後是否划算的店家",
      "正在調整外送平台售價或平台活動補貼的經營者",
      "想比較內用價、外帶價與外送價差異的小店老闆",
    ],
    useSteps: [
      "先輸入內用價、外送價、食材成本、包材成本與平台抽成比例。",
      "再加入店家補貼、活動折扣或其他由店家負擔的費用。",
      "比較每筆外送毛利與每日外送總毛利，判斷外送量增加是否值得。",
      "若毛利過低，再試算調整外送價、降低補貼或重新設計外送品項。",
    ],
    faqs: [
      {
        question: "外送平台抽成要算在商品成本裡嗎？",
        answer:
          "應該算進每筆外送訂單的變動成本。抽成比例越高，外送價若沒有調整，實際毛利就越容易被壓縮。",
      },
      {
        question: "外送價一定要比內用價高嗎？",
        answer:
          "不一定，但如果平台抽成、包材成本與活動補貼都由店家負擔，外送價通常需要重新試算，不能直接沿用內用價格。",
      },
      {
        question: "外送訂單越多一定越好嗎？",
        answer:
          "不一定。如果每筆外送毛利太低，或外送影響現場出餐與服務，訂單增加也可能讓整體經營壓力變大。",
      },
    ],
    keywords: [
      "外送抽成怎麼算",
      "外送平台抽成後剩多少",
      "外送平台抽成計算",
      "外送平台抽成試算器",
      "外送成本計算",
      "平台抽成",
      "外送定價",
      "餐飲外送毛利",
    ],
  },
  operations: {
    lead: "想知道開店要準備多少錢、每天要賣多少才不虧，或員工薪水占比會不會太高，可以先看整店經營工具。",
    longDescription:
      "整店經營工具適合用在餐廳開店成本估算、正式營業後檢查損益兩平、以及每月檢查人事成本占比。它不是只看某一道商品，而是從整間店的現金壓力、營業額門檻與人力配置來判斷營運是否撐得住。",
    suitableFor: [
      "準備開小吃店、飲料店、外帶店或餐飲工作室的創業者",
      "想估算開店前要準備多少啟動資金的小店老闆",
      "已開店但想知道每天要賣多少營業額、幾筆訂單才不虧的經營者",
      "需要檢查人事成本占營業額比例是否過高的店家",
    ],
    useSteps: [
      "開店前先用餐廳開店成本估算器估算押金、裝潢、設備、備料與周轉金。",
      "確認每月固定成本後，用損益兩平計算器估算每月營業額與每日訂單數門檻。",
      "正式營業後，再用人事成本占比計算檢查薪資與排班是否合理。",
      "把三個工具結果一起看，確認資金、營業額與人力配置是否互相支撐。",
    ],
    faqs: [
      {
        question: "開店前最應該先算哪個數字？",
        answer:
          "建議先算啟動資金與周轉金，再算每月固定成本與損益兩平營業額。只看裝潢設備費，容易低估正式營業後的現金壓力。",
      },
      {
        question: "損益兩平算出來後代表可以開店嗎？",
        answer:
          "不一定。損益兩平只是最低營運門檻，還要評估商圈人流、產品競爭力、尖峰出餐能力、淡旺季與資金緩衝。",
      },
      {
        question: "人事成本占比太高要先砍人力嗎？",
        answer:
          "不一定。應先檢查營業額是否不足、排班是否符合尖離峰、流程是否卡住，以及是否有提高客單價或簡化菜單的空間。",
      },
    ],
    keywords: [
      "開店要準備多少錢",
      "開店成本怎麼算",
      "每天要賣多少才不虧",
      "餐廳開店成本估算器",
      "開店成本試算器",
      "損益兩平計算器",
      "損益兩平試算器",
      "人事成本占比計算",
      "人事成本占比試算器",
      "開店預算",
      "餐飲營運工具",
    ],
  },
} as const satisfies Record<ToolCategorySlug, ToolCategoryPageDetail>;

export function getToolCategoryPage(categorySlug: ToolCategorySlug) {
  const category = getToolCategoryBySlug(categorySlug);
  const detail = categoryPageDetails[categorySlug];
  const relatedArticles = category.tools
    .map((tool) => ({
      title: tool.articleTitle,
      href: tool.articleHref,
      toolTitle: tool.title,
    }))
    .filter(
      (article, index, articles) =>
        articles.findIndex((item) => item.href === article.href) === index,
    );

  return {
    ...category,
    ...detail,
    relatedArticles,
  };
}

export function getToolCategoryPageMetadata(
  categorySlug: ToolCategorySlug,
): Metadata {
  const page = getToolCategoryPage(categorySlug);

  return {
    title: `${page.title}工具｜${page.keywords.slice(0, 3).join("、")}`,
    description: `${page.title}工具整理：${page.description}${page.lead}`,
    keywords: page.keywords,
    alternates: {
      canonical: page.href,
    },
    openGraph: {
      title: `${page.title}工具｜開店小工具箱`,
      description: page.lead,
      url: page.href,
      type: "website",
      locale: "zh_TW",
      siteName: "開店小工具箱",
      images: [ogImage],
    },
  };
}
