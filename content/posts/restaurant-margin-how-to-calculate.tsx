import TrackedLink from "@/components/tracked-link";
import type { BlogPost } from "@/lib/post-types";

function RestaurantMarginHowToCalculateContent() {
  return (
<main className="bg-stone-50 text-stone-900">
  <article className="mx-auto max-w-4xl px-6 py-12">
    <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
      <p className="text-sm font-semibold text-orange-700">
        餐飲定價與毛利
      </p>

      <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight">
        餐飲毛利率怎麼算？小吃店、飲料店定價前一定要看的毛利公式
      </h1>

      <p className="mt-5 text-lg leading-8 text-stone-700">
        餐飲店在定價時，不能只看「這個價格客人能不能接受」，
        更要先算清楚每一份餐點真正留下多少毛利。尤其是小吃店、飲料店、
        外帶店和有上外送平台的店家，如果沒有把食材、包材和平台抽成都算進去，
        很容易發生營業額看起來不錯，但實際利潤很薄的情況。
      </p>

      <div className="mt-8 rounded-2xl bg-orange-50 p-5">
        <p className="font-bold text-orange-900">快速結論</p>
        <p className="mt-3 leading-7 text-orange-950">
          餐飲毛利率的基本公式是：毛利率 = 商品毛利 ÷ 商品售價 × 100%。
          例如一份餐點售價 100 元，食材成本 35 元、包材成本 5 元，
          總直接成本是 40 元，商品毛利就是 60 元，毛利率就是 60%。
        </p>
      </div>

      <div className="mt-10 space-y-10 leading-8 text-stone-700">
        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            一、餐飲毛利率是什麼？
          </h2>

          <p className="mt-4">
            餐飲毛利率可以理解成：一個商品賣出去後，扣掉直接成本，
            還剩下多少比例的錢可以用來支付人事、租金、水電、設備折舊、
            行銷費用與店家的利潤。
          </p>

          <p className="mt-4">
            例如一碗麵賣 100 元，食材和包材成本合計 40 元，
            那麼這碗麵的毛利是 60 元，毛利率是 60%。
            但這 60 元還不是淨利，因為還沒有扣掉房租、人事、水電和其他營運成本。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            二、餐飲毛利率公式
          </h2>

          <div className="mt-4 rounded-2xl bg-stone-100 p-5">
            <p className="font-bold text-stone-900">
              總直接成本 = 食材成本 + 包材成本
            </p>
            <p className="mt-3 font-bold text-stone-900">
              商品毛利 = 商品售價 − 總直接成本
            </p>
            <p className="mt-3 font-bold text-stone-900">
              毛利率 = 商品毛利 ÷ 商品售價 × 100%
            </p>
          </div>

          <p className="mt-4">
            這裡的「直接成本」通常至少要包含食材成本和包材成本。
            如果是外送平台商品，還要另外考慮平台抽成，因為平台抽成會大幅降低實際毛利。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            三、範例：售價 100 元、成本 40 元，毛利率是多少？
          </h2>

          <p className="mt-4">
            假設你有一份餐點，資料如下：
          </p>

          <div className="mt-4 overflow-hidden rounded-2xl border border-stone-200">
            <table className="w-full border-collapse bg-white text-left text-sm">
              <tbody>
                <tr className="border-b border-stone-200">
                  <th className="w-1/2 bg-stone-100 px-4 py-3 font-bold">
                    商品售價
                  </th>
                  <td className="px-4 py-3">100 元</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <th className="bg-stone-100 px-4 py-3 font-bold">
                    食材成本
                  </th>
                  <td className="px-4 py-3">35 元</td>
                </tr>
                <tr>
                  <th className="bg-stone-100 px-4 py-3 font-bold">
                    包材成本
                  </th>
                  <td className="px-4 py-3">5 元</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-2xl bg-stone-100 p-5">
            <p className="font-bold text-stone-900">
              總直接成本 = 35 元 + 5 元 = 40 元
            </p>
            <p className="mt-3 font-bold text-stone-900">
              商品毛利 = 100 元 − 40 元 = 60 元
            </p>
            <p className="mt-3 font-bold text-stone-900">
              毛利率 = 60 元 ÷ 100 元 × 100% = 60%
            </p>
          </div>

          <p className="mt-4">
            這代表這份餐點每賣出一份，會先留下 60 元毛利。
            這個毛利可以再拿去支付固定成本和其他營運費用。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            四、食材成本和包材成本要分開算嗎？
          </h2>

          <p className="mt-4">
            建議要分開算。因為很多餐飲店會低估包材成本，
            尤其是外帶、外送比例高的店，餐盒、杯子、封膜、提袋、
            醬料盒、吸管、紙巾等成本加起來並不低。
          </p>

          <p className="mt-4">
            如果你只算食材，不算包材，毛利率會看起來比實際更漂亮。
            例如食材成本 35 元時，你可能以為毛利率是 65%；
            但加上包材 5 元後，實際毛利率就變成 60%。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            五、外送平台抽成後，毛利會差多少？
          </h2>

          <p className="mt-4">
            外送平台抽成是很多店家容易忽略的重點。假設同樣一份餐點售價 100 元，
            食材成本 35 元、包材成本 5 元，原本毛利是 60 元。
          </p>

          <p className="mt-4">
            如果外送平台抽成 30%，平台抽成金額就是：
          </p>

          <div className="mt-4 rounded-2xl bg-stone-100 p-5">
            <p className="font-bold text-stone-900">
              平台抽成 = 商品售價 × 平台抽成比例
            </p>
            <p className="mt-3">
              100 元 × 30% = 30 元
            </p>
          </div>

          <p className="mt-4">
            抽成後毛利會變成：
          </p>

          <div className="mt-4 rounded-2xl bg-stone-100 p-5">
            <p className="font-bold text-stone-900">
              抽成後毛利 = 商品售價 − 食材成本 − 包材成本 − 平台抽成
            </p>
            <p className="mt-3">
              100 元 − 35 元 − 5 元 − 30 元 = 30 元
            </p>
          </div>

          <div className="mt-4 rounded-2xl bg-orange-50 p-5">
            <p className="font-bold text-orange-900">
              原本毛利 60 元，加入 30% 平台抽成後，只剩 30 元。
            </p>
          </div>

          <p className="mt-4">
            這就是為什麼很多店家會設定外送價比內用價高。
            因為如果外送價完全照內用價賣，抽成後的毛利可能會被壓得很低。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            六、餐飲毛利率多少才算合理？
          </h2>

          <p className="mt-4">
            不同品類的合理毛利率差異很大。飲料、甜點、小吃、便當、
            麵食、火鍋、外送餐點的成本結構都不同，所以不能只用一個數字判斷。
          </p>

          <p className="mt-4">
            不過對小店老闆來說，可以先用下面的方式初步判斷：
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>毛利率低於 40%：要非常小心，可能很難承受租金、人事與耗損。</li>
            <li>毛利率約 40%～60%：有基本空間，但要看固定成本與銷量。</li>
            <li>毛利率高於 60%：單品毛利不錯，但仍要注意市場接受度。</li>
          </ul>

          <p className="mt-4">
            這只是粗略判斷。真正要看的是整體菜單組合、熱門品項、
            客單價、翻桌率、出餐效率與固定成本。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            七、毛利率太低怎麼改善？
          </h2>

          <p className="mt-4">
            如果你發現某個商品毛利率太低，可以從幾個方向調整：
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>調整售價，但要注意客人接受度。</li>
            <li>重新檢查食材份量，避免過度給料。</li>
            <li>改用更合適的包材，不要過度包裝。</li>
            <li>把低毛利商品改成套餐搭配，提高整體客單價。</li>
            <li>針對外送平台設定不同價格，避免抽成吃掉毛利。</li>
            <li>找出高毛利商品，放在菜單更明顯的位置。</li>
          </ul>

          <p className="mt-4">
            但不要只靠漲價解決問題。比較好的做法是同時檢查成本、
            份量、出餐流程、套餐設計與菜單結構。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            八、用餐飲毛利率計算器快速試算
          </h2>

          <p className="mt-4">
            你可以使用本站的餐飲毛利率計算器，輸入商品售價、
            食材成本、包材成本、平台抽成與目標毛利率，
            快速算出單品毛利、毛利率、抽成後毛利與建議售價。
          </p>

          <div className="mt-6">
            <TrackedLink
              href="/tools/restaurant-margin-calculator"
              eventName="click_article_cta"
              eventParams={{
                article_slug: "restaurant-margin-how-to-calculate",
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
            九、常見問題
          </h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">
                Q1：餐飲毛利和淨利差在哪裡？
              </h3>
              <p className="mt-2">
                毛利是商品售價扣掉直接成本後剩下的金額。
                淨利則還要再扣掉人事、租金、水電、設備、行銷、
                稅務與其他營運成本。毛利高不代表淨利一定高。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">
                Q2：包材成本一定要算進去嗎？
              </h3>
              <p className="mt-2">
                建議一定要算。尤其是外帶和外送店，包材成本可能占比不低。
                如果不算包材，毛利率會被高估。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">
                Q3：外送平台商品要另外定價嗎？
              </h3>
              <p className="mt-2">
                很多店家會另外設定外送價格，因為平台抽成會壓低毛利。
                是否調價要看平台規則、競爭狀況、商品毛利與客人接受度。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">
                Q4：毛利率越高越好嗎？
              </h3>
              <p className="mt-2">
                不一定。毛利率高代表單品空間大，但如果價格太高導致銷量下降，
                總毛利反而可能變少。定價要同時看毛利率、銷量與客人接受度。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-100 p-5">
          <h2 className="text-2xl font-bold text-stone-900">
            本文重點整理
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>餐飲毛利率 = 商品毛利 ÷ 商品售價 × 100%。</li>
            <li>商品毛利 = 商品售價 − 食材成本 − 包材成本。</li>
            <li>包材成本不要忽略，尤其是外帶和外送商品。</li>
            <li>外送平台抽成會明顯降低實際毛利。</li>
            <li>毛利率太低時，不一定只靠漲價，也可以調整份量、包材、套餐與菜單結構。</li>
          </ul>
        </section>

        <p className="text-sm leading-6 text-stone-500">
          提醒：本文與本站工具僅供一般試算參考，不構成會計、稅務、法律或財務建議。
          實際經營結果仍需依照你的商品成本、店面條件、人力配置、平台合約與活動執行狀況判斷。
        </p>
      </div>
    </div>
  </article>
</main>
  );
}

export const restaurantMarginHowToCalculatePost: BlogPost = {
    slug: "restaurant-margin-how-to-calculate",
    title: "餐飲毛利率怎麼算？小吃店、飲料店定價前一定要看的毛利公式",
    description:
      "用小吃店、飲料店常見定價範例，說明餐飲毛利率公式、食材成本、包材成本、外送平台抽成與建議售價怎麼算。",
    keywords: [
      "餐飲毛利率",
      "餐飲毛利率計算",
      "餐飲定價",
      "小吃店毛利",
      "飲料店毛利",
      "食材成本",
      "包材成本",
      "外送平台抽成",
      "餐點成本計算",
    ],
    category: "餐飲定價與毛利",
    date: "2026 年 7 月 1 日",
    openGraphTitle: "餐飲毛利率怎麼算？小吃店、飲料店定價前一定要看的毛利公式",
    openGraphDescription:
      "用簡單範例說明餐飲毛利率、食材成本、包材成本、外送平台抽成與建議售價怎麼算。",
    relatedPostSlugs: [
      "food-pricing-formula",
      "restaurant-margin-benchmark",
      "restaurant-food-cost-items",
    ],
    Content: RestaurantMarginHowToCalculateContent,
  };
