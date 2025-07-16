FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# 使用動態端口
EXPOSE 8080

CMD ["npm", "start"]

