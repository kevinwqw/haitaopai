import React from 'react';
import { observer } from 'mobx-react-lite';
import BrandCard from '../../common/BrandCard';

import { useStore } from '../context';

const Stores = () => {
    const store = useStore();
    const { storesList } = store;
    return (
        <div id="stores-widget">
            <section className="content-section">
                <h1>全部商家</h1>
                <div className="cards-container">
                    {storesList.map((item) => (
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
    );
};

export default observer(Stores);
