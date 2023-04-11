/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */
import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Form, Input, Row, Col, message } from 'antd';
import { MobileOutlined, CheckCircleFilled } from '@ant-design/icons';

import { useStore } from '../context';
import { passwordResetLabels, loginLabels } from '../../common/constant';
import CaptchaButton from '../../common/CaptchaButton';

const { ENTER_MOBILE_NO, WRONG_MOBILE_FORMAT } = loginLabels;
const {
    MOBILE_NO, NEW_PASSWORD, CONFIRM_NEW_PASSWORD, PASSWORD_RULE, CAPTCHA, SUBMIT, WRONG_CONFIRM_PASSWORD
} = passwordResetLabels;

const PasswordResetSimple = () => {
    const store = useStore();
    const { isPasswordUpdating, getCaptchaCode, updateUserPassword } = store;

    const [resetForm] = Form.useForm();
    const [isResetSuccess, setResetState] = useState(false);

    const onCaptchaBtnClick = () => {
        const phone = resetForm.getFieldValue('phone');
        getCaptchaCode(phone);
    }

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
            return Promise.reject(new Error(NEW_PASSWORD));
        }

        if (!passwordRegExp.test(value)) {
            return Promise.reject(new Error(PASSWORD_RULE));
        }

        return Promise.resolve();
    };

    const validateConfirmPassword = (_, value) => {
        if (!value) {
            return Promise.reject(new Error(CONFIRM_NEW_PASSWORD));
        }

        if (resetForm.getFieldValue('password') !== value) {
            return Promise.reject(new Error(WRONG_CONFIRM_PASSWORD));
        }

        return Promise.resolve();
    };

    const onFinish = (values) => {
        const { phone, captcha, password } = values;
        updateUserPassword(phone, captcha, password).then((res) => {
            if (res.isSuccess) {
                setResetState(true);
                setTimeout(() => {
                    window.location.href = `${window.location.origin}/account/login`;
                }, 1000);
            } else {
                setResetState(false);
                message.error(res.errorMsg);
            }
        });
    };

    return (
        <div id="password-reset-widget">
            <Form form={resetForm} labelCol={{ span: 6 }} wrapperCol={{ span: 12 }} onFinish={onFinish}>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <div className="header">
                        <span>重置密码</span>
                    </div>
                </Form.Item>
                <Form.Item
                    label={MOBILE_NO}
                    required
                    name="phone"
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
                        <Col span={13}>
                            <Form.Item name="captcha" noStyle>
                                <Input autoComplete="off" placeholder={CAPTCHA} />
                            </Form.Item>
                        </Col>
                        <Col span={11}>
                            <CaptchaButton
                                buttonStyle={{ width: '80%', float: 'right', height: 32, fontSize: 12 }}
                                getCaptchaCode={onCaptchaBtnClick}
                            />
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item
                    label={NEW_PASSWORD}
                    required
                    name="password"
                    validateTrigger="onBlur"
                    rules={[{ required: true, validator: validatePassword }]}
                >
                    <Input.Password autoComplete="new-password" placeholder={NEW_PASSWORD} />
                </Form.Item>
                <Form.Item
                    label={CONFIRM_NEW_PASSWORD}
                    required
                    name="confirmPassword"
                    validateTrigger="onBlur"
                    rules={[{ required: true, validator: validateConfirmPassword }]}
                >
                    <Input.Password autoComplete="new-password" placeholder={CONFIRM_NEW_PASSWORD} />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button block loading={isPasswordUpdating} type="primary" htmlType="submit">
                        {isResetSuccess ? (
                            <div>
                                <CheckCircleFilled style={{ color: '#a7ff7c', marginRight: 4 }} />
                                修改成功，跳转中...
                            </div>
                        ) : (
                            SUBMIT
                        )}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default observer(PasswordResetSimple);
