import React from 'react';
import { Button, Result } from 'antd';
import { useStore } from '../context';

const ErrorPage = () => {
    const store = useStore();
    const { errorCode, errorMsg } = store;

    return (
        <Result
            style={{ padding: '20vh 32px' }}
            status={errorCode}
            title={errorCode}
            subTitle={errorMsg}
            extra={(
                <Button type="primary" href="/">
                    返回首页
                </Button>
            )}
        />
    );
};

export default ErrorPage;
