/* eslint-disable no-script-url */
import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Dropdown, Menu, Drawer } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import ExpandableMenu from './ExpandableMenu';

import { useStore } from '../context';

const GlobalHeader = () => {
    const store = useStore();
    const { isLogin } = store;

    const [visible, setVisible] = useState(false);

    const handleUserMenuClick = (target) => {
        const { key } = target;
        window.location.href = `${window.location.origin}/${key}`;
    };

    const accountMenu = (
        <Menu onClick={handleUserMenuClick}>
            <Menu.Item key="logout" danger>
                {'退出登录'}
            </Menu.Item>
        </Menu>
    );

    const onClose = () => {
        setVisible(false);
    };

    const onDrawerItemClick = (key) => {
        if (key === 'logout') {
            window.location.href = `${window.location.origin}/${key}`;
        } else {
            window.location.href = `${window.location.origin}/user-center/${key}`;
        }
    };

    const menuItems = [
        {
            label: (
                <div>
                    {'商家分类'}
                    <DownOutlined style={{ marginLeft: 4, fontSize: 10 }} />
                </div>
            ),
            key: 'stores',
            children: [
                { label: '综合商家', key: 'store1' },
                { label: '美妆个护', key: 'store2' },
                { label: '服饰包袋', key: 'store3' },
                { label: '球鞋潮鞋', key: 'store4' },
                { label: '母婴儿童', key: 'store5' },
                { label: '食品保健', key: 'store6' },
                { label: '户外运动', key: 'store7' }
            ]
        },
        {
            label: (
                <div>
                    {'单品/优惠'}
                    <DownOutlined style={{ marginLeft: 4, fontSize: 10 }} />
                </div>
            ),
            key: 'best',
            children: [
                { label: '热门单品', key: 'bestSeller' },
                { label: '热门优惠', key: 'bestDiscount' }
            ]
        },
        {
            label: '海淘攻略',
            key: 'note'
        },
        {
            label: '转运大全',
            key: 'trans'
        },
        {
            label: '关于海淘派',
            key: 'about'
        }
    ];

    return (
        <header id="global-header-widget">
            <section className="header-content">
                <div className="header-logo">
                    <a href="/" style={{ cursor: 'pointer' }}>
                        <img className="icon" alt="" src="//static.rebatesme.cn/assets-1.5.52/images/pc/logo.svg" />
                    </a>
                </div>
                <div className="header-nav">
                    {isLogin ? (
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
                                    {'我的账户'}
                                    <DownOutlined style={{ marginLeft: 4 }} />
                                </span>
                            </Dropdown>
                        </div>
                    ) : (
                        <div>
                            <Button style={{ color: '#fa8c16' }} type="link" href="/account/login">
                                {'登录'}
                            </Button>
                            <Button
                                style={{
                                    background: '#fa8c16',
                                    color: '#ffffff',
                                    width: '120px',
                                    borderRadius: '16px'
                                }}
                                type="link"
                                href="/account/signup"
                            >
                                {'立即加入'}
                            </Button>
                        </div>
                    )}
                </div>
                <Drawer
                    closable={false}
                    width="40vw"
                    placement="right"
                    onClose={onClose}
                    visible={visible}
                    contentWrapperStyle={{ marginTop: 61 }}
                    bodyStyle={{ padding: 0 }}
                >
                    <div aria-hidden="true" className="drawer-menu-item" onClick={() => onDrawerItemClick('logout')}>
                        退出登录
                    </div>
                </Drawer>
            </section>
            <section className="sub-nav">
                <nav className="sub-nav-content">
                    <ExpandableMenu items={menuItems} />
                </nav>
            </section>
        </header>
    );
};

export default observer(GlobalHeader);
