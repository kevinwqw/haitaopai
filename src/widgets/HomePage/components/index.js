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
                    <img
                        width="100%"
                        height="100%"
                        alt=""
                        src="https://cdn.55haitao.com/bbs/data/attachment/banner/2023/04/12/5d760bba7db4437bf19d4fce8946e437.jpg"
                    />
                </div>
                <div className="promote-image">
                    <img
                        width="100%"
                        height="100%"
                        alt=""
                        src="https://cdn.55haitao.com/bbs/data/attachment/banner/2023/04/11/216e2bdf8aad690e1fb17ab227aa8567.jpg"
                    />
                </div>
                <div className="promote-image">
                    <img
                        width="100%"
                        height="100%"
                        alt=""
                        src="https://cdn.55haitao.com/bbs/data/attachment/banner/2023/03/31/2c329ae9ab2189dc9ff6403c1f42e3ac.jpg"
                    />
                </div>
                <div className="promote-image">
                    <img
                        width="100%"
                        height="100%"
                        alt=""
                        src="https://cdn.55haitao.com/bbs/data/attachment/banner/2023/04/03/02063992529c84cfeb9e199ec4daedfa.jpg"
                    />
                </div>
                <div className="promote-image">
                    <img
                        width="100%"
                        height="100%"
                        alt=""
                        src="https://cdn.55haitao.com/bbs/data/attachment/banner/2023/04/10/52969cc671e9e73215d3422917fcacdc.jpg"
                    />
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
        </div>
    );
};

export default observer(HomePage);
