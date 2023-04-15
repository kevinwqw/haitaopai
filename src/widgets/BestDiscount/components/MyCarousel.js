import React, { useRef, useState } from 'react';
import { Carousel } from 'antd';

export const MyCarousel = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(1);
    const carouselRef = useRef(null);

    const onPreClick = () => {
        carouselRef.current.prev();
    };

    const onNextClick = () => {
        carouselRef.current.next();
    };

    const onChange = (cur) => {
        setActiveTabIndex(cur + 1);
    };

    return (
        <div className="carousel">
            <div className="action-bar">
                <img onClick={onPreClick} src={'../../../statics/angle-left.svg'}></img>
                <span>{`${activeTabIndex}/3`}</span>
                <img onClick={onNextClick} src={'../../../statics/angle-right.svg'}></img>
            </div>
            <Carousel ref={carouselRef} autoplay dots={false} afterChange={onChange}>
                <div className="content">
                    <h3>1</h3>
                </div>
                <div className="content">
                    <h3>2</h3>
                </div>
                <div className="content">
                    <h3>3</h3>
                </div>
            </Carousel>
        </div>
    );
};
