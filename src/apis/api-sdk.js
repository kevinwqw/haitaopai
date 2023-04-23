const ApiHelper = require('../common/ApiHelper');
const util = require('../common/env-util');

const BaseURL = util.readEnvValue('BASE_URL', null);

class ApiSdk {
    constructor(contextId) {
        this.contextId = contextId;
    }

    /** User */
    async getLogin(data) {
        return ApiHelper.post(`${BaseURL}/user/login`, data, this.contextId);
    }

    async userSignup(data) {
        return ApiHelper.post(`${BaseURL}/user/register`, data, this.contextId);
    }
}

module.exports = ApiSdk;
