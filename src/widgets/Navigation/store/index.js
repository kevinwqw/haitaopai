import { makeAutoObservable } from 'mobx';

class Store {
    widgetName = null;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    hydrate(data) {
        Object.assign(this, data);
    }

    async init(params) {
        const { widgetName } = params;
        this.widgetName = widgetName;
    }
}

export default Store;
