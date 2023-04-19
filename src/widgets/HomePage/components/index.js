/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { observer } from 'mobx-react-lite';
import { Carousel } from 'antd';

import BrandCard from '../../common/BrandCard';
import MyCarousel from '../../common/MyCarousel';
import { useStore } from '../context';

const HomePage = () => {
    const store = useStore();
    const { storeList, bestSellerlist, transportList, carouselItems } = store;

    const promotePics = [
        { src: '/images/posters/1.jpg', link: `https://www.ssense.com/` },
        { src: '/images/posters/2.jpg', link: `https://www.toryburch.com/en-us/accessories/new-arrivals/` },
        { src: '/images/posters/3.jpg', link: `https://slooks.top/6x96/65` },
        { src: '/images/posters/4.jpg', link: `https://www.carters.com` },
        { src: '/images/posters/5.jpg', link: `www.sephora.com` },
        { src: '/images/posters/6.jpg', link: `https://surprise.katespade.com/shop/deals/todays-deal` }
    ];

    return (
        <div id="home-page-widget">
            <Carousel className="promote-content" autoplay dots effect="fade">
                {promotePics.map((item) => (
                    <a href={item.link} target="_blank">
                        <div className="promote-image">
                            <img width="100%" height="100%" alt="" src={item?.src} />
                        </div>
                    </a>
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
                                        originalPrice={item.originalPrice}
                                        currentPrice={item.currentPrice}
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
