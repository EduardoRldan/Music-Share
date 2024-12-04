// api-gateway/server.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;

// Proxy requests to user service
app.use('/users', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));

app.listen(port, () => {
  console.log(`API Gateway listening on port ${port}`);
});
