/* eslint-disable promise/always-return */
import { makeAutoObservable } from 'mobx';

class Store {
    scope = 'user';
    isLoading = false;
    isLoginSuccess = false;
    loginErrorMsg = '';

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

    userLogin(userInfo) {
        this.setLoginErrorMsg('');
        this.isLoading = true;
        const postBody = userInfo;
        fetch('/login/callback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postBody)
        })
            .then((response) => response.json())
            .then((data) => {
                this.isLoading = false;
                if (data.success) {
                    this.scope = data.data.scope;
                    this.isLoginSuccess = data.success;
                } else {
                    this.setLoginErrorMsg(data.errorMsg);
                }
            })
            .catch(() => {
                this.setLoginErrorMsg('登录失败，请稍后再试');
            });
    }

    setLoginErrorMsg(msg) {
        this.loginErrorMsg = msg;
    }
}

export default Store;
