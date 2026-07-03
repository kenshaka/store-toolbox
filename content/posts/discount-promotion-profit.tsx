import TrackedLink from "@/components/tracked-link";
import type { BlogPost } from "@/lib/post-types";

function DiscountPromotionProfitContent() {
  return (
<main className="bg-stone-50 text-stone-900">
  <article className="mx-auto max-w-4xl px-6 py-12">
    <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
      <p className="text-sm font-semibold text-orange-700">
        餐飲促銷活動
      </p>

      <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight">
        折扣活動怎麼算才不會虧？餐飲店打折促銷前要先算這幾個數字
      </h1>

      <p className="mt-5 text-lg leading-8 text-stone-700">
        餐飲店做折扣活動時，最容易只看營業額和銷量有沒有增加，
        卻忽略打折後每一份商品的毛利會被壓縮。活動看起來人很多、訂單變多，
        但如果折扣太深或成本沒算清楚，最後可能只是賣得更忙，卻沒有多賺。
      </p>

      <div className="mt-8 rounded-2xl bg-orange-50 p-5">
        <p className="font-bold text-orange-900">快速結論</p>
        <p className="mt-3 leading-7 text-orange-950">
          折扣活動不能只看折扣後賣出多少份，而是要比較「原本每日毛利」和「活動後每日毛利」。
          例如商品原價 100 元、成本 40 元，原本每份毛利是 60 元；活動價 80 元後，
          每份毛利變成 40 元。如果原本每天賣 50 份，活動後至少要賣到 75 份，
          每日毛利才會打平。
        </p>
      </div>

      <div className="mt-10 space-y-10 leading-8 text-stone-700">
        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            一、打折活動不是賣更多就一定賺更多
          </h2>

          <p className="mt-4">
            很多店家做活動時會想：「只要打折後多賣一點，應該就划算。」
            但這個想法不一定正確。因為打折會直接壓縮每一份商品的毛利，
            如果銷量增加的幅度不夠，就算營業額變高，毛利也可能下降。
          </p>

          <p className="mt-4">
            所以折扣活動至少要先算三件事：
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>原本每份商品毛利是多少。</li>
            <li>活動價後每份商品毛利剩多少。</li>
            <li>活動後要多賣幾份，才能補回折扣損失。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            二、範例：原價 100 元，活動價 80 元，成本 40 元
          </h2>

          <p className="mt-4">
            假設你有一個餐點，原本售價 100 元，活動期間改成 80 元，
            單品成本是 40 元。原本每天大約賣 50 份，活動後預估每天賣 80 份。
          </p>

          <div className="mt-4 overflow-hidden rounded-2xl border border-stone-200">
            <table className="w-full border-collapse bg-white text-left text-sm">
              <tbody>
                <tr className="border-b border-stone-200">
                  <th className="w-1/2 bg-stone-100 px-4 py-3 font-bold">
                    商品原價
                  </th>
                  <td className="px-4 py-3">100 元</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <th className="bg-stone-100 px-4 py-3 font-bold">
                    活動售價
                  </th>
                  <td className="px-4 py-3">80 元</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <th className="bg-stone-100 px-4 py-3 font-bold">
                    單品成本
                  </th>
                  <td className="px-4 py-3">40 元</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <th className="bg-stone-100 px-4 py-3 font-bold">
                    原本每日銷量
                  </th>
                  <td className="px-4 py-3">50 份</td>
                </tr>
                <tr>
                  <th className="bg-stone-100 px-4 py-3 font-bold">
                    活動後預估每日銷量
                  </th>
                  <td className="px-4 py-3">80 份</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            三、先算原本每份毛利和活動每份毛利
          </h2>

          <div className="mt-4 rounded-2xl bg-stone-100 p-5">
            <p className="font-bold text-stone-900">
              原本每份毛利 = 商品原價 − 單品成本
            </p>
            <p className="mt-3">
              100 元 − 40 元 = 60 元
            </p>

            <p className="mt-5 font-bold text-stone-900">
              活動每份毛利 = 活動售價 − 單品成本
            </p>
            <p className="mt-3">
              80 元 − 40 元 = 40 元
            </p>
          </div>

          <p className="mt-4">
            這代表打折後，每賣一份商品，毛利從 60 元變成 40 元，
            每份少賺 20 元。活動是否划算，就要看銷量增加能不能補回這個差距。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            四、原本每日毛利和活動每日毛利怎麼算？
          </h2>

          <div className="mt-4 rounded-2xl bg-stone-100 p-5">
            <p className="font-bold text-stone-900">
              原本每日毛利 = 原本每份毛利 × 原本每日銷量
            </p>
            <p className="mt-3">
              60 元 × 50 份 = 3,000 元
            </p>

            <p className="mt-5 font-bold text-stone-900">
              活動每日毛利 = 活動每份毛利 × 活動後預估每日銷量
            </p>
            <p className="mt-3">
              40 元 × 80 份 = 3,200 元
            </p>
          </div>

          <div className="mt-4 rounded-2xl bg-orange-50 p-5">
            <p className="font-bold text-orange-900">
              這個範例中，活動後每日毛利從 3,000 元變成 3,200 元，每天多 200 元毛利。
            </p>
          </div>

          <p className="mt-4">
            但這個結果成立的前提是活動後真的能從每天 50 份增加到 80 份。
            如果實際只增加到 60 份，每日毛利就是 40 元 × 60 份 = 2,400 元，反而比原本少。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            五、打折後要賣幾份才打平？
          </h2>

          <p className="mt-4">
            打折活動最重要的問題之一是：活動後要賣幾份，才能跟原本每日毛利一樣？
          </p>

          <div className="mt-4 rounded-2xl bg-stone-100 p-5">
            <p className="font-bold text-stone-900">
              打平所需銷量 = 原本每日毛利 ÷ 活動每份毛利
            </p>
            <p className="mt-3">
              3,000 元 ÷ 40 元 = 75 份
            </p>
          </div>

          <p className="mt-4">
            也就是說，原本每天賣 50 份，打折後至少要賣到 75 份，
            才能讓每日毛利打平。如果活動後賣不到 75 份，這個折扣活動就可能不划算。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            六、什麼情況下折扣活動容易虧？
          </h2>

          <p className="mt-4">
            折扣活動不一定不能做，但下面幾種情況要特別小心：
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>折扣太深，導致活動每份毛利大幅下降。</li>
            <li>預估銷量太樂觀，實際銷量沒有增加到打平所需數字。</li>
            <li>商品成本沒有算完整，例如忽略包材、耗損或平台抽成。</li>
            <li>活動造成尖峰出餐壓力，增加人力或降低服務品質。</li>
            <li>客人只在打折時購買，活動結束後沒有回購。</li>
          </ul>

          <p className="mt-4">
            一個好的折扣活動，不應該只是讓客人覺得便宜，而是要能帶來足夠的新客、回購或總毛利增加。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            七、折扣幅度要怎麼抓比較安全？
          </h2>

          <p className="mt-4">
            折扣幅度不要只靠感覺設定。你可以先用成本和毛利反推，
            看活動價是否還有合理毛利，再估算需要增加多少銷量才打平。
          </p>

          <p className="mt-4">
            如果商品原本毛利率就不高，折扣幅度要更保守。
            如果商品毛利率高、製作簡單、出餐壓力小，而且能明顯帶動其他品項，
            才比較適合做較明顯的折扣。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            八、用折扣活動損益計算器快速試算
          </h2>

          <p className="mt-4">
            你可以使用本站的折扣活動損益計算器，輸入商品原價、活動售價、
            單品成本、原本每日銷量與活動後預估每日銷量，快速比較原本每日毛利和活動後每日毛利。
          </p>

          <div className="mt-6">
            <TrackedLink
              href="/tools/discount-profit-calculator"
              eventName="click_article_cta"
              eventParams={{
                article_slug: "discount-promotion-profit",
                destination: "/tools/discount-profit-calculator",
                tool_id: "discount_profit",
              }}
              className="inline-flex rounded-full bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
            >
              用折扣活動損益計算器算打折會不會虧
            </TrackedLink>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            九、常見問題
          </h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">
                Q1：折扣活動一定會降低毛利嗎？
              </h3>
              <p className="mt-2">
                單份商品毛利通常會降低，但如果銷量增加幅度足夠，
                每日總毛利仍可能增加。重點是要比較活動前後的總毛利，而不是只看營業額。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">
                Q2：折扣活動打平銷量怎麼算？
              </h3>
              <p className="mt-2">
                可以用原本每日毛利除以活動每份毛利。算出來的數字就是活動後至少要賣出的份數，
                才能讓每日毛利跟原本一樣。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">
                Q3：什麼商品比較適合拿來打折？
              </h3>
              <p className="mt-2">
                通常比較適合選擇毛利率較高、製作流程穩定、出餐壓力小、
                且能帶動其他品項一起購買的商品。低毛利商品不適合做太深的折扣。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">
                Q4：折扣活動和滿額加購哪個比較好？
              </h3>
              <p className="mt-2">
                不一定。折扣活動比較直覺，容易吸引客人注意；滿額加購比較適合提高客單價。
                店家可以依照商品毛利、客單價和活動目標選擇適合的方式。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-100 p-5">
          <h2 className="text-2xl font-bold text-stone-900">
            本文重點整理
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>折扣活動要比較活動前後的每日總毛利，不是只看營業額。</li>
            <li>原本每份毛利 = 商品原價 − 單品成本。</li>
            <li>活動每份毛利 = 活動售價 − 單品成本。</li>
            <li>打平所需銷量 = 原本每日毛利 ÷ 活動每份毛利。</li>
            <li>若活動後銷量沒有增加到打平數字，折扣活動可能不划算。</li>
          </ul>
        </section>

        <p className="text-sm leading-6 text-stone-500">
          提醒：本文與本站工具僅供一般試算參考，不構成會計、稅務、法律或財務建議。
          實際經營結果仍需依照你的商品成本、店面條件、人力配置、活動曝光與現場執行狀況判斷。
        </p>
      </div>
    </div>
  </article>
</main>
  );
}

export const discountPromotionProfitPost: BlogPost = {
    slug: "discount-promotion-profit",
    title: "折扣活動怎麼算才不會虧？餐飲店打折促銷前要先算這幾個數字",
    description:
      "用餐飲店常見折扣活動為例，說明商品原價、活動售價、單品成本、原本銷量與活動後銷量如何影響每日毛利，幫助店家判斷打折促銷是否划算。",
    keywords: [
      "折扣活動損益計算",
      "折扣活動計算器",
      "折扣活動",
      "打折促銷",
      "餐飲促銷",
      "餐飲毛利",
      "活動毛利",
      "打折會不會虧",
      "小吃店促銷",
      "飲料店促銷",
    ],
    category: "餐飲促銷活動",
    date: "2026 年 7 月 1 日",
    openGraphTitle: "折扣活動怎麼算才不會虧？餐飲店打折促銷前要先算這幾個數字",
    openGraphDescription:
      "用簡單範例比較原本每日毛利和活動後每日毛利，快速判斷打折活動是否划算。",
    relatedPostSlugs: [
      "restaurant-promotion-checklist",
      "restaurant-promotion-cost",
      "add-on-vs-discount-promotion",
    ],
    Content: DiscountPromotionProfitContent,
  };
