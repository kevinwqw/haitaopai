import React from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Typography, Input, Row, Col } from 'antd';
import { useStore } from '../context';

const { Paragraph } = Typography;

const AccountOverview = () => {
    const store = useStore();
    const { inviteCode, balance, paid, paying } = store;

    const onClickHandler = () => {
        window.location.href = `${window.location.origin}/user-center/withdraw-details`;
    };

    return (
        <div className="account-overview">
            <div className="card">
                <div className="header">我的邀请码</div>
                <div className="content">
                    <span>分享专属邀请链接</span>
                    <span>
                        可以将您的专属推荐链接分享到微信，微博或者QQ等，也可以在您朋友注册时，告诉他们在好友推荐邮箱栏中输入您的Email地址。
                    </span>
                    <div className="invite-code-wrapper">
                        <span>我的专属邀请码：</span>
                        <Paragraph copyable={{ tooltips: ['复制', '复制成功'] }}>{inviteCode}</Paragraph>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="header">余额与提现</div>
                <div className="content">
                    <Row justify="space-evenly" gutter={[16, 48]}>
                        <Col>
                            <Row align="middle">
                                <Col>
                                    <span>待提现：</span>
                                </Col>
                                <Col>
                                    <Input disabled addonBefore="USD" value={paying} />
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row align="middle">
                                <Col>
                                    <span>可提现：</span>
                                </Col>
                                <Col>
                                    <Input disabled addonBefore="USD" value={balance} />
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row align="middle">
                                <Col>
                                    <span>已提现：</span>
                                </Col>
                                <Col>
                                    <Input disabled addonBefore="USD" value={paid} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <div className="btn-wrapper">
                        <Button style={{ width: 160 }} type="primary" onClick={onClickHandler}>
                            查看账户明细
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(AccountOverview);
