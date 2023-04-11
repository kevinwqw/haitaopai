import React from 'react';

const isEmpty = require('lodash/isEmpty');

export default (WidgetView, Store, StoreContext) => async (params, initialState, context) => {
    const store = new Store();
    const initialized = !isEmpty(initialState);

    if (initialized) {
        store.hydrate(initialState);
    } else if (store.init) {
        await store.init(params, context);
    }

    const widgetElement = React.createElement(WidgetView, null);

    return {
        component: React.createElement(StoreContext.Provider, { value: store }, widgetElement),
        store
    };
};
