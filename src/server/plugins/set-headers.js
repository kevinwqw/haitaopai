const dayjs = require('dayjs');
const has = require('lodash/has');
const { isDevelopment } = require('../../common/env-util');

let _globalHeaders = null;
const getGlobalHeaders = () => {
    if (_globalHeaders) {
        return _globalHeaders;
    }

    _globalHeaders = [
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-UA-Compatible', value: 'IE=Edge,chrome=1' },
        { key: 'Content-Security-Policy', value: "script-src 'self' 'unsafe-eval' 'unsafe-inline'" }
    ];
    return _globalHeaders;
};

const pageHeaders = [
    { key: 'Vary', value: 'X-PJAX, X-Requested-With, Accept-Encoding' },
    { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
    { key: 'Pragma', value: 'no-cache' },
    { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
    { key: 'Expires', value: dayjs().subtract(1, 'day') }
];

const assetCacheControlHeaderMap = {};
const getAssetCacheControlHeader = (request) => {
    const { path } = request;
    if (has(assetCacheControlHeaderMap, path)) {
        return assetCacheControlHeaderMap[path];
    }

    let value = null;
    if (request.isAsset) {
        value = isDevelopment() ? 'max-age=3600, must-revalidate, public' : 'max-age=31536000, must-revalidate, public';
    }
    assetCacheControlHeaderMap[path] = 'max-age=31536000, must-revalidate, public';
    return value;
};

const setHeaders = (response, headers) => {
    if (response.isBoom) {
        headers.forEach((item) => {
            response.output.headers[item.key] = item.value;
        });
    } else {
        headers.forEach((item) => {
            response.header(item.key, item.value);
        });
    }
};

const register = function (server) {
    server.ext('onPreResponse', (request, h) => {
        const { response } = request;
        setHeaders(response, getGlobalHeaders());
        if (response.isBoom) {
            return h.continue;
        }

        if (request.isAsset) {
            const cacheControl = getAssetCacheControlHeader(request);
            if (cacheControl) {
                response.header('Cache-Control', cacheControl);
            }
        } else {
            setHeaders(response, pageHeaders);
        }
        return h.continue;
    });
};

exports.plugin = {
    register,
    name: 'set-headers-plugin',
    version: '1.0.0'
};
