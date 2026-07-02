# Changelog

## 2026-07-02｜第一階段封版

第一階段目標：建立一個可公開使用、可追蹤、可被搜尋引擎理解、且維護成本低的餐飲小店試算工具網站。

### 網站架構

- 完成首頁 `/`。
- 完成工具總覽 `/tools`。
- 完成 4 個工具分類頁：
  - `/tools/pricing`
  - `/tools/promotion`
  - `/tools/channel-cost`
  - `/tools/store-operations`
- 完成文章列表 `/blog`。
- 完成 13 篇文章頁。
- 完成 `/about`、`/faq`、`/contact`、`/privacy`、`/terms`。
- 完成自訂 404 頁面。
- 完成 header / footer 主入口收斂。

### 工具功能

完成 8 個第一階段工具：

- 滿額加購活動計算器
- 餐飲毛利率計算器
- 折扣活動損益計算器
- 菜單漲價試算器
- 外送平台抽成試算器
- 開店損益兩平試算器
- 開店成本試算器
- 人事成本占比試算器

每個工具具備：

- 即時計算
- 結果判斷與建議
- 套用範例數字
- 清除重填
- 目前試算假設摘要
- 複製試算結果
- 複製分享連結
- 分享連結回訪還原欄位
- 手機輸入體驗優化
- GA4 事件追蹤

### 文章內容

完成 13 篇支援工具情境的餐飲經營文章：

- 滿額加購活動
- 餐飲毛利率
- 折扣活動損益
- 小吃店定價
- 飲料店毛利
- 滿額折扣與滿額加購比較
- 外送平台抽成
- 活動成本
- 餐點成本項目
- 毛利率基準
- 菜單漲價
- 促銷活動檢查
- 提高客單價

### SEO 與搜尋引擎設定

- 完成 Google Search Console verification meta。
- 完成 sitemap：`/sitemap.xml`。
- 完成 robots：`/robots.txt`。
- 補齊主要頁面 canonical URL。
- 補齊主要頁面 Open Graph metadata。
- 補齊 Twitter card metadata。
- 新增 Open Graph 預覽圖：`/og-image.png`。
- 新增 favicon / app icon / apple icon。
- 新增 manifest：`/manifest.webmanifest`。
- 補齊主要頁面結構化資料：
  - WebSite
  - Organization
  - BreadcrumbList
  - CollectionPage
  - WebApplication
  - FAQPage
  - ContactPage
  - BlogPosting

### GA4 追蹤

完成 GA4 事件追蹤：

- `select_tool`
- `click_nav`
- `click_article_cta`
- `use_calculator`
- `copy_calculator_result`
- `copy_calculator_link`
- `apply_example_values`
- `reset_calculator`

並規劃自訂維度：

- `tool_id`
- `tool_name`
- `field_name`
- `article_slug`
- `nav_item`
- `destination`
- `link_location`

### 品質收斂

- 收斂首頁重複分類導流。
- 簡化 header，避免塞入 8 個單一工具造成導覽過長。
- 補強 footer 主入口一致性。
- 更新隱私權政策與使用條款中過時的工具描述。
- 將 blog 首頁底部 CTA 改為導向工具總覽，避免過度偏向單一工具。
- 修正工具頁 breadcrumb 結構化資料，使工具頁能連到工具總覽與工具分類。

### 第一階段不包含

目前刻意不加入：

- 會員登入
- 後端資料庫
- 試算紀錄儲存
- PDF 匯出
- 後台管理
- 付費功能
- 聯絡表單後端
- 工具搜尋
- 額外新工具

原因：目前網站以靜態工具平台為核心，先觀察 GA4 與 Search Console 數據，再決定第二階段方向。
