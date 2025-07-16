FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# 曝露動態端口
EXPOSE 8080

CMD ["npm", "start"]

