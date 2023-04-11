/* eslint-disable no-script-url */
import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Dropdown, Menu, Drawer } from 'antd';
import { UserOutlined, DownOutlined, MenuOutlined } from '@ant-design/icons';

import { useStore } from '../context';
import { globalHeaderLabels } from '../../common/constant';

const { LOGIN, SIGNUP, USER_CENTER, HELP_CENTER, LOGOUT } = globalHeaderLabels;

const GlobalHeader = () => {
    const store = useStore();
    const { phone, scope } = store;

    const [visible, setVisible] = useState(false);

    const handleUserMenuClick = (target) => {
        const { key } = target;
        window.location.href = `${window.location.origin}/${key}`;
    };

    const accountMenu = (
        <Menu onClick={handleUserMenuClick}>
            <Menu.Item key="logout" danger>
                {LOGOUT}
            </Menu.Item>
        </Menu>
    );

    const onLoginIconClick = () => {
        window.location.href = `${window.location.origin}/account/login`;
    };

    const onMenuIconClick = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const onDrawerItemClick = (key) => {
        if (key === 'logout' || key === 'help-center') {
            window.location.href = `${window.location.origin}/${key}`;
        } else {
            window.location.href = `${window.location.origin}/user-center/${key}`;
        }
    };

    return (
        <div id="global-header-widget">
            <div className="header-logo">
                <a
                    href={scope !== 'admin' ? '/' : 'javascript:void(0);'}
                    style={{ cursor: scope !== 'admin' ? 'pointer' : 'default' }}
                >
                    <img className="icon" alt="" src="/images/blink_logo.png" />
                </a>
            </div>
            <div className="header-nav">
                {phone ? (
                    <div>
                        <UserOutlined />
                        <Dropdown
                            trigger="click"
                            placement="bottom"
                            overlayClassName="login-out-overlay"
                            overlay={accountMenu}
                            dropdownAlign={{
                                bottom: {
                                    points: ['tl', 'tr'],
                                    offset: [10, 20]
                                }
                            }}
                        >
                            <span>
                                {phone}
                                <DownOutlined style={{ marginLeft: 4 }} />
                            </span>
                        </Dropdown>
                        {scope !== 'admin' && (
                            <Button type="link" href="/user-center/account-overview">
                                {USER_CENTER}
                            </Button>
                        )}
                    </div>
                ) : (
                    <div>
                        <Button style={{ color: '#FE8C00' }} type="link" href="/account/login">
                            {LOGIN}
                        </Button>
                        <Button type="link" href="/account/signup">
                            {SIGNUP}
                        </Button>
                    </div>
                )}
                {scope !== 'admin' && (
                    <>
                        <div className="spliter" />
                        <Button type="link" href="/help-center">
                            {HELP_CENTER}
                        </Button>
                    </>
                )}
            </div>
            {phone ? (
                <div aria-hidden="true" className="mobile-Menu-icon" onClick={onMenuIconClick}>
                    <MenuOutlined />
                </div>
            ) : (
                <div aria-hidden="true" className="mobile-login-icon" onClick={onLoginIconClick}>
                    <UserOutlined />
                </div>
            )}

            <Drawer
                closable={false}
                width="40vw"
                placement="right"
                onClose={onClose}
                visible={visible}
                contentWrapperStyle={{ marginTop: 61 }}
                bodyStyle={{ padding: 0 }}
            >
                <div aria-hidden="true" className="drawer-menu-item" onClick={() => onDrawerItemClick('account-overview')}>
                    账户概览
                </div>
                <div aria-hidden="true" className="drawer-menu-item" onClick={() => onDrawerItemClick('withdraw-details')}>
                    提现明细
                </div>
                <div aria-hidden="true" className="drawer-menu-item" onClick={() => onDrawerItemClick('rebate-details')}>
                    返利明细
                </div>
                <div aria-hidden="true" className="drawer-menu-item" onClick={() => onDrawerItemClick('apply-withdraw')}>
                    申请提现
                </div>
                <div aria-hidden="true" className="drawer-menu-item" onClick={() => onDrawerItemClick('refer-friend')}>
                    好友推荐计划
                </div>
                <div aria-hidden="true" className="drawer-menu-item" onClick={() => onDrawerItemClick('help-center')}>
                    帮助中心
                </div>
                <div aria-hidden="true" className="drawer-menu-item" style={{ color: 'red' }} onClick={() => onDrawerItemClick('logout')}>
                    退出登录
                </div>
            </Drawer>
        </div>
    );
};

export default observer(GlobalHeader);
