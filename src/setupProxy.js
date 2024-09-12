const { createProxyMiddleware } = require("http-proxy-middleware");

// change this to the address exposing the participant-api
const target = "http://127.1.27.4:3231";

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: target,
      secure: false,
      pathRewrite: {
        "^/api/": "/"
      }
    }
  )
);
}
