const EnvUtil = require('./env-util');

const DEFAULT_PORT = 8080;

let configInstance = null;

const getConfig = (skipCache = false) => {
    if (configInstance && !skipCache) {
        return configInstance;
    }
    configInstance = {
        featureName: '',
        server: {
            host: EnvUtil.readEnvValue('HOST', '::'),
            port: EnvUtil.readIntegerEnvValue('PORT', DEFAULT_PORT),
            debug: EnvUtil.readBoolEnvValue('DEBUG', false)
        },
        secureCookie: EnvUtil.readBoolEnvValue('SECURE_COOKIE', true),
        keepAliveTimeout: EnvUtil.readIntegerEnvValue('KEEP_ALIVE_TIMEOUT', 75000),
        logLevel: EnvUtil.readEnvValue('LOGLEVEL', 'error'),
        password: EnvUtil.readEnvValue('AUTH_COOKIE_PASSWORD', 'password-should-be-32-characters'),
        errorHandler: null,
        rootDirectory: null,
        PageRenderer: null,
        AssetManager: null
    };
    return configInstance;
};

module.exports = getConfig;
