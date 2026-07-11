# AdSense 安全版位預留設定

這份設定只預留低干擾廣告版位，不在輸入欄、計算按鈕、複製結果按鈕或導覽卡片旁邊放廣告，避免造成誤點或破壞工具體驗。

## 目前預留的位置

- 首頁：問題導向工具卡片後方。
- 工具總覽頁：問題導向工具卡片後方。
- 工具分類頁：分類工具列表後方。
- 工具頁：試算結果與判斷／公式說明後方，相關工具或延伸閱讀前方。
- 文章頁：文章正文結束後、相關文章前方。

## 啟用條件

目前版位預設不顯示空白廣告框。必須同時有：

```text
NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID=ca-pub-你的發布商ID
NEXT_PUBLIC_ADSENSE_SLOT_*=你的廣告單元slot ID
```

如果尚未建立廣告單元 slot ID，網站不會顯示空白廣告框，也不會影響使用者瀏覽。

## 建議的 Vercel 環境變數

```text
NEXT_PUBLIC_ADSENSE_SLOT_HOME_AFTER_INTENT=
NEXT_PUBLIC_ADSENSE_SLOT_TOOLS_INDEX_AFTER_INTENT=
NEXT_PUBLIC_ADSENSE_SLOT_CATEGORY_AFTER_TOOLS=
NEXT_PUBLIC_ADSENSE_SLOT_TOOL_AFTER_CONTENT=
NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE_BOTTOM=
```

初期可以先建立一個 responsive display ad unit，暫時共用同一組 slot ID；等流量變大後，再依首頁、工具頁、文章頁拆不同廣告單元追蹤成效。

## 本機或預覽環境顯示預留框

需要在未設定 slot ID 時看到版位位置，可以另外設定：

```text
NEXT_PUBLIC_ADSENSE_SHOW_PLACEHOLDERS=true
```

正式 Production 不建議開啟，避免使用者看到空的廣告預留框。

## 初期 AdSense 後台設定建議

- Auto ads 可以先開，但廣告數量設低。
- Anchor ads 先關。
- Vignette ads 先關。
- 先觀察工具頁使用體驗與 Core Web Vitals，再逐步增加密度。
