import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  category: string;
  date: string;
  openGraphTitle: string;
  openGraphDescription: string;
  Content: () => ReactNode;
};

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
            <Link
              href="/tools/add-on-promotion-calculator"
              className="inline-flex rounded-full bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
            >
              使用滿額加購活動計算器
            </Link>
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
            <Link
              href="/tools/restaurant-margin-calculator"
              className="inline-flex rounded-full bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
            >
              使用餐飲毛利率計算器
            </Link>
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
            <Link
              href="/tools/discount-profit-calculator"
              className="inline-flex rounded-full bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
            >
              使用折扣活動損益計算器
            </Link>
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

export const posts: BlogPost[] = [
  {
    slug: "add-on-promotion-example",
    title: "滿 150 元加購 40 元划算嗎？餐飲店滿額加購活動怎麼算",
    description:
      "用餐飲店常見的滿 150 元加購 40 元活動為例，教你試算加購商品毛利、加購率、每日增加毛利與活動是否值得做。",
    keywords: [
      "滿150加購40",
      "滿額加購",
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
    Content: AddOnPromotionExampleContent,
  },
  {
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
    Content: RestaurantMarginHowToCalculateContent,
  },
  {
    slug: "discount-promotion-profit",
    title: "折扣活動怎麼算才不會虧？餐飲店打折促銷前要先算這幾個數字",
    description:
      "用餐飲店常見折扣活動為例，說明商品原價、活動售價、單品成本、原本銷量與活動後銷量如何影響每日毛利，幫助店家判斷打折促銷是否划算。",
    keywords: [
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
    Content: DiscountPromotionProfitContent,
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getPostMetadata(post: BlogPost): Metadata {
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.openGraphTitle,
      description: post.openGraphDescription,
      type: "article",
      locale: "zh_TW",
      siteName: "開店小工具箱",
    },
  };
}
