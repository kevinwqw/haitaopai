/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */
import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Form, Input, Tabs, notification } from 'antd';

import { useStore } from '../context';

const { TabPane } = Tabs;

const WithdrawApply = () => {
    const store = useStore();
    const { exchangeRate, balance, submitWithdraw, isSubmiting, getUserBalance } = store;

    const [bankcardForm] = Form.useForm();
    const [apiPayForm] = Form.useForm();

    const [rmbWithdrawAmountBank, setRMBWithdrawAmountBank] = useState();
    const [rmbWithdrawAmountAliPay, setRMBWithdrawAmountAliPay] = useState();

    const getRmbAmountBank = (e) => {
        const { value } = e.target;
        if (!value) {
            setRMBWithdrawAmountBank(value);
        } else {
            const rmbAmount = value * exchangeRate;
            setRMBWithdrawAmountBank(rmbAmount.toFixed(2));
        }
    };

    const getRmbAmountAliPay = (e) => {
        const { value } = e.target;
        if (!value) {
            setRMBWithdrawAmountAliPay(value);
        } else {
            const rmbAmount = value * exchangeRate;
            setRMBWithdrawAmountAliPay(rmbAmount.toFixed(2));
        }
    };

    const validateBankNo = (_, value) => {
        const bankNoRegexp = /^([1-9]{1})(\d{15}|\d{16}|\d{18})$/;

        if (!value) {
            return Promise.reject(new Error('请输入银行卡号'));
        }

        if (!bankNoRegexp.test(value)) {
            return Promise.reject(new Error('银行卡号格式不正确'));
        }

        return Promise.resolve();
    };

    const validateConfirmBankNo = (_, value) => {
        if (!value) {
            return Promise.reject(new Error('请输入确认银行卡号'));
        }

        if (bankcardForm.getFieldValue('bankNo') !== value) {
            return Promise.reject(new Error('卡号和确认卡号不一致'));
        }

        return Promise.resolve();
    };

    const validateIdNo = (_, value) => {
        const idNoRegexp = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

        if (!value) {
            return Promise.reject(new Error('请输入身份证号'));
        }

        if (!idNoRegexp.test(value)) {
            return Promise.reject(new Error('身份证号格式不正确'));
        }

        return Promise.resolve();
    };

    const validateAlipayNo = (_, value) => {
        if (!value) {
            return Promise.reject(new Error('请输入确认支付宝账号'));
        }

        if (apiPayForm.getFieldValue('alipayAccount') !== value) {
            return Promise.reject(new Error('账号和确认账号不一致'));
        }

        return Promise.resolve();
    };

    const validateAmount = (_, value) => {
        if (!value) {
            return Promise.reject(new Error('请输入提现金额'));
        }

        if (value > balance) {
            return Promise.reject(new Error(`已超出最大体现金额$${balance}`));
        }

        if (value < 10) {
            return Promise.reject(new Error('提现金额需大于10美金'));
        }

        return Promise.resolve();
    };

    const onBankWithdrawFinish = (values) => {
        submitWithdraw({ payType: 1, ...values }).then((res) => {
            if (res.isSuccess) {
                notification.success({
                    style: {
                        background: 'paleturquoise'
                    },
                    message: res.title,
                    description: '提现申请已经提交，请等待管理员审核，预计7个工作日内到账。'
                });
                getUserBalance();
                bankcardForm.resetFields();
            } else {
                notification.error({
                    style: {
                        background: 'paleturquoise'
                    },
                    message: res.title,
                    description: res.errorMsg
                });
            }
        });
    };

    const onAlipayWithdrawFinish = (values) => {
        submitWithdraw({ payType: 2, ...values }).then((res) => {
            if (res.isSuccess) {
                notification.success({
                    style: {
                        background: 'paleturquoise'
                    },
                    message: res.title,
                    description: '提现申请已经提交，请等待管理员审核，预计7个工作日内到账。'
                });
                getUserBalance();
                apiPayForm.resetFields();
            } else {
                notification.error({
                    style: {
                        background: 'paleturquoise'
                    },
                    message: res.title,
                    description: res.errorMsg
                });
            }
        });
    };

    return (
        <div className="withdraw-apply">
            <Tabs defaultActiveKey="1">
                <TabPane tab="银行卡提现" key="1">
                    <div className="bank-card-withdraw">
                        <Form
                            onFinish={onBankWithdrawFinish}
                            form={bankcardForm}
                            labelCol={{ span: 6, offset: 4 }}
                            wrapperCol={{
                                span: 5
                            }}
                        >
                            <Form.Item
                                label="姓名"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入姓名'
                                    }
                                ]}
                            >
                                <Input autoComplete="off" placeholder="姓名" />
                            </Form.Item>
                            <Form.Item
                                label="开户行"
                                name="bankName"
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入开户行'
                                    }
                                ]}
                            >
                                <Input autoComplete="off" placeholder="开户行" />
                            </Form.Item>
                            <Form.Item
                                label="银行卡号"
                                name="bankNo"
                                validateTrigger="onBlur"
                                rules={[
                                    {
                                        required: true,
                                        validator: validateBankNo
                                    }
                                ]}
                            >
                                <Input autoComplete="off" placeholder="银行卡号" />
                            </Form.Item>
                            <Form.Item
                                label="确认银行卡号"
                                name="ConfirmedBankNo"
                                validateTrigger="onBlur"
                                rules={[{ required: true, validator: validateConfirmBankNo }]}
                            >
                                <Input autoComplete="off" placeholder="确认银行卡号" />
                            </Form.Item>
                            <Form.Item
                                label="身份证号码"
                                name="idNo"
                                validateTrigger="onBlur"
                                rules={[
                                    {
                                        required: true,
                                        validator: validateIdNo
                                    }
                                ]}
                            >
                                <Input autoComplete="off" placeholder="身份证号码" />
                            </Form.Item>
                            <Form.Item
                                style={{ marginBottom: 0 }}
                                label="提现金额"
                                name="account"
                                onChange={getRmbAmountBank}
                                validateTrigger="onChange"
                                rules={[{ required: true, validator: validateAmount }]}
                            >
                                <Input autoComplete="off" placeholder={`最多可提$${balance}`} />
                            </Form.Item>
                            {rmbWithdrawAmountBank && (
                                <Form.Item wrapperCol={{ span: 5, offset: 10 }} style={{ marginBottom: 0 }}>
                                    <span className="ant-form-text">{`换算为人民币:${rmbWithdrawAmountBank}元`}</span>
                                </Form.Item>
                            )}
                            <Form.Item wrapperCol={{ span: 5, offset: 10 }} style={{ marginTop: 24 }}>
                                <Button block isLoading={isSubmiting} type="primary" htmlType="submit">
                                    确认提现
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </TabPane>
                <TabPane tab="支付宝提现" key="2">
                    <div className="ali-pay-withdraw">
                        <Form
                            form={apiPayForm}
                            labelCol={{ span: 6, offset: 4 }}
                            wrapperCol={{
                                span: 5
                            }}
                            onFinish={onAlipayWithdrawFinish}
                        >
                            <Form.Item
                                label="支付宝账号"
                                name="alipayAccount"
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入支付宝账号'
                                    }
                                ]}
                            >
                                <Input autoComplete="off" placeholder="支付宝账号" />
                            </Form.Item>
                            <Form.Item
                                label="确认支付宝账号"
                                name="ConfirmedAlipayAccount"
                                rules={[{ required: true, validator: validateAlipayNo }]}
                            >
                                <Input autoComplete="off" placeholder="确认支付宝账号" />
                            </Form.Item>
                            <Form.Item
                                label="姓名"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入姓名'
                                    }
                                ]}
                            >
                                <Input autoComplete="off" placeholder="姓名" />
                            </Form.Item>
                            <Form.Item
                                style={{ marginBottom: 0 }}
                                label="提现金额"
                                name="account"
                                onChange={getRmbAmountAliPay}
                                validateTrigger="onChange"
                                rules={[{ required: true, validator: validateAmount }]}
                            >
                                <Input autoComplete="off" placeholder={`最多可提$${balance}`} />
                            </Form.Item>
                            {rmbWithdrawAmountAliPay && (
                                <Form.Item wrapperCol={{ span: 5, offset: 10 }} style={{ marginBottom: 0 }}>
                                    <span className="ant-form-text">{`换算为人民币:${rmbWithdrawAmountAliPay}元`}</span>
                                </Form.Item>
                            )}
                            <Form.Item wrapperCol={{ span: 5, offset: 10 }} style={{ marginTop: 24 }}>
                                <Button block isLoading={isSubmiting} type="primary" htmlType="submit">
                                    确认提现
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </TabPane>
            </Tabs>
        </div>
    );
};

export default observer(WithdrawApply);
