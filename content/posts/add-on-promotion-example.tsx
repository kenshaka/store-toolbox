import TrackedLink from "@/components/tracked-link";
import type { BlogPost } from "@/lib/post-types";

function AddOnPromotionExampleContent() {
  return (
<main className="bg-stone-50 text-stone-900">
  <article className="mx-auto max-w-4xl px-6 py-12">
    <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
      <p className="text-sm font-semibold text-orange-700">
        餐飲促銷活動
      </p>

      <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight">
        滿 150 元加購 40 元划算嗎？餐飲店滿額加購活動怎麼算
      </h1>

      <p className="mt-5 text-lg leading-8 text-stone-700">
        滿額加購是餐飲店、小吃店、飲料店很常見的促銷方式。例如「單筆消費滿
        150 元，可以用 40 元加購一瓶飲品」。這種活動看起來可以提高客單價，
        但真正重要的是：加購商品本身有沒有毛利？加購率夠不夠？活動做完到底是多賺，還是只是更忙？
      </p>

      <div className="mt-8 rounded-2xl bg-orange-50 p-5">
        <p className="font-bold text-orange-900">快速結論</p>
        <p className="mt-3 leading-7 text-orange-950">
          如果加購價 40 元、商品成本 18 元，單份加購毛利就是 22 元，
          毛利率為 55%。若每天 80 筆訂單，其中 30% 的客人會加購，
          每天大約可以增加 528 元毛利，每月約增加 15,840 元毛利。
        </p>
      </div>

      <div className="mt-10 space-y-10 leading-8 text-stone-700">
        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            一、先確認滿額加購不是只看「賣得出去」
          </h2>

          <p className="mt-4">
            很多店家在設計活動時，會先想客人會不會覺得便宜、會不會願意多買。
            這當然重要，但如果加購商品成本太高，活動價又壓得太低，
            就可能變成「客人覺得划算，但店家沒有多賺多少」。
          </p>

          <p className="mt-4">
            所以滿額加購至少要先算三件事：
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>每份加購商品可以賺多少毛利。</li>
            <li>加購商品毛利率是否合理。</li>
            <li>預估每天有多少訂單會真的加購。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            二、範例：滿 150 元，加 40 元加購一瓶飲品
          </h2>

          <p className="mt-4">
            假設你設計一個活動：
          </p>

          <div className="mt-4 overflow-hidden rounded-2xl border border-stone-200">
            <table className="w-full border-collapse bg-white text-left text-sm">
              <tbody>
                <tr className="border-b border-stone-200">
                  <th className="w-1/2 bg-stone-100 px-4 py-3 font-bold">
                    滿額門檻
                  </th>
                  <td className="px-4 py-3">單筆消費滿 150 元</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <th className="bg-stone-100 px-4 py-3 font-bold">
                    加購商品
                  </th>
                  <td className="px-4 py-3">飲品一瓶</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <th className="bg-stone-100 px-4 py-3 font-bold">
                    加購價
                  </th>
                  <td className="px-4 py-3">40 元</td>
                </tr>
                <tr>
                  <th className="bg-stone-100 px-4 py-3 font-bold">
                    商品成本
                  </th>
                  <td className="px-4 py-3">18 元</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">
            這時候不要只看「40 元看起來很好賣」，而是要先算每瓶實際毛利。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            三、每份加購毛利怎麼算？
          </h2>

          <div className="mt-4 rounded-2xl bg-stone-100 p-5">
            <p className="font-bold text-stone-900">
              每份加購毛利 = 加購價 − 商品成本
            </p>
            <p className="mt-3">
              40 元 − 18 元 = 22 元
            </p>
          </div>

          <p className="mt-4">
            也就是說，每賣出一瓶加購飲品，可以多出 22 元毛利。
            這裡的成本建議至少包含食材、瓶子、杯子、封膜、袋子等直接成本。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            四、加購商品毛利率怎麼算？
          </h2>

          <div className="mt-4 rounded-2xl bg-stone-100 p-5">
            <p className="font-bold text-stone-900">
              加購商品毛利率 = 每份加購毛利 ÷ 加購價 × 100%
            </p>
            <p className="mt-3">
              22 元 ÷ 40 元 × 100% = 55%
            </p>
          </div>

          <p className="mt-4">
            以餐飲活動來說，55% 的加購毛利率算是有基本空間。
            但這不代表活動一定成功，因為還要看加購率、備料、人力與是否會影響出餐速度。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            五、每天可以增加多少毛利？
          </h2>

          <p className="mt-4">
            假設你的店每天有 80 筆訂單，預估有 30% 的客人會加購。
          </p>

          <div className="mt-4 rounded-2xl bg-stone-100 p-5">
            <p className="font-bold text-stone-900">
              預估每日加購單數 = 每日訂單數 × 加購率
            </p>
            <p className="mt-3">
              80 筆 × 30% = 24 筆
            </p>

            <p className="mt-5 font-bold text-stone-900">
              預估每日增加毛利 = 每日加購單數 × 每份加購毛利
            </p>
            <p className="mt-3">
              24 筆 × 22 元 = 528 元
            </p>
          </div>

          <p className="mt-4">
            如果用 30 天粗估，這個活動每月可能增加：
          </p>

          <div className="mt-4 rounded-2xl bg-orange-50 p-5">
            <p className="text-2xl font-black text-orange-900">
              528 元 × 30 天 = 15,840 元
            </p>
          </div>

          <p className="mt-4">
            這個數字是毛利增加，不是淨利增加。實際還要扣除人事、租金、水電、
            損耗與活動宣傳成本。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            六、什麼情況下滿額加購不划算？
          </h2>

          <p className="mt-4">
            滿額加購不一定都適合做。下面幾種情況要特別小心：
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>加購價太低，導致每份毛利很少。</li>
            <li>商品成本沒有算完整，例如忽略包材、損耗、平台抽成。</li>
            <li>加購商品製作太花時間，造成尖峰出餐速度變慢。</li>
            <li>客人只是改買加購商品，沒有真的提高整體消費。</li>
            <li>活動門檻設太高，大部分客人根本達不到。</li>
          </ul>

          <p className="mt-4">
            一個好的滿額加購活動，應該同時做到三件事：客人覺得划算、
            店家有合理毛利、現場執行不會太麻煩。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            七、滿額門檻要怎麼設定？
          </h2>

          <p className="mt-4">
            滿額門檻不建議憑感覺設定。比較好的做法是看你的平均客單價。
            例如你的平均客單價是 120 元，那麼「滿 150 元加購」可能可以引導客人多點一樣小品項，
            或從單人餐升級成套餐。
          </p>

          <p className="mt-4">
            但如果你的平均客單價只有 80 元，直接設定滿 150 元，門檻可能太高，
            客人會覺得很難達到。這時候可以考慮滿 99 元、滿 120 元，或設計雙人組合活動。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            八、用計算器快速試算
          </h2>

          <p className="mt-4">
            你可以使用本站的滿額加購活動計算器，直接輸入滿額門檻、加購價、
            商品成本、平均客單價、加購率與每日訂單數，快速估算活動是否值得做。
          </p>

          <div className="mt-6">
            <TrackedLink
              href="/tools/add-on-promotion-calculator"
              eventName="click_article_cta"
              eventParams={{
                article_slug: "add-on-promotion-example",
                destination: "/tools/add-on-promotion-calculator",
                tool_id: "add_on_promotion",
              }}
              className="inline-flex rounded-full bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
            >
              使用滿額加購活動計算器
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
                Q1：滿額加購商品毛利率多少才合理？
              </h3>
              <p className="mt-2">
                沒有固定答案，但如果只是促銷活動，至少要確保加購商品有正毛利。
                若毛利率太低，活動可能只能帶來營業額，卻沒有帶來足夠利潤。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">
                Q2：滿額門檻應該設在多少？
              </h3>
              <p className="mt-2">
                可以從平均客單價往上加一點點。例如平均客單價 120 元，
                可測試滿 150 元；平均客單價 90 元，可能先測試滿 120 元比較合理。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">
                Q3：加購率要怎麼估？
              </h3>
              <p className="mt-2">
                剛開始可以用 10%、20%、30% 做三種情境試算。
                實際活動上線後，再用收銀紀錄或人工統計修正加購率。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">
                Q4：滿額加購適合所有餐飲店嗎？
              </h3>
              <p className="mt-2">
                不一定。如果店內出餐已經很緊、加購商品製作流程複雜，
                或加購商品毛利太低，就不一定適合。最好先小規模測試。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-100 p-5">
          <h2 className="text-2xl font-bold text-stone-900">
            本文重點整理
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>滿額加購不能只看客人會不會買，也要看店家毛利。</li>
            <li>加購價 40 元、成本 18 元時，每份毛利是 22 元。</li>
            <li>每日 80 筆訂單、30% 加購率時，每日約增加 528 元毛利。</li>
            <li>活動門檻要參考平均客單價，不能設得太高。</li>
            <li>正式推出前，建議先小規模測試加購率與現場執行壓力。</li>
          </ul>
        </section>

        <p className="text-sm leading-6 text-stone-500">
          提醒：本文與本站工具僅供一般試算參考，不構成會計、稅務、法律或財務建議。
          實際經營結果仍需依照你的商品成本、店面條件、人力配置與活動執行狀況判斷。
        </p>
      </div>
    </div>
  </article>
</main>
  );
}

export const addOnPromotionExamplePost: BlogPost = {
    slug: "add-on-promotion-example",
    title: "滿 150 元加購 40 元划算嗎？餐飲店滿額加購活動怎麼算",
    description:
      "用餐飲店常見的滿 150 元加購 40 元活動為例，教你試算加購商品毛利、加購率、每日增加毛利與活動是否值得做。",
    keywords: [
      "滿150加購40",
      "滿額加購",
      "滿額加購活動計算",
      "滿額加購計算",
      "餐飲促銷活動",
      "餐飲毛利",
      "加購活動",
      "小吃店活動",
      "飲料店活動",
    ],
    category: "餐飲促銷活動",
    date: "2026 年 7 月 1 日",
    openGraphTitle: "滿 150 元加購 40 元划算嗎？餐飲店滿額加購活動怎麼算",
    openGraphDescription:
      "用簡單範例試算滿額加購活動是否划算，包含加購毛利、毛利率、加購率與每日增加毛利。",
    relatedPostSlugs: [
      "add-on-vs-discount-promotion",
      "restaurant-promotion-cost",
      "increase-average-order-value",
    ],
    Content: AddOnPromotionExampleContent,
  };
