/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { observer } from 'mobx-react-lite';
import { Carousel } from 'antd';

import BrandCard from '../../common/BrandCard';
import MyCarousel from '../../common/MyCarousel';
import { useStore } from '../context';

const HomePage = () => {
    const store = useStore();
    const { bestSellerlist, hotStoresList, transList, carouselItems1, carouselItems2 } = store;

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
                        <div className="store-cards-container">
                            {hotStoresList.map((store) => (
                                <div>
                                    <a href={store.link}>
                                        <img src={`images/stores/${store.imgSrc}.png`} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section>
                        <div className="section-title">
                            <h1>海淘转运</h1>
                            <a href="/transportation">{'查看全部>'}</a>
                        </div>
                        <div className="trans-cards-container">
                            {transList.map((item) => {
                                const { href, imgSrc } = item;
                                const customList = [
                                    'images/transportation/老友记转运.png',
                                    'images/transportation/轻速国际.png',
                                    'images/transportation/转运国际.png'
                                ];
                                const customStyle =
                                    customList.indexOf(imgSrc) !== -1 ? { backgroundColor: '#000' } : {};
                                return (
                                    <div>
                                        <a href={href}>
                                            <img src={imgSrc} style={customStyle} />
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </div>
                <div className="home-rank-list">
                    <MyCarousel items={carouselItems1} />
                    <MyCarousel items={carouselItems2} />
                </div>
            </div>
        </div>
    );
};

export default observer(HomePage);
