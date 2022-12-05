const { createProxyMiddleware } = require('http-proxy-middleware');

export default function(app) {
    app.use(
        '/esg',
        createProxyMiddleware({
            target: 'http://220.66.115.155:81',
            changeOrigin: true,
            ws: true
        })
    );
};