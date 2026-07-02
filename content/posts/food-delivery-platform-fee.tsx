import TrackedLink from "@/components/tracked-link";
import type { BlogPost } from "@/lib/post-types";

function FoodDeliveryPlatformFeeContent() {
  return (
<main className="bg-stone-50 text-stone-900">
  <article className="mx-auto max-w-4xl px-6 py-12">
    <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
      <p className="text-sm font-semibold text-orange-700">
        外送平台與成本
      </p>

      <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight">
        外送平台抽成怎麼算？餐飲店上架外送前要先知道的成本
      </h1>

      <p className="mt-5 text-lg leading-8 text-stone-700">
        餐飲店上架外送平台後，訂單可能變多，但毛利不一定變好。
        關鍵在於平台抽成會直接從售價中扣掉，如果你沒有另外試算外送價、包材成本和促銷折扣，
        可能會出現營業額增加，但每份商品實際留下的毛利變少。
      </p>

      <div className="mt-8 rounded-2xl bg-orange-50 p-5">
        <p className="font-bold text-orange-900">快速結論</p>
        <p className="mt-3 leading-7 text-orange-950">
          外送抽成可以用「售價 × 平台抽成率」估算。假設商品售價 120 元、食材包材成本 45 元、
          平台抽成 30%，平台費用是 36 元，抽成後毛利只剩 39 元。
          如果再做折扣或免運補貼，毛利會再下降。
        </p>
      </div>

      <div className="mt-10 space-y-10 leading-8 text-stone-700">
        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            一、外送抽成不是只影響營業額
          </h2>

          <p className="mt-4">
            外送平台抽成通常是依照商品售價或訂單金額的一定比例計算。
            對店家來說，它不是固定費用，而是每一筆外送訂單都會跟著發生的變動成本。
            所以外送商品不能只沿用內用價格，也不能只看平台帶來多少新訂單。
          </p>

          <p className="mt-4">
            外送訂單的毛利要同時看售價、食材成本、包材成本、平台抽成、活動折扣和可能的廣告費。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            二、外送抽成基本公式
          </h2>

          <div className="mt-4 rounded-2xl bg-stone-100 p-5">
            <p className="font-bold text-stone-900">
              平台抽成金額 = 商品售價 × 平台抽成率
            </p>
            <p className="mt-3 font-bold text-stone-900">
              抽成後毛利 = 商品售價 − 食材成本 − 包材成本 − 平台抽成金額
            </p>
          </div>

          <p className="mt-4">
            如果商品售價 120 元，平台抽成率 30%，平台抽成金額就是 36 元。
            這 36 元會直接降低單品毛利，所以售價和成本沒有調整時，外送毛利通常會比內用低很多。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            三、範例：120 元餐點上外送後剩多少毛利？
          </h2>

          <div className="mt-4 overflow-hidden rounded-2xl border border-stone-200">
            <table className="w-full border-collapse bg-white text-left text-sm">
              <tbody>
                <tr className="border-b border-stone-200">
                  <th className="w-1/2 bg-stone-100 px-4 py-3 font-bold">商品售價</th>
                  <td className="px-4 py-3">120 元</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <th className="bg-stone-100 px-4 py-3 font-bold">食材成本</th>
                  <td className="px-4 py-3">38 元</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <th className="bg-stone-100 px-4 py-3 font-bold">包材成本</th>
                  <td className="px-4 py-3">7 元</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <th className="bg-stone-100 px-4 py-3 font-bold">平台抽成 30%</th>
                  <td className="px-4 py-3">36 元</td>
                </tr>
                <tr>
                  <th className="bg-stone-100 px-4 py-3 font-bold">抽成後毛利</th>
                  <td className="px-4 py-3 font-bold">39 元</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">
            同一份商品如果內用沒有平台抽成，毛利是 120 − 38 − 7 = 75 元。
            上外送後毛利變成 39 元，少了 36 元。這就是外送平台定價需要獨立試算的原因。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            四、外送價要不要比內用價高？
          </h2>

          <p className="mt-4">
            是否調高外送價，要看平台規則、競爭狀況和顧客接受度。
            但從毛利角度，只要平台抽成存在，外送價若完全等同內用價，
            店家通常要承受較低的單品毛利。
          </p>

          <p className="mt-4">
            常見做法包含：外送價格略高、設計外送套餐、把高毛利品項放在醒目位置、
            限制低毛利商品參加活動，或把包材成本直接反映在外送售價裡。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            五、平台活動要另外算
          </h2>

          <p className="mt-4">
            外送平台常見活動包含滿額折扣、免運補貼、指定品項折扣和廣告曝光。
            這些費用如果由店家承擔，就要在抽成之外另外扣除。
          </p>

          <p className="mt-4">
            例如抽成後毛利原本剩 39 元，如果再提供每份 15 元折扣，
            毛利就只剩 24 元。訂單量如果沒有大幅增加，活動可能只是讓店家更忙。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            六、用外送平台抽成試算器快速試算
          </h2>

          <p className="mt-4">
            你可以使用本站的外送平台抽成試算器，輸入內用售價、外送售價、食材成本、包材成本、平台抽成和每日訂單數，
            快速比較外送抽成後每筆毛利、每日毛利與建議外送售價。
          </p>

          <div className="mt-6">
            <TrackedLink
              href="/tools/food-delivery-fee-calculator"
              eventName="click_article_cta"
              eventParams={{
                article_slug: "food-delivery-platform-fee",
                destination: "/tools/food-delivery-fee-calculator",
                tool_id: "food_delivery_fee",
              }}
              className="inline-flex rounded-full bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
            >
              使用外送平台抽成試算器
            </TrackedLink>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            七、常見問題
          </h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">Q1：外送抽成要算在成本裡嗎？</h3>
              <p className="mt-2">
                要。外送抽成是每筆外送訂單都會發生的變動成本，會直接影響單品毛利。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">Q2：外送價可以和內用價不同嗎？</h3>
              <p className="mt-2">
                實務上很多店會做不同通路價格，但仍要注意平台規則、競爭價格和顧客接受度。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">Q3：上外送平台一定比較賺嗎？</h3>
              <p className="mt-2">
                不一定。外送平台可能帶來新訂單，但如果抽成和活動費用太高，每份商品毛利可能大幅下降。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-100 p-5">
          <h2 className="text-2xl font-bold text-stone-900">本文重點整理</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>外送抽成是每筆外送訂單都會發生的變動成本。</li>
            <li>平台抽成金額 = 商品售價 × 平台抽成率。</li>
            <li>外送商品要同時算食材、包材、平台抽成和活動折扣。</li>
            <li>外送價是否調高，要看平台規則、競爭和顧客接受度。</li>
            <li>平台活動要另外試算，不能只看訂單量增加。</li>
          </ul>
        </section>

        <p className="text-sm leading-6 text-stone-500">
          提醒：本文與本站工具僅供一般試算參考，不構成會計、稅務、法律或財務建議。
          實際經營結果仍需依照你的平台合約、商品成本、促銷條件與通路策略判斷。
        </p>
      </div>
    </div>
  </article>
</main>
  );
}

export const foodDeliveryPlatformFeePost: BlogPost = {
  slug: "food-delivery-platform-fee",
  title: "外送平台抽成計算怎麼做？餐飲店上架外送前要先知道的成本",
  description:
    "說明餐飲店外送平台抽成計算方式，並用售價、食材成本、包材成本與平台抽成率試算外送商品實際毛利。",
  keywords: [
    "外送平台抽成計算",
    "外送平台抽成",
    "外送抽成怎麼算",
    "餐飲外送成本",
    "外送平台毛利",
    "餐飲毛利率",
    "外送定價",
    "平台抽成",
  ],
  category: "外送平台與成本",
  date: "2026 年 7 月 2 日",
  openGraphTitle: "外送平台抽成計算怎麼做？餐飲店上架外送前要先知道的成本",
  openGraphDescription:
    "用餐飲店外送訂單範例試算平台抽成、食材成本、包材成本和抽成後毛利。",
  relatedPostSlugs: [
    "restaurant-margin-how-to-calculate",
    "drink-shop-margin",
    "restaurant-food-cost-items",
  ],
  Content: FoodDeliveryPlatformFeeContent,
};
