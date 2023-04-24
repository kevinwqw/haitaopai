import { makeAutoObservable } from 'mobx';

class Store {
    isLogin = false;
    loginErrorMsg = null;
    isLoading = false;
    isLoginModalVisible = false;

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
                    this.setModalVisible(false);
                } else {
                    this.setLoginErrorMsg(data.errorMsg);
                }
            })
            .catch(() => {
                this.setLoginErrorMsg('登录失败，请稍后再试');
            });
    }

    async userSignup(userInfo) {
        this.isLoading = true;
        const sdk = new BffSdk();
        const res = await sdk.userSignup(userInfo);
        if (res.success) {
            if (res.data.code === 200) {
                this.isSignupSuccess = true;
            } else {
                this.isSignupSuccess = false;
                this.setModalVisible(false);
                this.signupErrorMsg = `注册失败，${res.data.message}`;
            }
        } else {
            this.isSignupSuccess = false;
            this.signupErrorMsg = '注册失败，请稍后再试';
        }
        this.isLoading = false;
    }

    setLoginErrorMsg(msg) {
        this.loginErrorMsg = msg;
    }

    setModalVisible(state) {
        this.isLoginModalVisible = state;
    }
}

export default Store;
