/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

const path = require('path');
const fs = require('fs');
const getConfig = require('./config');

let projectPackageName = null;
const getProjectPackageName = () => {
    if (projectPackageName) {
        return projectPackageName;
    }
    const { rootDirectory } = getConfig();
    const packageJsonFile = path.join(rootDirectory, 'package.json');
    const instance = require(packageJsonFile);
    projectPackageName = instance.name;

    return projectPackageName;
};

const getPackageJsonVersion = () => {
    const { rootDirectory } = getConfig();
    const packageJsonFilePath = path.join(rootDirectory, 'package.json');
    const packageJsonFile = JSON.parse(fs.readFileSync(packageJsonFilePath, 'utf8'));
    const fileVersion = packageJsonFile.version.split('.').join('');

    return fileVersion;
};

module.exports = { getProjectPackageName, getPackageJsonVersion };
