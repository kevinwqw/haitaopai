/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { observer } from 'mobx-react-lite';
import { Carousel, Row, Col, Spin } from 'antd';

import BrandCard from './BrandCard';
import { useStore } from '../context';

const HomePage = () => {
    const store = useStore();
    const { isLoading, isLogin, brandList } = store;

    return (
        <div id="home-page-widget">
            <Carousel autoplay effect="fade">
                <div className="promote-image">
                    <img width="100%" height="100%" alt="" src="/images/promote_1.jpg" />
                </div>
                <div className="promote-image">
                    <img width="100%" height="100%" alt="" src="/images/promote_2.jpg" />
                </div>
                <div className="promote-image">
                    <img width="100%" height="100%" alt="" src="/images/promote_3.jpg" />
                </div>
            </Carousel>
            <div className="brand-cards-container">
                {isLoading ? (
                    <Spin size="large" />
                ) : (
                    <>
                        {brandList.map((item) => (
                                <div className="card-wrapper">
                                    <BrandCard
                                        isLogin={isLogin}
                                        key={item.brandId}
                                        brandId={item.brandId}
                                        brandName={item.brandName}
                                        rebateRate={item.rebateRate}
                                    />
                                </div>
                        ))}
                    </>
                )}
            </div>
            <div className="footer">
                <div className="footer-content">
                    <span>ICP备案号：</span>
                    <a href="https://beian.miit.gov.cn/" target="_blank">
                        冀ICP备2022016182号-1
                    </a>
                </div>
            </div>
            <img className="qr-image" alt="" src="images/wechat.jpg" />
        </div>
    );
};

export default observer(HomePage);
