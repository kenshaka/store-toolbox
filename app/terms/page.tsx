import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "使用條款",
  description:
    "開店小工具箱的使用條款，說明本網站服務內容、試算工具限制、免責聲明、智慧財產權與使用者責任。",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
          <p className="text-sm font-semibold text-orange-700">
            Terms of Use
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            使用條款
          </h1>

          <p className="mt-4 text-sm text-stone-500">
            最後更新日期：2026 年 7 月 1 日
          </p>

          <div className="mt-8 space-y-8 leading-8 text-stone-700">
            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                一、接受條款
              </h2>
              <p className="mt-3">
                歡迎使用開店小工具箱。當你瀏覽、使用本網站或使用本網站提供的任何試算工具時，
                即表示你已閱讀、理解並同意遵守本使用條款。若你不同意本條款內容，
                請停止使用本網站。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                二、服務內容
              </h2>
              <p className="mt-3">
                開店小工具箱提供餐飲店、小吃店、飲料店與商店經營者使用的線上試算工具與相關內容，
                包含但不限於滿額加購活動計算器、商品毛利率計算器、折扣活動試算工具、
                經營教學文章與活動試算範例。
              </p>
              <p className="mt-3">
                本網站提供的內容主要用於一般資訊參考與初步試算，並不構成會計、稅務、法律、
                投資、財務顧問或其他專業意見。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                三、試算結果僅供參考
              </h2>
              <p className="mt-3">
                本網站的計算結果是根據使用者自行輸入的數字與網站設定的公式產生。
                實際經營結果可能受到商品成本、原物料價格、租金、人事、水電、設備折舊、
                稅務、平台抽成、客流量、季節、行銷成效與其他因素影響。
              </p>
              <p className="mt-3">
                使用者應自行判斷試算結果是否適用於自身情況，並在必要時諮詢會計師、稅務人員、
                法律顧問或其他專業人士。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                四、使用者責任
              </h2>
              <p className="mt-3">
                使用者應自行確認輸入資料的正確性，並自行承擔依據本網站內容或試算結果所做決策的風險。
                使用者不得以任何非法、侵害他人權利、破壞網站安全或影響網站正常運作的方式使用本網站。
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>不得嘗試干擾、攻擊、入侵或破壞本網站系統。</li>
                <li>不得使用自動化方式大量請求、爬取或造成網站異常負載。</li>
                <li>不得將本網站內容用於違法、詐欺、誤導或侵害他人權益的用途。</li>
                <li>不得冒用本網站名義對外提供服務、收費或做出保證。</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                五、智慧財產權
              </h2>
              <p className="mt-3">
                本網站中的文字、頁面設計、工具架構、程式碼、圖像、品牌名稱、排版與其他內容，
                除另有標示外，均由本網站或相關權利人擁有。未經授權，使用者不得擅自重製、
                修改、散布、公開展示、公開傳輸、販售或用於商業用途。
              </p>
              <p className="mt-3">
                使用者可以分享本網站頁面連結，或在合理範圍內引用本網站內容並標示來源，
                但不得以造成混淆、誤導或侵害本網站權益的方式使用。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                六、第三方連結與服務
              </h2>
              <p className="mt-3">
                本網站可能包含第三方網站、工具、廣告、分析服務或外部資源連結。
                這些第三方內容與服務並非由本網站完全控制，其可用性、準確性、安全性、
                隱私權政策與使用條款，應以各第三方服務提供者的規定為準。
              </p>
              <p className="mt-3">
                使用者點擊第三方連結或使用第三方服務所產生的任何風險，
                應由使用者自行判斷與承擔。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                七、廣告與商業內容
              </h2>
              <p className="mt-3">
                本網站未來可能顯示廣告、聯盟連結、推薦內容或其他商業合作資訊。
                這些內容可能由第三方服務提供，並可能根據使用者瀏覽情況或網站內容顯示。
              </p>
              <p className="mt-3">
                本網站會盡力維持內容的清楚與適當標示，但使用者仍應自行判斷廣告或第三方商品、
                服務是否符合自身需求。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                八、服務變更或中止
              </h2>
              <p className="mt-3">
                本網站可能因功能調整、維護、技術問題、成本考量或其他營運需求，
                隨時新增、修改、暫停或終止部分或全部服務。網站內容、工具公式、
                頁面設計與功能也可能不定期更新。
              </p>
              <p className="mt-3">
                本網站不保證服務永遠不中斷、無錯誤、完全安全或符合所有使用者的特定需求。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                九、責任限制
              </h2>
              <p className="mt-3">
                在法律允許的最大範圍內，因使用或無法使用本網站、本網站內容、
                試算工具、第三方連結或廣告內容所產生的任何直接、間接、附帶、
                特殊、衍生性損害或營業損失，本網站不負賠償責任。
              </p>
              <p className="mt-3">
                使用者應自行備份重要資料，並自行確認任何商業決策、定價決策、
                活動決策或財務判斷的合理性。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                十、條款修改
              </h2>
              <p className="mt-3">
                本網站可能依營運需求、功能變更、第三方服務調整或法規要求，
                不定期修改本使用條款。修改後的條款將公布於本頁面，並更新最後更新日期。
                使用者於條款更新後繼續使用本網站，即表示同意更新後的條款。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                十一、準據法與管轄
              </h2>
              <p className="mt-3">
                本條款之解釋與適用，以中華民國法律為準據法。若因本網站或本條款產生爭議，
                雙方應先以誠信方式協商解決；若需進行訴訟，除法律另有強制規定外，
                以臺灣臺北地方法院為第一審管轄法院。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900">
                十二、聯絡方式
              </h2>
              <p className="mt-3">
                如果你對本使用條款、網站內容或服務有任何問題，請透過本網站日後公布的聯絡方式與我們聯繫。
              </p>
            </section>

            <div className="rounded-2xl bg-stone-100 p-5 text-sm leading-7 text-stone-600">
              <p>
                提醒：本頁內容為一般網站使用條款範本，並非法律意見。
                若網站未來加入會員、付款、上傳檔案、使用者投稿、電子報、廣告投放、
                聯盟行銷或跨境服務，建議依實際功能重新調整條款內容。
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}