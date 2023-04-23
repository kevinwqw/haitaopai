import { makeAutoObservable } from 'mobx';

class Store {
    isLogin = null;
    loginErrorMsg = null;
    isLoading = false;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    hydrate(data) {
        Object.assign(this, data);
    }

    async init(params) {
        const { isUserLogin } = params;
        this.isLogin = !!isUserLogin;
    }

    async userLogin(userInfo) {
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
                    this.isLogin = data.data.isLogin;
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
