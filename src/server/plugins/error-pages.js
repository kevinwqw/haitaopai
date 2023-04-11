const getConfig = require('../../common/config');

const NOT_FOUND = 404;

const register = function (server) {
    server.ext('onPreResponse', (request, h) => {
        if (request.response.isBoom) {
            if (request.isAsset) {
                return h.response('Not found').code(NOT_FOUND);
            }

            const config = getConfig();
            return config.errorHandler(request, h);
        }

        return h.continue;
    });
};

exports.plugin = {
    register,
    name: 'error-pages-plugin',
    version: '1.0.0'
};
