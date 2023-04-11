const ContextManager = require('./ContextManager');

class BaseService {
    constructor(contextId) {
        this.contextId = contextId;
    }

    createErrorResult(code = 500, message = 'Server Internal Error') {
        return { success: false, error: { code, message } };
    }

    createResult(data) {
        return { success: true, data };
    }

    getRequest() {
        return ContextManager.getRequest(this.contextId);
    }
}

module.exports = BaseService;
