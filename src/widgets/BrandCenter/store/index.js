import { makeAutoObservable } from 'mobx';
import BffSdk from '../../sdk';

class Store {
    isLoading = false;
    brandId = '';
    rebateLink = '';
    brandName = '';
    brandIntro = '';
    rebateCategories = [];
    rebateRules = [];
    storeId = '';
    storeName = '';
    isLogin = false;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    hydrate(data) {
        Object.assign(this, data);
    }

    async init(params) {
        const { brandId, phone } = params;
        this.brandId = brandId;
        this.isLogin = !!phone;
        this.getBrandDetailInfo(brandId);
    }

    * getBrandDetailInfo(brandId) {
        this.isLoading = true;
        const sdk = new BffSdk();
        const res = yield sdk.getBrandDetail(brandId);
        if (res.success) {
            const { brandName, brandIntro, rebateCategories, rebateRules } = res.data;
            this.brandName = brandName;
            this.brandIntro = brandIntro;
            this.rebateCategories = rebateCategories;
            this.rebateRules = rebateRules;
        }
        this.isLoading = false;
    }

    * getUserLink(brandId) {
        const sdk = new BffSdk();
        const res = yield sdk.getUserLink(brandId);
        if (res.success) {
            if (res.data.code === 200) {
                return {
                    success: true,
                    rebateLink: JSON.stringify(res.data.data) !== '{}' ? res.data.data.rebateLink : ''
                };
            } else {
                const { code, message } = res.data.data;
                return { success: false, code, message };
            }
        }

        return { success: false, code: '500', message: '系统错误，获取链接失败' };
    }
}

export default Store;
