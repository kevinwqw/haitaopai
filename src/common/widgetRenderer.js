import ReactDOM from 'react-dom';

const find = require('lodash/find');

const widgetMap = {};

const getArgsAndStore = (element) => {
    const { children } = element;
    let dataElement = null;
    if (children && children.length > 0) {
        dataElement = find(children, { type: 'application/json' });
    }
    if (!dataElement || !dataElement.innerHTML) {
        return { args: {}, store: {} };
    }
    const { args, store } = JSON.parse(dataElement.innerHTML);
    return { args, store };
};

const renderWidget = async (element) => {
    const id = element.getAttribute('data-widget-id');
    const widget = widgetMap[id];

    if (!widget || element.getAttribute('data-render') === 'ready') {
        return;
    }
    element.setAttribute('data-render', 'ready');

    const container = find(element.children, { className: 'w' });
    const { args, store } = getArgsAndStore(element);

    let hasLoading = false;
    if (widget.renderMode === 'client' && widget.showLoading) {
        ReactDOM.render(widget.showLoading(), container);
        hasLoading = true;
    }

    const widgetContent = await widget.create(args, store, {});
    if (hasLoading) {
        ReactDOM.unmountComponentAtNode(container);
    }

    if (widget.renderMode === 'both' && ReactDOM.hydrate) {
        ReactDOM.hydrate(widgetContent.component, container);
    } else {
        ReactDOM.render(widgetContent.component, container);
    }
};

const getUnreadyWidgetElements = () => {
    const elements = document.getElementsByClassName('widget');
    const result = [];
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (element.getAttribute('data-render') !== 'ready') {
            result.push(element);
        }
    }
    return result;
};

const renderUnreadyWidgets = () => {
    const elements = getUnreadyWidgetElements();
    elements.forEach((element) => {
        renderWidget(element);
    });
};

const renderWidgets = function (widgets) {
    if (!widgets) {
        return;
    }

    Object.values(widgets).forEach((widget) => {
        widgetMap[widget.id] = widget;
    });

    renderUnreadyWidgets();
};

export { renderWidgets, renderUnreadyWidgets };
