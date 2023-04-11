const notFoundHandler = (req, h) => req.server.app.notFoundHandler(req, h);

const errorHandler = (req, h) => req.server.app.errorHandler(req, h);

const renderErrorPage = (req, h, errorCode) => req.server.app.renderErrorPage(req, h, errorCode);

const renderNotFoundPage = (req, h, errorCode) => req.server.app.renderNotFoundPage(req, h, errorCode);

module.exports = {
    notFoundHandler,
    errorHandler,
    renderErrorPage,
    renderNotFoundPage
};
