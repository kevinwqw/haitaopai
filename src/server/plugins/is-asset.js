const folderRegex = /\/(assets|fonts|images|scripts|styles|vendors)\//;
const suffixRegex = /\.(js|css|map|ico|svg|jpg|png|gif|html|ashx)$/;

const isAssets = (url) => suffixRegex.test(url) || folderRegex.test(url);

/* eslint no-unused-vars: ["error", { "args": "none" }] */
const register = function (server, options) {
    server.ext('onRequest', (request, h) => {
        request.isAsset = isAssets(request.path);
        return h.continue;
    });
};

exports.plugin = {
    register,
    name: 'is-asset-plugin',
    version: '1.0.0'
};
