// Auto generated code

import callService from './callService';

class Sdk {
    constructor(contextId) {
        this._contextId = contextId;
    }

    userSignup(userInfo) {
        return callService('userSignup', [userInfo], this._contextId);
    }

    userPasswordReset(phone, captcha, password) {
        return callService('userPasswordReset', [phone, captcha, password], this._contextId);
    }

    getAuthCode(phone) {
        return callService('getAuthCode', [phone], this._contextId);
    }
}

export default Sdk;
