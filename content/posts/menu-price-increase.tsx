import TrackedLink from "@/components/tracked-link";
import type { BlogPost } from "@/lib/post-types";

function MenuPriceIncreaseContent() {
  return (
<main className="bg-stone-50 text-stone-900">
  <article className="mx-auto max-w-4xl px-6 py-12">
    <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
      <p className="text-sm font-semibold text-orange-700">
        餐飲定價與毛利
      </p>

      <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight">
        菜單漲價怎麼算？漲價幅度、客單價和毛利率試算
      </h1>

      <p className="mt-5 text-lg leading-8 text-stone-700">
        原物料、包材、人事和租金上漲時，餐飲店常常知道該漲價，卻不知道要漲多少。
        漲太少無法補回成本，漲太多又擔心客人流失。菜單漲價不能只憑感覺，
        應該先用成本、毛利率、銷量變化和客單價一起試算。
      </p>

      <div className="mt-8 rounded-2xl bg-orange-50 p-5">
        <p className="font-bold text-orange-900">快速結論</p>
        <p className="mt-3 leading-7 text-orange-950">
          菜單漲價前，先確認每個品項目前毛利率、成本上漲金額和漲價後可能流失的銷量。
          不一定要全部品項一起漲，可以優先調整低毛利、高銷量、成本上升明顯的品項，
          同時用套餐、加購或規格調整降低顧客感受。
        </p>
      </div>

      <div className="mt-10 space-y-10 leading-8 text-stone-700">
        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            一、漲價前先算目前毛利
          </h2>

          <p className="mt-4">
            漲價前不要只看「同業賣多少」，應該先知道自己現在每份商品賺多少毛利。
            例如一份餐點售價 100 元、成本 45 元，毛利是 55 元，毛利率 55%。
            如果成本漲到 52 元，毛利就降到 48 元，毛利率變成 48%。
          </p>

          <p className="mt-4">
            這時如果不漲價，等於每賣一份少 7 元毛利。一天賣 80 份，一天就少 560 元毛利，
            一個月可能差到一萬多元。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            二、漲價幅度可以用目標毛利率反推
          </h2>

          <div className="mt-4 rounded-2xl bg-stone-100 p-5">
            <p className="font-bold text-stone-900">
              建議售價 = 新成本 ÷ 目標成本率
            </p>
            <p className="mt-3 font-bold text-stone-900">
              目標成本率 = 100% − 目標毛利率
            </p>
          </div>

          <p className="mt-4">
            假設新成本是 52 元，希望毛利率回到 55%，目標成本率就是 45%。
            建議售價 = 52 ÷ 45% = 115.6 元。實際菜單可以考慮調成 115 元或 120 元，
            再搭配市場接受度判斷。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            三、不要只看單品，要看每日總毛利
          </h2>

          <p className="mt-4">
            漲價可能影響銷量，所以要比較每日總毛利，而不是只看每份毛利。
            例如原本每天賣 80 份，每份毛利 48 元，每日毛利 3,840 元。
            漲價後每份毛利提高到 63 元，但銷量降到 65 份，每日毛利仍有 4,095 元。
          </p>

          <p className="mt-4">
            這代表即使銷量小幅下降，只要每份毛利提高夠多，總毛利仍可能改善。
            反過來，如果漲價造成銷量大幅下滑，就需要重新檢查價格、份量或商品組合。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            四、哪些品項應該優先漲價？
          </h2>

          <div className="mt-4 overflow-hidden rounded-2xl border border-stone-200">
            <table className="w-full border-collapse bg-white text-left text-sm">
              <thead className="bg-stone-100">
                <tr>
                  <th className="px-4 py-3 font-bold">品項狀況</th>
                  <th className="px-4 py-3 font-bold">處理建議</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3">成本上升明顯</td>
                  <td className="px-4 py-3">優先檢查是否需要漲價或調整份量</td>
                </tr>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3">高銷量但毛利偏低</td>
                  <td className="px-4 py-3">小幅調價可能對總毛利幫助很大</td>
                </tr>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3">外送平台商品</td>
                  <td className="px-4 py-3">要把平台抽成和包材重新算進去</td>
                </tr>
                <tr className="border-t border-stone-200">
                  <td className="px-4 py-3">招牌引流品</td>
                  <td className="px-4 py-3">可謹慎調整，避免影響來客印象</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            五、漲價不一定只能改價格
          </h2>

          <p className="mt-4">
            如果直接漲價會讓顧客反應太大，也可以考慮調整菜單結構。
            例如推出大份量升級、套餐組合、加購飲料、改包裝規格，或把原本免費的小配料改成可加購選項。
          </p>

          <p className="mt-4">
            這些做法的核心都是讓毛利改善，但不一定讓顧客感覺只是單純變貴。
            不過任何調整都要先試算，避免看起來客單價提高，實際毛利卻沒有增加。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            六、用工具試算漲價後毛利
          </h2>

          <p className="mt-4">
            你可以先用餐飲毛利率計算器輸入新售價、新成本和平台抽成，確認漲價後毛利率是否回到合理範圍。
            如果你擔心漲價影響銷量，也可以用折扣活動損益計算器的概念比較漲價前後的每日毛利。
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href="/tools/restaurant-margin-calculator"
              eventName="click_article_cta"
              eventParams={{
                article_slug: "menu-price-increase",
                destination: "/tools/restaurant-margin-calculator",
                tool_id: "restaurant_margin",
              }}
              className="inline-flex rounded-full bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
            >
              使用餐飲毛利率計算器
            </TrackedLink>

            <TrackedLink
              href="/tools/discount-profit-calculator"
              eventName="click_article_cta"
              eventParams={{
                article_slug: "menu-price-increase",
                destination: "/tools/discount-profit-calculator",
                tool_id: "discount_profit",
              }}
              className="inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
            >
              使用折扣活動損益計算器
            </TrackedLink>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            七、常見問題
          </h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">Q1：菜單要一次全部漲價嗎？</h3>
              <p className="mt-2">
                不一定。可以先調整成本壓力最大、毛利最低或外送影響最大的品項。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">Q2：漲價後銷量下降怎麼辦？</h3>
              <p className="mt-2">
                先看每日總毛利是否改善。如果毛利改善但銷量小降，可能仍是健康調整；若總毛利下降，就要重新評估。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">Q3：可以用套餐代替漲價嗎？</h3>
              <p className="mt-2">
                可以，但要確認套餐的總毛利。套餐不是只看售價提高，也要看加進去的商品成本。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-100 p-5">
          <h2 className="text-2xl font-bold text-stone-900">本文重點整理</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>菜單漲價前要先算目前毛利和成本上漲金額。</li>
            <li>可用新成本和目標毛利率反推建議售價。</li>
            <li>漲價後要比較每日總毛利，不是只看每份毛利。</li>
            <li>優先調整低毛利、高銷量、成本上升明顯的品項。</li>
            <li>漲價也可以透過套餐、加購和規格調整來完成。</li>
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

export const menuPriceIncreasePost: BlogPost = {
  slug: "menu-price-increase",
  title: "菜單漲價怎麼算？漲價幅度、客單價和毛利率試算",
  description:
    "用成本上漲、目標毛利率、銷量變化和客單價說明餐飲店菜單漲價前應該如何試算。",
  keywords: [
    "菜單漲價",
    "餐飲漲價",
    "餐飲定價",
    "漲價幅度",
    "餐飲毛利率",
    "客單價",
    "餐飲成本上漲",
  ],
  category: "餐飲定價與毛利",
  date: "2026 年 7 月 2 日",
  openGraphTitle: "菜單漲價怎麼算？漲價幅度、客單價和毛利率試算",
  openGraphDescription:
    "整理餐飲店菜單漲價前的試算方式，從成本、毛利率、銷量變化和客單價判斷漲多少比較合理。",
  relatedPostSlugs: [
    "food-pricing-formula",
    "restaurant-margin-benchmark",
    "increase-average-order-value",
  ],
  Content: MenuPriceIncreaseContent,
};
