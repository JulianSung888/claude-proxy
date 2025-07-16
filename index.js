const express = require('express');
const request = require('request');  // 確保安裝了 request 庫
const app = express();

// 將所有請求轉發到 Claude.ai
app.use('/', (req, res) => {
  const url = `https://claude.ai${req.url}`;
  req.pipe(request({ url, method: req.method, headers: req.headers })).pipe(res);
});

// 設置 8080 端口
app.listen(8080, () => {
  console.log('Claude Proxy is running on port 8080');
});

