import TrackedLink from "@/components/tracked-link";
import type { BlogPost } from "@/lib/post-types";

function RestaurantPromotionCostContent() {
  return (
<main className="bg-stone-50 text-stone-900">
  <article className="mx-auto max-w-4xl px-6 py-12">
    <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
      <p className="text-sm font-semibold text-orange-700">
        餐飲促銷活動
      </p>

      <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight">
        餐飲店活動成本怎麼抓？折扣、加購、贈品活動試算方式
      </h1>

      <p className="mt-5 text-lg leading-8 text-stone-700">
        餐飲店做活動前，最常見的錯誤是只想活動名稱，沒有先算活動成本。
        無論是打折、滿額加購、送小菜、第二杯優惠或平台活動，
        都會改變單筆訂單毛利。活動做得好可以提高客單價，做錯則可能只是讓店家更忙。
      </p>

      <div className="mt-8 rounded-2xl bg-orange-50 p-5">
        <p className="font-bold text-orange-900">快速結論</p>
        <p className="mt-3 leading-7 text-orange-950">
          活動成本要分成三類：直接折扣成本、贈品或加購商品成本、額外人力與包材成本。
          活動前至少要比較「原本每日毛利」和「活動後每日毛利」，
          並估算需要增加多少訂單或客單價，活動才算划算。
        </p>
      </div>

      <div className="mt-10 space-y-10 leading-8 text-stone-700">
        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            一、活動成本不只是折扣金額
          </h2>

          <p className="mt-4">
            很多店家會把活動成本理解成「折多少錢」。但實際上，活動成本可能包含商品成本、
            包材成本、平台補貼、廣告費、額外備料、人力壓力和出餐速度下降。
            如果只看折扣金額，就會低估活動真正影響。
          </p>

          <p className="mt-4">
            活動成本抓得越清楚，就越能判斷活動到底是在幫你賺錢、清庫存、拉新客，還是只是製造忙碌感。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            二、三種常見活動成本
          </h2>

          <div className="mt-4 overflow-hidden rounded-2xl border border-stone-200">
            <table className="w-full border-collapse bg-white text-left text-sm">
              <thead className="bg-stone-100">
                <tr>
                  <th className="px-4 py-3 font-bold">活動類型</th>
                  <th className="px-4 py-3 font-bold">主要成本</th>
                  <th className="px-4 py-3 font-bold">試算重點</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3">折扣活動</td>
                  <td className="px-4 py-3">折扣金額</td>
                  <td className="px-4 py-3">銷量要增加多少才打平</td>
                </tr>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3">滿額加購</td>
                  <td className="px-4 py-3">加購商品成本</td>
                  <td className="px-4 py-3">加購率與加購毛利</td>
                </tr>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3">贈品活動</td>
                  <td className="px-4 py-3">贈品成本、包材、人力</td>
                  <td className="px-4 py-3">是否帶來足夠新訂單或回購</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            三、折扣活動成本怎麼算？
          </h2>

          <p className="mt-4">
            折扣活動最直接。例如商品原價 100 元、成本 40 元，原本每份毛利是 60 元。
            如果活動價變成 85 元，每份毛利剩 45 元，每賣一份就比原本少 15 元毛利。
          </p>

          <div className="mt-4 rounded-2xl bg-stone-100 p-5">
            <p className="font-bold text-stone-900">
              折扣損失 = 原本每份毛利 − 活動每份毛利
            </p>
            <p className="mt-3 font-bold text-stone-900">
              60 − 45 = 15 元
            </p>
          </div>

          <p className="mt-4">
            如果原本每天賣 50 份，每日毛利是 3,000 元。活動後每份毛利 45 元，
            就要賣到 67 份左右，才能接近原本每日毛利。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            四、滿額加購成本怎麼算？
          </h2>

          <p className="mt-4">
            滿額加購不是直接折價，而是用較低價格讓客人多買一個商品。
            試算重點是加購商品本身有沒有毛利，以及有多少比例的客人會加購。
          </p>

          <p className="mt-4">
            例如加購價 40 元、商品成本 18 元，每份加購毛利 22 元。
            如果每天 80 筆訂單，30% 客人加購，每天約 24 份加購，
            新增毛利就是 24 × 22 = 528 元。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            五、贈品活動成本怎麼抓？
          </h2>

          <p className="mt-4">
            贈品活動容易被低估，因為客人沒有付加購價，店家要自行承擔贈品成本。
            如果贈品成本 12 元，活動送出 100 份，直接成本就是 1,200 元。
            還要考慮備料、包材、製作時間和是否影響正常出餐。
          </p>

          <p className="mt-4">
            贈品活動比較適合用在新品試吃、會員回購、清庫存或提高品牌記憶點。
            如果只是為了衝訂單，最好先估算贈品成本能不能被新增毛利補回。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            六、活動前的簡易檢查表
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>這次活動目標是拉新客、提高客單價、清庫存，還是提高回購？</li>
            <li>活動商品原本毛利是多少？活動後毛利剩多少？</li>
            <li>需要增加多少訂單或客單價才打平？</li>
            <li>現場人力和出餐速度能不能承受？</li>
            <li>活動結束後，要用什麼數字判斷成功或失敗？</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            七、用兩個工具快速試算活動成本
          </h2>

          <p className="mt-4">
            如果是折扣活動，可以先用折扣活動損益計算器比較活動前後毛利。
            如果是滿額加購，可以用滿額加購活動計算器估算加購率、加購毛利和每日新增毛利。
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href="/tools/discount-profit-calculator"
              eventName="click_article_cta"
              eventParams={{
                article_slug: "restaurant-promotion-cost",
                destination: "/tools/discount-profit-calculator",
                tool_id: "discount_profit",
              }}
              className="inline-flex rounded-full bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
            >
              使用折扣活動損益計算器
            </TrackedLink>

            <TrackedLink
              href="/tools/add-on-promotion-calculator"
              eventName="click_article_cta"
              eventParams={{
                article_slug: "restaurant-promotion-cost",
                destination: "/tools/add-on-promotion-calculator",
                tool_id: "add_on_promotion",
              }}
              className="inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
            >
              使用滿額加購活動計算器
            </TrackedLink>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            八、常見問題
          </h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">Q1：活動成本要算人力嗎？</h3>
              <p className="mt-2">
                如果活動會明顯增加備料、出餐、包裝或客服時間，就應該把人力壓力納入判斷。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">Q2：活動一定要賺錢才值得做嗎？</h3>
              <p className="mt-2">
                不一定。有些活動目標是新品曝光或拉新客，但即使如此，也要知道自己付出了多少成本。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">Q3：活動後要看哪些數字？</h3>
              <p className="mt-2">
                至少看訂單數、客單價、活動品項銷量、活動後每日毛利、加購率和是否影響出餐效率。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-100 p-5">
          <h2 className="text-2xl font-bold text-stone-900">本文重點整理</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>活動成本不只是折扣金額，也包含商品成本、包材、人力和平台費用。</li>
            <li>折扣活動要比較活動前後每日毛利。</li>
            <li>滿額加購要看加購商品毛利和加購率。</li>
            <li>贈品活動要估算贈品成本和是否帶來足夠新增毛利。</li>
            <li>活動前要先定義目標，活動後用數字檢查結果。</li>
          </ul>
        </section>

        <p className="text-sm leading-6 text-stone-500">
          提醒：本文與本站工具僅供一般試算參考，不構成會計、稅務、法律或財務建議。
          實際經營結果仍需依照你的商品成本、活動條件、人力配置與現場執行狀況判斷。
        </p>
      </div>
    </div>
  </article>
</main>
  );
}

export const restaurantPromotionCostPost: BlogPost = {
  slug: "restaurant-promotion-cost",
  title: "餐飲店活動成本怎麼抓？折扣、加購、贈品活動試算方式",
  description:
    "整理餐飲店做折扣、滿額加購與贈品活動前應該試算的成本項目，幫助店家比較活動前後毛利是否划算。",
  keywords: [
    "滿額加購活動計算",
    "折扣活動損益計算",
    "餐飲活動成本",
    "促銷活動成本",
    "餐飲折扣活動",
    "滿額加購成本",
    "贈品活動",
    "活動毛利",
    "餐飲促銷試算",
  ],
  category: "餐飲促銷活動",
  date: "2026 年 7 月 2 日",
  openGraphTitle: "餐飲店活動成本怎麼抓？折扣、加購、贈品活動試算方式",
  openGraphDescription:
    "用折扣、滿額加購和贈品活動範例，說明餐飲店活動成本與活動前後毛利怎麼試算。",
  relatedPostSlugs: [
    "discount-promotion-profit",
    "restaurant-promotion-checklist",
    "add-on-promotion-example",
  ],
  Content: RestaurantPromotionCostContent,
};
