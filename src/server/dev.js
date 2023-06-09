const generalConfig = {
    DEBUG: true,
    NODE_ENV: 'development',
    BASE_URL: 'http://8.218.164.217:8095',
    PORT: 8080,
    SECURE_COOKIE: false,
    URI: '127.0.0.1:80',
    AUTH_COOKIE_PASSWORD: 'KEVP6D9zkI31GNilVjtSp0rvJy00taKf'
};

const initDevConfig = () => {
    global.__SERVER_RENDERING__ = true;
    Object.entries(generalConfig).forEach(([key, value]) => {
        process.env[key] = value;
    });
};

initDevConfig();

require('./server');
