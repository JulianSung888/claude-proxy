const express = require('express');
const request = require('request');
const app = express();

app.use('/', (req, res) => {
  const url = `https://claude.ai${req.url}`;
  req.pipe(request({ url, method: req.method, headers: req.headers })).pipe(res);
});

app.listen(8080, () => {
  console.log('Claude Proxy is running on port 8080');
});
