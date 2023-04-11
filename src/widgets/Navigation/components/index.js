import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../context';

const Navigation = () => {
    const store = useStore();
    const { widgetName } = store;

    return (
        <div id="navigation-widget">
            <span>{widgetName}</span>
        </div>
    );
};

export default observer(Navigation);
