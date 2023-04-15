const ApiHelper = require('../common/ApiHelper');
// const util = require('../common/env-util');

// const BaseURL = util.readEnvValue('BASE_URL', null);

class ApiSdk {
    constructor(contextId) {
        this.contextId = contextId;
    }

    /** User */
    async userSignup(data) {
        return ApiHelper.post(`123/user/register`, data, this.contextId);
    }

    async userPasswordReset(data) {
        return ApiHelper.post(`123/user/updatePassword`, data, this.contextId);
    }

    async getAuthCode(phone) {
        return ApiHelper.get(`123/user/getAuthCode?phone=${phone}`, this.contextId);
    }
}

module.exports = ApiSdk;
