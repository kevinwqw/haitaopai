const BaseService = require('../../common/BaseService');
const ApiSdk = require('../../apis/api-sdk');

class LoginService extends BaseService {
    constructor(contextId) {
        super(contextId);
        this.apiSdk = new ApiSdk(contextId);
    }

    async execute(userInfo) {
        const result = await this.apiSdk.getLogin(userInfo);
        if (result.success && result.data) {
            return super.createResult(result.data);
        }
        return super.createErrorResult();
    }
}

module.exports = {
    name: 'userLogin',
    service: LoginService,
    permissions: { anonymous: true }
};
