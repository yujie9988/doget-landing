# DoGet 產品介紹網站

這是 DoGet App 的產品介紹網站，使用 React + Framer Motion 打造流暢的動畫效果。

## 技術棧

- **React 18** - UI 框架
- **Vite** - 快速開發構建工具
- **Framer Motion** - 動畫庫
- **JavaScript/JSX** - 程式語言

## 功能特色

✅ 流暢的滾動動畫效果
✅ 響應式設計（支援手機/平板/電腦）
✅ 視差效果和過渡動畫
✅ 輕量快速（Vite 構建）
✅ SEO 友好

## 本地開發

### 1. 安裝依賴

```bash
npm install
```

### 2. 啟動開發伺服器

```bash
npm run dev
```

開啟瀏覽器訪問：`http://localhost:5173`

### 3. 構建生產版本

```bash
npm run build
```

構建完成後，靜態文件會生成在 `dist/` 資料夾中。

### 4. 本地預覽生產版本

```bash
npm run preview
```

## 部署到 Cloudflare Pages

### 方法一：通過 Cloudflare Dashboard（推薦）

1. **構建專案**
   ```bash
   npm run build
   ```

2. **登入 Cloudflare**
   - 前往 [Cloudflare Dashboard](https://dash.cloudflare.com)
   - 點擊左側的 "Pages"

3. **創建新專案**
   - 點擊 "Create a project"
   - 選擇 "Connect to Git" 或 "Direct Upload"

4. **使用 Git 部署（推薦）**
   - 連接你的 GitHub/GitLab 賬號
   - 選擇包含此專案的 repository
   - 配置構建設置：
     - **Framework preset**: Vite
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
     - **Root directory**: `landing_page`（如果在子目錄）

5. **點擊 "Save and Deploy"**
   - Cloudflare 會自動構建和部署
   - 完成後會獲得一個 `*.pages.dev` 網址

6. **自訂域名（可選）**
   - 在 Pages 專案設置中點擊 "Custom domains"
   - 添加你的域名（如 `www.doget.com`）
   - 按照指示配置 DNS

### 方法二：使用 Wrangler CLI

1. **安裝 Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **登入 Cloudflare**
   ```bash
   wrangler login
   ```

3. **構建專案**
   ```bash
   npm run build
   ```

4. **部署**
   ```bash
   wrangler pages publish dist --project-name=doget-landing
   ```

### 方法三：拖放上傳

1. 構建專案：`npm run build`
2. 前往 [Cloudflare Pages](https://pages.cloudflare.com)
3. 點擊 "Create a project" → "Direct Upload"
4. 將整個 `dist/` 資料夾拖放到上傳區域
5. 等待部署完成

## 自動部署

如果使用 Git 方式部署，每次推送到主分支時，Cloudflare Pages 會自動：
1. 拉取最新代碼
2. 運行 `npm install`
3. 運行 `npm run build`
4. 部署到全球 CDN
5. 30 秒內完成更新

## 其他託管平台

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages
在 `vite.config.js` 中設置 `base: '/repo-name/'`，然後：
```bash
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:username/repo-name.git main:gh-pages
```

## 文件結構

```
landing_page/
├── index.html              # HTML 入口
├── package.json            # 依賴配置
├── vite.config.js          # Vite 配置
├── src/
│   ├── main.jsx            # React 入口
│   ├── App.jsx             # 主應用組件
│   ├── index.css           # 全局樣式
│   └── components/         # React 組件
│       ├── Navbar.jsx      # 導航欄
│       ├── Hero.jsx        # 首頁橫幅
│       ├── Features.jsx    # 功能概覽
│       ├── DoGetSection.jsx    # DoGet 配對
│       ├── ChatSection.jsx     # 聊天功能
│       ├── KTVSection.jsx      # KTV 社群
│       ├── GameSection.jsx     # 遊戲化功能
│       ├── DownloadCTA.jsx     # 下載呼籲
│       └── Footer.jsx          # 頁腳
└── dist/                   # 構建輸出（git ignored）
```

## 自訂修改

### 修改顏色主題
在 `src/index.css` 中修改 CSS 變數：
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #ec4899;
  /* ... */
}
```

### 修改內容
各個組件文件都在 `src/components/` 中，可以直接編輯文字和樣式。

### 添加新頁面
1. 在 `src/components/` 中創建新組件
2. 在 `src/App.jsx` 中導入並添加

## 性能優化

- ✅ Vite 自動代碼分割
- ✅ 圖片懶加載
- ✅ Framer Motion 動畫性能優化
- ✅ 全球 CDN 加速（Cloudflare）

## 瀏覽器支援

- Chrome/Edge（最新版）
- Firefox（最新版）
- Safari（最新版）
- iOS Safari（iOS 12+）
- Android Chrome（Android 5+）

## 問題排查

### 構建錯誤
```bash
# 清除 node_modules 重新安裝
rm -rf node_modules package-lock.json
npm install
```

### 動畫不流暢
確保使用現代瀏覽器，並檢查 GPU 加速是否啟用。

### Cloudflare 部署失敗
檢查構建設置：
- Build command 必須是 `npm run build`
- Output directory 必須是 `dist`
- Node version 建議使用 18 或更高

## 授權

© 2025 DoGet. All rights reserved.
