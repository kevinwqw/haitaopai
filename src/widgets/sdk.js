// Auto generated code

import callService from './callService';

class Sdk {
    constructor(contextId) {
        this._contextId = contextId;
    }

    userLogin(userInfo) {
        return callService('userLogin', [userInfo], this._contextId);
    }

    userSignup(userInfo) {
        return callService('userSignup', [userInfo], this._contextId);
    }
}

export default Sdk;
