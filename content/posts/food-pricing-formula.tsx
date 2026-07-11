import TrackedLink from "@/components/tracked-link";
import type { BlogPost } from "@/lib/post-types";

function FoodPricingFormulaContent() {
  return (
<main className="bg-[#fffaf3] text-stone-950">
  <article className="mx-auto max-w-4xl px-6 py-12">
    <div className="rounded-3xl border border-orange-100/80 bg-white/95 p-6 shadow-sm shadow-orange-950/5 sm:p-10">
      <p className="text-sm font-semibold text-orange-700">
        餐飲定價與毛利
      </p>

      <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight">
        餐點售價怎麼算？小吃店用成本、毛利率反推售價
      </h1>

      <p className="mt-5 text-lg leading-8 text-stone-700">
        小吃店定價最常見的問題，不是公式太難，而是成本沒有算完整。
        很多店家只用「食材成本 × 2」或參考隔壁店價格來定價，
        卻忘了包材、醬料、耗損、平台抽成和未來做活動的空間。
        這篇用簡單範例說明餐點售價可以怎麼從成本和目標毛利率反推。
      </p>

      <div className="mt-8 rounded-2xl border border-orange-100 bg-orange-50/80 p-5">
        <p className="font-bold text-orange-900">快速結論</p>
        <p className="mt-3 leading-7 text-orange-950">
          小吃店定價可以先用公式「建議售價 = 總直接成本 ÷ 目標成本率」。
          如果一份餐點總直接成本是 40 元，希望成本率控制在 40%，
          建議售價就是 40 ÷ 40% = 100 元。若還要做折扣或上外送平台，
          售價要再保留活動和抽成空間。
        </p>
      </div>

      <div className="mt-10 space-y-10 leading-8 text-stone-700">
        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            一、小吃店定價不能只看食材成本
          </h2>

          <p className="mt-4">
            食材成本是最容易看到的成本，但不是唯一成本。一份滷肉飯、便當、麵線或炸物，
            除了主食材，通常還會有配菜、調味料、醬包、紙碗、塑膠袋、筷子、餐巾紙和耗損。
            如果只把主食材算進去，定價會被低估，毛利率看起來也會比實際狀況漂亮。
          </p>

          <p className="mt-4">
            第一版定價至少要先抓「直接成本」，也就是每賣出一份商品就會跟著發生的成本。
            房租、人事、水電屬於營運成本，不一定直接放進單品成本，但毛利要足夠支付這些費用。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            二、先整理每份餐點的總直接成本
          </h2>

          <p className="mt-4">
            假設你要賣一份雞肉飯，可以先用下面方式整理：
          </p>

          <div className="mt-4 overflow-hidden rounded-2xl border border-orange-100/80">
            <table className="w-full border-collapse bg-white text-left text-sm">
              <tbody>
                <tr className="border-b border-orange-100/80">
                  <th className="w-1/2 bg-orange-50/50 px-4 py-3 font-bold">米飯與雞肉</th>
                  <td className="px-4 py-3">28 元</td>
                </tr>
                <tr className="border-b border-orange-100/80">
                  <th className="bg-orange-50/50 px-4 py-3 font-bold">配菜與調味</th>
                  <td className="px-4 py-3">7 元</td>
                </tr>
                <tr className="border-b border-orange-100/80">
                  <th className="bg-orange-50/50 px-4 py-3 font-bold">外帶包材</th>
                  <td className="px-4 py-3">5 元</td>
                </tr>
                <tr>
                  <th className="bg-orange-50/50 px-4 py-3 font-bold">總直接成本</th>
                  <td className="px-4 py-3 font-bold">40 元</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">
            這裡的 40 元不是淨成本的全部，但它是你做單品定價時最基本的底線。
            如果售價太接近 40 元，後面就沒有足夠空間支付人事、租金和其他固定費用。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            三、用成本率反推售價
          </h2>

          <div className="mt-4 rounded-2xl border border-orange-100/80 bg-orange-50/50 p-5">
            <p className="font-bold text-stone-900">
              建議售價 = 總直接成本 ÷ 目標成本率
            </p>
            <p className="mt-3 font-bold text-stone-900">
              毛利率 = 100% − 成本率
            </p>
          </div>

          <p className="mt-4">
            如果總直接成本是 40 元，而你希望成本率控制在 40%，
            建議售價就是 40 ÷ 40% = 100 元。這代表每賣一份 100 元商品，
            直接成本 40 元，單品毛利 60 元，毛利率 60%。
          </p>

          <p className="mt-4">
            如果你希望毛利率更高，例如 65%，代表目標成本率是 35%，
            建議售價就會變成 40 ÷ 35% = 114.3 元。實際菜單上可以考慮定成 110 元或 115 元，
            再看顧客接受度和競爭店價格。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            四、不要直接用成本乘以二定價
          </h2>

          <p className="mt-4">
            「成本乘以二」等於成本率 50%、毛利率 50%。對某些品項可能可以，
            但對包材重、耗損高、外送占比高或租金人事壓力大的店，不一定夠。
          </p>

          <p className="mt-4">
            例如成本 40 元、售價 80 元，看起來毛利 40 元，毛利率 50%。
            但如果外送平台再抽 30%，平台費用是 24 元，抽成後毛利只剩 16 元。
            這種商品如果外送比例很高，就可能越賣越辛苦。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            五、定價要保留活動空間
          </h2>

          <p className="mt-4">
            如果你之後想做 9 折、套餐優惠、滿額加購或外送平台活動，定價時就要先保留空間。
            否則原價毛利剛好，活動一做下去就會壓縮到利潤。
          </p>

          <p className="mt-4">
            例如一份餐點原價 100 元、成本 40 元，毛利 60 元。
            如果做 85 折，售價變 85 元，毛利剩 45 元。活動看起來只折 15 元，
            但毛利其實從 60 元降到 45 元，少了 25%。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            六、用餐飲毛利率計算器快速試算
          </h2>

          <p className="mt-4">
            你可以使用本站的餐飲毛利率計算器，輸入商品售價、食材成本、包材成本、
            平台抽成與目標毛利率，快速看出目前售價是否合理，也可以反推建議售價。
          </p>

          <div className="mt-6">
            <TrackedLink
              href="/tools/restaurant-margin-calculator"
              eventName="click_article_cta"
              eventParams={{
                article_slug: "food-pricing-formula",
                destination: "/tools/restaurant-margin-calculator",
                tool_id: "restaurant_margin",
              }}
              className="inline-flex rounded-full bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
            >
              用餐飲毛利率計算器算售價與利潤
            </TrackedLink>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-900">
            七、常見問題
          </h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl border border-orange-100/80 bg-white/60 p-5">
              <h3 className="font-bold text-stone-900">Q1：小吃店毛利率應該抓多少？</h3>
              <p className="mt-2">
                沒有單一標準，要看品項、商圈、租金和人事結構。實務上可以先用不同毛利率情境試算，
                再確認售價是否符合顧客接受度。
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100/80 bg-white/60 p-5">
              <h3 className="font-bold text-stone-900">Q2：競爭店比較便宜，我還能照公式定價嗎？</h3>
              <p className="mt-2">
                公式是底線檢查，不是唯一答案。如果市場價格較低，可能要回頭調整份量、成本、菜單組合，
                而不是直接把價格壓到沒有毛利。
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100/80 bg-white/60 p-5">
              <h3 className="font-bold text-stone-900">Q3：內用和外帶要不同價格嗎？</h3>
              <p className="mt-2">
                可以考慮。外帶通常有包材成本，外送還有平台抽成。如果成本結構差很多，
                不同通路使用不同價格會比較合理。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-orange-100/80 bg-orange-50/50 p-5">
          <h2 className="text-2xl font-bold text-stone-900">本文重點整理</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>小吃店定價要先算完整直接成本，不能只看主食材。</li>
            <li>建議售價 = 總直接成本 ÷ 目標成本率。</li>
            <li>成本乘以二不一定夠，尤其是外送和活動占比高的店。</li>
            <li>定價時要預留折扣、加購和平台抽成空間。</li>
            <li>正式上架前，建議用不同售價和成本情境試算。</li>
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

export const foodPricingFormulaPost: BlogPost = {
  slug: "food-pricing-formula",
  title: "餐點售價怎麼算？小吃店用成本、毛利率反推售價",
  description:
    "用小吃店常見餐點為例，說明餐點售價怎麼算，如何整理食材成本、包材成本與目標毛利率，並用成本率反推合理售價。",
  keywords: [
    "餐飲毛利率計算器",
    "小吃店定價",
    "餐飲定價公式",
    "餐點售價怎麼算",
    "成本毛利售價",
    "餐飲毛利率",
    "菜單定價",
    "小吃店毛利",
  ],
  category: "餐飲定價與毛利",
  date: "2026 年 7 月 2 日",
  openGraphTitle: "餐點售價怎麼算？小吃店用成本、毛利率反推售價",
  openGraphDescription:
    "整理小吃店定價公式，教你用總直接成本、目標成本率與毛利率反推餐點售價。",
  relatedPostSlugs: [
    "restaurant-margin-how-to-calculate",
    "restaurant-food-cost-items",
    "menu-price-increase",
  ],
  Content: FoodPricingFormulaContent,
};
