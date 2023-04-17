/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { observer } from 'mobx-react-lite';
import { Carousel } from 'antd';

import BrandCard from './BrandCard';
import MyCarousel from '../../common/MyCarousel';
import { useStore } from '../context';

const HomePage = () => {
    const store = useStore();
    const { storeList, bestSellerlist, transportList, carouselItems } = store;

    const promotePics = [
        { src: 'https://cdn.55haitao.com/bbs/data/attachment/banner/2023/04/12/5d760bba7db4437bf19d4fce8946e437.jpg' },
        { src: 'https://cdn.55haitao.com/bbs/data/attachment/banner/2023/04/11/216e2bdf8aad690e1fb17ab227aa8567.jpg' },
        { src: 'https://cdn.55haitao.com/bbs/data/attachment/banner/2023/03/31/2c329ae9ab2189dc9ff6403c1f42e3ac.jpg' },
        { src: 'https://cdn.55haitao.com/bbs/data/attachment/banner/2023/04/03/02063992529c84cfeb9e199ec4daedfa.jpg' },
        { src: 'https://cdn.55haitao.com/bbs/data/attachment/banner/2023/04/10/52969cc671e9e73215d3422917fcacdc.jpg' }
    ];

    return (
        <div id="home-page-widget">
            <Carousel className="promote-content" autoplay effect="fade">
                {promotePics.map((item) => (
                    <div className="promote-image">
                        <img width="100%" height="100%" alt="" src={item?.src} />
                    </div>
                ))}
            </Carousel>
            <div className="content-container">
                <div className="l-content">
                    <section>
                        <div className="section-title">
                            <h1>热门单品</h1>
                            <a href="best-seller">{'查看全部>'}</a>
                        </div>
                        <div className="cards-container">
                            {bestSellerlist.map((item) => (
                                <div className="card-wrapper">
                                    <BrandCard
                                        key={item.key}
                                        link={item.link}
                                        imgSrc={item.imgSrc}
                                        name={item.name}
                                        rebateRate={item.rebateRate}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                    <section>
                        <div className="section-title">
                            <h1>热门商家</h1>
                            <a href="/stores">{'查看全部>'}</a>
                        </div>
                        <div className="cards-container">
                            {storeList.map((item) => (
                                <div className="card-wrapper">
                                    <BrandCard
                                        key={item.key}
                                        link={item.link}
                                        imgSrc={item.imgSrc}
                                        name={item.name}
                                        rebateRate={item.rebateRate}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                    <section>
                        <div className="section-title">
                            <h1>海淘转运</h1>
                            <a href="/transportation">{'查看全部>'}</a>
                        </div>
                        <div className="cards-container">
                            {transportList.map((item) => (
                                <div className="card-wrapper">
                                    <BrandCard
                                        key={item.key}
                                        link={item.link}
                                        imgSrc={item.imgSrc}
                                        name={item.name}
                                        rebateRate={item.rebateRate}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
                <div className="home-rank-list">
                    <MyCarousel items={carouselItems} />
                </div>
            </div>
        </div>
    );
};

export default observer(HomePage);
