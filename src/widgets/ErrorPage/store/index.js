import { makeAutoObservable } from 'mobx';

class Store {
    errorCode = 404;
    errorMsg = '找不到页面';

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    hydrate(data) {
        Object.assign(this, data);
    }

    async init(params) {
        const { errorCode, errorMsg } = params;
        this.errorCode = errorCode;
        this.errorMsg = errorMsg;
    }
}

export default Store;
