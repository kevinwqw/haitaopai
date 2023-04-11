const routes = require('./routes');
const services = require('./bff');
const widgets = require('./widgets').default;

module.exports = {
    featureName: 'haitaopai',
    routes,
    services,
    widgets
};
