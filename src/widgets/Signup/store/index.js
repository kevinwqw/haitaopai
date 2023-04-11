import { makeAutoObservable } from 'mobx';
import BffSdk from '../../sdk';

class Store {
    isLoading = false;
    isSignupSuccess = false;
    isSendAuthCodeSuccess = false;
    signupErrorMsg = '';

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

    * userSignup(userInfo) {
        this.isLoading = true;
        const sdk = new BffSdk();
        const res = yield sdk.userSignup(userInfo);
        if (res.success) {
            if (res.data.code === 200) {
                this.isSignupSuccess = true;
            } else {
                this.isSignupSuccess = false;
                this.signupErrorMsg = `注册失败，${res.data.message}`;
            }
            
        } else {
            this.isSignupSuccess = false;
            this.signupErrorMsg = '注册失败，请稍后再试';
        }
        this.isLoading = false;
    }
}

export default Store;
