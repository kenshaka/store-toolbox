# 開店小工具箱｜全站頁面盤點

正式站台：<https://store-toolbox.vercel.app>

此文件用來盤點第一階段頁面、用途與 SEO 狀態。若未來新增工具、文章或頁面，請同步更新此文件與 `app/sitemap.ts`。

## 狀態說明

- Sitemap：是否應出現在 `/sitemap.xml`。
- Metadata：是否應有 title / description / keywords 等 metadata。
- Canonical：是否應有 `alternates.canonical`。
- OG：是否應有 Open Graph metadata。
- 結構化資料：是否應注入 JSON-LD。

## 主要頁面

| 頁面 | 路徑 | 用途 | Sitemap | Metadata | Canonical | OG | 結構化資料 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 首頁 | `/` | 網站定位、工具分類、主要工具與文章入口 | 是 | 是 | 是 | 是 | WebSite / Organization |
| 工具總覽 | `/tools` | 依分類列出所有工具 | 是 | 是 | 是 | 是 | BreadcrumbList / CollectionPage |
| 餐飲文章 | `/blog` | 文章列表與內容入口 | 是 | 是 | 是 | 是 | BreadcrumbList / CollectionPage |
| 關於本站 | `/about` | 網站定位、適用對象、使用提醒 | 是 | 是 | 是 | 是 | BreadcrumbList / AboutPage |
| 常見問題 | `/faq` | 工具與網站使用 FAQ | 是 | 是 | 是 | 是 | BreadcrumbList / FAQPage |
| 聯絡我們 | `/contact` | 工具建議、錯誤回報、合作聯絡 | 是 | 是 | 是 | 是 | BreadcrumbList / ContactPage |
| 隱私權政策 | `/privacy` | 隱私權與資料使用說明 | 是 | 是 | 是 | 是 | 無或一般 WebPage |
| 使用條款 | `/terms` | 使用條款與免責說明 | 是 | 是 | 是 | 是 | 無或一般 WebPage |
| 404 | `app/not-found.tsx` | 錯誤網址導回主要入口 | 否 | 由框架處理 | 不適用 | 不適用 | 不適用 |

## 工具分類頁

| 分類 | 路徑 | 用途 | Sitemap | Metadata | Canonical | OG | 結構化資料 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 單品定價 | `/tools/pricing` | 商品定價、毛利、漲價相關工具集合 | 是 | 是 | 是 | 是 | BreadcrumbList / CollectionPage / FAQPage |
| 活動促銷 | `/tools/promotion` | 滿額加購、折扣活動相關工具集合 | 是 | 是 | 是 | 是 | BreadcrumbList / CollectionPage / FAQPage |
| 通路成本 | `/tools/channel-cost` | 外送平台抽成與通路成本相關工具集合 | 是 | 是 | 是 | 是 | BreadcrumbList / CollectionPage / FAQPage |
| 整店經營 | `/tools/store-operations` | 開店成本、損益兩平、人事成本相關工具集合 | 是 | 是 | 是 | 是 | BreadcrumbList / CollectionPage / FAQPage |

## 8 個工具頁

| 工具 | 路徑 | 分類 | Sitemap | Metadata | Canonical | OG | 結構化資料 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 滿額加購活動計算器 | `/tools/add-on-promotion-calculator` | 活動促銷 | 是 | 是 | 是 | 是 | BreadcrumbList / WebApplication / FAQPage |
| 餐飲毛利率計算器 | `/tools/restaurant-margin-calculator` | 單品定價 | 是 | 是 | 是 | 是 | BreadcrumbList / WebApplication / FAQPage |
| 折扣活動損益計算器 | `/tools/discount-profit-calculator` | 活動促銷 | 是 | 是 | 是 | 是 | BreadcrumbList / WebApplication / FAQPage |
| 菜單漲價試算器 | `/tools/menu-price-increase-calculator` | 單品定價 | 是 | 是 | 是 | 是 | BreadcrumbList / WebApplication / FAQPage |
| 外送平台抽成試算器 | `/tools/food-delivery-fee-calculator` | 通路成本 | 是 | 是 | 是 | 是 | BreadcrumbList / WebApplication / FAQPage |
| 開店損益兩平試算器 | `/tools/break-even-calculator` | 整店經營 | 是 | 是 | 是 | 是 | BreadcrumbList / WebApplication / FAQPage |
| 開店成本試算器 | `/tools/startup-cost-calculator` | 整店經營 | 是 | 是 | 是 | 是 | BreadcrumbList / WebApplication / FAQPage |
| 人事成本占比試算器 | `/tools/labor-cost-ratio-calculator` | 整店經營 | 是 | 是 | 是 | 是 | BreadcrumbList / WebApplication / FAQPage |

## 13 篇文章頁

