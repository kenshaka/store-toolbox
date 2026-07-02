import TrackedLink from "@/components/tracked-link";
import type { BlogPost } from "@/lib/post-types";

function DrinkShopMarginContent() {
  return (
<main className="bg-stone-50 text-stone-900">
  <article className="mx-auto max-w-4xl px-6 py-12">
    <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
      <p className="text-sm font-semibold text-orange-700">
        飲料店經營
      </p>

      <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight">
        飲料店毛利怎麼算？原物料、杯材、平台抽成要一起看
      </h1>

      <p className="mt-5 text-lg leading-8 text-stone-700">
        飲料店看起來毛利率高，但實際上很容易被杯材、封膜、吸管、糖漿、茶葉耗損、
        外送平台抽成和折扣活動吃掉利潤。尤其是手搖飲、咖啡、果汁和外帶飲品，
        如果只算茶湯或牛奶成本，很容易高估單杯毛利。
      </p>

      <div className="mt-8 rounded-2xl bg-orange-50 p-5">
        <p className="font-bold text-orange-900">快速結論</p>
        <p className="mt-3 leading-7 text-orange-950">
          飲料店毛利要用「售價 − 原物料成本 − 杯材成本 − 其他直接成本」來看。
          例如一杯飲料賣 65 元，原物料 18 元、杯材 5 元，單杯毛利是 42 元，
          毛利率約 64.6%。如果外送平台再抽 30%，平台費用約 19.5 元，抽成後毛利會降到 22.5 元。
        </p>
      </div>

      <div className="mt-10 space-y-10 leading-8 text-stone-700">
        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            一、飲料店不能只算原料成本
          </h2>

          <p className="mt-4">
            很多飲料店在估成本時，只看茶葉、鮮奶、珍珠、果醬或糖漿的成本。
            但每一杯飲料實際賣出時，通常還包含杯子、封膜、吸管、提袋、貼紙、冰塊、
            耗損和備料損失。這些金額單看不大，但每天賣幾百杯時，累積起來差很多。
          </p>

          <p className="mt-4">
            所以飲料店毛利要以「單杯完整直接成本」來看，而不是只看主要原料。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            二、範例：一杯 65 元飲料的毛利
          </h2>

          <div className="mt-4 overflow-hidden rounded-2xl border border-stone-200">
            <table className="w-full border-collapse bg-white text-left text-sm">
              <tbody>
                <tr className="border-b border-stone-200">
                  <th className="w-1/2 bg-stone-100 px-4 py-3 font-bold">售價</th>
                  <td className="px-4 py-3">65 元</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <th className="bg-stone-100 px-4 py-3 font-bold">茶湯、鮮奶、配料</th>
                  <td className="px-4 py-3">18 元</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <th className="bg-stone-100 px-4 py-3 font-bold">杯子、封膜、吸管</th>
                  <td className="px-4 py-3">5 元</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <th className="bg-stone-100 px-4 py-3 font-bold">總直接成本</th>
                  <td className="px-4 py-3">23 元</td>
                </tr>
                <tr>
                  <th className="bg-stone-100 px-4 py-3 font-bold">單杯毛利</th>
                  <td className="px-4 py-3 font-bold">42 元</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">
            這杯飲料的毛利率是 42 ÷ 65 × 100% = 64.6%。看起來不錯，
            但這還沒有扣掉人事、租金、水電，也還沒有考慮外送抽成和促銷折扣。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            三、外送平台會明顯壓縮飲料毛利
          </h2>

          <p className="mt-4">
            如果同一杯 65 元飲料放到外送平台，平台抽成假設是 30%，
            平台費用約 19.5 元。原本單杯毛利 42 元，扣掉平台費用後只剩 22.5 元。
          </p>

          <div className="mt-4 rounded-2xl bg-stone-100 p-5">
            <p className="font-bold text-stone-900">
              抽成後毛利 = 售價 − 直接成本 − 平台抽成
            </p>
            <p className="mt-3 font-bold text-stone-900">
              65 − 23 − 19.5 = 22.5 元
            </p>
          </div>

          <p className="mt-4">
            這就是為什麼很多飲料店會設定外送價、平台專屬套餐，
            或避免在低毛利品項上再做太深的外送折扣。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            四、配料加價也要看毛利
          </h2>

          <p className="mt-4">
            珍珠、椰果、奶蓋、布丁、仙草等配料，常常是飲料店提高客單價的方法。
            但配料不能只看加價金額，也要看成本、備料耗損和出杯速度。
          </p>

          <p className="mt-4">
            例如珍珠加價 10 元，單份成本 3 元，單份配料毛利是 7 元。
            如果加料比例高，而且不影響出杯效率，這類加價品項通常能幫助提高總毛利。
            但如果配料保存時間短、報廢率高，就要把耗損一起算進去。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            五、飲料店做活動前先看單杯毛利
          </h2>

          <p className="mt-4">
            飲料店常見活動包含第二杯折扣、買五送一、滿額加購、小杯升大杯和外送免運。
            這些活動都會影響單杯毛利。活動前先算清楚，才知道要賣多少杯才補得回折扣。
          </p>

          <p className="mt-4">
            如果原本單杯毛利只有 22 元，活動折掉 15 元後，單杯毛利只剩 7 元，
            就算銷量增加，也不一定能帶來足夠總毛利。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            六、用餐飲毛利率計算器快速試算
          </h2>

          <p className="mt-4">
            你可以使用本站的餐飲毛利率計算器，把飲料售價、原物料成本、杯材成本和平台抽成都輸入，
            快速比較內用、外帶和外送不同通路的毛利差異。
          </p>

          <div className="mt-6">
            <TrackedLink
              href="/tools/restaurant-margin-calculator"
              eventName="click_article_cta"
              eventParams={{
                article_slug: "drink-shop-margin",
                destination: "/tools/restaurant-margin-calculator",
                tool_id: "restaurant_margin",
              }}
              className="inline-flex rounded-full bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
            >
              使用餐飲毛利率計算器
            </TrackedLink>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            七、常見問題
          </h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">Q1：飲料店毛利率是不是一定比餐點高？</h3>
              <p className="mt-2">
                不一定。飲料原料成本可能較低，但杯材、耗損、平台抽成和活動折扣都會影響實際毛利。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">Q2：杯材成本很小，真的要算嗎？</h3>
              <p className="mt-2">
                要。杯材每杯可能只有幾元，但飲料店銷量高，長期累積會明顯影響毛利。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">Q3：外送商品一定要調高價格嗎？</h3>
              <p className="mt-2">
                不一定，但一定要先試算。若平台抽成後毛利太低，可以考慮外送專屬價格、套餐或限制活動品項。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-100 p-5">
          <h2 className="text-2xl font-bold text-stone-900">本文重點整理</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>飲料店毛利要把原物料、杯材、耗損和平台抽成都納入。</li>
            <li>售價 65 元、直接成本 23 元時，單杯毛利是 42 元。</li>
            <li>外送平台抽成會大幅壓縮抽成後毛利。</li>
            <li>配料加價可以提高客單價，但也要看耗損和出杯效率。</li>
            <li>第二杯折扣和滿額活動前，應先比較活動前後毛利。</li>
          </ul>
        </section>

        <p className="text-sm leading-6 text-stone-500">
          提醒：本文與本站工具僅供一般試算參考，不構成會計、稅務、法律或財務建議。
          實際經營結果仍需依照你的原料價格、杯材成本、人力配置、平台合約與活動條件判斷。
        </p>
      </div>
    </div>
  </article>
</main>
  );
}

export const drinkShopMarginPost: BlogPost = {
  slug: "drink-shop-margin",
  title: "飲料店毛利怎麼算？原物料、杯材、平台抽成要一起看",
  description:
    "用飲料店單杯成本範例，說明原物料、杯材、配料、平台抽成與促銷活動如何影響實際毛利。",
  keywords: [
    "餐飲毛利率計算器",
    "飲料店毛利",
    "飲料店成本",
    "手搖飲毛利",
    "杯材成本",
    "飲料店定價",
    "外送平台抽成",
    "飲料促銷",
  ],
  category: "飲料店經營",
  date: "2026 年 7 月 2 日",
  openGraphTitle: "飲料店毛利怎麼算？原物料、杯材、平台抽成要一起看",
  openGraphDescription:
    "用單杯飲料範例試算飲料店毛利，包含原物料、杯材、配料和平台抽成。",
  relatedPostSlugs: [
    "restaurant-margin-how-to-calculate",
    "restaurant-margin-benchmark",
    "food-delivery-platform-fee",
  ],
  Content: DrinkShopMarginContent,
};
