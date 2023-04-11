/* eslint-disable no-param-reassign */
const has = require('lodash/has');
const ReactDOMServer = require('react-dom/server');
const { isDevelopment } = require('../../common/env-util');

const emptyHtmlRegex = /^<!--[^<>]*-->$/;

const localeUrl = (request) => {
    const pathname = decodeURIComponent(request.url.pathname);
    const href = `${pathname}${request.url.search}`;
    const query = { ...request.query };
    return { pathname, query, href };
};

const isEmptyHtml = (html) => !html || html.match(emptyHtmlRegex);

const allowEmpty = (widget) => widget.renderOption && widget.renderOption.allowEmpty;

const getScript = (value) => {
    if (!value) {
        return '';
    }
    const data = value.replace(/<\/script>/g, '<\\/script>');
    return `<script type="application/json">${data}</script>`;
};

const renderClientWidget = (widget, args) => {
    const data = JSON.stringify({ args, store: {} });
    const props = {
        id: widget.id,
        html: `${getScript(data)}<div class="w"></div>`
    };
    return props;
};

const createWidget = async (widget, args, context) => widget.create(args, {}, context);

const renderServerWidget = async (widget, args, context) => {
    const result = await createWidget(widget, args, context);
    const { component } = result;
    const outputHtml = ReactDOMServer.renderToStaticMarkup(component);

    if (!allowEmpty(widget) && isEmptyHtml(outputHtml)) {
        return {};
    }

    return {
        id: widget.id,
        html: `${outputHtml}`,
        ready: true
    };
};

const renderIsomorphicWidget = async (widget, args, context) => {
    const result = await createWidget(widget, args, context);
    const { component } = result;
    const { store } = result;
    const outputHtml = ReactDOMServer.renderToStaticMarkup(component);

    if (!allowEmpty(widget) && isEmptyHtml(outputHtml)) {
        return {};
    }

    delete store.contextId;
    const isStorefilled = Object.keys(store).length > 1;
    const data = JSON.stringify({ args: isStorefilled ? {} : args, store });
    return {
        id: widget.id,
        html: `${getScript(data)}<div class="w">${outputHtml}</div>`
    };
};

const startRender = async (widget, args, context) => {
    const renderMode = widget.renderMode.toLowerCase();
    switch (renderMode) {
        case 'client':
            return renderClientWidget(widget, args, context);
        case 'server':
            return renderServerWidget(widget, args, context);
        default:
            return renderIsomorphicWidget(widget, args, context);
    }
};

const renderWidget = async (request, widget, args) => {
    const context = {
        contextId: request.contextId,
        url: localeUrl(request)
    };

    if (isDevelopment() && request.query.renderMode === 'client') {
        widget.renderMode = 'client';
    }

    const value = await startRender(widget, args, context);
    if (!value || !has(value, 'html')) {
        return null;
    }

    return value;
};

async function renderWidgets(request, widgets) {
    const allTasks = widgets.map((task) =>
        renderWidget(request, task.widget, task.args).then((result) => {
            if (!result) {
                return null;
            }

            // eslint-disable-next-line no-param-reassign
            result.options = task.options;
            return { tag: task.tag, widget: result };
        })
    );
    const taskResult = await Promise.all(allTasks);

    const result = {};
    taskResult.forEach((task) => {
        if (!task) {
            return;
        }

        let value = result[task.tag];
        if (!value) {
            result[task.tag] = [];
            value = result[task.tag];
        }
        value.push(task.widget);
    });
    return result;
}

const renderWidgetToString = (widget) => {
    if (!widget || !(widget.className || widget.html)) {
        return null;
    }

    const { id, html, ready } = widget;

    if (ready) {
        return `<div class="widget" data-widget-id="${id}" data-render="ready">${html}</div>`;
    }
    return `<div class="widget" data-widget-id="${id}">${html}</div>`;
};

const renderWidgetsToString = (widgets) => {
    if (!widgets || widgets.length < 1) {
        return '';
    }

    return widgets.map((widget) => renderWidgetToString(widget)).join('');
};

module.exports = {
    renderWidgets,
    renderWidgetToString,
    renderWidgetsToString
};
