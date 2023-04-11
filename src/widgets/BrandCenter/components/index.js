import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Table, notification } from 'antd';
import { useStore } from '../context';

const BrandCenter = () => {
    const store = useStore();
    const {
        brandId, brandName, brandIntro, rebateCategories, rebateRules, isLogin, getUserLink
    } = store;

    const [isRedirecting, setRedirectingState] = useState(false);

    const columns = [
        { key: 'category', dataIndex: 'category', title: '分类返利' },
        {
            key: 'value',
            dataIndex: 'value',
            title: '返利',
            render: (_, record) => <div style={{ color: '#FE8C00' }}>{record.value}</div>
        }
    ];

    const onClickHandlr = () => {
        if (!isLogin) {
            window.location.href = `${window.location.origin}/account/login`;
        } else {
            getUserLink(brandId).then((res) => {
                if (res.success) {
                    if (res.rebateLink) {
                        setRedirectingState(true);
                        window.location.href = res.rebateLink;
                    } else {
                        notification.info({
                            style: {
                                background: 'paleturquoise'
                            },
                            message: '您尚未获得该品牌链接',
                            description: '您的申请已经提交，请等待管理员审核，稍后为您开通专属返利链接。'
                        });
                    }
                } else {
                    notification.info({
                        style: {
                            background: 'paleturquoise'
                        },
                        message: res.code,
                        description: res.message
                    });
                }
            });
        }
    };

    return (
        <div id="brand-center-widget">
            <div className="prod_activity">
                <div className="header">
                    <img alt="" src={`/images/${brandId}.png`} />
                    <div className="store-intro">
                        <div>
                            <div>{brandName}</div>
                        </div>
                        <Button loading={isRedirecting} onClick={onClickHandlr}>
                            {isRedirecting ? '页面跳转中...' : '去购买 拿返利'}
                        </Button>
                    </div>
                </div>
                <div className="instructions">
                    <Table size="middle" columns={columns} dataSource={rebateCategories} pagination={false} />
                </div>
                <div className="attention">
                    <h4>返利说明</h4>
                    <ul>
                        {rebateRules.map((rule) => (
                            <li>{rule}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="prod_intro">
                <div className="header">商家简介</div>
                <div className="content">
                    <p>{brandIntro}</p>
                </div>
            </div>
        </div>
    );
};

export default observer(BrandCenter);
