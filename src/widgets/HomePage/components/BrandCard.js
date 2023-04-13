import React from 'react';
import PropTypes from 'prop-types';

const BrandCard = (props) => {
    const { name, imgSrc, link, rebateRate } = props;

    const onClickHandler = () => {
        window.open(link);
    };

    return (
        <div className="brand-card" aria-hidden="true" onClick={onClickHandler}>
            <img alt="" src={imgSrc} />
            <div className="brand-content">
                <div>
                    <div className="content-title">{name}</div>
                    <div className="content-body">{`最高${rebateRate}%返利`}</div>
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
