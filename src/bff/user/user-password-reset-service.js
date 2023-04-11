const BaseService = require('../../common/BaseService');
const ApiSdk = require('../../apis/api-sdk');

class UserPasswordResetService extends BaseService {
    constructor(contextId) {
        super(contextId);
        this.apiSdk = new ApiSdk(contextId);
    }

    async execute(phone, captcha, password) {
        const result = await this.apiSdk.userPasswordReset({ phone, captcha, password });
        if (result.success && result.data) {
            return super.createResult(result.data);
        }
        return super.createErrorResult();
    }
}

module.exports = {
    name: 'userPasswordReset',
    service: UserPasswordResetService,
    permissions: { anonymous: true }
};
