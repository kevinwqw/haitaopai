class ContextManager {
    constructor() {
        let contextStore = null;
        if (!global.contextStore) {
            global.contextStore = {};
        }
        contextStore = global.contextStore;
        this.store = contextStore;
    }

    createContext(contextId, data) {
        this.store[contextId] = data;
        return contextId;
    }

    getContext(contextId) {
        return this.store[contextId];
    }

    removeContext(contextId) {
        delete this.store[contextId];
    }

    getRequest(contextId) {
        const context = this.getContext(contextId);

        if (!context || !context.request) {
            return null;
        }

        return context.request;
    }
}

module.exports = new ContextManager();
