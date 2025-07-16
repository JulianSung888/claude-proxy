const express = require('express');
const app = express();

// 設定根路徑，回傳「Claude Proxy is live」訊息
app.get('/', (req, res) => {
  res.send('Claude Proxy is live!');
});

// 設定 8080 端口
app.listen(8080, () => {
  console.log('Claude Proxy is running on port 8080');
});

