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
                renderer.addMainContentWidget(widgets.StorePage);
            })
        }
    });

    server.route({
        method: 'GET',
        path: '/best-discount',
        options: {
            handler: createHandler((renderer) => {
                renderer.addMainContentWidget(widgets.BestDiscountPage);
            })
        }
    });

    server.route({
        method: 'GET',
        path: '/best-seller',
        options: {
            handler: createHandler((renderer) => {
                renderer.addMainContentWidget(widgets.BestSellerPage);
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
        path: '/account/login',
        options: {
            handler: createHandler((renderer) => {
                renderer.addMainContentWidget(widgets.Login, { widgetName: 'login' });
            })
        }
    });

    server.route({
        method: 'GET',
        path: '/account/signup',
        options: {
            handler: createHandler((renderer) => {
                renderer.addMainContentWidget(widgets.Signup, { widgetName: 'signup' });
            })
        }
    });

    server.route({
        method: 'GET',
        path: '/account/password-reset',
        options: {
            handler: createHandler((renderer) => {
                renderer.addMainContentWidget(widgets.PasswordResetSimple, { widgetName: 'passwordReset' });
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
