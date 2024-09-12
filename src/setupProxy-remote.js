const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://local.infectieradar.be',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/api/': '/api/',
      },
      onProxyReq: function(request) {
        request.setHeader("origin", "https://local.infectieradar.be");
      },
    })
  );
}