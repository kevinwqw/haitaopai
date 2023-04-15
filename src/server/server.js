/* eslint-disable no-console */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const path = require('path');
const has = require('lodash/has');
const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const H2O2 = require('@hapi/h2o2');
const Blipp = require('blipp');
const Cookie = require('@hapi/cookie');
const Context = require('./plugins/context');
const IsAsset = require('./plugins/is-asset');
const Security = require('./plugins/security');
const ErrorPages = require('./plugins/error-pages');
const SetHeaders = require('./plugins/set-headers');
const { registerService } = require('./register-services');

// const prodConfig = require('./prod-config');
const getConfig = require('../common/config');

const initConfig = () => {
    const register = require('@babel/register');
    register({ only: [/server/, /widgets/, /common/] });
    global.__SERVER_RENDERING__ = true;
    // Object.entries(prodConfig).forEach(([key, value]) => {
    //     process.env[key] = value;
    // });
};

initConfig();

const AssetManager = require('../routes/common/asset-manager');
const PageRenderer = require('../routes/common/page-renderer');
const errorHandlers = require('../routes/common/error-handlers');
const setupAuth = require('../routes/account/authentication');

const dirname = __dirname;

const registerPlugins = async function (server) {
    await server.register([Inert, H2O2]);

    // Register custom plugins
    const customPlugins = [ErrorPages, Context, IsAsset, Cookie, Security, SetHeaders];
    await server.register(customPlugins);

    const blippPlugin = {
        plugin: Blipp,
        options: { showStart: false }
    };
    await server.register([blippPlugin]);
};

const registerFeature = (server, feature) => {
    if (!feature) {
        return;
    }

    if (feature.routes) {
        feature.routes(server);
    }

    if (feature.services) {
        registerService({ services: feature.services });
    }
};

const callLocalService = async (h, name, payload, contextId) => {
    try {
        const serviceKey = name;
        const service = global.services[serviceKey];
        const result = await service(payload.args || [], contextId);
        if (result.success === false) {
            const { error } = result;
            result.error = { code: error.code, message: error.message };
            return h.response(result).type('application/json').code(result.error.code);
        }

        return h.response(result).type('application/json');
    } catch (error) {
        const data = { success: false, error: { code: 500, message: `Call local service error!` } };
        return h.response(data).type('application/json').code(500);
    }
};

const registerRoutes = (server) => {
    const { rootDirectory } = getConfig();
    server.route({
        method: 'POST',
        path: '/services',
        options: {
            handler: (request, h) => {
                const { name } = request.query;
                const { payload, contextId } = request;
                return callLocalService(h, name, payload, contextId);
            },
            timeout: {
                server: false,
                socket: 600000
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/{param*}',
        options: {
            auth: false,
            handler: {
                directory: {
                    path: [
                        path.join(rootDirectory, 'dist'),
                        path.join(rootDirectory, 'public'),
                        path.join(rootDirectory, 'public', 'assets'),
                        path.join(rootDirectory, 'public', 'assets', 'fonts')
                    ],
                    listing: false,
                    redirectToSlash: true,
                    lookupCompressed: true
                }
            }
        }
    });
};

const getFeature = () => {
    const config = getConfig();
    const codeFolder = 'src';
    const modulePath = path.join(config.rootDirectory, codeFolder, 'index.js');

    const instance = require(modulePath);
    if (has(instance, 'featureName')) return instance;

    return null;
};

const tryStartServer = async function (server) {
    server.log(['info'], 'Try to start server...');

    try {
        await server.start();
    } catch (err) {
        server.log(['error'], err);
    }

    console.log(server.plugins.blipp.text());

    server.log(`Server listening at: ${server.info.uri}`);
};

const startServer = async function ({ afterPlugin }, extendedConfig) {
    const config = getConfig();
    Object.assign(config, extendedConfig);

    const options = {
        host: config.server.host,
        port: config.server.port,
        router: { isCaseSensitive: false, stripTrailingSlash: true },
        routes: { timeout: { server: 300000, socket: 310000 } },
        state: { isSecure: config.secureCookie, isSameSite: 'Lax' }
    };

    const server = Hapi.server(options);
    server.listener.keepAliveTimeout = config.keepAliveTimeout;

    await registerPlugins(server);

    if (afterPlugin) {
        afterPlugin(server);
    }

    registerFeature(server, getFeature());
    registerRoutes(server);
    await tryStartServer(server);
    return server;
};

startServer(
    {
        afterPlugin: async (server) => {
            await setupAuth(server);
        }
    },
    {
        rootDirectory: dirname.substring(0, dirname.lastIndexOf('src') - 1),
        AssetManager,
        PageRenderer,
        ...errorHandlers
    }
);
