# AdSense 送審準備清單

最後更新：2026-07-11

## 已在程式中準備好的項目

- 全站可透過 `NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID` 掛載 Google AdSense 連線程式碼。
- `/ads.txt` 會在設定有效 AdSense client ID 後自動輸出 Google AdSense 授權列。
- 新增 `/advertising` 廣告與合作揭露頁。
- 隱私權政策已補強 Cookie、Google Analytics、Google AdSense 與第三方廣告服務說明。
- 使用條款已補強廣告與第三方內容責任說明。
- FAQ 已補充廣告不影響試算結果。
- footer 與 sitemap 已加入廣告揭露頁。

## 送審前要設定的 Vercel 環境變數

在 Vercel 專案設定新增：

```text
NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID=ca-pub-0000000000000000
```

請把 `ca-pub-0000000000000000` 換成 AdSense 後台提供給你的實際 publisher client ID。

設定後重新部署，再確認：

```text
https://shoptool.tw/ads.txt
```

應該輸出類似：

```text
google.com, pub-0000000000000000, DIRECT, f08c47fec0942fa0
```

## 不要手動亂加的項目

- 不要填假 publisher ID。
- 不要在還沒有實際 AdSense ID 前硬寫 ads.txt。
- 不要在審核前放大量空白廣告區塊。
- 不要為了審核大改工具頁內容或移除既有工具功能。

## 送審時建議確認

- `https://shoptool.tw/` 可正常開啟。
- `https://shoptool.tw/about` 可正常開啟。
- `https://shoptool.tw/contact` 可正常開啟。
- `https://shoptool.tw/privacy` 可正常開啟。
- `https://shoptool.tw/terms` 可正常開啟。
- `https://shoptool.tw/advertising` 可正常開啟。
- 主要工具頁可正常計算，不是空頁。
- sitemap 已在 Search Console 成功讀取。
