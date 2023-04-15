const util = require('../common/env-util');

module.exports = {
    password: util.readEnvValue('AUTH_COOKIE_PASSWORD', 'KEVP6D9zkI31GNilVjtSp0rvJy00taKf'),
    isSecure: util.readBoolEnvValue('SECURE_COOKIE', false),
    uri: util.readEnvValue('URI', '127.0.0.1:80')
    // baseUrl: util.readEnvValue('BASE_URL')
};
