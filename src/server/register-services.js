const has = require('lodash/has');
const isNil = require('lodash/isNil');
const isEmpty = require('lodash/isEmpty');
const ContextManager = require('../common/ContextManager');
const getConfig = require('../common/config');

const CODE_UNAUTHORIZED = 401;
const CODE_FORBIDDEN = 403;
const CODE_INTERNAL_ERROR = 500;

global.services = {};

const buildErrorResult = (code, message) => ({ success: false, error: { code, message } });

const buildRedirectResult = (code, message) => ({ success: false, error: { code, message }, redirect: true });

const startExecuteService = async (serviceConfig, args, contextId) => {
    const ServiceClass = serviceConfig.service;
    const service = new ServiceClass(contextId);
    return service.execute(...args);
};

const createInternalErrorResult = (err) => {
    let message = 'Internal error, please see error logs.';
    if (has(err, 'message')) {
        message = `${err.message}. For more information, please see error logs.`;
    }

    return buildErrorResult(CODE_INTERNAL_ERROR, message);
};

const wrapService = (serviceConfig) => {
    if (!serviceConfig || !has(serviceConfig, 'service')) {
        return null;
    }

    let { permissions } = serviceConfig;
    if (isNil(permissions) || isEmpty(permissions)) {
        permissions = { anonymous: false };
    }

    const wrappedService = async function (args, contextId) {
        let context = ContextManager.getContext(contextId);
        if (isNil(context)) {
            context = { request: { auth: { isAuthenticated: false } }, reply: null };
        }
        const { request } = context;
        const { auth } = request;
        const { isAuthenticated } = auth;
        if (!permissions.anonymous && !isAuthenticated) {
            if (permissions.redirect === false) {
                return Promise.resolve(
                    buildErrorResult(CODE_UNAUTHORIZED, 'Unauthorized: User not logged in or passed a wrong contextId.')
                );
            }
            return Promise.resolve(
                buildRedirectResult(CODE_UNAUTHORIZED, 'Unauthorized: User not logged in or passed a wrong contextId.')
            );
        }

        const config = getConfig();
        if (isAuthenticated && config.checkBffPermission) {
            const value = await config.checkBffPermission(request, permissions, args);
            if (value !== true) {
                return buildErrorResult(CODE_FORBIDDEN, 'Forbidden: User has no permission.');
            }
        }
        return startExecuteService(serviceConfig, args, contextId);
    };

    return async (args, contextId) => {
        try {
            return await wrappedService(args, contextId);
        } catch (err) {
            return createInternalErrorResult(err);
        }
    };
};

const registerService = (serviceInfo) => {
    const { services } = serviceInfo;
    Object.keys(services).forEach((key) => {
        const serviceConfig = services[key];
        const serviceName = serviceConfig.name;
        const wrapper = wrapService(serviceConfig);
        if (isNil(wrapper)) {
            return;
        }

        if (!isNil(global.services[serviceName])) {
            return;
        }
        global.services[serviceName] = wrapper;
    });
};

module.exports = { registerService };
