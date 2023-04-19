import React from 'react';
import PropTypes from 'prop-types';

const BrandCard = (props) => {
    const { name, imgSrc, link, originalPrice, currentPrice } = props;

    const onClickHandler = () => {
        window.open(link);
    };

    return (
        <div className="brand-card" aria-hidden="true" onClick={onClickHandler}>
            <img alt="" src={imgSrc} />
            <div className="brand-content">
                <div>
                    <span className="content-title">{name}</span>
                    <div className="content-body">
                        <b>{originalPrice}</b>
                        <span>{currentPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

BrandCard.propTypes = {
    link: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rebateRate: PropTypes.number
};

BrandCard.defaultProps = {
    link: '',
    rebateRate: ''
};

export default BrandCard;
