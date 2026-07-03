import TrackedLink from "@/components/tracked-link";
import type { BlogPost } from "@/lib/post-types";

function RestaurantPromotionChecklistContent() {
  return (
<main className="bg-stone-50 text-stone-900">
  <article className="mx-auto max-w-4xl px-6 py-12">
    <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
      <p className="text-sm font-semibold text-orange-700">
        餐飲促銷活動
      </p>

      <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight">
        小吃店促銷活動怎麼設計？避免越賣越虧的 5 個檢查點
      </h1>

      <p className="mt-5 text-lg leading-8 text-stone-700">
        小吃店做促銷很常見，像是滿額折扣、買套餐送飲料、第二件優惠、加購價、平台活動等。
        但活動不是人多就代表成功，如果折扣吃掉太多毛利、現場出餐變慢、客單價沒有提高，
        可能只是讓店更忙卻沒有更賺。
      </p>

      <div className="mt-8 rounded-2xl bg-orange-50 p-5">
        <p className="font-bold text-orange-900">快速結論</p>
        <p className="mt-3 leading-7 text-orange-950">
          設計促銷活動前，先確認 5 件事：活動目標、單品毛利、活動後毛利、需要增加的訂單量、
          現場能否承受。活動應該要提高客單價、帶來新客或增加回購，而不是單純降價換忙碌。
        </p>
      </div>

      <div className="mt-10 space-y-10 leading-8 text-stone-700">
        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            一、先決定活動目標
          </h2>

          <p className="mt-4">
            活動設計前，要先問這次活動到底要解決什麼問題。
            是想拉新客、提高客單價、推新品、清庫存、增加回購，還是填補離峰時段？
            目標不同，活動設計也不同。
          </p>

          <p className="mt-4">
            如果目標是提高客單價，滿額加購和套餐通常比單純打折更適合。
            如果目標是新品曝光，小份量試吃或限時加購可能比全品項折扣更有效。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            二、檢查點 1：活動商品原本毛利是多少？
          </h2>

          <p className="mt-4">
            不知道原本毛利，就無法判斷活動會不會虧。
            例如商品原價 100 元、成本 40 元，原本毛利是 60 元。
            如果活動價變成 85 元，毛利剩 45 元；如果再加上平台費或贈品成本，毛利可能更低。
          </p>

          <p className="mt-4">
            活動前至少要先算主商品、加購商品和贈品的成本，避免用感覺決定折扣。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            三、檢查點 2：活動後每筆訂單毛利有沒有增加？
          </h2>

          <p className="mt-4">
            好活動不一定是每個商品都高毛利，但整筆訂單毛利最好要提高或有明確策略目的。
            例如滿 150 元可 40 元加購一杯成本 18 元的飲料，加購毛利是 22 元。
            如果這個活動能讓客單價提高，通常比直接折價更健康。
          </p>

          <p className="mt-4">
            相反地，如果滿額折扣只是把原本會買的客人都變便宜，沒有提高訂單量或客單價，
            活動就可能只是減少毛利。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            四、檢查點 3：需要多賣多少才打平？
          </h2>

          <p className="mt-4">
            折扣活動要特別注意打平銷量。假設原本每份毛利 60 元，每天賣 50 份，每日毛利 3,000 元。
            活動後每份毛利剩 45 元，就要賣到 67 份左右，才接近原本毛利。
          </p>

          <p className="mt-4">
            如果你覺得活動不可能讓銷量增加到這個程度，就要調整活動條件，例如改成加購、套餐或限定時段。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            五、檢查點 4：現場出餐和人力能不能承受？
          </h2>

          <p className="mt-4">
            有些活動數字看起來能賺，但現場做不出來。例如贈品要現做、加購品備料複雜、活動造成尖峰排隊，
            都可能讓服務品質下降，甚至影響原本高毛利商品的出餐。
          </p>

          <p className="mt-4">
            活動設計要盡量讓現場容易執行。加購商品最好備料穩定、出餐快速、包裝簡單，不要讓員工每筆訂單都要重新解釋規則。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            六、檢查點 5：活動結束後要看什麼數字？
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>活動期間訂單數是否增加？</li>
            <li>客單價是否提高？</li>
            <li>每日總毛利是否提高？</li>
            <li>加購率或套餐占比是否達標？</li>
            <li>活動後是否帶來回購或新客？</li>
          </ul>

          <p className="mt-4">
            如果只看營業額，很容易誤判活動效果。營業額增加但毛利下降，代表活動可能只是用利潤換銷量。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            七、用試算工具先排除高風險活動
          </h2>

          <p className="mt-4">
            做折扣活動前，可以用折扣活動損益計算器比較活動前後每日毛利。
            做滿額加購前，可以用滿額加購活動計算器估算加購率、加購毛利和新增每日毛利。
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href="/tools/discount-profit-calculator"
              eventName="click_article_cta"
              eventParams={{
                article_slug: "restaurant-promotion-checklist",
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
                article_slug: "restaurant-promotion-checklist",
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
            八、常見問題
          </h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">Q1：新店開幕一定要打折嗎？</h3>
              <p className="mt-2">
                不一定。也可以用加購、試吃、套餐或會員回訪券，避免一開始就讓客人只記得低價。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">Q2：活動時間要多長？</h3>
              <p className="mt-2">
                第一版建議時間短一點，方便測試數字。確認毛利、出餐和客單價都健康，再延長或放大。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">Q3：滿額加購和折扣哪個比較好？</h3>
              <p className="mt-2">
                通常加購比較有機會提高客單價，但還是要看加購商品成本、加購率和活動門檻是否合理。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-100 p-5">
          <h2 className="text-2xl font-bold text-stone-900">本文重點整理</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>促銷活動要先有明確目標，不要只為了降價。</li>
            <li>活動前先算原本毛利和活動後毛利。</li>
            <li>折扣活動要算需要增加多少銷量才打平。</li>
            <li>現場出餐、人力和備料壓力也要納入活動成本。</li>
            <li>活動後要看每日總毛利、客單價、加購率和回購，而不只看營業額。</li>
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

export const restaurantPromotionChecklistPost: BlogPost = {
  slug: "restaurant-promotion-checklist",
  title: "小吃店促銷活動怎麼設計？避免越賣越虧的 5 個檢查點",
  description:
    "整理小吃店和餐飲店設計促銷活動前應該檢查的 5 個重點，包含毛利、打平銷量、客單價和出餐壓力。",
  keywords: [
    "滿額加購活動計算",
    "折扣活動損益計算",
    "小吃店促銷",
    "餐飲促銷活動",
    "餐飲活動設計",
    "滿額加購",
    "折扣活動",
    "餐飲活動成本",
    "促銷活動檢查表",
  ],
  category: "餐飲促銷活動",
  date: "2026 年 7 月 2 日",
  openGraphTitle: "小吃店促銷活動怎麼設計？避免越賣越虧的 5 個檢查點",
  openGraphDescription:
    "用 5 個檢查點幫餐飲店評估促銷活動是否真的划算，避免營業額上升但毛利下降。",
  relatedPostSlugs: [
    "discount-promotion-profit",
    "restaurant-promotion-cost",
    "add-on-vs-discount-promotion",
  ],
  Content: RestaurantPromotionChecklistContent,
};
