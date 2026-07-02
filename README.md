# 開店小工具箱

開店小工具箱是一個給餐飲店、小吃店、飲料店與準備開店者使用的免費營運試算工具網站。網站重點是讓小店老闆在定價、促銷、外送平台、開店預算、損益兩平與人事成本決策前，先用簡單數字把成本與毛利算清楚。

正式站台：<https://store-toolbox.vercel.app>

## 專案定位

- 以「工具」為主，不是純部落格網站。
- 以餐飲與小店經營者為主要使用者。
- 前台為靜態網站，無會員、無資料庫、無後端 API。
- 試算數字只在瀏覽器端即時計算，不送到伺服器儲存。
- 文章內容用來支援工具頁的 SEO 與使用情境說明。

## 技術架構

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS
- Static / SSG pages
- Google Analytics 4
- Google Search Console verification
- Vercel 部署

## 常用指令

```bash
npm run lint
npx tsc --noEmit
NEXT_TELEMETRY_DISABLED=1 npm run build
```

本專案不需要資料庫、不需要登入，也不需要額外後端服務即可部署。

## 全站頁面清單

### 主要入口

| 頁面 | 路徑 | 用途 |
| --- | --- | --- |
| 首頁 | `/` | 網站定位、工具分類、主要工具與最新文章入口 |
| 工具總覽 | `/tools` | 依分類列出全部 8 個工具 |
| 餐飲文章 | `/blog` | 13 篇餐飲經營與工具教學文章列表 |
| 關於本站 | `/about` | 說明網站定位、適用對象與免責提醒 |
| 常見問題 | `/faq` | 回答試算工具、資料儲存、免費使用等問題 |
| 聯絡我們 | `/contact` | 工具建議、錯誤回報、合作需求聯絡入口 |
| 隱私權政策 | `/privacy` | 隱私權與資料使用說明 |
| 使用條款 | `/terms` | 使用條款與免責聲明 |
| 404 | `app/not-found.tsx` | 使用者輸入不存在網址時導回主要入口 |

### 工具分類頁

| 分類 | 路徑 | 說明 |
| --- | --- | --- |
| 單品定價 | `/tools/pricing` | 商品售價、毛利率、成本上漲與漲價試算 |
| 活動促銷 | `/tools/promotion` | 滿額加購與折扣活動損益試算 |
| 通路成本 | `/tools/channel-cost` | 外送平台抽成、包材與平台售價試算 |
| 整店經營 | `/tools/store-operations` | 開店成本、損益兩平與人事成本占比試算 |

## 8 個工具清單

| 工具 | 路徑 | 分類 | GA4 tool_id |
| --- | --- | --- | --- |
| 滿額加購活動計算器 | `/tools/add-on-promotion-calculator` | 活動促銷 | `add_on_promotion` |
| 餐飲毛利率計算器 | `/tools/restaurant-margin-calculator` | 單品定價 | `restaurant_margin` |
| 折扣活動損益計算器 | `/tools/discount-profit-calculator` | 活動促銷 | `discount_profit` |
| 菜單漲價試算器 | `/tools/menu-price-increase-calculator` | 單品定價 | `menu_price_increase` |
| 外送平台抽成試算器 | `/tools/food-delivery-fee-calculator` | 通路成本 | `food_delivery_fee` |
| 開店損益兩平試算器 | `/tools/break-even-calculator` | 整店經營 | `break_even` |
| 開店成本試算器 | `/tools/startup-cost-calculator` | 整店經營 | `startup_cost` |
| 人事成本占比試算器 | `/tools/labor-cost-ratio-calculator` | 整店經營 | `labor_cost_ratio` |

每個工具目前具備：

- 即時計算
- 套用範例數字
- 清除重填
- 目前試算假設摘要
- 複製試算結果
- 複製分享連結
- 分享連結回訪自動還原欄位
- GA4 事件追蹤
- FAQ 與結構化資料

## 13 篇文章清單

