const BaseService = require('../../common/BaseService');
const ApiSdk = require('../../apis/api-sdk');

class SignupService extends BaseService {
    constructor(contextId) {
        super(contextId);
        this.apiSdk = new ApiSdk(contextId);
    }

    async execute(userInfo) {
        const result = await this.apiSdk.userSignup(userInfo);
        if (result.success && result.data) {
            return super.createResult(result.data);
        }
        return super.createErrorResult();
    }
}

module.exports = {
    name: 'userSignup',
    service: SignupService,
    permissions: { anonymous: true }
};
