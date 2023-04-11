import { makeAutoObservable } from 'mobx';
import BffSdk from '../../sdk';

class Store {
    isloading = false;
    isLogin = false;
    brandList = [];

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    hydrate(data) {
        Object.assign(this, data);
    }

    async init(params) {
        const { phone } = params;
        this.isLogin = !!phone;
        this.getBrandList();
    }

    * getBrandList() {
        this.isLoading = true;
        const sdk = new BffSdk();
        const res = yield sdk.getBrandList();
        if (res.success) {
            this.brandList = res.data;
        }
        this.isLoading = false;
    }
}

export default Store;
