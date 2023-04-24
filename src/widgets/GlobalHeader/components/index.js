/* eslint-disable no-script-url */
import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import CryptoJS from 'crypto-js';
import { Button, Dropdown, Menu, Drawer, Modal, Form, Input, Checkbox } from 'antd';
import { UserOutlined, DownOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import ExpandableMenu from './ExpandableMenu';
import { loginLabels } from '../../common/constant';

import { useStore } from '../context';
const { ENTER_PASSWORD, REMEMBER } = loginLabels;

const GlobalHeader = () => {
    const store = useStore();
    const {
        isLogin,
        isLoading,
        userLogin,
        useSignup,
        isLoginSuccess,
        loginErrorMsg,
        setLoginErrorMsg,
        isLoginModalVisible,
        setModalVisible
    } = store;

    const [visible, setVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState(null);
    const [loginForm] = Form.useForm();

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
                    href: '/stores',
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
                        { imgSrc: `6`, link: `https://www.giorgioarmanibeauty-usa.com` },
                        { imgSrc: `8`, link: `https://www.beautyexpert.com` },
                        { imgSrc: `12`, link: `https://www.bluemercury.com` },
                        { imgSrc: `13`, link: `https://www.bobbibrowncosmetics.com` },
                        { imgSrc: `16`, link: `https://www.charlottetilbury.com/us` },
                        { imgSrc: `17`, link: `https://www.cledepeaubeaute.com` },
                        { imgSrc: `18`, link: `https://www.clinique.com` },
                        { imgSrc: `21`, link: `https://www.colourpop.com` },
                        { imgSrc: `23`, link: `https://www.cultbeauty.com` },
                        { imgSrc: `28`, link: `https://www.elizabetharden.com` },
                        { imgSrc: `29`, link: `https://www.esteelauder.com` },
                        { imgSrc: `31`, link: `https://cn.feelunique.com` },
                        { imgSrc: `34`, link: `https://www.fragrancenet.com` },
                        { imgSrc: `40`, link: `https://www.hqhair.com` },
                        { imgSrc: `42`, link: `https://www.itcosmetics.com` },
                        { imgSrc: `44`, link: `https://www.jomalone.com` },
                        { imgSrc: `46`, link: `https://kvdveganbeauty.com` },
                        { imgSrc: `48`, link: `https://www.kiehls.com` },
                        { imgSrc: `49`, link: `https://www.kyliecosmetics.com` },
                        { imgSrc: `50`, link: `https://www.loccitane.com` },
                        { imgSrc: `51`, link: `https://www.cremedelamer.com` },
                        { imgSrc: `52`, link: `https://www.laroche-posay.us` },
                        { imgSrc: `53`, link: `https://www.lancome-usa.com` },
                        { imgSrc: `54`, link: `https://www.lookfantastic.cn` },
                        { imgSrc: `55`, link: `https://www.lookfantastic.com` },
                        { imgSrc: `58`, link: `https://www.maccosmetics.com` },
                        { imgSrc: `60`, link: `https://www.makeupforever.com` },
                        { imgSrc: `61`, link: `https://www.mankind.co.uk` },
                        { imgSrc: `64`, link: `https://www.murad.com` },
                        { imgSrc: `72`, link: `https://www.origins.com` },
                        { imgSrc: `73`, link: `https://www.patmcgrath.com` },
                        { imgSrc: `81`, link: `https://www.sephora.com` },
                        { imgSrc: `82`, link: `https://www.sephora.com/ca/en/` },
                        { imgSrc: `85`, link: `https://www.skinstore.com` },
                        { imgSrc: `86`, link: `https://www.smashbox.com` },
                        { imgSrc: `87`, link: `https://www.spacenk.com` },
                        { imgSrc: `92`, link: `https://www.tatcha.com` },
                        { imgSrc: `96`, link: `https://www.ulta.com` }
                    ]
                },

                {
                    label: '服饰包袋',
                    key: 'store3',
                    subMenuListItems: [
                        { imgSrc: `1`, link: `https://www.24s.com` },
                        { imgSrc: `2`, link: `https://www.adidas.com` },
                        { imgSrc: `7`, link: `https://www.asos.com` },
                        { imgSrc: `15`, link: `https://www.champion.com` },
                        { imgSrc: `19`, link: `https://www.coachoutlet.com` },
                        { imgSrc: `20`, link: `https://www.coach.com` },
                        { imgSrc: `22`, link: `https://www.cos.com` },
                        { imgSrc: `24`, link: `https://www.dvf.com` },
                        { imgSrc: `35`, link: `https://www.freepeople.com` },
                        { imgSrc: `47`, link: `https://www.katespade.com` },
                        { imgSrc: `57`, link: `https://shop.lululemon.com` },
                        { imgSrc: `63`, link: `https://www.michaelkors.com` },
                        { imgSrc: `65`, link: `https://www.mytheresa.com` },
                        { imgSrc: `68`, link: `https://www.nike.com` },
                        { imgSrc: `69`, link: `https://www.nike.cn` },
                        { imgSrc: `83`, link: `https://us.shein.com` },
                        { imgSrc: `84`, link: `https://www.shopbop.com` },
                        { imgSrc: `89`, link: `https://www.ssense.com` },
                        { imgSrc: `90`, link: `https://www.stuartweitzman.com` },
                        { imgSrc: `94`, link: `https://usa.tommy.com/en` },
                        { imgSrc: `95`, link: `https://www.toryburch.com` },
                        { imgSrc: `98`, link: `https://www.urbanoutfitters.com` },
                        { imgSrc: `99`, link: `https://www.victoriassecret.com` }
                    ]
                },

                {
                    label: '球鞋潮鞋',
                    key: 'store4',
                    subMenuListItems: [
                        { imgSrc: `2`, link: `https://www.adidas.com` },
                        { imgSrc: `27`, link: `https://www.ebay.com` },
                        { imgSrc: `32`, link: `https://www.finishline.com` },
                        { imgSrc: `33`, link: `https://www.footlocker.com` },
                        { imgSrc: `68`, link: `https://www.nike.com` },
                        { imgSrc: `69`, link: `https://www.nike.cn` }
                    ]
                },

                {
                    label: '户外运动',
                    key: 'store5',
                    subMenuListItems: [
                        { imgSrc: `2`, link: `https://www.adidas.com` },
                        { imgSrc: `32`, link: `https://www.finishline.com` },
                        { imgSrc: `33`, link: `https://www.footlocker.com` },
                        { imgSrc: `57`, link: `https://shop.lululemon.com` },
                        { imgSrc: `68`, link: `https://www.nike.com` },
                        { imgSrc: `69`, link: `https://www.nike.cn` },
                        { imgSrc: `76`, link: `https://www.ray-ban.com` },
                        { imgSrc: `88`, link: `https://www.speedo.com` },
                        { imgSrc: `97`, link: `https://www.underarmour.com` }
                    ]
                },

                {
                    label: '食品保健',
                    key: 'store6',
                    subMenuListItems: [
                        { imgSrc: `36`, link: `https://www.godiva.com` },
                        { imgSrc: `41`, link: `https://www.iherb.com` },
                        { imgSrc: `74`, link: `https://www.priceline.com` },
                        { imgSrc: `75`, link: `https://www.qatarairways.com` },
                        { imgSrc: `79`, link: `https://www.samsclub.com` }
                    ]
                },

                {
                    label: '母婴儿童',
                    key: 'store7',
                    subMenuListItems: [
                        { imgSrc: `14`, link: `https://www.carters.com` },
                        { imgSrc: `25`, link: `https://www.shopdisney.com` }
                    ]
                }
            ]
        },
        {
            label: '热门单品',
            key: 'bestSeller',
            href: '/best-seller'
        },
        {
            label: '海淘攻略',
            key: 'note',
            href: '/notes'
        },
        {
            label: '转运大全',
            key: 'trans',
            href: '/transportation'
        },
        {
            label: '关于海淘派',
            key: 'about',
            href: '/about'
        }
    ];

    const validatePassword = (_, value) => {
        if (!value) {
            return Promise.reject(new Error(ENTER_PASSWORD));
        }

        return Promise.resolve();
    };

    const enCrypt = (value) => CryptoJS.AES.encrypt(value, 'haitaopai');

    const deCrypt = (value) => {
        const bytes = CryptoJS.AES.decrypt(value.toString(), 'haitaopai');
        const plainText = bytes.toString(CryptoJS.enc.Utf8);
        return plainText;
    };

    const setUsrAndPwd = (usr, pwd, expire = 365) => {
        const date = new Date();
        date.setDate(date.getDate() + expire);
        document.cookie = `htp_usr=${usr}; expires=${date}`;
        document.cookie = `htp_pwd=${enCrypt(pwd)}; expires=${date}`;
    };

    const getCookie = (cookieName) => {
        const cookies = document.cookie.split('; ');
        const matchedCookie = cookies.filter((cookie) => cookie.split('=')[0] === cookieName);
        if (matchedCookie.length !== 0) {
            return matchedCookie[0].replace(`${cookieName}=`, '').trim();
        }

        return '';
    };

    const onFinish = async (values) => {
        const { email, password, remember } = values;
        const userInfo = { email, password };
        if (remember) {
            setUsrAndPwd(email, password);
        } else if (getCookie('htp_usr') && getCookie('htp_pwd')) {
            setUsrAndPwd(null, null, -1);
        }

        if (modalTitle === '登录') {
            userLogin(userInfo);
        } else {
            useSignup(userInfo);
        }
    };

    useEffect(() => {
        const cachedUsr = getCookie('htp_usr');
        const cachedPwd = getCookie('htp_pwd');
        if (cachedUsr && cachedPwd) {
            loginForm.setFieldsValue({ email: cachedUsr, password: deCrypt(cachedPwd), remember: true });
        }
    }, []);

    useEffect(() => {
        if (isLoginSuccess) {
            window.location.href = window.location.origin;
        }
    }, [isLoginSuccess]);

    const handleFormValueChange = () => {
        if (loginErrorMsg) setLoginErrorMsg('');
    };

    const onLoginClick = () => {
        setModalTitle('登录');
        setModalVisible(true);
    };

    const onSignupClick = () => {
        setModalTitle('注册');
        setModalVisible(true);
    };

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
                                <UserOutlined />
                            </Dropdown>
                        </div>
                    ) : (
                        <div>
                            <Button className="login-btn" type="link" onClick={onLoginClick}>
                                登录
                            </Button>
                            <Button className="signup-btn" type="link" onClick={onSignupClick}>
                                立即加入
                            </Button>
                        </div>
                    )}
                </div>
                <Drawer
                    closable={false}
                    width="40vw"
                    placement="right"
                    onClose={onClose}
                    open={visible}
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

            <Modal
                title={modalTitle}
                open={isLoginModalVisible}
                footer={null}
                onCancel={() => setLoginModalVisible(false)}
            >
                <Form
                    onValuesChange={handleFormValueChange}
                    form={loginForm}
                    wrapperCol={{ span: 16, offset: 4 }}
                    onFinish={onFinish}
                    layout="vertical"
                >
                    <Form.Item
                        name="email"
                        validateTrigger="onBlur"
                        rules={[{ type: 'email', required: true, message: '邮箱格式不正确' }]}
                    >
                        <Input
                            style={{ borderRadius: 20, height: 40 }}
                            autoComplete="off"
                            prefix={<MailOutlined />}
                            placeholder="邮箱"
                        />
                    </Form.Item>
                    <Form.Item
                        style={{ marginBottom: 0 }}
                        name="password"
                        rules={[{ required: true, validator: validatePassword }]}
                    >
                        <Input.Password
                            style={{ borderRadius: 20, height: 40 }}
                            autoComplete="new-password"
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="密码"
                        />
                    </Form.Item>
                    {loginErrorMsg && (
                        <Form.Item style={{ marginBottom: 0 }}>
                            <span style={{ color: '#ff4d4f' }}>{loginErrorMsg}</span>
                        </Form.Item>
                    )}
                    <Form.Item style={{ marginTop: 24 }}>
                        <Button
                            style={{ borderRadius: 20, height: 40 }}
                            loading={isLoading}
                            block
                            type="primary"
                            htmlType="submit"
                        >
                            登录
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>{REMEMBER}</Checkbox>
                        </Form.Item>
                    </Form.Item>
                </Form>
            </Modal>
        </header>
    );
};

export default observer(GlobalHeader);
