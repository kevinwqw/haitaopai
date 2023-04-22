import React from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '../context';

const Transportation = () => {
    const store = useStore();
    const { transList } = store;

    return (
        <div id="transportation-widget">
            <section className="content-section">
                <h1>转运大全</h1>
                <div className="cards-container">
                    {transList.map((item) => {
                        const { href, imgSrc } = item;
                        const customList = [
                            'images/transportation/老友记转运.png',
                            'images/transportation/轻速国际.png',
                            'images/transportation/转运国际.png'
                        ];
                        const customStyle = customList.indexOf(imgSrc) !== -1 ? { backgroundColor: '#000' } : {};
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
    );
};

export default observer(Transportation);
