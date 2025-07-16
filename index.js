const express = require('express');
const request = require('request');
const app = express();

// 使用動態端口，如果沒有則使用 8080
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Claude Proxy is live!');
});

app.use('/proxy', (req, res) => {
  const url = `https://claude.ai${req.url}`;
  req.pipe(request({ url, method: req.method, headers: req.headers })).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Claude Proxy is running on port ${PORT}`);
});

