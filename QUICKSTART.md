# 🚀 快速開始指南

3 分鐘讓你的 DoGet 產品網站上線！

## 📦 第一步：安裝依賴

打開終端機，進入 landing_page 資料夾：

```bash
cd /Users/yujie1234/Desktop/flutter_mac_6/landing_page
npm install
```

等待安裝完成（約 1-2 分鐘）。

---

## 👀 第二步：本地預覽

```bash
npm run dev
```

終端會顯示：
```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

在瀏覽器打開 `http://localhost:5173/` 查看網站！

**提示**：修改代碼後會自動刷新，無需重啟伺服器。

---

## 🌐 第三步：部署上線

### 最簡單的方式（拖放上傳）

1. **構建網站**
   ```bash
   npm run build
   ```

   會生成 `dist/` 資料夾。

2. **上傳到 Cloudflare Pages**
   - 訪問：https://dash.cloudflare.com
   - 點擊 "Workers & Pages" → "Create application" → "Pages"
   - 選擇 "Upload assets"
   - 拖放整個 `dist/` 資料夾
   - 項目名稱填：`doget-landing`
   - 點擊 "Deploy site"

3. **完成！**
   約 1 分鐘後，你會獲得一個 `https://doget-landing.pages.dev` 網址。

### 推薦方式（自動部署）

如果你想要每次修改代碼後自動更新網站，請參考 [DEPLOYMENT.md](./DEPLOYMENT.md) 的「方法 1：GitHub 自動部署」。

---

## 🎨 第四步：自訂內容（可選）

### 修改文字內容

所有組件都在 `src/components/` 資料夾：

- `Hero.jsx` - 首頁大標題
- `Features.jsx` - 功能介紹
- `DoGetSection.jsx` - DoGet 配對說明
- `ChatSection.jsx` - 聊天功能說明
- `KTVSection.jsx` - KTV 社群說明
- `GameSection.jsx` - 遊戲化功能
- `DownloadCTA.jsx` - 下載按鈕區域
- `Footer.jsx` - 頁腳

直接編輯這些檔案中的文字即可。

### 修改顏色

編輯 `src/index.css`：

```css
:root {
  --primary-color: #6366f1;    /* 主色調 */
  --secondary-color: #ec4899;  /* 次要色 */
  --text-dark: #1f2937;        /* 深色文字 */
  --text-light: #6b7280;       /* 淺色文字 */
}
```

### 添加 App Store/Google Play 連結

編輯 `src/components/Hero.jsx` 和 `src/components/DownloadCTA.jsx`：

```jsx
<button
  onClick={() => window.open('你的App Store連結', '_blank')}
  style={{ /* ... */ }}
>
  App Store 下載
</button>
```

---

## 📱 響應式設計

網站已經完全響應式，支援：
- 💻 桌面電腦（1920px+）
- 💻 筆記本（1366px - 1920px）
- 📱 平板（768px - 1366px）
- 📱 手機（375px - 768px）

在開發時可以使用瀏覽器的開發者工具（F12）測試不同尺寸。

---

## 🎬 動畫效果

網站使用 Framer Motion 實現流暢動畫：

- 滾動淡入效果
- 視差背景
- 懸停放大
- 卡片堆疊動畫
- 旋轉和縮放

所有動畫都已優化，不會影響性能。

---

## 🔍 SEO 優化

已包含基本 SEO 設置，如需進一步優化：

編輯 `index.html`：

```html
<meta name="description" content="你的產品描述" />
<meta property="og:title" content="DoGet - 產品名稱" />
<meta property="og:description" content="產品描述" />
<meta property="og:image" content="產品圖片網址" />
<meta name="keywords" content="關鍵詞1, 關鍵詞2" />
```

---

## 📊 添加 Google Analytics

1. 獲取 GA4 測量 ID（G-XXXXXXXXXX）

2. 編輯 `index.html`，在 `</head>` 前添加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🆘 遇到問題？

### 開發伺服器啟動失敗

```bash
# 刪除 node_modules 重新安裝
rm -rf node_modules package-lock.json
npm install
```

### 構建失敗

```bash
# 檢查 Node.js 版本（需要 18+）
node -v

# 如果版本太舊，升級 Node.js
```

### 動畫不流暢

- 使用 Chrome/Edge/Firefox 最新版
- 確保硬體加速已啟用

### 部署後頁面空白

- 檢查瀏覽器控制台（F12）的錯誤訊息
- 確認 `dist/` 資料夾包含 `index.html` 和 `assets/` 資料夾

---

## 📚 更多資源

- **完整部署教學**：[DEPLOYMENT.md](./DEPLOYMENT.md)
- **項目說明**：[README.md](./README.md)
- **Vite 文檔**：https://vitejs.dev/
- **Framer Motion**：https://www.framer.com/motion/
- **Cloudflare Pages**：https://pages.cloudflare.com/

---

## ✅ 檢查清單

部署前確認：

- [ ] 本地開發正常（`npm run dev`）
- [ ] 構建成功（`npm run build`）
- [ ] 修改了文字內容
- [ ] 添加了 App Store/Play Store 連結（如有）
- [ ] 測試了手機版顯示效果
- [ ] 添加了 Google Analytics（可選）
- [ ] 準備好自訂域名（可選）

---

## 🎉 就是這麼簡單！

你的 DoGet 產品網站已經準備好推廣了！

**下一步**：
1. 分享網站連結到社交媒體
2. 添加到 App Store 描述中
3. 在產品內添加網站連結
4. SEO 優化（添加關鍵詞、描述）

祝推廣成功！🚀
