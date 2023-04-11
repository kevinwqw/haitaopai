import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import CryptoJS from 'crypto-js';
import { Button, Checkbox, Divider, Form, Input } from 'antd';
import { LockOutlined, MobileOutlined } from '@ant-design/icons';

import { useStore } from '../context';
import { loginLabels } from '../../common/constant';

const {
    WELCOME_BACK,
    LOGIN_TITLE,
    MOBILE_NO,
    PASSWORD,
    LOGIN_BTN_TEXT,
    REMEMBER,
    FORGET,
    OR,
    NOT_REGIST,
    CREATE_ACCOUNT,
    ENTER_MOBILE_NO,
    WRONG_MOBILE_FORMAT,
    ENTER_PASSWORD,
    PASSWORD_RULE
} = loginLabels;

const Login = () => {
    const store = useStore();
    const { isLoading, userLogin, isLoginSuccess, scope, loginErrorMsg, setLoginErrorMsg } = store;
    const [loginForm] = Form.useForm();

    const validateUsername = (_, value) => {
        const mobileRegExp = /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;

        if (!value) {
            return Promise.reject(new Error(ENTER_MOBILE_NO));
        }

        if (!mobileRegExp.test(value)) {
            return Promise.reject(new Error(WRONG_MOBILE_FORMAT));
        }

        return Promise.resolve();
    };

    const validatePassword = (_, value) => {
        if (!value) {
            return Promise.reject(new Error(ENTER_PASSWORD));
        }

        if (value.length < 4 || value.length > 20) {
            return Promise.reject(new Error(PASSWORD_RULE));
        }

        return Promise.resolve();
    };

    const enCrypt = (value) => CryptoJS.AES.encrypt(value, 'blinkRebate');

    const deCrypt = (value) => {
        const bytes = CryptoJS.AES.decrypt(value.toString(), 'blinkRebate');
        const plainText = bytes.toString(CryptoJS.enc.Utf8);
        return plainText;
    };

    const setUsrAndPwd = (usr, pwd, expire = 365) => {
        const date = new Date();
        date.setDate(date.getDate() + expire);
        document.cookie = `blink_usr=${usr}; expires=${date}`;
        document.cookie = `blink_pwd=${enCrypt(pwd)}; expires=${date}`;
    };

    const getCookie = (cookieName) => {
        const cookies = document.cookie.split('; ');
        const matchedCookie = cookies.filter((cookie) => cookie.split('=')[0] === cookieName);
        if (matchedCookie.length !== 0) {
            return matchedCookie[0].replace(`${cookieName}=`, '').trim();
        }

        return '';
    };

    const onFinish = async (values) => {
        const { username, password, remember } = values;
        const userInfo = { phone: username, password };
        if (remember) {
            setUsrAndPwd(username, password);
        } else if (getCookie('blink_usr') && getCookie('blink_pwd')) {
            setUsrAndPwd(null, null, -1);
        }
        userLogin(userInfo);
    };

    useEffect(() => {
        const cachedUsr = getCookie('blink_usr');
        const cachedPwd = getCookie('blink_pwd');
        if (cachedUsr && cachedPwd) {
            loginForm.setFieldsValue({ username: cachedUsr, password: deCrypt(cachedPwd), remember: true });
        }
    }, []);

    useEffect(() => {
        if (isLoginSuccess) {
            window.location.href = scope === 'admin'
                ? `${window.location.origin}/admin-center/rebate-management`
                : window.location.origin;
        }
    }, [isLoginSuccess]);

    const handleFormValueChange = () => {
        if (loginErrorMsg) setLoginErrorMsg('');
    };

    return (
        <div id="login-widget">
            <div className="branding-img-wrapper" />
            <div className="login-container">
                <Form onValuesChange={handleFormValueChange} form={loginForm} wrapperCol={{ span: 12, offset: 6 }} onFinish={onFinish} layout="vertical">
                    <Form.Item>
                        <div className="login-header">
                            <span>{WELCOME_BACK}</span>
                            <div>{LOGIN_TITLE}</div>
                        </div>
                    </Form.Item>
                    <Form.Item
                        name="username"
                        validateTrigger="onBlur"
                        rules={[{ required: true, validator: validateUsername }]}
                    >
                        <Input
                            autoComplete="off"
                            addonBefore="+86"
                            prefix={<MobileOutlined />}
                            placeholder={MOBILE_NO}
                        />
                    </Form.Item>
                    <Form.Item style={{ marginBottom: 0 }} name="password" rules={[{ required: true, validator: validatePassword }]}>
                        <Input.Password
                            autoComplete="new-password"
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder={PASSWORD}
                        />
                    </Form.Item>
                    {loginErrorMsg && (
                        <Form.Item style={{ marginBottom: 0 }}>
                            <span style={{ color: '#ff4d4f' }}>{loginErrorMsg}</span>
                        </Form.Item>
                    )}
                    <Form.Item style={{ marginTop: 24 }}>
                        <Button loading={isLoading} block type="primary" htmlType="submit">
                            {LOGIN_BTN_TEXT}
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>{REMEMBER}</Checkbox>
                        </Form.Item>
                        <a className="login-form-forgot" href="/account/password-reset">
                            {FORGET}
                        </a>
                        <Divider style={{ fontSize: 12, color: '#868686' }}>{OR}</Divider>
                        <div className="login-footer">
                            <span>{NOT_REGIST}</span>
                            <a href="/account/signup">{CREATE_ACCOUNT}</a>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default observer(Login);
