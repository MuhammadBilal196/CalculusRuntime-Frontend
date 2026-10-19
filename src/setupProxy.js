const { createProxyMiddleware } = require("http-proxy-middleware");

// Dev-only: forward /qc-api/* to the QuantumChat backend so the browser stays
// same-origin (the backend's CORS allowlist does not include localhost).
// Production uses the matching rewrite in vercel.json.
const QUANTUMCHAT_BACKEND =
  process.env.QUANTUMCHAT_BACKEND_URL ||
  "https://quantum-chat-backend-six.vercel.app";

module.exports = function setupProxy(app) {
  app.use(
    "/qc-api",
    createProxyMiddleware({
      target: QUANTUMCHAT_BACKEND,
      changeOrigin: true,
      pathRewrite: { "^/qc-api": "" },
      onProxyReq(proxyReq) {
        // The backend checks Origin against its allowlist; drop the dev origin.
        proxyReq.removeHeader("origin");
      },
    }),
  );
};
