const { createHandler, notFoundHandler, errorHandler, renderErrorPage, renderNotFoundPage } = require('./common/utils');
const widgets = require('../widgets').default;
const config = require('../server/config');

const userAuth = { strategy: 'session', mode: 'required', scope: ['user'] };

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
            handler: createHandler((renderer, assetManager, request) => {
                const { auth } = request;
                const phone = auth.artifacts?.phone;
                renderer.addMainContentWidget(widgets.HomePage, { phone });
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
        path: '/store/{brandId}',
        options: {
            handler: createHandler((renderer, assetManager, request) => {
                const { auth } = request;
                const phone = auth.artifacts?.phone;
                const { brandId } = request.params;
                renderer.addMainContentWidget(widgets.BrandCenter, { brandId, phone });
            })
        }
    });

    server.route({
        method: 'GET',
        path: '/help-center',
        options: {
            handler: createHandler((renderer) => {
                renderer.addMainContentWidget(widgets.HelpCenter, { widgetName: 'helpCenter' });
            })
        }
    });

    server.route({
        method: 'GET',
        path: '/user-center/{activeTabName}',
        options: {
            auth: userAuth,
            handler: createHandler((renderer, assetManager, request) => {
                const { activeTabName } = request.params;
                const { auth } = request;
                const inviteCode = auth.artifacts?.inviteCode;
                renderer.addSinglePageContentWidget(widgets.UserCenter, {
                    activeTabName,
                    inviteCode,
                    exchangeRate: config.exchangeRate
                });
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
