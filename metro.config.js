const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
    const config = getDefaultConfig(__dirname);
    config.server = {
        enhanceMiddleware: middleware => {
            const originalClose = middleware.close;
            middleware.close = (...args) => {
                setImmediate(() => originalClose.apply(middleware, args));
            };
            return middleware;
        },
    };
    return config;
})();
