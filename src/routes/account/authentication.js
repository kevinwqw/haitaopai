/* eslint-disable camelcase */
const axios = require('axios');
const config = require('../../server/config');
const { buildLoginUrl } = require('../common/utils');

module.exports = async (server) => {
    server.auth.strategy('session', 'cookie', {
        cookie: {
            name: 'sid_haitaopai',
            password: config.password,
            isSecure: config.isSecure,
            path: '/',
            ttl: 8 * 3600 * 1000
        },
        redirectTo: (request) => {
            if (request.path !== '/account/login') {
                const { url } = request;
                const nextUrl = url.pathname;
                return buildLoginUrl(nextUrl);
            }
            return buildLoginUrl();
        },
        appendNext: false
    });

    server.auth.default({ strategy: 'session', mode: 'try' });

    server.route({
        method: 'POST',
        path: '/login/callback',
        options: {
            auth: false,
            handler: async (request) => {
                const client = axios.create({ baseURL: config.baseUrl });
                const { email, password } = request.payload;
                const requestData = { email, password };

                const requestConfig = {
                    headers: {
                        'content-type': 'application/json'
                    }
                };

                try {
                    const result = await client.post('/user/login', JSON.stringify(requestData), requestConfig);
                    const { token } = result.data.data;
                    request.cookieAuth.set({
                        authToken: `Bearer ${token}`
                    });

                    const isLogin = token !== undefined;
                    return { success: true, data: { isLogin } };
                } catch (error) {
                    if (error.response?.status === 503) {
                        return { success: false, errorMsg: '网络异常，请稍后再试' };
                    }

                    return { success: false, errorMsg: '账号或密码错误，请重新输入' };
                }
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/logout',
        options: {
            auth: false,
            handler: async (request, h) => {
                request.cookieAuth.clear();
                return h.redirect('/');
            }
        }
    });
};
