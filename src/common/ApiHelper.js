const axios = require('axios');
const get = require('lodash/get');
const ContextManager = require('./ContextManager');

const ERROR_LEVEL = 400;
const INGORED_ERRORS = [404];

const getHeaders = (contextId) => {
    const headers = {};
    const context = ContextManager.getContext(contextId);

    if (!context) {
        return headers;
    }

    const authToken = get(context, ['request', 'auth', 'artifacts', 'authToken']);
    if (authToken) {
        headers['Authorization'] = authToken; // eslint-disable-line dot-notation
    }

    return headers;
};

const successHandler = (response) => ({
    success: true,
    status: response.status,
    data: response.data
});

const errorHandler = (error) => {
    const status = error.response ? error.response.status : error.code;
    const errorResult = {
        success: false,
        error: {
            message: error.message,
            stack: error.stack,
            code: status,
            data: error.response?.data
        }
    };

    if (status < ERROR_LEVEL || INGORED_ERRORS.includes(status)) {
        return errorResult;
    }

    if (!error.config) {
        return errorResult;
    }

    return errorResult;
};
class ApiHelper {
    static async get(url, contextId, responseType) {
        return axios
            .get(url, { headers: { ...getHeaders(contextId) }, contextId, responseType })
            .then(successHandler)
            .catch(errorHandler);
    }

    static async post(url, data, contextId, responseType) {
        const jsonData = JSON.stringify(data);
        const headers = { 'Content-Type': 'application/json', ...getHeaders(contextId) };
        return axios.post(url, jsonData, { headers, contextId, responseType }).then(successHandler).catch(errorHandler);
    }
}

module.exports = ApiHelper;
