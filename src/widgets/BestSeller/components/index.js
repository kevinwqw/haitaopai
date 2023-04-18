import React from 'react';
import { observer } from 'mobx-react-lite';
import { MyCarousel } from '../../common/MyCarousel';
import BrandCard from '../../common/BrandCard';

import { useStore } from '../context';

const BestSeller = () => {
    const store = useStore();
    const { bestSellerList, carouselItems } = store;
    return (
        <div id="best-seller-widget">
            <div className="l-content">
                <section>
                    <div className="section-title">
                        <h1>热门单品</h1>
                    </div>
                    <div className="cards-container">
                        {bestSellerList.map((item) => (
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
            <div className="rank-list">
                <MyCarousel items={carouselItems} />
            </div>
        </div>
    );
};

export default observer(BestSeller);
