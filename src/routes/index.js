const { createHandler, notFoundHandler, errorHandler, renderErrorPage, renderNotFoundPage } = require('./common/utils');
const widgets = require('../widgets').default;

module.exports = function (server) {
    const { app } = server;
    app.notFoundHandler = notFoundHandler;
    app.errorHandler = errorHandler;
    app.renderErrorPage = renderErrorPage;
    app.renderNotFoundPage = renderNotFoundPage;

    server.route({
        method: 'GET',
        path: '/',
        options: {
            handler: createHandler((renderer) => {
                renderer.addMainContentWidget(widgets.HomePage);
            })
        }
    });

    server.route({
        method: 'GET',
        path: '/stores',
        options: {
            handler: createHandler((renderer) => {
                renderer.addMainContentWidget(widgets.Stores);
            })
        }
    });

    server.route({
        method: 'GET',
        path: '/best-seller',
        options: {
            handler: createHandler((renderer) => {
                renderer.addMainContentWidget(widgets.BestSeller);
            })
        }
    });

    server.route({
        method: 'GET',
        path: '/notes',
        options: {
            handler: createHandler((renderer) => {
                renderer.addMainContentWidget(widgets.Notes);
            })
        }
    });

    server.route({
        method: 'GET',
        path: '/article/{noteId}',
        options: {
            handler: createHandler((renderer, assetManager, request) => {
                const { noteId } = request.params;
                renderer.addMainContentWidget(widgets.ShoppingArticle, { noteId });
            })
        }
    });

    server.route({
        method: 'GET',
        path: '/transportation',
        options: {
            handler: createHandler((renderer) => {
                renderer.addMainContentWidget(widgets.Transportation);
            })
        }
    });

    server.route({
        method: 'GET',
        path: '/about',
        options: {
            handler: createHandler((renderer) => {
                renderer.addMainContentWidget(widgets.About);
            })
        }
    });

    server.route({
        method: 'GET',
        path: '/not-found',
        options: {
            handler: errorHandler
        }
    });

    server.route({
        method: 'GET',
        path: '/error',
        options: {
            handler: errorHandler
        }
    });
};