| 文章 | 路徑 | Sitemap | Metadata | Canonical | OG | 結構化資料 |
| --- | --- | --- | --- | --- | --- | --- |
| 滿 150 元加購 40 元划算嗎？餐飲店滿額加購活動怎麼算 | `/blog/add-on-promotion-example` | 是 | 是 | 是 | 是 | BreadcrumbList / BlogPosting |
| 餐飲毛利率怎麼算？小吃店、飲料店定價前一定要看的毛利公式 | `/blog/restaurant-margin-how-to-calculate` | 是 | 是 | 是 | 是 | BreadcrumbList / BlogPosting |
| 折扣活動怎麼算才不會虧？餐飲店打折促銷前要先算這幾個數字 | `/blog/discount-promotion-profit` | 是 | 是 | 是 | 是 | BreadcrumbList / BlogPosting |
| 小吃店定價怎麼算？用成本、毛利率反推售價 | `/blog/food-pricing-formula` | 是 | 是 | 是 | 是 | BreadcrumbList / BlogPosting |
| 飲料店毛利怎麼算？原物料、杯材、平台抽成要一起看 | `/blog/drink-shop-margin` | 是 | 是 | 是 | 是 | BreadcrumbList / BlogPosting |
| 滿額折扣和滿額加購哪個比較划算？餐飲促銷活動比較 | `/blog/add-on-vs-discount-promotion` | 是 | 是 | 是 | 是 | BreadcrumbList / BlogPosting |
| 外送平台抽成怎麼算？餐飲店上架外送前要先知道的成本 | `/blog/food-delivery-platform-fee` | 是 | 是 | 是 | 是 | BreadcrumbList / BlogPosting |
| 餐飲店活動成本怎麼抓？折扣、加購、贈品活動試算方式 | `/blog/restaurant-promotion-cost` | 是 | 是 | 是 | 是 | BreadcrumbList / BlogPosting |
| 餐點成本包含哪些？食材、包材、人力和平台費用怎麼估 | `/blog/restaurant-food-cost-items` | 是 | 是 | 是 | 是 | BreadcrumbList / BlogPosting |
| 餐飲店毛利率多少才合理？不同品項毛利率怎麼看 | `/blog/restaurant-margin-benchmark` | 是 | 是 | 是 | 是 | BreadcrumbList / BlogPosting |
| 菜單漲價怎麼算？漲價幅度、客單價和毛利率試算 | `/blog/menu-price-increase` | 是 | 是 | 是 | 是 | BreadcrumbList / BlogPosting |
| 小吃店促銷活動怎麼設計？避免越賣越虧的 5 個檢查點 | `/blog/restaurant-promotion-checklist` | 是 | 是 | 是 | 是 | BreadcrumbList / BlogPosting |
| 餐飲店客單價怎麼提高？加購、套餐、滿額活動比較 | `/blog/increase-average-order-value` | 是 | 是 | 是 | 是 | BreadcrumbList / BlogPosting |

## 系統產生或靜態資產路徑

| 路徑 | 用途 | 檢查方式 |
| --- | --- | --- |
| `/sitemap.xml` | 提供搜尋引擎網址清單 | 瀏覽器可開啟，Search Console 可提交 |
| `/robots.txt` | 告知搜尋引擎允許爬取與 sitemap 位置 | 瀏覽器可開啟，不能阻擋正式頁面 |
| `/manifest.webmanifest` | 手機加入主畫面與 PWA 基本資訊 | 瀏覽器可開啟 JSON |
| `/favicon.ico` | 瀏覽器分頁 icon | 瀏覽器可開啟 |
| `/icon.png` | 512x512 app icon | 瀏覽器可開啟 |
| `/apple-icon.png` | iOS 主畫面 icon | 瀏覽器可開啟 |
| `/og-image.png` | 社群分享預覽圖 | 瀏覽器可開啟，分享預覽可顯示 |

## 新增頁面時的同步清單

未來新增任何正式頁面時，請同步確認：

- [ ] 是否需要加入 `app/sitemap.ts`
- [ ] 是否需要 metadata title / description / keywords
- [ ] 是否需要 `alternates.canonical`
- [ ] 是否需要 Open Graph / Twitter metadata
- [ ] 是否需要 JSON-LD 結構化資料
- [ ] 是否需要 header / footer / 首頁 / 分類頁導流
- [ ] 是否需要 GA4 事件
- [ ] 是否需要更新 README / CHANGELOG / 本頁面盤點

## 新增工具時的同步清單

未來新增工具時，請同步確認：

- [ ] `lib/tools.ts` 工具資料
- [ ] 對應工具頁與 layout metadata
- [ ] 工具分類頁是否顯示該工具
- [ ] `/tools` 是否顯示該工具
- [ ] sitemap 是否包含該工具頁
- [ ] 工具頁是否有 FAQ 結構化資料
- [ ] 是否有 `tool_id`
- [ ] `use_calculator` 欄位追蹤是否合理
- [ ] 套用範例、清除重填、複製報告、分享連結是否完整
- [ ] README / CHANGELOG / QA 文件是否更新
