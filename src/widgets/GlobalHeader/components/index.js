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
                {
                    label: '全部商家',
                    key: 'store0',
                    subMenuListItems: []
                },
                {
                    label: '综合商家',
                    key: 'store1',
                    subMenuListItems: [
                        { imgSrc: `3`, link: `https://www.agoda.com` },
                        { imgSrc: `4`, link: `https://www.alibaba.com` },
                        { imgSrc: `5`, link: `https://www.amazon.com` },
                        { imgSrc: `9`, link: `https://www.bergdorfgoodman.com` },
                        { imgSrc: `10`, link: `https://www.bestbuy.com` },
                        { imgSrc: `11`, link: `https://www.bloomingdale's.com` },
                        { imgSrc: `26`, link: `https://www.dyson.com` },
                        { imgSrc: `27`, link: `https://www.ebay.com` },
                        { imgSrc: `30`, link: `https://www.farfetch.com` },
                        { imgSrc: `37`, link: `https://www.harrods.com` },
                        { imgSrc: `38`, link: `https://www.hilton.com` },
                        { imgSrc: `39`, link: `https://www.hp.com` },
                        { imgSrc: `43`, link: `https://www.jcpenney.com` },
                        { imgSrc: `45`, link: `https://www.jomashop.com` },
                        { imgSrc: `56`, link: `https://www.lordandtaylor.com` },
                        { imgSrc: `59`, link: `https://www.macys.com` },
                        { imgSrc: `62`, link: `https://www.marriott.com` },
                        { imgSrc: `66`, link: `https://www.neimanmarcus.com` },
                        { imgSrc: `67`, link: `https://www.net-a-porter.com` },
                        { imgSrc: `70`, link: `https://www.nordstrom.com` },
                        { imgSrc: `71`, link: `https://www.nordstromrack.com` },
                        { imgSrc: `75`, link: `https://www.qatarairways.com` },
                        { imgSrc: `77`, link: `https://www.saksfifthavenue.com` },
                        { imgSrc: `78`, link: `https://www.saksoff5th.com` },
                        { imgSrc: `79`, link: `https://www.samsclub.com` },
                        { imgSrc: `80`, link: `https://www.selfridges.com` },
                        { imgSrc: `91`, link: `https://www.target.com` },
                        { imgSrc: `93`, link: `https://www.thehut.com` },
                        { imgSrc: `100`, link: `https://www.walmart.com` }
                    ]
                },
                {
                    label: '美妆个护',
                    key: 'store2',
                    subMenuListItems: [
                        {
                            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220511115236.jpg'
                        },
                        {
                            imgSrc: 'https://cdn.55haitao.com/bbs/data/attachment/deal/2023/04/13/1685912d056b78b4531c3cfdba2501a076fe.png'
                        },
                        {
                            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20230220093823.png'
                        },
                        {
                            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20230414095333.png'
                        }
                    ]
                },
                {
                    label: '服饰包袋',
                    key: 'store3',
                    subMenuListItems: [
                        {
                            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20210910180218.png'
                        }
                    ]
                },
                {
                    label: '球鞋潮鞋',
                    key: 'store4',
                    subMenuListItems: [
                        {
                            imgSrc: 'https://cdn.55haitao.com/bbs/data/attachment/deal/2023/04/13/1685912d056b78b4531c3cfdba2501a076fe.png'
                        },
                        {
                            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20220511115236.jpg'
                        },
                        {
                            imgSrc: 'https://cdn.55haitao.com/bbs/data/attachment/deal/2023/04/13/1685912d056b78b4531c3cfdba2501a076fe.png'
                        },
                        {
                            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20230220093823.png'
                        }
                    ]
                },
                {
                    label: '户外运动',
                    key: 'store5',
                    subMenuListItems: [
                        {
                            imgSrc: 'https://cdn.55haitao.com//bbs/data/attachment/store/20230220093823.png'
                        }
                    ]
                }
            ]
        },
        {
            label: '热门单品',
            key: 'bestSeller',
            href: 'best-seller'
        },
        {
            label: '海淘攻略',
            key: 'note',
            href: 'notes'
        },
        {
            label: '转运大全',
            key: 'trans',
            href: 'transportation'
        },
        {
            label: '关于海淘派',
            key: 'about',
            href: 'about'
        }
    ];

    return (
        <header id="global-header-widget">
            <section className="header-content">
                <div className="header-logo">
                    <a href="/" style={{ cursor: 'pointer' }}>
                        <img className="icon" alt="" src="/images/haitaopai-logo.png" />
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
                            <Button className="login-btn" type="link" href="/account/login">
                                {'登录'}
                            </Button>
                            <Button className="signup-btn" type="link" href="/account/signup">
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
