import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Steps, Form, Input, Result } from 'antd';
import { MobileOutlined } from '@ant-design/icons';

import { useStore } from '../context';
import { passwordResetLabels, loginLabels } from '../../common/constant';
import CaptchaButton from '../../common/CaptchaButton';

const { Step } = Steps;
const { ENTER_MOBILE_NO, WRONG_MOBILE_FORMAT } = loginLabels;
const {
    CONFIRM_ACCOUNT_NAME,
    VERIFY,
    RESET,
    DONE,
    MOBILE_NO,
    SEND,
    NEW_PASSWORD,
    CONFIRM_NEW_PASSWORD,
    CAPTCHA,
    DONE_SENDING,
    INPUT_CODE,
    SUBMIT
    // NOT_RECEIVE,
    // RESEND
} = passwordResetLabels;
const PasswordReset = () => {
    const store = useStore();
    const { isLoading } = store;
    const [activeStep, setActiveStep] = useState(0);

    const validateUsername = (_, value) => {
        const mobileRegExp = /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;

        if (!value) {
            return Promise.reject(new Error(ENTER_MOBILE_NO));
        }

        if (!mobileRegExp.test(value) && value !== 'admin') {
            return Promise.reject(new Error(WRONG_MOBILE_FORMAT));
        }

        return Promise.resolve();
    };

    const onSendClick = () => {
        setActiveStep(1);
    };

    const onConfirmClick = () => {
        setActiveStep(2);
    };

    const onUpdateClick = () => {
        setActiveStep(3);
    };

    const onDoneBtnClick = () => {
        window.location.href = `${window.location.origin}/account/login`;
    };

    const resendMsgCode = () => {};

    return (
        <div id="password-reset-widget">
            <Steps size="small" current={activeStep}>
                <Step title={CONFIRM_ACCOUNT_NAME} />
                <Step title={VERIFY} />
                <Step title={RESET} />
                <Step title={DONE} />
            </Steps>
            <div className="step-content-container">
                {activeStep === 0 && (
                    <div className="step_one">
                        <Form>
                            <Form.Item
                                label="手机号码"
                                required
                                name="mobileNo"
                                validateTrigger="onBlur"
                                rules={[{ required: true, validator: validateUsername }]}
                            >
                                <Input addonBefore="+86" prefix={<MobileOutlined />} placeholder={MOBILE_NO} />
                            </Form.Item>
                        </Form>
                        <Button
                            loading={isLoading}
                            style={{ width: 260, float: 'right' }}
                            type="primary"
                            onClick={onSendClick}
                        >
                            {SEND}
                        </Button>
                    </div>
                )}
                {activeStep === 1 && (
                    <div className="step_two">
                        <div>{DONE_SENDING}</div>
                        <div>{INPUT_CODE}</div>
                        <Form>
                            <Form.Item wrapperCol={{ span: 16 }} required name="captcha">
                                <Input placeholder={CAPTCHA} />
                            </Form.Item>
                        </Form>
                        <Button
                            loading={isLoading}
                            style={{ width: 238 }}
                            type="primary"
                            block
                            onClick={onConfirmClick}
                        >
                            {SUBMIT}
                        </Button>
                        <div className="msg-wrapper">
                            <span>{`如果在5分钟后仍未收到短信，可以试试 `}</span>
                            <CaptchaButton
                                type="link"
                                buttonText="重新发送一遍"
                                getCaptchaCode={resendMsgCode}
                                mobile={123123123123}
                            />
                        </div>
                    </div>
                )}
                {activeStep === 2 && (
                    <div className="step_three">
                        <Form labelCol={{ span: 8 }}>
                            <Form.Item label={NEW_PASSWORD} required name="password">
                                <Input placeholder={NEW_PASSWORD} />
                            </Form.Item>
                            <Form.Item label={CONFIRM_NEW_PASSWORD} required name="confirmPassword">
                                <Input placeholder={CONFIRM_NEW_PASSWORD} />
                            </Form.Item>
                        </Form>
                        <Button
                            loading={isLoading}
                            style={{ width: 226, float: 'right' }}
                            type="primary"
                            onClick={onUpdateClick}
                        >
                            {SUBMIT}
                        </Button>
                    </div>
                )}
                {activeStep === 3 && (
                    <Result
                        status="success"
                        title="修改成功"
                        extra={[
                            <Button type="primary" key="console" onClick={onDoneBtnClick}>
                                完成
                            </Button>
                        ]}
                    />
                )}
            </div>
        </div>
    );
};

export default observer(PasswordReset);
