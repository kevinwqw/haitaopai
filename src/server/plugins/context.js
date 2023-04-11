const isNil = require('lodash/isNil');
const ContextManager = require('../../common/ContextManager');

/* eslint no-unused-vars: ["error", { "args": "none" }] */
const register = function (server, options) {
    server.ext('onRequest', (request, h) => {
        if (isNil(request.contextId)) {
            request.contextId = ContextManager.createContext(request.info.id, { request, h, apiDataCache: {} });
        }

        return h.continue;
    });

    server.events.on('response', (request) => {
        if (!isNil(request.contextId)) {
            ContextManager.removeContext(request.contextId);
        }
    });
};

exports.plugin = {
    register,
    name: 'context-plugin',
    version: '1.0.0'
};
