const getConfig = require('../../common/config');

const XSS_REGEX = /(<[\s/]*(script|img|style)[^>]*>)|(javascript:)/;

/* eslint no-unused-vars: ["error", { "args": "none" }] */
const register = function (server, options) {
    server.ext('onRequest', (request, h) => {
        const config = getConfig();

        if (request.isAsset) {
            const { path } = request;
            if (!config.server.debug) {
                if (path.endsWith('.map')) { // disable all source map when debug is false
                    return h.response('').takeover();
                }
            }
        }

        if (!request.url) {
            return h.continue;
        }

        try {
            const url = decodeURIComponent(request.url.href);
            if (url && XSS_REGEX.test(url.toLowerCase())) {
                return h.response('').code(404).takeover();
            }
        } catch (error) {
            return h.response('').code(500).takeover();
        }

        return h.continue;
    });
};

exports.plugin = {
    register,
    name: 'security-plugin',
    version: '1.0.0'
};
