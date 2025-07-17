# 使用適合的基礎映像，這裡假設使用 node:16
FROM node:16

# 設置工作目錄
WORKDIR /usr/src/app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製應用程式代碼
COPY . .

# 暴露端口（這裡使用 8080，根據您的設置調整）
EXPOSE 8080

# 启动應用
CMD ["npm", "start"]
