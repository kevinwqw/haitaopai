import { makeAutoObservable } from 'mobx';
import BffSdk from '../../sdk';

class Store {
    isPasswordUpdating = false;
    isSendAuthCodeSuccess = false;

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

    * getCaptchaCode(mobile) {
        const sdk = new BffSdk();
        const phone = mobile;
        const res = yield sdk.getAuthCode(phone);
        if (res.success) {
            this.isSendAuthCodeSuccess = true;
        } else {
            this.isSendAuthCodeSuccess = false;
        }
    }

    * updateUserPassword(phone, captcha, password) {
        this.isPasswordUpdating = true;
        const sdk = new BffSdk();
        const res = yield sdk.userPasswordReset(phone, captcha , password);
        if (res.success) {
            this.isPasswordUpdating = false;
            if (res.data.code === 200) return { isSuccess: true };

            return { isSuccess: false, errorMsg: res.data.message };
        }

        this.isPasswordUpdating = false;
        return { isSuccess: false, errorMsg: '系统错误，新增失败' };
    }
}

export default Store;
