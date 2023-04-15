import React from 'react';
import { observer } from 'mobx-react-lite';
import BrandCard from './BrandCard';

import { useStore } from '../context';

const Transportation = () => {
    const store = useStore();
    const { storesList } = store;

    return (
        <div id="transportation-widget">
            <section className="content-section">
                <h1>转运大全</h1>
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

export default observer(Transportation);
