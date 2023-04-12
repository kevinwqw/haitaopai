import { makeAutoObservable } from 'mobx';

class Store {
    isLogin = null;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    hydrate(data) {
        Object.assign(this, data);
    }

    async init(params) {
        const { phone } = params;
        this.isLogin = !!phone;
    }
}

export default Store;
