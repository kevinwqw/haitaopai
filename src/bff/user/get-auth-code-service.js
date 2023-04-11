const BaseService = require('../../common/BaseService');
const ApiSdk = require('../../apis/api-sdk');

class GetAuthCodeService extends BaseService {
    constructor(contextId) {
        super(contextId);
        this.apiSdk = new ApiSdk(contextId);
    }

    async execute(phone) {
        const result = await this.apiSdk.getAuthCode(phone);
        if (result.success && result.data) {
            return super.createResult(result.data);
        }
        return super.createErrorResult();
    }
}

module.exports = {
    name: 'getAuthCode',
    service: GetAuthCodeService,
    permissions: { anonymous: true }
};
