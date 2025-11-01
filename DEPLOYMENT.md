# Cloudflare Pages 部署教學

完整的 Cloudflare Pages 部署指南，從零開始到網站上線。

## 📋 前置準備

- ✅ Cloudflare 帳號（免費）
- ✅ GitHub 帳號（推薦，用於自動部署）
- ✅ 本地已安裝 Node.js（18+）

## 🚀 快速部署（3 種方法）

---

## 方法 1：GitHub 自動部署 ⭐ 最推薦

### 優點
- 🔄 每次 git push 自動部署
- 📊 部署歷史記錄
- 🔙 一鍵回滾
- 🌿 支援預覽分支

### 步驟

#### 1. 將代碼推送到 GitHub

```bash
# 在 landing_page 資料夾中
cd /Users/yujie1234/Desktop/flutter_mac_6/landing_page

# 初始化 git（如果還沒有）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: DoGet landing page"

# 創建 GitHub repo（在 GitHub 網站上創建一個新 repository）
# 然後連接遠端倉庫
git remote add origin https://github.com/你的用戶名/doget-landing.git

# 推送
git push -u origin main
```

#### 2. 連接 Cloudflare Pages

1. **登入 Cloudflare**
   - 前往 https://dash.cloudflare.com
   - 如果沒有帳號，免費註冊一個

2. **進入 Pages**
   - 在左側菜單點擊 "Workers & Pages"
   - 點擊 "Create application"
   - 選擇 "Pages"

3. **連接 Git**
   - 點擊 "Connect to Git"
   - 選擇 "GitHub"（或 GitLab）
   - 授權 Cloudflare 訪問你的 GitHub

4. **選擇 Repository**
   - 在列表中選擇 `doget-landing` repository
   - 點擊 "Begin setup"

5. **配置構建設置**
   ```
   Project name: doget-landing (或你想要的名字)
   Production branch: main

   Build settings:
   Framework preset: Vite
   Build command: npm run build
   Build output directory: dist
   Root directory: (留空，或填 landing_page 如果在子目錄)

   Environment variables: (不需要添加)
   ```

6. **保存並部署**
   - 點擊 "Save and Deploy"
   - 等待 2-3 分鐘構建完成
   - 你會獲得一個網址：`https://doget-landing.pages.dev`

#### 3. 後續更新

每次修改代碼後：
```bash
git add .
git commit -m "Update: 說明修改內容"
git push
```

Cloudflare 會自動檢測並重新部署（約 30 秒）！

---

## 方法 2：拖放上傳（最簡單）

### 適合
- 🎯 快速測試
- 📦 一次性部署
- 🚫 不需要自動更新

### 步驟

#### 1. 構建專案

```bash
cd /Users/yujie1234/Desktop/flutter_mac_6/landing_page
npm install
npm run build
```

構建完成後，會生成 `dist/` 資料夾。

#### 2. 上傳到 Cloudflare

1. 前往 https://dash.cloudflare.com
2. 左側點擊 "Workers & Pages"
3. 點擊 "Create application" → "Pages"
4. 選擇 "Upload assets"
5. **將整個 `dist/` 資料夾拖放**到上傳區域
   - ⚠️ 注意：上傳 `dist/` 資料夾內的所有文件，不是上傳 dist 資料夾本身
6. 項目名稱：`doget-landing`
7. 點擊 "Deploy site"
8. 等待上傳完成（約 1 分鐘）

#### 3. 更新網站

每次修改後重複：
```bash
npm run build
# 然後重新上傳 dist/ 資料夾
```

---

## 方法 3：Wrangler CLI（進階）

### 適合
- 💻 命令行愛好者
- 🔧 需要腳本化部署
- 🤖 CI/CD 集成

### 步驟

#### 1. 安裝 Wrangler

```bash
npm install -g wrangler
```

#### 2. 登入 Cloudflare

```bash
wrangler login
```

會自動打開瀏覽器授權。

#### 3. 構建和部署

```bash
cd /Users/yujie1234/Desktop/flutter_mac_6/landing_page

# 構建
npm run build

# 部署
wrangler pages deploy dist --project-name=doget-landing
```

#### 4. 創建部署腳本

創建 `deploy.sh`：
```bash
#!/bin/bash
echo "🔨 Building project..."
npm run build

echo "🚀 Deploying to Cloudflare Pages..."
wrangler pages deploy dist --project-name=doget-landing

echo "✅ Deployment complete!"
```

