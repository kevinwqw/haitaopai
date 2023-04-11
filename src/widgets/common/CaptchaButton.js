/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const CaptchaButton = (props) => {
    const { type, buttonStyle, buttonText, getCaptchaCode, countDown } = props;
    const [count, setCount] = useState(countDown || 60);
    const [timing, setTiming] = useState(false);
    // const [loading, setLoading] = useState(false);

    const onGetCaptcha = async () => {
        try {
            // setLoading(true);
            await getCaptchaCode();
            // setLoading(false);
            setTiming(true);
        } catch (error) {
            setTiming(false);
            // setLoading(false);
        }
    };

    const captchaTextRender = (paramsTiming, paramsCount) => (paramsTiming ? `${paramsCount} 秒后重新获取` : buttonText);

    useEffect(() => {
        let interval = 0;
        if (timing) {
            interval = setInterval(() => {
                setCount((preSecond) => {
                    if (preSecond <= 1) {
                        setTiming(false);
                        clearInterval(interval);
                        return countDown || 60;
                    }
                    return preSecond - 1;
                });
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [timing]);

    return (
        <Button
            type={type}
            style={buttonStyle}
            disabled={timing}
            // loading={loading}
            onClick={onGetCaptcha}
        >
            {captchaTextRender(timing, count)}
        </Button>
    );
};

CaptchaButton.propTypes = {
    getCaptchaCode: PropTypes.func.isRequired,
    // mobile: PropTypes.number.isRequired,
    countDown: PropTypes.number,
    buttonStyle: PropTypes.object,
    type: PropTypes.string,
    buttonText: PropTypes.string
};

CaptchaButton.defaultProps = {
    countDown: 60,
    buttonStyle: null,
    type: 'default',
    buttonText: '获取短信码'
};

export default CaptchaButton;
