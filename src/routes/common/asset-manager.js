const { getFileUrl } = require('./asset-helper');
const { getProjectPackageName, getPackageJsonVersion } = require('../../common/get-feature-info');
const { isDevelopment } = require('../../common/env-util');

const fundamentalScripts = [
    { name: 'prop-types', file: isDevelopment() ? 'prop-types.js' : 'prop-types.min.js' },
    { name: 'react', file: isDevelopment() ? 'react.development.js' : 'react.production.min.js' },
    { name: 'react-dom', file: isDevelopment() ? 'react-dom.development.js' : 'react-dom.production.min.js' },
    { name: 'react-is', file: isDevelopment() ? 'react-is.development.js' : 'react-is.production.min.js' },
    { name: 'antd', file: 'antd.min.js' },
    { name: 'mobx', file: isDevelopment() ? 'mobx.umd.development.js' : 'mobx.umd.production.min.js' },
    {
        name: 'mobx-react-lite',
        file: isDevelopment() ? 'mobxreactlite.umd.development.js' : 'mobxreactlite.umd.production.min.js'
    }
];

class AssetManager {
    constructor() {
        this._projectPackageName = getProjectPackageName();
        this._fundamentalJs = [];
        this._fundamentalStyles = [];
        this._featureJs = [];
        this._featureStyles = [];
    }

    init() {
        fundamentalScripts.forEach((item) => {
            this._addScript(this._fundamentalJs, getFileUrl(item));
        });
    }

    _addScript(scripts, url) {
        if (url && scripts.indexOf(url) < 0) {
            scripts.push(url);
        }
    }

    _addStyle(styles, url) {
        if (url && styles.indexOf(url) < 0) {
            styles.push(url);
        }
    }

    addFeatureAssets() {
        const fileVersion = getPackageJsonVersion();
        this._addScript(
            this._featureJs,
            isDevelopment() ? `/assets/bundle.js` : `/assets/bundle.min.${fileVersion}.js`
        );
        this._addStyle(this._featureStyles, `/assets/index.${fileVersion}.css`);
    }

    getTopScriptUrls() {
        return [];
    }

    getBottomScriptUrls() {
        return [...this._fundamentalJs, ...this._featureJs];
    }

    getStylesUrls() {
        return [...this._fundamentalStyles, ...this._featureStyles];
    }
}

module.exports = AssetManager;