使用：
```bash
chmod +x deploy.sh
./deploy.sh
```

---

## 🌐 自訂域名

部署完成後，你會獲得一個 `*.pages.dev` 網址。如果想使用自己的域名：

### 步驟

1. **在 Cloudflare Pages 專案中**
   - 點擊你的專案
   - 點擊 "Custom domains"
   - 點擊 "Set up a custom domain"

2. **添加域名**
   - 輸入你的域名（如 `www.doget.com`）
   - 點擊 "Continue"

3. **配置 DNS**
   - 如果域名在 Cloudflare：自動配置 ✅
   - 如果域名在其他服務商：
     - 添加 CNAME 記錄
     - 主機名：`www`
     - 值：`doget-landing.pages.dev`

4. **等待生效**
   - DNS 生效通常需要 5-30 分鐘
   - Cloudflare 會自動配置免費 HTTPS

---

## 📊 部署後的功能

### 免費獲得

✅ **全球 CDN** - 275+ 數據中心
✅ **無限流量** - 完全免費
✅ **自動 HTTPS** - 免費 SSL 證書
✅ **DDoS 防護** - Cloudflare 網絡保護
✅ **自動壓縮** - Brotli/Gzip 壓縮
✅ **HTTP/3** - 最新網絡協議
✅ **預覽部署** - 每個 PR 自動創建預覽

### 部署歷史

在 Cloudflare Dashboard 中：
- 查看所有部署記錄
- 查看構建日誌
- 一鍵回滾到任何歷史版本
- 查看流量統計

---

## 🔧 進階配置

### 環境變數

如果需要設置環境變數（如 API 密鑰）：

1. 在 Cloudflare Pages 專案中
2. 點擊 "Settings" → "Environment variables"
3. 添加變數：
   - `VITE_API_URL`: 你的 API 地址
   - `VITE_GA_ID`: Google Analytics ID

在代碼中使用：
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

### 重定向規則

創建 `public/_redirects` 文件：
```
# SPA 路由
/*  /index.html  200

# 舊路徑重定向
/old-page  /new-page  301
```

### 自訂 Headers

創建 `public/_headers` 文件：
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

### 404 頁面

創建 `public/404.html`（自動處理）。

---

## 📈 性能優化

### 1. 檢查性能

部署後訪問：
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

### 2. Cloudflare 優化

在 Cloudflare Dashboard 中啟用：
- **Auto Minify**：壓縮 HTML/CSS/JS
- **Brotli**：更好的壓縮
- **HTTP/3**：更快的連接
- **Early Hints**：預載資源

### 3. 代碼優化

```bash
# 安裝分析工具
npm install --save-dev rollup-plugin-visualizer

# 構建時生成報告
npm run build
```

---

## 🐛 常見問題

### 構建失敗：「npm: command not found」

**解決**：在 Cloudflare 設置中指定 Node 版本
```
Environment variables:
NODE_VERSION = 18
```

### 構建失敗：「dist directory not found」

**檢查**：
- Build command 是 `npm run build`
- Output directory 是 `dist`
- 確保 package.json 中有 build 腳本

### 頁面顯示空白

**可能原因**：
1. 檢查瀏覽器控制台錯誤
2. 確保 `vite.config.js` 中 `base: '/'`
3. 檢查是否所有組件都正確導入

### 動畫不工作

**檢查**：
- Framer Motion 是否正確安裝
- 瀏覽器是否支援（需要現代瀏覽器）

### 自訂域名無法訪問

**等待**：DNS 生效需要時間（5-30 分鐘）
**檢查**：使用 [DNS Checker](https://dnschecker.org/) 驗證 DNS 配置

---

## 📞 獲取幫助

- **Cloudflare 文檔**：https://developers.cloudflare.com/pages/
- **Cloudflare 社群**：https://community.cloudflare.com/
- **Vite 文檔**：https://vitejs.dev/
- **React 文檔**：https://react.dev/

---

## 🎉 完成！

恭喜！你的 DoGet 產品網站已經成功部署到 Cloudflare Pages。

**下一步**：
- 🔗 分享你的網站連結
- 📊 監控流量和性能
- 🎨 持續優化設計
- 📱 添加 App Store/Google Play 實際連結

祝你的產品推廣成功！🚀
