import React from 'react';
import PropTypes from 'prop-types';

const BrandCard = (props) => {
    const { brandName, brandId, rebateRate } = props;

    const onClickHandlr = () => {
        window.open(`${window.location.origin}/store/${brandId}`);
    };

    return (
        <div className="brand-card" aria-hidden="true" onClick={onClickHandlr}>
            <img alt="" src={`/images/${brandId}.png`} />
            <div className="brand-content">
                <div>
                    <div className="content-title">{brandName}</div>
                    <div className="content-body">{`最高${rebateRate}%返利`}</div>
                </div>
            </div>
        </div>
    );
};

BrandCard.propTypes = {
    isLogin: PropTypes.bool.isRequired,
    brandId: PropTypes.number,
    brandName: PropTypes.string,
    rebateRate: PropTypes.number
};

BrandCard.defaultProps = {
    brandId: null,
    brandName: '',
    rebateRate: ''
};

export default BrandCard;
