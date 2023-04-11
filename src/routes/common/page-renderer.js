const { renderWidgets, renderWidgetsToString, renderWidgetToString } = require('./widget-renderer');
const renderPageHtml = require('./render-page-html');
const getConfig = require('../../common/config');

const isPjaxRequest = (request) => !!(request && request.headers && request.headers['x-pjax'] === '1');

class PageRenderer {
    constructor(request, h, assetManager) {
        this._request = request;
        this._h = h;
        this._assetManager = assetManager;
        this._widgets = [];
        this._metas = [];
        this.renderWidgetsToString = renderWidgetsToString;
        this.renderWidgetToString = renderWidgetToString;
        this._pjax = isPjaxRequest(request);
    }

    addHeaderWidget(widget, args) {
        if (this._pjax) {
            return;
        }
        this.addWidget('header', widget, args);
    }

    addFooterWidget(widget, args) {
        if (this._pjax) {
            return;
        }
        this.addWidget('footer', widget, args);
    }

    addMainContentWidget(widget, args, options = null) {
        this.addWidget('mainContent', widget, args, options);
    }

    addSinglePageContentWidget(widget, args, options = null) {
        this.addWidget('singlePageContent', widget, args, options);
    }

    addMainNavWidget(widget, args) {
        this.addWidget('leftNav', widget, args);
    }

    getHeaderContent(widgets) {
        let headerContent = '';
        if (widgets.header && widgets.header.length > 0) {
            headerContent = `<header>${this.renderWidgetsToString(widgets.header)}</header>`;
        }
        return headerContent;
    }

    getFooterContent(widgets) {
        let footerContent = '';
        if (widgets.footer && widgets.footer.length > 0) {
            footerContent = `<footer>${this.renderWidgetsToString(widgets.footer)}</footer>`;
        }
        return footerContent;
    }

    setTitle(title) {
        this._title = title;
    }

    addMeta(name, content) {
        this._metas.push({ name, content });
    }

    addWidget(tag, widget, args, options = null) {
        this._widgets.push({
            tag,
            widget,
            args,
            options
        });
    }

    async render() {
        try {
            const widgetResults = await renderWidgets(this._request, this._widgets, this._assetManager);
            const contentHtml = this.getHtmlContent(widgetResults);
            const data = {
                title: this._title,
                metas: this._metas,
                stylesUrls: this._assetManager.getStylesUrls(),
                topScriptUrls: this._assetManager.getTopScriptUrls(),
                bottomScriptUrls: this._assetManager.getBottomScriptUrls(),
                bodyHtml: contentHtml
            };
            if (this._pjax) {
                return this._h.response(data).type('application/json');
            }
            const html = renderPageHtml(this._request, data);
            return this._h.response(html);
        } catch (error) {
            return getConfig().errorHandler(this._request, this._h);
        }
    }

    getPjaxContent(widgets) {
        if (widgets.singlePageContent && widgets.singlePageContent.length > 0) {
            return `
                <div class="single-page-content">
                    ${this.renderWidgetsToString(widgets.singlePageContent)}
                </div>
            `;
        }

        let pjaxContent = '';
        if (widgets.mainContent && widgets.mainContent.length > 0) {
            const mainContent = `
            <div class="main-content">
                ${this.renderWidgetsToString(widgets.mainContent)}
                ${this.getFooterContent(widgets)}
            </div>
            `;

            if (widgets.leftNav && widgets.leftNav.length > 0) {
                pjaxContent = `
                <div class="main-container">
                    <div class="main-nav">${this.renderWidgetsToString(widgets.leftNav)}</div>
                    ${mainContent}
                </div>`;
            } else {
                pjaxContent = `
                <div class="main-container">
                    ${mainContent}
                </div>`;
            }
        }

        return pjaxContent;
    }

    getHtmlContent(widgets) {
        const pjaxContent = this.getPjaxContent(widgets);

        if (this._pjax) {
            return pjaxContent;
        }

        return `
        <div class="main-body">
            ${this.getHeaderContent(widgets)}
            <div id="pjax-container">${pjaxContent}</div>
        </div>`;
    }

    getLastLoadScriptUrls() {
        return null;
    }
}

module.exports = PageRenderer;
