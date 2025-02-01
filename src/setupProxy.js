const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/pschat',
    createProxyMiddleware({
      target: 'https://api.psnext.info/api',
      // target: 'https:www.google.com',     // revert it at the end for the proxy TODO-NOW
      changeOrigin: true,
      pathRewrite: {
        '^/pschat': '', // Remove /api prefix when forwarding
      },
    })
  );
};
