import TrackedLink from "@/components/tracked-link";
import type { BlogPost } from "@/lib/post-types";

function AddOnVsDiscountPromotionContent() {
  return (
<main className="bg-[#fffaf3] text-stone-950">
  <article className="mx-auto max-w-4xl px-6 py-12">
    <div className="rounded-3xl border border-orange-100/80 bg-white/95 p-6 shadow-sm shadow-orange-950/5 sm:p-10">
      <p className="text-sm font-semibold text-orange-700">
        餐飲促銷活動
      </p>

      <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight">
        滿額折扣和滿額加購哪個比較划算？餐飲促銷活動比較
      </h1>

      <p className="mt-5 text-lg leading-8 text-stone-700">
        餐飲店做活動時，常見選擇有滿額折扣、滿額加購、第二件優惠和套餐升級。
        其中「滿額折扣」最直覺，客人容易理解；「滿額加購」則常用來提高客單價。
        兩種活動沒有絕對好壞，重點是要看毛利、客單價、加購率和現場執行壓力。
      </p>

      <div className="mt-8 rounded-2xl border border-orange-100 bg-orange-50/80 p-5">
        <p className="font-bold text-orange-900">快速結論</p>
        <p className="mt-3 leading-7 text-orange-950">
          如果你的目標是快速吸引新客，滿額折扣比較容易被理解；
          如果你的目標是提高客單價，而且有一個毛利穩定、製作簡單的商品，滿額加購通常更適合。
          活動前應該分別試算「折扣損失」和「加購新增毛利」。
        </p>
      </div>

      <div className="mt-10 space-y-10 leading-8 text-stone-700">
        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            一、滿額折扣的優點與風險
          </h2>

          <p className="mt-4">
            滿額折扣例如「滿 200 折 20」、「滿 300 折 50」。
            優點是客人一看就懂，也容易刺激客人把消費金額湊到門檻。
            但風險是折扣會直接減少毛利，如果客人原本就會消費到門檻，
            店家可能只是把原本能賺的毛利讓出去。
          </p>

          <p className="mt-4">
            所以滿額折扣要注意兩件事：門檻是否高於平均客單價，以及折扣金額是否會吃掉太多毛利。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            二、滿額加購的優點與風險
          </h2>

          <p className="mt-4">
            滿額加購例如「滿 150 元，加 40 元多一瓶飲品」。
            這類活動不是直接把錢折掉，而是讓客人多買一個商品。
            如果加購商品本身有毛利，就可能同時提高客單價和總毛利。
          </p>

          <p className="mt-4">
            但滿額加購也有風險。如果加購商品製作麻煩、庫存不穩、成本太高或現場不好推，
            實際加購率可能很低。加購率太低時，活動看起來漂亮，實際貢獻卻有限。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            三、範例比較：滿 200 折 20 vs 滿 200 加購 40
          </h2>

          <div className="mt-4 overflow-hidden rounded-2xl border border-orange-100/80">
            <table className="w-full border-collapse bg-white text-left text-sm">
              <thead className="bg-orange-50/50">
                <tr>
                  <th className="px-4 py-3 font-bold">活動類型</th>
                  <th className="px-4 py-3 font-bold">對毛利的影響</th>
                  <th className="px-4 py-3 font-bold">適合目標</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-orange-100/80">
                  <td className="px-4 py-3">滿 200 折 20</td>
                  <td className="px-4 py-3">每筆達標訂單少 20 元毛利</td>
                  <td className="px-4 py-3">吸引注意、提高轉換</td>
                </tr>
                <tr className="border-t border-orange-100/80">
                  <td className="px-4 py-3">滿 200 加購 40</td>
                  <td className="px-4 py-3">看加購商品成本與加購率</td>
                  <td className="px-4 py-3">提高客單價、增加品項曝光</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">
            假設加購商品成本 18 元，加購價 40 元，每份加購毛利是 22 元。
            如果 100 筆達標訂單中有 30 筆加購，新增毛利是 660 元。
            但如果是滿額折扣，100 筆達標訂單每筆折 20 元，毛利會少 2,000 元。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            四、什麼情況適合滿額折扣？
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>你想快速降低新客第一次下單門檻。</li>
            <li>你有足夠毛利可以承受折扣。</li>
            <li>活動期間想提高訂單量或平台曝光。</li>
            <li>折扣門檻明顯高於平均客單價，可以刺激加點。</li>
          </ul>

          <p className="mt-4">
            滿額折扣適合做短期活動，不建議長期依賴。長期折扣會讓客人習慣等優惠，
            也可能讓原本的菜單價格失去參考感。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            五、什麼情況適合滿額加購？
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>你有毛利穩定、製作簡單的加購商品。</li>
            <li>你想提高客單價，而不是單純降價。</li>
            <li>加購商品可以帶動回購，例如飲品、小菜、甜點。</li>
            <li>現場人員容易介紹，客人也容易理解。</li>
          </ul>

          <p className="mt-4">
            滿額加購更像是「順手多買」的設計。只要商品選得好，
            它不一定會犧牲毛利，反而可以成為提升客單價的工具。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            六、用兩個計算器交叉試算
          </h2>

          <p className="mt-4">
            如果你正在比較折扣和加購，可以先用折扣活動損益計算器看折扣是否會壓縮毛利，
            再用滿額加購活動計算器估算加購商品帶來的新增毛利。
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href="/tools/discount-profit-calculator"
              eventName="click_article_cta"
              eventParams={{
                article_slug: "add-on-vs-discount-promotion",
                destination: "/tools/discount-profit-calculator",
                tool_id: "discount_profit",
              }}
              className="inline-flex rounded-full bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
            >
              用折扣活動損益計算器算打折會不會虧
            </TrackedLink>

            <TrackedLink
              href="/tools/add-on-promotion-calculator"
              eventName="click_article_cta"
              eventParams={{
                article_slug: "add-on-vs-discount-promotion",
                destination: "/tools/add-on-promotion-calculator",
                tool_id: "add_on_promotion",
              }}
              className="inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
            >
              用滿額加購活動計算器算加購毛利
            </TrackedLink>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            七、常見問題
          </h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl border border-orange-100/80 bg-white/60 p-5">
              <h3 className="font-bold text-stone-900">Q1：滿額折扣一定比較傷毛利嗎？</h3>
              <p className="mt-2">
                不一定，但折扣會直接減少每筆訂單毛利。如果折扣能帶來足夠新增訂單或提高客單價，仍可能划算。
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100/80 bg-white/60 p-5">
              <h3 className="font-bold text-stone-900">Q2：滿額加購商品要選什麼？</h3>
              <p className="mt-2">
                建議選毛利穩定、製作簡單、庫存好控管、客人容易理解的商品，例如飲品、小菜、甜點或加料。
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100/80 bg-white/60 p-5">
              <h3 className="font-bold text-stone-900">Q3：可以同時做折扣和加購嗎？</h3>
              <p className="mt-2">
                可以，但要更小心試算。折扣會壓低毛利，加購會增加作業量，兩者同時做時要確認總毛利仍然合理。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-orange-100/80 bg-orange-50/50 p-5">
          <h2 className="text-2xl font-bold text-stone-900">本文重點整理</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>滿額折扣容易理解，但會直接減少毛利。</li>
            <li>滿額加購適合提高客單價，但要看商品毛利和加購率。</li>
            <li>折扣活動要看折扣後銷量是否能補回毛利損失。</li>
            <li>加購活動要看加購商品成本、加購價和現場推廣能力。</li>
            <li>活動前最好分別試算，不要只憑直覺選活動。</li>
          </ul>
        </section>

        <p className="text-sm leading-6 text-stone-500">
          提醒：本文與本站工具僅供一般試算參考，不構成會計、稅務、法律或財務建議。
          實際經營結果仍需依照你的商品毛利、客單價、活動曝光與現場執行狀況判斷。
        </p>
      </div>
    </div>
  </article>
</main>
  );
}

export const addOnVsDiscountPromotionPost: BlogPost = {
  slug: "add-on-vs-discount-promotion",
  title: "滿額折扣和滿額加購哪個比較划算？餐飲促銷活動比較",
  description:
    "比較餐飲店滿額折扣與滿額加購的差異，說明兩種促銷活動如何影響毛利、客單價、加購率與現場執行。",
  keywords: [
    "滿額折扣",
    "滿額加購活動計算",
    "滿額加購",
    "餐飲促銷活動",
    "促銷活動比較",
    "餐飲活動設計",
    "加購活動",
    "折扣活動",
    "提高客單價",
  ],
  category: "餐飲促銷活動",
  date: "2026 年 7 月 2 日",
  openGraphTitle: "滿額折扣和滿額加購哪個比較划算？餐飲促銷活動比較",
  openGraphDescription:
    "用餐飲店常見活動比較滿額折扣和滿額加購，幫助店家用毛利和客單價判斷活動是否划算。",
  relatedPostSlugs: [
    "add-on-promotion-example",
    "discount-promotion-profit",
    "restaurant-promotion-cost",
  ],
  Content: AddOnVsDiscountPromotionContent,
};
