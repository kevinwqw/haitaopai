import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import {
    DashboardOutlined,
    MoneyCollectOutlined,
    UsergroupAddOutlined,
    PayCircleOutlined,
    TransactionOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import AccountOverview from './AccountOverview';
import RebateDetails from './RebateDetails';
import ReferFriend from './ReferFriend';
import WithdrawDetails from './WithdrawDetails';
import WithdrawApply from './WithdrawApply';
import { useStore } from '../context';

const { Content, Sider } = Layout;

const UserCenter = () => {
    const store = useStore();
    const { activeTabName } = store;
    const [activeNavKey, setActiveNavKey] = useState();
    const [breadList, setBreadList] = useState([
        { key: 'homePage', value: '首页' },
        { key: 'user-center', value: '用户中心' },
        { key: 'account-overview', value: '用户概览' }
    ]);

    const navItems = [
        { key: 'account-overview', icon: <DashboardOutlined />, label: '账户概览' },
        {
            key: 'rebate-withdraw',
            icon: <MoneyCollectOutlined />,
            label: '返利与提现',
            children: [
                {
                    key: 'withdraw-details',
                    icon: <PayCircleOutlined />,
                    label: '提现明细'
                },
                {
                    key: 'rebate-details',
                    icon: <TransactionOutlined />,
                    label: '返利明细'
                },
                {
                    key: 'apply-withdraw',
                    icon: <TransactionOutlined />,
                    label: '申请提现'
                }
            ]
        },
        { key: 'refer-friend', icon: <UsergroupAddOutlined />, label: '好友推荐计划' }
    ];

    const onMenuClickHandler = ({ key }) => {
        window.location.href = `${window.location.origin}/user-center/${key}`;
    };

    useEffect(() => {
        if (activeTabName) {
            setActiveNavKey([activeTabName]);
            const defaultBreadItems = breadList.slice(0, 2);
            switch (activeTabName) {
                case 'account-overview':
                    setBreadList([...defaultBreadItems, { activeTabName, value: '账户概览' }]);
                    break;
                case 'withdraw-details':
                    setBreadList([
                        ...defaultBreadItems,
                        { key: 'rebate-withdraw', value: '返利与提现' },
                        { activeTabName, value: '提现明细' }
                    ]);
                    break;
                case 'rebate-details':
                    setBreadList([
                        ...defaultBreadItems,
                        { key: 'rebate-withdraw', value: '返利与提现' },
                        { activeTabName, value: '返利明细' }
                    ]);
                    break;
                case 'apply-withdraw':
                    setBreadList([
                        ...defaultBreadItems,
                        { key: 'rebate-withdraw', value: '返利与提现' },
                        { activeTabName, value: '申请提现' }
                    ]);
                    break;
                case 'refer-friend':
                    setBreadList([...defaultBreadItems, { activeTabName, value: '好友推荐计划' }]);
                    break;
                default:
                    break;
            }
        }
    }, [activeTabName]);

    return (
        <div id="user-center-widget">
            <Layout>
                <Sider width={220} className="site-layout-background">
                    <Menu
                        mode="inline"
                        style={{
                            height: '100%',
                            borderRight: 0
                        }}
                        items={navItems}
                        selectedKeys={activeNavKey}
                        defaultOpenKeys={['rebate-withdraw']}
                        onClick={onMenuClickHandler}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px'
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 22px'
                        }}
                    >
                        {breadList.map((item) => (
                            <Breadcrumb.Item key={item.key}>{item.value}</Breadcrumb.Item>
                        ))}
                    </Breadcrumb>
                    <Content
                        className="content"
                        style={{
                            padding: '12px 24px',
                            margin: 0,
                            minHeight: 280
                        }}
                    >
                        {activeTabName === 'account-overview' && <AccountOverview />}
                        {activeTabName === 'withdraw-details' && <WithdrawDetails />}
                        {activeTabName === 'rebate-details' && <RebateDetails />}
                        {activeTabName === 'apply-withdraw' && <WithdrawApply />}
                        {activeTabName === 'refer-friend' && <ReferFriend />}
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default observer(UserCenter);
