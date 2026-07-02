import TrackedLink from "@/components/tracked-link";
import type { BlogPost } from "@/lib/post-types";

function RestaurantMarginBenchmarkContent() {
  return (
<main className="bg-stone-50 text-stone-900">
  <article className="mx-auto max-w-4xl px-6 py-12">
    <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
      <p className="text-sm font-semibold text-orange-700">
        餐飲定價與毛利
      </p>

      <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight">
        餐飲店毛利率多少才合理？不同品項毛利率怎麼看
      </h1>

      <p className="mt-5 text-lg leading-8 text-stone-700">
        很多店家會問：「餐飲毛利率到底要多少才合理？」
        但毛利率沒有單一答案，便當、飲料、甜點、炸物、套餐、外送商品的成本結構都不同。
        比起追求某個固定數字，更重要的是知道每個品項毛利是否足以支撐人事、租金、平台費和促銷活動。
      </p>

      <div className="mt-8 rounded-2xl bg-orange-50 p-5">
        <p className="font-bold text-orange-900">快速結論</p>
        <p className="mt-3 leading-7 text-orange-950">
          餐飲毛利率要看品項特性和通路。高毛利品項可以支撐活動和組合銷售，
          低毛利品項則要注意出餐效率、帶客能力和是否能提高客單價。
          不要只看單一毛利率，應該同時看毛利金額、銷量、製作時間和外送抽成。
        </p>
      </div>

      <div className="mt-10 space-y-10 leading-8 text-stone-700">
        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            一、毛利率不是越高越好，要看品項角色
          </h2>

          <p className="mt-4">
            毛利率高代表每賣一份，售價中有較高比例可以留下來支付營運成本。
            但有些低毛利商品可能是招牌、主餐、引流品或套餐核心，不能只因為毛利率低就刪掉。
          </p>

          <p className="mt-4">
            比較健康的做法是先替品項分類：哪些是帶客商品、哪些是高毛利商品、哪些是加購商品、哪些是需要調整成本的品項。
            這樣看毛利率會比只看平均值更有意義。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            二、不同品項可以用不同毛利目標
          </h2>

          <div className="mt-4 overflow-hidden rounded-2xl border border-stone-200">
            <table className="w-full border-collapse bg-white text-left text-sm">
              <thead className="bg-stone-100">
                <tr>
                  <th className="px-4 py-3 font-bold">品項類型</th>
                  <th className="px-4 py-3 font-bold">觀察重點</th>
                  <th className="px-4 py-3 font-bold">經營判斷</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3">主餐、便當、麵飯</td>
                  <td className="px-4 py-3">毛利金額、出餐效率</td>
                  <td className="px-4 py-3">要能支撐基本營運</td>
                </tr>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3">飲料、小菜、加購品</td>
                  <td className="px-4 py-3">毛利率、加購率</td>
                  <td className="px-4 py-3">適合提高客單價</td>
                </tr>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3">招牌或引流品</td>
                  <td className="px-4 py-3">來客數、回購率</td>
                  <td className="px-4 py-3">毛利可略低，但要有策略目的</td>
                </tr>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3">外送商品</td>
                  <td className="px-4 py-3">平台抽成、包材成本</td>
                  <td className="px-4 py-3">不能直接沿用內用毛利率</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            三、毛利率和毛利金額要一起看
          </h2>

          <p className="mt-4">
            只看毛利率容易誤判。例如一杯飲料售價 50 元、成本 15 元，毛利率 70%，單杯毛利 35 元。
            一份便當售價 120 元、成本 60 元，毛利率 50%，單份毛利 60 元。
          </p>

          <p className="mt-4">
            飲料毛利率高，但便當單份毛利金額較高。兩者在菜單裡的角色不同，不能只用毛利率高低決定哪個比較好。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            四、外送平台會讓毛利率變形
          </h2>

          <p className="mt-4">
            如果商品原本售價 120 元、成本 60 元，毛利率 50%。
            上外送平台後若抽成 30%，平台費用是 36 元，扣掉成本與平台費後只剩 24 元毛利，
            實際毛利率變成 20%。
          </p>

          <p className="mt-4">
            所以外送通路不能只看原本的店內毛利率。你需要另外試算平台抽成、外送包材、平台活動補貼和外送價格。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            五、低毛利品項要問三個問題
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>這個品項是否能帶來新客或提高回購？</li>
            <li>它是否能帶動高毛利商品加購？</li>
            <li>它的製作時間和人力壓力是否合理？</li>
          </ul>

          <p className="mt-4">
            如果答案都是否定的，低毛利品項就可能需要調價、改份量、換供應商或從菜單移除。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            六、用計算器建立自己的毛利標準
          </h2>

          <p className="mt-4">
            與其問毛利率多少才合理，不如先把主要品項都試算一次，找出哪些商品毛利不足、哪些商品適合做加購或套餐。
            你可以用本站的餐飲毛利率計算器輸入售價、成本、包材和平台抽成，快速比較不同品項。
          </p>

          <div className="mt-6">
            <TrackedLink
              href="/tools/restaurant-margin-calculator"
              eventName="click_article_cta"
              eventParams={{
                article_slug: "restaurant-margin-benchmark",
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
              <h3 className="font-bold text-stone-900">Q1：餐飲店一定要追求高毛利率嗎？</h3>
              <p className="mt-2">
                不一定。高毛利率很好，但還要看銷量、製作效率和是否能支撐整體營運。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">Q2：平均毛利率有用嗎？</h3>
              <p className="mt-2">
                有用，但不能只看平均。最好同時看各品項毛利率、毛利金額和銷售占比。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">Q3：毛利率低的招牌商品要調價嗎？</h3>
              <p className="mt-2">
                要先看它是否能帶客、帶動加購或提升回購。如果沒有明確作用，就應該重新檢查成本和價格。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-100 p-5">
          <h2 className="text-2xl font-bold text-stone-900">本文重點整理</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>餐飲毛利率沒有單一標準，要看品項角色和通路。</li>
            <li>毛利率和毛利金額要一起看，不能只比較百分比。</li>
            <li>外送平台抽成會大幅壓縮實際毛利。</li>
            <li>低毛利品項需要有帶客、加購或回購目的。</li>
            <li>建立自己的品項毛利表，比追求通用標準更實際。</li>
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

export const restaurantMarginBenchmarkPost: BlogPost = {
  slug: "restaurant-margin-benchmark",
  title: "餐飲店毛利率多少才合理？不同品項毛利率怎麼看",
  description:
    "說明餐飲毛利率沒有單一標準，教你用品項角色、毛利金額、通路抽成和銷售占比判斷毛利是否健康。",
  keywords: [
    "餐飲毛利率",
    "餐飲毛利率多少合理",
    "餐飲成本率",
    "餐飲品項毛利",
    "餐飲定價",
    "餐飲毛利分析",
    "小吃店毛利率",
  ],
  category: "餐飲定價與毛利",
  date: "2026 年 7 月 2 日",
  openGraphTitle: "餐飲店毛利率多少才合理？不同品項毛利率怎麼看",
  openGraphDescription:
    "整理餐飲毛利率判斷方式，幫你從品項角色、通路抽成和毛利金額看懂菜單是否健康。",
  Content: RestaurantMarginBenchmarkContent,
};
