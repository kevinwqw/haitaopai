import React from 'react';
import { observer } from 'mobx-react-lite';
import { MyCarousel } from './MyCarousel';
import BrandCard from '../../HomePage/components/BrandCard';

import { useStore } from '../context';

const BestDiscount = () => {
    const store = useStore();
    const { bestDiscountList, carouselItems } = store;

    return (
        <div id="best-discount-widget">
            <section className="content-section">
                <h1>热门特惠</h1>
                <div className="cards-container">
                    {bestDiscountList.map((item) => (
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
            <div className="rank-list">
                <MyCarousel items={carouselItems} />
            </div>
        </div>
    );
};

export default observer(BestDiscount);
