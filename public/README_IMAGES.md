# 圖片檔案放置指南

## 📁 資料夾結構

將以下圖片檔案放入 `landing_page/public/` 資料夾：

```
landing_page/public/
├── logo.png              ← 主要 Logo（建議 PNG 透明背景）
├── logo.svg              ← 或使用 SVG 格式（可選）
├── favicon.ico           ← 瀏覽器標籤頁圖示
├── favicon-16x16.png     ← 小尺寸 favicon
├── favicon-32x32.png     ← 中尺寸 favicon
└── apple-touch-icon.png  ← iOS 主畫面圖示
```

## 🎨 圖片規格要求

### 1. Logo 圖片（logo.png 或 logo.svg）
- **格式**: PNG（透明背景）或 SVG
- **建議尺寸**: 寬度 150-200px，高度 40-50px
- **顯示高度**: 在網頁上會自動縮放到 40px 高
- **背景**: 透明背景最佳
- **顏色**: 建議使用白色或淺色 Logo（因為黑色背景）

### 2. Favicon（瀏覽器標籤頁圖示）

#### favicon.ico
- **格式**: ICO 檔案
- **尺寸**: 包含 16x16 和 32x32 兩個尺寸
- **工具**: 可使用線上工具轉換：
  - https://www.favicon-generator.org/
  - https://favicon.io/

#### favicon-16x16.png
- **格式**: PNG
- **尺寸**: 16x16 像素
- **用途**: 標準瀏覽器標籤頁

#### favicon-32x32.png
- **格式**: PNG
- **尺寸**: 32x32 像素
- **用途**: 高解析度顯示器

#### apple-touch-icon.png
- **格式**: PNG
- **尺寸**: 180x180 像素
- **用途**: iOS 裝置添加到主畫面時的圖示

## 🔧 如何啟用圖片

### 步驟 1: 準備並放置圖片
將所有圖片檔案複製到 `landing_page/public/` 資料夾

### 步驟 2: 修改 Navbar.jsx
開啟 `landing_page/src/components/Navbar.jsx`，找到第 52 行：

```jsx
{/* 如果你有提供 logo 圖片，取消下面這行的註解 */}
{/* <img src="/logo.png" alt="DoGet Logo" style={{ height: '40px', width: 'auto' }} /> */}
```

取消註解，改成：

```jsx
<img src="/logo.png" alt="DoGet Logo" style={{ height: '40px', width: 'auto' }} />
```

如果你想隱藏文字 Logo，可以刪除或註解掉第 55-62 行的 `<div>DoGet</div>` 部分。

### 步驟 3: 修改 index.html
開啟 `landing_page/index.html`，找到第 7-10 行的註解：

```html
<!-- Favicon 設定 - 當你提供圖片後取消註解 -->
<!-- <link rel="icon" type="image/x-icon" href="/favicon.ico" /> -->
<!-- <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> -->
<!-- <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /> -->
<!-- <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> -->
```

取消註解，並刪除第 13 行的預設圖示：

```html
<!-- Favicon 設定 -->
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
```

## 📐 設計建議

### Logo 設計要點
- **簡潔**: 在小尺寸下要清晰可辨
- **對比**: 黑色背景搭配白色或淺色 Logo
- **可讀性**: 字體清晰，避免過於細緻的線條

### Favicon 設計要點
- **簡單圖形**: 16x16 像素非常小，使用簡單的圖形或字母
- **高對比**: 使用鮮明的顏色對比
- **品牌識別**: 使用品牌主色或縮寫

## 🎨 線上工具推薦

### Favicon 生成工具
1. **Favicon.io**: https://favicon.io/
   - 可從文字、圖片、表情符號生成
   - 自動生成所有需要的尺寸

2. **RealFaviconGenerator**: https://realfavicongenerator.net/
   - 功能最完整
   - 支援各平台預覽

### Logo 編輯工具
1. **Canva**: https://www.canva.com/
   - 線上設計工具
   - 提供大量模板

2. **Figma**: https://www.figma.com/
   - 專業設計工具
   - 支援 SVG 匯出

## ✅ 檢查清單

放置圖片後，檢查以下項目：

- [ ] 圖片檔案已放入 `landing_page/public/` 資料夾
- [ ] Logo 圖片是透明背景的 PNG 或 SVG
- [ ] Favicon 檔案包含所有必要尺寸
- [ ] 已修改 `Navbar.jsx` 取消 logo 圖片的註解
- [ ] 已修改 `index.html` 取消 favicon 連結的註解
- [ ] 重新啟動開發伺服器 (`npm run dev`)
- [ ] 在瀏覽器中檢查 Logo 和 Favicon 是否正常顯示

## 🚀 測試

```bash
cd landing_page
npm run dev
```

在瀏覽器中開啟 http://localhost:5173 檢查效果。
