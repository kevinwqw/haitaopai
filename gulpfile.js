/* eslint-disable */
const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const gulpLess = require('gulp-less');
const rename = require('gulp-rename');
const PluginError = require('plugin-error');
const replace = require('gulp-replace');
const LessAutoprefix = require('less-plugin-autoprefix');
const LessPluginCleanCSS = require('less-plugin-clean-css');
const gulpStylelint = require('gulp-stylelint');

const autoprefix = new LessAutoprefix({
    browsers: ['ie 11', 'Safari 8', 'Firefox 38', 'Chrome 47']
});

const cleanCSSPlugin = new LessPluginCleanCSS({ advanced: true });

const getStyleLintFunc = (gulp, path) => () => {
    const config = {
        fix: true,
        failAfterError: true,
        reporters: [{ formatter: 'string', console: true }]
    };

    return gulp.src(`${path}/src/**/*.less`).pipe(gulpStylelint(config));
};

const getCopyFunc = function (gulp, src, dest) {
    return function () {
        return gulp.src(src).pipe(gulp.dest(dest));
    };
};

const getCleanFunc = function (gulp, path) {
    return function () {
        return gulp.src(path, { read: false, allowEmpty: true }).pipe(rimraf({ force: true }));
    };
};

const emitLessError = function (err) {
    process.nextTick(() => {
        throw new PluginError('gulp-less', err);
    });
};

const getCompileLessFunc = function (gulp, _path, entry) {
    const packageJsonFilePath = path.join(__dirname, 'package.json');
    const packageJsonFile = JSON.parse(fs.readFileSync(packageJsonFilePath, 'utf8'));
    const fileVersion = packageJsonFile.version.split('.').join('');
    const plugins = [autoprefix, cleanCSSPlugin];
    return function () {
        return gulp
            .src(`${_path}/${entry}`)
            .pipe(gulpLess({ plugins, javascriptEnabled: true }).on('error', emitLessError))
            .pipe(rename({ suffix: `.${fileVersion}` }))
            .pipe(replace('../font', '/font'))
            .pipe(gulp.dest(`${_path}/dist/assets/`));
    };
};

const commonFiles = [
    { name: 'react', file: ['umd/**/*'] },
    { name: 'react-dom', file: ['umd/react-dom.*'] },
    { name: 'react-is', file: ['umd/react-is.*'] },
    { name: 'prop-types', file: ['prop-types.*'] },
    { name: 'antd', file: ['dist/antd.min.*'] },
    { name: 'mobx', file: ['dist/mobx.umd.*'] },
    { name: 'mobx-react-lite', file: ['dist/mobxreactlite.umd.*'] }
];

const getJsonFile = function (jsonPath) {
    if (fs.existsSync(jsonPath)) {
        const data = fs.readFileSync(jsonPath, 'utf8');
        return JSON.parse(data);
    }

    return null;
};

const getModuleInfo = function (dirname, moduleName) {
    const jsonFile = getJsonFile(path.join(dirname, 'node_modules', moduleName, 'package.json'));
    if (!jsonFile) {
        console.error(`Cannot find ${moduleName}`);
        return null;
    }

    return jsonFile;
};

const copyPackageAssets = (dir, gulp, packageName, files) => (cb) => {
    const info = getModuleInfo(dir, packageName);
    if (!info) {
        return cb();
    }
    const src = files.map((file) => path.join(dir, 'node_modules', packageName, file));
    const moduleName = packageName.startsWith('@') ? packageName.substr(packageName.lastIndexOf('/') + 1) : packageName;
    const outputPath = path.join(dir, `./public/assets/${moduleName}/${info.version}/`);
    return gulp.src(src).pipe(gulp.dest(outputPath));
};

const getCopyFeatureStaticFiles = (gulp, dir) => {
    const name = 'copy-feature-static-files';
    const src = path.join(dir, 'src/statics/*');
    const output = path.join(dir, 'public', 'images');
    gulp.task(name, getCopyFunc(gulp, src, output));
    return name;
};

const getCopyProductIconFile = (gulp, dir) => {
    const name = 'copy-product-icon-file';
    const src = path.join(dir, 'src/statics/icon/favicon.ico');
    const output = path.join(dir, 'public');
    gulp.task(name, getCopyFunc(gulp, src, output));
    return name;
};

const getCopyCommonFiles = (gulp, dir) => {
    const tasks = commonFiles.map((info) => {
        const name = `copy-${info.name}`;
        gulp.task(name, copyPackageAssets(dir, gulp, info.name, info.file));
        return name;
    });
    tasks.push(getCopyFeatureStaticFiles(gulp, dir));
    tasks.push(getCopyProductIconFile(gulp, dir));
    const src = '/node_modules/haitaopai/public/**/*';
    gulp.task('copy-global-assets', getCopyFunc(gulp, path.join(dir, src), path.join(dir, 'public')));
    tasks.push('copy-global-assets');
    return gulp.parallel(tasks);
};

const getServiceList = (serviceModule) => {
    const serviceList = [];
    Object.entries(serviceModule).forEach(([key, service]) => {
        const ServiceClass = service.service;
        const executeFunc = ServiceClass.prototype.execute;
        const exeFuncString = executeFunc.toString();
        const left = exeFuncString.indexOf('(') + 1;
        const right = exeFuncString.indexOf(')');
        let params = exeFuncString.substr(left, right - left).split(',');
        params = params.filter((name) => name.length > 0);
        serviceList.push(`
    ${service.name}(${params}) {
        return callService('${service.name}', [${params}], this._contextId);
    }`);
    });

    return serviceList;
};

const getCode = (serviceList) => `// Auto generated code

import callService from './callService';

class Sdk {
    constructor(contextId) {
        this._contextId = contextId;
    }
${serviceList.join('\n')}
}

export default Sdk;
`;

const generateCode = (dir, callback, bffPath = '/src/bff', sdkPath = '/src/widgets') => {
    const bffFullPath = path.join(dir, bffPath);
    const serviceModule = require(bffFullPath);
    if (!serviceModule) {
        return;
    }

    const serviceList = getServiceList(serviceModule);
    const code = getCode(serviceList);
    fs.writeFile(path.join(dir, sdkPath, 'sdk.js'), code, callback);
};

const getBffFunc = (dir, bffPath, sdkPath) => {
    return (cb) => {
        generateCode(dir, cb, bffPath, sdkPath);
    };
};

const initGulpTasks = (gulp, dirname) => {
    gulp.task('clean', getCleanFunc(gulp, './public'));
    gulp.task('copy-common-files', getCopyCommonFiles(gulp, dirname));
    gulp.task('less2css', getCompileLessFunc(gulp, dirname, './src/widgets/index.less'));
    gulp.task('watch-less', () => gulp.watch('src/**/*.less', gulp.parallel('less2css')));
    gulp.task('lint-style', getStyleLintFunc(gulp, dirname));
    gulp.task('generate-bff-sdk', getBffFunc(dirname, '/src/bff'));
};

initGulpTasks(gulp, __dirname);
