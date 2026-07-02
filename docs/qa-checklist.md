# 開店小工具箱｜部署後 QA 檢查清單

這份清單用於每次 Vercel 部署後，快速確認網站功能、SEO、GA4 與分享預覽是否正常。

## 1. 部署前本機檢查

```bash
npm run lint
npx tsc --noEmit
NEXT_TELEMETRY_DISABLED=1 npm run build
```

三個指令都通過後再部署。

## 2. 核心頁面檢查

部署後先確認以下頁面能正常開啟：

- [ ] `/`
- [ ] `/tools`
- [ ] `/tools/pricing`
- [ ] `/tools/promotion`
- [ ] `/tools/channel-cost`
- [ ] `/tools/store-operations`
- [ ] `/blog`
- [ ] `/faq`
- [ ] `/contact`
- [ ] `/about`
- [ ] `/privacy`
- [ ] `/terms`
- [ ] 隨機不存在網址，例如 `/not-real-page`

## 3. 8 個工具頁功能檢查

至少抽測 2～3 個工具；大型改版後建議 8 個都測。

每個工具檢查：

- [ ] 頁面可開啟
- [ ] 預設數字顯示正常
- [ ] 手動修改欄位後結果即時更新
- [ ] 「套用範例數字」正常
- [ ] 「清除重填」會把欄位歸零
- [ ] 清除重填會清掉網址 query 參數
- [ ] 「目前試算假設」內容符合目前欄位
- [ ] 「複製試算結果」可複製完整報告
- [ ] 「複製分享連結」可複製含參數網址
- [ ] 用無痕視窗打開分享連結後，欄位會自動還原
- [ ] 手機版數字鍵盤體驗正常

建議抽測工具：

- [ ] `/tools/restaurant-margin-calculator`
- [ ] `/tools/add-on-promotion-calculator`
- [ ] `/tools/break-even-calculator`
- [ ] `/tools/food-delivery-fee-calculator`

## 4. 導覽與站內連結檢查

Header：

- [ ] 工具
- [ ] 文章
- [ ] 常見問題
- [ ] 關於

Footer：

- [ ] 工具總覽
- [ ] 餐飲文章
- [ ] 關於本站
- [ ] 常見問題
- [ ] 聯絡我們
- [ ] 隱私權政策
- [ ] 使用條款

首頁：

- [ ] 工具分類入口可點擊
- [ ] 工具卡片可點擊
- [ ] 最新文章可點擊
- [ ] FAQ / 工具總覽導流合理、不重複過度

`/tools`：

- [ ] 四個分類區塊清楚
- [ ] 每個分類可進分類頁
- [ ] 每個工具可進工具頁

文章頁：

- [ ] 文章 CTA 可導到正確工具
- [ ] 延伸閱讀可點擊
- [ ] 返回文章列表可點擊

## 5. SEO 技術檢查

### Sitemap / Robots / Manifest

確認以下網址可開啟：

- [ ] `/sitemap.xml`
- [ ] `/robots.txt`
- [ ] `/manifest.webmanifest`
- [ ] `/favicon.ico`
- [ ] `/icon.png`
- [ ] `/apple-icon.png`
- [ ] `/og-image.png`

`robots.txt` 應允許爬取，且包含 sitemap 位置。

`sitemap.xml` 應包含：

- [ ] 首頁
- [ ] `/tools`
- [ ] 4 個工具分類頁
- [ ] 8 個工具頁
- [ ] `/blog`
- [ ] 13 篇文章頁
- [ ] `/about`
- [ ] `/faq`
- [ ] `/contact`
- [ ] `/privacy`
- [ ] `/terms`

### Metadata / Canonical / OG

抽測以下頁面檢視原始碼：

- [ ] `/`
- [ ] `/tools`
- [ ] `/tools/pricing`
- [ ] `/tools/restaurant-margin-calculator`
- [ ] `/blog/menu-price-increase`
- [ ] `/faq`
- [ ] `/contact`

檢查：

- [ ] `<title>` 合理
- [ ] description 合理
- [ ] `rel="canonical"` 指向正式網址
- [ ] `og:title` 存在
- [ ] `og:description` 存在
- [ ] `og:image` 指向 `/og-image.png`
- [ ] `og:url` 對應目前頁面

## 6. Google Search Console 檢查

部署後可檢查：

- [ ] Sitemap 是否成功讀取
- [ ] 首頁 URL inspection 是否在 Google 服務中
- [ ] `/tools` 即時測試是否通過
- [ ] 任一工具頁即時測試是否通過
- [ ] 任一文章頁即時測試是否通過
- [ ] robots 未封鎖頁面

若 `/sitemap.xml` 本身顯示未編入索引，不代表錯誤；sitemap 是給 Google 讀取網址清單，不是一般搜尋結果頁。

## 7. GA4 檢查

### Realtime / DebugView

測試以下互動後，確認 GA4 能看到事件：

- [ ] 點首頁工具卡片 → `select_tool`
- [ ] 點 header / footer 導覽 → `click_nav`
- [ ] 修改工具欄位 → `use_calculator`
- [ ] 套用範例數字 → `apply_example_values`
- [ ] 清除重填 → `reset_calculator`
- [ ] 複製試算結果 → `copy_calculator_result`
- [ ] 複製分享連結 → `copy_calculator_link`
- [ ] 文章 CTA 點到工具 → `click_article_cta`

### GA4 自訂維度

確認已建立或仍在等待生效：

- [ ] `tool_id`
- [ ] `tool_name`
- [ ] `field_name`
- [ ] `article_slug`
- [ ] `nav_item`
- [ ] `destination`
- [ ] `link_location`

自訂維度建立後通常需要等待一段時間才會在探索報表可用。

## 8. 分享預覽檢查

建議用 LINE、Threads、Facebook 或其他訊息工具貼上：

- [ ] `https://store-toolbox.vercel.app/`
- [ ] 任一工具頁
- [ ] 任一文章頁

檢查：

- [ ] 標題合理
- [ ] 描述合理
- [ ] 預覽圖顯示為 Open Graph 圖
- [ ] 連結點擊後進入正確頁面

若預覽沒有立即更新，通常是平台快取問題，可以稍後再測或換另一個 URL 測。

## 9. 手機版檢查

至少用手機或瀏覽器裝置模擬檢查：

- [ ] 首頁沒有水平捲動
- [ ] Header 不擠壓
- [ ] 工具表單欄位易點擊
- [ ] 結果區不超出螢幕
- [ ] 按鈕間距足夠
- [ ] 文章頁段落閱讀舒適
- [ ] Footer 連結可點擊
- [ ] iPhone Safari 可加入主畫面
- [ ] Android Chrome 可加入主畫面

## 10. 發現問題時的處理原則

- 先判斷是內容、樣式、功能、SEO 還是追蹤問題。
- 能小修就不要大改。
- 不為了解決單一問題新增套件。
- 不碰不相關功能。
- 修改後重新跑 lint、TypeScript、build。
- 修改功能時，同步檢查 README / CHANGELOG / QA 文件是否要更新。
