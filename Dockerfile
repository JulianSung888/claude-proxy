# 使用 Node.js 官方映像
FROM node:18

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝所有依賴
RUN npm install

# 複製其餘檔案
COPY . .

# 開放端口 8080
EXPOSE 8080

# 啟動應用
CMD ["npm", "start"]

