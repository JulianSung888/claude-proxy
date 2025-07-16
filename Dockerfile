FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# 曝露端口 8080（Render 會動態分配端口）
EXPOSE 8080

CMD ["npm", "start"]
