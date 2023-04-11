import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Col, Form, Input, Row } from 'antd';
import { MobileOutlined, CheckCircleFilled } from '@ant-design/icons';

import { useStore } from '../context';
import { loginLabels, signupLabels } from '../../common/constant';
import CaptchaButton from '../../common/CaptchaButton';

const {
    WELCOME_JOIN,
    SIGNUP_TITLE,
    MOBILE_NO,
    CAPTCHA,
    CREATE_PASSWORD,
    CONFIRM_PASSWORD,
    ENTER_CONFIRM_PASSWORD,
    WRONG_CONFIRM_PASSWORD,
    EMAIL,
    INVITE_CODE,
    ALIAS,
    WECHART_ID,
    REGIST,
    ENTER_EMAIL,
    WRONG_EMAIL_FORMAT
} = signupLabels;

const { ENTER_MOBILE_NO, WRONG_MOBILE_FORMAT, ENTER_PASSWORD, PASSWORD_RULE } = loginLabels;

const Signup = () => {
    const store = useStore();
    const { isLoading, getCaptchaCode, userSignup, isSignupSuccess, signupErrorMsg } = store;
    const [signupForm] = Form.useForm();

    const onCaptchaBtnClick = () => {
        const phone = signupForm.getFieldValue('mobileNo');
        getCaptchaCode(phone);
    };

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
        const passwordRegExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,20}$/;

        if (!value) {
            return Promise.reject(new Error(ENTER_PASSWORD));
        }

        if (!passwordRegExp.test(value)) {
            return Promise.reject(new Error(PASSWORD_RULE));
        }

        return Promise.resolve();
    };

    const validateConfirmPassword = (_, value) => {
        if (!value) {
            return Promise.reject(new Error(ENTER_CONFIRM_PASSWORD));
        }

        if (signupForm.getFieldValue('password') !== value) {
            return Promise.reject(new Error(WRONG_CONFIRM_PASSWORD));
        }

        return Promise.resolve();
    };

    const validateEmail = (_, value) => {
        const emailRegExp = /^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z]{2,5}$/;

        if (!value) {
            return Promise.reject(new Error(ENTER_EMAIL));
        }

        if (!emailRegExp.test(value)) {
            return Promise.reject(new Error(WRONG_EMAIL_FORMAT));
        }

        return Promise.resolve();
    };

    const onFinish = async (values) => {
        const { mobileNo, password, captcha, email, inviteCode, alias, wechatId } = values;
        const userInfo = {
            phone: mobileNo,
            password,
            captcha,
            email,
            authCode: inviteCode,
            username: alias,
            wechat: wechatId
        };
        userSignup(userInfo);
    };

    useEffect(() => {
        if (isSignupSuccess) {
            setTimeout(() => {
                window.location.href = `${window.location.origin}/account/login`;
            }, 1000);
        }
    }, [isSignupSuccess]);

    return (
        <div id="signup-widget">
            <div className="branding-img-wrapper" />
            <div className="signup-container">
                <Form form={signupForm} labelCol={{ span: 6 }} wrapperCol={{ span: 14 }} onFinish={onFinish}>
                    <Form.Item wrapperCol={{ span: 14, offset: 6 }}>
                        <div className="signup-header">
                            <span>{WELCOME_JOIN}</span>
                            <div>{SIGNUP_TITLE}</div>
                        </div>
                    </Form.Item>
                    <Form.Item
                        label={MOBILE_NO}
                        required
                        name="mobileNo"
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
                    <Form.Item label={CAPTCHA} required name="msgCode">
                        <Row>
                            <Col span={12}>
                                <Form.Item name="captcha" noStyle>
                                    <Input autoComplete="off" placeholder={CAPTCHA} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <CaptchaButton
                                    buttonStyle={{
                                        width: '100%',
                                        float: 'right',
                                        height: 36,
                                        fontSize: 12,
                                        padding: 0
                                    }}
                                    getCaptchaCode={onCaptchaBtnClick}
                                />
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item
                        label={CREATE_PASSWORD}
                        required
                        name="password"
                        validateTrigger="onBlur"
                        rules={[{ required: true, validator: validatePassword }]}
                    >
                        <Input.Password autoComplete="new-password" placeholder={CREATE_PASSWORD} />
                    </Form.Item>
                    <Form.Item
                        label={CONFIRM_PASSWORD}
                        required
                        name="confirmPassword"
                        validateTrigger="onBlur"
                        rules={[{ required: true, validator: validateConfirmPassword }]}
                    >
                        <Input.Password autoComplete="new-password" placeholder={CONFIRM_PASSWORD} />
                    </Form.Item>
                    <Form.Item
                        label={EMAIL}
                        required
                        name="email"
                        validateTrigger="onBlur"
                        rules={[{ required: true, validator: validateEmail }]}
                    >
                        <Input autoComplete="off" placeholder={EMAIL} />
                    </Form.Item>
                    <Form.Item label={INVITE_CODE} name="inviteCode">
                        <Input autoComplete="off" placeholder={INVITE_CODE} />
                    </Form.Item>
                    <Form.Item label={ALIAS} name="alias">
                        <Input autoComplete="off" placeholder={ALIAS} />
                    </Form.Item>
                    <Form.Item label={WECHART_ID} name="wechatId">
                        <Input autoComplete="off" placeholder={WECHART_ID} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                        <Button block loading={isLoading} type="primary" htmlType="submit">
                            {isSignupSuccess ? (
                                <div>
                                    <CheckCircleFilled style={{ color: '#a7ff7c', marginRight: 4 }} />
                                    注册成功,跳转中...
                                </div>
                            ) : (
                                REGIST
                            )}
                        </Button>
                    </Form.Item>
                </Form>
                {signupErrorMsg && <span className="error-msg">{signupErrorMsg}</span>}
            </div>
        </div>
    );
};

export default observer(Signup);
