import { makeAutoObservable } from 'mobx';

class Store {
    phone = null;
    scope = null;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    hydrate(data) {
        Object.assign(this, data);
    }

    async init(params) {
        const { phone, scope } = params;
        this.phone = phone;
        this.scope = scope;
    }
}

export default Store;
