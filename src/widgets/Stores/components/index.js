import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../context';

const Stores = () => {
    const store = useStore();
    const { stores } = store;
    return (
        <div id="stores-widget">
            <section className="content-section">
                <h1>全部商家</h1>
                <div className="cards-container">
                    {stores.map((store) => (
                        <div>
                            <a href={store.link}>
                                <img src={`images/stores/${store.imgSrc}.png`} />
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default observer(Stores);
