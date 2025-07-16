const express = require('express');
const request = require('request');
const app = express();

// 根路徑回應
app.get('/', (req, res) => {
  res.send('Claude Proxy is live!');
});

// 代理請求到外部服務
app.use('/proxy', (req, res) => {
  const url = `https://claude.ai${req.url}`;
  req.pipe(request({ url, method: req.method, headers: req.headers })).pipe(res);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Claude Proxy is running on port ${PORT}`);
});

