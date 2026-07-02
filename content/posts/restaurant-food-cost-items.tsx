import TrackedLink from "@/components/tracked-link";
import type { BlogPost } from "@/lib/post-types";

function RestaurantFoodCostItemsContent() {
  return (
<main className="bg-stone-50 text-stone-900">
  <article className="mx-auto max-w-4xl px-6 py-12">
    <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
      <p className="text-sm font-semibold text-orange-700">
        餐飲成本管理
      </p>

      <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight">
        餐點成本包含哪些？食材、包材、人力和平台費用怎麼估
      </h1>

      <p className="mt-5 text-lg leading-8 text-stone-700">
        很多餐飲店算成本時，只會先想到肉、菜、麵、米或飲料原料。
        但餐點真的賣出去時，還會跟著發生包材、醬料、耗損、外送平台費用和人力壓力。
        如果成本項目沒有整理清楚，定價、毛利率和促銷活動都容易失真。
      </p>

      <div className="mt-8 rounded-2xl bg-orange-50 p-5">
        <p className="font-bold text-orange-900">快速結論</p>
        <p className="mt-3 leading-7 text-orange-950">
          餐點成本至少要分成「每份會發生的直接成本」和「整間店共同承擔的營運成本」。
          定價時先算食材、包材、耗損和平台抽成，確認每份商品有足夠毛利，
          再用整體營收去支付人事、租金、水電和設備等固定支出。
        </p>
      </div>

      <div className="mt-10 space-y-10 leading-8 text-stone-700">
        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            一、先分清楚直接成本和營運成本
          </h2>

          <p className="mt-4">
            直接成本是每賣出一份商品就會跟著增加的成本，例如食材、醬料、紙碗、杯蓋、提袋和外送平台抽成。
            營運成本則是店開著就會發生的費用，例如房租、人事、水電、設備折舊、清潔用品和系統費。
          </p>

          <p className="mt-4">
            兩種成本都重要，但單品定價時通常先看直接成本和毛利率。
            如果每份商品的毛利太低，就算營業額看起來漂亮，也很難支付整間店的固定開銷。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            二、餐點直接成本通常包含哪些？
          </h2>

          <div className="mt-4 overflow-hidden rounded-2xl border border-stone-200">
            <table className="w-full border-collapse bg-white text-left text-sm">
              <thead className="bg-stone-100">
                <tr>
                  <th className="px-4 py-3 font-bold">成本項目</th>
                  <th className="px-4 py-3 font-bold">常見內容</th>
                  <th className="px-4 py-3 font-bold">估算提醒</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3">食材成本</td>
                  <td className="px-4 py-3">主料、配料、調味料</td>
                  <td className="px-4 py-3">用實際份量，不要只看進貨總額</td>
                </tr>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3">包材成本</td>
                  <td className="px-4 py-3">餐盒、杯子、袋子、餐具</td>
                  <td className="px-4 py-3">外帶和外送通常比內用高</td>
                </tr>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3">耗損成本</td>
                  <td className="px-4 py-3">備料損耗、退貨、失誤重做</td>
                  <td className="px-4 py-3">可用比例加回單品成本</td>
                </tr>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3">通路費用</td>
                  <td className="px-4 py-3">平台抽成、金流費、活動補貼</td>
                  <td className="px-4 py-3">不同通路可以分開定價</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            三、範例：一份便當的成本拆解
          </h2>

          <p className="mt-4">
            假設一份便當售價 110 元，直接成本可以先這樣估：
          </p>

          <div className="mt-4 overflow-hidden rounded-2xl border border-stone-200">
            <table className="w-full border-collapse bg-white text-left text-sm">
              <tbody>
                <tr className="border-b border-stone-200">
                  <th className="w-1/2 bg-stone-100 px-4 py-3 font-bold">主菜與配菜</th>
                  <td className="px-4 py-3">38 元</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <th className="bg-stone-100 px-4 py-3 font-bold">米飯、醬料與湯品</th>
                  <td className="px-4 py-3">9 元</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <th className="bg-stone-100 px-4 py-3 font-bold">餐盒、提袋、餐具</th>
                  <td className="px-4 py-3">6 元</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <th className="bg-stone-100 px-4 py-3 font-bold">耗損預留</th>
                  <td className="px-4 py-3">3 元</td>
                </tr>
                <tr>
                  <th className="bg-stone-100 px-4 py-3 font-bold">總直接成本</th>
                  <td className="px-4 py-3 font-bold">56 元</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">
            這時單份毛利是 110 − 56 = 54 元，毛利率約 49%。
            如果這份便當還要上外送平台，就不能只拿 56 元成本去看，還要把平台抽成納入。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            四、外送平台費用要另外看
          </h2>

          <p className="mt-4">
            外送平台抽成通常會直接吃掉售價的一部分。假設平台抽成 30%，
            售價 110 元的便當，平台費用就是 33 元。原本看起來還有 54 元毛利，
            但外送通路扣掉平台費後，只剩 21 元可以支付其他費用。
          </p>

          <p className="mt-4">
            因此內用、外帶、外送最好分開試算。外送價格、包材成本和活動補貼都可能讓同一份商品出現完全不同的毛利結果。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            五、人力成本要不要放進單品成本？
          </h2>

          <p className="mt-4">
            人力成本不一定要直接拆到每一份餐點，但你要知道毛利最後要用來支付人事。
            如果某個品項製作時間特別長、備料很麻煩或出錯率高，就算食材成本不高，
            也可能不是好商品。
          </p>

          <p className="mt-4">
            實務上可以先用毛利率看單品是否健康，再用出餐效率和人力負擔決定要不要保留、調價或改成限量商品。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            六、用餐飲毛利率計算器檢查成本
          </h2>

          <p className="mt-4">
            如果你已經整理出售價、食材成本、包材成本和平台抽成，
            可以直接用本站的餐飲毛利率計算器檢查每份商品的毛利率，並反推達到目標毛利率時的建議售價。
          </p>

          <div className="mt-6">
            <TrackedLink
              href="/tools/restaurant-margin-calculator"
              eventName="click_article_cta"
              eventParams={{
                article_slug: "restaurant-food-cost-items",
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
              <h3 className="font-bold text-stone-900">Q1：耗損成本要怎麼抓？</h3>
              <p className="mt-2">
                可以先用過去一段時間的報廢、退貨、備料損耗估一個比例，再平均分攤到主要品項。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">Q2：租金要放進每份餐點嗎？</h3>
              <p className="mt-2">
                不一定要逐份拆，但毛利總額必須足夠支付租金。單品毛利太低時，固定成本壓力會很明顯。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">Q3：不同通路可以不同成本嗎？</h3>
              <p className="mt-2">
                可以，而且建議分開看。內用、外帶、外送的包材、平台費和活動成本常常不同。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-100 p-5">
          <h2 className="text-2xl font-bold text-stone-900">本文重點整理</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>餐點成本要同時看食材、包材、耗損和通路費用。</li>
            <li>單品定價先看直接成本，再確認毛利能不能支付營運成本。</li>
            <li>外送平台抽成會大幅改變毛利，應該和內用外帶分開試算。</li>
            <li>人力成本不一定逐份拆，但要評估製作時間和出餐效率。</li>
            <li>成本整理越清楚，定價和活動試算越不容易失真。</li>
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

export const restaurantFoodCostItemsPost: BlogPost = {
  slug: "restaurant-food-cost-items",
  title: "餐點成本包含哪些？食材、包材、人力和平台費用怎麼估",
  description:
    "整理餐飲店單品成本常見項目，說明食材、包材、耗損、人力與外送平台費用如何影響毛利與定價。",
  keywords: [
    "餐點成本",
    "餐飲成本項目",
    "食材成本",
    "包材成本",
    "餐飲人力成本",
    "外送平台費用",
    "餐飲毛利",
  ],
  category: "餐飲成本管理",
  date: "2026 年 7 月 2 日",
  openGraphTitle: "餐點成本包含哪些？食材、包材、人力和平台費用怎麼估",
  openGraphDescription:
    "用餐飲店常見成本項目拆解單品成本，幫你看懂定價和毛利率背後真正要算的費用。",
  Content: RestaurantFoodCostItemsContent,
};
