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
                            <h3>{item.store}</h3>
                            {item.prodList.map((prod) => {
                                const { key, imgSrc, title, link, originalPrice, currentPrice } = prod;
                                return (
                                    <a href={link} target="_blank">
                                        <div key={key} className="wrapper">
                                            <img src={imgSrc} style={{ height: 100, width: 100 }}></img>
                                            <div className="content-body">
                                                <p>{title}</p>
                                                <div className="price">
                                                    <b>{currentPrice}</b>
                                                    <span>{originalPrice}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
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