| 文章 | 路徑 |
| --- | --- |
| 滿 150 元加購 40 元划算嗎？餐飲店滿額加購活動怎麼算 | `/blog/add-on-promotion-example` |
| 餐飲毛利率怎麼算？小吃店、飲料店定價前一定要看的毛利公式 | `/blog/restaurant-margin-how-to-calculate` |
| 折扣活動怎麼算才不會虧？餐飲店打折促銷前要先算這幾個數字 | `/blog/discount-promotion-profit` |
| 小吃店定價怎麼算？用成本、毛利率反推售價 | `/blog/food-pricing-formula` |
| 飲料店毛利怎麼算？原物料、杯材、平台抽成要一起看 | `/blog/drink-shop-margin` |
| 滿額折扣和滿額加購哪個比較划算？餐飲促銷活動比較 | `/blog/add-on-vs-discount-promotion` |
| 外送平台抽成怎麼算？餐飲店上架外送前要先知道的成本 | `/blog/food-delivery-platform-fee` |
| 餐飲店活動成本怎麼抓？折扣、加購、贈品活動試算方式 | `/blog/restaurant-promotion-cost` |
| 餐點成本包含哪些？食材、包材、人力和平台費用怎麼估 | `/blog/restaurant-food-cost-items` |
| 餐飲店毛利率多少才合理？不同品項毛利率怎麼看 | `/blog/restaurant-margin-benchmark` |
| 菜單漲價怎麼算？漲價幅度、客單價和毛利率試算 | `/blog/menu-price-increase` |
| 小吃店促銷活動怎麼設計？避免越賣越虧的 5 個檢查點 | `/blog/restaurant-promotion-checklist` |
| 餐飲店客單價怎麼提高？加購、套餐、滿額活動比較 | `/blog/increase-average-order-value` |

## GA4 設定

Measurement ID：`G-EQXRCDDHPT`

### 目前自訂事件

| 事件名稱 | 觸發時機 | 主要參數 |
| --- | --- | --- |
| `select_tool` | 使用者點擊工具卡片或工具入口 | `tool_id`, `tool_name`, `link_location` |
| `click_nav` | 使用者點擊主要導覽或 CTA 連結 | `nav_item`, `destination` |
| `click_article_cta` | 使用者從文章 CTA 點到工具 | `article_slug`, `destination`, `tool_id` |
| `use_calculator` | 使用者首次變更某個工具欄位 | `tool_id`, `field_name` |
| `copy_calculator_result` | 使用者複製試算報告 | `tool_id` |
| `copy_calculator_link` | 使用者複製分享連結 | `tool_id` |
| `apply_example_values` | 使用者套用範例數字 | `tool_id` |
| `reset_calculator` | 使用者清除重填 | `tool_id` |

### 建議在 GA4 建立的自訂維度

- `tool_id`
- `tool_name`
- `field_name`
- `article_slug`
- `nav_item`
- `destination`
- `link_location`

## SEO 與站台資產

目前已具備：

- Google Search Console verification meta
- `app/sitemap.ts` 產生 `/sitemap.xml`
- `app/robots.ts` 產生 `/robots.txt`
- 全站 canonical URL
- Open Graph metadata
- Twitter card metadata
- `public/og-image.png`
- favicon / app icon / apple icon
- `app/manifest.ts` 產生 `/manifest.webmanifest`
- BreadcrumbList / CollectionPage / WebApplication / FAQPage / ContactPage 等結構化資料

## 部署後快速檢查

部署到 Vercel 後，建議至少檢查：

```text
https://store-toolbox.vercel.app/
https://store-toolbox.vercel.app/tools
https://store-toolbox.vercel.app/blog
https://store-toolbox.vercel.app/faq
https://store-toolbox.vercel.app/contact
https://store-toolbox.vercel.app/sitemap.xml
https://store-toolbox.vercel.app/robots.txt
https://store-toolbox.vercel.app/manifest.webmanifest
```

也建議抽測 2～3 個工具頁：

- 套用範例數字
- 清除重填
- 複製試算結果
- 複製分享連結
- 使用分享連結回訪還原欄位

更完整的部署後檢查清單請看：[`docs/qa-checklist.md`](docs/qa-checklist.md)。

## 專案文件

- [`CHANGELOG.md`](CHANGELOG.md)：版本與第一階段完成紀錄
- [`docs/qa-checklist.md`](docs/qa-checklist.md)：部署後 QA、GA4、Search Console 與分享預覽檢查
- [`docs/site-map-inventory.md`](docs/site-map-inventory.md)：全站頁面盤點與 SEO 狀態

## 維護原則

- 優先維持靜態網站架構，不急著加入登入、資料庫或後端 API。
- 新增工具前，先確認是否能補足小店老闆明確需求。
- 修改工具公式時，必須同步檢查複製報告、分享連結參數、假設摘要與 FAQ。
- 新增頁面時，必須同步更新 sitemap、metadata、canonical、OG 與相關結構化資料。
- 新增 GA4 事件時，需同時更新 README 與 GA4 自訂維度紀錄。
