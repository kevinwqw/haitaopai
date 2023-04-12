const dayjs = require('dayjs');
const AssetManager = require('./asset-manager');
const PageRenderer = require('./page-renderer');

const widgets = require('../../widgets').default;

const UNAUTHORIZED_STATUS_CODE = 403;
const NOT_FOUND = 404;
const INTERNAL_ERROR = 500;

const createManagers = (request, h) => {
    const assetManager = new AssetManager();
    assetManager.init();
    assetManager.addFeatureAssets();

    const renderer = new PageRenderer(request, h, assetManager);
    renderer.setTitle('海淘派');
    return { assetManager, renderer };
};

const getUseInfo = (request) => {
    const { auth } = request;
    if (!auth.isAuthenticated) {
        return null;
    }

    return auth.artifacts;
};

const createHandler = (addWidgets) => async (request, h) => {
    const { assetManager, renderer } = createManagers(request, h);
    const userInfo = getUseInfo(request);
    const phone = userInfo ? userInfo.phone : null;
    renderer.addHeaderWidget(widgets.GlobalHeader, { phone });
    if (addWidgets) {
        await addWidgets(renderer, assetManager, request);
    }

    return renderer.render();
};

const addErrorWidget = (title, errorCode, errorMsg) => (renderer) => {
    renderer.setTitle(title);
    renderer.addSinglePageContentWidget(widgets.ErrorPage, { errorCode, errorMsg });
};

const notFoundHandler = async (request, h) => {
    const response = await createHandler(addErrorWidget('未找到', 404, '此页面未找到。'))(request, h);
    return response.code(NOT_FOUND);
};

const renderErrorPage = async (request, h, errorCode) => {
    if (errorCode === UNAUTHORIZED_STATUS_CODE) {
        const response = await createHandler(addErrorWidget('未授权', errorCode, '你没有此页面的访问权限。'))(request, h);
        return response.code(errorCode);
    }

    if (errorCode === NOT_FOUND) {
        return notFoundHandler(request, h);
    }

    const response = await createHandler(addErrorWidget('错误', errorCode, '服务器发生了错误。'))(request, h);
    return response.code(errorCode);
};

const renderNotFoundPage = async (request, h) => renderErrorPage(request, h, NOT_FOUND);

const errorHandler = async (request, h) => {
    const statusCode = request.response?.output?.statusCode || INTERNAL_ERROR;
    return renderErrorPage(request, h, statusCode);
};

const isAccountExpired = (expireDate) => {
    if (!expireDate) {
        return true;
    }
    const d = new Date(expireDate).getTime();
    if (!d || d < dayjs().endOf('day').toDate().getTime()) {
        return true;
    }

    return false;
};

const buildLoginUrl = (returnUrl) => {
    if (!returnUrl) {
        return '/account/login';
    }

    return `/account/login?next=${encodeURIComponent(returnUrl)}`;
};

const isLocalRelativeUrl = (value) => {
    if (!value) {
        return false;
    }

    if (value.startsWith('/') && !value.startsWith('//')) {
        return true;
    }

    return false;
};

module.exports = {
    createHandler,
    notFoundHandler,
    renderErrorPage,
    renderNotFoundPage,
    errorHandler,
    isAccountExpired,
    buildLoginUrl,
    isLocalRelativeUrl
};
