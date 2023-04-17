import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';

export const MyCarousel = (props) => {
    const { items } = props;
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
            <section className="carousel-title-section">
                <h1>促销排行榜</h1>
                <div className="action-bar">
                    <img onClick={onPreClick} src="/images/angle-left.svg"></img>
                    <span>{`${activeTabIndex}/3`}</span>
                    <img onClick={onNextClick} src="/images/angle-right.svg"></img>
                </div>
            </section>
            <Carousel ref={carouselRef} autoplay dots={false} afterChange={onChange}>
                {items.map((item) => {
                    return (
                        <div className="content">
                            {item.map((prod) => {
                                const { key, title, imgSrc, desc } = prod;
                                return (
                                    <div key={key} className="wrapper">
                                        <img src={imgSrc} style={{ height: 100, width: 100 }}></img>
                                        <div>
                                            <p>{desc}</p>
                                            <span>{title}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

MyCarousel.propTypes = {
    items: PropTypes.array.isRequired
};

export default MyCarousel;
