import TrackedLink from "@/components/tracked-link";
import type { BlogPost } from "@/lib/post-types";

function IncreaseAverageOrderValueContent() {
  return (
<main className="bg-stone-50 text-stone-900">
  <article className="mx-auto max-w-4xl px-6 py-12">
    <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
      <p className="text-sm font-semibold text-orange-700">
        客單價與加購策略
      </p>

      <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight">
        餐飲店客單價怎麼提高？加購、套餐、滿額活動比較
      </h1>

      <p className="mt-5 text-lg leading-8 text-stone-700">
        餐飲店想增加營收，不一定只能靠更多客人。有時候讓每筆訂單多加一杯飲料、一道小菜、
        一個升級套餐，就能讓客單價和毛利變得更健康。但提高客單價不能只靠推銷，
        要設計出顧客覺得順手、店家也有毛利的組合。
      </p>

      <div className="mt-8 rounded-2xl bg-orange-50 p-5">
        <p className="font-bold text-orange-900">快速結論</p>
        <p className="mt-3 leading-7 text-orange-950">
          提高客單價常見方法包含滿額加購、套餐組合、升級份量、第二件優惠和高毛利配品。
          重點不是讓客人硬買更多，而是讓加購商品有合理價格、明確情境和足夠毛利。
          活動前要先試算加購率、加購毛利和是否會影響出餐效率。
        </p>
      </div>

      <div className="mt-10 space-y-10 leading-8 text-stone-700">
        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            一、客單價提高不等於一定更賺
          </h2>

          <p className="mt-4">
            客單價是每筆訂單平均消費金額。客單價提高通常是好事，
            但如果提高客單價的方法是大幅折扣或送高成本贈品，毛利不一定會變好。
          </p>

          <p className="mt-4">
            所以提高客單價要同時看兩件事：每筆訂單金額有沒有提高，以及每筆訂單毛利有沒有提高。
            只看營業額，容易忽略成本。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            二、三種常見提高客單價方式
          </h2>

          <div className="mt-4 overflow-hidden rounded-2xl border border-stone-200">
            <table className="w-full border-collapse bg-white text-left text-sm">
              <thead className="bg-stone-100">
                <tr>
                  <th className="px-4 py-3 font-bold">方式</th>
                  <th className="px-4 py-3 font-bold">適合情境</th>
                  <th className="px-4 py-3 font-bold">試算重點</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3">滿額加購</td>
                  <td className="px-4 py-3">希望客人多買一項高毛利商品</td>
                  <td className="px-4 py-3">加購率與加購商品毛利</td>
                </tr>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3">套餐組合</td>
                  <td className="px-4 py-3">主餐搭配飲料、小菜或甜點</td>
                  <td className="px-4 py-3">套餐總毛利是否高於單點</td>
                </tr>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3">升級份量</td>
                  <td className="px-4 py-3">大杯、大份、加料、加麵</td>
                  <td className="px-4 py-3">升級價差是否高於額外成本</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            三、滿額加購：適合推高毛利配品
          </h2>

          <p className="mt-4">
            滿額加購的優點是讓客人覺得自己用優惠價格多買一樣東西，店家則有機會提高客單價。
            例如單筆滿 150 元，可以用 40 元加購一杯成本 18 元的飲料，每份加購毛利是 22 元。
          </p>

          <p className="mt-4">
            這類活動最適合放在飲料、小菜、甜點、加料等製作穩定、成本清楚、出餐快速的品項。
            如果加購商品本身成本高或出餐麻煩，就不一定划算。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            四、套餐組合：不要只把商品綁在一起
          </h2>

          <p className="mt-4">
            套餐不是把主餐和飲料放在一起就好。真正要看的是套餐總售價、總成本和總毛利。
            如果套餐折太多，可能讓原本會單點的顧客改買低毛利套餐，反而降低毛利。
          </p>

          <p className="mt-4">
            比較好的套餐設計，是用主餐搭配高毛利、出餐快、顧客接受度高的配品，
            讓顧客覺得方便，店家也能提高每筆訂單毛利。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            五、升級份量：看價差和額外成本
          </h2>

          <p className="mt-4">
            升級份量常見於飲料大杯、飯麵加量、加肉、加蛋、加料。
            這類設計通常很直覺，但要確認升級價差大於額外成本。
          </p>

          <p className="mt-4">
            例如加麵收 20 元，額外成本 6 元，毛利 14 元。只要出餐流程不會被拖慢，
            這類加購通常能穩定提高客單價。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            六、提高客單價前要先試算
          </h2>

          <p className="mt-4">
            設計活動時，可以先設定幾個假設：每天幾筆訂單、平均客單價、加購率、加購商品成本、加購價格。
            接著比較活動前後每日毛利，而不是只看營業額。
          </p>

          <div className="mt-4 rounded-2xl bg-stone-100 p-5">
            <p className="font-bold text-stone-900">
              新增每日毛利 = 每日訂單數 × 加購率 × 單份加購毛利
            </p>
          </div>

          <p className="mt-4">
            例如每天 100 筆訂單，加購率 25%，每份加購毛利 22 元，新增每日毛利就是 100 × 25% × 22 = 550 元。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            七、用滿額加購活動計算器試算
          </h2>

          <p className="mt-4">
            你可以用本站的滿額加購活動計算器，輸入滿額門檻、加購價、加購成本、平均客單價、加購率和每日訂單數，
            快速估算活動後可能增加多少客單價和毛利。
          </p>

          <div className="mt-6">
            <TrackedLink
              href="/tools/add-on-promotion-calculator"
              eventName="click_article_cta"
              eventParams={{
                article_slug: "increase-average-order-value",
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
            八、常見問題
          </h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">Q1：提高客單價一定要做滿額活動嗎？</h3>
              <p className="mt-2">
                不一定。套餐、加料、升級份量、會員加購都可以提高客單價，重點是毛利要健康。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">Q2：滿額門檻要怎麼抓？</h3>
              <p className="mt-2">
                可以先看目前平均客單價，門檻通常要略高於平均客單價，才有機會推動客人多買。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">Q3：加購商品要選便宜的嗎？</h3>
              <p className="mt-2">
                不一定要最便宜，而是要成本清楚、毛利穩定、出餐快速，且顧客覺得有吸引力。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-100 p-5">
          <h2 className="text-2xl font-bold text-stone-900">本文重點整理</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>提高客單價要同時看營業額和毛利。</li>
            <li>滿額加購適合推高毛利、出餐快的配品。</li>
            <li>套餐要看總毛利，不是只把商品綁在一起。</li>
            <li>升級份量要確認價差大於額外成本。</li>
            <li>活動前要試算加購率、加購毛利和每日新增毛利。</li>
          </ul>
        </section>

        <p className="text-sm leading-6 text-stone-500">
          提醒：本文與本站工具僅供一般試算參考，不構成會計、稅務、法律或財務建議。
          實際經營結果仍需依照你的商品成本、店面條件、人力配置與市場狀況判斷。
        </p>
      </div>
    </div>
  </article>
</main>
  );
}

export const increaseAverageOrderValuePost: BlogPost = {
  slug: "increase-average-order-value",
  title: "餐飲店客單價怎麼提高？加購、套餐、滿額活動比較",
  description:
    "比較餐飲店提高客單價的常見方法，包含滿額加購、套餐、升級份量與第二件優惠，並說明如何試算毛利。",
  keywords: [
    "餐飲客單價",
    "客單價怎麼提高",
    "滿額加購",
    "餐飲套餐",
    "餐飲加購",
    "提高客單價",
    "餐飲促銷",
  ],
  category: "客單價與加購策略",
  date: "2026 年 7 月 2 日",
  openGraphTitle: "餐飲店客單價怎麼提高？加購、套餐、滿額活動比較",
  openGraphDescription:
    "整理提高餐飲客單價的方法，從滿額加購、套餐到升級份量，教你同時看營業額和毛利。",
  relatedPostSlugs: [
    "add-on-promotion-example",
    "add-on-vs-discount-promotion",
    "menu-price-increase",
  ],
  Content: IncreaseAverageOrderValueContent,
};
